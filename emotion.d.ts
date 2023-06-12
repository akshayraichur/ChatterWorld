import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      foreground: string;
      background: string;
      primary: string;
      secondary: string;
      success: string;
      danger: string;
    };
    shadow: {
      sm: string;
      md: string;
    };
  }
}
