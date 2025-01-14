const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@play/views/Home.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app) {
  app.use(router)
}
