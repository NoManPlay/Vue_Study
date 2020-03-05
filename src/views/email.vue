<!--
 * @Author: qtx
 * @Date: 2020-03-05 19:33:27
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 22:57:59
 * @Description:
 -->
<template>
  <div class="email">
    <button @click="handleClick">点击我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$bus.$emit("on-click", "hello");
    }
  },
  mounted() {}
};
</script>

<style>
.email {
  border: 1px solid green;
}
</style>
