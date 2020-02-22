<template>
    <div style="height: 100%;border:10px solid black;">

        <draggable
                :group="{ name: 'form' ,put:true}"
                ghost-class="ghost"
                :animation="300"
                v-model="dragList"



        >
            <template v-for="(item,index) in dragList" >

                <div  :key="item.key"  style="height: 100%;width: 100%">
                    <NewInputItem
                            :item="item"
                            :index="index"
                    />
                </div>
            </template>
        </draggable>
    </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    import draggable from "vuedraggable";
    import NewInputItem from '@/components/InputDrag/NewInputItem.vue'
    export default {
        name: "RightContainer",
        mounted(){
            PubSub.subscribe('changeWh',(val,item)=>{
                // console.log(item);
            })
        },
        data(){
            return {}
        },
        computed:{

            dragList:{
                get(){
                    return this.$store.state.dragList
                },
                set(val){
                    this.$store.state.dragList = val
                }
            }

        },
        props:{
            list:Object
        },
        components:{
            draggable,
            NewInputItem
        }
    }
</script>

<style lang="css">

</style>