<template>
  <q-card>
    <q-card-section>
      <q-form @submit.prevent="enviarDados">
        <q-input outlined v-model="nome" label="Nome no Cartão" required></q-input>
        <q-input outlined v-model="numeroCartao" label="Número do Cartão" required></q-input>
        <q-input outlined v-model="dataValidade" label="Data de Validade" required></q-input>
        <q-input outlined v-model="cvv" label="CVV" required></q-input>

        <q-btn type="submit" label="Enviar"></q-btn>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      numeroCartao: '',
      dataValidade: '',
      cvv: ''
    };
  },
  methods: {
    enviarDados() {
      // Aqui você pode enviar os dados para o backend ou fazer o processamento necessário
      // Por exemplo: enviar para uma API ou fazer validações

      // Exemplo de console.log dos dados para demonstração
      console.log('Nome:', this.nome);
      console.log('Número do Cartão:', this.numeroCartao);
      console.log('Data de Validade:', this.dataValidade);
      console.log('CVV:', this.cvv);

      // Limpar os campos após o envio (opcional)
      this.nome = '';
      this.numeroCartao = '';
      this.dataValidade = '';
      this.cvv = '';
    }
  }
};
</script>
