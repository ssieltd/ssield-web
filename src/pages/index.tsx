import React from "react";
import Carousel from "../components/Carousel";
import ClientScroll from "../components/ClientScroll";
import Layout from "../components/Layout";
import MainPoints from "../components/MainPoints";
import MarketingPoints from "../components/MarketingPoints";
import Products from "../components/Products";

export default function Home() {
  return (
    <Layout pageTitle="Shenzhen Sam Steel Exports">
      <Carousel />

      <div className="main-points-section">
        <MainPoints />
      </div>
      <div className="section" style={{ paddingBottom: "5rem" }}>
        <div className="heading">Our Products</div>
        <Products />
      </div>
      {/* <div style={{backgroundColor: '#094d81'}}> */}
      <MarketingPoints />
      {/* </div> */}
      <div className="section">
        <div className="heading">Some of our Customers</div>
        <ClientScroll />
      </div>
    </Layout>
  );
}
