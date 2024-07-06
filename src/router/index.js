// DEFINE THE ROUTING RULES//
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Views/Home.vue";
import History from "@/Views/History.vue";
import Login from "@/Views/Login.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/Home",
            name: "Home",
            component: Home
        },
        {
            path: "/history",
            name: "History",
            component: History
        },
        {
            path: "/",
            name: "Login",
            component: Login
        },
    ]
})


export default router;

//GO TO MAIN.JS FILE