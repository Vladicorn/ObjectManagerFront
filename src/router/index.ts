import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import dashboard from '@/pages/dashboard.vue';
import obj from '@/pages/obj.vue';
import CreateObject from '@/pages/CreateObject.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '', component: dashboard},
  {path: '/obj', component: obj},
  {path: '/api/Createobject', component:CreateObject}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
