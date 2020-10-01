<template>
  <div>
    <!--<div>-->
    <!--<van-search v-model="value" show-action shape="round" placeholder="请输入搜索关键词" background="#ffffff">-->
    <!--<template #action>-->
    <!--<div @click="onSearch">搜索</div>-->
    <!--</template>-->
    <!--</van-search>-->
    <!--</div>-->
    <div>
      <van-tree-select
        height="100vh"
        :items="depts"
        :main-active-index.sync="active"
      >
        <template slot="content">
          <div v-for="(dept, deptsindex) of depts" :key="deptsindex">
            <div v-if="active === deptsindex">
              <div
                class="department"
                v-for="(sub, index) of dept.doctorList"
                :key="sub.name"
              >
                <div class="department-item">
                  <div class="department-left">
                    <van-image
                      width="58px"
                      height="58px"
                      :src="sub.img ? sub.img : defultimg"
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
          </div>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
import avatar from "../../assets/avatar.png";
import smiley from "../../assets/smiley.png";

export default {
  data() {
    return {
      value: "",
      smiley: smiley,
      depts: [
        {
          text: "脑科",
          doctorList: [
            {
              name: "王医生",
              title: "儿科专家",
              praise: 100,
              consulted: 100002,
              nowHospital: "中华中心医院",
              img: "",
            },
          ],
        },
        {
          text: "儿科",
          doctorList: [
            {
              name: "王医生",
              title: "儿科专家",
              praise: 100,
              consulted: 100002,
              nowHospital: "中华中心医院",
              img: "",
            },
          ],
        },
      ],
      active: 0,
      defultimg: avatar,
    };
  },
  created() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.van-sidebar-item--select {
  /* color: var(--color);
  border-color: #1ec7a5; */
  color: #000;
  border-color: #000;
  font-weight: 700;
}

.van-sidebar-item--select::before {
  background-color: #0091ff;
}

.van-cell__value {
  flex: 0.2;
}

.van-tree-select__content {
  background-color: #eee;
}

.department {
  box-sizing: border-box;
  margin: 10px 12px;
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
</style>
