const path = require('path')
module.exports = {
    entry: './src/components/index.ts',
    outputDir: {
        path: path.join(__dirname, "./dist"), // 打包后的文件存放在dist文件夹
        publicPath: '/dist/', // 设置公共路径
        filename: "testzcx01.js", // 打包后输出文件的文件设置为btn.js
        library: "testzcx01",
        libraryTarget: 'umd', // 这个选项会尝试把库暴露给前使用的模块定义系统，这使其和CommonJS、AMD兼容或者暴露为全局变量
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
    
}