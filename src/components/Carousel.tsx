import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <Slider {...settings} className={"carousel"}>
        <div className="container">
          <div className="slide">
            <div className="text">
              TECHNICAL AND
              <br />
              INTIMATE ONE-STOP
              <br />
              SERVICE
            </div>
            <div className="image">
              <img src="/slider/main-products.png" alt="Group Products" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="slide">
            <div className="text">
              Hydraulic
              <br />
              Cylinders
            </div>
            <div className="image">
              <img src="/slider/hydraulic-cylinders.png" alt="Group Products" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="slide">
            <div className="text">
              Honed <br />
              Seamless Tube
            </div>
            <div className="image">
              <img src="/slider/honed-seamless-tube.png" alt="Group Products" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="slide">
            <div className="text">
              Chrome <br />
              Plated Rod
            </div>
            <div className="image">
              <img src="/slider/chrome-plated-rod.png" alt="Group Products" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="slide">
            <div className="text">
              High Speed
              <br /> Tool Steel
            </div>
            <div className="image">
              <img src="/slider/high-speed-tool.png" alt="Group Products" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="slide">
            <div className="text">
              Stainless <br />
              Steel Pipes
            </div>
            <div className="image">
              <img
                src="/slider/stainless-steel-pipes.png"
                alt="Group Products"
              />
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
