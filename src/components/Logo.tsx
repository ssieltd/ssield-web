import React from "react";

interface Props {}

const Logo: React.FC<Props> = (props) => {
  return (
    <div className="logo">
      <img src="/images/logo-with-text.png" alt="Shenzhen Sam Steel Logo" />
    </div>
  );
};

export default Logo;
