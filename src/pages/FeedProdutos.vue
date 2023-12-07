<template>
  <q-page>
    <q-container class="q-pa-md row items-start q-gutter-md">
      <q-card v-for="camiseta in camisetas" :key="camiseta.id" class="q-mb-mb">
        <q-card-section>
          <img
            :src="camiseta.capa.url"
            style="max-height: 200px"
            :alt="camiseta.nome"
            class="card"
          />
        </q-card-section>
        <q-card-section class="nomevalor">
          <q-card-title>{{ camiseta.nome }}</q-card-title>
          <q-card-subtitle>R$:{{ camiseta.valor }}</q-card-subtitle>
        </q-card-section>
        <q-card-actions>
          <q-btn
            label="Ver Detalhes"
            color="primary"
            @click="verDetalhes(camiseta)"
          />
        </q-card-actions>
      </q-card>
    </q-container>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CamisetasService from "../../src/services/camisetas.js"
import { ref, onMounted } from 'vue'

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

<style scoped>
.card img {
  height: 150px;
}
.nomevalor {
  display: flex;
  flex-direction: column;
}
</style>
