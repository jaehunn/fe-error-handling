import { InputHTMLAttributes, forwardRef, Ref } from "react";
import { css, useTheme } from "@emotion/react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  //
};

/**
 *
 */

// TODO: Input + Label 로 UX 높이기 (fast campus)
const Input = forwardRef(function Input(
  { ...props }: Props,
  forwardedRef: Ref<HTMLInputElement>
) {
  const { color } = useTheme();

  return (
    <input
      ref={forwardedRef}
      css={[
        css`
          caret-color: ${color.blue400};
          outline: none;
          border: none;
          border-bottom: 2px solid ${color.grey300};
        `,
      ]}
      {...props}
    />
  );
});

export default Input;
