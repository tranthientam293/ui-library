import React from "react"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"
import "./ReactTooltip.scss"

interface ReactTooltipProps {}
export function ReactTooltip({}: ReactTooltipProps) {
  const [id, setId] = React.useState<string>()
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo tempora adipisci ullam debitis facere sed nesciunt sunt nulla, accusamus numquam dolores, blanditiis doloribus facilis. Atque explicabo adipisci nihil maiores ratione."
  console.log(id)

  return (
    <div className="container">
      <button
        className="button"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={content}
        data-tooltip-place="top"
        onMouseEnter={() => {
          setId("my-tooltip")
        }}
      >
        Click me
      </button>

      <Tooltip id={id} clickable />
    </div>
  )
}
