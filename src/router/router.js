import Vue from 'vue'
import Router from 'vue-router'
import homerouter from "./homerouter/homerouter";
import diraryRouter from "./diaryRouter/diraryRouter";
import noterouter from "./noterouter/noterouter";
import remainrouter from "./renainrouter/remainrouter";
import scheduleRouter from "./schedulerouter/scheduleRouter";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect:"/home"
        },
        ...homerouter,
        ...diraryRouter,
        ...noterouter,
        ...remainrouter,
        ...scheduleRouter,
        {
            path: "**",
            redirect:"/home"
        }
    ]
})
