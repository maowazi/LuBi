<template>
    <div class="serch">
        <div class="serchHeader">
            <router-link to="/home/serch/serchOrder" tag="div">
                <i class="iconfont icon-fangdajing"></i>
                <span>试试搜索"二月":)</span>
            </router-link>
            <div>取消</div>
        </div>
         <Kalendar  class="rili"/>
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
    mounted() {
        
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
            font-size: .14rem;
        }
    }
}

</style>
<style lang="scss">
//vue日历样式
#ldq-kalendar[data-v-712e38dc] {
    text-align: center;
    -webkit-box-shadow: 0;
    box-shadow: none ;
    overflow: hidden;
    padding: .10rem .05rem;
    .ldq-tnav{
        span:nth-child(2){
            background: #666;
            color: #fff;
            padding: .05rem .1rem;
            border-radius: .17rem;
            font-size: .12rem;
        }
        span:nth-child(1){
            font-size: .14rem;
        }
        span:nth-child(3){
            font-size: .14rem;
        }
    }
    .ldq-tbody-li.ldq-other-day{
        opacity: 0;
    }
    .ldq-tbody-li>div[data-v-712e38dc] {
        width: .35rem;
        height: .35rem;
        line-height: .35rem;
        list-style: none;
        font-family: 'Microsoft Yahei','Simsun';
        font-weight: 400;
        font-size: .14rem;
        border: 0 none;
        border-radius: 50%;
        margin: .05rem 0;
        margin-left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        cursor: pointer;
    }
    .ldq-thead{
        div{
            font-size: .16rem;
        }
    } 
}
</style>