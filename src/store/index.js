/**
 * Created by Haolin on 2017/6/20.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import allAccount from './modules/allAccount';
import aside from './modules/aside';
import inbox from './modules/inbox';
import latestNews from './modules/latestNews';
import accountInfo from './modules/accountInfo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    allAccount,
    aside,
    inbox,
    latestNews,
    accountInfo
  }
});
