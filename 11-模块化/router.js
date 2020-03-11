导入 Home 从 component.js
导入 VueRouter 从 VueRouter.js
const router = new VueRouter({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/product',
      redirect: '/product/monitor',
      component: Product,
      children: [
        {
          path: ':pathName',
          component: Component
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})

导出 router
export router;
