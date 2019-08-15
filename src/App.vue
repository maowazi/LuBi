<template>
  <div id="app">
      <router-view></router-view>
      <Tab/>
  </div>
</template>
<script>
import Tab from "./components/tab/tab";
export default {
    name:"App",
    components:{
        Tab
    },
    mounted() {
        console.log(this.$store)
    },
}
</script>
<style lang="scss" scoped>

</style>
