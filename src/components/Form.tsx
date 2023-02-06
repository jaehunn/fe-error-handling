import { FormHTMLAttributes, forwardRef, PropsWithChildren, Ref } from "react";
import { css } from "@emotion/react";

type Props = PropsWithChildren<
  FormHTMLAttributes<HTMLFormElement> & {
    //
  }
>;

/**
 *
 */

const Form = forwardRef(function Form(
  { children, ...props }: Props,
  forwardedRef: Ref<HTMLFormElement>
) {
  return (
    <form
      ref={forwardedRef}
      css={[
        css`
          //
        `,
      ]}
      {...props}
    >
      {children}
    </form>
  );
});

export default Form;
