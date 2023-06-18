import GlobalCSS, { theme } from "@/constants/GlobalStyles";
import type { AppProps } from "next/app";

import { Fira_Sans } from "next/font/google";
import { ThemeProvider } from "styled-components";
export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--fira-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <main className={firaSans.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
