<template>
  <div>
    <h2>测试</h2>
    <grid :grid-data="data" :columns="columns" showCheckbox columnSet></grid>
  </div>
</template>
<script>

  export default{
  name:'HelloWorld',
  data(){
    return{
        data:[
          {
            goods_id:'1',
            goods_number:'7499',
            goods_name:'摄像头',
            goods_version:'p2',
            goods_type:'电器',
            inPrice:100,
            outPrice:129,
            supplier_name:'陶华碧老干妈香辣脆油辣椒'

          },
          {
            goods_id:'2',
            goods_number:'7479',
            goods_name:'电线杆',
            goods_version:'v5',
            goods_type:'公共设施',
            inPrice:100,
            outPrice:150,
            supplier_name:'华为计算机系统有限公司'

          },
        ],
      columns:[
        {
          label:"ID",
          prop:"goods_id"
        },
        {
          label:'商品编号',
          prop:'goods_number',


        },
        {
          label:'商品名称',
          prop:'goods_name'
        },
        {
          label: "商品版本",
          prop: "goods_version",
        },
        {
          label: "商品类别",
          prop: "goods_type",
          formslot:true
        },
        {
          label:"商品进价",
          prop:"inPrice"
        },
        {
          label:"商品售价",
          prop:"outPrice"
        },
        {
          label:"供货商",
          prop:"supplier_name"
        }
      ]
    }
  }
}
</script>
<style>

</style>
