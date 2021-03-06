const { defineConfig } = require("@vue/cli-service");
const share = require("../../scripts/share");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = defineConfig({
  publicPath: "http://localhost:8001",
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#1890ff", // 全局主色
            "link-color": "#1890ff", // 链接色
            "success-color": "#52c41a", // 成功色
            "warning-color": "#faad14", // 警告色
            "error-color": "#f5222d", // 错误色
            "font-size-base": "14px", // 主字号
            "heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
            "text-color": "rgba(0, 0, 0, 0.65)", // 主文本色
            "text-color-secondary": "rgba(0, 0, 0, 0.45)", // 次文本色
            "disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
            "border-radius-base": "4px", // 组件/浮层圆角
            "border-color-base": "#d9d9d9", // 边框色
            "box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)" // 浮层阴影
          },
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin("monaco").use(
      new MonacoWebpackPlugin({
        languages: ["javascript", "json", "css", "html", "typescript"]
      })
    );
    config
      .plugin("module-feaderation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          name: "library",
          filename: "libraryEntry.js",
          exposes: {
            "./module": "./src/expose/index.ts"
          },
          remotes: {},
          shared: share.getShare()
        }
      ]);
    config.optimization.delete("splitChunks");
  },
  devServer: {
    port: 8001,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  }
});
