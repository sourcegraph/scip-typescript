// This file reproduces the following issue https://github.com/sourcegraph/lsif-typescript/issues/46
import React, { FunctionComponent } from 'react'

interface Step {
  content: React.ReactElement
  isComplete: () => boolean
  prefetch?: () => void
  onNextButtonClick?: () => Promise<void>
}

export const Component: FunctionComponent<Step> = props => {
  return <div></div>
}
