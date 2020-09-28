<template>
  <div class="home">
    <van-swipe class="home-swipe" :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import banner1 from "../assets/banner1.png";
import banner3 from "../assets/banner3.png";

export default {
  name: "Home",
  data() {
    return {
      images: [banner1, banner3],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.home-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>

