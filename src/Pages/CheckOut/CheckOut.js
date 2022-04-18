import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/home");
  };
  return (
    <div className="text-center">
      <h2>Checkout Page</h2>
      <button className="btn btn-primary" onClick={handleCheckout}>
        CheckOut
      </button>
    </div>
  );
};

export default CheckOut;
