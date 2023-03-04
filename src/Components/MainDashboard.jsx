import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Login from "./LoginForm/Login.component";
import ForgotPasswordForm from "./ForgotPassword/ForgotPassword";
import { Form } from "./FormDashboard";
import Home from "./FormHome/Home.components";
import Register from "./RegisterForm/Register.component";

export const Testavimas = () => {
  const [open, setOpen] = useState("");
  const Menus = [
    { title: "Home", Link: "/", src: "Chart_fill" },
    { title: "Templates", src: "Folder" },
    { title: "Pricing", src: "Setting" },
    { title: "Login", src: "Setting", display: "Form" },
  ];
  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-44" : "w-0 "
        }  md:h-screen lg:h-screen bg-gray-700  p-5  pt-8 relative duration-300`}
      >
        <img
          src="./assets/Control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Menu
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              key={index}
              to={Menu.Link}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-purple-600 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <div
        className={` ${open ? "w-8/12" : "w-11/12"} ${
          open ? "sm:w-4/5" : "sm:w-12/13"
        } ${open ? "lg:w-11/12" : "lg:w-full"} p-1 `}
      >
        <div class="w-auto md:h-screen lg:h-screen border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
