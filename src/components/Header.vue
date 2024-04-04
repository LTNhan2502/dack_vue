<template>
    <div class="header bg-dark">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand">AnThoiNao</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
            </ul>
  
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="searchValue"
                @keyup="search(this.searchValue)" />
            </form>
  
            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item" v-if="!isLogin">
                <router-link to="/dangnhap" class="nav-link">Đăng Nhập</router-link>
              </li>
              <li class="nav-item" v-if="isLogin">
                <button class="btn btn-danger" @click="dangXuat">Đăng Xuất</button>
                <span class="nav-link" v-if="isLogin">Xin Chào {{ userName }}</span>
              </li>
              <li class="nav-item" v-if="!isLoginadmin">
                <router-link to="/admin" class="nav-link">Admin</router-link>
              </li>
              <li class="nav-item" v-if="isLoginadmin">
                <button class="btn btn-danger" @click="dangXuatadmin">Đăng Xuất admin</button>
                <span class="nav-link" v-if="isLoginadmin">Xin Chào {{ userName }}</span>
              </li>
            </ul>
  
            <router-link to="/shopping-cart" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3"
                viewBox="0 0 16 16">
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span class="badge badge-light">{{ getCountCarts }}</span>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapMutations, mapState } from 'vuex';
  
  export default {
    name: 'HeaderPage',
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapGetters(['getCountCarts']),
      ...mapState(['isLogin', 'name', 'isLoginadmin']),
      userName() {
        // Kiểm tra xem người dùng đã đăng nhập chưa
        if (this.isLogin) {
          // Trả về chuỗi "Xin Chào [name]" nếu đã đăng nhập
          return "Xin Chào " + this.name;
        } else if (this.isLoginadmin) {
          // Trả về chuỗi "Xin Chào [name]" nếu đăng nhập với quyền admin
          return "Xin Chào " + this.name;
        } else {
          // Nếu chưa đăng nhập, trả về chuỗi trống
          return "";
        }
      }
    },
    methods: {
      ...mapMutations(['search', 'dangXuat', 'dangXuatadmin'])
    }
  }
  </script>
  
  <style scoped>
  .header {
    padding: 10px 0;
  }
  
  .navbar-brand {
    font-size: 24px;
    font-weight: bold;
  }
  
  .navbar-nav .nav-link {
    font-size: 18px;
  }
  
  .form-control {
    border-color: #28a745;
  }
  
  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .btn-success:hover {
    background-color: #218838;
  }
  
  .btn-danger {
    margin-right: 10px;
  }
  
  .cart {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }
  
  .cart svg {
    margin-right: 5px;
    color: #fff;
  }
  
  .badge {
    background-color: #28a745;
    margin-left: 5px;
  }
  </style>
  