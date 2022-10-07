import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext";

export default function SignUpModal() {
  const { modalState, toggleModal, signUp } = useContext(UserContext);

  const [messageValidation, setMessageValidation] = useState("");

  const navigate = useNavigate();

  const closeModal = () => {
    setMessageValidation("");
    toggleModal("close");
  };

  const mail = useRef();
  const inputPwd = useRef();
  const inputRepeatPwd = useRef();
  const formRef = useRef();

  console.log(signUp);

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    if (
      inputPwd.current.value.length < 6 ||
      inputRepeatPwd.current.value.length < 6
    ) {
      setMessageValidation("Longueur trop petite");
      return;
    }

    if (inputPwd.current.value !== inputRepeatPwd.current.value) {
      setMessageValidation("Les mots de passe ne correspondent pas");
      return;
    }

    console.log("TODO: faire l'inscription");

    try {
      const cred = await signUp(mail.current.value, inputPwd.current.value);
      console.log("inscription ok, cred = ", cred);
      formRef.current.reset();
      closeModal();
      navigate("/private/private-home");
    } catch (err) {
      console.dir(err);
      if (err.code === "auth/invalid-email") {
        setMessageValidation("Email invalide");
      }
      if (err.code === "auth/email-already-in-use") {
        setMessageValidation("Email déjà utilisé");
      }
    }
  };

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          {/* overlay */}
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
                    <h5 className="modal-title">Sign-Up</h5>
                    <button className="btn-close" onClick={closeModal}></button>
                  </div>
                  <div className="modal-body">
                    <form
                      ref={formRef}
                      className="sign-up-form"
                      onSubmit={handleForm}
                    >
                      <div className="mb-3">
                        <label className="form-label" htmlFor="signUpEmail">
                          Email adress
                        </label>
                        <input
                          ref={mail}
                          type="email"
                          required
                          name="email"
                          className="form-control"
                          id="signUpEmail"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="signUpPwd">
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
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="repeatPwd">
                          Repeat password
                        </label>
                        <input
                          ref={inputRepeatPwd}
                          type="password"
                          required
                          name="repeatPwd"
                          className="form-control"
                          id="repeatPwd"
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
