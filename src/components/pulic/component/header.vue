<template>
    <div>
        <div>
            <router-link to="/home/serch"></router-link>
        </div>
        <div>{{datestr}}</div>
        <div>
            <router-link to="/home/calendar"></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"HeaderTab",
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
        console.log(muntd)
    },
};
</script>
<style lang="scss" scoped>

</style>