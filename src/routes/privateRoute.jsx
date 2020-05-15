import React from "react";
import { Redirect } from "react-router-dom";
import PrivateHeader from "../components/header/privateHeader/privateHeader";
import cookie from "js-cookie";
// import PrivateRoute from './publicRoute';

export default function PrivateRoute({ component, ...rest }) {
  const token = cookie.get("token");

  return (
    <>
      {!!token ? (
        <PrivateHeader component={component} {...rest} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
