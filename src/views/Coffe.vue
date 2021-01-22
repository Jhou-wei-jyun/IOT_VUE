<template>
    <div id="coffe-basic-card">
        <div class="vx-row">
            <!-- {{ coffeRecordLists }} -->
            <!-- {{ weekCoffeLists }} -->
            <!-- {{ lineAreaElectricity }} -->
            <!-- {{ coffeDonut }} -->
            <!-- {{ allCoffeDonutCount }} -->
            <!-- CARD 1: 操作人員 -->

            <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-base">
                <vx-card title="正在使用" class="user-card">
                    <!-- CARD 1: 操作人員 -->
                    <div class="flex align-items-center">
                        <h1>{{ usingMachine.user }}</h1>
                    </div>
                </vx-card>
            </div>
            <!-- CARD 2: 操作時間 -->
            <div class="vx-col w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mb-base">
                <vx-card class="user-card">
                    <div class="vx-row">
                        <div class="vx-col w-full sm:w-1/4 special-box">
                            <h4>機台狀況</h4>

                            <div
                                class="flex align-items-center justify-content-center mt-5"
                                v-if="usingMachine.machineStatus === 'on'"
                            >
                                <img
                                    src="@/assets/images/coffee-icons/icon01.svg"
                                    class="mb-4 max-w-full"
                                    width="100"
                                    height="100"
                                />
                                <span>使用中</span>
                            </div>
                            <div
                                class="flex align-items-center justify-content-center mt-5"
                                v-else
                            >
                                <img
                                    src="@/assets/images/coffee-icons/icon02.svg"
                                    class="mb-4 max-w-full"
                                    width="100"
                                    height="100"
                                />
                                <span>待機中</span>
                            </div>
                        </div>
                        <div class="vx-col w-full sm:w-1/4 special-box">
                            <h4>今日杯數</h4>

                            <div
                                class="flex align-items-center justify-content-center mt-5"
                            >
                                <img
                                    src="@/assets/images/coffee-icons/icon06.svg"
                                    class="mb-4 max-w-full"
                                    width="100"
                                    height="100"
                                />
                                <span>X杯</span>
                            </div>
                        </div>
                        <div class="vx-col w-full sm:w-1/4 special-box">
                            <h4>累積水量</h4>

                            <div
                                class="flex align-items-center justify-content-center mt-5"
                            >
                                <img
                                    src="@/assets/images/coffee-icons/icon07.svg"
                                    class="mb-4 max-w-full"
                                    width="100"
                                    height="100"
                                />
                                <span>X ml</span>
                            </div>
                        </div>
                        <div class="vx-col w-full sm:w-1/4">
                            <h4>警示狀況</h4>

                            <div
                                class="flex align-items-center justify-content-center mt-5"
                            >
                                <img
                                    src="@/assets/images/coffee-icons/icon08.svg"
                                    class="mb-4 max-w-full"
                                    width="100"
                                    height="100"
                                />
                                <span>X 次</span>
                            </div>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
        <div class="vx-row">
            <!-- CARD 4: SESSION -->
            <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/3 mb-base">
                <vx-card title="今日杯數詳細" class="log-card">
                    <vue-apex-charts
                        type="bar"
                        height="300"
                        :options="dayCoffeCountBar.chartOptions"
                        :series="dayCoffeCountBar.series"
                    />
                </vx-card>
            </div>

            <!-- CARD 9: DISPATCHED ORDERS -->
            <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
                <vx-card title="今日操作詳細" class="log-card overflow-hidden">
                    <div slot="no-body" class="mt-4 text-center">
                        <vs-table
                            max-items="5"
                            pagination
                            :data="coffeRecordLists"
                            class="table-dark-inverted"
                        >
                            <!-- <template slot="thead">
                                <vs-th sort-key="time">Time</vs-th>
                                <vs-th>IMG</vs-th>
                                <vs-th sort-key="name">NAME</vs-th>
                                <vs-th>COFFE</vs-th>
                            </template> -->

                            <template slot-scope="{ data }">
                                <vs-tr
                                    :key="index"
                                    v-for="(item, index) in data"
                                >
                                    <vs-td :data="data[index].time">
                                        <span>{{ data[index].time }}</span>
                                    </vs-td>
                                    <vs-td :data="data[index].name">
                                        <ul class="users-liked user-list">
                                            <li>
                                                <vx-tooltip
                                                    :text="data[index].name"
                                                    position="bottom"
                                                >
                                                    <vs-avatar
                                                        :src="data[index].img"
                                                        size="30px"
                                                        class="border-2 border-white border-solid -m-1"
                                                    ></vs-avatar>
                                                </vx-tooltip>
                                            </li>
                                        </ul>
                                    </vs-td>
                                    <vs-td :data="data[index].name">
                                        <span>{{ data[index].name }}</span>
                                    </vs-td>
                                    <vs-td :data="data[index].coffe">
                                        <span>{{ data[index].coffe }}</span>
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </div>
                </vx-card>
            </div>

            <!-- LINE AREA CHART -->
            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
                <vx-card title="電力運作" class="log-card overflow-hidden">
                    <div>
                        <vue-apex-charts
                            ref="realtimeChart"
                            type="area"
                            height="300"
                            :options="lineAreaElectricity.chartOptions"
                            :series="lineAreaElectricity.series"
                        ></vue-apex-charts>
                    </div>
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
                <vx-card title="本週累積沖泡數" class="log-card">
                    <div>
                        <vue-apex-charts
                            class="mt-6 mb-8 a"
                            type="donut"
                            height="250"
                            :options="coffeDonut.chartOptions"
                            :series="coffeDonut.series"
                        />
                        <h1
                            class="float-number flex align-items-center justify-content-center"
                        >
                            {{ allCoffeDonutCount }}
                        </h1>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
                <vx-card title="本週沖泡排名" class="log-card overflow-hidden">
                    <div slot="no-body" class="mt-4 text-center">
                        <vs-table
                            max-items="5"
                            pagination
                            :data="weekCoffeLists"
                            class="table-dark-inverted"
                        >
                            <template slot-scope="{ data }">
                                <vs-tr
                                    :key="index"
                                    v-for="(item, index) in data"
                                >
                                    <vs-td
                                        :data="data[index].crown"
                                        class="crown"
                                    >
                                        <img
                                            :src="data[index].crown"
                                            height="40"
                                            class="mx-auto"
                                        />
                                    </vs-td>
                                    <vs-td :data="data[index].name">
                                        <ul class="users-liked user-list">
                                            <li>
                                                <vx-tooltip
                                                    :text="data[index].name"
                                                    position="bottom"
                                                >
                                                    <vs-avatar
                                                        :src="data[index].img"
                                                        size="30px"
                                                        class="border-2 border-white border-solid -m-4"
                                                    ></vs-avatar>
                                                </vx-tooltip>
                                            </li>
                                        </ul>
                                    </vs-td>
                                    <vs-td :data="data[index].name">
                                        <span>{{ data[index].name }}</span>
                                    </vs-td>
                                    <vs-td :data="data[index].count">
                                        <span>{{ data[index].count }}</span>
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </div>
                </vx-card>
            </div>
            <div
                class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base flex log-card overflow-hidden"
            >
                <img
                    src="@/assets/images/coffee-icons/icon11.svg"
                    class="ml-auto mt-auto"
                    width="300"
                />
            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment";
