<script setup>

// https://bluuweb.github.io/vue-udemy/30-04-pinia/#uso-tienda

import { useCounterStore } from '@/stores/counter.js'
// No es posible desestructurar valores de REF() o COMPUTED(),
// para eso se usa el "storeToRefs"
import { storeToRefs } from 'pinia'

const useCounter = useCounterStore()
// La funcion de multiplicar no es problema se destructura normal
const { increment } = useCounter
// Pero el REF y COMPUTED, seria
const { count, doubleCount } = storeToRefs(useCounter)

</script>

<template>

  <div class="container text-center p-1">
    <h1>Home Counter</h1>
    <p>  {{ count }} x 2 = {{ doubleCount }}</p>
    <button @click="increment" class="btn btn-primary">Increment</button>
  </div>

</template>
