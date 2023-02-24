import React from "react";
import "./App.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Route, Routes } from "react-router-dom";
import { FormNav } from "./Components/FormNav/Nav.component";
import Home from "./Components/FormHome/Home.components";
import Login from "./Components/LoginForm/Login.component";
import Register from "./Components/RegisterForm/Register.component";
import ForgotPasswordForm from "./Components/ForgotPassword/ForgotPassword";
import { Form } from "./Components/FormDashboard";
function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <FormNav />
      <div className="formBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Form />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotPassword" element={<ForgotPasswordForm />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
