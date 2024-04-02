import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from './actions';
const store = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'dack_vue', //tên của ứng dụng, sẽ được sử dụng để lưu trữ dữ liệu vào local storage
        // paths: ['products'], //danh sách các state cần lưu trữ, nếu không thiết lập thì tất cả state sẽ được lưu trữ
        storage: window.sessionStorage //sử dụng session storage thay vì local storage
      })],
    state,
    getters,
    mutations,
    actions
})
export default store 