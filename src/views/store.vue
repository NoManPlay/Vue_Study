<!--
 * @Author: qtx
 * @Date: 2020-03-05 22:04:11
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 22:31:36
 * @Description:
 -->
<template>
  <div>
    <a-input @input="handleInput" />
    <!-- <p>{{ inputValue }}</p> -->
    <a-show :content="inputValue" />
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>

<style>
</style>
