<template>
  <div class="user">
    <!--  -->
    <div class="user-header">
      <img src="../assets/bg.png" alt="" />
      <div class="userInfo">
        <img src="../assets/avatar.png" alt="" />
        <span style="margin-left: 10px">一点心动</span>
      </div>
    </div>

    <img class="user-banner" src="../assets/banner2.png" alt="" />

    <div class="user-cell">
      <van-cell-group>
        <van-cell title="我的收藏" :icon="icon13" is-link />
        <van-cell title="就诊人管理" :icon="icon14" is-link />
        <van-cell title="预约查询" :icon="icon15" is-link />
        <van-cell title="就诊记录" :icon="icon16" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import icon13 from "../assets/icon13.png";
import icon14 from "../assets/icon14.png";
import icon15 from "../assets/icon15.png";
import icon16 from "../assets/icon16.png";

export default {
  data() {
    return {
      icon13,
      icon14,
      icon15,
      icon16,
    };
  },
};
</script>

<style lang="less" scoped>
.user {
  .user-header {
    width: 100%;
    position: relative;
    > img {
      z-index: -1;
      position: absolute;
      top: 0;
      height: 166px;
    }

    .userInfo {
      padding: 24px 0px 25px 18px;

      img {
        width: 70px;
        height: 70px;
        vertical-align: middle;
      }
    }
  }

  .user-banner {
    padding: 0px 18px;
    box-sizing: border-box;
  }

  .user-cell {
    margin: 32px 18px 0px 18px;
    border-radius: 10px;
    box-shadow: 0px 3px 9px 0px rgba(228, 236, 255, 1);
    overflow: hidden;
  }
}
</style>