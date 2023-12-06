<template>
  <q-page-container class="container">
    <q-page>
      <q-container class="">
        <div class="main">
          <h1 class="text-h5 text-bold">Página de Pagamento</h1>
          <p class="q-font-regular">Selecione o método de pagamento</p>

          <q-btn @click="selectPaymentMethod('creditCard')"
            >Cartão de Crédito</q-btn
          >
          <q-btn @click="selectPaymentMethod('paypal')">Pix</q-btn>
          <q-btn @click="selectPaymentMethod('other')">Boleto</q-btn>

          <div v-if="selectedMethod === 'creditCard'">
            <CreditCardForm />
          </div>
          <div v-else-if="selectedMethod === 'paypal'">
            <PixForm />
          </div>
          <div v-else-if="selectedMethod === 'other'">
            <BoletoForm />
          </div>
        </div>
      </q-container>
    </q-page>
  </q-page-container>
</template>

<script>
import CreditCardForm from "../components/CreditCardForm.vue";
import PixForm from "../components/PixForm.vue"; // Substitua pelo caminho real do seu componente
import BoletoForm from "../components/BoletoForm.vue"; // Substitua pelo caminho real do seu componente

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
    BoletoForm,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
</style>
