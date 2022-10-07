import React, { useContext } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Private() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      {console.log("render Private")}
      <Outlet />
    </div>
  );
}
