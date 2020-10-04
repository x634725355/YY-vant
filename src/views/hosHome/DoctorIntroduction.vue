<template>
  <div class="doctor">
    <div class="doctor-header">
      <img src="../../assets/bg.png" alt="" />
    </div>

    <div class="department" v-for="sub of depts.doctorList" :key="sub.name">
      <div class="department-item">
        <div class="department-left">
          <van-image
            width="58px"
            height="58px"
            :src="sub.img ? sub.img : avatar"
            fit="scale-down"
          />
        </div>
        <div class="department-right">
          <p>
            {{ sub.name }} <span>{{ sub.title }}</span>
          </p>
          <p>
            {{ sub.nowHospital }}
          </p>
        </div>
      </div>
      <div class="department-text" >擅长: {{ sub.good }}</div>
      <div class="department-like">
        <span>
          <img :src="smiley" alt="" />
          {{ sub.praise }}已好评
        </span>
        <span> {{ sub.consulted }} 已咨询</span>
      </div>

      <div class="department-btn">
        <van-button round type="info">立即咨询</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "../../assets/avatar.png";
import smiley from "../../assets/smiley.png";

export default {
  data() {
    return {
      smiley,
      avatar,
      depts: {
        text: "脑科",
        doctorList: [
          {
            name: "王医生",
            title: "儿科专家",
            praise: 100,
            consulted: 100002,
            nowHospital: "中华中心医院",
            img: "",
            good: "儿童保健、呼吸、心血管、血液、肾脏、神经、内分泌与代谢、免疫感染与消化。",
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.doctor {
  padding-top: 0.1px;
  .doctor-header {
    width: 100%;
    position: relative;
    > img {
      z-index: -1;
      position: absolute;
      top: 0;
      height: 166px;
    }
  }

  .department {
    box-sizing: border-box;
    margin: 46px 12px 10px;
    background-color: #fff;
    border-radius: 10px;
    padding: 0.1px;

    .department-item {
      display: flex;

      .department-left {
        margin: 14px 12px 0px 14px;
      }

      .department-right {
        margin-top: 23px;
        > p:nth-child(1) {
          font-size: 17px;
          font-weight: 700;
          > span {
            font-size: 12px;
            color: #606672;
            font-weight: 400;
          }
        }

        > p:nth-child(2) {
          color: #606672;
          font-size: 14px;
          margin-top: 8px;
        }
      }
    }

    .department-text {
      white-space: pre-wrap;
      font-size: 15px;
      color: #606672;
      margin-left: 15px;
    }

    .department-like {
      margin-left: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 14px;
      font-size: 12px;

      > span:nth-child(1) {
        display: flex;
        align-items: center;
        color: #f68834;
        font-size: 12px;
        img {
          width: 40px;
          height: 40px;
        }
      }

      > span:nth-child(2) {
      }
    }

    .department-btn {
      text-align: right;
      margin-left: 14px;
      margin-bottom: 12px;
      margin-right: 16px;
      .van-button {
        height: 28px;
        background: linear-gradient(315deg, #4975ec 0%, #97b3ff 100%);
        box-shadow: 0px 2px 17px 0px rgba(87, 129, 240, 0.4);
        border: none;
      }
    }
  }
}
</style> 