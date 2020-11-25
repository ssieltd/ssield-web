import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="products-grid">
      <ProductTile
        imgSrc="/products/hydraulic-cylinders.png"
        title="Hydraulic Cylinders"
        link="/products/hydraulic-cylinders"
      />
      <ProductTile
        imgSrc="/products/honed-tubes.png"
        title="Honed Tubes"
        link="/products/honed-tubes"
      />
      <ProductTile
        imgSrc="/products/chrome-rod.png"
        title="Chrome Plated Rod"
        link="/products/chrome-plated-rod"
      />
      <ProductTile
        imgSrc="/products/stainless-steel-pipes-tubes.png"
        title="Stainless Steel Pipes"
        link="/products/stainless-steel-pipes"
      />
      <ProductTile
        imgSrc="/products/high-speed-tool-steel.png"
        title="High Speed Tool Steel"
        link="/products/high-speed-tool-steel"
      />
      <ProductTile
        imgSrc="/products/coils-sheets.png"
        title="Steel Coils / Sheets"
        link="/products/steel-coils-sheets"
      />
      <ProductTile
        imgSrc="/products/galvanized-steel-coil.png"
        title="Galvanized PPGI Steel Coil"
        link="/products/galvanized-ppgi-steel-coil"
      />
      <ProductTile
        imgSrc="/products/sheets-plates.png"
        title="Alloy / Carbon Steel Plates"
        link="/products/alloy-carbon-steel-plates"
      />
    </div>
  );
};

export default Products;

const ProductTile = (props: {
  imgSrc: string;
  title: string;
  link: string;
}) => {
  return (
    <Link href={props.link}>
      <div className="product-tile">
        <img src={props.imgSrc} alt={props.title} />
        <div className="text">{props.title}</div>
      </div>
    </Link>
  );
};
