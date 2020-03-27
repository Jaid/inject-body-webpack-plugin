/** @module inject-body-webpack-plugin */

import HtmlWebpackPlugin from "html-webpack-plugin"
import insertStringAfter from "insert-string-after"
import insertStringBefore from "insert-string-before"

/**
 * @typedef {Object} Options
 * @prop {number} [port = 3000]
 * @prop {string} content
 * @prop {string} position
 */

/**
 * @class
 */
export default class InjectBrowserSyncPlugin {

  /**
   * @constructor
   * @param {Options} [options] Plugin options
   */
  constructor(options) {
    this.options = {
      port: 3000,
      content: "<div id=\"root\"></div>",
      position: "start",
      ...options,
    }
  }

  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    compiler.hooks.compilation.tap(_PKG_NAME, compilation => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(_PKG_NAME, (data, cb) => {
        if (this.options.position === "end") {
          data.html = insertStringBefore(data.html, "</body>", this.options.content)
        } else {
          data.html = insertStringAfter(data.html, "<body>", this.options.content)
        }
        cb(null, data)
      })
    })
  }
}