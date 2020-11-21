import Paper from "@material-ui/core/Paper";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default function AllyCarbonSteelPlates() {
  return (
    <Layout pageTitle="Ally / Carbon Steel Plates | Shenzhen Sam Steel Exports">
      <PageTitle heading="Ally / Carbon Steel Plates" />
      <div className="product-detail-page">
        <div className="image">
          <img
            src="/products/sheets-plates.png"
            alt="Ally / Carbon Steel Plates"
          />
        </div>
        <Paper className="details">
          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Product Name
          </div>
          <div>Hot Rolles Steel Plate</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Thickness
          </div>
          <div>1.2mm to 100mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Width
          </div>
          <div>1000mm, 1219mm, 1220mm, 1250mm, 1500mm, 2500mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Length
          </div>
          <div>2000mm to 12000mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Grade
          </div>
          <div>
            4140, 4340, 42CrMo4, 30CrMnSiA, ST37-2, A36, S235JR, SS400, Q345,
            Q235B, SS400, etc.
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Standard
          </div>
          <div>AISI, ASTM, BS, DIN, GB, JIS</div>
         
        </Paper>
      </div>
    </Layout>
  );
}
