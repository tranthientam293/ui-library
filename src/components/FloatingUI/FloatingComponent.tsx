import {
  FloatingArrow,
  arrow,
  autoUpdate,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React from 'react'
import styles from './FloatingComponent.module.scss'

export function FloatingComponent() {
  const [isOpen, setIsOpen] = React.useState(false)
  const arrowRef = React.useRef(null)
  const { refs, floatingStyles, context } = useFloating({
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
        padding: 10,
      }),
      flip({}),
    ],
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ])

  const classNames = isOpen
    ? `${styles.trigger_button} ${styles.active}`
    : styles.trigger_button

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className={classNames}
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
          {/* use this built-in component for flipping arrow */}
          <FloatingArrow ref={arrowRef} context={context} fill="#292929" />
          Tooltip
        </div>
      )}
    </>
  )
}
