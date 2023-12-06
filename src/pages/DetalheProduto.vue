<template>
  <div class="row">
    <div class="col-6">
      <div class="parteimg">
        <div class="imagem">
          <q-img
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSGox7pEYTJrho9hEqwn-O_zGLQFuuSy1Rqxx7cpGaLXQL1Yk7uVTIuK-9uGHixotqeqCBwwI0cYRQHiPcF6ALq2HIAB5FS53s7Rxttl6WZ7NGAGcia4a7n&usqp=CAE"
          >
          </q-img>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="description">
        <h2>Camiseta Sufgang</h2>
        <p class="descricao">
          Produto Original e Autêntico Sufgang! Revenda Autorizada. - Material :
          100% Algodão - Algodão pré encolhido - Estampas Silk screen. - Tabela
          de tamanhos em centímetros aproximadamente
        </p>
        <p class="preco">Preço: R$ 19.99</p>
        <div class="botao">
          <q-btn
            outline
            style="color: goldenrod"
            label="Comprar"
            @click="comprarProduto"
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
@media (max-width: 600px) {
  .row {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .parteimg {
    display: flex;
    width: 180%;
    margin-left: -30%;
  }
  .description h2 {
    font-size: 30px;
  }
  .description {
    max-width: 300px;
  }
  .descricao {
    width: 10px;
  }
}
.parteimg {
  padding: 6%;
}
.imagem {
  color: white;
  width: 80%;
  height: 100%;
  margin-left: 6%;
}
.description {
  padding: 10px;
  width: 90%;
  height: 100%;
}
.description p {
  width: 100%;
}
.calcfret {
  padding: 10px;
}
.botao {
  display: flex;
  gap: 10px;
}
.calcfret {
  margin-top: 3%;
}
.formfrete {
  margin-left: 30%;
}
.frete {
  margin-top: 20px;
  max-width: 240px;
}
</style>

<script>
export default {
  methods: {
    comprarProduto() {
      const idProduto = this.$route.params.id; // Obtém o ID do produto da rota
      const nomeProduto = "Camiseta Sufgang"; // Substitua pelo nome real do produto
      const valorProduto = "R$ 19.99"; // Substitua pelo valor real do produto

      // Navega para a página de pagamento passando os detalhes do produto como parâmetros
      this.$router.push({
        name: "payment-prod",
        params: { id: idProduto, nome: nomeProduto, valor: valorProduto },
      });
    },
  },
};
</script>
