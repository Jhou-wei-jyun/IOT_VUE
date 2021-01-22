/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

export default {
  addItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/apps/coffe/coffeRecordLists/', { item })
        .then((response) => {
          commit('ADD_ITEM', Object.assign(item, { id: response.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchRecordListItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/apps/coffe/coffeRecordLists')
        .then((response) => {
          commit('SET_RECORD_LISTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDayCoffeCount({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/apps/coffe/cups')
        .then((response) => {
          commit('SET_DAY_COFFE_COUNT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchWeekCoffeLists({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/apps/coffe/weekCoffeLists')
        .then((response) => {
          const sortedData = response.data.sort(function (a, b) {
            return a.count < b.count ? 1 : -1;
          });
          sortedData.forEach(element => {
            element = Object.assign(element, { crown: null })
          });
          sortedData[0] = Object.assign(sortedData[0], { crown: require('@/assets/images/crown/icon12.svg') })
          sortedData[1] = Object.assign(sortedData[1], { crown: require('@/assets/images/crown/icon13.svg') })
          sortedData[2] = Object.assign(sortedData[2], { crown: require('@/assets/images/crown/icon14.svg') })
          commit('SET_WEEK_COFFE_LISTS', sortedData)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  resetSate({ commit }, payload) {
    commit('RESET_STATE', payload)
  },
  setElectricity({ commit }, payload) {
    commit('SET_ELECTRICITY', payload)
    commit('SET_DATETIME', payload)
  },
  setUsingMachine({ commit }, payload) {
    commit('SET_USING_MACHINE', payload)
  },
  async addCoffeCount({ commit }, payload) {
    await commit('ADD_COFFE_COUNT_ITEM', payload)

  },
  async addCoffeLog({ commit }, payload) {
    await dispatch('addCoffeCount', payload) //先增加杯數
    if (payload.userStatus === 'in') {
      var addItem = {
        inTime: payload.checkTime,
        coffe: payload.coffe,
        // img: require('@/assets/images/employee/' + payload.userId + '.jpg'),
        img: 'http://10.112.10.127:1500/static/img/' + payload.userName + '.jpg',
        user: payload.userName,
      };

      await commit('ADD_COFFE_LOG_ITEM', addItem)
    }
  },
  resetElectricity({ commit }) {
    commit('RESET_ELECTRICITY')
  },

  // fetchEventLabels({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get("/api/apps/calendar/labels")
  //       .then((response) => {
  //         commit('SET_LABELS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  // updateItem ({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/data-list/products/${item.id}`, {item})
  //       .then((response) => {
  //         commit('UPDATE_PRODUCT', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  // removeItem ({ commit }, itemId) {
  //   return new Promise((resolve, reject) => {
  //     axios.delete(`/api/data-list/products/${itemId}`)
  //       .then((response) => {
  //         commit('REMOVE_ITEM', itemId)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // }
  // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {

  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)

  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
}
