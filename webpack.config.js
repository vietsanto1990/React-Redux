var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname + '/public/js'),
    filename: '[name].js'
  },
  module: {
  	rules: [
    	{ 
    		test: /\.js$/, 
    		exclude: /node_modules/, 
    		loader: "babel-loader"
        },
        {
        	test: /\.ico$/,
        	exclude: /node_modules/,
        	loader: "file-loader?name=[name].[ext]"
        }
  	]
  },
  devtool: "cheap-eval-source-map",
  devServer: {
  	contentBase: path.join(__dirname, "public"),
	host: "localhost",
	port: 3000,
	hot: true
  }
};