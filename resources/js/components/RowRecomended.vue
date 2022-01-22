<template>
    <li class="list-group-item" @click="search">{{ pokemon }}</li>
</template>
<script>
export default {
    name: "RowRecomended",
    props: ["pokemon"],
    methods: {
        search() {
            this.$store.dispatch("getPokemonAPI", this.pokemon);
        },
    },
};
</script>
<style scoped>
.list-group-item:hover {
    background-color: rgb(233, 233, 233);
}
</style>
