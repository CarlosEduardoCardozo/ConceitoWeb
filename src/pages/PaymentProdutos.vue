<template>
  <q-page-container>
    <q-page>
      <q-container class="q-pa-md">
        <h1 class="text-h6">Página de Pagamento</h1>
  
        <payment-form @submit="processPayment" />
  
        <q-dialog v-model="successDialog" persistent>
          <q-card>
            <q-card-section class="q-pt-none">
              <q-item-main>
                <div class="text-h6">Pagamento bem-sucedido!</div>
              </q-item-main>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Fechar" color="primary" @click="closeSuccessDialog" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-container>
    </q-page>
  </q-page-container>
  
    


  </template>
  
  <script>
  export default {
    data() {
      return {
        successDialog: false,
      };
    },
    methods: {
      processPayment() {

        setTimeout(() => {
          this.successDialog = true;
        }, 2000);
      },
      closeSuccessDialog() {
        this.successDialog = false;
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  