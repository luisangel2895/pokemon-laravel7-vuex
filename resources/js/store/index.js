const urlAPI = "https://pokeapi.co/api/v2/pokemon";
const urlAPIAll = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200";

export default {
    state: {
        pokemon: {},
        message: "Search a pokemon",
        showLoader: false,
        pokemonsArray: [],
        pokemonsArrayFilter: [],
    },

    getters: {
        getMessage: (state) => state.message,
        getShowLoader: (state) => state.showLoader,
        getPokemonImage: (state) => {
            const { sprites } = state.pokemon;
            return sprites?.front_default;
        },
        getPokemonName: (state) => {
            return state.pokemon.name;
        },
        getPokemonAbilities: (state) => {
            return state.pokemon.abilities?.map((habilityObject) => {
                return habilityObject.ability.name;
            });
        },
        getPokemonMOvies: (state) => {
            return state.pokemon.moves?.map((moveObject) => {
                return moveObject.move.name;
            });
        },
        getPokemonsArray: (state) => state.pokemonsArrayFilter,
    },

    actions: {
        async getPokemonAPI({ commit, state }, payload) {
            state.showLoader = true;
            try {
                const res = await fetch(`${urlAPI}/${payload}`);
                const data = await res.json();
                commit("BRING_POKEMON", data);
                state.message = null;
                state.showLoader = false;
            } catch (error) {
                state.message = "This pokemon dosn't exist";
                state.showLoader = false;
            }
        },
        async getArrayPokemonsAPI({ state }) {
            const res = await fetch(urlAPIAll);
            const data = await res.json();
            state.pokemonsArray = data.results?.map((pokemon) => {
                return pokemon.name;
            });
        },
    },

    mutations: {
        BRING_POKEMON(state, data) {
            state.pokemon = data;
        },
        FILTER_POKEMON(state, data) {
            if (data) {
                state.pokemonsArrayFilter = state.pokemonsArray.filter(
                    (pokemon) => {
                        const step = data.length;
                        const semiWord = pokemon.slice(0, step);
                        return semiWord === data;
                    }
                );
            } else {
                state.pokemonsArrayFilter = [];
            }
        },
    },
};
