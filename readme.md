# inject-body-webpack-plugin


<a href="https://raw.githubusercontent.com/jaid/inject-body-webpack-plugin/master/license.txt"><img src="https://img.shields.io/github/license/jaid/inject-body-webpack-plugin?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor inject-body-webpack-plugin"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/inject-body-webpack-plugin/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Finject-body-webpack-plugin%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/inject-body-webpack-plugin/commits"><img src="https://img.shields.io/github/commits-since/jaid/inject-body-webpack-plugin/v1.2.0?style=flat-square&logo=github" alt="Commits since v1.2.0"/></a> <a href="https://github.com/jaid/inject-body-webpack-plugin/commits"><img src="https://img.shields.io/github/last-commit/jaid/inject-body-webpack-plugin?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/inject-body-webpack-plugin/issues"><img src="https://img.shields.io/github/issues/jaid/inject-body-webpack-plugin?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/inject-body-webpack-plugin"><img src="https://img.shields.io/npm/v/inject-body-webpack-plugin?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/inject-body-webpack-plugin/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/inject-body-webpack-plugin?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/inject-body-webpack-plugin"><img src="https://img.shields.io/npm/dm/inject-body-webpack-plugin?style=flat-square&logo=npm" alt="Downloads"/></a>

**Webpack plugin that injects a custom string into the body of the html-webpack-plugin output.**





## Installation

<a href="https://npmjs.com/package/inject-body-webpack-plugin"><img src="https://img.shields.io/badge/npm-inject--body--webpack--plugin-C23039?style=flat-square&logo=npm" alt="inject-body-webpack-plugin on npm"/></a>

```bash
npm install --save-dev inject-body-webpack-plugin@^1.2.0
```

<a href="https://yarnpkg.com/package/inject-body-webpack-plugin"><img src="https://img.shields.io/badge/Yarn-inject--body--webpack--plugin-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="inject-body-webpack-plugin on Yarn"/></a>

```bash
yarn add --dev inject-body-webpack-plugin@^1.2.0
```



## Example

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




















## Development

<details>
<summary><b>Development hints for maintaining and improving inject-body-webpack-plugin</b></summary>



Setting up:
```bash
git clone git@github.com:jaid/inject-body-webpack-plugin.git
cd inject-body-webpack-plugin
npm install
```
Testing in production environment:
```bash
npm run test
```

</details>

## License
[MIT License](https://raw.githubusercontent.com/jaid/inject-body-webpack-plugin/master/license.txt)  
Copyright © 2021, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)

<!---
Readme generated with tldw v7.1.0
https://github.com/Jaid/tldw
-->