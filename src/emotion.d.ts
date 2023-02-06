import { COLOR } from "./styles/color";
import { FONT_STYLE, LINE_STYLE } from "./styles/style";

declare module "@emotion/react" {
  export interface Theme {
    color: typeof COLOR;
    fontStyle: typeof FONT_STYLE;
    lineStyle: typeof STYLE;
  }
}
