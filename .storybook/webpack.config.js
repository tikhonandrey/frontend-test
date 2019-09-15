const path = require("path");

module.exports = ({ config }) => {
  const updatedRules = [
    {
      test: /\.tsx?$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        require.resolve("ts-loader"),
        require.resolve("react-docgen-typescript-loader")
      ]
    },
    {
      test: /\.s?[ac]ss$/,
      use: [
        require.resolve("style-loader"),
        require.resolve("css-loader"),
        require.resolve("sass-loader")
      ],
      include: path.resolve(__dirname, "../src")
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: [require.resolve("file-loader")],
      include: path.resolve(__dirname, "../src")
    }
  ];
  config.module.rules = [...config.module.rules, ...updatedRules];

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
