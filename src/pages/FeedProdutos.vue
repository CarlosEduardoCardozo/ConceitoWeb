<!-- FeedProdutos.vue -->

<template>
  <q-page>
    <q-container class="q-pa-md row items-start q-gutter-md">
      <q-card v-for="produto in produtos" :key="produto.id" class="q-mb-mb">
        <q-card-section>
          <q-img
            :src="produto.imagem"
            :alt="produto.nome"
            style="max-height: 200px"
            class="card"
          />
        </q-card-section>
        <q-card-section>
          <q-card-title>{{ produto.nome }}</q-card-title>
          <q-card-subtitle>{{ produto.preco }}</q-card-subtitle>
        </q-card-section>
        <q-card-actions>
          <q-btn
            label="Ver Detalhes"
            color="primary"
            @click="verDetalhes(produto)"
          />
        </q-card-actions>
      </q-card>
    </q-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        {
          id: 1,
          nome: "Camiseta Casual",
          preco: "$22.00",
          imagem: "assets/sufgang.jpg",
          detalhes: "Descrição detalhada do produto...",
        },
        {
          id: 2,
          nome: "Camiseta Casual",
          preco: "$22.00",
          imagem: "sufgang.jpg",
          detalhes: "Descrição detalhada do produto...",
        },
        {
          id: 3,
          nome: "Camiseta Casual",
          preco: "$22.00",
          imagem: "sufgang.jpg",
          detalhes: "Descrição detalhada do produto...",
        },
         {
          id: 3,
          nome: "Camiseta Casual",
          preco: "$22.00",
          imagem: "sufgang.jpg",
          detalhes: "Descrição detalhada do produto...",
        },
      ],
    };
  },
  methods: {
    verDetalhes(produto) {
      // Redirecionar para a página de detalhes do produto
      this.$router.push({
        name: "detalhe-produto",
        params: { id: produto.id },
      });
    },
  },
};
</script>

<style scoped>
.card {
  height: 120px;
}
</style>
