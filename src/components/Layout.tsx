import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = (props) => {
  const router = useRouter();

  useEffect(() => {
    // @ts-ignore
    let Tawk_API = Tawk_API || {};
    let Tawk_LoadStart = new Date();
    (function () {
      let s1 = document.createElement("script");
      let s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5fb4efed3e20f61525e493a2/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            "Shenzhen Sam Steel Exports has rich experience in the field of Hydraulic parts, Cylinder, Tubular Stainless Steel manufacturing, such as Honed Tube, Chrome Plated Rods (Piston Rods), Seamless Tube, Stainless Steel Pipes, Hydraulic Cylinder, Pneumatic Cylinder, Pumps and so on.. "
          }
        ></meta>
        <meta property="og:title" content={props.pageTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={
            "Shenzhen Sam Steel Exports has rich experience in the field of Hydraulic parts, Cylinder, Tubular Stainless Steel manufacturing, such as Honed Tube, Chrome Plated Rods (Piston Rods), Seamless Tube, Stainless Steel Pipes, Hydraulic Cylinder, Pneumatic Cylinder, Pumps and so on.. "
          }
          key="ogdesc"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" />
        <title>{props.pageTitle}</title>
      </Head>
      <section>
        <Header />
        <div className="content">{props.children}</div>
        <Footer showContact={router.pathname !== "/contact"} />
      </section>
    </>
  );
};

export default Layout;
