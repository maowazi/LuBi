<template>
    <div class="serch">
        <div class="serchHeader">
            <router-link to="/home/serch/serchOrder" tag="div">
                <i class="iconfont icon-fangdajing"></i>
                <span>试试搜索"二月":)</span>
            </router-link>
            <div>取消</div>
        </div>
         <!-- <Kalendar  class="rili"/> -->
         <el-calendar v-model="value"></el-calendar>
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
        let el_button = document.querySelectorAll(".el-button");
        el_button[0].children[0].innerHTML = `<i class="iconfont icon-zuojiantou"></i>`;
        el_button[2].children[0].innerHTML = `<i class="iconfont icon-youjiantou"></i>`;
        let el_calendar__title = document.querySelector(".el-calendar__title");
        let newel_calendar__title = el_calendar__title.cloneNode(true);
        el_calendar__title.remove();
        let date = new Date();
        let yer = date.getFullYear();
        let muntd = date.getMonth()+1;

        let datestr = `${muntd}月${yer}`;
        el_button[1].children[0].innerHTML = datestr;
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


//element日历
.el-calendar{
    background-color:#ccc;
    *{
        border: 0;
    }
    
    .el-calendar__header{
        padding: 0rem 0rem;
        display: flex;
        justify-content: center;
        .el-calendar__button-group{
            width: 100%;
            .el-button-group{
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            *{
                background:none;
            }
            i{
                font-size: .12rem;
            }
        }
    } 
    .el-calendar__body{
        padding: .05rem .15rem;
        .el-calendar-table{
            th{
                font-size: .16rem;
            }
            tbody{
                *{
                    border: 0;
                }
                div{
                    padding: 0;
                    width: .3rem;
                    height: .3rem;
                    text-align: center;
                    line-height: .3rem;
                }
                .prev{
                    opacity: 0;
                }
                .next{
                    opacity: 0;
                }
                .current.is-selected{
                    background: none;
                    div{
                    background: none;
                        border-radius: 50%;
                        border: 1px solid #000;
                    }
                    
                }
            }
        }
    }
}

</style>