<template>
  <div class="box">
    <div class="page">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item :to="{ name: 'home' }" :icon="active ? home : activeHome"
        >首页</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'user' }" :icon="active ? activeUser : user"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import activeHome from "../assets/active-home.png";
import home from "../assets/home.png";
import activeUser from "../assets/active-user.png";
import user from "../assets/user.png";

export default {
  name: "index",
  data() {
    return {
      active: 0,
      activeHome,
      home,
      activeUser,
      user,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$router.push({ name: "home" });
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
  padding-bottom: 50px;
}
</style>