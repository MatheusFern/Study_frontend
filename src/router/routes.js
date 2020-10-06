
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
  }
]

export default routes