import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser ? (
        <>
          <div>Home Page </div>
          <div>Bonjour, {currentUser.email}</div>
        </>
      ) : (
        <div>Home Page.</div>
      )}
    </>
  );
}
