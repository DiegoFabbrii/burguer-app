<template>
    <div class="container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        msg: String,
    },
};
</script>

<style scoped>
.container {
    width: 50%;
    padding: 30px 0;
    background-color: rgb(15, 184, 128);
    border-radius: 10px;
    text-align: center;
    color: #f7f7f7;
    font-weight: 500;
}
</style>
