<script setup>

import { ref, onMounted } from 'vue'
import PaginatePoke from '@/components/PaginatePoke.vue';
import { useGetData } from '@/composables/getData.js'

    // Paginador
    const itemXpagina = 15;
    const inicio = ref(0);
    const fin = ref(itemXpagina);
    const next = () => {
        inicio.value += itemXpagina
        fin.value += itemXpagina
        getData(`https://pokeapi.co/api/v2/pokemon?offset=${inicio.value}&limit=${itemXpagina}`)
       
    }
    const prev = () =>{
        inicio.value -= itemXpagina
        fin.value -= itemXpagina
        getData(`https://pokeapi.co/api/v2/pokemon?offset=${inicio.value}&limit=${itemXpagina}`)
        
    }
    const maxLength = 620
    
    // Se lee la lista de pokemons.
    const {data, loading, getData, error} = useGetData()

   /*
    const getData = async () =>{
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?offset=${inicio.value}&limit=${itemXpagina}`
            //console.log(url)
            const { data } = await axios.get(url)
            pokemons.value = data.results
            //console.log(pokemons.value)
        } catch (error) {
            console.log(error)
        }
    }
    */
    
    onMounted(() => {
        getData(`https://pokeapi.co/api/v2/pokemon?offset=${inicio.value}&limit=${itemXpagina}`);
    });

</script>

<template>
    <div class="pokemon">
        <h1>Pokemons View</h1>
        <p v-if="loading"> Cargando Información ... </p>
        <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
        <div v-if="data">
            <PaginatePoke 
                :inicio="inicio"
                :fin="fin"
                :maxLength="maxLength"
                @next="next"
                @prev="prev"
            />
            <ul class="list-group text-center">
                <li 
                    class="list-group-item list-group-item-action"
                    v-for="poke in data.results"
                    :key="poke.name"
                >
                    <router-link :to="`/pokemons/${poke.name}`">
                        {{ poke.name.toUpperCase() }} 
                    </router-link>
                </li>
            </ul>
        </div>
        
    </div>
</template>
