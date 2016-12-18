var path = require('path');
var webpack = require('webpack');
var mode = require('yargs').argv.mode;
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

var libraryName = 'sparrow';
var plugins = [];
var filename = '';
console.log(mode);
// ��������
if(mode == 'production'){
    console.log('11111');
    plugins.push(new uglifyPlugin({minimize:true}));
    // sparrow.min.js
    filename = libraryName+'.min.js';
}
// ��������
else{
    //sparrow.js
    filename = libraryName + '.js';
}



var config = {
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./lib'),
        filename:filename,
        library:libraryName,
        libraryTarget:'umd',
        umdNameDefined:true
    },
    "devtool":"cheap-source-map",
    resolve:{  // ��import��ʱ����Բ���Ҫÿ�ζ����Ϻ�׺�Լ�Ŀ¼��
        extension:['','js','css','json'],
        root:path.resolve('./src')
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'babel',exclude:/node_modules/},
            {test:/\.js$/,loader:'eslint',exclude:/node_modules/}
        ]
    },
    plugins:plugins
};
module.exports = config;