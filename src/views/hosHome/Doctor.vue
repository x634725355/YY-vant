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
          <div v-for="(dept,deptsindex) of depts" :key="deptsindex">
            <div v-if="active === deptsindex">
              <!-- <div v-for="(sub,index) of dept.departList" :key="index">
                <van-cell-group>
                  <van-cell
                    :title="sub.name"
                    :key="index"
                    is-link
                    center
                    @click="gotoIntro(sub.id)"
                  >
                    <template slot="right-icon">
                      <van-icon name="arrow" @click.stop="gotoIntro" />
                    </template>
                  </van-cell>
                </van-cell-group>
              </div>-->
              <div class="department mt20rem">
                <div
                  class="mHrem tc department-item"
                  v-for="(sub,index) of dept.departList"
                  :key="index"
                >
                  <!--  :class="sub.haveScheduling * 1 ? '' : 'extend-click color-l'" -->
                  <div >
                    <div>
                      <van-image
                        width="2.1875rem"
                        height="2.1875rem"
                        :src="sub.img ? sub.img : defultimg"
                        fit="scale-down"
                      />
                    </div>
                    <p class="f12">{{sub.name}}</p>
                  </div>
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
import personal from "../../store/personal";
import defult_img from "../../assets/img/hos/deptRed.jpg";
import { myMixin } from "../../utils/mixins/mixin";

export default {
  mixins: [myMixin],
  data() {
    return {
      value: "",
      depts: [],
      active: 0,
      collection: [],
      defultimg: defult_img,
    };
  },
  created() {
  },

  methods: {

  },
};
</script>

<style scoped>
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

.docImg {
  height: 30px;
  width: 30px;
}

.department {
  display: flex;
  width: 100%;
  align-content: flex-start;
  flex-flow: row wrap;
}

.department-item {
  flex: 0 0 25%;
  box-sizing: border-box;
}

.mHrem {
  margin: 0 0.5rem;
}

.mt20rem {
  margin-top: 1.25rem;
}

.haveScheduling {
  top: 33%;
  left: 23%;
}
</style>
