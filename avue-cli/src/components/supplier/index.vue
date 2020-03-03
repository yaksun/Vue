<template>
    <div>
        <avue-crud 
        :option="option"
         :data="data" 
         :page="page"
          @on-load="onLoad"
          @row-dblclick="handleRowDBLClick"
          @row-click="handelClick"
           @row-save="addSupplier"
           @row-update="updateSupplier"
         @row-del="handelDel"
         @selection-change="selectionChange"
         @search-change="searchChange"
         @search-reset="searchReset"
          ref="crud"
           v-model="obj"
           >

            
             <template slot="menuLeft" >
              <el-button type="primary" size="small"  @click.stop="handleAdd()" v-show="status"  >新增</el-button>
            </template>
             <template slot="menuLeft">
              <el-button type="primary" size="small" @click.stop="handleEdit()" v-show="status">编辑</el-button>
            </template>
            <template slot="menuLeft">
              <el-button type="primary" size="small" @click.stop="handelDelete()" v-show="status">删除</el-button>
            </template>
             <template slot="menuLeft">
              <el-button type="primary" size="small" @click.stop="handelConfirm()" v-show="confirmStatus">确认</el-button>
            </template>
              <template slot="search">
            <el-col :md="6" :xs="24">
              <el-form-item label="关键字">
                <el-input placeholder="请输入关键字" size="small" v-model="searchForm.solt" />
              </el-form-item>
            </el-col>
          </template>
 
           

           </avue-crud>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props:{
      confirmStatus:Boolean,
      visible:Boolean
      
    },
    data() {
      return {
        searchForm:{},
        page: {
          pageSize: 20
        },
        obj:{

        },
        rowData:[],
        option: {
          // 操作栏图标显示
          //  menuType:'icon',
          // 隐藏操作栏
         menu:false,
         //隐藏表格上面的提示
         tip:false,
         columnBtn:false,
         refreshBtn:false,
          // 隐藏原生添加按钮
           addBtn:false,
          selection:true,
          // 清空按钮隐藏
          selectClearBtn:false,
          // 操作后清空选中数据
          // reserveSelection:false,
          border: true,
          index: true,
          expandLevel: 3,
          headerAlign: 'center',
          align: 'center',
            tree: true,
          labelWidth: 100,
          // 删除按钮
          // delBtn:false,
          column: [
              {
                width:130,
                label: '货商编号',
                prop: 'arrange',
            },
            {
                label: '货商门头',
                prop: 'board',
            },
            {
                label: '联系方式',
                prop: 'contact',
            },

           

        
          ]
        },
        data: [
                
            ]
      }
    },
    mounted(){
      
      this.data = this.supplierInfo
      // console.log(this.confirmStatus)
         const {data,option} = this
        this.$emit('getInfo',{data,option})
     
    },
       computed:{
       ...mapGetters(['supplierInfo']),
       status(){
         return    !this.visible && !this.confirmStatus  
       },
      

    },
    methods: {
      onLoad(page) {
        //模拟分页
        this.page.total = 40
      },
      // 当单击每行时触发
      handelClick(row){
        this.$refs.crud.toggleSelection([row])
      },

       handleAdd(){
        this.$refs.crud.rowAdd();
      },
      handleRowDBLClick(row){
        // console.log(this.confirmStatus)
        if(this.confirmStatus || this.visible){
          return
        }else{

                 // 传入当前行和当前行的下标
            // 弹出编辑窗口
            this.$refs.crud.rowEdit(row,row.$index);
        }
       
      },
    selectionChange(list){
     
      // console.log(list)
      // 将选取的数据保存到rowData中
      this.rowData=list
     
   
    },
    // 操作完成后取消之前的选择
     toggleSelection(val){
        this.$refs.crud.toggleSelection(val);
      },
      handleEdit(){
        // console.log(this.rowData)
        let i = this.rowData.length
        if(i==0){
              this.$message({
              showClose: true,
              message: "请选择一行再操作",
              type: "warning"
            });
            return 
        }else if(i>1){
               this.$message({
              showClose: true,
              message: "一次不能选择多行",
              type: "warning"
            });
            return 
        }else{
           
            // 需要两个参数 当前行和下标
            // 弹出编辑窗口
        this.$refs.crud.rowEdit(this.rowData[0],this.rowData[0].$index);
     
        }

         
      },
       handelDelete(){
            let i = this.rowData.length
            if(i==0){
                  this.$message({
                  showClose: true,
                  message: "请选择一行再操作",
                  type: "warning"
                });
                return 
            }else if(i>1){
                  this.$message({
                  showClose: true,
                  message: "一次不能选择多行",
                  type: "warning"
                });
                return 
            }else{
               
                  // 需要两个参数 当前行和下标
            this.handelDel( this.rowData[0],this.rowData[0].$index)
            
         
            }

          },
      addSupplier(row,done){
        // console.log(row)
        // var data = {};
        // var arr = Object.keys(data);
        // alert(arr.length == 0); //true 为空， false 不为空
      // var arr = Object.keys(this.obj)
      var arr = Object.keys(row)
        if(arr.length>0){
           this.$store.dispatch('AddSupplier',row).then(
             ()=>{
                this.$message({
                showClose: true,
                message: "添加成功",
                type: "success"
              });
              //  关闭弹框
               done()
             }
           )

        }
        // console.log(this.obj)
      },
      updateSupplier(row,index,done){
          this.$store.dispatch('UpdateSupplier',{row,index}).then(
             ()=>{
                this.$message({
                showClose: true,
                message: "更新成功",
                type: "success"
              });
              //  关闭弹框
               done()
                this.toggleSelection()
             }
           )

           

      },

     
	   handelDel(row,index){

         this.$confirm(`是否确认删除货商${row.board}`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
      })
        .then(() => {
          // this.supplierInfo.splice(index, 1);

          this.$store.dispatch('DelSupplier',index)
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success"
          });
           this.toggleSelection()

        })
        .catch(() => { });
     
    
      },
    // 点击搜索按钮触发
      searchChange(params) {
         Object.assign(params, this.searchForm)
         
            const {supplierInfo,searchForm} = this
          
          if(Object.keys(searchForm).length){
            // 过滤函数filter
           this.data= supplierInfo.filter(p=>p.board.indexOf(searchForm.solt) !== -1 || p.arrange.indexOf(searchForm.solt) !== -1 || p.contact.indexOf(searchForm.solt) !== -1 )

          }else{
            this.data = supplierInfo
          }
           
      
        //  console.log(this.data)
      },

      // 点击清空按钮触发
      searchReset(){
        this.searchForm={}
      },
      // 点击确认的时候触发
      handelConfirm(){
          // console.log(this.rowData)
               
         let i = this.rowData.length
            if(i==0){
                  this.$message({
                  showClose: true,
                  message: "请选择一行再操作",
                  type: "warning"
                });
                return 
            }else if(i>1){
                  this.$message({
                  showClose: true,
                  message: "一次不能选择多行",
                  type: "warning"
                });
                return 
            }else{

              
              //  触发父组件的方法
               this.$emit('closeDialog')   
               this.$emit('changeInfo',this.rowData)
               this.$store.dispatch('UpdateItem',this.rowData)
               this.toggleSelection()
            
         
            }
         
      }

     
    }

     
   
    

}
</script>
<style lang="">
    
</style>