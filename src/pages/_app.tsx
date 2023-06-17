import { theme } from "@/constants/GlobalStyles";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { Fira_Sans } from "next/font/google";
export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--fira-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={firaSans.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
