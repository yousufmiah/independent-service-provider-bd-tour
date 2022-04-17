import React from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprout } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Service = (props) => {
  const { id, name, img, description, price } = props.item;

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
        </div>
      </div>
      {/* <Link to={"/service/" + id}>See more...</Link>
      <Link to={`/service/${id}`}>See more...</Link> */}
      <button onClick={() => navigateServiceDetail(id)}>Details</button>
    </div>
  );
};

export default Service;
