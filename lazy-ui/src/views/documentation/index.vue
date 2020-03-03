<template>
  <div class="app-container documentation-container">
    <div class="ms-doc">
      <h3>README.md</h3>
      <article>
        <h1>代码生成器</h1>
        <p>基于Vue.js 2.x系列 + Element UI + MYBATIS + h2 +freemarker的代码生成器 code-first-generator</p>
        <h2>说明</h2>
        <p>至09年起就见过或者用过很多的代码生成器，自己也写过代码生成器，但是多数是控制台+perprities文件类，或者+xml配置文件，生成有时候特不方便；也见过讲代码生成器嵌在框架里的，但是作为我个人认为，为了不影响框架性能，线上生产环境是没有比较把代码生成器集成到业务框架里的做法的，这是一个不好的做法，而独立出来的代码生成器仅用文本或者xml配置。也及其不方便。为此我写了这套代码生成器，方便同事们提高工作效率。</p>
        <p>另补充点，代码生成器主要分两类，一种是<font color="red">db first</font>(根据表来生成类)，一种是<font color="red">code first</font> (或者叫entity first),个人觉得后者优于前者，本代码生成器也是基于后者，提供由sql生成entity的小功能稍微弥补前者</p>
        <h2>特色</h2>
        <el-checkbox disabled checked>这个生成器核心思想是基于对象生成所有相关代码（而不是读取数据库的schema）</el-checkbox>
        <br>
        <el-checkbox disabled checked>这个生成器不局限于生成java代码，可以自行编写其他模板</el-checkbox>
        <br>
        <el-checkbox disabled checked>这个生成器支持多套代码模板。在创建工程和对象时，可以酌情选择</el-checkbox>
        <br>
        <h2>模板目录</h2>
        <div>
          ── framework<br>
             ├── mybatis-mysql-springboot（框架1）<br>
             │   ├── framework.json<br>
             │   ├── README.md<br>
             │   └── template<br>
             └── springboot-h2-jpa（框架2）<br>
                 ├── framework.json<br>
                 ├── README.md<br>
                 └── template<br>
        </div>
        <br>
        <p style="text-align: right">2017-2-1</p>
        <p style="text-align: right">喻鑫</p>
      </article>
    </div>
  </div>
</template>
<script>
import DropdownMenu from '@/components/Share/dropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data: function() {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }

  .ms-doc{
        width:100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
}
</style>
