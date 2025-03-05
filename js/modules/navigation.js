/**
 * 导航交互效果模块
 * 负责处理导航链接和社交图标的交互效果
 */
export const initNavigation = () => {
    // 导航链接点击效果
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 移除所有链接的active类
            navLinks.forEach(item => item.classList.remove('active'));
            // 为当前点击的链接添加active类
            link.classList.add('active');
            
            // 阻止默认行为，因为这是单页面应用
            e.preventDefault();
        });
    });

    // 社交图标点击效果
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            // 添加点击动画效果
            icon.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 150);
            
            // 阻止默认行为
            e.preventDefault();
        });
    });
}; 