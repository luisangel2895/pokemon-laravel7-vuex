<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Show the caracteristics of your favorite pokemon :
                    </div>
                    <div>
                        <input
                            @keypress="search"
                            class="form-control form-control-lg"
                            type="text"
                            placeholder="name of your pokemon?"
                            v-model="pokemon"
                        />
                    </div>
                    <ul
                        class="list-group list-group-flush overflow-auto"
                        v-if="pokemons.length"
                    >
                        <row-recomended
                            v-for="(pokemon, key) in pokemons"
                            :key="key"
                            :pokemon="pokemon"
                        ></row-recomended>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import RowRecomended from "./RowRecomended.vue";

export default {
    name: "SearchComponent",
    components: {
        RowRecomended,
    },
    computed: {
        ...mapGetters({
            pokemons: "getPokemonsArray",
        }),
    },
    data: () => ({
        pokemon: "",
    }),
    methods: {
        search(event) {
            if (event.key === "Enter") {
                this.$store.dispatch("getPokemonAPI", this.pokemon);
            }
        },
    },
    watch: {
        pokemon(value) {
            console.log(value);
            this.$store.commit("FILTER_POKEMON", value);
        },
    },
    mounted() {
        this.$store.dispatch("getArrayPokemonsAPI");
    },
};
</script>
<style scoped>
.list-group {
    max-height: 200px;
}
</style>
