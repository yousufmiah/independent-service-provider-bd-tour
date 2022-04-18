import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../Assets/images/banner/banner1.jpg";
import banner2 from "../../../Assets/images/banner/banner2.jpg";
import banner3 from "../../../Assets/images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner-img">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <div className="title-size">
              <h1>Ranga Mati</h1>
              <p>You can feel natural environment with colorful soil.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <div className="title-size">
              <h1>Saint Martin</h1>
              <p> enjoy with blue water in the place. </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <div className="title-size">
              <h1>Cox's Bazar</h1>
              <p> A long largest Sea Beach in the World. </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
