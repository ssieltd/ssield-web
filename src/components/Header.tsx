import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="header-main">
      {/* <div style={{textAlign: 'right'}}>
        <SocialIcons />
      </div> */}
      <div className="header-bg">
        <div className="container">
          <div className="header">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
