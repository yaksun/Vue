<template>
    <div>
        <h2>goto</h2>
        <el-button @click="gotoNewPage">跳转新页面</el-button>
        <childTwo></childTwo>
        <br>
       <el-button @click="kuayu">测试跨域访问</el-button>

       <br>
       <br>
       <treeSelect :options="list" @getValue="handleValue" ></treeSelect>   
    </div>
</template>

<script>
    import childTwo from './childTwo'
    import treeSelect from './treeSelect'
    import axios from 'axios'
    export default {
        name: "goto",

        data(){
            return {
                list:[
                    {
                        id:'1',
                        title:'双排奶',
                        children:[
                           {
                                id:'11',
                                title:'要你好看'
                           },
                            {
                                id:'12',
                                title:'血剑轩辕'
                           }
                        ]
                    },
                     {
                        id:'2',
                        title:'双排奶22222',
                        children:[
                           {
                                id:'21',
                                title:'要你好看2222222'
                           },
                            {
                                id:'22',
                                title:'血剑轩辕3333333'
                           }
                        ]
                    }
                ]
            }
        },
        provide(){
            return {
                contain:this
            }
        },
        components:{
            childTwo,
            treeSelect
        },
        methods:{
          handleValue(val){
             console.log(val)
          },


            gotoNewPage () {
                let routeUrl = this.$router.resolve({
                    path: '/login'
                })
                window.open(routeUrl.href, '_blank');
            },

            kuayu(){
                // axios.get('/sugrec?prod=pc_his&from=pc_web&json=1&sid=30963_1455_21119_30841_30997_30824_26350_28703&hisdata=&req=2&csor=0').then(res=>{
                //     console.log(res)
                // })

                // axios.get('/finishTopTenMap').then(res=>{
                //     console.log(res)
                // })

                  axios.get('/getNameToIssue?name=王安祥').then(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="">

</style>
