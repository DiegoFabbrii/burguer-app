<template>
    <div id="app">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Poppins:wght@400;500;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

body {
    font-family: "Poppins", sans-serif;
}

#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
