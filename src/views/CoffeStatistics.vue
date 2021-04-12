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
                                    <h1>{{ dayStatistic.current }}</h1>
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
                                    <h1>{{ dayStatistic.last }}</h1>
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
                                    <h1>{{ monthStatistic.cost }}</h1>
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
                                    <h1 style="color: #c8c8cc">
                                        {{ monthStatistic.reality }}
                                    </h1>
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
                            <div
                                class="flex flex-column justify-content-around log-card"
                            >
                                <div class="flex justify-content-around">
                                    <h2>這個月:</h2>
                                    <h2>{{ monthSum.current }} 元</h2>
                                </div>
                                <div class="flex justify-content-around">
                                    <h2>上個月:</h2>
                                    <h2>{{ monthSum.last }} 元</h2>
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
        <!-- CARD 4: SESSION -->
        <div class="vx-row">
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
        <!-- CARD 4: SESSION -->
        <div class="vx-row">
            <!-- CARD 4: SESSION -->
            <div class="vx-col w-full mb-base">
                <vx-card title="當月杯數詳細">
                    <vue-apex-charts
                        type="bar"
                        height="250"
                        :options="weekCoffeTimeBar.chartOptions"
                        :series="weekCoffeTimeBar.series"
                    />
                </vx-card>
            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment";
import VueApexCharts from "vue-apexcharts";
import moduleCoffeStatistic from "@/store/coffe-statistic/moduleCoffeStatistic.js";
export default {
    data() {
        return {
            initalState: {
                dayStatistic: {
                    current: null,
                    last: null,
                },
                monthStatistic: {
                    cost: null,
                    reality: null,
                },
                monthSum: {
                    current: null,
                    last: null,
                },
                revenueComparisonLine: {
                    series: [
                        {
                            name: "",
                            data: [],
                        },
                        {
                            name: "",
                            data: [],
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
                            categories: [],

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
                            name: "",
                            data: [],
                        },
                        {
                            name: "",
                            data: [],
                        },
                        {
                            name: "",
                            data: [],
                        },
                        {
                            name: "",
                            data: [],
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
                            categories: [],
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
                weekCoffeTimeBar: {
                    series: [
                        {
                            name: "上午",
                            data: [-4, -1, -20, -1],
                        },
                        {
                            name: "下午",
                            data: [3, 4, 1, 10],
                        },
                    ],
                    chartOptions: {
                        grid: {
                            show: true,
                            // borderColor: '#90A4AE',
                            padding: {
                                left: 0,
                                right: 0,
                            },
                            xaxis: {
                                lines: {
                                    show: true,
                                },
                            },
                            yaxis: {
                                lines: {
                                    show: false,
                                },
                            },
                        },
                        chart: {
                            type: "bar",
                            sparkline: { enabled: false },
                            toolbar: {
                                show: false,
                            },
                        },
                        colors: [
                            "#887dff",
                            "rgba(115,103,240,0.15)",
                            "#7367f0",
                            "rgba(115,103,240,0.15)",
                            "rgba(115,103,240,0.15)",
                            "rgba(115,103,240,0.15)",
                        ],
                        plotOptions: {
                            bar: {
                                horizontal: true,
                                columnWidth: "100%",
                                barHeight: "20%",
                                // distributed: true,
                                endingShape: "rounded", // Deprecated
                                // borderRadius: '20px', // Coming Soon
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        xaxis: {
                            categories: [
                                "第一週",
                                "第二週",
                                "第三週",
                                "第四週",
                                "第五週",
                            ],
                        },
                    },
                },
            },
        };
    },
    components: {
        VueApexCharts,
    },
    created() {
        this.$store.registerModule("coffeStatistic", moduleCoffeStatistic);
        this.$store.dispatch("coffeStatistic/resetSate", this.initalState);
    },
    beforeDestroy: function () {
        this.$store.unregisterModule("coffeStatistic");
    },
    mounted() {
        this.fetchDayStatisticItems();
        this.fetchMonthStatisticItems();
        this.fetchMonthSumItems();
        this.fetchRevenueComparisonLineItems();
        this.fetchWeekStackedBarItems();
    },
    computed: {
        dayStatistic() {
            return this.$store.state.coffeStatistic.dayStatistic;
        },
        monthStatistic() {
            return this.$store.state.coffeStatistic.monthStatistic;
        },
        monthSum() {
            return this.$store.state.coffeStatistic.monthSum;
        },
        revenueComparisonLine() {
            return this.$store.state.coffeStatistic.revenueComparisonLine;
        },
        weekStackedBar() {
            return this.$store.state.coffeStatistic.weekStackedBar;
        },
        weekCoffeTimeBar() {
            return this.$store.state.coffeStatistic.weekCoffeTimeBar;
        },
    },
    methods: {
        SumData(arr) {
            if (arr.length === 0) {
                return null;
            } else {
                return arr.reduce((a, b) => a + b);
            }
        },
        async fetchDayStatisticItems() {
            await this.$store.dispatch(
                "coffeStatistic/fetchDayStatisticItems",
                {
                    cafe_device_id: "1", //暫時寫死
                    search_type: "day",
                }
            );
        },
        async fetchMonthStatisticItems() {
            await this.$store.dispatch(
                "coffeStatistic/fetchMonthStatisticItems",
                {
                    cafe_device_id: "1", //暫時寫死
                }
            );
        },
        async fetchMonthSumItems() {
            await this.$store.dispatch("coffeStatistic/fetchMonthSumItems", {
                cafe_device_id: "1", //暫時寫死
                search_type: "month",
            });
        },
        async fetchRevenueComparisonLineItems() {
            await this.$store.dispatch(
                "coffeStatistic/fetchRevenueComparisonLineItems",
                {
                    cafe_device_id: "1", //暫時寫死
                }
            );
        },
        async fetchWeekStackedBarItems() {
            await this.$store.dispatch(
                "coffeStatistic/fetchWeekStackedBarItems",
                {
                    cafe_device_id: "1", //暫時寫死
                }
            );
        },
    },
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
