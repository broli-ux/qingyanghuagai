import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetail from '../views/BlogDetail.vue'
import AboutView from '../views/AboutView.vue'
import EmailView from '../views/EmailView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页 | 博客' }
  },
  {
    path: '/post/:slug',
    name: 'post',
    component: BlogDetail,
    props: true,
    meta: { title: '文章详情 | 博客' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: '关于我 | 博客' }
  },
  {
    path: '/email',
    name: 'email',
    component: EmailView,
    meta: { title: '邮箱 | 博客' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: { title: '页面不存在 | 博客' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || '氢氧化钙 的博客'
})

export default router
