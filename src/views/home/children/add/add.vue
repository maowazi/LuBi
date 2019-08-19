<template>
    <div>
        <div>添加 新笔记</div>
        <h1>
        <router-link to="/home/add/addOrder">添加页面的顶部有箭头点击进入 新增随机 下拉标签</router-link>
        </h1>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "Add",

};
</script>
<style lang="scss" scoped>

</style>