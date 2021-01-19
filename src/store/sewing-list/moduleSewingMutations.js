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
        console.log('getDataMutation', sewingLists)
        state.sewingLists = sewingLists;
    },
    SET_SEWING_LIST_STATUS(state, updateItem) {
        for (const [lineKey, lineValue] of state.sewingLists.entries()) {
            // console.log(`${lineKey}: ${lineValue}`);
            for (const [machineKey, machineValue] of lineValue.machines.entries()) {
                if (machineValue.machineNo === updateItem.machineNo) {
                    state.sewingLists[lineKey].machines[machineKey] = Object.assign(state.sewingLists[lineKey].machines[machineKey], {
                        userStatus: updateItem.userStatus,
                        machineStatus: updateItem.machineStatus,
                        user: updateItem.userName,
                        checkTime: updateItem.checkTime,
                    })
                    break
                }
            }
        }

    },

}

