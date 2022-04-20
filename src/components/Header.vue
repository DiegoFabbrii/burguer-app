<template>
    <header>
        <div class="container">
            <router-link to="/">
                <span class="container__logo">BurgerHouse</span>
            </router-link>

            <nav class="container__menu">
                <div class="container__menu-btn" @click="this.openMenu()">
                    <span
                        class="menu-btn"
                        :class="{ open: this.isOpen }"
                    ></span>
                </div>

                <ul class="menu__list" :class="{ showMenu: this.isOpen }">
                    <li @click="this.openMenu()">
                        <router-link to="/fazerpedido"
                            >Fazer pedido</router-link
                        >
                    </li>

                    <li @click="this.openMenu()">
                        <router-link to="/pedidos">Pedidos</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import MenuMob from "./MenuMob.vue";

export default {
    name: "Header",

    components: {
        MenuMob,
    },

    data() {
        return {
            logo: "/img/logo(1).png",
            alt: "Logo",
            isOpen: false,
        };
    },

    methods: {
        openMenu() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
header {
    max-width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #4d4c4c;
    color: #f7f7f7;
}

a {
    color: #f7f7f7;
}

img {
    width: 50px;
}

.container {
    width: 85%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container__logo {
    font-family: "Lobster Two", cursive;
    font-size: 2rem;
}

.menu__list {
    display: flex;
    gap: 20px;
}

.container__menu-btn {
    max-width: 30px;
    height: 30px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.menu-btn,
.menu-btn::before,
.menu-btn::after {
    width: 25px;
    height: 2px;
    background-color: #f7f7f7;
    position: relative;
    transition: 0.3s;
}

.menu-btn::before,
.menu-btn::after {
    content: "";
    position: absolute;
}

.menu-btn::before {
    transform: translateY(-7px);
}

.menu-btn::after {
    transform: translateY(7px);
}

.menu-btn.open {
    background-color: transparent;
}

.menu-btn.open.menu-btn::before {
    transform: rotate(45deg);
}

.menu-btn.open.menu-btn::after {
    transform: rotate(-45deg);
}

@media (max-width: 540px) {
    .container__menu-btn {
        display: flex;
    }

    .menu__list {
        position: fixed;
        width: 70%;
        height: calc(100vh - 80px);
        background-color: #4d4c4c;
        max-width: 100vw;
        right: -100%;
        bottom: 0;
        flex-direction: column;
        align-items: center;
        padding: 40px 0;
        transition: 0.3s;
    }

    .showMenu {
        right: 0;
    }
}
</style>
