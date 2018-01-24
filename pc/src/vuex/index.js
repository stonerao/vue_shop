import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    footer: "1",
    file: {
        isFile: false,
        src: ""
    },
    isLoading: true,
};
const mutations = {
    async href(state, http) {
        window.location.href = http
    }
}
export default new Vuex.Store({
    state,
    mutations
});