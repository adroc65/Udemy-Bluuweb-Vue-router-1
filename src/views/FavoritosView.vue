<script setup>
// https://tablericons.com/

import { useFavoritosStore } from '@/stores/favoritos.js'
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore()
const { remove } = useFavoritos

// Se lee el arreglo de favoritos 
const { favoritos } = storeToRefs(useFavoritos)

</script>
<template>
    <div class="container">
        <h1>Favoritos</h1>
        <p v-if="favoritos.length === 0">No hay Favoritos</p>
        <div v-else class="justify-content-center">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody 
                    v-for="item in favoritos"
                    :key="item.id"
                >
                    <tr >
                        <th scope="row" class="align-middle">{{ item.id }}</th>
                        <td class="align-middle">
                            <router-link :to="`/pokemons/${item.name}`">
                                {{ item.name.toUpperCase() }} 
                            </router-link>
                        </td>
                        <td class="align-middle">
                            <img :src="item.sprites?.front_default" alt="pokemon image">
                        </td>
                        <td class="align-middle">
                            <div class="container-flex">

                                <router-link :to="`/pokemons/${item.name}`" 
                                    class="btn-redondo mas"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#c9de00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="12" cy="12" r="9" />
                                        <line x1="9" y1="12" x2="15" y2="12" />
                                        <line x1="12" y1="9" x2="12" y2="15" />
                                    </svg>
                                </router-link>

                                <button @click="remove(item.id)" class="btn-redondo clr">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="36" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#ffec00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                </button>
                                
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<style scoped>

.container-flex{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.btn-redondo{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-width: 3px;
}
.clr{
    background: orangered;
    margin-left: 3px;
}
.mas{
    background: #597e8d;
    margin-right: 3px;
}

table th{
    text-align: center;
}
table td{
    text-align: center;
}
</style>