import BaseDropdown from "rc-dropdown"
import "rc-dropdown/assets/index.css"
import styles from "./RCDropdown.module.scss"
import { useMemo } from "react"

interface MenuItem {
  key: number
  title: string
  value: string | number
  render?: (title: string, key: number) => React.ReactNode
}
interface IRCDropdown {
  menu?: MenuItem[]
  overlayClassName?: string
  onChange?: (data: Omit<MenuItem, "render">) => void
}

export function RCDropdown({ menu, overlayClassName, onChange }: IRCDropdown) {
  const overlay: React.ReactNode | undefined = useMemo(() => {
    if (menu) {
      return (
        <div className={[styles.overlay, overlayClassName].join(" ")}>
          <ul>
            {menu?.map((item) => (
              <li
                key={item.key}
                onClick={() => {
                  if (onChange !== undefined) {
                    const { render, ...data } = item
                    onChange(data)
                  }
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }, [menu])

  return (
    <div className={styles.base_dropdown}>
      <BaseDropdown overlay={overlay} trigger={["click"]} animation="slide-up">
        <button className={styles.button}>Click me</button>
      </BaseDropdown>
    </div>
  )
}
