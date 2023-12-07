import {
  Bounce,
  CloseButtonProps,
  ToastContainer,
  ToastContainerProps,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Toast.module.scss";

const DEFAULT_DURATION = 1000;
const DEFAULT_POSITION = toast.POSITION.TOP_RIGHT;

interface ToastifyProps extends ToastContainerProps{}
export function Toastify(props: ToastifyProps) {
  const options: ToastifyProps = {
    autoClose: DEFAULT_DURATION,
    closeButton: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    position: DEFAULT_POSITION,
    theme: "light",
    ...props,
  };

  //custom close button
  const CloseIcon = ({ closeToast }: CloseButtonProps) => (
    <button onClick={closeToast} className={styles.close_button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </button>
  );

  return (
    <ToastContainer {...options} closeButton={CloseIcon} transition={Bounce} />
  );
}

export const toastifyFn = toast;
