import {
  createRouter,
  createWebHistory
} from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'

const routes = [{
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/aboutt',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // This route is configured a bit differently.
    // What's going on here ?
    // As the comme tells us, this is for route-level code splitting.
    // In other words, this is a performance optimization.
    // When were walking about client-side routing, I mentioned how we're sent the inital page,index.html, including the rest of the app.
    // Some of you may have noticed that there is an asterisk here 
    // because there are situations like this where we're doing route-level code splitting, 
    // lazy loading components, so we're not actually sending over the entire application code on the first load of the app.

    // If your app is quite large,
    // it might actualy not make much sense from a performance standpoint to send your user all of your application code,
    // every page, every view, even tough they might not need it or might not need it yer
    // component: () =>
    //   import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router