import React from "react";
import { GridLoader } from "react-spinners";

const Loader: React.FC = (props) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          margin: "0 auto",
          top: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          zIndex: 200,
          backgroundColor: "rgba(255, 255, 255, .5)",
        }}
      >
        <div
          style={{
            backgroundColor: "#24623c",
            padding: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <GridLoader color={"white"} loading={true} />
          </div>
          <div style={{ marginTop: "15px", color: 'white' }}>Processing....</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
