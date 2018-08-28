var webpack = require('webpack');
var path = require('path'); // Resolve paths of application

// var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// var APP_DIR = path.resolve(__dirname, 'src/client/app');

var DIST_DIR = path.resolve(__dirname, 'dist'); //Copy everything that has been prepared to the Dist folder
var SRC_DIR = path.resolve(__dirname, 'src'); //To tell the webpack where to find the untranspiled files

var config = {
  entry: SRC_DIR + '/app/index.js', // To tell the webapck first file we start transpiling and bundling
  output: {
    path: DIST_DIR + "/app",
    filename: 'bundle.js',
    publicPath:"/app/" //Public server where we deploy the dist folder
  }, //With entry and oupput bundle everything
  // With modles transpile everything From Es6 to Es5
  module:{
    loaders:[{
        // test:/\.js$/,  // Which files u have to look
        test: /\.js?/,
        includes:SRC_DIR,
        loader:"babel-loader",
        query:{
            presets:["react","es2015","stage-2"]
            // plugins: ["transform-es2015-modules-amd"]
        }
    }]
  },
  devServer: {
    inline: false
    // contentBase: "./dist",
},
};

module.exports = config;