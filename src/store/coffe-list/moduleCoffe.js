/*=========================================================================================
  File Name: moduleCoffe.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleCoffeState.js'
import mutations from './moduleCoffeMutations.js'
import actions from './moduleCoffeActions.js'
import getters from './moduleCoffeGetters.js'



export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

