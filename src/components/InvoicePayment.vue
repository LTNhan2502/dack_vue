<template>
    <div class="invoice">
      <h2>Đặt hàng thành công!</h2>
      <div class="customer-info">
        <table class="table">
          <tbody>
            <tr>
              <td><strong>Tên:</strong></td>
              <td>{{ $route.query.name }}</td>
            </tr>
            <tr>
              <td><strong>Địa chỉ:</strong></td>
              <td>{{ $route.query.address }}</td>
            </tr>
            <tr>
              <td><strong>Số Điện Thoại:</strong></td>
              <td>{{ $route.query.phone }}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td>{{ $route.query.email }}</td>
            </tr>
            <tr>
              <td><strong>Phương thức thanh toán:</strong></td>
              <td>{{ $route.query.paymentMethod }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Các sản phẩm đã đặt:</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.id">
            <td><img :src="item.image" class="product-image" /></td>
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}$</td>
            <td>{{ item.quantity * item.price }}$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InvoicePayment',
    props: {
      formData: Object,
    },
    computed: {
      carts() {
        return JSON.parse(this.$route.query.carts || '[]');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Bố cục */
  .invoice {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .customer-info {
    margin-bottom: 20px;
  }
  
  /* Kiểu chữ */
  h2, h3 {
    color: #333;
  }
  
  /* Hình ảnh sản phẩm */
  .product-image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  
  /* Hiệu ứng */
  .table-hover tbody tr:hover {
    background-color: #f5f5f5;
  }
  
  /* Bảng */
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
  
  .table th {
    background-color: #f5f5f5;
  }
  
  .table td {
    background-color: #fff;
  }
  
  .table th:first-child, .table td:first-child {
    border-top-left-radius: 5px;
  }
  
  .table th:last-child, .table td:last-child {
    border-top-right-radius: 5px;
  }
  
  </style>
  