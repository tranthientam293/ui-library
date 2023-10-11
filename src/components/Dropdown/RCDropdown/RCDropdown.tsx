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
}

export function RCDropdown({ menu, overlayClassName }: IRCDropdown) {
  const overlay: React.ReactNode | undefined = useMemo(() => {
    if (menu) {
      return (
        <div className={[styles.overlay, overlayClassName].join(" ")}>
          <ul>
            {menu?.map((item) => (
              <li key={item.key}>{item.title}</li>
            ))}
          </ul>
        </div>
      )
    }
  }, [menu])

  return (
    <div className={styles.base_dropdown}>
      <BaseDropdown overlay={overlay} trigger={["click"]} animation="slide-up">
        <div className={styles.input}>
          <input placeholder="Chose an option" />
          <div className={styles.chevron}></div>
        </div>
      </BaseDropdown>
    </div>
  )
}
