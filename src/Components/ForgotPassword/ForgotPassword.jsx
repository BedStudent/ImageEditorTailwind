import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Store } from "react-notifications-component";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Email);

    navigate("/auth/login");
    Store.addNotification({
      title: "Wonderful!",
      message: "Password sent check your Email",
      type: "success",
      insert: "top",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-3xl text-center text-gray-200">ForgotPassword</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={Email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="label-inputName">
          <span className="formName">Email</span>
        </label>
      </div>

      <div className="flex flex-col">
        <button className=" mt-3 mx-14 px-2 py-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-lg">
          Send Password
        </button>
      </div>
      <Link to={"/auth/login"} className="link-forgotPassword">
        <h6 className="m-3 text-gray-300">Back to login</h6>
      </Link>
    </form>
  );
};

export default ForgotPasswordForm;
