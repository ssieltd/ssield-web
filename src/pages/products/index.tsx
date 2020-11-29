import React from "react";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Products from "../../components/Products";

export default function ProductPage() {
  return (
    <Layout pageTitle="Products | Shenzhen Sam Steel Exports">
      <PageTitle heading="Products" />
      <div style={{ padding: "3rem" }}></div>
      <Products />
      <div style={{ padding: "2rem" }}></div>
    </Layout>
  );
}
