<!-- DetalheProduto.vue -->

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
      produto: {},
    };
  },
  created() {
    const produtoId = this.$route.params.id;
    this.produto = this.produtos.find((p) => p.id === parseInt(produtoId));
  },
};
</script>
