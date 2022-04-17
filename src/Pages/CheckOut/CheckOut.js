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
      <h2>checkout page</h2>
      <button onClick={handleCheckout}>CheckOut</button>
    </div>
  );
};

export default CheckOut;
