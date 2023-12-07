import { useMemo, useState } from "react"
import BaseDropdown, { Option } from "react-dropdown"
import styles from "./ReactDropdown.module.scss"

type ReactDropdownProps = {
  options: Option[]
}

export function ReactDropdown({ options }: ReactDropdownProps) {
  const [selected, setSelected] = useState("")
  const menu = useMemo(() => {
    if (options) {
      return options.map((option) => {
        const classNames = [option.className, styles.menu_item]
        if (option.value === selected) {
          classNames.push(styles.selected)
        }
        return {
          ...option,
          className: classNames.join(" "),
        }
      })
    }
    return []
  }, [options, selected])

  return (
    <BaseDropdown
      options={menu}
      placeholder={"Click me"}
      placeholderClassName={styles.placeholder}
      className={styles.dropdown}
      menuClassName={styles.menu}
      onChange={(options) => setSelected(options.value)}
    />
  )
}
