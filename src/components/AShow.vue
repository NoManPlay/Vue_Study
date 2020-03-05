<!--
 * @Author: qtx
 * @Date: 2020-03-05 22:22:12
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 22:23:39
 * @Description:
 -->
<template>
  <div>
    AShow:{{ content }}
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>
