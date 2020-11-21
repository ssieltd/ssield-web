import Paper from "@material-ui/core/Paper";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function HonedSeamlessTubes() {
  return (
    <Layout pageTitle="Honed Seamless Tubes | Shenzhen Sam Steel Exports">
      <PageTitle heading="Honed Seamless Tubes" />

      <div className="product-detail-page">
        <div className="image">
          <img src="/products/honed-tubes.png" alt="Honed Seamless Tubes" />
        </div>
        <Paper className="details">
          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Grade
          </div>
          <div>ST 52, Stainless Steel, Ally Steel & Special Steel</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Size Range
          </div>
          <div></div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Inside diameter
          </div>
          <div>From 40mm to 1000mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Max length
          </div>
          <div>20 meters</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Straightness
          </div>
          <div>0.5 / 1000</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Tolerance EXT
          </div>
          <div>DIN 2391</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Tolerance INT
          </div>
          <div>ISO-H7, ISO-H8, ISO-H9</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Roughness(Ra)
          </div>
          <div>Max 0.4μ</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Impact test
          </div>
          <div>
            -20<sup>o</sup>C, 27 J (only for special requirement)
          </div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            ST 52 Chemical composition (%)
          </div>

          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Si (Max)</TableCell>
                  <TableCell>Mn (Max)</TableCell>
                  <TableCell>C (Max)</TableCell>
                  <TableCell>P (Max)</TableCell>
                  <TableCell>S (Max)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>0.55</TableCell>
                  <TableCell>1.6</TableCell>
                  <TableCell>0.22</TableCell>
                  <TableCell>0.025</TableCell>
                  <TableCell>0.025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Mechanical Properties (%)
          </div>

          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Tensile Strength Min</TableCell>
                  <TableCell>Yield Point Min</TableCell>
                  <TableCell>Elongation Min</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    580 N/mm<sup>2</sup>
                  </TableCell>
                  <TableCell>
                    420 N/mm<sup>2</sup>
                  </TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />

          <div className="gallary">
            <div>
              <img src="/products/honed-seamless-tubes/1.jpg" alt="Honed Seamless Tubes" />
            </div>
            <div>
              <img src="/products/honed-seamless-tubes/2.jpg" alt="Honed Seamless Tubes" />
            </div>
            <div>
              <img src="/products/honed-seamless-tubes/3.jpg" alt="Honed Seamless Tubes" />
            </div>
            <div>
              <img src="/products/honed-seamless-tubes/4.jpg" alt="Honed Seamless Tubes" />
            </div>
            <div>
              <img src="/products/honed-seamless-tubes/5.jpg" alt="Honed Seamless Tubes" />
            </div>
            <div>
              <img src="/products/honed-seamless-tubes/6.jpg" alt="Honed Seamless Tubes" />
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
