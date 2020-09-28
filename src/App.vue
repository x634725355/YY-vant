<template>
  <div id="app">
    <router-view />

    <van-tabbar v-model="active">
      <van-tabbar-item
        @click="goToPage('home')"
        :icon="active ? home : activeHome"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        @click="goToPage('user')"
        :icon="active ? activeUser : user"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import activeHome from "./assets/active-home.png";
import home from "./assets/home.png";
import activeUser from "./assets/active-user.png";
import user from "./assets/user.png";

export default {
  data() {
    return {
      active: 0,
      activeHome,
      home,
      activeUser,
      user,
    };
  },
  created() {},
  methods: {
    goToPage(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="less" scoped>
#app {
}
</style>
