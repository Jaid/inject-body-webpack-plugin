/** @module inject-body-webpack-plugin */

import HtmlWebpackPlugin from "html-webpack-plugin"
import insertStringAfter from "insert-string-after"
import insertStringBefore from "insert-string-before"

import debug from "lib/debug"

/**
 * @typedef {Object} Options
 * @prop {string} content
 * @prop {string} position
 */

/**
 * @class
 */
export default class InjectBodyPlugin {

  /**
   * @constructor
   * @param {Options} [options] Plugin options
   */
  constructor(options) {
    this.options = {
      content: "<div id=root/>",
      position: "start",
      ...options,
    }
  }

  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    debug("Options: %o", this.options)
    compiler.hooks.compilation.tap(process.env.REPLACE_PKG_NAME, compilation => {
      debug("tap: compilation")
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tap(process.env.REPLACE_PKG_NAME, data => {
        debug("tap: html-webpack-plugin beforeEmit")
        debug("Before: %s", data.html)
        if (this.options.position === "end") {
          data.html = insertStringBefore(data.html, "</body>", this.options.content)
        } else {
          data.html = insertStringAfter(data.html, "<body>", this.options.content)
        }
        debug("After: %s", data.html)
      })
    })
  }

}