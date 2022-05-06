import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        item: {},
        user: {}
    },
  
    mutations: mutations,
    actions: actions,

    getters: {
        fetchedItem(state){
            return state.item;
        },
        fetchedUser(state){
            return state.user;
        }

    }

})