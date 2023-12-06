<script setup> 
import CamisetasService from "../../src/services/camisetas.js"

import { ref, onMounted } from 'vue'

const camisetas = ref([])


onMounted(async () => {
  const data = await CamisetasService.getAllCamisetas()
  camisetas.value = data
  console.log(data)
})

</script>

<template>
    
    <h1>Teste da API</h1>
    <div v-for="camiseta in camisetas" :key="camiseta.id">
      {{ camiseta.nome }}
        
    </div>
</template>
  