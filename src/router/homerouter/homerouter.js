const homerouter = [
    {
        path: "/home",
        component: () => import("../../views/home/home"),
        children: [
            {
                path: "serch",
                component: () => import("../../views/home/children/serch/serch"),
                children: [
                    {
                        path: "serchOrder",
                        component:()=>import("../../views/home/children/serch/serchOeder/serchOrder")
                    }
                ]
            },
            {
                path: "calendar",
                component: () => import("../../views/home/children/calendar/calendar")
            },
            {
                path: "mine",
                component: () => import("../../views/home/children/mine/mine")
            },
            {
                path: "add",
                component: () => import("../../views/home/children/add/add"),
                children: [
                    {
                        path: "addOrder",
                        component:()=>import("../../views/home/children/add/children/addOrder")
                    }
                ]
            }
        ]
    }
]
export default homerouter;