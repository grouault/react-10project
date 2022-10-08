import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser ? (
        <>
          <div>Home Page </div>
          <div>Bonjour, {currentUser.email}</div>
          <Link to="/private/private-food">Multiform food</Link>
        </>
      ) : (
        <>
          <div>Home Page.</div>
        </>
      )}
    </>
  );
}
