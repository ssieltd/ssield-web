import Link from "next/link";
import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = (props: { showContact: boolean }) => {
  return (
    <div className="footer-main">
      <div style={{ height: "15px", backgroundColor: "#cbcbcb" }}></div>
      {props.showContact ? (
        <>
          <div style={{ backgroundColor: "#4d4d4d" }}>
            <div className="footer-content">
              <div>
                <div className="logo-footer">
                  <img
                    src="/images/logo-with-text.png"
                    alt="Shenzhen Sam Steel Logo"
                  />
                </div>
              </div>

              <div className="content">
                <div className="quick-links">
                  <div className="heading">Quick Links:</div>
                  <div className="block">
                    <div className="col">
                      <div className="link">
                        <Link href="/about">
                          <a>About</a>
                        </Link>
                      </div>

                      <div className="link">
                        <Link href="/manufacturing-equipment">
                          <a>Manufacturing Equipment</a>
                        </Link>
                      </div>

                      <div className="link">
                        <Link href="/products/hydraulic-cylinders">
                          <a>Hydraulic Cylinders</a>
                        </Link>
                      </div>

                      <div className="link">
                        <Link href="/products/honed-seamless-tubes">
                          <a>Honed Seamless Tubes</a>
                        </Link>
                      </div>
                    </div>

                    <div className="col">
                      <div className="link">
                        <Link href="/products/chrome-plated-rod">
                          <a>Chrome Plated Rod</a>
                        </Link>
                      </div>

                      <div className="link">
                        <Link href="/products/stainless-steel-seamless-pipes">
                          <a>Stainless Steel Seamless Pipes</a>
                        </Link>
                      </div>

                      <div className="link">
                        <Link href="/products/high-speed-tool-steel">
                          <a>High Speed Tool Steel</a>
                        </Link>
                      </div>

                      <div className="link">
                        <Link href="/products/steel-coils-sheets">
                          <a>Steel Coils / Sheets</a>
                        </Link>
                      </div>
                    </div>

                    <div className="col">
                      <div className="link">
                        <Link href="/products/galvanized-ppgi-steel-coil">
                          <a>Galvanized PPGI Steel Coil</a>
                        </Link>
                      </div>

                      <div className="link">
                        <Link href="/products/alloy-carbon-steel-plates">
                          <a>Alloy / Carbon Steel Plates</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contacts">
                  <div className="col">
                    <div className="block">
                      <div className="heading">Address:</div>
                      <div className="line">
                        Shangmeishidai Building.
                        <br />
                        No. 57 Longgang East Room
                        <br />
                        Longhua Distt.
                        <br />
                        Shanzhen, China.
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="block">
                      <div className="heading">Phone:</div>
                      <div className="line">+86 1 372 432 2268</div>
                    </div>
                    <div className="block">
                      <div className="heading">Fax:</div>
                      <div className="line">+86 755 33 26 3717</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="block">
                      <div className="heading">Email:</div>
                      <div className="line">
                        info@ssieltd.com
                        <br />
                        ssamieco@qq.com
                        <br />
                        ssamieco01@qq.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SocialIcons />
            <div style={{ height: "25px" }}></div>
          </div>
        </>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4347.674290112444!2d114.03724669999997!3d22.676803600000045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQwJzM2LjUiTiAxMTTCsDAyJzE0LjEiRQ!5e1!3m2!1sen!2s!4v1527693193315"
          height="300"
          frameBorder="0"
          style={{ border: 0, width: "100%" }}
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
          title={"Google Map Location"}
        />
      )}

      <div style={{ backgroundColor: "#cbcbcb" }}>
        <div className="footer-line">
          <div>
            &copy; {new Date().getFullYear()} Shenzhen Sam Steel Exports. All
            rights reserved.
          </div>
          <div>
            Designed & Developed by:{" "}
            <a
              href={"https://www.twitter.com/ahsanghalib"}
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ color: "#000", textDecoration: "none" }}
            >
              Heptfy Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
