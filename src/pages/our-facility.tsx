import React from "react";
import { Carousel } from "react-responsive-carousel";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const equipPhotos: {
  src: string;
  title: string;
}[] = new Array(23).fill(23).map((e, index) => {
  return {
    src: "/equip/equip_" + index + ".jpg",
    title: "Equipment",
  };
});

const OurFacility: React.FC = () => {
  return (
    <Layout pageTitle="Our Facility | Shenzhen Sam Steel Exports">
      <PageTitle heading="Our Facility" />

      <div className="mequip-page">
        <div className="section-head">Why Us</div>
        <div className="section-details">
          <div className="row">
            <div className="blank"></div>
            <div className="text">
              <b style={{ textTransform: "uppercase" }}>Hydraulic Cylinder</b>
              <div style={{ height: "1rem" }}></div>
              <div className="sub-row">
                <div className="sub-text">
                  Our cylinders are designed by CAD or 3D, and have been through
                  ISO9001:2000 international quality system certification.
                  <br />
                  Our production is managed according to ERP. These factors
                  ensure our quality to be the top in China. Warranty period for
                  our cylinder is 2 years. For some special cylinders, the
                  period is 5 years. All the drawings, records of production and
                  inspection would be kept for 10 years.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  We choose accessories according to customers’ requirements.
                  Usually, brands of seals can be PARKER, HALLITE or NOK, valves
                  can be SUN or EATON, bearings can be LONGXI or SKF,
                  displacement sensors are MTS or WALSH, and proximity switches
                  are BALLUFF.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  The delivery speed is fast; the average delivery time is 30-60
                  days. Sometimes only 2 weeks for special case.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  Classifications can be DNV, ABS, LR, BV, GL, CCS, RINA, KR,
                  NK, RS.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  Our advanced producing equipments included DOSHAAN machine
                  center, CNC Lather, TACHI scraping roller burnishing machine
                  etc.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  Welding technology certificates from GL and CCS.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  High Precision: Honed Tube (Roughness of tube is 0.2μm and
                  straightness is less than 0.15/1000), Piston Rod (Plating
                  thickness is 10-100 micron. Surface roughness is 0.2μm and
                  straightness is also less than 0.15/1000).
                  <br /> The purity of hydraulic oil is NAS 6-9.
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="blank"></div>
            <div className="text">
              <b style={{ textTransform: "uppercase" }}>Steel Material</b>
              <div style={{ height: "1rem" }}></div>
              <div className="sub-row">
                <div className="sub-text">
                  We complete production technology and managerial experience,
                  started the production of various kinds of special
                  stainless-steel pipes, alloy pipes/rods and plates. etc.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  The minimum order quantity we can accept is 300kg.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  With many kinds of processing equipment, we can supply a full
                  range of products, including forging, round bar, pipe & tube,
                  plate, coils, strip, etc.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  Our advanced testing equipment, include Eddy Current test,
                  Ultrasonic test, Hydraulic test and so on.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  Usually, our package is wooden box; besides, economical
                  package is also optional.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  Tolerance of both inside and outside diameter and wall
                  thickness of pipe is +/-0.1 mm, which is more precise than
                  standard ASTM and DIN.
                </div>
              </div>

              <div className="sub-row">
                <div className="sub-text">
                  Pickling, bright annealing, outside polishing, outside and
                  inside polishing can be supplied according to customers’
                  different requirements of pipe surface.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "2rem" }}></div>
        <div className="section-head">Our Equipment & Facility</div>
        <div className="equip-section">
          <Carousel
            autoPlay={true}
            showThumbs={true}
            showStatus={false}
            infiniteLoop={true}
            showArrows={true}
          >
            {equipPhotos.map((d) => (
              <div key={d.src}>
                <img src={d.src} alt={"Equipment"} />
              </div>
            ))}
          </Carousel>
        </div>
        <div style={{ height: "4rem" }}></div>
      </div>
    </Layout>
  );
};

export default OurFacility;
