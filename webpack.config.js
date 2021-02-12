//teaching webpack to do these things
const path=require('path')
var webpack = require('webpack');
module.exports={
    entry: './src/app.js',
    output: {
        path:path.join(__dirname,'public'),//this must be full path
        filename:'bundle.js'
    },
    module:{
        rules:[{//rules for runing babel-loader
            loader:'babel-loader',
            test: /\.js$|jsx/,//only run babel-loader when file name ending with .js made some changes..but there is problem with enviroments which will be solved by .babelrc
            exclude:/node_modules/,   //excluding this files as they are already present there
            // use: {
            //     loader: 'babel-loader',
            // },
            
        },{
            // test: /\.css/, //this is for css
            // use:[
            //     'style-loader',
            //     'css-loader'
            // ]

            test:/\.s?css/,//for scss file
            use:[
                'style-loader',//order matters
                'css-loader',
                'sass-loader',//it will use node-sass loader in background
                
               
            ]
        }]
    },
    mode: 'none',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devtool:'eval-cheap-module-source-map',

    //if u are using webpack server then you can delete bundle.js file bz it will handle its own
    devServer:{// Webpack server is somewhat faster than live-server
        contentBase:path.join(__dirname,'public'),//when there is error of socket change port from 8080 to 8081..don't know why
        historyApiFallback:true

    }
}