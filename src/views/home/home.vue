<template>
<<<<<<< HEAD
    <div>
        <h1>home首页 显示底部按钮以及四个角的圆按钮</h1>
        <div><router-link to="/home/serch">搜索</router-link></div>
        <div><router-link to="/home/calendar">日历</router-link></div>
        <div><router-link to="/home/mine">我的</router-link></div>
        <div><router-link to="/home/add">添加</router-link></div>
        <router-view></router-view>

=======
    <div class="home">
        <div>
            <div><router-link to="/home/serch"></router-link></div>
            <div>{{datestr}}</div>
            <div><router-link to="/home/calendar"></router-link></div>
        </div>
        <div>
            <div>
                <span>{{datestr}}</span>
                <span><img src="../../assets/homeimg/diary.png" alt=""></span>
                <span>日记</span>
            </div>
            <div>
                <span>{{datestr}}</span>
                <span><img src="../../assets/homeimg/diary.png" alt=""></span>
                <span>日记</span>
            </div>
            <div>
                <span>{{datestr}}</span>
                <span><img src="../../assets/homeimg/diary.png" alt=""></span>
                <span>日记</span>
            </div>
            <div>
                <span>{{datestr}}</span>
                <span><img src="../../assets/homeimg/diary.png" alt=""></span>
                <span>日记</span>
            </div>
            <div>
                <span>{{datestr}}</span>
                <span><img src="../../assets/homeimg/diary.png" alt=""></span>
                <span>日记</span>
            </div>
        </div>
        <div>
            <div><router-link to="/home/mine"></router-link></div>
            <div><router-link to="/home/add"></router-link></div>
        </div>
        <div class="xian"></div>
        <router-view class="homechildren"></router-view>
>>>>>>> 6c30b18a85d89663771bd25c76ff2e915c214a1f
    </div>

</template>
<script>
<<<<<<< HEAD
export default {    
    name:"Home",
=======
export default {
    name:"Home",
    data() {
        return {
            datestr:''
        }
    },
    created() {
        let date = new Date();
        let muntd = date.getMonth();
        let day = date.getDate();
        let daym = date.getDay();
        let daymarr = ["日","一","二","三","四","五","六"]
        this.datestr = `${muntd}/${day} (周${daymarr[daym]})`
    },
>>>>>>> 6c30b18a85d89663771bd25c76ff2e915c214a1f
}
</script>
<style lang="scss" scoped>
    @mixin  identical{     //定义混合器(共同样式)
        width: .34rem;
        height: .34rem;
        background-size: 100% 100%;
    }
    @mixin routerview {
        display: block;
        width: 100%;
        height: 100%;
    }
    .home{
        background: #EAEAEA ;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        top:0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        >:first-child{
            display: flex;
            margin-top: .4rem;
            justify-content: space-between;
            padding: 0 .2rem;
            div:first-child{
                background: url(../../assets/homeimg/lookup.png);
                @include identical;
                >*{
                    @include routerview;
                }
            }
            div:nth-child(2){
                width: 1.02rem;
                height: .25rem;
                background: url(../../assets/homeimg/Button.png) no-repeat;
                color: #fff;
                line-height: .25rem;
                text-align: center;;
            }
            div:last-child{
                background: url(../../assets/homeimg/calendar.png);
                @include identical;
                >*{
                    @include routerview;
                }
            }
        }
        >div:nth-child(2){
            height: 5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            >div{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                z-index: 2;
                >*{
                    width: 1rem;
                    text-align: center;
                }
                >span:nth-child(2){
                    height: .35rem;
                    width: .35rem;
                    background: blue;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    img{
                        width: .25rem;
                        height: .25rem;
                    }
                }
            }
        }
        >div:nth-child(3){
            display: flex;
            margin-bottom:.5rem;
            padding: 0 .2rem;
            justify-content:space-between;
            div:first-child{
                background: url(../../assets/homeimg/menubar.png);
                @include identical;
                >*{
                    @include routerview;
                }
            }
            div:last-child{
                background: url(../../assets/homeimg/Addto.png);
                @include identical;
                >*{
                    @include routerview;
                }
            }
        }
        .xian{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 0rem;
            border-right: 2px dotted #666;
        }
        .homechildren{
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 2;        
        }
    }
</style>