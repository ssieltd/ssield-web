import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

export default function ChromePlatedRod() {
  return (
    <Layout pageTitle="Chrome Plated Rod | Shenzhen Sam Steel Exports">
      <PageTitle heading="Chrome Plated Rod" />
      <div className="product-detail-page">
        <div className="image">
          <img src="/products/chrome-rod.png" alt="Chrome Plated Rod" />
        </div>
        <Paper className="details">
          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Material
          </div>
          <div>CK45, Stainless Steel, Alloy Steel and Special Steel.</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Size Range
          </div>
          <div></div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Outside Diameter
          </div>
          <div>From 12mm to 500mm</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Max Length
          </div>
          <div>16 meters</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Supply Condition
          </div>
          <div>Chrome Plated</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Chrome thickenss
          </div>
          <div>20micron to 50micron</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Outer diameter tolerance
          </div>
          <div>ISO-F7</div>
          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            CK45 Chemical Composition (%)
          </div>

          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>C</TableCell>
                  <TableCell>Mn</TableCell>
                  <TableCell>Si Max</TableCell>
                  <TableCell>S Max</TableCell>
                  <TableCell>P Max</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>0.40-0.50</TableCell>
                  <TableCell>0.60-0.90</TableCell>
                  <TableCell>0.035</TableCell>
                  <TableCell>0.035</TableCell>
                  <TableCell>0.035</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <br />

          <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            MECHANICAL PROPERTIES
          </div>
          <div>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>UTS Min</TableCell>
                    <TableCell>Y.S. Min</TableCell>
                    <TableCell>E % Min</TableCell>
                    <TableCell>Charpy</TableCell>
                    <TableCell>Condition</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      630 N/mm<sup>2</sup>
                    </TableCell>
                    <TableCell>
                      340 N/mm<sup>2</sup>
                    </TableCell>
                    <TableCell>16</TableCell>
                    <TableCell></TableCell>
                    <TableCell>Normalised</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      600 N/mm<sup>2</sup>
                    </TableCell>
                    <TableCell>
                      400 N/mm<sup>2</sup>
                    </TableCell>
                    <TableCell>16</TableCell>
                    <TableCell>41J</TableCell>
                    <TableCell>Hardened & Tempered</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <br />

          <div className="gallary">
            <div>
              <img
                src="/products/chrome-plated-rod/1.jpg"
                alt="Honed Tubes"
              />
            </div>
            {/* <div>
              <img
                src="/products/chrome-plated-rod/2.jpg"
                alt="Honed Tubes"
              />
            </div> */}
            <div>
              <img
                src="/products/chrome-plated-rod/3.jpg"
                alt="Honed Tubes"
              />
            </div>
            <div>
              <img
                src="/products/chrome-plated-rod/4.jpg"
                alt="Honed Tubes"
              />
            </div>
            <div>
              <img
                src="/products/chrome-plated-rod/5.jpg"
                alt="Honed Tubes"
              />
            </div>
            {/* <div>
              <img
                src="/products/chrome-plated-rod/6.jpg"
                alt="Honed Tubes"
              />
            </div> */}
            <div>
              <img
                src="/products/chrome-plated-rod/7.jpg"
                alt="Honed Tubes"
              />
            </div>
            <div>
              <img
                src="/products/chrome-plated-rod/8.jpg"
                alt="Honed Tubes"
              />
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
