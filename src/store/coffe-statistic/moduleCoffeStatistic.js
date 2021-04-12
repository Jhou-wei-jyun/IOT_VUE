/*=========================================================================================
  File Name: moduleCoffeStatistic.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleCoffeStatisticState.js'
import mutations from './moduleCoffeStatisticMutations.js'
import actions from './moduleCoffeStatisticActions.js'
import getters from './moduleCoffeStatisticGetters.js'



export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

