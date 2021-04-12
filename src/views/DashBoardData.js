/*=========================================================================================
    File Name: apexChartData.vue
    Description: Data shown by charts
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const themeColors = ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']

export default {
  // BAR CHART

  salesBar: {
    series: [{
      name: 'Sessions',
      data: [10, 1, 15, 7]
    }],
    chartOptions: {
      grid: {
        show: true,
        // borderColor: '#90A4AE',
        padding: {
          left: 0,
          right: 0
        },
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      chart: {
        type: 'bar',
        sparkline: { enabled: false },
        toolbar: {
          show: false,
        },
      },
      colors: ['#887dff', 'rgba(115,103,240,0.15)', '#7367f0', 'rgba(115,103,240,0.15)', 'rgba(115,103,240,0.15)', 'rgba(115,103,240,0.15)'],
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '100%',
          barHeight: '20%',
          // distributed: true,
          endingShape: 'rounded' // Deprecated
          // borderRadius: '20px', // Coming Soon
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['濃縮', '雙倍濃縮', '美式', '雙倍美式'],
      },

    },
  },
  // RadialBar
  supportTrackerRadialBar: {
    supportTracker: {
      analyticsData: {
        openTickets: 163,
        meta: {
          "累積針數": 0,
          "目標針數": 63,
        },
      },
      series: [],
    },
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 158,
          offsetY: -30,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: 'rgba(0,0,0,0)',
            strokeWidth: '100%'

          },
          dataLabels: {
            value: {
              offsetY: 30,
              color: '#99a2ac',
              fontSize: '2rem'
            }
          }
        }
      },
      colors: ['#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          // enabled: true,
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#7367F0'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      chart: {
        sparkline: {
        }
      },
      labels: ['Completed Tickets']
    }
  },

  lineAreaElectricity: {
    series: [
      {
        name: 'series1',
        data: []
      },
    ],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false,
          type: 'x',
          autoScaleYaxis: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
      xaxis: {
        type: 'datetime',
        categories: []
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }

      }
    }
  },
}
