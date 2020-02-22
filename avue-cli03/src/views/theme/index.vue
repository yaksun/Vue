<template>
<div id="bookcaselist">
    <div id="content">
        <el-button @click="changeTheme('theme1')" size="small" type="primary">主题1</el-button>
        <el-button @click="changeTheme('theme2')" size="small" type="primary" >主题2</el-button>
        <el-button @click="changeTheme('theme3')" size="small" type="primary" >主题3</el-button>
    </div>
</div>
</template>
<script>
export default{
    name:'index',
    data(){
        return{
            title:'我的',
            showBack:false
        }
    },
    components:{
    },
    methods:{
        changeTheme(theme){
            window.document.documentElement.setAttribute('data-theme',theme)
        }
    }
}
</script>
<style  scoped lang="scss">
    @import '../../assets/scss/base.scss';
    @import '../../assets/scss/mixin.scss';

    button{
        margin: 0 20px;
    }
    .v-header{
        width: 100%;
        @include bg_color($background-color-theme);
        z-index:9999;
        position: fixed;
        top:0;

        @include px2rem(height,88px);
        @include px2rem(line-height,88px);

        .back{

            display: inline-block;
            float: left;
            position: absolute;
            @include px2rem(padding,0px,12px)
        }

        .back i{
            color:#fff;
        }

        .v-header_title{
            @include font_size(16px);
            text-align:center;
            @include px2rem(width,500px)
            @include overflow();margin: 0 auto;color:#fff;

        }
    }
</style>

