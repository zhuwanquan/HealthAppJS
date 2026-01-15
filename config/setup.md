# 环境配置步骤文档

## 1. 项目初始化

### 1.1 创建项目目录

```bash
# 创建项目根目录
mkdir HealthAppJS
cd HealthAppJS
```

### 1.2 初始化npm项目

```bash
# 初始化npm项目
npm init -y
```

## 2. 安装开发依赖

### 2.1 安装ESLint和Prettier

```bash
# 安装ESLint、Prettier及其相关插件
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
```

## 3. 配置文件设置

### 3.1 ESLint配置

创建 `.eslintrc.js` 文件，内容如下：

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never']
  }
};
```

### 3.2 Prettier配置

创建 `.prettierrc` 文件，内容如下：

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "printWidth": 80
}
```

### 3.3 Git配置

创建 `.gitignore` 文件，内容如下：

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Build outputs
dist/
build/
out/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE and editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
Thumbs.db
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db

# Logs
logs
*.log

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp
.cache

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
```

### 3.4 package.json配置

更新 `package.json` 文件，添加脚本命令：

```json
{
  "name": "health-app-js",
  "version": "1.0.0",
  "description": "健康应用项目，为未来迁移至Vue 3和React框架做好技术准备",
  "main": "src/main.js",
  "scripts": {
    "dev": "echo 'Starting development server...'",
    "lint": "eslint src/**/*.js",
    "format": "prettier --write src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "test": "echo 'Running tests...'"
  },
  "keywords": [
    "health",
    "app",
    "javascript",
    "frontend"
  ],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "eslint": "^8.28.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "prettier": "^2.8.0"
  }
}
```

## 4. 项目目录结构创建

### 4.1 创建目录结构

```bash
# 创建源代码目录结构
mkdir -p src/assets/images src/assets/styles src/assets/fonts src/components src/core/models src/core/services src/core/utils src/data/api src/data/mock src/data/store src/pages src/routes src/events

# 创建公共资源目录
mkdir -p public

# 创建配置文件目录
mkdir -p config

# 创建脚本文件目录
mkdir -p scripts
```

## 5. 示例文件创建

### 5.1 应用入口文件

创建 `src/main.js` 文件，内容如下：

```javascript
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
```

### 5.2 函数式编程示例

创建 `src/core/utils/dataTransformer.js` 文件，内容如下：

```javascript
// 函数式编程示例 - 数据转换工具

// 纯函数：转换用户数据
export const transformUserData = userData => {
  return {
    ...userData,
    fullName: `${userData.firstName} ${userData.lastName}`,
    age: calculateAge(userData.birthDate),
    isAdult: calculateAge(userData.birthDate) >= 18
  };
};

// 纯函数：计算年龄
const calculateAge = birthDate => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

// 纯函数：过滤健康数据
export const filterHealthData = (data, filters) => {
  return data.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === null || value === undefined) return true;
      return item[key] === value;
    });
  });
};

// 函数组合：转换和过滤数据
export const processHealthData = (data, filters) => {
  return filterHealthData(data, filters)
    .map(item => ({
      ...item,
      processedAt: new Date().toISOString()
    }));
};
```

### 5.3 面向对象编程示例

创建 `src/core/models/User.js` 文件，内容如下：

```javascript
// 面向对象编程示例 - 用户模型

class User {
  constructor(id, firstName, lastName, birthDate, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.email = email;
  }

  // 获取全名
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // 计算年龄
  getAge() {
    const today = new Date();
    const birth = new Date(this.birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }

  // 检查是否为成年人
  isAdult() {
    return this.getAge() >= 18;
  }

  // 更新用户信息
  updateInfo(info) {
    Object.assign(this, info);
    return this;
  }

  // 序列化用户数据
  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email,
      fullName: this.getFullName(),
      age: this.getAge(),
      isAdult: this.isAdult()
    };
  }
}

// 导出用户模型
export default User;
```

### 5.4 响应式编程示例

创建 `src/events/eventManager.js` 文件，内容如下：

```javascript
// 响应式编程示例 - 事件管理器

// 事件总线类
class EventBus {
  constructor() {
    this.events = {};
  }

  // 订阅事件
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    
    // 返回取消订阅函数
    return () => {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    };
  }

  // 发布事件
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => {
        callback(data);
      });
    }
  }

  // 订阅一次事件
  once(event, callback) {
    const onceCallback = data => {
      callback(data);
      this.off(event, onceCallback);
    };
    this.on(event, onceCallback);
  }

  // 取消订阅
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }

  // 清空所有事件
  clear() {
    this.events = {};
  }
}

// 创建事件总线实例
const eventBus = new EventBus();

// 设置事件监听器（响应式编程示例）
export const setupEventListeners = () => {
  // 监听DOM事件
  document.addEventListener('DOMContentLoaded', () => {
    eventBus.emit('dom:loaded');
  });

  // 监听窗口 resize 事件
  window.addEventListener('resize', () => {
    eventBus.emit('window:resize', {
      width: window.innerWidth,
      height: window.innerHeight
    });
  });

  // 监听自定义事件
  eventBus.on('user:loggedIn', userData => {
    console.log('User logged in:', userData);
  });

  eventBus.on('data:updated', data => {
    console.log('Data updated:', data);
  });
};

// 导出事件总线
export default eventBus;
```

## 6. 开发环境使用

### 6.1 代码检查

```bash
# 运行ESLint检查代码质量
npm run lint

# 自动修复ESLint错误
npm run lint:fix
```

### 6.2 代码格式化

```bash
# 使用Prettier格式化代码
npm run format
```

## 7. 未来框架迁移准备

### 7.1 Vue 3迁移准备

- 目录结构已按照Vue项目规范设计
- 组件目录 `src/components/` 已预留
- 路由目录 `src/routes/` 已预留
- 状态管理目录 `src/data/store/` 已预留

### 7.2 React迁移准备

- 目录结构已按照React项目规范设计
- 组件目录 `src/components/` 已预留
- 路由目录 `src/routes/` 已预留
- 状态管理目录 `src/data/store/` 已预留

## 8. 编程范式应用指南

### 8.1 函数式编程

- **应用场景**：数据转换、工具函数
- **位置**：`src/core/utils/`
- **特点**：纯函数、不可变数据、函数组合

### 8.2 面向对象编程

- **应用场景**：复杂业务逻辑、模型定义
- **位置**：`src/core/models/`
- **特点**：封装、继承、多态

### 8.3 响应式编程

- **应用场景**：异步事件处理、数据流管理
- **位置**：`src/events/`
- **特点**：事件监听、数据流、异步处理

### 8.4 声明式编程

- **应用场景**：UI构建、状态管理
- **位置**：`src/components/`、`src/pages/`
- **特点**：声明式语法、组件化、状态驱动
