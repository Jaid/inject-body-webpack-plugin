import fsp from "@absolunet/fsp"
import ms from "ms.macro"
import path from "path"
import pify from "pify"
import webpack from "webpack"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))
const {default: Plugin} = indexModule

it("should run", async () => {
  const generateWebpackConfig = require(path.join(__dirname, "..", "example", "webpack.config.js"))
  const webpackConfig = generateWebpackConfig(Plugin)
  await pify(webpack)(webpackConfig)
  const outputFile = path.join(webpackConfig.output.path, webpackConfig.output.filename)
  const exists = await fsp.pathExists(outputFile)
  expect(exists).toBeTruthy()
  const htmlOutputFile = path.resolve(outputFile, "..", "index.html")
  const output = await fsp.readFile(htmlOutputFile, "utf8")
  expect(output).toMatch(/<body><main\/><\/body><\/html>$/)
}, ms`1 minute`)