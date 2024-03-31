const action = {
    // handelDangKi({commit},payload){
    //     commit('dangKi',payload)
    //     console.log(payload)
    // },
    // handelDangNhap({commit},payload){
    //     commit('dangNhap',payload);
    // }
    addProduct({ commit }, product) {
        commit('addProduct', product);
    },

    addImage({ commit }, image) {
        commit('SET_IMAGE', image);
    },



}
export default action