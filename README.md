## 使用方法
```
import Vue from 'vue'
import vueSelecttree from 'vue-selecttree'

Vue.use(Vue)
Vue.use(vueSelecttree)

<vue-selecttree></vue-selecttree>
```

### 主要维护人员
|人员|github账号|头像|作者网站|联系邮箱|
|---|---|---|---|---|
|杨正炳|[maxiaoqu](https://github.com/maxiaoqu) |  ![](https://avatars1.githubusercontent.com/u/25891598?s=60&v=4)|www.maxiaoqu.com|maxiaoqu@gmail.com

### 安装
```
npm install
```

### 运行
```
npm run serve
```

### 打包
```
npm run build
```

### 检查
```
npm run lint
```

## 简介
&emsp;&emsp;vue-selecttree是基于VueCli3搭建的vue框架，实现简单的树操作；

## 文件结构
```shell
├── public...........................打包所需静态资源
└── src..............................存放文件的相关目录
    └── assets...........................项目静态资源
        └── treeData.json....................树组件需要的数据
    ├── components.......................模板组件
        └── treerows.vue.....................树组件的渲染盒子组件
    ├── iconfont.........................阿里巴巴图标库（icon图标）的树组件用到
    ├── view.............................页面文件
        └──  SelectTree.vue...................树组件展示
    ├── APP.vue..........................app.vue文件
    └── main.js..........................配置（阿里巴巴图标库）在这里引入
```

### 说明
1、npm地址

https://www.npmjs.com/package/vue-selecttree

2、案例代码

https://github.com/maxiaoqu/vue-selecttree

3、案例预览

www.github.maxiaoqu.com/vue-selecttree/

4、API说明

https://github.com/maxiaoqu/maxiaoqu/tree/master/vue-selecttree

5、Bug反馈

https://github.com/maxiaoqu/vue-selecttree/issues
