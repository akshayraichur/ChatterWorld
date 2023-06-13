import { globalStyles, theme } from "@/constants/GlobalStyles";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { Inter, Noto_Sans } from "next/font/google";
export const inter = Inter({ subsets: ["latin"], variable: "--inter" });
export const notoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={inter.className + " " + notoSans.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
