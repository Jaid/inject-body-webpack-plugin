#### Input

webpack.config.babel.js
```js
import HtmlWebpackPlugin from "html-webpack-plugin"
import InjectBodyPlugin from "inject-body-webpack-plugin"

export default {
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: "<html><body></body></html>"
    }),
    new InjectBodyPlugin({
      content: '<main id="root">Hi!</main>'
    }),
  ],
}
```

#### Output

index.html
```html
<html><body><main id="root">Hi!</main></body></html>
```