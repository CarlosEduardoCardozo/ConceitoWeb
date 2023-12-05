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
        <p>Produto Original e Autêntico Sufgang! Revenda Autorizada. - Material : 100% Algodão - Algodão pré encolhido - Estampas : Silk screen. - Tabela de tamanhos em centímetros aproximadamente </p>
        <p>Preço: R$ 19.99</p>
        <div class="botao">
          <q-btn color="blue" text-color="black" label="Comprar" />
          <q-btn color="yellow" text-color="black" label="Add Carrinho" />
        </div>
      </div>
    </div>
    <div class="calcfret">calcularfrete</div>
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
.description p{
  width: 60%;
}
.calcfret {
  padding: 10px;
}
.botao {
  display: flex;
  gap: 10px;
}
</style>
