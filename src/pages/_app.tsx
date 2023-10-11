import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import { notoSans } from "@/lib/fonts"
import { classNameGen } from "@/utils"
import { IRCSwitch } from "@/types"

interface A extends IRCSwitch {}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={classNameGen(notoSans.className, notoSans.variable)}>
      <Component {...pageProps} />;
    </div>
  )
}
