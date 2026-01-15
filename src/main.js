// 应用入口文件
// 为未来迁移至Vue 3和React框架做好准备

// 导入核心模块
import { initApp } from './core/services/appService';
import { setupEventListeners } from './events/eventManager';

// 初始化应用
function bootstrap() {
  // 初始化核心服务
  initApp();
  
  // 设置事件监听器
  setupEventListeners();
  
  // 渲染应用
  renderApp();
}

// 渲染应用（声明式编程示例）
function renderApp() {
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.innerHTML = `
      <div class="app-container">
        <header class="app-header">
          <h1>HealthAppJS</h1>
        </header>
        <main class="app-main">
          <p>健康应用项目，为未来迁移至Vue 3和React框架做好技术准备</p>
        </main>
        <footer class="app-footer">
          <p>© 2026 HealthAppJS</p>
        </footer>
      </div>
    `;
  }
}

// 启动应用
bootstrap();
