<!-- DetalhesProduto.vue -->

<template>
  <q-page>
    <q-container class="q-pa-md">
      <q-card>
        <q-card-section>
          <q-img :src="produto.imagem" :alt="produto.nome" />
        </q-card-section>
        <q-card-section>
          <q-card-title>{{ produto.nome }}</q-card-title>
          <q-card-subtitle>{{ produto.preco }}</q-card-subtitle>
        </q-card-section>
        <q-card-section>
          <q-paragraph>{{ produto.detalhes }}</q-paragraph>
        </q-card-section>
      </q-card>
    </q-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      produto: {
        id: 1,
        nome: "Camiseta Casual",
        preco: "$22.00",
        imagem:
          "https://hipnoise.com.br/wp-content/uploads/2023/07/suf-verde-frente.jpg",
        detalhes: "Descrição detalhada do produto...",
      },
    };
  },
};
</script>
