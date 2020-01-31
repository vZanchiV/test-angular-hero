import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Questionaire from '../views/Questionaire.vue'
import ScoreTotal from '../views/ScoreTotal.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/questions/:num',
    name: 'Questionaire',
    component: Questionaire
  },
  {
    path: '/resultTest',
    name: 'resultTest',
    component: ScoreTotal
  },

  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
