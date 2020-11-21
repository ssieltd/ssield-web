import React from "react";

const PageTitle = (props: { heading: string }) => {
  return (
    <div className="page-title">
      <div className="heading">{props.heading}</div>
    </div>
  );
};

export default PageTitle;
