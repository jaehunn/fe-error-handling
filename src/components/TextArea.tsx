import React, { forwardRef, Ref, TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  //
};

/**
 *
 */

const TextArea = forwardRef(function TextArea(
  { children, ...props }: Props,
  forwardedRef: Ref<HTMLTextAreaElement>
) {
  return <textarea ref={forwardedRef}>{children}</textarea>;
});

export default TextArea;
