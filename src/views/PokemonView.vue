<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '@/composables/getData.js'
import { useFavoritosStore } from '@/stores/favoritos.js'


    const route = useRoute()
    const router = useRouter()
    const useFavoritos = useFavoritosStore()
    const { add, findPoke } = useFavoritos

    const back = () => {
        router.push('/pokemons')
    }

    const {data, loading, getData, error} = useGetData()

    /*
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
    */

    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
    <div class="container">
        <p v-if="loading"> Cargando Información ... </p>

        <div class="abs-center" v-if="error">
            <div class="alert alert-danger mt-2" >No existe el Pokemon!</div>
            <button @click="back" type="button" class="btn btn-dark">Volver</button>
        </div>
        
        <div class="abs-center"  v-if="data">
            <img :src="data.sprites?.other.home.front_default" alt="pokemon image">
            <h1>Info, ID: {{ data.id }} - Name: {{ data.name.toUpperCase() }} </h1>
            <div class="btn-group" role="group" aria-label="Basic mixed styles">
                <button @click="back" type="button" class="btn btn-dark">Volver</button>
                <button 
                    @click="add(data)" 
                    :disabled="findPoke(data.name)"
                    type="button" 
                    class="btn btn-success">Favoritos</button>
            </div>
           
        </div>
        
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
.abs-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
}

</style>