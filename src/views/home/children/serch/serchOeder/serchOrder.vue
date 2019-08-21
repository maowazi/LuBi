<template>
    <div class="serchOrder">
        <div class="serchHeader">
            <div>
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" placeholder="请输入你的黑暗历史" v-model="massage">
            </div>
            <div v-on:click="hangBack">取消</div>
        </div>
        <p>{{massage}}</p>
        <p>{{massage.length > 0 ? "写的啥辣眼睛!!" : ''}}</p>
        <p>{{massage.length > 6 ? "不感觉眼睛难受吗?" : ''}}</p>
        <p>{{massage.length > 10 ? "难受就不要写了~~~~" : ''}}</p>
    </div>
</template>
<script>
export default {
    name:"serchOrder",
    data(){
        return{
            massage:''
        }
    },
    methods: {
        hangBack(){
            this.$router.back();
        }
    },
}
</script>
<style lang="scss" scoped>
    .serchOrder{
        .serchHeader{
            height: .48rem;
            background: #666;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 .1rem;
            div:nth-child(1){
                background: #333;
                height: .3rem;
                width: 3.0rem;
                line-height: .3rem;
                border-radius:.15rem;
                padding: 0 .1rem;
                input{
                    border: 0;
                    background: #333;
                    width: 85%;
                    color: #fff;
                } 
                i{
                    color: #ccc;
                    margin-right: .1rem;
                }
            }
        }
        p{
            text-align: center;
        }
        >p:nth-of-type(2){
            font-size: .4rem;
            color: aqua;
        }
    }
</style>