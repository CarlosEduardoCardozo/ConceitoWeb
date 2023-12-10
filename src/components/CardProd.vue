<!-- CardProd.vue -->
<template>
    <div class="cardprod">
      <q-card>
        <q-card-section>
          <img
            :src="camiseta.capa.url"
            style="max-width: 100%; max-height: 200px"
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
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps(['camiseta']);
  const router = useRouter();
  
  const verDetalhes = () => {
    router.push({
      name: 'detalhe-produto',
      params: { id: props.camiseta.id },
    });
  };
  </script>
  
  <style scoped>
  .q-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .card img {
    flex: 1; 
    object-fit: cover; 
    max-width: 100%;
    max-height: 100%; 
  }
  
  .nomevalor {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  
  .q-card-section {
    flex: 1;
  }
  </style>
  