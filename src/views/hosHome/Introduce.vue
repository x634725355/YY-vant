<template>
  <div class="introduce">
    <div class="introduce-header">
      <img src="../../assets/bg.png" alt="" />
    </div>

    <div class="middle">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <p class="logo-text">中华人民名族医院</p>
      <p style="font-size: 18px">医院介绍</p>
      <p style="margin-top: 10px" class="text">
        山东大学齐鲁医院位于山东省济南市文化西路107号、山东省济南市高新区天辰路2000号，始建于公元1890年，是一所三级综合医院，是济南市医保定点医院。
      </p>
      <p class="text">
        医院始建于公元1890年，先后称华美医院、共和医院、齐鲁医院、山东医科大学附属医院等，2000年10月……山东大学齐鲁医院位于山东省济南市文化西路107号、山东省济南市高新区天辰路2000号，始建于公元1890年，是一所三级综合医院，是济南市医保定点医院。
        医院始建于公元1890年，先后称华美医院、共和医院、齐鲁医院、山东医科大学附属医院等，2000年10月……
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.introduce {
  padding-top: 1px;

  .introduce-header {
    width: 100%;
    position: relative;
    > img {
      z-index: -1;
      position: absolute;
      top: 0;
      height: 166px;
    }
  }

  .middle {
    position: relative;
    margin-top: 44px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0px 3px 9px 0px rgba(228, 236, 255, 1);
    border-radius: 10px;
    margin: 60px 18px 0px 18px;
    padding: 0.1px 21px;

    .logo {
      position: absolute;
      padding: 10px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      left: 50%;
      > img {
        width: 60px;
        height: 60px;
      }
    }

    .logo-text {
      text-align: center;
      margin-top: 50px;
      font-size: 16px;
    }

    .text {
      color: #606266;
      font-size: 14px;
    }
  }
}
</style>