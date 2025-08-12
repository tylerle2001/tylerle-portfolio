const isProd = process.env.NODE_ENV === "production";
module.exports = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/tylerle-portfolio" : "",
  assetPrefix: isProd ? "/tylerle-portfolio/" : "",
};

