<!-- FeedProdutos.vue -->

<template>
  <q-page>
    <q-container class="q-pa-md row items-start q-gutter-md">
      <q-card v-for="produto in produtos" :key="produto.id" class="q-mb-mb">
        <q-card-section>
          <img
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
          <!-- <a href="/detail"><button>Meu Botão</button></a> -->


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
          imagem:
            "https://hipnoise.com.br/wp-content/uploads/2023/07/suf-verde-frente.jpg",
          detalhes: "Descrição detalhada do produto...",
        },
        {
          id: 2,
          nome: "Camiseta Casual",
          preco: "$22.00",
          imagem:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/695/075/products/preto_amarelo1-03857dd013641c8ca716847673542915-1024-1024.png  ",
          detalhes: "Descrição detalhada do produto...",
        },
        {
          id: 3,
          nome: "Camiseta Casual",
          preco: "$22.00",
          imagem:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVWxSGLR3-GDxgWSAhzr5j59Jw7lBlGRAM1c4nhjUWIvRH9z1cf7sbwHpIHooImQLEe_JSuC3Xwf4x8kOApsiaz-dz8Sp7msRN-vzTijuHPzxY7SyGPjyKoQ&usqp=CAE",
          detalhes: "Descrição detalhada do produto...",
        },
        {
          id: 4,
          nome: "Camiseta Casual",
          preco: "$22.00",
          imagem:
            "https://www.postal.com.br/img/products/camiseta-sufgang-joker-tee-off-white_1_2000.jpg",
          detalhes: "Descrição detalhada do produto...",
        },
      ],
    };
  },
  methods: {
    verDetalhes(produto) {
      this.$router.push({
        name: "detalhe-produto",
        params: { id: produto.id },
      });
    },
  },
};
</script>

<style scoped>
.card img {
  height: 150px;
}
</style>
