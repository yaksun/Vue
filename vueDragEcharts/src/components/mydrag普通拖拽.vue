<template>
  <div class="linesimple">
    <draggable
      v-model="myArray"
      group="people"
      @start="drag = true"
      @end="drag = false"
    >
      <div class="div1" v-for="element in myArray" :key="element.id">
        {{ element.name }}
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      myArray: [
        { id: 1, name: "北京" },
        { id: 2, name: "上海" },
        { id: 3, name: "广州" },
        { id: 4, name: "深圳" }
      ]
    };
  },
  components: {
    draggable
  }
};
</script>
<style lang="scss">
.div1 {
  width: 200px;
  height: 200px;
  background-color: red;
  margin-bottom: 20px;
}
</style>
