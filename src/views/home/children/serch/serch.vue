<template>
    <div class="serch">
        <div class="serchHeader">
            <router-link to="/home/serch/serchOrder" tag="div">
                <i class="iconfont icon-fangdajing"></i>
                <span>试试搜索"二月":)</span>
            </router-link>
            <div>取消</div>
        </div>
        <el-calendar v-model="value" class="rili"></el-calendar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"Serch",
    data() {
        return {
            value: new Date()
        }
    },
}
</script>
<style lang="scss" scoped>
.serch{
    background: #BBBBBB ;
}
.serchHeader{
    display: flex;
    justify-content: space-between;
    background: #AAAAAA ;
    height: .4rem;
    align-items: center;
    padding: 0 .2rem;
    >div:nth-child(1){
        background: #747474 ;
        display: flex;
        align-items: center;
        height: .3rem;
        width: 2.9rem;
        border-radius: .15rem;
        box-sizing: border-box;
        padding: 0 .2rem;
        color: #EAEAEA ;
        i{
            margin-right: .1rem;
        }
    }
}
.rili{
    height: 2rem;
}
</style>