/*=========================================================================================
  File Name: moduleTodo.js
  Description: Todo Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleSewingState.js'
import mutations from './moduleSewingMutations.js'
import actions from './moduleSewingActions.js'
import getters from './moduleSewingGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}