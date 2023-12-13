// This file is adapted from code inside TypeScript internals. The goal of this
// file is to be access the `TypeMapper`, which is an internal data structure
// that the typechecker uses to map generic type variables like `T` in `T[]`
// into concrete types like `number[]`.
import * as ts from 'typescript'

export const enum TypeMapKind {
  Simple,
  Array,
  Deferred,
  Function,
  Composite,
  Merged,
}

export type TypeMapper =
  | { kind: TypeMapKind.Simple; source: ts.Type; target: ts.Type }
  | {
      kind: TypeMapKind.Array
      sources: readonly ts.Type[]
      targets: readonly ts.Type[] | undefined
    }
  | {
      kind: TypeMapKind.Deferred
      sources: readonly ts.Type[]
      targets: (() => ts.Type)[]
    }
  | {
      kind: TypeMapKind.Function
      func: (t: ts.Type) => ts.Type
      debugInfo?: () => string
    }
  | {
      kind: TypeMapKind.Composite | TypeMapKind.Merged
      mapper1: TypeMapper
      mapper2: TypeMapper
    }

export function typeMapperToString(
  checker: ts.TypeChecker,
  mapper: TypeMapper | undefined
): string {
  if (!mapper) {
    return 'undefined'
  }
  switch (mapper.kind) {
    case TypeMapKind.Simple:
      return JSON.stringify({
        kind: mapper.kind,
        source: checker.typeToString(mapper.source),
        target: checker.typeToString(mapper.target),
      })
    case TypeMapKind.Array:
      return JSON.stringify({
        kind: mapper.kind,
        sources: mapper.sources.map(tpe => checker.typeToString(tpe)),
        targets: (mapper.targets || []).map(tpe => checker.typeToString(tpe)),
      })
    case TypeMapKind.Composite:
      return JSON.stringify({
        kind: mapper.kind,
        mapper1: typeMapperToString(checker, mapper.mapper1),
        mapper2: typeMapperToString(checker, mapper.mapper2),
      })
    default:
      return JSON.stringify(mapper)
  }
}

export function getMappedType(
  checker: ts.TypeChecker,
  type: ts.Type,
  mapper: TypeMapper | undefined
): ts.Type {
  if (!mapper) {
    return type
  }
  switch (mapper.kind) {
    case TypeMapKind.Simple:
      return type.symbol === mapper.source.symbol ? mapper.target : type
    case TypeMapKind.Array: {
      const sources = mapper.sources
      const targets = mapper.targets
      for (let index = 0; index < sources.length; index++) {
        if (type.symbol === sources[index].symbol) {
          return targets
            ? targets[index]
            : checker.getTypeFromTypeNode(
                ts.factory.createTypeLiteralNode(undefined)
              )
        }
      }
      return type
    }
    case TypeMapKind.Deferred: {
      const sources = mapper.sources
      const targets = mapper.targets
      for (let index = 0; index < sources.length; index++) {
        if (type.symbol === sources[index].symbol) {
          return targets[index]()
        }
      }
      return type
    }
    case TypeMapKind.Function:
      return mapper.func(type)
    case TypeMapKind.Composite:
    case TypeMapKind.Merged:
      return getMappedType(
        checker,
        getMappedType(checker, type, mapper.mapper1),
        mapper.mapper2
      )
  }
}

export function getTypeMapper(signature: ts.Signature): TypeMapper | undefined {
  return (signature as any)?.mapper as TypeMapper | undefined
}

export function getParameterTypes(
  checker: ts.TypeChecker,
  signature: ts.Signature
): (ts.Type | null)[] {
  const mapper = getTypeMapper(signature)
  if (!mapper) {
    return signature.parameters.flatMap(parameter =>
      parameter.valueDeclaration
        ? [checker.getTypeAtLocation(parameter.valueDeclaration)]
        : []
    )
  }
  return signature.parameters.map(parameter =>
    parameter.valueDeclaration
      ? getMappedType(
          checker,
          checker.getTypeAtLocation(parameter.valueDeclaration),
          mapper
        )
      : null
  )
}

// In some cases, `tpe.symbol.valueDeclaration` is undefined but we can recover
// the correct value declaration by finding the parent of a property. This may
// be caused by a bug in the tsc API where `valueDeclaration` is not correctly
// forwarded for mapped types. Either way, this function fixes an important test
// case in the snapshots. This approach does not work for alias types where the
// property is not a direct child of the alias, but we guard against this case
// by checking that the symbol of the value declaration is the same as the
// symbol of the type.
function correctedValueDeclaration(tpe: ts.Type): ts.Node | undefined {
  if (tpe.symbol?.valueDeclaration) {
    return tpe.symbol.valueDeclaration
  }
  for (const property of tpe.getProperties()) {
    const parent = property?.valueDeclaration?.parent
    if (parent !== undefined) {
      return parent
    }
  }
  return undefined
}

export function newTypeMap(
  checker: ts.TypeChecker,
  old: TypeMapper | undefined,
  tpe: ts.Type
): TypeMapper | undefined {
  const typeReference = asTypeReference(tpe)
  if (typeReference?.typeArguments && typeReference.typeArguments.length > 0) {
    const valueDeclaration = correctedValueDeclaration(tpe)
    if (valueDeclaration) {
      const valueDeclarationType = checker.getTypeAtLocation(valueDeclaration)
      if (valueDeclarationType.symbol !== tpe.symbol) {
        return old
      }
      const sources = asTypeReference(valueDeclarationType)?.typeArguments || []
      const targets = typeReference.typeArguments.map(
        typeArgument => typeArgument
      )
      if (targets.length !== sources?.length) {
        return old
      }
      const newMapper: TypeMapper = {
        kind: TypeMapKind.Array,
        sources,
        targets,
      }
      if (old === undefined) {
        return newMapper
      }
      return {
        kind: TypeMapKind.Composite,
        mapper1: old,
        mapper2: newMapper,
      }
    }
  }
  return old
}

export function asTypeReference(tpe: ts.Type): ts.TypeReference | undefined {
  if (tpe.flags & ts.TypeFlags.Object) {
    const objectType = tpe as ts.ObjectType
    if (objectType.objectFlags & ts.ObjectFlags.Reference) {
      return objectType as ts.TypeReference
    }
  }
  return undefined
}

export function referenceTypeArguments(tpe: ts.Type): readonly ts.Type[] {
  return asTypeReference(tpe)?.typeArguments || []
}
