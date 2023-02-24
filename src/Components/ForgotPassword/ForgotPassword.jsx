import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Email);

    navigate("/login");
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
      <h3>ForgotPassword</h3>
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

      <div className="d-grid col-8 mx-auto mt-4">
        <button className="btn btn-primary">Send Password</button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
