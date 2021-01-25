/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

export default {
  fetchSewingItems({ commit }) {
    return axios.post('http://10.112.10.127:1500/api/factory')
      .then((response) => {
        // console.log('fetchSewingItems', response.data.data)
        commit('SET_SEWINGS', response.data.data)
      })
      .catch((error) => { error })
    // await axios.get('/api/apps/sewing/sewingLists')
    //   .then((response) => {
    //     console.log('getData', response.data)
    //     commit('SET_SEWINGS', response.data)
    //   })
    //   .catch((error) => { error })
  },
  setSewingListStatus({ commit }, payload) {
    commit('SET_SEWING_LIST_STATUS', payload)
  },
}


