<!-- MainLayout.vue -->

<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-btn flat dense icon="menu" @click="mostrarMenu" />
        <q-toolbar-title>Minha Loja de Roupas</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawerModel" side="left">
      <q-list link inset-delimiter>
        <q-item clickable v-ripple :to="{ name: 'feed-produtos' }">
          <q-item-section avatar>
            <q-icon name="store" />
          </q-item-section>
          <q-item-section>Feed de Produtos</q-item-section>
        </q-item>
        <!-- Adicione mais itens de menu conforme necessário -->
      </q-list>
    </q-drawer>

    <router-view />

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
    mostrarMenu() {
      this.drawerModel = !this.drawerModel;
    },
  },
};
</script>
