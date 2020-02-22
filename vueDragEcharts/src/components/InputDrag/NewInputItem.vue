<template>
    <div style="height: 100%;width: 100%;border:2px dashed red;">

        <draggable tag="div"

            :class="newStyle"
        >
            {{item}}
        </draggable>
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    import PubSub from 'pubsub-js'
    export default {
        name: "NewInputItem",
        props:{
            item:{}
        },
        data(){
            return {
                newStyle:{"width":"","height":""}
            }
        },
        components:{
            draggable
        },
        mounted(){
            // console.log(this.item);
        },
        watch:{
            item:{
               deep:true,
                handler:function(newVal,oldVal){
                   if(newVal != oldVal){
                       // let {item} = this
                       console.log(newVal,oldVal);
                        const {newStyle} = this
                       newStyle.width =   newVal.tempCol/24
                        newStyle.height =  newVal.itemHeight.height

                       // PubSub.publish('changeWh',item)
                   }else{
                       newStyle.width =   oldVal.tempCol/24
                       newStyle.height =  oldVal.itemHeight.height

                   }
                }
            }
        }
    }
</script>

<style lang="">

</style>