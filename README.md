## 移动端商城 及 PC端后台管理系统

### 项目方向

 1. 熟悉 vue 单页面应用开发流程
 
 2. 熟悉移动端开发框架
 
 3. 能够单独架构 vue 应用
 
 4. 熟悉 vue 全家桶的使用
 
### 技术选型

 1. 框架: vue mui, mint-ui, element, swiper
 
 2. ajax: vue-resource 并使用interceptor进行登录检测
 
 3. 路由: vue-router, 编程式导航
 
 4. 数据管理: vuex

### 遇到的问题

1. 由于 mui 框架缺陷的原因, 最终弃用, 使用 element 

2. 在组件样式中, 发现 对 mint-ui 组件添加 CSS 样式: 原因是作用域, 将组件中 style 行内 scoped 去掉就可以了

3. 在 home 组件进行切换时 swiper 图片布局混乱, 经过观察发现: 只有在切换到 分类页组件才会发生布局混乱, 而前期开发时也未出现布局混乱, 找到分类组件, 发现

初始化swiper 时选择器 是 .swiper-container, 总结: 在切换都有相同插件组件时, 初始化时需要指定为 唯一 选择器, 否则会发生混乱

4. 
