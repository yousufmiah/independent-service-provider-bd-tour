import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceDetailId } = useParams();
  console.log(serviceDetailId);

  const navigate = useNavigate();
  const handleProceed = () => {
    navigate("/CheckOut");
    Swal.fire({
      position: "Center",
      icon: "error",
      title: "Please Login to Proceed.",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <div className="text-center">
      <h2>Service Detail: {serviceDetailId}</h2>
      <button className="btn btn-primary" onClick={() => handleProceed()}>
        Proceed to CheckOut
      </button>
    </div>
  );
};

export default ServiceDetail;
