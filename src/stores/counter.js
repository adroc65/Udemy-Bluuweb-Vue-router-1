// https://bluuweb.github.io/vue-udemy/30-04-pinia/#uso-tienda

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


// Se procede a configurar con "Composition API"
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => count.value++

  return { count, doubleCount, increment }
})


// -- Esta forma es la forma antigua con Opciones ...
// export const useCounterStore = defineStore('counter', {
//     state: () => ({ count: 0, }),
//     getters: {
//       doubleCount: (state) => state.count * 2,
//     },
//     actions: {
//       increment() {
//         this.count++
//       },
//     },
//   })