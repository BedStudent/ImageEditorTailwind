import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "../LoginForm/Login.component";
import Register from "../RegisterForm/Register.component";
import ForgotPasswordForm from "../ForgotPassword/ForgotPassword";
import { Form } from "../FormDashboard";
import Home from "../FormHome/Home.components";

import FormModal from "../PopOver/MainModal";
import { useState } from "react";
import { PayPlans } from "../PremiumComponent/PremiumPlans";
import SubscriptioModal from "../PopOver/ModalOne";

import React from "react";

const ScreenOne = () => {
  return (
    <main className=" sm:visible bg-gray-900">
      <div className="flex justify-end">
        <div className="m-3">
          <Link to={"/auth/login"}>
            <button
              className="p-2 w-36 text-gray-200 rounded-full hover:bg-violet-700 border border-purple-600"
              data-modal="modal-one"
            >
              Login
            </button>
          </Link>
        </div>
        <div className="m-3">
          <Link to={"/confirm/plans"}>
            <button
              className="p-2 w-36 text-gray-200 rounded-full hover:bg-yellow-300"
              data-modal="modal-two"
            >
              Premium
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ScreenOne;

/* export const FormNav = () => {
  return (
    /* 
    <div className=" sm:visible bg-gray-900">
      <div className="flex justify-end ">
        <div className="m-3 ">
          <Link to={"/auth/login"}>
            <button className="p-2 w-36 text-gray-200 rounded-full hover:bg-violet-700 border border-purple-600" data-modal="modal-one">
              Login
            </button>
          </Link>

          <Routes>
            <Route path="/auth" element={<Form />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgotPassword" element={<ForgotPasswordForm />} />
            </Route>
          </Routes>
        </div>

        <div className="m-3">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 w-36 text-gray-200 rounded-full hover:bg-yellow-300"
          >
            Premium
          </button>
        </div>
      </div>
    </div>
  );
};  */
