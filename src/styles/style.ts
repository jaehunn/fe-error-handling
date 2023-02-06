// @see https://tailwindcss.com/docs/font-size
export const FONT_STYLE = {
  xs: {
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
  sm: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  base: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  lg: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
  xl: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
} as const;

export const LINE_STYLE = {
  singleLine: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "inline-block",
    maxWidth: "100%",
  },
  multiLine: {
    whiteSpace: "pre-wrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
    ["-webkit-line-clamp"]: 2,
    ["-webkit-box-orient"]: "vertical",
  },
} as const;
