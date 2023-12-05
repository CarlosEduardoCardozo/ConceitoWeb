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
        <p>
          Produto Original e Autêntico Sufgang! Revenda Autorizada. - Material :
          100% Algodão - Algodão pré encolhido - Estampas Silk screen. - Tabela
          de tamanhos em centímetros aproximadamente
        </p>
        <p class="preco">Preço: R$ 19.99</p>
        <div class="botao">
          <RouterLink to="/payment">
            <q-btn color="green" text-color="black" label="Comprar" />
          </RouterLink>
          <q-btn color="blue" text-color="black" label="Add Carrinho" />
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
.parteimg {
  padding: 6%;
}
.imagem {
  color: white;
  width: 70%;
  height: 100%;
  margin-left: 6%;
}
.description {
  padding: 10px;
  width: 100%;
  height: 100%;
}
.description p {
  width: 60%;
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
