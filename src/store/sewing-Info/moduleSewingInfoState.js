/*=========================================================================================
  File Name: moduleTodoState.js
  Description: Todo Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  supportTracker: {},
  lineAreaElectricity: {},
  sewingLists: [],
  sewingRecordLists: [],
  usingMachine: {},
  styleList: {
    nomal: { fill: "#67C179" },
    warning: { fill: "#FFA35C" },
    danger: { fill: "#C9615A" },
    close: { fill: "#BCBCBC" },
    rank3: { fill: "#FFA75C", 'border-color': "#FFA75C" },
    rank2: { fill: "#BFBFBF", 'border-color': "#BFBFBF" },
    rank1: { fill: "#BA9477", 'border-color': "#BA9477" },
  },
  classList: {
    rank3: 'rank3-enter-active',
    rank2: 'rank2-enter-active',
    rank1: 'rank1-enter-active',
  },
  srcList: {
    nomal: require("@/assets/images/Sewing-M-icons/icon12.svg"),
    close: require("@/assets/images/Sewing-M-icons/icon13.svg"),
  },
}
