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

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
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
          </div>
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
