import React from "react";

const MainPoints = () => {
  return (
    <div className="main-points">
      <Point
        imgSrc="/images/check-circle.png"
        altText="EASY TO USE"
        heading="EASY TO USE"
        detail="Customized the cylinder and functionality that perfectly addresses the needs of the customers. Can be used in a variety of scenarios."
      />

      <Point
        imgSrc="/images/cogs.png"
        altText="DESIGN AS REQUEST"
        heading="DESIGN AS REQUEST"
        detail="We produce the right cylinder for you according to your drawing or other specifications which can meet your diverse needs."
      />

      <Point
        imgSrc="/images/heart.png"
        altText="QUALITY ASSURANCE"
        heading="QUALITY ASSURANCE"
        detail="Highly qualified employees are trained inhouse ensure that the high quality of our products remains consistent."
      />
    </div>
  );
};

interface PointProps {
  imgSrc: string;
  altText: string;
  heading: string;
  detail: string;
}

const Point = (props: PointProps) => {
  return (
    <div className="point">
      <div className="point-row">
        <div className="image">
          <img src={props.imgSrc} alt={props.altText} />
        </div>
        <div className="heading">{props.heading}</div>
      </div>
      <div className="point-row">
        <div></div>
        <div className="detail">{props.detail}</div>
      </div>
    </div>
  );
};

export default MainPoints;
