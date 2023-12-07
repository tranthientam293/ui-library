import { notoSans } from "@/lib/fonts"
import "@/styles/global.scss"
import { classNameGen } from "@/utils"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={classNameGen(notoSans.className, notoSans.variable)}>
      <Component {...pageProps} />;
    </div>
  )
}
