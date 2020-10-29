
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Signin', component: () => import('pages/SignIn.vue')},
      { path: '/Forgot', component: () => import('pages/Forgot.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/Home',
    component: () => import('layouts/Home.vue'),
    children: [
      { path: '', component: () => import('pages/Intro.vue') }
    ]
  },
  {
    path: '/Proflist',
    component: () => import('layouts/List.vue'),
    children: [
      { path: '', component: () => import('pages/ProfessorList.vue')},
      { path: '/ProfessorAdd', component: () => import('pages/Professor.vue')},
      { path: '/Profile', component:() => import('pages/Profprofile.vue')},
      { path: '/Resources', component:() => import('pages/Resource.vue')}
    ]
  }
]

export default routes
