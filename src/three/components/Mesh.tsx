import * as React from 'react'

export interface IMeshProps extends React.HTMLProps<HTMLDivElement> {}

export default ({ children }: IMeshProps) => (
  <span>{children}</span>
)
