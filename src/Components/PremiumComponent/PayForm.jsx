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
    navigate("/");
  };

  return (
    <form
      className="rounded-lg p-4 border-2 border-solid border-gray-900"
      onSubmit={handleSubmit}
    >
      <h3 className="text-3xl text-center text-gray-200">Check Out</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={FirstName}
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="text" className="label-inputName">
          <span className="formName">FirstName</span>
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
        <label htmlFor="text" className="label-inputName">
          <span className="formName">SecondName</span>
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
        <label htmlFor="text" className="label-inputName">
          <span className="formName">Card Number</span>
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
        <label htmlFor="text" className="label-inputName">
          <span className="formName">Zip Code</span>
        </label>
      </div>

      <div className="flex justify-center">
        <Link to={""} /*someBank i guess */>
          <button className="mt-3 mx-14 px-2 py-2 w-36 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-lg">
            Proceed
          </button>
        </Link>
      </div>
    </form>
  );
};

export default PayForm;
