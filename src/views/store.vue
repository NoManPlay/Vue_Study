<!--
 * @Author: qtx
 * @Date: 2020-03-05 22:04:11
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 18:11:48
 * @Description:
 -->
<template>
  <div>
    <a-input @input="handleInput" />
    <p>{{ inputValue }}->lastLatter is {{ inputValueLastLetter }}</p>
    <!-- <a-show :content="inputValue" /> -->
    <p>appName : {{ appName }}</p>
    <p>userName : {{ userName }} -> firstLetter is {{ firstLetter }}</p>
    <p>appNameWithVersion : {{ appNameWithVersion }}</p>
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import { mapState, mapGetters } from "vuex";

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
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    ...mapGetters(["appNameWithVersion", "firstLetter"]),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    }
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
