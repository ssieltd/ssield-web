import Paper from "@material-ui/core/Paper";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default function HighSpeedToolSteel() {
  return (
    <Layout pageTitle="High Speed Tool Steel | Shenzhen Sam Steel Exports">
      <PageTitle heading="High Speed Tool Steel" />

      <div className="product-detail-page">
        <div className="image">
          <img
            src="/products/high-speed-tool-steel.png"
            alt="High Speed Tool Steel"
          />
        </div>
        <Paper className="details">
          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Material
          </div>
          <div>
            H13, D2, SKD11, P20, 35CrMo7, 1.2738, 1.2316, M2, M30, M35, M42,
            Cr06, SUJ2, T5, T3, T4, T7 etc.
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Size
          </div>
          <div>
            Diameter: 1mm - 1000mm
            <br /> Length: Fixed length or Un-Fixed length
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Standard
          </div>
          <div>
            ASTM, JIS, GB, EN (DIN, BS, NF) or as per client's requirements.
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Delivery Condition
          </div>
          <div>Hot Rolled, Cold Drawn, Forged</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Surface require
          </div>
          <div>Black, Grinding, Bright, Polish</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Heat treatment
          </div>
          <div>Quenched, Tempered, Annealed</div>
        </Paper>
      </div>
    </Layout>
  );
}
