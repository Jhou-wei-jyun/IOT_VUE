/*=========================================================================================
  File Name: moduleTodoGetters.js
  Description: Todo Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    user: state => {
        return state.user;
    },
    startTime: state => {
        return state.startTime;
    },
    powerConsumption: state => {
        return state.powerConsumption;
    },
    currentConsumption: state => {
        return state.currentConsumption;
    },
    supportTracker: state => {
        return state.supportTracker;
    },
    styleList: state => {
        return state.styleList;
    },
    srcList: state => {
        return state.srcList;
    },
}
