// Vite配置文件
import { defineConfig } from 'vite';

export default defineConfig({
  // 项目根目录
  root: '.',
  // 构建输出目录
  build: {
    outDir: 'dist',
    // 生成静态资源的存放路径
    assetsDir: 'assets',
    // 最小化混淆
    minify: 'terser',
    // 构建后是否生成source map
    sourcemap: false,
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  // 开发服务器配置
  server: {
    // 开发服务器端口
    port: 3000,
    // 自动打开浏览器
    open: true,
    // 启用热更新
    hot: true,
    // 代理配置（可选）
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 预览服务器配置
  preview: {
    // 预览服务器端口
    port: 4173,
    // 自动打开浏览器
    open: true
  }
});
