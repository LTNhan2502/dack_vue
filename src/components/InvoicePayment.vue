<template>
    <div class="invoice">
      <h2>Hóa đơn </h2>
      <p><strong>Tên:</strong> {{ $route.query.name }}</p>
      <p><strong>Địa chỉ:</strong> {{ $route.query.address }}</p>
      <p><strong>Số Điện Thoại:</strong> {{ $route.query.phone }}</p>
      <p><strong>Email:</strong> {{ $route.query.email }}</p>
      <p><strong>Phương thức thanh toán:</strong> {{ $route.query.paymentMethod }}</p>
      <div>
        <h3>Các sản phẩm đã đặt:</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Into Money</th>
            </tr>
          </thead>
          <tbody>
            <!-- Sử dụng dữ liệu giỏ hàng từ URL -->
            <tr v-for="item in carts" :key="item.id">
              <td>
                <img :src="item.image" style="width: 50px; height: 50px;" />
                {{ item.name }}
              </td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price }}$</td>
              <td>{{ item.quantity * item.price }}$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InvoicePayment',
    props: {
      formData: Object,
    },
    computed: {
      // Trích xuất dữ liệu giỏ hàng từ query params
      carts() {
        return JSON.parse(this.$route.query.carts || '[]');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles */
  </style>
  