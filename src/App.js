import React from "react";
import "./App.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Route, Routes } from "react-router-dom";

import { Testavimas } from "./Components/MainDashboard";
import Example from "./Components/FormNav/TestNav";
import Login from "./Components/LoginForm/Login.component";
import ForgotPasswordForm from "./Components/ForgotPassword/ForgotPassword";
import { Form } from "./Components/FormDashboard";
import Home from "./Components/FormHome/Home.components";
import Register from "./Components/RegisterForm/Register.component";
import { LeftBox } from "./Components/ColorComponents/LeftBox";
import { RightBox } from "./Components/ColorComponents/RightBox";
import { FormNav } from "./Components/FormNav/Nav.component";
import FormModal from "./Components/PopOver/MainModal";
function App() {
  return (
    <div className="App ">
      <ReactNotifications />

      <FormNav />
      <div className="">
        <Testavimas />
      </div>
    </div>
  );
}

export default App;
