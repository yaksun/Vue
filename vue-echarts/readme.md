vue项目使用echarts+elementui

一.创建vue项目

1.cnpm i vue-cli -g

2.vue init webpack xxx

二.vue引入echarts

1.cnpm install echarts vue-echarts --save

2.配置

```js
// vue.config.js
module.exports = { 
    transpileDependencies: [    'vue-echarts',    'resize-detector'  ]
}
```

3.组件中引入注册使用

```vue
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
```

三.使用elementui

1.cnpm i element-ui -S

cnpm install babel-plugin-component -D

2.配置按需引入

3.注册使用