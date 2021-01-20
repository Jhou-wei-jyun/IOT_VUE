<template>
    <div id="coffe-statistic-basic-card">
        <div class="vx-row">
            <!-- CARD 2: 操作時間 -->
            <div class="vx-col w-full md:w-1/2 mb-base">
                <vx-card>
                    <div class="vx-row">
                        <div class="vx-col w-full sm:w-1/3">
                            <h4>日營業額比較</h4>
                        </div>
                        <div class="vx-col w-full sm:w-1/3 special-box">
                            <div class="flex justify-content-around user-card">
                                <h4>今日</h4>
                                <div class="flex align-self-center">
                                    <h1>150</h1>
                                    <span class="flex align-self-end ml-3"
                                        >元</span
                                    >
                                </div>
                                <img
                                    class="flex align-self-end"
                                    src="@/assets/images/coffee-icons/icon09.svg"
                                    width="50"
                                />
                            </div>
                        </div>
                        <div class="vx-col w-full sm:w-1/3">
                            <div class="flex justify-content-around user-card">
                                <h4>昨日</h4>
                                <div class="flex align-self-center">
                                    <h1>75</h1>
                                    <span class="flex align-self-end ml-3"
                                        >元</span
                                    >
                                </div>
                                <img
                                    class="flex align-self-end"
                                    src="@/assets/images/coffee-icons/icon10.svg"
                                    width="50"
                                />
                            </div>
                        </div>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-full md:w-1/2 mb-base">
                <vx-card>
                    <div class="vx-row">
                        <div class="vx-col w-full sm:w-1/2 special-box">
                            <div class="flex justify-content-around user-card">
                                <h4>當月成本</h4>
                                <div class="flex align-self-center">
                                    <h1>12060</h1>
                                    <span class="flex align-self-end ml-3"
                                        >元</span
                                    >
                                </div>
                                <img
                                    class="flex align-self-end"
                                    src="@/assets/images/coffee-icons/icon09.svg"
                                    width="50"
                                />
                            </div>
                        </div>
                        <div class="vx-col w-full sm:w-1/2">
                            <div class="flex justify-content-around user-card">
                                <h4>實際營收</h4>
                                <div class="flex align-self-center">
                                    <h1 style="color: #c8c8cc">10000</h1>
                                    <span
                                        class="flex align-self-end ml-3"
                                        style="color: #c8c8cc"
                                        >元</span
                                    >
                                </div>
                                <div style="width: 50px"></div>
                            </div>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
        <div class="vx-row">
            <!-- CARD 4: SESSION -->
            <div class="vx-col w-full mb-base">
                <vx-card>
                    <div class="vx-row">
                        <div class="vx-col w-full sm:w-1/3">
                            <h4>月營業額比較</h4>
                            <div class="flex log-card">
                                <div class="ml-auto mt-auto">
                                    <h2 class="mb-5">當月 12060 元</h2>
                                    <h2>上個月 11700 元</h2>
                                </div>
                            </div>
                        </div>
                        <div class="vx-col w-full sm:w-2/3">
                            <vue-apex-charts
                                type="line"
                                height="250"
                                :options="revenueComparisonLine.chartOptions"
                                :series="revenueComparisonLine.series"
                            />
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
        <div class="vx-row">
            <!-- CARD 4: SESSION -->
            <div class="vx-col w-full mb-base">
                <vx-card title="月營業額比較">
                    <div class="vx-row">
                        <div class="vx-col w-full sm:w-1/6"></div>
                        <div class="vx-col w-full sm:w-5/6">
                            <vue-apex-charts
                                type="bar"
                                height="250"
                                :options="weekStackedBar.chartOptions"
                                :series="weekStackedBar.series"
                            />
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment";
import VueApexCharts from "vue-apexcharts";

