import { Meta, StoryObj } from "@storybook/react";
import { Toastify, toastifyFn } from "./Toast";
import styles from "./Toast.module.scss";

const meta = {
  title: "Components/Message/Toast",
  component: Toastify,
  argTypes: {
    autoClose: {
      control: { type: "number" },
    },
    position: {
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      control: { type: "radio" },
    },
    theme: {
      control: { type: "radio" },
      options: ["dark", "light", "colored"],
    },
  },
} satisfies Meta<typeof Toastify>;

export default meta;

type Story = StoryObj<typeof Toastify>;

export const Primary: Story = {
  args: {
    autoClose: 1000,
    closeButton: true,
    hideProgressBar: false,
    icon: true,
    pauseOnHover: true,
    position: "top-center",
    theme: "light",
  },
  render: (args) => {
    return (
      <>
        <div className={styles.wrapper}>
          <button
            onClick={() => toastifyFn.success("success")}
            className={styles.notify_button_success}
          >
            Success
          </button>
          <button
            onClick={() => toastifyFn.error("error")}
            className={styles.notify_button_error}
          >
            Error
          </button>
          <button
            onClick={() => toastifyFn.warn("warn")}
            className={styles.notify_button_warning}
          >
            Warning
          </button>
          <button
            onClick={() => toastifyFn.loading("loading")}
            className={styles.notify_button}
          >
            Loading
          </button>
          <button
            onClick={() => toastifyFn.info("info")}
            className={styles.notify_button_info}
          >
            Info
          </button>
        </div>
        <Toastify {...args} />
      </>
    );
  },
};
