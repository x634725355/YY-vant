<template>
  <div class="home">
    <!-- 轮播 -->
    <van-swipe class="home-swipe" :show-indicators="false" :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>

    <div class="home-middle">
      <div class="middle-left" @click="gotoPage('reservation')" >
        <img class="icon" src="../assets/icon1.png" alt="" />
        <div>
          <p>预约挂号</p>
          <p>挂号方便快捷</p>
        </div>
      </div>
      <div class="middle-right">
        <img class="icon" src="../assets/icon.png" alt="" />
        <div>
          <p>费用缴纳</p>
          <p>医生在线解答</p>
        </div>
      </div>
    </div>

    <h3>常用功能</h3>

    <div class="home-function">
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <img src="../assets/icon3.png" alt="" />
          <p>疾病查询</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/icon2.png" alt="" />
          <p>挂号查询</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/icon5.png" alt="" />
          <p>报告查询</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/icon4.png" alt="" />
          <p>医生查询</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/icon7.png" alt="" />
          <p>医生查询</p>
        </van-grid-item>
        <van-grid-item style="transform: translateX(-8px)">
          <img src="../assets/icon6.png" alt="" />
          <p class="ell">患者满意查询</p>
        </van-grid-item>
      </van-grid>
    </div>

    <h3>医院介绍</h3>

    <div class="home-function2">
      <van-grid :border="false" :column-num="3">
        <van-grid-item @click="gotoPage('introduce')">
          <img src="../assets/icon11.png" alt="" />
          <p>医院介绍</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/icon12.png" alt="" />
          <p>科室介绍</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/icon8.png" alt="" />
          <p>专家介绍</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/icon10.png" alt="" />
          <p class="ell">医院特色介绍</p>
        </van-grid-item>
      </van-grid>
    </div>
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
  methods: {
    gotoPage(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="less" scoped>
/* 单行文字溢出虚点显示*/
.ell {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.home {
  width: 100%;
  .home-middle {
    margin: 5px 18px;
    display: flex;
    justify-content: space-between;

    .middle-left,
    .middle-right {
      display: flex;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 3px 9px 0rem rgba(228, 236, 255, 1);
      padding: 21px 11px;
      align-items: center;
      width: 45%;
      img {
        width: 48px;
        height: 48px;
        margin-right: 8px;
        background: linear-gradient(180deg, #2fe4a1 0%, #12e188 100%);
        box-shadow: 0px 3px 17px 0px rgba(0, 218, 126, 0.5);
        border-radius: 10px;
      }
      p:nth-child(1) {
        font-size: 16px;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: #8f9090;
      }
    }

    .middle-right {
      margin-left: 10px;
      img {
        width: 48px;
        height: 48px;
        margin-right: 8px;
        background: linear-gradient(180deg, #a2c7ff 0%, #579fff 100%);
        box-shadow: 0px 1px 17px 0px rgba(92, 161, 255, 0.5);
        border-radius: 10px;
      }
    }
  }

  h3 {
    font-weight: 400;
    font-size: 22px;
    margin: 30px 0px 15px 19px;
  }

  .home-function,
  .home-function2 {
    margin: 10px 18px;
    width: 90%;
    background-color: #fff;
    height: 185px;
    box-shadow: 0px 3px 9px 0px rgba(228, 236, 255, 1);
    border-radius: 10px;
    overflow: hidden;

    /deep/ .van-grid-item__content {
      padding: 10px 8px;
    }

    img {
      width: 48px;
      height: 48px;
      transform: scale(1.1);
    }

    p {
      font-size: 14px;
    }
  }

  .home-function2 {
    img {
      transform: none;
    }
  }
}
</style>

