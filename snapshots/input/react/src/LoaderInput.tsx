import React from 'react'

/** Takes loading prop, input component as child */
interface Props {
    loading: boolean
    children: React.ReactNode
    className?: string
}

export const LoaderInput: React.FunctionComponent<Props> = ({ loading, children, className }) => (
    <div className="hello">
        {children}
        {loading && <p className="spinner">spinner</p>}
    </div>
)
