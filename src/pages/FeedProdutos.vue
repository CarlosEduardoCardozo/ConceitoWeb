<!-- FeedProdutos.vue -->

<template>
  <q-page>
    <q-container class="q-pa-md">
      <q-card v-for="produto in produtos" :key="produto.id">
        <q-card-section>
          <q-img :src="produto.imagem" :alt="produto.nome" />
        </q-card-section>
        <q-card-section>
          <q-card-title>{{ produto.nome }}</q-card-title>
          <q-card-subtitle>{{ produto.preco }}</q-card-subtitle>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Ver Detalhes" color="primary" @click="verDetalhes(produto)" />
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
          nome: 'Camiseta Casual',
          preco: '$20.00',
          imagem: 'caminho/para/imagem1.jpg',
          detalhes: 'Descrição detalhada do produto...',
        },
        // Adicione mais produtos conforme necessário
      ],
    };
  },
  methods: {
    verDetalhes(produto) {
      // Redirecionar para a página de detalhes do produto
      this.$router.push({ name: 'detalhe-produto', params: { id: produto.id } });
    },
  },
};
</script>
