const State = {
    user: [],
    startTime: null,
    powerConsumption: {},
    currentConsumption: {},
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
                curve: "smooth",
                width: 2,
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: ["#35f0fd"],
                },
            },
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
    sewingLists: [],
    recordLists: [],
    usingMachine: {},
}
const initalState = {};
// Object.assign(initalState, State)
export default Object.assign(initalState, State)