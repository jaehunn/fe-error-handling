import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";

import { Home } from "~/pages/Home.page";
import { SignUp } from "~/pages/SignUp.page";
import { SignUpComplete } from "~/pages/SignUpComplete.page";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/home" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up/done" element={<SignUpComplete />} />

      <Route path="*" element={<Navigate replace to="/home" />} />
    </ReactRouterRoutes>
  );
};
