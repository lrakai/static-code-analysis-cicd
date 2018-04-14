const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/assets/js/index.js'),
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",

                // Omit any files outside of the project's js directory
                include: [
                    path.resolve(__dirname, 'app/assets/js'),
                ],

                // Only load .js files through Babel
                test: /\.js?$/,
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};