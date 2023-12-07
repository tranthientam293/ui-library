import BaseDropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import { useMemo } from "react";
import styles from "./RCDropdown.module.scss";

interface MenuItem {
  key: number;
  title: string;
  value: string | number;
  render?: (title: string, key: number) => React.ReactNode;
}
interface IRCDropdown {
  menu?: MenuItem[];
  overlayClassName?: string;
  onChange?: (data: Omit<MenuItem, "render">) => void;
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
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { render, ...data } = item;
                    onChange(data);
                  }
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  return (
    <div className={styles.base_dropdown}>
      <BaseDropdown overlay={overlay} trigger={["click"]} animation="slide-up">
        <button className={styles.button}>Click me</button>
      </BaseDropdown>
    </div>
  );
}
