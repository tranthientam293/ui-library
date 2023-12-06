import TextareaAutosize from "react-textarea-autosize";
import styles from "./ReactTextarea.module.scss";
import React from "react";

interface IReactTextarea {
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
  onChange?: (value?: string) => void;
  onBlur?: (value?: string) => void;
}

export function ReactTextarea({
  placeholder,
  maxRows,
  minRows,
  onChange,
  onBlur,
}: IReactTextarea) {
  const [value, setValue] = React.useState<string>("");
  return (
    <div className={styles.react_textarea_wrapper}>
      <TextareaAutosize
        value={value}
        className={styles.react_textarea}
        placeholder={placeholder}
        minRows={minRows || 1}
        maxRows={maxRows || 1}
        onChange={(e) => {
          setValue(e.target.value);
          onChange?.(e.target.value);
        }}
        onBlur={(e) => onBlur?.(e.target.value)}
      />
      {value && <ClearButton onClick={() => setValue("")} />}
    </div>
  );
}

function ClearButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.clear_button} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
      </svg>
    </button>
  );
}
