<template>
    <basicTree></basicTree>
</template>

<script>
    import basicTree from './index'
    import  {mapGetters} from 'vuex'
    export default {
        name: "list",

        components:{
            basicTree
        },
        created(){
            this.data = this.GoodsCategoryInfo
        },
        computed:{
            ...mapGetters(['GoodsCategoryInfo'])
        },
    }
</script>

<style scoped>

</style>