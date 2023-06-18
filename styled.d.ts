import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
    borderRadius: string;
  }
}
