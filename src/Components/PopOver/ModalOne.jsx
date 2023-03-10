import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Modal from "./MainModal";
import { Form } from "../FormDashboard";
import Login from "../LoginForm/Login.component";
import Register from "../RegisterForm/Register.component";
import ForgotPasswordForm from "../ForgotPassword/ForgotPassword";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask fixed flex top-0 right-0 left-0 bottom-0 bg-gray-900 opacity-75"></div>
      <div className="modal-window fixed top-20 inset-x-2  sm:inset-x-1/3 sm:top-28 md:inset-x-56 md:top-48 lg:inset-x-1/3 lg:top-28 rounded-xl opacity-100 ">
        <button className="fixed p-3 pt-2" onClick={closeFn}>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faCircleXmark} size="lg" />
          </Link>
        </button>
        <Routes>
          <Route path="/auth" element={<Form />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotPassword" element={<ForgotPasswordForm />} />
          </Route>
        </Routes>
      </div>
    </Modal>
  );
};

export default ModalOne;
