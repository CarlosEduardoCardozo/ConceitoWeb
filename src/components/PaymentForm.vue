<template>
  <div>
    <q-form @submit="submitForm">
      <q-input v-model="cardNumber" label="Número do Cartão" />
      <q-input v-model="expiryDate" label="Data de Expiração" />
      <q-input v-model="cvv" label="CVV" />

      <q-btn type="submit" label="Pagar" color="primary" />
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit');
    },
  },
};
</script>

<style scoped>

</style>
