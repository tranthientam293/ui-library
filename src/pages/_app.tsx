import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { notoSans } from "@/lib/fonts";
import { classNameGen } from "@/utils";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={classNameGen(notoSans.className, notoSans.variable)}>
      <Component {...pageProps} />;
    </div>
  );
}
