# vue@2 使用 svg-icon：webpack + svg-sprite-loader

项目结构

```bash
$ tree -I node_modules
.
├── README.md
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── index.html
│   └── libs
│       └── vue@2.6.14.min.js
├── src
│   ├── App.vue
│   ├── icons
│   │   ├── SvgIcon.vue
│   │   ├── index.js
│   │   └── svg
│   │       └── open.svg
│   └── main.js
└── webpack.config.js
```

依赖

```
npm i svg-sprite-loader -D
```

webpack 配置

```js
// webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      // 处理svg图标
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',

        include: [
          // 指定svg图标的路径
          path.resolve('./src/icons/svg'),
        ],
        options: {
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
};
```

定义 Vue 组件

```vue
<!-- src/icons/SvgIcon.vue -->
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
// svg 组件
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
  },
};
</script>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
```

```js
// src/icons/index.js
import SvgIcon from './SvgIcon.vue'; // svg component

// import all svg
const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);

requireAll(req);

// register globally
export default {
  install(Vue) {
    Vue.component('svg-icon', SvgIcon);
  },
};
```

全局注册

```js
import Vue from 'vue';
import SvgIcon from './icons/index.js';

Vue.use(SvgIcon);
```

使用 icon

```html
<svg-icon name="open"></svg-icon>
```

完整代码：[https://github.com/mouday/vue2-svg-demo](https://github.com/mouday/vue2-svg-demo)

在线 demo: [https://mouday.github.io/vue2-svg-demo/](https://mouday.github.io/vue2-svg-demo/)

参考：

- [【vue】webpack 插件 svg-sprite-loader---实现自己的 icon 组件 ](https://www.cnblogs.com/teemor/p/9565841.html)
- [手摸手，带你优雅的使用 icon](https://juejin.cn/post/6844903517564436493)
