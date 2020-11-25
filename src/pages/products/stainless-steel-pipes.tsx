import Paper from "@material-ui/core/Paper";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default function StainlessSteelPipes() {
  return (
    <Layout pageTitle="Stainless Steel Pipes | Shenzhen Sam Steel Exports">
      <PageTitle heading="Stainless Steel Pipes" />

      <div className="product-detail-page">
        <div className="image">
          <img
            src="/products/stainless-steel-pipes-tubes.png"
            alt="Stainless Steel Seamless Pipes"
          />
        </div>
        <Paper className="details">
          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Material
          </div>
          <div>
            TP304/304L, 316/316L, 316Ti, 310S, 317L, 321, 347H, 347H, 201, 202,
            UNS S31803, S32750, S32760, SAF2205, SAF2507 etc.
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Standard
          </div>
          <div>ASME, DIN, EN, ISO, JIS, GOST etc.</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Size Range
          </div>
          <div>
            OD: from 6mm to 1000mm (NPS from 1/8" to 40")
            <br />
            WT: from 0.7mm to 38mm (Schedule from 5S to XXS)
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Length
          </div>
          <div>Fixed Length or Un-Fixed Length, Max 30 meters</div>
        </Paper>
      </div>
    </Layout>
  );
}
