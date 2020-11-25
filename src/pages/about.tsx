import Paper from "@material-ui/core/Paper";
import React from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const About: React.FC = () => {
  return (
    <Layout pageTitle="About Us | Shenzhen Sam Steel Exports">
      <PageTitle heading="About Us" />

      <div className="about-page">
        <div className="about-head">
          <div className="about-tag">
            We strives to provide the BEST SERVICE possible with every contact!
          </div>
          <div className="about-image">
            <img src="/images/about-us.jpg" alt="gate" />
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
      </div>

      {/* <div className="section-head">Why Us</div>
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
        </div> */}
    </Layout>
  );
};

export default About;
