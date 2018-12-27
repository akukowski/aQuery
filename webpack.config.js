const {resolve} = require("path");

module.exports = {

    entry: {
        aQuery: "./main.js"
    },

    output: {
        path: resolve(__dirname + "/dist/"),
        filename: "[name].min.js",
        library: "aQuery",
        libraryTarget: "umd",
        umdNamedDefine: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["transform-runtime", "add-module-exports"],
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }

};