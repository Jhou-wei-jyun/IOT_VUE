/*=========================================================================================
  File Name: moduleTodo.js
  Description: Todo Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleSewingInfoState.js'
import mutations from './moduleSewingInfoMutations.js'
import actions from './moduleSewingInfoActions.js'
import getters from './moduleSewingInfoGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}