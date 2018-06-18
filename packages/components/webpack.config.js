const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: {
        TextInput: "./src/textInput/TextInput.jsx"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    externals: [
        "react"
    ]
  };