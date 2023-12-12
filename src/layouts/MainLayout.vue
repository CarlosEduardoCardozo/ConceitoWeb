<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar -->
    <q-header elevated class="custom-navbar">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="drawerModel = !drawerModel" />
        <q-toolbar-title>
          Seu Aplicativo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Menu lateral -->
    <q-drawer v-model="drawerModel" show-if-above bordered side="left">
      <q-list link inset-delimiter>
        <q-item clickable v-ripple @click="navigateTo('homepage')">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Página Inicial</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="navigateTo('feed-produtos')">
          <q-item-section avatar>
            <q-icon name="store" />
          </q-item-section>
          <q-item-section>Feed de Produtos</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('admin-page')">
          <q-item-section avatar>
            <q-icon name="build" />
          </q-item-section>
          <q-item-section>Página de Admin</q-item-section>
        </q-item>
        <!-- Adicione mais itens de menu conforme necessário -->
      </q-list>
    </q-drawer>

    <!-- Conteúdo principal -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawerModel: false,
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
      this.drawerModel = false; // Fechar o menu lateral após a navegação
    },
  },
};
</script>

<style scoped>
.custom-navbar {
  background-color: rgb(49, 49, 49);
  color: white;
  padding: 10px;
}
</style>