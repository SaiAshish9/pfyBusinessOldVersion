import React, { Suspense, lazy } from "react";
import cookie from "js-cookie";
import { Redirect, Route, useLocation } from "react-router-dom";
import Header from "../components/beforeLogin/landingPage/components/desktop/CompanyPage/Navbar";

export default function PublicRoute({ component: Component, ...rest }) {
  const location = useLocation();
  const token = cookie.get("companytoken");
  console.log("location.pathname", location.pathname);
  const pathWithoutHeader =
    location.pathname === "/register" || location.pathname === "/login";
  const isRegistrationPage = location.pathname === "/register";
  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          {!!token && !isRegistrationPage ? (
            <Redirect to="/dashboard" />
          ) : (
            <>
              {!pathWithoutHeader && <Header />}
              <Component {...props} />
            </>
          )}
        </>
      )}
    />
  );
}
