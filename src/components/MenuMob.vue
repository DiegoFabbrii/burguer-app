<template>
    <div class="container" @click="this.openMenu()">
        <span class="menu-mob" :class="{ open: this.isOpen }"></span>
    </div>
</template>

<script>
export default {
    name: "MenuMob",

    data() {
        return {
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
.container__menu-mob {
    max-width: 30px;
    height: 20px;
    background-color: aqua;

    cursor: pointer;
}

.menu-btn,
.menu-btn::before,
.menu-btn::after {
    width: 25px;
    height: 3px;
    background-color: #f7f7f7;
    position: relative;
    transition: 0.3s;
}

.menu-btn::before,
.menu-btn::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: #f7f7f7;
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
    .container {
        display: flex;
    }
}
</style>
