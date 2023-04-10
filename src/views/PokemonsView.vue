<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import PaginatePoke from '../components/PaginatePoke.vue';

    // Paginador
    const itemXpagina = 15;
    const inicio = ref(0);
    const fin = ref(itemXpagina);
    const next = () => {
        inicio.value += itemXpagina
        fin.value += itemXpagina
        getData()
       
    }
    const prev = () =>{
        inicio.value -= itemXpagina
        fin.value -= itemXpagina
        getData()
        
    }
    const maxLength = 620

    // Llamando a la API
    const pokemons = ref([])
    
   
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

    onMounted(() => {
        getData();
    });

</script>

<template>
    <div class="pokemon">
        <h1>Pokemons View</h1>
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
                v-for="poke in pokemons"
                :key="poke.name"
            >
                <router-link :to="`/pokemons/${poke.name}`">
                    {{ poke.name.toUpperCase() }} 
                </router-link>
            </li>
        </ul>
    </div>
</template>
