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
  resetSate({ commit }, payload) {
    console.log('init', payload)
    commit('RESET_STATE', payload)
  },
  fetchDayStatisticItems({ commit }, payload) {
    return axios.post('http://10.112.10.69:1857/api/statistics/income', {
      cafe_device_id: payload.cafe_device_id,
      search_type: payload.search_type,
    })
      .then((response) => {
        // console.log('DayStatistic', response.data)
        commit('SET_DAY_STATISTIC', response.data)
      })
      .catch((error) => { console.log(error) })
  },
  fetchMonthStatisticItems({ commit }, payload) {
    return axios.post('/api/apps/coffe/statistic/month', {
      cafe_device_id: payload.cafe_device_id,
    })
      .then((response) => {
        // console.log('MonthStatistic', response.data)
        commit('SET_MONTH_STATISTIC', response.data)
      })
      .catch((error) => { console.log(error) })
  },
  fetchMonthSumItems({ commit }, payload) {
    return axios.post('http://10.112.10.69:1857/api/statistics/income', {
      cafe_device_id: payload.cafe_device_id,
      search_type: payload.search_type,
    })
      .then((response) => {
        // console.log('DayStatistic', response.data)
        commit('SET_MONTH_SUM', response.data)
      })
      .catch((error) => { console.log(error) })
  },
  fetchRevenueComparisonLineItems({ commit }, payload) {

    return axios.post('http://10.112.10.69:1857/api/statistics/list', {
      cafe_device_id: payload.cafe_device_id,
    })
      .then((response) => {
        function valueExists(arr, day) {
          return arr.some(function (el) {
            return el.day === day;
          });
        }
        console.log('revenueComparisonLine', response.data)
        let result = { current: [], last: [] }
        let count_current = 0
        let count_last = 0
        for (let i = 1; i <= 31; i++) {
          if (valueExists(response.data.current, i)) {
            // console.log('exist', i)
            result.current = [...result.current, response.data.current[count_current]]
            count_current = count_current + 1
          } else {
            result.current = [...result.current, { day: i, price: 0 }]
            // console.log('not_exist', i)
          }
          if (valueExists(response.data.last, i)) {
            // console.log('exist', i)
            result.last = [...result.last, response.data.last[count_last]]
            count_last = count_last + 1
          } else {
            result.last = [...result.last, { day: i, price: 0 }]
            // console.log('not_exist', i)
          }
        }
        // }
        console.log('result', result)
        // console.log('revenueComparisonLine', response.data)
        commit('SET_REVENUE_COMPARISON_LINE', result)
      })
      .catch((error) => { console.log(error) })
  },
  fetchWeekStackedBarItems({ commit }, payload) {
    return axios.post('http://10.112.10.69:1857/api/statistics/range', {
      cafe_device_id: payload.cafe_device_id,
    })
      .then((response) => {
        console.log('weekStackedBarItems', response.data.result)
        commit('SET_WEEK_STACKED_BAR', response.data.result)
      })
      .catch((error) => { console.log(error) })
  },

}
