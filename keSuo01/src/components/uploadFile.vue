<template>
  <el-upload
    class="upload-box"
    :action="fileBaseUrl"
    :on-preview="clickThisFile"
    multiple
    :on-remove="handleRemove"
    :on-success="uploadSuccess"
    :on-progress="uploadFileProcess"
    :before-upload="beforeUpload"
    :file-list="fileList"
    :disabled="noticeStatus"
  >
    <div :class="[noticeStatus ? 'disabled' : '','upload-txt']">选择附件</div>
  </el-upload>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { JPConfig } from "@/config/JPConfig";
import { globalAPI } from "@/api/globalAPI";

import { Getter, Action } from "vuex-class";

import { fileModel_ui_model } from "@/model/sysManage/file_result_model";
import { fileService } from "@/bll/sysManage/fileService";

@Component
export default class Footer extends Vue {
  @Prop({
    type: Array,
    default() {
      return []
    }
  })
  public defaultFileList: any;
  @Prop() public noticeStatus!: boolean;
  
  public fileBaseUrl: string = ""; // 文件上传地址
  public fileList: Array<object> = []; // 上传文件列表
  public fileUploadPercent: number = 0; // 文件上传进度
  public fileSize = 200; // 文件上传大小限制

  @Watch('defaultFileList')
  onDefaultFileListChanged(val: string, oldVal: string) {
    this.fileList = this.defaultFileList;
    console.log(this.fileList);
  }

  //附件进度条
  uploadFileProcess(event: any, file: any, fileList: any) {
    this.fileUploadPercent = Number(file.percentage.toFixed(0));
  }

  //移除文件
  handleRemove(file: any, fileList: any) {
    console.log(file); // 删除的文件
    console.log(fileList); // 存在的文件上传数组
    this.$emit('deleteFile', fileList);
    this.deleteFile(file.response.fileID);
  }

  // 删除文件
  public async deleteFile(id: string) {
    let param = new fileModel_ui_model();
    param.id = id;
    new fileService().deleteFile(param); // 删除文件
  }

  public async downloadFile(id: string, name: string) {
    let url = this.fileBaseUrl + '?businessId=' + id;
    window.location.href = url;
  }

  //点击文件
  clickThisFile(file: any) {
    console.log(file);
    if (this.noticeStatus) {
      var businessId = file.fileID;
    } else {
      var businessId = file.response.fileID;
    }
    this.downloadFile(businessId, file.name);
  }

  //格式验证
  beforeUpload(file: any) {
    /** 数量限制 */
    let initCount = this.fileList.length;
    // if (initCount > 2) {
    //   this.$message({
    //     message: "附件最多只能上传三张",
    //     type: "warning"
    //   });
    //   return false;
    // }

    /** 格式 大小限制 */
    const supportTypes = [
      "xls",
      "xlsx",
      "doc",
      "docx",
      "ppt",
      "pptx",
      "pdf",
      "zip",
      "txt",
      "jpg",
      "wps"
    ];
    let extName = file.name
      .substring(file.name.lastIndexOf(".") + 1)
      .toLowerCase();

    let isLt2M = file.size / 1024 / 1024 < this.fileSize;

    // if (supportTypes.indexOf(extName) > 0) {
    //   this.$message({
    //     message: "上传文件只能是xls、doc、ppt、pdf等格式!",
    //     type: "warning"
    //   });
    //   return false;
    // }

    if (!isLt2M) {
      this.$message({
        message: "上传文件大小不能超过 " + this.fileSize + " MB!",
        type: "warning"
      });
      return isLt2M;
    }
  }

  //上传成功
  uploadSuccess(res: any, fileList: Array<object>) {
    //获取上传图片地址
    console.log(res);
    this.fileUploadPercent = 0;
    let _list = [];
    if (res.fileID) {
      this.$emit('getFileList', res);
    } else {
      this.$message.error("文件上传失败，请重新上传！");
    }
  }

  created() {
    /** 上传文件地址 */
    this.fileBaseUrl =
      JPConfig.Instance()["jpHttpUrl"] + "/api/jp-TIFS-FileCenter-ms/file";
  }
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.upload-box{
  .upload-txt {
    color: #009aff;
    text-align: left;
    text-decoration: underline;
  }

  .upload-txt.disabled {
    color: #666;
    cursor: not-allowed;
  }

  ::v-deep .el-upload-list .el-upload-list__item-name {
    color: #666 !important;  
  }
  ::v-deep .el-upload-list__item:hover {
    background-color: rgba(204, 204, 204, .5) !important;
  }
}
</style>
