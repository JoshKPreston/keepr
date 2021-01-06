import { createRouter, createWebHashHistory } from 'vue-router'
// import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: loadPage('HomePage')
  },
  {
    path: '/profiles/:id',
    name: 'ProfilePage',
    component: loadPage('ProfilePage')
  },
  {
    path: '/vault/:id',
    name: 'VaultPage',
    component: loadPage('VaultPage')
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
