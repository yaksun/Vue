<template>
    <div>
         <basic-container class="guide-container" >
                     
                        <div style="display:flex;left:200px">
                              <el-select v-model="value" 
                                placeholder="数据类型"
                                style="margin:0 20px"
                                >
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value" 
                                        >
                                        </el-option>
                                </el-select>
                      
                             <el-upload :show-file-list="true" action="action" :on-change="handleChange">
                            <el-button type="primary">导入</el-button>
                            </el-upload>
                            <div style="width:20px;"></div>
                            <el-button type="primary" @click="handleExcel" >导出</el-button>
                    
                        </div>
                       
         </basic-container>

                    <GoodsForm  v-if="this.type" :visible="showTag" @getInfo="getInfo"/>
                   <SupplierForm  v-else :visible="showTag"  @getInfo="getInfo"/>

       
 

    </div>
</template>
<script>
import GoodsForm from '../goods'
import SupplierForm from '../supplier'
import {mapGetters} from 'vuex'
import { async } from 'q'

export default {
   

     data(){
            return {
                
                    showTag:true,
                    type:'',
                    options: [
                        {
                            value: 'type1',
                            label: '供货商档案',
                            }, 
                            {
                            value: 'type2',
                            label: '商品档案',
                            }
                        ],

                      value: 'type2',
                    option:[],
                    list:[],
                  

                    
              
               }

          
     },

    components:{
        GoodsForm,
        SupplierForm
    },

    computed:{
       ...mapGetters(['goodsInfo','supplierInfo'])
    },
    watch:{
        value:function(val,oldVal){
            // console.log(val,oldVal)
            if(val != oldVal){
                this.handleSwitch()
            }
        }
    },

     created(){
     
            this.handleSwitch();
    },
  
    
    methods: {
        // 获取商品子组件信息
        getInfo(val){
            // console.log(val)
            this.list = val.data
            this.option = val.option
         
        },
      handleSwitch(){
      
        this.type=!this.type;
       
           
      
        
       
      },

         getLabel(){
            let temp = ''
           this.options.forEach((item)=>{
               if(item.value == this.value){
                   temp = item.label
                  
               }
           })

           return temp
        },

      //导出execl
        handleExcel(){
           
             
                let opt = {
                title:this.getLabel(),
                column: this.option.column,
                data:this.list
            }

          
            this.$export.excel({
                title: opt.title || new Date().getTime(),
                columns: opt.column,
                data: opt.data
            });
     
        },
       
        // 导入execl
        handleChange(file, fileLis) {
           const {option} = this
          var _this=this 
          
        this.$export.xlsx(file.raw).then(data=>{
            // 首先判断导入的表中字段和页面选取的表是否一致
              


            function getData(){
                var newArr=[]

                for(let i = 0 ;i< option.column.length;i++){
                    
                    if(option.column[i]['label'] != data.header[i] ){
                            newArr.push(option.column[i])
                        
                    }

                
                }

                return newArr

            }
            

            function showData(data){
                
                var str=''
                for(var i =0 ;i<data.length;i++){
                    str+=(data[i].prop+',')
                }
                _this.$message({
                showClose: true,
                message: str+'字段不存在',
                type: "warning"
                })

            }
            

        
          showData(getData())


                // console.log(data)
        })
              
            
        }
    }
}
</script>
<style lang="">
    
</style>