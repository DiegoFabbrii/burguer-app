<template>
    <main>
        <div class="container">
            <div class="container__text">
                <h1>
                    Bem vindo ao Burger House, <br />
                    a melhor hamburgueria do Brasil.
                </h1>
                <!-- <p>A melhor hamburgueria do Brasil.</p> -->

                <button>
                    <router-link to="/fazerpedido">
                        Monte o seu burger
                    </router-link>
                </button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Banner",
};
</script>

<style scoped>
main {
    min-height: 100vh;
    background-image: url("../../public/img/burger.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container {
    width: 85%;
    color: #f7f7f7;
}

a {
    color: #f7f7f7;
}

.container__text button {
    padding: 15px 20px;
    border-radius: 10px;
    border: none;
    background-color: #865c2c;
    font-size: 1.25rem;
}

.container__text button {
    margin-top: 30px;
}

@media (max-width: 800px) {
    main {
        background-position: left;
    }
}
</style>
