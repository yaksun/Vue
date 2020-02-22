<template>
    <div>
        <avue-crud :option="option" :data="data" :page="page" @on-load="onLoad"></avue-crud>
    </div>
</template>
<script>
export default {
    data() {
      return {
        page: {
          pageSize: 20
        },
        option: {
          border: true,
          index: true,
          expandLevel: 3,
          headerAlign: 'center',
          align: 'center',
            tree: true,
          labelWidth: 100,
          column: [
            //   {
            //     width:130,
            //     label: '货商编号',
            //     prop: 'arrange',
            // },
            // {
            //     label: '货商门头',
            //     prop: 'board',
            // },
            // {
            //     label: '联系方式',
            //     prop: 'contact',
            // },

           

              {
                label: '供应商',
                prop: 'goods_supplier',
                type: "icon-select",
                iconList: [{
                label: '货商名称',
                list: ['el-icon-time', 'el-icon-bell', 'el-icon-star-on']
                }]
            },
        
            {
                width:130,
                label: '商品名称',
                prop: 'goods_name',
            },
            {
                label: '货号',
                prop: 'goods_number',
            },
            {
                label: '颜色',
                prop: 'goods_color',
            },
             {
                label: '尺码',
                prop: 'goods_size',
            },
             {
                label: '进价',
                prop: 'goods_bid',
            },
             {
                label: '实价',
                prop: 'actual_price',
            },
            {
                label: '双数',
                prop: 'doods_amount',
            },
           
        
          ]
        },
        data: []
      }
    },
    methods: {
      onLoad(page) {
        //模拟分页
        this.page.total = 40
      }
    }
}
</script>
<style lang="">
    
</style>