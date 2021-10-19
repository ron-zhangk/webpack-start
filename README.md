# webpack-start
webpack4

"start": "webpack-dev-server --open",
"start": "webpack-dev-server --open --config webpack.dev.js",
"build": "webpack"
"build": "webpack --config webpack.prod.js"

# 环境变量
process.env.NODE_ENV !== 'production'