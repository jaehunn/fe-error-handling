import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";

import SignUp from "~/pages/SignUp.page";
import SignUpComplete from "~/pages/SignUpComplete.page";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up/done" element={<SignUpComplete />} />

      <Route path="*" element={<Navigate replace to="/sign-up" />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
