import {
  arrow,
  autoUpdate,
  offset,
  useClick,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React from 'react'
import styles from './FloatingComponent.module.scss'

export function FloatingComponent() {
  const [isOpen, setIsOpen] = React.useState(false)
  const arrowRef = React.useRef<HTMLDivElement>(null)
  const { refs, floatingStyles, context, middlewareData } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    strategy: 'fixed',
    transform: false,
    middleware: [
      // create custom position
      offset({
        mainAxis: 15, // vertical axis
        crossAxis: 0, // horizontal axis
        alignmentAxis: 0, // horizontal axis, invert placement has "-end"
      }),
      arrow({
        element: arrowRef,
      }),
    ],
  })

  const click = useClick(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click])

  return (
    <>
      <input />
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className={styles.trigger_button}
      >
        Button
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className={styles.container}
        >
          <div
            ref={arrowRef}
            style={{
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'red',
              width: 20,
              height: 10,
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
            }}
          />
          Tooltip
        </div>
      )}
    </>
  )
}
