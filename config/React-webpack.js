var webpack = require('webpack');
let react = {
    entry: "./src/react/index.tsx",
    output: {
        filename: "build.js",
        // path: path + "/www/react/dist",
        publicPath: '/www/react/dist', //启动webpack-dev-server服务时，实际上不生成文件，这里对应的是内存中的目录；
    },
    devServer: {
        // contentBase: "www", //本地服务器所加载的页面所在的目录
        inline: true, //检测文件变化，实时构建并刷新浏览器
        port: "3001",
        proxy: {
            '/api/': {
                target: "",
                secure: false,
                changeOrigin: true
            },
        },
        progress: true,
    },
    devtool: "source-map",
    plugins: [],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader?sourceMap=true&url=false', 'css-loader?sourceMap=true&url=false']
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
};
module.exports = function (path, type) {
    console.log("------------------------------------执行 React 打包 path=" + path);
    // 打包
    if (type) {
        react.output.path = path + "/build/react/dist";
        react.entry = "./src/react/build.tsx";
        react.plugins = [
            new webpack.optimize.UglifyJsPlugin({
                warning: false,
                mangle: true,
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    drop_console: true
                }
            }),
            //全局变量
            new webpack.ProvidePlugin({
                plupload: 'plupload'
            }),
        ];
        react.externals = [];
        return react;
    }
    // 测试
    else {
        react.output.path = path + "/www/react/dist";
        return react;
    }
}