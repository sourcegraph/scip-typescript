import React from 'react'

/** Takes loading prop, input component as child */
interface Props {
  loading: boolean
  children: React.ReactNode
}

export const LoaderInput: React.FunctionComponent<Props> = ({
  loading,
  children,
}) => (
  <div className="hello">
    {children}
    {loading && <p>spinner</p>}
  </div>
)

export const LoaderInput2: React.FunctionComponent<Props> = props => {
  return <LoaderInput loading={true} key="key" children={props.children} />
}
