<script>
import CreditCardForm from "../components/CreditCardForm.vue";
import PixForm from "../components/PixForm.vue";

import { ref, onMounted } from "vue";
import CamisetasService from "../../src/services/camisetas.js";
import { useRoute } from "vue-router";

const camiseta = ref(null);
const route = useRoute();

onMounted(async () => {
  const data = await CamisetasService.getAllCamisetas();
  const idProduto = route.params.id;
  camiseta.value = data.find((item) => item.id === Number(idProduto));
});

export default {
  data() {
    return {
      selectedMethod: null,
    };
  },
  methods: {
    selectPaymentMethod(method) {
      this.selectedMethod = method;
    },
  },
  components: {
    CreditCardForm,
    PixForm,
  },
};
</script>
<template>
  <q-page-container class="container">
    <q-page>
      <q-container class="">
        <div class="main">
          <div>
            <h1 class="pagtitle">Página de Pagamento</h1>
            <div class="geral">
              <div class="produto">
                <div class="img">
                  <q-img :src="$route.query.imagem" alt="Imagem do Produto" />
                </div>
                <div class="infoprod">
                  <p>ID: {{ $route.query.id }}</p>
                  <p>Nome: {{ $route.query.nome }}</p>
                  <p>Valor: {{ $route.query.valor }}</p>
                </div>
              </div>
            </div>
            </div>
          <div class="pagamento">
            <p class="q-font-regular">Selecione o método de pagamento</p>
            <div class="botaopag">
              <q-btn @click="selectPaymentMethod('creditCard')"
                >Cartão de Crédito</q-btn
              >
              <q-btn @click="selectPaymentMethod('pix')">Pix</q-btn>

              <div v-if="selectedMethod === 'creditCard'">
                <CreditCardForm />
              </div>
              <div v-else-if="selectedMethod === 'pix'">
                <PixForm />
              </div>
            </div>
          </div>
        </div>
      </q-container>
    </q-page>
  </q-page-container>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
}
.pagtitle {
  font-size: 50px;
}
.produto {
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.562);
  padding: 24px;
  justify-content: space-between;
  width: 70%;
  align-items: center;
}
.main {
  justify-content: center;
  align-items: center;
}
.img {
  width: 30%;
  margin-right: 20px;
}
.pagamento {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.botaopag{
  display: flex;
  flex-direction: column;
}
.geral{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
</style>
