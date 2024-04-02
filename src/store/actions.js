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

    removeProduct({commit}, productId){
        commit('deleteProduct', productId)
    },

    update_Product({commit}, updatedProduct){
        commit('updateProduct', updatedProduct);
    },



}
export default action