import { forwardRef, PropsWithChildren, HTMLAttributes, Ref } from "react";
import { css, useTheme } from "@emotion/react";

import { FONT_STYLE, LINE_STYLE } from "~/styles/style";

type Props = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    fontStyle: keyof typeof FONT_STYLE;
    lineStyle: keyof typeof LINE_STYLE;
  }
>;

const Text = forwardRef(function Text(
  { fontStyle = "base", lineStyle, children, ...props }: Props,
  forwardRef: Ref<HTMLSpanElement>
) {
  const { color } = useTheme();

  return (
    <span
      ref={forwardRef}
      css={[
        { ...FONT_STYLE[fontStyle] },
        { ...LINE_STYLE[lineStyle] },
        css`
          color: ${color.grey900};
        `,
      ]}
      {...props}
    >
      Text
    </span>
  );
});

export default Text;
