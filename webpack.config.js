{
    mode: "development"
    // the rest of your webpack.config.js
}
//the below code checks for a css file, and uses the css/style loaders 
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }