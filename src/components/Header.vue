<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <div class="container d-flex align-items-center justify-content-between">
                <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <router-link class="nav-link text-white" to="/"
                                >Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" to="/about"
                                >About
                            </router-link>
                        </li>
                        <form class="form-inline my-2 my-lg-0">
                            <input
                                class="form-control mr-sm-2"
                                type="string"
                                placeholder="Search"
                                v-model="searchValue"
                                @keyup="search(this.searchValue)"
                               
                            />
                            <!-- <button type="button" @click="search(this.searchValue)"
                                class="btn btn-outline-success my-2 my-sm-0"
                            >
                                Search
                            </button> -->
                        </form>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0" style="margin-right: auto;" v-if="isLogin!=true">
                        <router-link to="/dangnhap"> <li class="nav-item text-white">Đăng Nhập</li></router-link>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0" style="margin-right: auto;" v-if="isLogin!=false">
                        <li class="text-white nav-item btn btn-danger" @click="dangXuat">Đăng Xuất</li> 
                        <li class="text-white nav-item">Xin Chào {{ name }}</li>
                    </ul>
                    <div class="cart">
                        <router-link to="/shopping-cart">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="bi bi-cart3"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                />
                            </svg>
                            <span> {{getCountCarts}}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

import { mapGetters,mapMutations,mapState} from 'vuex';
export default {
    name: 'HeaderPage',
    data(){
        return{
           searchValue:""
        }
    },
    computed:{
        ...mapGetters(['getCountCarts','find']),
        ...mapState(['isLogin','name'])
       
    },
    methods:{
        ...mapMutations(['search','dangXuat'])
    }

}
</script>

<style scope>
.header {
    background-color: #767373;
}

.item-header {
    padding: 10px 0px;
}

.cart svg {
    color: white;
    margin-top: 10px;
}

.cart span {
    color: white;
    margin-bottom: 10px;
}

</style>
