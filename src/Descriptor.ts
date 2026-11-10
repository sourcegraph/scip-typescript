import { create } from '@bufbuild/protobuf'
import {
  type Descriptor,
  DescriptorSchema,
  Descriptor_Suffix as Suffix,
} from '@scip-code/scip'

export function packageDescriptor(name: string): Descriptor {
  return create(DescriptorSchema, { name, suffix: Suffix.Namespace })
}

export function typeDescriptor(name: string): Descriptor {
  return create(DescriptorSchema, { name, suffix: Suffix.Type })
}

export function termDescriptor(name: string): Descriptor {
  return create(DescriptorSchema, { name, suffix: Suffix.Term })
}

export function metaDescriptor(name: string): Descriptor {
  return create(DescriptorSchema, { name, suffix: Suffix.Meta })
}

export function methodDescriptor(name: string): Descriptor {
  return create(DescriptorSchema, { name, suffix: Suffix.Method })
}

export function parameterDescriptor(name: string): Descriptor {
  return create(DescriptorSchema, { name, suffix: Suffix.Parameter })
}

export function typeParameterDescriptor(name: string): Descriptor {
  return create(DescriptorSchema, { name, suffix: Suffix.TypeParameter })
}

export function descriptorString(desc: Descriptor): string {
  switch (desc.suffix) {
    case Suffix.Namespace: {
      return escapedName(desc) + '/'
    }
    case Suffix.Type: {
      return escapedName(desc) + '#'
    }
    case Suffix.Term: {
      return escapedName(desc) + '.'
    }
    case Suffix.Meta: {
      return escapedName(desc) + ':'
    }
    case Suffix.Method: {
      return escapedName(desc) + '(' + (desc.disambiguator || '') + ').'
    }
    case Suffix.Parameter: {
      return '(' + escapedName(desc) + ')'
    }
    case Suffix.TypeParameter: {
      return '[' + escapedName(desc) + ']'
    }
    default: {
      throw new Error(`unknown descriptor suffix: ${desc.suffix}`)
    }
  }
}

function escapedName(desc: Descriptor): string {
  if (!desc.name) {
    return ''
  }
  if (isSimpleIdentifier(desc.name)) {
    return desc.name
  }
  return '`' + desc.name.replaceAll('`', '``') + '`'
}

// Returns true if this name does not need to be backtick escaped
function isSimpleIdentifier(name: string): boolean {
  return /^[\w$+-]+$/i.test(name)
}
