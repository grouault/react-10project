import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";

export default function NavBar() {
  const { toggleModal, currentUser, logout } = useContext(UserContext);

  const signOut = async () => {
    try {
      await logout();
      console.log("déconnexion ok");
    } catch (err) {
      console.log("erreur de déconnexion");
      console.dir(err);
    }
  };

  return (
    <nav className="navbar bg-light px- 4">
      <Link to="/" className="navbar-brand">
        AuthJS
      </Link>

      <div>
        {!currentUser && (
          <button
            className="btn btn-primary"
            onClick={() => toggleModal("signUp")}
          >
            Sign Up
          </button>
        )}
        {!currentUser && (
          <button
            className="btn btn-primary ms-2"
            onClick={() => toggleModal("signIn")}
          >
            Sign In
          </button>
        )}
        {currentUser && (
          <button className="btn btn-danger ms-2" onClick={signOut}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}
