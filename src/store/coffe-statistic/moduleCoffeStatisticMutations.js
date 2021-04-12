/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import moment from "moment";
export default {
  RESET_STATE(state, obj) {
    Object.assign(state, obj)
  },
  SET_DAY_STATISTIC(state, payload) {

    Object.assign(state.dayStatistic, payload)
  },
  SET_MONTH_STATISTIC(state, payload) {
    Object.assign(state.monthStatistic, payload)
  },
  SET_MONTH_SUM(state, payload) {

    Object.assign(state.monthSum, payload)
  },

  SET_REVENUE_COMPARISON_LINE(state, payload) {
    console.log('SET_REVENUE_COMPARISON_LINE', payload)

    let index = 0;
    for (const [key, value] of Object.entries(payload)) {
      // console.log(`${key}:${value}`);
      state.revenueComparisonLine.series[index].name = key;
      for (const [i, element] of value.entries()) {
        // console.log(element.data);
        // console.log(element.date);
        // console.log(index);
        state.revenueComparisonLine.series[index].data = [
          ...state.revenueComparisonLine.series[index].data,
          element.price,
        ];

        if (state.revenueComparisonLine.chartOptions.xaxis.categories[i] !== element.day) {

          state.revenueComparisonLine.chartOptions = {
            ...state.revenueComparisonLine.chartOptions,
            ...{
              xaxis: {
                categories: [
                  ...state.revenueComparisonLine.chartOptions.xaxis
                    .categories,
                  element.day,
                ],
              },
            },
          };
        }

      }

      index = index + 1;
      console.log('111', state.revenueComparisonLine.chartOptions);
    }

  },
  SET_WEEK_STACKED_BAR(state, payload) {

    for (const [i, cafe] of state.weekStackedBar.series.entries()) {

      for (const [weekIndex, weekElement] of payload.entries()) {
        // console.log(`${key}:${value}`);
        let name = null;
        let setName = null;
        switch (i) {
          case 0:
            name = 'cafe1';
            setName = '濃縮';
            break
          case 1:
            name = 'cafe2';
            setName = '雙倍濃縮';
            break
          case 2:
            name = 'cafe6';
            setName = '美式';
            break
          case 3:
            name = 'cafe7';
            setName = '雙倍美式';
            break
          default:
            break
        }

        // switch (i) {
        //   case 0:
        //     setName = '濃縮';
        //   case 1:
        //     setName = '雙倍濃縮';
        //   case 2:
        //     setName = '美式';
        //   case 3:
        //     setName = '雙倍美式';
        //   default:
        //     break
        // }

        state.weekStackedBar.series[i].data = [
          ...state.weekStackedBar.series[i].data,
          weekElement[name],
        ];
        state.weekStackedBar.series[i].name = setName;

      }

    };

    for (const [weekIndex, weekElement] of payload.entries()) {
      state.weekStackedBar.chartOptions = {
        ...state.weekStackedBar.chartOptions,
        ...{
          xaxis: {
            categories: [
              ...state.weekStackedBar.chartOptions.xaxis
                .categories,
              weekElement.hour,
            ],
          },
        },
      };
    }
    console.log('weekStackedBar', state.weekStackedBar)


  },





}
