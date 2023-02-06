import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  Ref,
} from "react";
import { css, useTheme } from "@emotion/react";

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    //  ...
  }
>;

const Button = forwardRef(function Button(
  { children, ...props }: Props,
  forwardedRef: Ref<HTMLButtonElement>
) {
  const { color } = useTheme();

  return (
    <button
      css={[
        css`
          display: inline-flex;
          align-items: center;
          justify-content: center;

          border: 0;
          border-radius: 16px;
          background-color: ${color.blue500};
          color: ${color.white};

          white-space: nowrap;
          use-select: none;

          &:focus {
            outline: none;
          }

          &:disabled {
            opacity: 0.26;
            cursor: not-allowed;
          }

          &:active {
            background-color: ${color.blue700};
          }
        `,
      ]}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
