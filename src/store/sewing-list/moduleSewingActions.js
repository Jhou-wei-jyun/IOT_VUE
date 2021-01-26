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
  fetchProductLists({ commit }) {
    return axios.get('/api/apps/sewing/productLists')
      .then((response) => {


        let newArray = []
        response.data.forEach(element => {
          newArray = [...newArray, element]
          newArray = [...newArray, element]
        });
        let lineNo_count = {}
        let project_count = {}

        newArray.forEach(element => {
          project_count[element.project] = project_count[element.project] ? project_count[element.project] + 1 : 1;
          lineNo_count[element.lineNo] = lineNo_count[element.lineNo] ? lineNo_count[element.lineNo] + 1 : 1;
        });
        newArray.forEach(element => {
          element = Object.assign(element, { project_count: project_count[element.project] })
          element = Object.assign(element, { lineNo_count: lineNo_count[element.lineNo] })
        });
        console.log(newArray)

        commit('SET_PRODUCT_LIST', newArray)
      })
      .catch((error) => { error })
  },
}


