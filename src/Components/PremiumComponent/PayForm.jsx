import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const PayForm = () => {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [ZipCode, setZipCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(FirstName);
    console.log(SecondName);
    console.log(CardNumber);
    console.log(ZipCode);
    navigate("/confirm/cheers");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-3xl text-center text-gray-200">Checkout</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={FirstName}
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label className="label-inputName">
          <span className="formName">First name</span>
        </label>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={SecondName}
          required
          onChange={(event) => setSecondName(event.target.value)}
        />
        <label className="label-inputName">
          <span className="formName">Second Name</span>
        </label>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={ZipCode}
          required
          onChange={(event) => setZipCode(event.target.value)}
        />
        <label className="label-inputName">
          <span className="formName">Zip Code</span>
        </label>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={CardNumber}
          required
          onChange={(event) => setCardNumber(event.target.value)}
        />
        <label className="label-inputName">
          <span className="formName">Card Number</span>
        </label>
      </div>
      <div className="flex flex-col">
        <button className="mt-3 mx-20 w-44 px-2 py-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-lg">
          Proceed
        </button>
      </div>
    </form>
  );
};

export default PayForm;
