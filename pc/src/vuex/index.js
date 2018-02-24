import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    isHeader: true,
    isHeaderFooter: true,
    state: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ]
};
const mutations = {
    async href(state, http) {
        window.location.href = http
    },
    increment(state) {
        /* this.$store.commit('increment') page */
    }
}
export default new Vuex.Store({
    state,
    mutations
});