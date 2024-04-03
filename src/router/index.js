import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
// import HomeView from '../views/HomeView.vue'
// import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'
import AdminHome from '@/components/Admin/AdminHome'
import UpdateProduct from '@/views/Products/UpdateProduct'
import AddProduct from '../views/Products/AddProduct.vue'
import AdminProduct from '@/components/Admin/AdminProduct'
import HomePage from '../components/HomePage.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import DetailProduct from '../components/DetailProduct.vue'
import DangNhap from '../components/DangNhap.vue'
import DangKi from '../components/DangKi.vue'

const routes = [
  // {
    // path: '/',
    // name: 'home',
    // component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: AdminHome,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAdmin) {
        next();
        // console.log(store.getters.isAdmin);
      } else {
        alert("Bạn cần phải đăng nhập admin để truy cập vào trang này");
        console.log(store.getters.isAdmin);
        next('/dangnhap');
      }
    }
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: AdminProduct
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/update/:id',
    name: 'UpdateProduct',
    component: UpdateProduct
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About'),
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/dangnhap',
    name: 'DangNhap',
    component: DangNhap
  },
  {
    path: '/dangki',
    name: 'DangKi',
    component: DangKi
  },
  {
    path: '/detail-product/:id',
    name: 'DetailProduct',
    component: DetailProduct,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
