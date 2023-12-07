import TextArea from "rc-textarea";
import React from "react";
import styles from "./RCTextarea.module.scss";

interface IRCTextarea {
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
  onChange?: (value?: string) => void;
  onBlur?: (value?: string) => void;
}

export function RCTextarea({
  placeholder,
  minRows = 1,
  maxRows = 1,
  onChange,
  onBlur,
}: IRCTextarea) {
  const [value, setValue] = React.useState<string | undefined>();

  return (
    <div className={styles.custom_textarea_wrapper}>
      <TextArea
        className={styles.custom_textarea}
        autoSize={{ minRows: minRows, maxRows: maxRows }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange?.(e.target.value);
        }}
        onBlur={(e) => onBlur?.(e.target.value)}
      />
      {value && <ClearButton onClick={() => setValue(undefined)} />}
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
