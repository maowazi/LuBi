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
            <div class="sync-show">
              <img src="../../../../img/Refresh.png" alt="同步" class="icon01" />
              <h1>同步</h1>
              <img
                src="../../../../img/Hidden arrow.png"
                alt="下箭头"
                class="icon02 active"
                @click="handleShow"
              />
            </div>
            <div class="sync-hide">
              <div class="text">
                <p>iCloud</p>
                <p>立即手动同步</p>
              </div>
              <div class="icon">
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="appearance">
            <div class="appearance-show">
              <img src="../../../../img/Appearance.png" alt="同步" class="icon01" />
              <h1>外观</h1>
              <img
                src="../../../../img/Hidden arrow.png"
                alt="下箭头"
                class="icon02 active"
                @click="handleShow"
              />
            </div>
            <div class="appearance-hide">
              <div class="text">
                <p>主题色调</p>
                <p>夜晚模式</p>
                <p>时间轴布局</p>
                <p>字体</p>
                <p>时间轴只显示摘要</p>
                <p>加大日记第一个字</p>
              </div>
              <div class="icon">
                <p>基本</p>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="sync">
            <div class="sync-show">
              <img src="../../../../img/schedule.png" alt="同步" class="icon01" />
              <h1>待办</h1>
              <img
                src="../../../../img/Hidden arrow.png"
                alt="下箭头"
                class="icon02 active"
                @click="handleShow"
              />
            </div>
            <div class="sync-hide">
              <div class="text">
                <p>待办提醒音</p>
                <p>角标显示过期待办</p>
                <p>待办标题</p>
              </div>
              <div class="icon">
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="sync">
            <div class="sync-show">
              <img src="../../../../img/need to be dealt with.png" alt="同步" class="icon01" />
              <h1>日程</h1>
              <img
                src="../../../../img/Hidden arrow.png"
                alt="下箭头"
                class="icon02 active"
                @click="handleShow"
              />
            </div>
            <div class="sync-hide">
              <div class="text">
                <p>设置日历账号</p>
                <p>日程提前提醒时间</p>
              </div>
              <div class="icon">
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="sync">
            <div class="sync-show">
              <img src="../../../../img/security.png" alt="同步" class="icon01" />
              <h1>安全</h1>
              <img
                src="../../../../img/Hidden arrow.png"
                alt="下箭头"
                class="icon02 active"
                @click="handleShow"
              />
            </div>
            <div class="sync-hide">
              <div class="text">
                <p>设置密码锁</p>
                <p>回复最近删除的笔记</p>
                <p>邮件备份</p>
                <p>导入备份</p>
              </div>
              <div class="icon">
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="sync">
            <div class="sync-show">
              <img src="../../../../img/Set up.png" alt="同步" class="icon01" />
              <h1>高级</h1>
              <img
                src="../../../../img/Hidden arrow.png"
                alt="下箭头"
                class="icon02 active"
                @click="handleShow"
              />
            </div>
            <div class="sync-hide">
              <div class="text">
                <p>默认新建类型</p>
                <p>编辑笔记后更新日期</p>
                <p>语言</p>
                <p>时间格式</p>
                <p>折叠完成待办</p>
                <p>反转时间轴</p>
                <p>总p数</p>
              </div>
              <div class="icon">
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#FFA63E"
                  width="70"
                ></el-switch>
              </div>
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
    },
    handleShow() {
      this;
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
        padding: 0 0.2rem;
        .sync {
          width: 100%;
          .sync-show {
            height: 0.4rem;
            display: flex;
            position: relative;
            .icon01 {
              width: 0.2rem;
              height: 0.2rem;
              color: #737373;
              margin-right: 0.16rem;
              margin-top: 0.16rem;
              vertical-align: middle;
              text-align: center;
            }
            .icon02 {
              width: 0.08rem;
              height: 0.16rem;
              position: absolute;
              right: 0.44rem;
              top: 0.16rem;
            }
            // .active {
            //   transform: rotateZ(90deg);
            //   transition: ls linear;
            // }
          }
        }
        .sync-hide {
          width: 100%;
          height: 0.8rem;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #cccccc;
          display: none;
          .text {
            margin-top: 0.1rem;
            p {
              line-height: 0.32rem;
            }
          }
          .icon {
            margin-right: 0.4rem;
          }
        }
        .appearance{
          width: 100%;
          .appearance-show{
            height: 0.4rem;
            display: flex;
            position: relative;
            .icon01 {
              width: 0.2rem;
              height: 0.2rem;
              color: #737373;
              margin-right: 0.16rem;
              margin-top: 0.16rem;
              vertical-align: middle;
              text-align: center;
            }
            .icon02 {
              width: 0.08rem;
              height: 0.16rem;
              position: absolute;
              right: 0.44rem;
              top: 0.16rem;
            }
          }
          .appearance-hide {
          width: 100%;
          height: 0.8rem;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #cccccc;
          display: none;
          .text {
            width: .8rem;
            margin-top: 0.1rem;
            p {
              line-height: 0.32rem;
            }
          }
          .icon {
            margin-right: 0.4rem;
            float: right;
          }
          }
        }
      }
    }
  }
}
</style>