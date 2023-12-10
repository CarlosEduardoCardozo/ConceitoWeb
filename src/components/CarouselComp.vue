<template>
  <div class="carousel">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in carouselItems" :key="item.id">
        <img :src="item.image" alt="Carousel Item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // Configurações do Swiper
        loop: true,
        autoplay: {
          delay: 3000,
        },
      },
      carouselItems: [
        {
          id: 1,
          image:
            "https://cdn.discordapp.com/attachments/976322101818560562/1158910006285058058/imagem-promo-inverno.png?ex=651df68d&is=651ca50d&hm=e525722e4f55cc3ab52a5bfd192aaa6ee424e956f58089187d451c31383857f3&",
        },
        {
          id: 2,
          image:
            "https://cdn.discordapp.com/attachments/976322101818560562/1158910006893224028/asminanaconceito.png?ex=651df68d&is=651ca50d&hm=0e4e6d49f3f2ac642812972e06129576757c74b420d9feb6f0ad4f2637fcd65f&",
        },
        {
          id: 3,
          image:
            "https://cdn.discordapp.com/attachments/976322101818560562/1158910007262330931/imagem-promo.png?ex=651df68d&is=651ca50d&hm=ef8bd10b1ec90527b031f609f768778e83b2a6d9ae7fdc284c1112a593bc862b&",
        },
        // Adicione mais itens do carrossel conforme necessário
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  width: 100%; /* Ocupa a largura inteira da tela */
  max-width: 100%; /* Evita que a imagem estenda além da largura da tela */
  overflow: hidden; /* Garante que a imagem não cause uma barra de rolagem horizontal */
}

.carousel img {
  width: 100%;
  height: auto;
}
</style>
