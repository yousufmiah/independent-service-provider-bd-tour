import React from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprout } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Service = (props) => {
  const { name, img, description, price, terms } = props.service;

  const navigate = useNavigate();
  const navigateServiceDetail = (id) => {
    // navigate("/service/+id");
    navigate(`/service/${id}`);
  };
  return (
    <div className="choose-item ">
      <div className="text-center">
        <img src={img} alt="" />
      </div>
      <div className="d-flex mt-5">
        <div className="me-3">
          <FontAwesomeIcon className="f-icon" icon={faSprout} />
        </div>
        <div className="text-left">
          <h3 style={{ fontWeight: "800" }}>{name}</h3>
          <p className="mt-3">{description}</p>
          <p>
            <strong>{terms}</strong>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h4>{price}</h4>
        {/* <Link to={"/service/" + id}>See more...</Link>
      <Link to={`/service/${id}`}>See more...</Link> */}
        <button
          className="btn btn-primary ms-4"
          onClick={() => navigateServiceDetail()}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Service;
