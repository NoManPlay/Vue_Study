<!--
 * @Author: qtx
 * @Date: 2020-03-05 22:11:14
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 22:14:35
 * @Description:
 -->
<template>
  <div>
    <input
      @input="handleInput"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "AInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.$emit("input", value);
    }
  }
};
</script>
