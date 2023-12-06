import ApiTest from 'pages/ApiTest.vue';


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
      {
        path: 'apitest',
        name: 'apitest',
        component: () => import("pages/ApiTest.vue"),
      },
    ],
  },
  // {
  //   path: "/:catchAll(.*)*",
  //   component: () => import("pages/ErrorNotFound.vue"),
  // },
];

export default routes;
