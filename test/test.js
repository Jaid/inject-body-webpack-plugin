import fs from 'fs'
import ms from 'ms.macro'
import path from 'path'
import webpack from 'webpack'

const indexModule = require(path.join(__dirname, '..', 'src'))
const {default: Plugin} = indexModule

it("should run", async () => {
  const generateWebpackConfig = require(path.join(__dirname, '..', 'example', 'webpack.config.js'))
  const webpackConfig = generateWebpackConfig(Plugin)

  try {
    await new Promise((resolve, reject) => {
      webpack(webpackConfig, (err, stats) => { // [Stats Object](#stats-object)
        if (err || stats.hasErrors()) {
          console.log(`Err. ${err}`)
          console.log(`state: ${stats.toString()}`)
          reject(stats)
        }
        resolve()
      })
    })
  } catch (stats) {
    console.log('Webpack failed')
    console.log(stats.toString())
  }
  
  expect(fs.existsSync(path.join(webpackConfig.output.path, webpackConfig.output.filename))).toBeTruthy()
  expect(await fs.promises.readFile(path.resolve(webpackConfig.output.path, 'index.html'), 'utf8')).toMatch(/<body><main\/><\/body><\/html>$/)
}, ms`1 minute`)