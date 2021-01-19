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
    SET_ELECTRICITY(state, obj) {
        for (var i = 0; i < state.lineAreaElectricity.series[0].data.length - 100; i++) {
            state.lineAreaElectricity.series[0].data[i] = 0
        }
        state.lineAreaElectricity.series[0].data = [
            ...state.lineAreaElectricity.series[0].data,
            obj.value,
        ];
        // if (
        //     state.lineAreaElectricity.series[0].data.length ==
        //     11
        // ) {
        //     state.lineAreaElectricity.series[0].data = state.lineAreaElectricity.series[0].data.slice(
        //         1
        //     );
        // }

    },
    SET_DATETIME(state, obj) {
        for (var i = 0; i < state.lineAreaElectricity.chartOptions.xaxis
            .categories.length - 100; i++) {
            // IMPORTANT
            // we reset the x and y of the data which is out of drawing area
            // to prevent memory leaks
            state.lineAreaElectricity.chartOptions.xaxis
                .categories[i] = moment().utc(obj.datetime).subtract(1, 'day').format()
        }
        state.lineAreaElectricity.chartOptions = {
            ...state.lineAreaElectricity.chartOptions,
            ...{
                xaxis: {
                    categories: [
                        ...state.lineAreaElectricity.chartOptions.xaxis
                            .categories,
                        moment().utc(obj.datetime).format(),
                    ],
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
            },
        };
        // if (
        //     state.lineAreaElectricity.chartOptions.xaxis
        //         .categories.length == 11
        // ) {
        //     state.lineAreaElectricity.chartOptions = {
        //         ...state.lineAreaElectricity.chartOptions,
        //         ...{
        //             xaxis: {
        //                 categories: state.lineAreaElectricity.chartOptions.xaxis.categories.slice(
        //                     1
        //                 ),
        //             },
        //         },
        //     };
        // }
    },
    SET_NEEDLE(state, obj) {
        state.supportTracker.series = [];
        state.supportTracker.analyticsData.meta["累積針數"] = obj.value;
        const percent = Math.round(
            (state.supportTracker.analyticsData.meta["累積針數"] /
                state.supportTracker.analyticsData.meta["目標針數"]) *
            100
        );
        state.supportTracker.series = [...state.supportTracker.series, percent]
    },
    SET_USING_MACHINE(state, obj) {
        // state.usingMachine = obj
        state.usingMachine = { ...obj }
    },
    ADD_RECORD_ITEM(state, item) {
        state.recordLists.unshift(item)
    },
    SET_SEWING_RECORD_LISTS(state, sewingRecordLists) {
        state.sewingRecordLists = sewingRecordLists
    },
    RESET_STATE(state, obj) {
        Object.assign(state, obj)
    },
    RESET_ELECTRICITY(state) {
        state.lineAreaElectricity.series[0].data = state.lineAreaElectricity.series[0].data.slice(state.lineAreaElectricity.series[0].data.length - 100, state.lineAreaElectricity.series[0].data.length);
        state.lineAreaElectricity.chartOptions = {
            ...state.lineAreaElectricity.chartOptions,
            ...{
                xaxis: {
                    categories: state.lineAreaElectricity.chartOptions.xaxis.categories.slice(state.lineAreaElectricity.chartOptions.xaxis.categories.length - 100, state.lineAreaElectricity.chartOptions.xaxis.categories.length),
                },
            },
        };

    },
    SET_USER(state, obj) {
        // console.log('userName', obj.userName)
        // console.log('userStatus', obj.userStatus)
        // console.log('machineStatus', obj.machineStatus)
        // console.log('checkTime', obj.checkTime)
        state.usingMachine = {
            ...state.usingMachine,
            ...{
                user: obj.userName,
                userStatus: obj.userStatus,
                machineStatus: obj.machineStatus,
                checkTime: obj.checkTime,
            },
        };
    },
    UPDATE_USING_MACHINE(state, updateItem) {
        for (const [lineKey, lineValue] of updateItem.updateData.entries()) {
            // console.log(`${lineKey}: ${lineValue}`);
            for (const [machineKey, machineValue] of lineValue.machines.entries()) {
                if (machineValue.machineNo === updateItem.namespace) {
                    let result = {
                        lineNo: lineValue.lineNo,
                        machineNo: machineValue.machineNo,
                        userStatus: machineValue.userStatus,
                        machineStatus: machineValue.machineStatus,
                        user: machineValue.user,
                        checkTime: machineValue.checkTime,
                    }
                    state.usingMachine = { ...result }
                    break
                }
            }
        }
    },
    // FETCH_SEWING_TARGET_ITEM(state, updateItem) {
    //     console.log(updateItem)
    //     console.log(state.sewingLists)
    //     for (const [lineKey, lineValue] of state.sewingLists.entries()) {
    //         // console.log(`${lineKey}: ${lineValue}`);
    //         for (const [machineKey, machineValue] of lineValue.machines.entries()) {
    //             if (machineValue.machineNo === updateItem) {
    //                 state.sewingLists[lineKey].machines[machineKey] = Object.assign(state.sewingLists[lineKey].machines[machineKey], {
    //                     userStatus: updateItem.userStatus,
    //                     machineStatus: updateItem.machineStatus
    //                 })
    //                 let result = {
    //                     lineNo: lineValue.lineNo,
    //                     machineNo: machineValue.machineNo,
    //                     userStatus: machineValue.userStatus,
    //                     machineStatus: machineValue.machineStatus,
    //                     user: machineValue.user,
    //                     checkTime: machineValue.checkTime,
    //                 }
    //                 state.usingMachine = { ...result }
    //                 break
    //             }
    //         }
    //     }


    // },
    ADD_SEWING_LOG_ITEM_IN(state, addItem) {
        state.sewingRecordLists.unshift(addItem)
    },
    ADD_SEWING_LOG_ITEM_OUT(state, addItem) {
        state.sewingRecordLists[0] = Object.assign(state.sewingRecordLists[0], addItem);
    }

}

