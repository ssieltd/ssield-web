import Paper from "@material-ui/core/Paper";
import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

const equipPhotos: {
  src: string;
  width: number;
  height: number;
}[] = new Array(23).fill(23).map((e, index) => {
  return {
    src: "/equip/equip_" + index + ".jpg",
    width: 3,
    height: 2,
  };
});

const OurFacility: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout pageTitle="Our Facility | Shenzhen Sam Steel Exports">
      <PageTitle heading="Our Facility" />

      <div className="mequip-page">
        <div className="section-head">Specialty and Advantages</div>
        <Paper className="sp-section">
          <div className="text">
            SS steel has complete production technology and managerial
            experience, started the production of various kinds of special
            stainless steel pipes, alloy pipes/rods and plates. etc.
          </div>

          <div className="text">
            The minimum order quantity we can accept is 300kg.
          </div>

          <div className="text">
            With many kinds of processing equipment, we can supply a full range
            of products, including forging, round bar, pipe & tube, plate,
            coils, strip, etc.
          </div>

          <div className="text">
            SS steel has advanced testing equipment, including Eddy Current
            test, Ultrasonic test, Hydraulic test and so on.
          </div>

          <div className="text">
            We have ISO 9001 Certificate and can do the third party inspection
            certificates, such as TUV, BV, Lloyd’s, SGS, etc.
          </div>

          <div className="text">
            Usually, our package is wooden box; besides, economical package is
            also optional.
          </div>

          <div className="text">
            Tolerance of both inside and outside diameter and wall thickness of
            pipe is +/-0.1 mm, which is more precise than standard ASTM and DIN.
          </div>

          <div className="text">
            Pickling, bright annealing, outside polishing, outside and inside
            polishing can be supplied according to customers’ different
            requirements of pipe surface.
          </div>
        </Paper>
        <div style={{height: '2rem'}}></div>
        <div className="section-head">Our Equipment & Facility</div>
        <div className="equip-section">
          <Gallery photos={equipPhotos} onClick={openLightbox} />
        </div>
        <div style={{height: '4rem'}}></div>
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={equipPhotos.map((x: any) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Layout>
  );
};

export default OurFacility;
