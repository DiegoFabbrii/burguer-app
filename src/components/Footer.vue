<template>
    <footer>
        <span>Burguer app &copy; {{ year }} </span>
    </footer>
</template>

<script>
export default {
    name: "Footer",

    data() {
        const date = new Date();
        const year = date.getFullYear();
        return {
            year: year,
        };
    },
};
</script>

<style scoped>
footer {
    max-width: 100vw;
    background-color: #4d4c4c;
    color: #f7f7f7;
    margin-top: auto;
    padding: 30px;
    text-align: center;
}
</style>
