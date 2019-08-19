 <template>
    <div class="tab">
        <ol>
            <router-link v-for="item in tabList" :key="item.id" :to="item.path" tag="li" :class="item.class">
                {{item.title}}
            </router-link>
        </ol>
    </div>
</template>
<script>
export default {
    name:"Tab",
    data() {
        return {
            tabList:[
                {id:1,title:"日记",path:"/diary",class:"diary"},
                {id:2,title:"笔记",path:"/note",class:"note"},
                {id:3,title:"待办",path:"/remain",class:"remain"},
                {id:4,title:"日程",path:"/schedule",class:"schedule"},
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    .tab{
        position: fixed;
        background: #fff;
        height: .35rem;
        left: 0;
        bottom: 0;
        width: 100%;
        ol{
            display: flex;
            height: 100%;
            justify-content: space-around;
            align-items: center;
            li{
                width: .8rem;
                height: .25rem;
                line-height: .25rem;
                border-radius: .125rem;
                background: #AAAAAA;
                color:#fff;
                font-size: .14rem;
                text-align: center;
            }
            .router-link-active.diary{
                background: #F3C95A;
            }
            .router-link-active.note{
                background: #4A9BD4;
            }
            .router-link-active.remain{
                background: #EA6D6D;
            }
            .router-link-active.schedule{
                background: #EE906F;
            }
        }
    }
</style>