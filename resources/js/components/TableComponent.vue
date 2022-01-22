<template>
    <div class="container my-3 pb-5">
        <div v-if="loader">
            <loader-component></loader-component>
        </div>
        <div v-else>
            <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
            </div>
            <div v-else>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img :src="image" alt="" />
                        </div>
                        <div class="col">
                            <h3>{{ name }}</h3>
                            <div class="card">
                                <div class="card-header">Abilities</div>
                                <div class="card-body">
                                    {{ abilities.join() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-3">
                    <div class="card">
                        <div class="card-header">Moves</div>
                        <div class="card-body">
                            {{ moves.join() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import LoaderComponent from "./LoaderComponent.vue";

export default {
    name: "TableComponent",
    data: () => ({
        pokemonImage: null,
    }),
    components: {
        LoaderComponent,
    },
    computed: {
        ...mapGetters({
            message: "getMessage",
            image: "getPokemonImage",
            name: "getPokemonName",
            abilities: "getPokemonAbilities",
            moves: "getPokemonMOvies",
            loader: "getShowLoader",
        }),
    },
};
</script>
