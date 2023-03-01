import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Login from "./LoginForm/Login.component";
import ForgotPasswordForm from "./ForgotPassword/ForgotPassword";
import { Form } from "./FormDashboard";
import Home from "./FormHome/Home.components";
import Register from "./RegisterForm/Register.component";

export const Testavimas = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Chart_fill" },
    { title: "Templates", src: "Folder" },
    { title: "Pricing", src: "Setting" },
    { title: "Login", src: "Setting" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-400 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/Control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-1">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"></div>
      </div>
    </div>
  );
};