export default {
    data() {
        return {
            revenueComparisonLine: {
                series: [
                    {
                        name: "當月",
                        data: [
                            45000,
                            47000,
                            44800,
                            47500,
                            45500,
                            48000,
                            46500,
                            48600,
                        ],
                    },
                    {
                        name: "上個月",
                        data: [
                            46000,
                            48000,
                            45500,
                            46600,
                            44500,
                            46500,
                            45000,
                            47000,
                        ],
                    },
                ],
                chartOptions: {
                    chart: {
                        toolbar: { show: false },
                        dropShadow: {
                            enabled: true,
                            top: 5,
                            left: 0,
                            blur: 4,
                            opacity: 0.1,
                        },
                        zoom: {
                            enabled: false,
                        },
                    },
                    stroke: {
                        curve: "smooth",
                        dashArray: [0, 8],
                        width: [4, 2],
                    },
                    grid: {
                        borderColor: "#e7e7e7",
                    },
                    legend: {
                        show: false,
                    },
                    colors: ["#F97794", "#b8c2cc"],
                    fill: {
                        type: "gradient",
                        gradient: {
                            shade: "dark",
                            inverseColors: false,
                            gradientToColors: ["#7367F0", "#b8c2cc"],
                            shadeIntensity: 1,
                            type: "horizontal",
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100, 100, 100],
                        },
                    },
                    markers: {
                        size: 0,
                        hover: {
                            size: 5,
                        },
                    },
                    xaxis: {
                        labels: {
                            style: {
                                cssClass: "text-grey fill-current",
                            },
                            formatter: function (val) {
                                return val + "日";
                            },
                        },
                        axisTicks: {
                            show: false,
                        },
                        categories: [
                            "01",
                            "05",
                            "09",
                            "13",
                            "17",
                            "21",
                            "26",
                            "31",
                        ],

                        axisBorder: {
                            show: false,
                        },
                    },
                    yaxis: {
                        tickAmount: 5,
                        labels: {
                            style: {
                                cssClass: "text-grey fill-current",
                            },
                            formatter(val) {
                                return val > 999
                                    ? `${(val / 1000).toFixed(1)}k`
                                    : val;
                            },
                        },
                        title: {
                            text: "元",
                            rotate: 0,
                            style: {
                                cssClass: "text-grey fill-current",
                            },
                        },
                    },
                    tooltip: {
                        x: {
                            show: false,
                        },
                    },
                },
            },
            weekStackedBar: {
                series: [
                    {
                        name: "濃縮",
                        data: [44, 55, 41, 37, 22, 43, 21],
                    },
                    {
                        name: "雙倍濃縮",
                        data: [53, 32, 33, 52, 13, 43, 32],
                    },
                    {
                        name: "混水濃縮",
                        data: [12, 17, 11, 9, 15, 11, 20],
                    },
                    {
                        name: "雙倍混水濃縮",
                        data: [9, 7, 5, 8, 6, 9, 4],
                    },
                ],
                chartOptions: {
                    chart: {
                        toolbar: { show: false },

                        stacked: true,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        },
                    },
                    colors: ["#887dff", "#a59cff", "#c49cff", "#d4b8ff"],
                    xaxis: {
                        categories: ["一", "二", "三", "四", "五"],
                        labels: {
                            style: {
                                cssClass: "text-grey fill-current",
                            },
                            formatter: function (val) {
                                return val + "杯";
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                cssClass: "text-grey fill-current",
                            },
                        },
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + "杯";
                            },
                        },
                    },

                    legend: {
                        floating: true,
                        position: "top",
                        horizontalAlign: "right",
                    },
                },
            },
        };
    },
    components: {
        VueApexCharts,
    },
    created() {},
    beforeDestroy: function () {},
    mounted() {},
    computed: {},
    methods: {},
};
</script>

<style lang="scss">
/*! rtl:begin:ignore */

.special-box {
    border-color: transparent gray transparent transparent;
    border-width: 1px;
    border-style: solid;
    padding: 10px;
}

.flex.flex-column {
    flex-direction: column;
}
.flex.align-items-center {
    display: flex;
    align-items: center;
}
.flex.align-items-end {
    display: flex;
    align-items: flex-end;
}
.flex.justify-content-center {
    display: flex;
    justify-content: center;
}
.flex.justify-content-around {
    display: flex;
    justify-content: space-around;
}
.flex.align-self-end {
    // 修改以下值試試看  auto | flex-start | flex-end | center | baseline | stretch
    display: flex;
    align-self: flex-end;
}
.flex.align-self-center {
    // 修改以下值試試看  auto | flex-start | flex-end | center | baseline | stretch
    display: flex;
    align-self: center;
}

.float-number {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    height: 100px;
    width: 100px;
    // border: 1px solid red;
}
#coffe-statistic-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .user-card {
        height: 10vh;
    }

    .log-card {
        height: 20vh;
    }
}

/*! rtl:end:ignore */
</style>
