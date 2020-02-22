<template>
    <div>
         <basic-container class="guide-container" >
            <el-button icon='el-icon-question'
                    type="primary"
                    @click="createEntry">
                    新建
            </el-button>
             <el-button icon='el-icon-question'
                        type="primary"
                        style="left:100px"
                        @click="createEntry">
                        审核
                    </el-button>
                    <el-button icon='el-icon-question'
                        type="primary"
                         style="left:200px"
                        @click="createEntry">
                        商品
            </el-button>
         </basic-container>
    <el-row>
        <el-col :span="8">  
            <basic-container class="guide-container" >
                    <el-button icon='el-icon-question'
                        type="primary"
                       
                        @click="createEntry">
                        新建
                    </el-button>
                   
             </basic-container>
     </el-col>
        <el-col :span="8">
             <basic-container class="guide-container" >
                    <el-button icon='el-icon-question'
                        type="primary"
                        @click="createEntry">
                        新建
                    </el-button>
             </basic-container>
        </el-col>
        <el-col :span="8">
             <basic-container class="guide-container" >
                    <el-button icon='el-icon-question'
                        type="primary"
                        @click="createEntry">
                        新建
                    </el-button>
             </basic-container>
        </el-col>

    </el-row>

    <el-row>
        <BasicForm />
    </el-row>
     </div>
</template>
 
<script>
import BasicForm from '../../components/goods_stock/basic_form'
export default {
    components:{
        BasicForm
    },
    methods:{
        createEntry(){
            alert('你要新建什么')
         }
    }
    
}
</script>
<style lang="">
    
</style>