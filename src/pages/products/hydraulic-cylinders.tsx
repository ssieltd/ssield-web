import Paper from "@material-ui/core/Paper";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default function HydraulicCylinders() {
  return (
    <Layout pageTitle="Hydraulic Cylinders | Shenzhen Sam Steel Exports">
      <PageTitle heading="Hydraulic Cylinders" />

      <div className="product-detail-page">
        <div className="image">
          <img
            src="/products/hydraulic-cylinders.png"
            alt="Hydraulic Cylinders"
          />
        </div>
        <Paper className="details">
          <div className="intro">
            <div className="intro-text">
              Our <b>Hydraulics Cylinders</b> have been used in a wide range of
              industries:
              <ul>
                <li>General Industry</li>
                <li>Agricultural</li>
                <li>Earthmoving</li>
                <li>Mining</li>
                <li>Waste Management</li>
                <li>Manufacturing Applications</li>
                <li>Transport</li>
                <li>Marine, Offshore etc...</li>
              </ul>
            </div>
            <div className="intro-text">
              More than 100 sets different machines (Tacchi etc.). <br />
              70% are CNC machines (Doosan etc.).
            </div>
            <div className="intro-text">
              We have abundant exporting experiences to Asia, Middle East,
              Europe, Australasia, etc., We offer high quality products and
              services to customers worldwide.
            </div>
          </div>

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Bore Range
          </div>
          <div>25mm - 1200mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Max Stroke
          </div>
          <div>15000mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Cylinder max weight
          </div>
          <div>60 Tons</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Max Woring pressure
          </div>
          <div>700 bar</div>
          <br />

          {/* <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Applications
          </div>
          <div>
            - Hatch Covers
            <br />
            - Steering Gear
            <br />
            - Dredger/Backhoe Dredgers
            <br />
            - Barge
            <br />
            - Straight Boom
            <br />
            - Knuckle Boom
            <br />
            - Telescopic Crane
            <br />
            - Heavy duty foldable craneb
            <br />
          </div> */}
          <div className="gallary">
            <div>
              <img
                src="/products/hydraulic-cylinders/1.jpg"
                alt="Hydraulic Cylinders"
              />
            </div>
            <div>
              <img
                src="/products/hydraulic-cylinders/2.jpg"
                alt="Hydraulic Cylinders"
              />
            </div>
            <div>
              <img
                src="/products/hydraulic-cylinders/3.jpg"
                alt="Hydraulic Cylinders"
              />
            </div>
            <div>
              <img
                src="/products/hydraulic-cylinders/4.jpg"
                alt="Hydraulic Cylinders"
              />
            </div>
            <div>
              <img
                src="/products/hydraulic-cylinders/5.jpg"
                alt="Hydraulic Cylinders"
              />
            </div>
            <div>
              <img
                src="/products/hydraulic-cylinders/6.jpg"
                alt="Hydraulic Cylinders"
              />
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
