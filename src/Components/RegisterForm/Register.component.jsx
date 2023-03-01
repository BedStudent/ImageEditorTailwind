import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Username);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    navigate("/auth/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-3xl text-center text-gray-200">Sign up</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={Username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="text" className="label-inputName">
          <span className="formName">Username</span>
        </label>
      </div>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="text" className="label-inputName">
          <span className="formName">Email</span>
        </label>
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="text" className="label-inputName">
          <span className="formName">Password</span>
        </label>
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          required
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <label htmlFor="text" className="label-inputName">
          <span className="formName">Confirm Password</span>
        </label>
      </div>

      <Link to={"/auth/login"} className="link-forgotPassword">
        <h6 className="m-3 text-gray-300">Have account?</h6>
      </Link>

      <div className="flex flex-col">
        <button className="mt-3 mx-14 px-2 py-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-lg">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
