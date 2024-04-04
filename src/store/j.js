dangKiadmin(state, info) {
    if (info.email !== "" && info.password !== "" && info.hoten !== "") {
      const admin = JSON.parse(localStorage.getItem('admin')) || [];
      state.admin = admin;
      state.admin.push(info);
      localStorage.setItem('admin', JSON.stringify(state.admin));
      swal("Thành công!", "Đăng kí thành công!", "success").then(() => {
        router.push('/dangnhap');
      });
    } else {
      swal("Thất bại!", "Đăng kí thất bại!", "error");
    }



  },

  dangNhapadmin(state, info) {
    console.log(info)
    let admin = JSON.parse(localStorage.getItem('admin'));
    let kq = admin.find(e => e.email === info.email && e.password === info.password)
    console.log(kq)
    if (kq) {
      state.isLoginadmin = true
      state.name = kq.hoten;
      swal("Thành công!", "Đăng nhập thành công!", "success").then(() => {
        router.push('/');
      });
    } else {
      swal("Thất bại!", "Đăng nhập thất bại!", "error");
    }
  },
  dangXuatadmin(state) {
    state.isLoginadmin = false;
    swal("Thành công!", "Đăng xuất thành công!", "success").then(() => {
      router.push('/');
    });
  },