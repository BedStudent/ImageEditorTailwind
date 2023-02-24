import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="m-4">Sign up</h3>
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

      <div className="d-grid col-8 mx-auto mt-4">
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
  );
};

export default Register;
