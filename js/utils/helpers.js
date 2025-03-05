/**
 * 工具函数模块
 * 包含一些通用的辅助函数
 */

/**
 * 防抖函数
 * @param {Function} func 要执行的函数
 * @param {number} delay 延迟时间（毫秒）
 * @returns {Function} 防抖处理后的函数
 */
export const debounce = (func, delay) => {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

/**
 * 阻止事件冒泡
 * @param {Event} e 事件对象
 */
export const stopPropagation = (e) => {
    e.stopPropagation();
};

/**
 * 检测设备类型
 * @returns {string} 设备类型：'mobile', 'tablet', 'desktop'
 */
export const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 768) {
        return 'mobile';
    } else if (width < 992) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}; 