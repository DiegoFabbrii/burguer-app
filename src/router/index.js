import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/pedidos",
        name: "Pedidos",
        component: () =>
            import(
                /* webpackChunkName: "pedidos" */ "../views/PedidosView.vue"
            ),
    },

    {
        path: "/fazerpedido",
        name: "FazerPedido",
        component: () =>
            import(
                /* webpackChunkName: "FazerPedido" */ "../views/FazerPedidoView.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
