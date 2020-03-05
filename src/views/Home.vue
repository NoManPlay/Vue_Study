<!--
 * @Author: qtx
 * @Date: 2020-03-05 12:09:45
 * @LastEditors: qtx
 * @LastEditTime: 2020-03-05 20:09:56
 * @Description:
 -->
<template>
  <div class="home">

    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到argu</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === "back") this.$router.back();
      else if (type === "push")
        this.$router.push({
          name: "argu",
          params: {
            name: "qtx"
          }
        });
      else if (type === "replace") this.$router.replace("parent");
    }
  }
};
</script>
