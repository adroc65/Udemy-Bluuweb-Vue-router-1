import axios from 'axios';
<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'


    const route = useRoute()
    const router = useRouter()
    const poke = ref({})
    const name = ref("")

    const back = () => {
        router.push('/pokemons')
    }
    const getData = async () => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
            const { data } = await axios.get(url)
            //console.log(data)
            poke.value = data
            name.value = data.name.toUpperCase()
            
        } catch (error) {
            console.log(error)
            poke.value = null
        }
    }

    const imgWeb = computed (()=>{
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ poke.value.id }.png`
        return url
    })

    getData();

</script>

<template>
    <div class="container" v-if="poke">
        <img :src="imgWeb" alt="pokemon image">
        <h1>Name: {{ poke.id }} - {{ name }} </h1>
        <button @click="back" type="button" class="btn btn-dark">Volver</button>
    </div>
    <div v-else class="container">
        <h1>El Pokemon solicitado no existe</h1>
    </div>
    
</template>

<style scoped>
img {
    height: 200px;
    
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
</style>