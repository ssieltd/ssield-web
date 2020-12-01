import Paper from "@material-ui/core/Paper";
import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Slider from "react-slick";

const About: React.FC = () => {
  const settings = {
    dots: false,
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
    <Layout pageTitle="About Us | Shenzhen Sam Steel Exports">
      <PageTitle heading="About Us" />

      <div className="about-page">
        <div className="about-head">
          <div className="about-tag">
            We strive to provide HIGH QUALITY PRODUCTS and BEST SERVICE possible
            for every customer!
          </div>
          <div className="about-image">
            <Slider {...settings}>
              <div>
                <img src="/images/about-pic-1.jpg" alt="gate" />
              </div>
              <div>
                <img src="/images/about-pic-2.jpg" alt="About Us" />
              </div>
              <div>
                <img src="/images/about-pic-3.jpg" alt="About Us" />
              </div>
            </Slider>
          </div>
        </div>

        <Paper className="about-text">
          <h3>
            <b>Shenzhen Sam Steel Exports</b> has rich experience in the field
            of hydraulic cylinder manufacturing and steel material.
          </h3>
          <br />
          Hydraulics include Hydraulic Cylinder, Pneumatic Cylinder, Cylinder
          Components, HPU system, and Hydraulic Cylinder Solution and Technology
          & Service supporting.
          <br />
          <br />
          Steel material include Stainless Steel and Alloy, Carbon Steel
          Pipes/Rods/Plates, and some special steel material, etc.
          <br />
          <br />
          Our products are verified by national and international customers, we
          can also issue third party certificate, such as LR, SGS, BV etc. per
          request.
          <br />
          <br />
          We offer a wide range of sizes to fulfill diverse customer needs, our
          quality products, effective cost, personalized customer service lead
          us to achieve good reputation in both domestic and international
          markets. Sectors that we service include, agriculture, recycling,
          mining, marine, mobile, aviation, defense, oil and gas, utilities and
          heavy industry.
          <br />
          <br />
          Today our company has reached new heights in exporting hydraulic and
          steel products, can best meet the environment and demand of your
          particular application.
          <br />
          <br />
          We are looking forward to cooperating with you, welcome to visit us
          and contact us for any of your inquiries, we will be at your service.
        </Paper>

        {/* <div className="gallary">
          <div>
            <img src="/images/about-pic-1.jpg" alt="About Us" />
          </div>
          <div>
            <img src="/images/about-pic-2.jpg" alt="About Us" />
          </div>
          <div>
            <img src="/images/about-pic-3.jpg" alt="About Us" />
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default About;
