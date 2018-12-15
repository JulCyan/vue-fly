## 移动端商城 及 PC端后台管理系统


### 技术选型

 1. 框架: vue mui, mint-ui, element
 
 2. ajax: vue-resource 并使用interceptor进行登录检测
 
 3. 路由: vue-router, 编程式导航
 
 4. 数据管理: vuex

### 遇到的问题

1. 由于 mui 框架缺陷的原因, 最终弃用, 使用 element 

2. 在组件样式中, 发现 对 mint-ui 组件添加 CSS 样式: 原因是作用域, 将组件中 style 行内 scope 去掉就可以了
