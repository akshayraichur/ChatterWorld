import { globalStyles } from "@/constants/GlobalStyles";
import "@/styles/globals.css";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

import { Inter, Noto_Sans } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <main className={inter.className + " " + notoSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
