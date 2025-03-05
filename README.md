# 个人作品集网站

这是一个简洁现代的个人作品集单页面应用，采用纯HTML、CSS和JavaScript构建，不依赖复杂框架。

## 特点

- 🎨 现代简约的设计风格
- 📱 响应式设计，适配各种设备
- 🚀 轻量级，无需构建工具
- 💎 交互效果流畅
- 🔧 易于自定义
- 📦 模块化的CSS和JavaScript结构

## 文件结构

```
/
├── index.html                 # 主HTML文件
├── css/
│   ├── styles.css             # CSS主文件（导入其他CSS文件）
│   ├── base/                  # 基础样式
│   │   ├── reset.css          # 重置样式
│   │   ├── typography.css     # 排版样式
│   │   └── variables.css      # CSS变量
│   ├── components/            # 组件样式
│   │   ├── cards.css          # 卡片组件样式
│   │   └── navbar.css         # 导航栏样式
│   ├── layout/                # 布局样式
│   │   └── container.css      # 容器布局
│   └── utils/                 # 工具样式
│       └── responsive.css     # 响应式样式
├── js/
│   ├── script.js              # JS主文件（导入其他JS模块）
│   ├── modules/               # JS功能模块
│   │   ├── card-effects.js    # 卡片交互效果
│   │   └── navigation.js      # 导航交互
│   └── utils/                 # JS工具函数
│       └── helpers.js         # 辅助函数
└── images/
    └── profile.jpg            # 个人头像图片
```

## 如何使用

1. 打开 `index.html` 文件查看网站效果
2. 修改内容：
   - 在 `index.html` 中修改个人信息、技能和社交媒体链接
   - 在对应的CSS文件中自定义样式
   - 在对应的JS模块中修改交互效果

## 模块化结构

### CSS模块化

- **base**: 包含基础样式、变量和排版
- **components**: 包含独立组件的样式
- **layout**: 包含页面布局相关样式
- **utils**: 包含工具和辅助样式

### JavaScript模块化

- **modules**: 包含功能模块
- **utils**: 包含工具函数

## 自定义指南

### 替换头像图片

在 `images` 文件夹中放置您的个人照片，并将其命名为 `profile.jpg`，或修改 `index.html` 中的图片路径：

```html
<img src="images/YOUR_IMAGE_FILENAME" alt="Your name profile picture" id="profile-img">
```

### 修改颜色主题

在 `css/base/variables.css` 文件中，修改CSS变量的值：

```css
:root {
    --primary-color: #你想要的主色调;
    --secondary-color: #你想要的辅助色调;
    /* 其他变量... */
}
```

### 添加更多社交媒体图标

在 `index.html` 中的 `.social-icons` 部分添加更多图标：

```html
<a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
```

## 浏览器兼容性

该网站兼容所有现代浏览器，包括：
- Chrome
- Firefox
- Safari
- Edge

## 许可证

您可以自由使用和修改此模板。 