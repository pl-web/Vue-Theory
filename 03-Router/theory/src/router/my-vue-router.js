import Vue from 'vue'
import Router from './router.js'
import FirstNav from '@/components/FirstNav'
import SecondNav from '@/components/SecondNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'FirstNav',
      component: FirstNav
    },
    {
      path: '/second',
      name: 'SecondNav',
      component: SecondNav
    }
  ]
})
