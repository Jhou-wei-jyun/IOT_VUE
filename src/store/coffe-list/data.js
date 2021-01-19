const State = {
    coffes: [],
    recordLists: [],
    coffeDonut: {
        comparedResult: [2, -3, 8],
        series: [58.6, 34.9, 6.5],
        chartOptions: {
            labels: ['Desktop', 'Mobile', 'Tablet'],
            dataLabels: {
                enabled: false
            },
            legend: { show: false },
            chart: {
                offsetY: 30,
                type: 'donut',
                toolbar: {
                    show: false
                }
            },
            stroke: { width: 0 },
            colors: ['#7961F9', '#FF9F43', '#EA5455'],
            fill: {
                type: 'gradient',
                gradient: {
                    gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
                }
            }
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
            grid: {
                show: false,
            },
            chart: {
                zoom: {
                    enabled: false,
                    type: 'x',
                    autoScaleYaxis: true,
                },
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight',
                colors: '#7367F0'
            },
            colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
            xaxis: {
                type: 'datetime',
                categories: [],
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
            yaxis: {
                show: false,
                labels: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }

            }
        }
    },
}
const initalState = {};
// Object.assign(initalState, State)
export default Object.assign(initalState, State)