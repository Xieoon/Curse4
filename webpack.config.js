const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry:'/src/index.js',
    mode:'development', 
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        clean:true,
    },
    module:{
        rules:[
            {test:/\.css$/, use:["style-loader","css-loader"]},
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',
            },
            {
                test:/\.hbs$/,
                loader:"handlebars-loader",
            },
    ],
    },
    plugins:[
        new CopyPlugin({
            patterns:[{from:'src/static',to:"static"}],
        }),
        new HtmlWebpackPlugin({
        template:'index.html'
    }),
],
}