import { PropsWithChildren } from "react";
import { css, useTheme } from "@emotion/react";

type Props = PropsWithChildren<{
  //
}>;

const Layout = ({ children }: Props) => {
  const { color } = useTheme();

  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      <div
        css={css`
          background: ${color.background};
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
