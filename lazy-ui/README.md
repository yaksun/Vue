至09年起就见过或者用过很多的代码生成器，自己也写过代码生成器，但是多数是控制台+perprities文件类，或者+xml配置文件，生成有时候特不方便；也见过讲代码生成器嵌在框架里的，但是作为我个人认为，为了不影响框架性能，线上生产环境是没有比较把代码生成器集成到业务框架里的做法的，这是一个不好的做法，而独立出来的代码生成器仅用文本或者xml配置.也及其不方便。为此我写了这套代码生成器，方便同事们提高工作效率

这个生成器核心思想是基于对象生成所有相关代码（而不是读取数据库的schema）
这个生成器不局限于生成java代码，可以自行编写其他模板
这个生成器支持多套代码模板。在创建工程和对象时，可以酌情选择

模板必须严格按照这个目录来：
├── framework
    ├── mybatis-mysql-springboot（框架1）
    │   ├── framework.json
    │   ├── README.md
    │   └── template
    └── springboot-h2-jpa（框架2）
        ├── framework.json
        ├── README.md
        └── template
 # 安装
 npm install webpack

 npm install
 # 生成文件
 npm run build
 # 运行
 npm run start

 # 运行服务 localhost:8080
 npm run dev

 # 生产环境构建和查看包分析报告
 npm run build --report

# 智能提示
\sloth\src\components\page\EntityDetail.vue
搜索关键字 __ 两个下划线就可以了
或者搜索“//提示开始”或者“______提示结束______”
 /*******************************************************______ESHOP：电商常用字段______****************************************/

