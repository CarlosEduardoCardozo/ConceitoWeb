<template>
    <q-page>
      <!-- Carrossel de Imagens (Banner de Promoção) -->
      <CarouselComp />
  
      <!-- Barra de Pesquisa -->
      <div class="q-mt-md">
        <q-input
          v-model="filtro"
          label="Filtrar por Nome"
          outlined
          clearable
          @clear="limparFiltro"
        />
      </div>
  
      <!-- Lista de Camisetas Filtradas -->
      <q-container class="q-pa-md row items-start q-gutter-md">
        <CardProd
          v-for="camiseta in camisetasFiltradas"
          :key="camiseta.id"
          :camiseta="camiseta"
          @verDetalhes="verDetalhes"
        />
      </q-container>
    </q-page>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import CarouselComp from 'src/components/CarouselComp.vue';
  import CamisetasService from 'src/services/camisetas';
  import { ref, onMounted, computed } from 'vue';
  import CardProd from 'src/components/CardProd.vue';
  
  const camisetas = ref([]);
  const filtro = ref('');
  const router = useRouter();
  
  onMounted(async () => {
    const data = await CamisetasService.getAllCamisetas();
    camisetas.value = data;
  });
  
  const verDetalhes = (camiseta) => {
    router.push({
      name: 'detalhe-produto',
      params: { id: camiseta.id },
    });
  };
  
  const camisetasFiltradas = computed(() => {
    return camisetas.value.filter(camiseta => camiseta.nome.toLowerCase().includes(filtro.value.toLowerCase()));
  });
  
  const limparFiltro = () => {
    filtro.value = '';
  };
  
  // Dados de exemplo para banners de promoção
  const banners = ref([
    { id: 1, url: 'https://media.discordapp.net/attachments/976322101818560562/1158910006285058058/imagem-promo-inverno.png?ex=6582288d&is=656fb38d&hm=3812f98d4a8a78ded61585ecb2e2133b63a14a404a97960859af148c901686a7&=&format=webp&quality=lossless&width=1350&height=375' },
    { id: 2, url: 'https://media.discordapp.net/attachments/976322101818560562/1158910007262330931/imagem-promo.png?ex=6582288d&is=656fb38d&hm=34999317efdfb1681fddbc5a35b787f34cecf21c51500e8a71601ad1355a07b3&=&format=webp&quality=lossless&width=1350&height=375' },
    // Adicione mais banners conforme necessário
  ]);
  </script>
  