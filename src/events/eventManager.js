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
