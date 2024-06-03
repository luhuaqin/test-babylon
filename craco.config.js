const path = require('path');

const CracoLessPlugin = require('craco-less');
const {loaderByName } =  require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // 针对Less的相关配置（如module样式）
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {}
          }
        },
        modifyLessRule(lessRule, context) {
          lessRule.exclude = /\.module\.less$/;
          return lessRule;
        },
        modifyLessModuleRule(lessModuleRule, context) {
          lessModuleRule.test = /\.module\.less$/;
          const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
          cssLoader.options.modules = {
            localIdentName: '[local]_[hash:base64:5]'
          };
          return lessModuleRule;
        }
      }
    },
  ],
};