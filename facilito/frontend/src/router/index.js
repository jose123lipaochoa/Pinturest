import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListMovie from '@/components/Movie/ListMovie'
import EditMovie from "../components/Movie/EditMovie";
import DeleteMovie from "../components/Movie/DeleteMovie";
import CreateMovie from "../components/Movie/CreateMovie";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/movies',
      name: 'ListMovie',
      component: ListMovie,
    },
    {
      path: '/movies/:movieId/edit',
      name: 'EditMovie',
      component: EditMovie,
    },
    {
      path: '/movies/:movieId/delete',
      name: 'DeleteMovie',
      component: DeleteMovie,
    },
    {
      path: '/movies/new',
      name: 'CreateMovie',
      component: CreateMovie,
    },
  ],
  mode: 'history'
})
