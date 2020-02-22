<template>
    <div>
        <el-tree
                id="treeCss"
                ref="cate_tree"
                :data="data"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent"
                :check-on-click-node="true"
                @node-click="chooseNode"

        >
        </el-tree>
        <el-row id="footer-btn" v-if="treeStatus">
            <Add ref="sonNode"></Add>
            <el-button  id="delCategory" type="primary" icon="el-icon-delete" @click.stop="handelDelete()"  size="small">删除</el-button>
        </el-row>
        <el-row v-else>
            <el-button type="primary" icon="el-icon-check" size="small" @click="selectNode">选择</el-button>
            <el-button type="primary" icon="el-icon-close" size="small" @click="changeStatus">关闭</el-button>
        </el-row>

    </div>

</template>

<script>
    import  {mapGetters} from 'vuex'
    import PubSub from 'pubsub-js'
    import Add from './add'
    export default {
        name: "goods-category",
        props:{
            treeStatus:Boolean,
        },
        data() {
            return {
                data:[],
                node:{},
               status:true,

            }

        },
        created(){
            this.data = this.GoodsCategoryInfo

        },
        components:{
            Add
        },
        computed:{
            ...mapGetters(['GoodsCategoryInfo','message'])
        },
        watch:{
            // 深度监听message 计算属性也可以监听
            message:{
                deep:true,
                handler:function (val,oldval) {
                    // console.log('oldval'+oldval)
                    // console.log('val'+val)
                    if(Object.keys(val).length>0){
                             this.$message(val.msg)
                    }
                }
            }
        },
        methods: {

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
            // <el-button size="mini" type="primary" on-click={ () => this.append(data) }>Append</el-button>
            // <el-button size="mini" type="primary" on-click={ () => this.remove(node, data) }>Delete</el-button>
            renderContent(h, { node, data, store }) {
                return (
                    <span class="custom-tree-node">
                        <span>{node.label}</span>
                    </span>
                );
            },
            handelDelete(){
                const {node} =this
                // console.log(node)
                if(node){
                    this.$store.dispatch('DelGoodsCategory',node)
                }else {
                    this.$message('请先选择一个分类')
                }


            },
            // 当节点被点击的时候
            chooseNode(){

                let node = this.$refs.cate_tree.getCurrentNode()
                // console.log(node)
                this.node = node
                if(this.treeStatus == true){
                    this.$refs.sonNode.changeNode(node)
                }else{
                    // if(node.id==1){
                    //     this.node = {}
                    // }

                    if(node.id == 1){
                        this.$message('不能选择所有类别')
                    }else{
                        PubSub.publish('select_tree',node)
                    }

                }


            },

            changeStatus(){
                // 把选择的项清空
                this.node = null
                // 发布关闭信息
                PubSub.publish('change_tree',false)
            },
            // 当点击选择的时候触发
            selectNode(){
                let {node} = this

                if(node.id == 1){
                    this.$message('不能选择所有类别')
                }else if(!Object.keys(node).length){
                    this.$message('必须选择一个分类')
                }else{
                    console.log(node)
                    PubSub.publish('select_tree',node)
                    // 发布关闭信息
                    PubSub.publish('change_tree',false)
                }
            }

        }

    }
</script>

<style lang="scss">
        #footer-btn{
            display: flex;
            margin-left: 20px;
            #delCategory{
                margin-left: 10px;
            }
        }

</style>