import VueApexCharts from "vue-apexcharts";
// import DashBoardData from "./DashBoardData.js";
import VxTimeline from "@/components/timeline/VxTimeline";
import apexChatData from "./charts-and-maps/charts/apex-charts/apexChartData.js";
// import moduleIot from "@/store/iot/moduleIot.js";
import moduleCoffe from "@/store/coffe-list/moduleCoffe.js";

export default {
    data() {
        return {
            reConnect: true,
            rfidWebsocket: null,
            buttonWebsocket: null,
            electWebsocket: null,
            counterInterval3000: null,
            counterInterval10000: null,
            // DashBoardData,
            apexChatData,
            initalState: {
                usingMachine: {},
                dayCoffeCountBar: {
                    series: [
                        {
                            name: "杯",
                            data: [],
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
                            categories: [],
                        },
                    },
                },
                coffeDonut: {
                    series: [10, 6, 2, 5],
                    chartOptions: {
                        labels: [
                            "濃縮",
                            "雙倍濃縮",
                            "混水濃縮",
                            "雙倍混水濃縮",
                        ],
                        dataLabels: {
                            enabled: false,
                        },
                        legend: { show: false },
                        chart: {
                            // offsetY: 30,
                            type: "donut",
                            toolbar: {
                                show: false,
                            },
                        },
                        stroke: { width: 1 },
                        colors: ["#887dff", "#a59cff", "#c49cff", "#d4b8ff"],
                    },
                },
                lineAreaElectricity: {
                    series: [
                        {
                            name: "電力",
                            data: [],
                        },
                    ],
                    chartOptions: {
                        grid: {
                            show: false,
                        },
                        chart: {
                            id: "realtime",
                            zoom: {
                                enabled: false,
                                type: "x",
                                autoScaleYaxis: true,
                            },
                            toolbar: {
                                show: false,
                            },
                            animations: {
                                enabled: true,
                                easing: "linear",
                                dynamicAnimation: {
                                    speed: 1000,
                                },
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: "straight",
                            width: 1,
                            colors: ["#7367F0"],
                        },
                        colors: ["#7367F0"],
                        xaxis: {
                            type: "datetime",
                            range: 24 * 3600,
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
                            range: 3000,
                            show: true,

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
                                format: "HH:mm:ss",
                            },
                        },
                    },
                },
            },
        };
    },
    components: {
        VueApexCharts,
        VxTimeline,
    },
    created() {
        this.$store.registerModule("coffe", moduleCoffe);
        this.$store.dispatch("coffe/resetSate", this.initalState);

        this.initRfidWebSocket();
        // this.initButtonWebSocket();
        this.initElectWebSocket();
    },
    beforeDestroy: function () {
        //移除 vue instance 之前
        this.reConnect = false;
        clearInterval(this.counterInterval3000);
        this.$store.unregisterModule("coffe");
        this.rfidWebsocket.close();
        // this.buttonWebsocket.close();
        this.electWebsocket.close();
    },
    mounted() {
        // this.$store.dispatch(
        //     "coffe/fetchSewingTargetItem"
        // );
        this.$store.dispatch("coffe/fetchDayCoffeCount");
        this.$store.dispatch("coffe/fetchRecordListItems");
        this.$store.dispatch("coffe/fetchWeekCoffeLists");
    },
    computed: {
        //Coffe
        dayCoffeCountBar() {
            return this.$store.state.coffe.dayCoffeCountBar;
        },
        weekCoffeLists() {
            return this.$store.state.coffe.weekCoffeLists;
        },
        usingMachine() {
            return this.$store.state.coffe.usingMachine;
        },
        coffeRecordLists() {
            return this.$store.state.coffe.coffeRecordLists;
        },
        lineAreaElectricity() {
            return this.$store.state.coffe.lineAreaElectricity;
        },
        coffeDonut() {
            return this.$store.state.coffe.coffeDonut;
        },
        allCoffeDonutCount() {
            return this.coffeDonut.series.reduce((a, b) => a + b);
        },
    },
    methods: {
        initRfidWebSocket() {
            this.rfidWebsocket = new WebSocket(
                "ws://10.112.10.127:1500/userlog/" +
                    Math.random().toString(36).substring(7)
            );
            this.setRfidListener();
        },
        initButtonWebSocket() {
            this.buttonWebsocket = new WebSocket(
                "ws://10.112.10.127:1500/button" +
                    Math.random().toString(36).substring(7)
            );
            this.setButtonListener();
        },
        initElectWebSocket() {
            this.electWebsocket = new WebSocket(
                "ws://10.112.10.127:1500/power/" +
                    Math.random().toString(36).substring(7)
            );
            this.setElectListener();
        },
        resetElectricity() {
            console.log("reset");
            this.$store.dispatch("coffe/resetElectricity");
        },
        setRfidListener() {
            this.rfidWebsocket.onopen = () => {
                console.log("WebSocket連線開啟-咖啡機RFID");
            };

            this.rfidWebsocket.onclose = () => {
                console.log("WebSocket連線關閉-咖啡機RFID");
                if (this.reConnect === true) {
                    console.log("嘗試WebSocket重新連線-咖啡機RFID");
                    this.initRfidWebSocket();
                }
            };

            //接收 Server 發送的訊息
            this.rfidWebsocket.onmessage = (event) => {
                console.log("WebSocket收到事件包-咖啡機RFID");
                var eventData = JSON.parse(event.data);
                if (eventData.card_id) {
                    this.$store.dispatch("coffe/setUsingMachine", {
                        userName: eventData.username,
                        userStatus: eventData.status,
                        machineStatus: eventData.power_device,
                        // checkTime: moment()
                        //     .utc(eventData.timestamp)
                        //     .format("HH:mm"),
                    });
                    //咖啡log獨立出來
                    // this.$store.dispatch("coffe/addCoffeLog", {
                    //     userId: eventData.card_id,
                    //     userName: eventData.username,
                    //     userStatus: eventData.status,
                    //     coffe: eventData.coffe,
                    //     checkTime: moment()
                    //         .utc(eventData.timestamp)
                    //         .format("HH:mm"),
                    // });
                }
            };
            this.rfidWebsocket.onerror = function (error) {
                console.error("WebSocket連線錯誤-咖啡機RFID");
                console.error(`[error] ${error.message}`);
            };
        },
        setButtonListener() {
            this.buttonWebsocket.onopen = () => {
                console.log("WebSocket連線開啟-咖啡機BUTTON");
            };

            this.buttonWebsocket.onclose = () => {
                console.log("WebSocket連線關閉-咖啡機BUTTON");
                if (this.reConnect === true) {
                    console.log("嘗試WebSocket重新連線-咖啡機BUTTON");
                    this.initButtonWebSocket();
                }
            };

            //接收 Server 發送的訊息
            this.buttonWebsocket.onmessage = (event) => {
                console.log("WebSocket收到事件包-咖啡機BUTTON");
                var eventData = JSON.parse(event.data);
                if (eventData.card_id) {
                    this.$store.dispatch("coffe/addCoffeLog", {
                        userId: eventData.card_id,
                        userName: eventData.username,
                        userStatus: eventData.status,
                        coffe: eventData.coffe,
                        checkTime: moment()
                            .utc(eventData.timestamp)
                            .format("HH:mm"),
                    });
                }
            };
            this.buttonWebsocket.onerror = function (error) {
                console.error("WebSocket連線錯誤-咖啡機BUTTON");
                console.error(`[error] ${error.message}`);
            };
        },
        setElectListener() {
            // this.counterInterval3000 = setInterval(() => {
            //     this.websocket.send(20);
            //     setTimeout(() => {
            //         this.set50();
            //         setTimeout(() => {
            //             this.set70();
            //             setTimeout(() => {
            //                 this.set100();
            //             }, 3000);
            //         }, 4000);
            //     }, 3000);
            // }, 10000);
            this.counterInterval3000 = setInterval(() => {
                this.resetElectricity();
            }, 1000 * 60 * 32);
            // this.counterInterval10000 = setInterval(() => {
            //     this.websocket.send(50);
            // }, 5000);
            this.electWebsocket.onopen = () => {
                console.log("WebSocket連線開啟-咖啡機電力");
            };

            this.electWebsocket.onclose = () => {
                console.log("WebSocket連線關閉-咖啡機電力");
                if (this.reConnect === true) {
                    console.log("嘗試WebSocket重新連線-咖啡機電力");
                    this.initElectWebSocket();
                }
            };

            //接收 Server 發送的訊息
            this.electWebsocket.onmessage = (event) => {
                console.log("WebSocket收到事件包-咖啡機電力");
                console.log(JSON.parse(JSON.parse(event.data)));
                var eventData = JSON.parse(JSON.parse(event.data));
                if (eventData.power_of_device === "coffee_power") {
                    this.$store.dispatch("coffe/setElectricity", {
                        value: eventData.current_power,
                        datetime: parseInt(eventData.time),
                    });
                }
            };
            this.electWebsocket.onerror = function (error) {
                console.error("WebSocket連線錯誤-咖啡機電力");
                console.error(`[error] ${error.message}`);
            };
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

.flex.align-items-center {
    display: flex;
    align-items: center;
}
.flex.justify-content-center {
    display: flex;
    justify-content: center;
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
#coffe-basic-card {
    .user-card {
        height: 25vh;
    }

    .log-card {
        height: 50vh;
    }
}
.crown {
    max-width: 40px;
}

/*! rtl:end:ignore */
</style>
