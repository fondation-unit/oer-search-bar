const path = require("path");
const webpack = require("webpack");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
    ...defaultConfig,
    entry: {
        index: './src/index.tsx',
        styles: './src/styles.ts',
    },
    output: {
        ...defaultConfig.output,
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        ...defaultConfig.module,
        rules: [
            {
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            ...defaultConfig.module.rules
        ]
    },
    resolve: {
        ...defaultConfig.resolve,
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        alias: {
            react: path.resolve('./node_modules/react')
        }
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
