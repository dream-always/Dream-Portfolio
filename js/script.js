/**
 * 主JavaScript文件
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 初始化导航交互
    initNavigation();
    
    // 初始化卡片效果
    initCardEffects();
    
    // 确保滚动标题的无缝循环
    initScrollingTitle();
    
    console.log('Portfolio website initialized successfully.');
});

// 初始化导航交互
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 移除所有链接的active类
            navLinks.forEach(item => item.classList.remove('active'));
            
            // 为当前点击的链接添加active类
            link.classList.add('active');
        });
    });
}

// 初始化卡片效果
function initCardEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
}

// 初始化滚动标题
function initScrollingTitle() {
    const title = document.querySelector('.scrolling-title');
    if (!title) return;
    
    // 确保有足够多的克隆元素以实现无缝循环
    const spans = Array.from(title.querySelectorAll('span'));
    
    // 如果元素不够多，添加更多克隆
    if (spans.length < 8) {
        spans.forEach(span => {
            const clone = span.cloneNode(true);
            title.appendChild(clone);
        });
    }
} 