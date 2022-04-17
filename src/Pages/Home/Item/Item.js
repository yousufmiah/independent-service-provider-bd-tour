import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCar,
  faCartShopping,
  faGolfBall,
  faHouseCircleXmark,
  faSplotch,
  faSprout,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { name, img, description, price } = props.item;
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
          <h5>{name}</h5>
          <p className="mt-3">{description}</p>
        </div>
      </div>

      <Link to="/login">
        <button>See more..</button>.
      </Link>
    </div>
  );
};

export default Item;
