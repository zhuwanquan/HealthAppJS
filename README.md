# HealthAppJS

基于原生前端三件套（HTML、CSS、JavaScript）的健康应用项目，为未来迁移至Vue 3和React框架做好技术准备。

## 项目架构特点

- **多编程范式支持**：
  - 函数式编程：处理数据转换逻辑
  - 面向对象编程：组织复杂业务逻辑模块
  - 响应式编程：处理异步事件流
  - 声明式编程：构建用户界面

- **未来框架迁移准备**：
  - 模块化设计，便于组件化重构
  - 清晰的代码组织，减少迁移成本
  - 符合现代前端开发最佳实践

## 目录结构

```
HealthAppJS/
├── src/              # 源代码目录
│   ├── assets/       # 静态资源
│   │   ├── images/   # 图片资源
│   │   ├── styles/   # 样式文件
│   │   └── fonts/    # 字体资源
│   ├── components/   # 可复用组件（为未来框架迁移准备）
│   ├── core/         # 核心业务逻辑
│   │   ├── models/   # 面向对象模型
│   │   ├── services/ # 服务层
│   │   └── utils/    # 工具函数（函数式编程）
│   ├── data/         # 数据相关
│   │   ├── api/      # API接口
│   │   ├── mock/     # 模拟数据
│   │   └── store/    # 状态管理（为未来框架迁移准备）
│   ├── pages/        # 页面
│   ├── routes/       # 路由管理（为未来框架迁移准备）
│   ├── events/       # 事件处理（响应式编程）
│   └── main.js       # 应用入口
├── public/           # 公共资源
├── config/           # 配置文件
├── scripts/          # 脚本文件
├── .eslintrc.js      # ESLint配置
├── .prettierrc       # Prettier配置
├── .gitignore        # Git忽略文件
├── package.json      # 项目依赖
└── README.md         # 项目说明
```

## 开发环境配置

### 1. 初始化项目

```bash
npm init -y
```

### 2. 安装开发依赖

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
```

### 3. 配置ESLint

创建 `.eslintrc.js` 文件，配置ESLint规则。

### 4. 配置Prettier

创建 `.prettierrc` 文件，配置代码格式化规则。

### 5. 配置Git

创建 `.gitignore` 文件，配置Git忽略规则。

## 编程范式应用

### 函数式编程

- **应用场景**：数据转换、工具函数
- **位置**：`src/core/utils/`
- **特点**：纯函数、不可变数据、函数组合

### 面向对象编程

- **应用场景**：复杂业务逻辑、模型定义
- **位置**：`src/core/models/`
- **特点**：封装、继承、多态

### 响应式编程

- **应用场景**：异步事件处理、数据流管理
- **位置**：`src/events/`
- **特点**：事件监听、数据流、异步处理

### 声明式编程

- **应用场景**：UI构建、状态管理
- **位置**：`src/components/`、`src/pages/`
- **特点**：声明式语法、组件化、状态驱动

## 未来框架迁移策略

### Vue 3迁移

1. 将 `src/components/` 目录下的组件转换为Vue组件
2. 使用Vue的Composition API替代现有逻辑
3. 利用Vue的响应式系统替代自定义事件系统

### React迁移

1. 将 `src/components/` 目录下的组件转换为React组件
2. 使用React Hooks替代现有逻辑
3. 利用React的状态管理方案替代自定义状态管理

## 开发命令

- **安装依赖**：`npm install`
- **代码检查**：`npm run lint`
- **代码格式化**：`npm run format`
