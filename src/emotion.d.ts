import { COLOR } from "./styles/theme";

declare module "@emotion/react" {
  export interface Theme {
    color: typeof COLOR;
  }
}
