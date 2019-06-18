# react 使用

- cdn 链接的方式
- 自己搭建 webpack 的环境
- 使用一些官方或第三方的脚手架

## cdn 链接的方式

```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```
//注意要引入两个库
- react         react核心内容
- react-dom     react用来渲染真实dom的一个库

## 自己搭建 webapck 环境

1. npm init -y
2. npm install --save-dev webpack webpack-cli webpack-dev-server
3. npm install --save react react-dom
4. npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
5. 写 webpack 配置文件
6. 写 babel 配置文件
7. src 文件夹 放源代码
8. public 文件夹 放静态资源文件

## 使用脚手架 create-react-app

1. npm install -g create-react-app
2. create-react-app <ProjectName>

或者

1. npx create-react-app <ProjectName>

## yarn 与 npm 的一些使用

| 描述                       | npm                        | yarn                   |
| -------------------------- | -------------------------- | ---------------------- |
| 初始化                     | npm init                   | yarn init              |
| 安装依赖                   | npm install --save xxx     | yarn add xxx           |
| 安装开发依赖               | npm install --save-dev xxx | yarn add xxx -D        |
| 删除依赖                   | npm uninstall xxx          | yarn remove xxx        |
| 全局安装                   | npm install -g xxx         | yarn global add xxx    |
| 删除全局依赖               | npm uninstall -g xxx       | yarn global remove xxx |
| 根据 package.json 主动安装 | npm install                | yarn                   |

npm run 脚本
yarn 脚本

