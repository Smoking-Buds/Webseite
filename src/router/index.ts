import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import ShopView from '../views/ShopView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home - Smoking Bud\'s'
      }
    },
    {
      path: '/news',
      name: 'News',
      component: NewsView,
      meta: {
        title: 'News - Smoking Bud\'s'
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView,
      meta: {
        title: 'Shop - Smoking Bud\'s'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: {
        title: 'About - Smoking Bud\'s'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
      meta: {
        title: 'Contact - Smoking Bud\'s'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        title: 'Login - Smoking Bud\'s'
      }
    }
  ]
})

router.afterEach((to: RouteLocationNormalized) => {
  const defaultTitle = 'Smoking Bud\'s';
  const title = (to.meta.title as string) || defaultTitle;
  document.title = title;
});

export default router;
