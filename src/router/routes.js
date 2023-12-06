const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "feed",
        name: "feed-produtos",
        component: () => import("pages/FeedProdutos.vue"),
      },
      {
        path: "/detalhe-produto/:id",
        name: "detalhe-produto",
        component: () => import("pages/DetalheProduto.vue"),
      },
      {
        path: "/payment",
        name: "payment-prod",
        component: () => import("pages/PaymentProdutos.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
