<template>
  <div class="mt-4 mb-4">
    <h1>Shopping Cart</h1>
    <div class="container ">
      <div class="row">
        <h5 class="mt-4 mb-4 text-center" style="margin: 0 auto;" v-if="getCarts.length==0">
          Giỏ hàng của bạn đang trống.
           <router-link to="/">Quay về trang chủ</router-link> 
          
        </h5>
        <div class="col-sm-12 col-md-12 col-md-offset-1" v-if="getCarts.length>0">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th colspan="2">Quantity</th>
                <th class="text-center">Price</th>
                <th class="text-center">Into Money</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in getCarts" :key="item.id">
                <td class="col-sm-8 col-md-6">
                  <div class="media">
                    <a class="thumbnail pull-left" href="#">
                      <img
                        class="media-object"
                        :src="item.image"
                        style="width: 72px; height: 72px"
                      />
                    </a>
                    <div class="media-body">
                      <h6 class="media-heading">
                        {{ item.name }}
                      </h6>
                    </div>
                  </div>
                </td>
                <td
                  class="col-sm-2 col-md-2"
                  style="text-align: center"
                  colspan="2"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      @click="reduce(item)"
                     :disabled="item.inStock==10 ||item.quantity==1" 
                      
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </button>
                    <input class="quanlity text-dark"
                      type="text"
                      disabled
                      :value="item.quantity"
                    />  

                    <button
                      type="button"
                      :disabled="item.inStock==0"
                      class="btn btn-outline-secondary"
                      @click="increase(item)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="col-sm-1 col-md-1 text-center">
                  {{ item.price}}$
                </td>
                <td class="col-sm-1 col-md-1 text-center">
                  <strong> {{ item.price*item.quantity }}$ </strong>
                </td>
                <td class="col-sm-1 col-md-1">
                  <button type="button" class="btn btn-danger" @click="remove(item)">
                    <span class="glyphicon glyphicon-remove" ></span>
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><h3>Total</h3></td>
                <td class="text-right">
                  <h3>
                    <strong>{{ getTotalCarts.toFixed(2)}}$</strong>
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>
          <!--  -->
    <button class="btn btn-danger" @click="removeAll(getCarts)">Xóa Hết</button>
    <!--  -->

    <button class="btn btn-primary" @click="goToPayment">Đặt hàng</button>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from "vuex";



export default {
  name: "ShoppingCart",
  computed: {
    ...mapGetters(["getCarts", "getTotalCarts"]),
  },
  methods: {
    ...mapMutations(['remove','removeAll','increase','reduce']),
    goToPayment() {
      this.$router.push({ 
    name: 'PaymentForm', 
    query: { 
      carts: JSON.stringify(this.getCarts.map(item => ({
        id: item.id,
        name: item.name,
        image: item.image, // Add image
        quantity: item.quantity, // Add quantity
        price: item.price
      })))
    } 
  });
  // Chuyển hướng tới trang thanh toán
    },
    
   
  },
};
</script>




<style>
.quanlity {
  width: 70px;
  border-radius: 0px;
  border: 1px solid rgb(97, 97, 102);
  text-align: center;
}
</style>
