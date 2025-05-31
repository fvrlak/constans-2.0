const debug = process.env.NODE_ENV !== "none";
const path = require('path');
const webpack = require("webpack");

var path = require('path');

const serverConfig = {
    name: 'server',
    context: path.join(__dirname, 'public'),
    entry: {
        serverEntry: ['./server-entry.js']
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'server.js',
        publicPath: 'public/',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [ /*...*/ ]
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    loaders: {
        loader: 'json-loader'
    }
};

export default {
    serverConfig
}