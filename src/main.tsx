import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { css, Global, ThemeProvider } from "@emotion/react";
import normalize from "emotion-normalize";

import App from "./App";

import { THEME } from "~/styles/theme";

import { serviceWorker } from "~/server/browser";
serviceWorker.start({ onUnhandledRequest: "bypass" });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /** Avoid rendeing twice */
  // <React.StrictMode>
  <ThemeProvider theme={THEME}>
    <BrowserRouter>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0;
          }
        `}
      />
      <App />
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
