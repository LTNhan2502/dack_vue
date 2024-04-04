<template>
    <div class="invoice">
      <h2>Hóa đơn </h2>
      <p><strong>Tên:</strong> {{ $route.query.name }}</p>
      <p><strong>Địa chỉ:</strong> {{ $route.query.address }}</p>
      <p><strong>Số Điện Thoại:</strong> {{ $route.query.phone }}</p>
      <p><strong>Email:</strong> {{ $route.query.email }}</p>
      <div>
      <h3>Các sản phẩm đã đặt:</h3>
      <ul>
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
            
              <li v-for="item in carts" :key="item.id">
          <img :src="item.image" style="width: 50px; height: 50px;" /> 
          {{ item.name }} - {{ item.quantity }} x {{ item.price }}$ 
        </li>
        </table>
      </ul>
    </div>
      <!-- Other invoice information -->
    </div>
  </template>
  
  <script>
  
 export default {
  name: 'InvoicePayment',

  props: {
    formData: Object,
    carts: Array, // Thêm prop carts để nhận dữ liệu giỏ hàng
  },
  
};

  </script>
  
  <style scoped>
  /* .invoice {
    max-width: 400px;
    margin: 0 auto;
  } */
  </style>
  