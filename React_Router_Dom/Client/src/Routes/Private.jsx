import React from "react";

import { Navigate } from "react-router-dom";
import getUserDetails from "../userDetails";

const Private = ({ children }) => {
  let user = getUserDetails();
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />
  }
};

export default Private;