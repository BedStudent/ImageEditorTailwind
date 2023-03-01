import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "../LoginForm/Login.component";
import Register from "../RegisterForm/Register.component";
import ForgotPasswordForm from "../ForgotPassword/ForgotPassword";
import { Form } from "../FormDashboard";
import Home from "../FormHome/Home.components";
import FormModal from "../PopOver/ModalForm";
import { useState } from "react";
export const FormNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    /*    <nav className="navbar navbar-expand navbar-light mb-5">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          {" "}
          Home{" "}
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/auth/login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/auth/register"}>
                {" "}
                Sign up
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav> */

    <div className=" sm:visible bg-gray-900">
      <div className="flex justify-end ">
        <div className="m-3 ">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 w-36 text-gray-200 rounded-full hover:bg-violet-700"
          >
            <Link to={"/auth/login"}>Login</Link>
          </button>

          <FormModal open={isOpen} onClose={() => setIsOpen(false)}>
            <Routes>
              <Route path="/auth" element={<Form />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgotPassword" element={<ForgotPasswordForm />} />
              </Route>
            </Routes>
          </FormModal>
        </div>
        <div className="m-3">
          <button className="p-2 w-36 text-gray-200 rounded-full hover:bg-yellow-300">
            Premium
          </button>
        </div>
      </div>
    </div>
  );
};
