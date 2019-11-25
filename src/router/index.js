import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Question1 from '../views/Question1.vue'
import Question2 from '../views/Question2.vue'
import Question3 from '../views/Question3.vue'
import Question4 from '../views/Question4.vue'
import Question5 from '../views/Question5.vue'
import Question6 from '../views/Question6.vue'
import Question7 from '../views/Question7.vue'
import Question8 from '../views/Question8.vue'
import Question9 from '../views/Question9.vue'
import Question10 from '../views/Question10.vue'
import Question11 from '../views/Question11.vue'
import Question12 from '../views/Question12.vue'
import Question13 from '../views/Question13.vue'
import Question14 from '../views/Question14.vue'
import Question15 from '../views/Question15.vue'
import Question16 from '../views/Question16.vue'
import Question17 from '../views/Question17.vue'
import Question18 from '../views/Question18.vue'
import Question19 from '../views/Question19.vue'
import Question20 from '../views/Question20.vue'
import ScoreTotal from '../views/ScoreTotal.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/question1',
    name: 'question1',
    component: Question1
  },
  {
    path: '/question2',
    name: 'question2',
    component: Question2
  },
  {
    path: '/question3',
    name: 'question3',
    component: Question3
  },
  {
    path: '/question4',
    name: 'question4',
    component: Question4
  },
  {
    path: '/question5',
    name: 'question5',
    component: Question5
  },
  {
    path: '/question6',
    name: 'question6',
    component: Question6
  },
  {
    path: '/question7',
    name: 'question7',
    component: Question7
  },
  {
    path: '/question8',
    name: 'question8',
    component: Question8
  },
  {
    path: '/question9',
    name: 'question9',
    component: Question9
  },
  {
    path: '/question10',
    name: 'question10',
    component: Question10
  },
  {
    path: '/question11',
    name: 'question11',
    component: Question11
  },
  {
    path: '/question12',
    name: 'question12',
    component: Question12
  },
  {
    path: '/question13',
    name: 'question13',
    component: Question13
  },
  {
    path: '/question14',
    name: 'question14',
    component: Question14
  },
  {
    path: '/question15',
    name: 'question15',
    component: Question15
  },
  {
    path: '/question16',
    name: 'question16',
    component: Question16
  },
  {
    path: '/question17',
    name: 'question17',
    component: Question17
  },
  {
    path: '/question18',
    name: 'question18',
    component: Question18
  },
  {
    path: '/question19',
    name: 'question19',
    component: Question19
  },
  {
    path: '/question20',
    name: 'question20',
    component: Question20
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
