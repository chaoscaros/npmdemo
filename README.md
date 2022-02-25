# npmdemo
vue3+ts制作组件demo

## 教程指导：http://www.javashuo.com/article/p-bdfxwrjq-ge.html
## 教程git源码:https://github.com/kuangshp/maucash-model

## 1.新建一个vue+ts的项目
## 2.新建一个组件，本项目组件在components中
## 3.在components新建一个目录，名称为你的组件名，例如：HelloWorld
## 4.在HelloWorld目录下新建HelloWorld.vue和index.ts
## 5.HelloWorld.vue为组件界面,index.ts导出组件，让外部可以访问

## index.ts源码：
import HelloWorld from "./HelloWorld.vue"; // @ is an alias to /src
export default HelloWorld;

## 6.在components新建一个index.ts和index.d.ts，index.ts为导出components目录下的全部组件,index.d.ts为声明组件，每次新增组件就要在index.d.ts中声明，在index.ts的const components中增加

## index.ts源码:
import Vue from 'vue';
import HelloWorld from './HelloWorld';
const components: { [propsName: string]: any } = {
    HelloWorld,
};

const install = (vue: typeof Vue): void => {
  // 安装全部的插件
  Object.keys(components).forEach((key) => {
    vue.component(key, components[key]);
  });
};

export default {
  install,
  ...components,
};

## index.d.ts源码:

import Vue from 'vue';
declare function install(vue: typeof Vue): void;
declare const _default: {
  install: typeof install;
};
export default _default;
export * from './HelloWorld';

## 7.修改vue.config.ts，设置打包路径，修改package.json，添加配置

## package.json配置相关:
"name": "testzcx01",    组件名称，在npm上不能存在相同的
  "version": "0.0.15",  组件版本，每次上传新的，要增加版本号
  "author": "chaoscaros",   作者
  "license": "MIT", 用来指定一个许可证，让人知道使用的权利和限制。组件基本是MIT
  "main": "./lib/testzcx01.common.js",  指定组件入口
  "module": "./lib/testzcx01.common.js",    ts需要指定的组件入口
  "types": "./src/components/index.d.ts",   ts组件的声明文件位置
  "private": false, 是否私有
  "description": "自己佬牛逼", 放简介，字符串，方便在npm search中搜索
  "scripts": {
    "lib": "vue-cli-service build --target lib --name testzcx01 --dest lib ./src/components/index.ts" 配置打包生成lib命令typescript
  },
  "keywords": [     关键字，在npm上用于查询
    "自己佬牛逼"
  ],

## 8.执行npm run lib打包组件，打包后执行npm adduser登录账号，尽量和package的作者一样，然后npm publish上传

## 9.在需要引用的项目执行 npm i [组件名] 就可以下载组件，然后在main.ts/main.js中引入

## main.ts全局引入组件， TestDemo为组件名，自定义的，用Vue.use([组件名])引入组件，由于打包的组件样式是单独的，所以还需要引入样式
import TestDemo from "testzcx01";
import 'testzcx01/lib/testzcx01.css';

Vue.use(TestDemo)

## 10.单独引入组件，比如该项目的src/views/Home.vue

## Home.vue源码:
import {HelloWorld} from "testzcx01"

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
});

## 11.使用组件
## Home.vue源码:
<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />