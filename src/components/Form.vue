<template>
    <main>
        <h1>Monte o seu Hamburguer</h1>

        <Message :msg="msg" v-show="msg" />

        <form class="form" @submit="createBurger($event)">
            <div class="form__input-container">
                <label for="name">Nome: </label>
                <input
                    type="text"
                    id="name"
                    v-model="name"
                    placeholder="Diegite seu nome"
                    required
                />
            </div>

            <div class="form__input-container">
                <label for="bread">Selecione seu pão: </label>
                <select name="bread" id="bread" v-model="bread" required>
                    <option
                        v-for="bread in breads"
                        :key="bread.id"
                        :value="bread.type"
                    >
                        {{ bread.type }}
                    </option>
                </select>
            </div>

            <div class="form__input-container">
                <label for="meat">Selecione sua carne: </label>
                <select name="meat" id="meat" v-model="meat" required>
                    <option
                        v-for="meat in meats"
                        :key="meat.id"
                        :value="meat.type"
                    >
                        {{ meat.type }}
                    </option>
                </select>
            </div>

            <div class="form__input-container">
                <label for="optional"
                    >Selecione os opcionais: <span>(opcional)</span></label
                >

                <div class="form__checkbox">
                    <div
                        class="checkbox__container"
                        v-for="optional in optionalData"
                        :key="optional.id"
                    >
                        <input
                            type="checkbox"
                            name="optional"
                            id="optional"
                            :value="optional.type"
                            v-model="optionals"
                        />
                        <span>{{ optional.type }}</span>
                    </div>
                </div>
            </div>

            <div class="form__input-container">
                <input
                    type="submit"
                    value="Montar meu burger"
                    class="form__submit-btn"
                />
            </div>
        </form>
    </main>
</template>

<script>
import Message from "../components/Message.vue";

export default {
    name: "Form",

    components: {
        Message,
    },

    data() {
        return {
            breads: null,
            meats: null,
            optionalData: null,

            name: null,
            bread: null,
            meat: null,
            optionals: [],
            msg: null,
        };
    },

    methods: {
        async getIngredients() {
            const req = await fetch("http://localhost:3000/ingredients");
            const data = await req.json();

            this.breads = data.breads;
            this.meats = data.meats;
            this.optionalData = data.optionals;
        },

        async createBurger(e) {
            e.preventDefault();

            const data = {
                name: this.name,
                bread: this.bread,
                meat: this.meat,
                optionals: Array.from(this.optionals),
                status: "Solicitado",
            };

            const dataJSON = JSON.stringify(data);

            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: dataJSON,
            });

            const res = await req.json();

            this.msg = `Pedido N° ${res.id} realizado com sucesso`;

            setTimeout(() => {
                this.msg = "";
            }, 2000);

            console.log(res);

            this.name = "";
            this.bread = "";
            this.meat = "";
            this.optionals = [];
        },
    },

    mounted() {
        this.getIngredients();
    },
};
</script>

<style scoped>
main {
    min-height: 100vh;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

main h1 {
    margin-bottom: 50px;
}

.form {
    width: 50vw;
}

.form__input-container {
    display: flex;
    flex-direction: column;
}

.form__input-container input,
.form__input-container select {
    padding: 10px;
}

.form__input-container label {
    margin: 20px 0;
    padding: 3px 0px 0px 10px;
    border-left: 5px solid #4d4c4c;
}

.form__input-container label span {
    color: #aaa;
}

.form__checkbox {
    display: flex;
    flex-wrap: wrap;
}

.checkbox__container {
    width: 50%;
    margin-bottom: 20px;
}

.checkbox__container span {
    margin-left: 5px;
}

.form__submit-btn {
    color: #f7f7f7;
    font-weight: 500;
    background-color: #4d4c4c;
    height: 40px;
    border: none;
    cursor: pointer;
}

@media (max-width: 912px) {
    .form {
        width: 70vw;
    }
}

@media (max-width: 600px) {
    main h1 {
        font-size: 1.5rem;
    }

    .form {
        width: 90vw;
    }
}
</style>
