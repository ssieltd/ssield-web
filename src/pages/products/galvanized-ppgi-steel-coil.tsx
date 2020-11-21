import Paper from "@material-ui/core/Paper";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default function GalvanizedPPGISteelCoil() {
  return (
    <Layout pageTitle="Galvanized PPGI Steel Coil | Shenzhen Sam Steel Exports">
      <PageTitle heading="Galvanized PPGI Steel Coil" />

      <div className="product-detail-page">
        <div className="image">
          <img
            src="/products/galvanized-steel-coil.png"
            alt="Galvanized PPGI Steel Coil"
          />
        </div>
        <Paper className="details">
          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Type of coating process
          </div>
          <div>
            Front: Double Coated & Double Dying
            <br />
            Back: Double Coated & Double Dying
            <br />
            Single Coated & Single Dying
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Type of substrate
          </div>
          <div>Steel Coils / Galvanized Steel / Galvalume Steel</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Thickness
          </div>
          <div>0.14mm - 2.0mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Width
          </div>
          <div>600mm - 1500mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Painted Surface
          </div>
          <div>
            Printing / Filmed / Matte / Wrinkled
            <br />
            Paint Top: 15 - 35 Microns
            <br />
            Paint Back: 5 - 35 Microns
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Coat ing Types
          </div>
          <div>
            Top Painted: PVDF / HDP / SMP / PE / PU <br />
            Primer Painted: Polyurethane / Epoxy / PE
            <br />
            Back Painted : Epoxy / Modified Polyester
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
