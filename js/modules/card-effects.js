/**
 * 卡片交互效果模块
 * 负责处理所有卡片的悬停和交互效果
 */
export const initCardEffects = () => {
    // 卡片悬停效果
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = 'var(--hover-shadow)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--card-shadow)';
        });
    });

    // 'EXPLORE'链接点击效果
    const exploreLinks = document.querySelectorAll('.explore-link');
    exploreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const icon = link.querySelector('i');
            
            // 添加图标动画
            icon.style.transform = 'translateX(5px)';
            setTimeout(() => {
                icon.style.transform = 'translateX(0)';
            }, 300);
            
            // 阻止默认行为
            e.preventDefault();
        });
    });
}; 