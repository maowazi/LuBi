<template>
  <div class="calendar">
    <div>
      <div>
        <router-link to="/home/serch"></router-link>
      </div>
      <!-- <span>日期</span> -->
      <div>
        <router-link to="/home/calendar"></router-link>
      </div>
    </div>
    <Kalendar />
    <div class="task">
      <ul>
        <li class="task-item border-top" :key="item.id" v-for="item in task">
          <span></span>
          {{item}}
        </li>
      </ul>
    </div>
    <div id="xia">
      <div>
        <router-link to="/home/mine"></router-link>
      </div>
      <div>
        <router-link to="/home/add"></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      task: ["LOL", "闹钟", "夜宵记录"]
      // time:new data()
    };
  }
};
</script>
<style lang="scss" scoped>
@mixin identical {
  //定义混合器(共同样式)
  width: 0.34rem;
  height: 0.34rem;
  background-size: 100% 100%;
}
@mixin routerview {
  display: block;
  width: 100%;
  height: 100%;
}

.calendar {
  background: #eaeaea;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  // display: flex;
  // justify-content: space-between;
  // flex-direction: column;
  > :first-child {
    display: flex;
    margin-top: 0.4rem;
    justify-content: space-between;
    padding: 0 0.2rem;
    div:first-child {
      background: url(../../../../assets/homeimg/lookup.png) no-repeat;
      @include identical;
      > * {
        @include routerview;
      }
    }

    div:last-child {
      background: url(../../../../assets/homeimg/calendar.png) no-repeat;
      @include identical;
      > * {
        @include routerview;
      }
    }
  }
}
#xia {
  margin-top:.5rem;
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0 0.2rem;
  justify-content: space-between;
  div:nth-of-type(1) {
    background: url(../../../../assets/homeimg/menubar.png);
    @include identical;
    > * {
      @include routerview;
    }
  }
  div:nth-of-type(2) {
    background: url(../../../../assets/homeimg/Addto.png);
    @include identical;
    > * {
      @include routerview;
    }
  }
}
</style>
<style lang="scss">
#ldq-kalendar[data-v-712e38dc] {
  // color: #1f1f1f;
  // text-align: center;
  // border-radius: 5px;
  box-shadow: none;
  // overflow: hidden;
  // padding: 10px 5px;
  height: 3.2rem;
}
.task {
  width: 100%;
}
.task ul .task-item {
  width: 100%;
  padding: 0.1rem 0.5rem;
  list-style: disc;
  line-height: 0.2rem;
  font-size: 0.14rem;
  // height:.3rem;
}
.task ul .task-item span {
  width: 0.1rem;
  height: 0.1rem;
  display: inline-block;
  background: #757575;
  border-radius: 50%;
  margin: 0 0.1rem;
  // border:black .1rem solid;
}
.task ul .border-top {
  border-top: #bbbbbb solid 0.01rem;

  // background: rebeccapurple;
}
</style>