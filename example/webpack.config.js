const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

/**
 * @function
 * @param {Object} TestPlugin
 * @return {import("webpack").Configuration}
 */
module.exports = TestPlugin => {
  return {
    mode: "production",
    context: path.join(__dirname, "..", "example"),
    entry: path.join(__dirname, "..", "example", "src"),
    output: {
      path: path.join(__dirname, "..", "example", "dist"),
      filename: "index.js",
    },
    plugins: [
      new CleanWebpackPlugin,
      new HtmlWebpackPlugin,
      new TestPlugin,
    ],
  }
}