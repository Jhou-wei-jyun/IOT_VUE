/*=========================================================================================
  File Name: moduleTodoMutations.js
  Description: Todo Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// const ws = new WebSocket("ws://10.112.10.119:8765");
import moment from "moment";

export default {
    SET_SEWINGS(state, sewingLists) {

        state.sewingLists = sewingLists;
        // console.log('getDataMutation', state.sewingLists)
    },
    SET_SEWING_LIST_STATUS(state, updateItem) {
        // console.log('updateDATA', updateItem)
        for (const [lineKey, lineValue] of state.sewingLists.entries()) {
            for (const [machineKey, machineValue] of lineValue.factory_devices.entries()) {
                if (machineValue.device_name === updateItem.machineNo) {
                    state.sewingLists[lineKey].factory_devices[machineKey] = Object.assign(state.sewingLists[lineKey].factory_devices[machineKey], {
                        user_status: updateItem.userStatus,
                        device_status: updateItem.machineStatus,
                        user_name: updateItem.userName,
                        used_time: updateItem.checkTime,
                    })
                    break
                }
            }
        }

    },
    SET_PRODUCT_LIST(state, payload) {
        state.productList = payload;
    },

}

