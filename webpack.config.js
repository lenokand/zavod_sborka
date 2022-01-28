const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
    entry: ['./src/app.js', './src/app.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 8083,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/public'
                }
            ]
        }),
        new ImageminPlugin({
            
            test: /\.(jpe?g|png|gif|svg)$/i ,
            pngquant: {
                quality: '50-60'
              }
        
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'contentnaya.html',
            template: './src/html/contentnaya.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/html/about.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            template: './src/html/products.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/html/news.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'social.html',
            template: './src/html/social.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: './src/html/contacts.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'filial.html',
            template: './src/html/filial.html',
            inject: 'body'
        })
        // ,
        // new ImageminPlugin({
        //     disable: process.env.NODE_ENV !== 'production', // Disable during development
        //     pngquant: {
        //       quality: '95-100'
        //     }
        //   })

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|bmp|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    }
}