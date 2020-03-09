<!--
 * @Author: qtx
 * @Date: 2020-03-05 22:04:11
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-09 20:38:19
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
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="handleChangeUserName">修改用户名</button>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'store',
  data() {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
    }),
    ...mapGetters(['appNameWithVersion', 'firstLetter']),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    ...mapMutations(['SET_APP_NAME', 'SET_USER_NAME']),
    handleInput(val) {
      this.inputValue = val
    },
    ...mapActions(['updateAppName']),
    handleChangeAppName() {
      // this.$store.commit({
      //   type: "SET_APP_NAME",
      //   appName: "newAppName"
      // });
      // this.SET_APP_NAME({
      //   appName: 'newAppName'
      // })
      // this.$store.commit('SET_APP_VERSION')
      this.updateAppName()
    },
    handleChangeUserName() {
      this.SET_USER_NAME('new QTX')
    }
  }
}
</script>

<style></style>
