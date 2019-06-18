const path=require('path')

const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  entry:'./src/main.js',

  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'[name]-[hash].js'
  },

  mode:'production',

  module:{
    rules:[{
      test:/\.js$/,
      use:'babel-loader'
    }]
  },

  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'./public/index.html')
    })
  ],

  devServer:{
    contentBase:'./dist'
  }

}