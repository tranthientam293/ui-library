import RcDialog from 'rc-dialog'
import React from 'react'

export function Dialog() {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [value, setValue] = React.useState<string>('')
  const position = React.useRef<number | null>(0)

  console.log('render')

  React.useLayoutEffect(() => {
    inputRef.current?.focus()
  }, [value])

  return (
    <>
      <RcDialog></RcDialog>
    </>
  )
}
