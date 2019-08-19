<template>
    <div>
        <h1>home首页 显示底部按钮以及四个角的圆按钮</h1>
        <div><router-link to="/home/serch">搜索</router-link></div>
        <div><router-link to="/home/calendar">日历</router-link></div>
        <div><router-link to="/home/mine">我的</router-link></div>
        <div><router-link to="/home/add">添加</router-link></div>
        <router-view></router-view>

    </div>

</template>
<script>
export default {    
    name:"Home",
}
</script>
<style lang="scss" scoped>
    
</style>