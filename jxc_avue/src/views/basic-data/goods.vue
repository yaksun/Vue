<template>
   <div>
      <el-row>
         <el-col :span="4" id="main_left">
            <GoodsCategory
               :treeStatus="visibleShow"
            />
         </el-col>
         <el-col :span="20" id="main_right">
            <GoodsForm />
         </el-col>
      </el-row>

   </div>
</template>

<script>
    import GoodsForm from '../../components/goods/index'
    import GoodsCategory from '../../components/goods-category/index'
    export default {
        name: "goods",
        data(){
            return{
                visibleShow:true
            }
        },
        components:{
            GoodsForm,
            GoodsCategory

        }
    }
</script>

<style lang="scss">
   #main_left , #main_right{
      height: 100%;
      padding: 5px;
      border: 2px solid pink;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
   }

   .el-scrollbar  {
       .el-scrollbar__wrap{
         .avue-view{
            height: 100%;
            .el-row{
               height: 100%;
            }
         }
       }
   }
</style>