import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Email);
    console.log(Password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={Email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="label-inputName">
          <span className="formName">Email</span>
        </label>
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={Password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <label className="label-inputName">
          <span className="formName">Password</span>
        </label>
      </div>

      <div className="d-grid col-8 mx-auto mt-4">
        <button className="btn btn-primary">Login</button>
      </div>
      <Link to={"/forgotPassword"} className="link-forgotPassword">
        <h6 className="name-forgotPassword">Forgot Password?</h6>
      </Link>

      <h1 className="text-red-600"> fffff</h1>
    </form>
  );
};

export default Login;
