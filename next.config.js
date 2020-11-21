module.exports = {
  poweredByHeader: false,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/products": { page: "/products" },
      "/products/hydraulic-cylinders": { page: "/products/hydraulic-cylinders" },
      "/products/honed-seamless-tubes": { page: "/products/honed-seamless-tubes" },
      "/products/chrome-plated-rod": { page: "/products/chrome-plated-rod" },
      "/products/stainless-steel-seamless-pipes": { page: "/products/stainless-steel-seamless-pipes" },
      "/products/high-speed-tool-steel": { page: "/products/high-speed-tool-steel" },
      "/products/steel-coils-sheets": { page: "/products/steel-coils-sheets" },
      "/products/galvanized-ppgi-steel-coil": { page: "/products/galvanized-ppgi-steel-coil" },
      "/products/alloy-carbon-steel-plates": { page: "/products/alloy-carbon-steel-plates" },
      "/our-facility": { page: "/our-facility" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
    };
  },
};
