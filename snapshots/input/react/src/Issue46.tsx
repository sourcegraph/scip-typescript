// This file reproduces the following issue https://github.com/sourcegraph/lsif-typescript/issues/46
import React, { FunctionComponent } from 'react'
import { Component } from './Issue46_Component'

export const UsesComponent: FunctionComponent<void> = () => {
  return <Component content={null} isComplete={() => true}></Component>
}
