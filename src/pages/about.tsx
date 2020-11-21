import React, { useCallback, useState } from "react";

import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const About: React.FC = () => {
  return (
    <Layout pageTitle="About Us | Shenzhen Sam Steel Exports">
      <PageTitle heading="About Us" />

      <div className="about-page">
        <div className="about-section">
          <div className="image">
            <img src="/images/gate.jpg" alt="gate" />
            {/* <img src="/images/about-pic1.jpg" alt="cylinders" /> */}
          </div>

          <div className="text">
            <b>
              <i>Shenzhen Sam Steel Exports</i>
            </b>{" "}
            has rich experience in the field of Hydraulic parts, Cylinder,
            Tubular Stainless Steel manufacturing, such as Honed Tube, Chrome
            Plated Rods (Piston Rods), Seamless Tube, Stainless Steel Pipes,
            Hydraulic Cylinder, Pneumatic Cylinder, Pumps and so on..
            <br />
            <br />
            We offer a wide range of sizes to fulfill diverse customer needs,
            our quality product, cost effective, personalized customer services
            lead us to achieve good reputation in both domestic and abroad
            market.
            <br />
            <br />
            Today our company has reached new heights in the exporters of the
            steel products, can best meet the environment and demand of your
            particular application.
            <br />
            <br />
            <i>“Highest Quality – Lowest Pricing”</i>
            <br />
            <br />
            We are China based exporter of standard Hydraulic Cylinders,
            Hydraulic Power Units, distribute Hydraulic Motors among many other
            products.
            <br />
            <br />
            Serving the mobile equipment industry and our manufacturing
            operations are certified to the ISO TS16949 standard. We are also a
            certified OEM production supplier to many large North American based
            corporations.
            <br />
            <br />
            Our services include on-site visits & support, flexible delivery
            programs, stocking arrangements, inventory updates, and flexible
            warranty and of course service with a smile. With a functional ERP
            system, we have the capability to match our lead time with your
            forecast to assure a seamless delivery. We strive to deliver our
            products to you on time every time.
            <br />
            <br />
            Be assured that Shenzhen Sam Steel Export can offer you the best in
            quality, delivery, and service and of course price.
          </div>
        </div>

        <div className="section-head">Why Us</div>
        <div className="why-section">
          <div className="row">
            <div className="blank"></div>
            <div className="text">
              Our cylinders are designed by CAD or 3D, and have been through
              ISO9001:2000 international quality system certification. Our
              production is managed according to ERP. These factors ensure our
              quality to be the top three in China. Warranty period for our
              cylinder is 2 years. For some special cylinders, the period is 5
              years. All the drawings, records of production and inspection
              would be kept for 10 years.
            </div>
          </div>

          <div className="row">
            <div className="blank"></div>
            <div className="text">
              We choose accessories according to customers’ requirements.
              Usually, brands of seals are PARKER, MERKEL or NOK, valves are SUN
              or REXROTH, bearings are LONGXI or SKF, displacement sensors are
              MTS or WALSH, and proximity switches are BALLUFF.
            </div>
          </div>

          <div className="row">
            <div className="blank"></div>
            <div className="text">
              The delivery speed is fast, the average delivery time is 30-60
              days. Our annual quantity for hydraulic cylinder is more than 100
              thousand pieces.
            </div>
          </div>

          <div className="row">
            <div className="blank"></div>
            <div className="text">
              Classifications include DNV, ABS, LR, BV, GL, CCS, RINA, KR, NK,
              RS.
            </div>
          </div>

          <div className="row">
            <div className="blank"></div>
            <div className="text">
              Our advanced producing equipments included DOSHAAN machine center,
              CNC Lather, TACHI scraping roller burnishing machine etc.
            </div>
          </div>

          <div className="row">
            <div className="blank"></div>
            <div className="text">
              Welding technology certificates from GL and CCS.
            </div>
          </div>

          <div className="row">
            <div className="blank"></div>
            <div className="text">
              High Precision: Honed Tube (Roughness of tube is 0.2μm and
              straightness is less than 0.15/1000), Piston Rod (Plating
              thickness is 10-100 micron. Surface roughness is 0.2μm and
              straightness is also less than 0.15/1000) The purity of hydraulic
              oil is NAS 6-9.
            </div>
          </div>
        </div>

        <div className="section-head"></div>
      </div>
    </Layout>
  );
};

export default About;
