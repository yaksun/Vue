
<template>
  <div class="audio-box">
    <button hidden="true" id="playBtn" @click="play()" >play</button>
    <audio
      :muted="muted"
      ref="taskAudio"
      src="~@/assets/audio/NewTask.mp3"
      id="taskAudio"
      controls="controls"
      hidden="true"
    ></audio>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Emit, Watch } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import * as types from "@/store/mutation-types";
// import store from "../../store/store";
@Component({})
export default class TaskVoiceTips extends Vue {
  /* 静音*/
  public muted:boolean = true;
  /**
   * 是否有新任务
   */
  @State("isNewTask") isNewTask: any;
  /**
   * 设置新任务
   */
  @Mutation(types.SET_NEWTASK) set_newTask: any;
  // 计算属性 获取status
  get status() {
    return this.isNewTask;
  }
  /**
   * 监听store的 isNewTask状态
   */
  @Watch("status")
  onChangeValue(newVal: boolean, oldVal: boolean) {
    /**
     * 获取是否禁用声音提醒
     *
     *
     */
    let isBanVoiceTips: string = localStorage.getItem("isBanVoiceTips") || "";
    if (isBanVoiceTips) {
      return;
    }    
    // 监听新任务的状态，如果是ture，执行播放音频
    if (newVal) {
      console.log("播放声音")
      this.onPlay();
      // 把状态改成false
      this.set_newTask(false);
    }
  }
  /**
   * 音频播放
   * */
  private onPlay(): void {
    this.muted = false;
    (this.$refs.taskAudio as any).play();
  }
}
</script>
<style lang="scss">
.audio-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
