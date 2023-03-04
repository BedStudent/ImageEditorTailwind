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
      <h3 className="text-3xl text-center text-gray-200">Login</h3>
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
      <div className="flex flex-col">
        <button className="mt-3 mx-14 px-2 py-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-lg">
          Login
        </button>
      </div>
      <Link to={"/auth/forgotPassword"} className="link-forgotPassword">
        <h6 className="m-3 text-gray-300 text-sm">Forgot Password?</h6>
      </Link>

      <Link to={"/auth/register"} className="link-forgotPassword">
        <h6 className="m-3 text-gray-300 text-sm">Don't have an account?</h6>
      </Link>
    </form>
  );
};

export default Login;
