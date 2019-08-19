<template>
  <div id="mine">
    <div class="banner">
      <i class="iconfont icon-zuojiantou" @click="handleBack"></i>
      <div class="img-box"></div>
      <h3>隔壁老崔</h3>
    </div>
    <div class="list">
      <ul>
        <li>
          <div class="sync">
            <img src="../../../../img/Refresh.png" alt="同步" class="icon01" />
            <h3>同步</h3>
            <img src="../../../../img/Hidden arrow.png" alt="下箭头" class="icon02" />
            <div class="sync-hide">
              <div class="txt">
                <p>iCloud</p>
                <p>立即手动同步</p>
              </div>
              <div class="icon"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine",
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style  lang="scss" scoped>
#mine {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #eaeaea;
  z-index: 10;
  .banner {
    width: 100%;
    height: 1.58rem;
    background-color: #737373;
    position: absolute;
    top: 0;
    left: 0;
    .img-box {
      background: url("../../../../img/Head portrait.jpeg") no-repeat center
        0.005rem;
      background-size: cover;
      position: absolute;
      left: 0.3rem;
      top: 0.62rem;
      width: 0.63rem;
      height: 0.63rem;
      border-radius: 50%;
    }
    .icon-zuojiantou {
      position: absolute;
      left: 0.11rem;
      top: 0.14rem;
      width: 0.24rem;
      height: 0.24rem;
      color: #fff;
      font-size: 22px;
    }
    h3 {
      position: absolute;
      left: 1.47rem;
      top: 0.8rem;
      width: 0.8rem;
      height: 0.28rem;
      color: rgba(255, 255, 255, 1);
      font-size: 20px;
      text-align: left;
      font-family: PingFangSC-regular;
    }
  }
  .list {
    position: absolute;
    left: 0px;
    top: 1.58rem;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #eaeaea;
    ul {
      width: 100%;
      height: 100%;
      li {
        width: 100%;
        height: 0.5rem;
        border-bottom: 1px solid #cccccc;
        color: #222222;
        font-size: 14px;
        line-height: 0.5rem;
        padding: 0 0.2rem 0 0.3rem;
        .sync {
          width: 100%;
          height: 0.5rem;
          float: left;
          .icon01{
            width: 0.2rem;
            height: 0.2rem;
            color: #737373;
            margin-right: 0.16rem;
            vertical-align: middle;
            text-align: center;
          }
          .sync-hide{
            display: none;
          }
        }
      }
    }
  }
}
</style>