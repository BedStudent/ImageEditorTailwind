import React from "react";
import "./App.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Route, Routes } from "react-router-dom";

import { useState } from "react";

import { Testavimas } from "./Components/MainDashboard";
import Example from "./Components/FormNav/TestNav";
import Login from "./Components/LoginForm/Login.component";
import ForgotPasswordForm from "./Components/ForgotPassword/ForgotPassword";
import { Form } from "./Components/FormDashboard";
import Home from "./Components/FormHome/Home.components";
import Register from "./Components/RegisterForm/Register.component";
import { LeftBox } from "./Components/ColorComponents/LeftBox";
import { RightBox } from "./Components/ColorComponents/RightBox";

import ScreenOne from "./Components/FormNav/Nav.component";
import FormModal from "./Components/PopOver/MainModal";
import ModalManager from "./Components/ModalManager";
function App() {
  const [modalOpen, setModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal("");
  };

  return (
    <div className="App " onClick={openModal}>
      <ReactNotifications />
      <ScreenOne />
      <ModalManager closeFn={closeModal} modal={modalOpen} />
      <div className="">
        <Testavimas />
      </div>
    </div>
  );
}

export default App;
