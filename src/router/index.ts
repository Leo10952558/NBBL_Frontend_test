import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: to => {
        const userRole = localStorage.getItem('role') || ''
        // const userRole = userData && userData.role ? userData.role : null
        if (userRole === 'ROLE_USER') {
          return { name: 'index' }
        }

        return { name: 'login', query: to.query }
      },
    },
    ...setupLayouts(routes),
  ],
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default router
