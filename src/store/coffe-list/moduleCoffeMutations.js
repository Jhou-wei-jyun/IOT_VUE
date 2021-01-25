/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import moment from "moment";
import initialState from "./data.js"
export default {
  SET_DAY_COFFE_COUNT(state, payload) {
    for (const [key, value] of Object.entries(payload)) {
      state.dayCoffeCountBar.series[0].data = [
        ...state.dayCoffeCountBar.series[0].data,
        value,
      ];
      state.dayCoffeCountBar.chartOptions = {
        ...state.dayCoffeCountBar.chartOptions,
        ...{
          xaxis: {
            categories: [
              ...state.dayCoffeCountBar.chartOptions.xaxis
                .categories,
              key == 1 ? '濃縮' : key == 2 ? '雙倍濃縮' : key == 6 ? '混水濃縮' : key == 7 ? '雙倍混水濃縮' : false,
            ],
          },
        },
      };
    }
  },
  SET_WEEK_COFFE_LISTS(state, weekCoffeLists) {
    state.weekCoffeLists = weekCoffeLists
  },
  SET_RECORD_LISTS(state, coffeRecordLists) {
    var recordData = []
    coffeRecordLists.forEach(element => {
      recordData = [...recordData, {
        card_id: element.user_card_uid,
        name: element.user_nickname,
        img: 'http://10.112.10.127:1500/static/img/' + element.user_nickname + '.jpg',
        time: moment(element.press_time).format('HH:mm'),
        coffe: element.coffee_type == 1 ? '濃縮' : element.coffee_type == 2 ? '雙倍濃縮' : element.coffee_type == 6 ? '混水濃縮' : element.coffee_type == 7 ? '雙倍混水濃縮' : false,
      }]
    });
    state.coffeRecordLists = recordData
  },
  SET_ELECTRICITY(state, obj) {

    for (var i = 0; i < state.lineAreaElectricity.series[0].data.length - 100; i++) {
      // IMPORTANT
      // we reset the x and y of the data which is out of drawing area
      // to prevent memory leaks
      state.lineAreaElectricity.series[0].data[i] = 0
    }

    state.lineAreaElectricity.series[0].data = [
      ...state.lineAreaElectricity.series[0].data,
      obj.value,
    ];
    // if (
    //   state.lineAreaElectricity.series[0].data.length ==
    //   11
    // ) {
    //   state.lineAreaElectricity.series[0].data = state.lineAreaElectricity.series[0].data.slice(
    //     1
    //   );
    //   // state.lineAreaElectricity.series[0].data[0] = 0;
    // }

  },
  SET_DATETIME(state, obj) {
    // console.log('3', moment().utc(obj.datetime).format())
    // console.log('4', moment().utc(obj.datetime).subtract(1, 'day').format())
    // console.log('count', state.lineAreaElectricity.chartOptions.xaxis
    //   .categories.length)
    for (var i = 0; i < state.lineAreaElectricity.chartOptions.xaxis
      .categories.length - 100; i++) {
      // IMPORTANT
      // we reset the x and y of the data which is out of drawing area
      // to prevent memory leaks
      state.lineAreaElectricity.chartOptions.xaxis
        .categories[i] = moment().utc(obj.datetime).subtract(1, 'day').format()
      // state.lineAreaElectricity.chartOptions.xaxis
      //   .categories[i] = obj.datetime - (24 * 3600 * 1000)
    }
    // var count = state.lineAreaElectricity.chartOptions.xaxis
    //   .categories.length
    console.log(moment().utc(obj.datetime).format())
    state.lineAreaElectricity.chartOptions = {
      ...state.lineAreaElectricity.chartOptions,
      ...{
        xaxis: {
          categories: [
            ...state.lineAreaElectricity.chartOptions.xaxis
              .categories,
            // obj.datetime,
            moment().utc(obj.datetime).format(),
            // moment(obj.datetime).utc().format("HH:mm");
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
    //   state.lineAreaElectricity.chartOptions.xaxis
    //     .categories.length == 11
    // ) {
    //   // state.lineAreaElectricity.chartOptions.xaxis.categories[0] = 0
    //   state.lineAreaElectricity.chartOptions = {
    //     ...state.lineAreaElectricity.chartOptions,
    //     ...{
    //       xaxis: {
    //         categories: state.lineAreaElectricity.chartOptions.xaxis.categories.slice(
    //           1
    //         ),
    //       },
    //     },
    //   };
    // }
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
  RESET_STATE(state, obj) {
    Object.assign(state, obj)
  },
  SET_USING_MACHINE(state, obj) {
    state.usingMachine = { ...obj }
  },
  ADD_COFFE_LOG_ITEM(state, addItem) {
    state.coffeRecordLists.unshift(addItem)
  },
  ADD_COFFE_COUNT_ITEM(state, addItem) {
    const index = state.dayCoffeCountBar.chartOptions.xaxis.categories.indexOf(addItem.coffe);
    if (index !== (-1)) {
      state.dayCoffeCountBar.series[0].data[index] = state.dayCoffeCountBar.series[0].data[index] + 1
      state.dayCoffeCountBar.series = [{
        data: state.dayCoffeCountBar.series[0].data
      }]
    }
  }

  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  // UPDATE_PRODUCT (state, product) {
  //   const productIndex = state.products.findIndex((p) => p.id === product.id)
  //   Object.assign(state.products[productIndex], product)
  // },
  // REMOVE_ITEM (state, itemId) {
  //   const ItemIndex = state.products.findIndex((p) => p.id === itemId)
  //   state.products.splice(ItemIndex, 1)
  // }
}
