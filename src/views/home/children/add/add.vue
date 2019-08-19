<template>
    <div class="add">
        <!-- <h1>添加 新增随笔</h1>
        <h1><router-link to="/home/add/addOrder">添加页面的顶部有箭头点击进入 新增随机 下拉标签</router-link></h1>
        <router-view></router-view> -->
        <div class="header">
            <span class="pic-add"><img src="../../../../../img(1)/Close.png"/></span>   
            <span class="title">新增随记</span>                   
        </div>
        <div class="thing-and-time">
            <span class="pic-thing"><img src="../../../../../img(1)/Text Settings.png"/></span>   
            <span class="holder">什么事？</span>              
        </div>
        <div class="thing-and-time">
            <span class="pic-year"><img src="../../../../../img(1)/need to be dealt with.png"/></span>   
            <span class="holder">何年何月发生的？</span>              
        </div>
        <div class="tip">
            <span class="txt">特别提醒</span>
            <span class="handle" @click="handleToggleAction" :class="remind && 'nextbg'">
                <b class="open">ON</b>
                <i class="spot" :class="remind?'move':''"></i>
            </span>
        </div>
        <div class="save">保存</div>
    </div>
</template>
<script>
export default {
    name:"Add"
   
}
</script>
<style lang="scss" scoped>
.add{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    background: #fefefe;
    .header{
        width:100%;
        height: 2.75rem;
        display: flex;
        padding: .625rem 1.25rem;     
        .pic-add{
            line-height: 2.75rem;
            width: 1.25rem;
            height: 1.25rem;
            padding: .625rem .625rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .title{
            font-size: 1rem;
            color: #333;
            text-align: center;
            line-height: 2.75rem;  
            font-weight: bold;                     
            flex: 1;

        }

    }
    .thing-and-time{
        height: 2.875rem;
        display: flex;
        padding: .625rem 1.25rem;
        margin-bottom: 1.25rem;
        background: lemonchiffon;
        .pic-thing{
            width: 1.25rem;
            height: 1.25rem;
            padding: .8125rem .625rem;
            margin-right: .625rem;
            line-height: 1.875rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .holder{          
            line-height: 2.875rem;
            text-align: center;
            font-size: 1.25rem;
            color: black
        }
         .pic-year{
            width: 1.25rem;
            height: 1.25rem;
            padding: .8125rem .625rem;
            margin-right: .625rem;;
            line-height: 1.875rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
     .tip{
        width: 100%;
        height: 2.5rem;
        padding: .3125rem;
        box-sizing: border-box;
        border: 1px solid #ACAAAA;
        border-radius: .25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .txt{
            font-size: 1rem;
            color: #737373;
        }
        .handle{
            display: block;
            width: 2.5rem;
            height: 1.125rem;
            border: 1px solid #aaa;
            border-radius: 3.125rem;
            background: #eee;
            position: relative;
            &.nextbg{
                background: #090;
            }
            .open{
                display: block;
                line-height: 1rem;
                font-size: .75rem;
                color: #fff;
                transform: scale(0.9);
            }
            .spot{
                display: block;
                width: 1.125rem;
                height: 1.125rem;
                background: #fff;
                border: 1px solid #aaa;
                border-radius: 50%;
                box-sizing: border-box;
                box-shadow: 1px 1px 3px 1px #c3c3c3;
                position: absolute;
                top: 0;
                left: 0;
                &.move{
                    right: 0;
                    left: auto;
                }
            }
        }
    }
    .save{
        width: 10.625rem;
        height: 2.8125rem;
        background: #939191;
        border-radius: 2.8125rem;
        font-size: 1.125rem;
        text-align: center;
        line-height: 2.8125rem;
        color: #fff;
        position: absolute;
        left: 50%;
        bottom: 1.25rem;
        transform: translateX(-50%);
        box-shadow: 0 .125rem .1875rem 1px #aaa;
    }
  
}
    
</style>