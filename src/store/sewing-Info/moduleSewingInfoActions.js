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
  resetSate({ commit }, payload) {
    commit('RESET_STATE', payload)
  },
  setElectricity({ commit }, payload) {
    commit('SET_ELECTRICITY', payload)
    commit('SET_DATETIME', payload)
  },
  setNeedle({ commit }, payload) {
    commit('SET_NEEDLE', payload)
  },
  // fetchSewingTargetItem({ commit }, payload) {
  //   commit('FETCH_SEWING_TARGET_ITEM', payload)
  // },
  // fetchSewingTargetItem({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('/api/apps/sewing/sewingLists')
  //       .then((response) => {
  //         // console.log('action', payload)
  //         console.log('target', response.data)
  //         for (const [key, value] of Object.entries(response.data)) {
  //           for (const [keytr, valuetr] of Object.entries(value)) {
  //             for (const [k, v] of Object.entries(valuetr)) {
  //               if (v.machineNo == payload) {
  //                 var result = {
  //                   lineNo: value.lineNo,
  //                   machineNo: v.machineNo,
  //                   userStatus: v.userStatus,
  //                   machineStatus: v.machineStatus,
  //                   user: v.user,
  //                   checkTime: v.checkTime,
  //                 }
  //                 break
  //               }
  //             }
  //           }
  //         }
  //         // console.log(filterObject(value, "machineNo", payload));
  //         commit('SET_USING_MACHINE', result)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  addRecordListItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/apps/coffe/recordLists/', { item })
        .then((response) => {
          commit('ADD_ITEM', Object.assign(item, { id: response.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  async fetchSewingRecordListItems({ commit }, payload) {
    console.log('payload', payload)

    await axios.post('http://10.112.10.61:8000/api/device/history', {
      device_name: payload.device_name,
      search_date: payload.search_date
    })
      .then((response) => {
        commit('SET_SEWING_RECORD_LISTS', response.data)
      })
      .catch((error) => { error })

  },
  // fetchSewingRecordListItems({ commit }, payload) {
  //   console.log('payload', payload)
  //   return new Promise((resolve, reject) => {
  //     axios.post('http://10.112.10.127:1500/api/device/history', {
  //       device_name: payload.device_name,
  //       search_date: payload.search_date
  //     })
  //       .then((response) => {
  //         commit('SET_SEWING_RECORD_LISTS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //     //FAKE
  //     // axios.get('/api/apps/coffe/sewingRecordLists')
  //     //   .then((response) => {
  //     //     commit('SET_SEWING_RECORD_LISTS', response.data)
  //     //     resolve(response)
  //     //   })
  //     //   .catch((error) => { reject(error) })
  //   })
  // },
  setStatus({ commit }, payload) {
    commit('SET_USER', payload)
  },
  addSewingLog({ commit }, payload) {
    if (payload.userStatus === 'in') {
      // console.log(require('@/assets/images/employee/' + payload.userId + '.JPG'))
      var addItem = {
        inTime: payload.checkTime,
        outTime: null,
        // img: require('@/assets/images/employee/' + payload.userId + '.jpg'),
        img: 'http://10.112.10.127:1500/static/img/' + payload.userName + '.jpg',
        user: payload.userName,
      };
      commit('ADD_SEWING_LOG_ITEM_IN', addItem)
    }
    if (payload.userStatus === 'out') {
      var addItem = {
        outTime: payload.checkTime
      };
      commit('ADD_SEWING_LOG_ITEM_OUT', addItem)
    }

  },
  resetElectricity({ commit }) {
    commit('RESET_ELECTRICITY')
  },

  //   setStartTimeListener ({ commit }) {
  //     commit('SET_START_TIME_LISTENER')
  //   },
  //   setPowerConsumption ({ commit }) {
  //     commit('SET_POWER_CONSUMPTION')
  //   },
  //   setCurrentConsumption ({ commit }) {
  //     commit('SET_CURRENT_CONSUMPTION')
  //   },
}


