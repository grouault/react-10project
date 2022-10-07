import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext";

export default function SignInModal() {
  const { modalState, toggleModal, signIn } = useContext(UserContext);

  const [messageValidation, setMessageValidation] = useState("");

  const navigate = useNavigate();

  const closeModal = () => {
    setMessageValidation("");
    toggleModal("close");
  };

  const mail = useRef();
  const inputPwd = useRef();
  const formRef = useRef();

  console.log(signIn);

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    if (inputPwd.current.value.length < 3) {
      setMessageValidation("Veuillez saisir au moins 3 caractères");
      return;
    }

    try {
      const cred = await signIn(mail.current.value, inputPwd.current.value);
      console.log("inscription ok, cred = ", cred);
      formRef.current.reset();
      closeModal();
      navigate("/private/private-home");
    } catch (err) {
      console.dir(err);
      if (err.code === "auth/user-not-found") {
        setMessageValidation("Email inconnu");
      }
      if (err.code === "auth/wrong-password") {
        setMessageValidation("mot de passe invalide");
      }
    }
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          {console.log("render")}
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={closeModal}
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div
              className="modal"
              style={{ position: "relative", display: "block" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sign-In</h5>
                    <button className="btn-close" onClick={closeModal}></button>
                  </div>
                  <div className="modal-body">
                    <form
                      ref={formRef}
                      className="sign-in-form"
                      onSubmit={handleForm}
                    >
                      <div className="mb-3">
                        <label className="form-label" htmlFor="signInEmail">
                          Email adress
                        </label>
                        <input
                          ref={mail}
                          type="email"
                          required
                          name="email"
                          className="form-control"
                          id="signInEmail"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="signInPwd">
                          Password
                        </label>
                        <input
                          ref={inputPwd}
                          type="password"
                          required
                          name="pwd"
                          className="form-control"
                          id="signUpPwd"
                        />
                        <p className="text-danger mt-1">{messageValidation}</p>
                      </div>
                      <button className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
