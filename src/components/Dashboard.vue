<template>
    <main>
        <h1>Gerenciar pedidos</h1>

        <div class="container">
            <div class="container__table">
                <header class="table__header">
                    <p id="table__order-id">#</p>
                    <p class="table__itens">Nome</p>
                    <p class="table__itens">Pão</p>
                    <p class="table__itens">carne</p>
                    <p class="table__itens">opcionais</p>
                    <p class="table__itens">ações</p>
                </header>

                <div
                    class="table__body"
                    v-for="client in burgersData"
                    :key="client.id"
                >
                    <p id="table__order-id">{{ client.id }}</p>
                    <p class="table__itens">{{ client.name }}</p>
                    <p class="table__itens">{{ client.bread }}</p>
                    <p class="table__itens">{{ client.meat }}</p>
                    <div class="table__itens">
                        <ul v-if="client.optionals.length > 0">
                            <li
                                v-for="optional in client.optionals"
                                :key="optional"
                            >
                                {{ optional }}
                            </li>
                        </ul>
                        <ul v-else>
                            <li>Nenhum</li>
                        </ul>
                    </div>
                    <div class="table__itens" id="table__actions">
                        <!-- <select name="" id="">
                            <option value="">qualquer coisa</option>
                        </select> -->

                        <button @click="this.delete(client.id)">
                            Cancelar pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Dashboard",

    data() {
        return {
            burgersData: null,
        };
    },

    methods: {
        async getBurgerData() {
            const req = await fetch("http://localhost:3000/burgers");
            const data = await req.json();

            this.burgersData = data;
        },

        async delete(id) {
            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "DELETE",
            });

            this.getBurgerData();
        },
    },

    mounted() {
        this.getBurgerData();
    },
};
</script>

<style scoped>
main {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
}

.container {
    width: 85%;
    overflow-x: auto;
}

.container__table {
    width: 100%;
    min-width: 700px;
    margin: 50px 0 20px 0;
}

.table__header {
    font-weight: 700;
}

.table__header,
.table__body {
    display: flex;
    align-items: center;
    border-bottom: 3px solid #4d4c4c;
    padding: 30px 0;
}

.table__body {
    border-bottom: 1px solid #4d4c4c;
}

.table__itens {
    width: 19%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#table__order-id {
    width: 5%;
}

#table__actions {
    align-items: flex-start;
}

#table__actions button {
    padding: 10px;
    background-color: #4d4c4c;
    color: #f7f7f7;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

@media (max-width: 500px) {
    h1 {
        font-size: 1.5rem;
    }

    .container__table {
        font-size: 0.75rem;
    }

    #table__actions {
        flex-direction: column;
    }
}
</style>
