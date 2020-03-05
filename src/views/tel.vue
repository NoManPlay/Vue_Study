<!--
 * @Author: qtx
 * @Date: 2020-03-05 19:34:04
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 22:43:37
 * @Description:
 -->
<template>
  <div class="tel">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.$bus.$on("on-click", mes => {
      this.message = mes;
    });
  }
};
</script>

<style>
.tel {
  border: 1px solid red;
}
</style>
