import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...restOfProps }) => {
  const isAuth = localStorage.getItem("currentUser");
  console.log(localStorage.getItem("currentUser"));

  return (
    <div>
      <Route
        {...restOfProps}
        render={(props) => {
          if (isAuth !== null) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/signin" />;
          }
        }}
      />
    </div>
  );
};

export default ProtectedRoutes;
