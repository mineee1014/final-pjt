import { createRouter, createWebHistory } from 'vue-router'
import { useAccountStore } from '@/stores/auth_movie'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue'
import MyLikeView from '@/views/MyLikeView.vue'
import UserView from '@/views/UserView.vue'
import MovieHomeView from '@/views/MovieHomeView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import CountryDetailView from '@/views/CountryDetailView.vue'
import IndexView from '@/views/IndexView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'LogInView',
      component: LogInView
    },
    {
      path: '/mylike/:id',
      name: 'MyLikeView',
      component: MyLikeView
    },
    {
      path: '/user/:id',
      name: 'UserView',
      component: UserView
    },
    {
      path: '/home',
      name: 'MovieHomeView',
      component: MovieHomeView
    },
    {
      path: '/movie/:id',
      name: 'MovieDetailView',
      component: MovieDetailView
    },
    {
      path: '/movie/country/:id/:country',
      name: 'CountryDetailView',
      component: CountryDetailView
    },
  ]
})

router.beforeEach((to,from)=>{
  const store = useAccountStore()
  // if (to.name === 'ArticleView' && !store.isLogin) {
  //   window.alert('로그인이 필요합니다.')
  //   return { name : 'LogInView'}
  // }
  // if ((to.name === 'SignUpView' || to.name=='LogInView') && (store.isLogin)){
  //   window.alert('이미 로그인 했습니다.')
  //   return { name: 'ArticleView'}
  // }
  if ((to.name === 'LikeView' || to.name === 'UserView') && !store.isLogin){
    window.alert('로그인이 필요합니다.')
    return { name: 'LogInView'}
  }
})




export default router
