<template>
    <div class="all">
        <el-row :style="itemHeight">
            <el-col :span="tempCol" style="height: 100%" >

                   <draggable
                            class="draggable"
                              :group="{ name: 'form', pull: 'clone', put: false }"
                              ghost-class="ghost"
                              :sort="false"
                            :list="itemInfo"

                    >
                           <div class="item" >

                           </div>
                   </draggable>



            </el-col>
        </el-row>
    </div>

</template>

<script>
    import draggable from "vuedraggable";
    export default {
        name: "layoutItem",
        props:{
            inputRow:Number,
            inputCol:Number
        },
        components: {
            draggable
        },
        data(){
            return{
                disabled: false,

            }
        },
        mounted(){
            console.log(this.inputRow);
            console.log(this.inputCol);
        },
       computed:{
           itemHeight:function () {
               return {
                   height:this.inputRow+'%'
               }
           },
           tempCol:function () {
               return parseInt(this.inputCol)
           },
           itemInfo:function () {
               return [
                   { "itemHeight":this.itemHeight,
                       "tempCol":this.tempCol
                   }
               ]
           }


       },
        methods:{
            handelItem(){
                // console.log(this);
            }
        }
    }
</script>

<style lang="css">
    .all{
        width: 80%;
        height: 20%;
        margin: 10% auto;
    }
   .draggable{
       width: 100%;
       height: 100%;
       margin: 20px 0;
   }


.item{
    height: 100%;
    border: 1px dashed brown;
}
</style>