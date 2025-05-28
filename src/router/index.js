import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import AthletestList from '@/pages/AthletesList.vue'
import Sports from '@/pages/Sports.vue'
import UpdateAthletes from '@/pages/UpdateAthletes.vue'
import UpdateSports from '@/pages/UpdateSports.vue'
import CreateAthletes from '@/pages/CreateAthletes.vue'
import CreateSports from '@/pages/CreateSports.vue'
import Filter from '@/pages/Filter.vue'

const routes = [
  { path: '/', name:'home',  component: Home },
  
  { path: '/sports', name: 'sports', component: Sports },
  { path: '/sports/create', name: 'sports-create', component: CreateSports },
  { path: '/sports/udpate/:id?', name: 'sports-udpate', component: UpdateSports, props: (route) => {
      return {
        id: route.params.id,
      }
    }
  },

  { path: '/athletest-list', name: 'athletest', component: AthletestList },
  { path: '/athletest/create', name: 'athletest-create', component: CreateAthletes },
  { path: '/athletest-list/udpate/:id?', name: 'athletest-udpate', component: UpdateAthletes, props: (route) => {
      return {
        id: route.params.id,
      }
    }
  },
  
  { path: '/filter', name:'filter',  component: Filter },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
