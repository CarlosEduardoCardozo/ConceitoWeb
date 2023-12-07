<script setup>
import { ref, onMounted } from 'vue'
import CamisetasService from "../../src/services/camisetas.js"
import { useRouter, useRoute } from 'vue-router'

const camiseta = ref(null)
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const data = await CamisetasService.getAllCamisetas()
  const idProduto = route.params.id
  camiseta.value = data.find(item => item.id === Number(idProduto))
})

const comprarProduto = (camiseta) => {
  const id = camiseta.id
  const nome = camiseta.nome
  const valor = camiseta.valor
  const imagem = camiseta.capa.url

  router.push({
    name: 'payment-prod',
    query: {
      id,
      nome,
      valor,
      imagem,
    }
  })
}
</script>


<template>
  <div v-if="camiseta" class="row">
    <div class="col-6">
      <div class="parteimg">
        <div class="imagem">
          <q-img
            :src="camiseta.capa.url"
            alt="Imagem da Camiseta"
            class="imgcamiseta"
          >
          </q-img>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="description">
        <h2>{{ camiseta.nome }}</h2>
        <p class="descricao">
          Produto Original e Autêntico Sufgang! Revenda Autorizada. - Material :
          100% Algodão - Algodão pré encolhido - Estampas Silk screen. - Tabela
          de tamanhos em centímetros aproximadamente
        </p>
        <p class="preco">Preço: {{ camiseta.valor }}</p>
        <div class="botao">
          <q-btn
            outline
            style="color: goldenrod"
            label="Comprar"
            @click="comprarProduto(camiseta)"
          />
          <q-btn
            color="black"
            outline
            text-color="black"
            label="Add Carrinho"
          />
        </div>
        <div class="frete">
          <p>Calcular frete</p>
          <q-input
            bottom-slots
            v-model="text"
            label="CEP"
            counter
            maxlength="12"
            :dense="dense"
          >
            <template v-slot:before>
              <q-icon name="flight_takeoff" />
            </template>

            <template v-slot:append>
              <q-icon
                v-if="text !== ''"
                name="close"
                @click="text = ''"
                class="cursor-pointer"
              />
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.imgcamiseta{
  width: 70%;
  margin-left: 20%;
}
.frete{
  width: 40%;
  margin-top: 20px;
}
.description{
  width: 80%;
}
</style>
