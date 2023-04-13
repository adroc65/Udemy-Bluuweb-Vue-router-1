<script setup>

import { ref, onMounted } from 'vue'
import PaginatePoke from '@/components/PaginatePoke.vue';
import { useGetData } from '@/composables/getData.js'

    // Paginador
    const itemXpagina = 20;
    const arrayPg = ref({
        inicio: 0, 
        fin: itemXpagina,
        itemXpg: itemXpagina,
        maxLength: 620,
    })
    // Se lee la lista de pokemons.
    const {data, loading, getData, error} = useGetData()
    
    const cargarPoke = () => {
        localStorage.setItem('paginador', JSON.stringify(arrayPg.value))
        getData(`https://pokeapi.co/api/v2/pokemon?offset=${arrayPg.value.inicio}&limit=${arrayPg.value.itemXpg}`)
    }

    const next = () => {
        arrayPg.value.inicio += arrayPg.value.itemXpg
        arrayPg.value.fin += arrayPg.value.itemXpg
        cargarPoke()
    }

    const prev = () =>{
        arrayPg.value.inicio -= arrayPg.value.itemXpg
        arrayPg.value.fin -= arrayPg.value.itemXpg
        cargarPoke()
    }
    
    onMounted(() => {
        // Se detecta si hay valor de paginador en Local Storage
        if (localStorage.getItem("paginador")) {
            arrayPg.value = JSON.parse(localStorage.getItem("paginador"))
        }
        cargarPoke()
    });

</script>

<template>
    <div class="pokemon">
        <h1>Pokemons View</h1>
        <p v-if="loading"> Cargando Información ... </p>
        <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
        <div v-if="data">
            <PaginatePoke 
                :inicio="arrayPg.inicio"
                :fin="arrayPg.fin"
                :maxLength="arrayPg.maxLength"
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
