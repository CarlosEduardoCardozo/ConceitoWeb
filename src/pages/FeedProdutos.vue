<!-- Sua página principal -->
<template>
  <q-page>
    <q-container class="q-pa-md row items-start q-gutter-md">
      <CardProd v-for="camiseta in camisetas" :key="camiseta.id" :camiseta="camiseta" />
    </q-container>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CamisetasService from "../../src/services/camisetas.js"
import { ref, onMounted } from 'vue'
import CardProd from 'src/components/CardProd.vue'

const camisetas = ref([])
const router = useRouter()

onMounted(async () => {
  const data = await CamisetasService.getAllCamisetas()
  camisetas.value = data
})

const verDetalhes = (camiseta) => {
  router.push({
    name: "detalhe-produto",
    params: { id: camiseta.id },
  });
}
</script>
