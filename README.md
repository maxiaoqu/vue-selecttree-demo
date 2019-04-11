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