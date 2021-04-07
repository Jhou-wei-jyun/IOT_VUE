<template>
    <div id="coffe-basic-card">
        <!-- <button @click="addFakeData()">ADD_DATA</button>
        {{ usingMachine }} -->
        <div class="vx-row">
            <!-- {{ coffeRecordLists }} -->
            <!-- {{ weekCoffeLists }} -->
            <!-- {{ lineAreaElectricity }} -->
            <!-- {{ coffeDonut }} -->
            <!-- {{ allCoffeDonutCount }} -->
            <!-- CARD 1: 操作人員 -->

            <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-base">
                <vx-card
                    :title="userUsingCheck(usingMachine.userStatus)"
                    class="user-card"
                >
                    <!-- CARD 1: 操作人員 -->
                    <div class="flex align-items-center justify-content-around">
                        <h1>{{ usingMachine.userName }}</h1>
                        <img
                            width="100"
                            style="border-radius: 50%"
                            :src="usingMachine.img"
                        />
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
                                v-if="usingMachine.userStatus === 'in'"
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
                                <span>{{ dayCoffeCount }}杯</span>
                            </div>
                        </div>
                        <div class="vx-col w-full sm:w-1/4 special-box">
                            <h4>已使用水量</h4>

                            <div
                                class="flex align-items-center justify-content-center mt-5"
                            >
                                <img
                                    src="@/assets/images/coffee-icons/icon07.svg"
                                    class="mb-4 max-w-full"
                                    width="100"
                                    height="100"
                                />
                                <span
                                    >{{ (dayCoffeCount * 350) / 1000 }} L</span
                                >
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
                                <span></span>
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
                <vx-card :title="coffeDonutTitle" class="log-card">
                    <!-- <change-time-duration-dropdown /> -->
                    <template slot="actions">
                        <change-time-duration-dropdown
                            :timeDuration="coffeDonutTimeDuration"
                            @timeDurationChanged="coffeDonutChanged"
                        />
                    </template>
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
                <vx-card
                    :title="weekCoffeListsTitle"
                    class="log-card overflow-hidden"
                >
                    <template slot="actions">
                        <change-time-duration-dropdown
                            :timeDuration="weekCoffeListsTimeDuration"
                            @timeDurationChanged="weekCoffeListsChanged"
                        />
                    </template>
                    <div slot="no-body" class="mt-4 text-center">
                        <vs-table
                            max-items="3"
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
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";

export default {
    data() {
        return {
            //
            coffeDonutTimeDuration: "week",
            weekCoffeListsTimeDuration: "week",
            weekCoffeListsTitle: "本週沖泡排名",
            coffeDonutTitle: "本週累積沖泡數",
            //
            isTest: false,
            //
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
                    series: [],
                    chartOptions: {
                        labels: [],
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
        ChangeTimeDurationDropdown,
    },
    created() {
        this.$store.registerModule("coffe", moduleCoffe);
        this.$store.dispatch("coffe/resetSate", this.initalState);

        this.initRfidWebSocket();
        this.initButtonWebSocket();
        this.initElectWebSocket();
    },
    beforeDestroy: function () {
        //移除 vue instance 之前
        this.reConnect = false;
        clearInterval(this.counterInterval3000);
        this.$store.unregisterModule("coffe");
        this.rfidWebsocket.close();
        this.buttonWebsocket.close();
        this.electWebsocket.close();
    },
    mounted() {
        // this.$store.dispatch(
        //     "coffe/fetchSewingTargetItem"
        // );
        this.fetchDayCoffeCount();
        this.fetchRecordListItems();
        this.fetchCoffeDonut("week");
        this.fetchWeekCoffeLists("week");
    },
    computed: {
        //Coffe
        dayCoffeCount() {
            let sum = 0;
            this.$store.state.coffe.dayCoffeCountBar.series[0].data.forEach(
                (element) => {
                    sum = element + sum;
                }
            );
            return sum;
        },
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
        coffeDonutChanged(event) {
            this.fetchCoffeDonut(event);
            switch (event) {
                case "week":
                    return (
                        (this.coffeDonutTitle = "本週累積沖泡數"),
                        (this.coffeDonutTimeDuration = "week")
                    );
                case "month":
                    return (
                        (this.coffeDonutTitle = "本月累積沖泡數"),
                        (this.coffeDonutTimeDuration = "month")
                    );
                default:
                    return (
                        (this.coffeDonutTitle = "本週累積沖泡數"),
                        (this.coffeDonutTimeDuration = "week")
                    );
            }
            // console.log(event);
        },
        weekCoffeListsChanged(event) {
            this.fetchWeekCoffeLists(event);

            switch (event) {
                case "week":
                    return (
                        (this.weekCoffeListsTitle = "本週沖泡排名"),
                        (this.weekCoffeListsTimeDuration = "week")
                    );
                case "month":
                    return (
                        (this.weekCoffeListsTitle = "本月沖泡排名"),
                        (this.weekCoffeListsTimeDuration = "month")
                    );
                default:
                    return (
                        (this.weekCoffeListsTitle = "本週沖泡排名"),
                        (this.weekCoffeListsTimeDuration = "week")
                    );
            }
            // console.log(event);
        },
        async addFakeData() {
            // this.$store.dispatch("coffe/setUsingMachine", {
            //     user: "eventData.username",
            //     userStatus: "out",
            //     machineStatus: "on",
            //     // checkTime: moment()
            //     //     .utc(eventData.timestamp)
            //     //     .format("HH:mm"),
            // });
            const payload = {
                userId: "as123",
                userName: "Phil",
                userStatus: "in",
                coffe: "雙倍混水濃縮",
                checkTime: moment().format("HH:mm"),
            };
            await this.$store
                .dispatch("coffe/addCoffeCount", payload)
                .then(() => {
                    this.$store.dispatch("coffe/addCoffeLog", payload);
                });
        },
        initRfidWebSocket() {
            this.rfidWebsocket = new WebSocket(
                "ws://10.112.10.69:1857/userlog/" +
                    Math.random().toString(36).substring(7)
            );
            this.setRfidListener();
        },
        initButtonWebSocket() {
            this.buttonWebsocket = new WebSocket(
                "ws://10.112.10.69:1857/current_btn/" +
                    Math.random().toString(36).substring(7)
            );
            this.setButtonListener();
        },
        initElectWebSocket() {
            this.electWebsocket = new WebSocket(
                "ws://10.112.10.69:1500/power/" +
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
                var eventData = JSON.parse(JSON.parse(event.data));
                if (eventData.card_id) {
                    this.$store.dispatch("coffe/setUsingMachine", {
                        cardId: eventData.card_id,
                        userName: eventData.username,
                        userStatus: eventData.status,
                        checkTime: moment()
                            .utc(eventData.timestamp)
                            .format("HH:mm"),
                    });
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
                var eventData = JSON.parse(JSON.parse(event.data));
                console.log(eventData);
                if (
                    this.usingMachine.userStatus === "in" &&
                    this.usingMachine.cardId
                ) {
                    this.addCoffeLog(eventData);
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
        userUsingCheck(status) {
            switch (status) {
                case "in":
                    return "正在使用";
                case "out":
                    return "前一位使用者";
                default:
                    return "正在使用";
            }
        },
        async fetchDayCoffeCount() {
            await this.$store.dispatch("coffe/fetchDayCoffeCount", {
                cafe_device_id: "1", //暫時寫死
                // search_date: moment().format("YYYY-MM-DD"),
            });
        },
        async fetchRecordListItems() {
            await this.$store.dispatch("coffe/fetchRecordListItems", {
                cafe_device_id: "1", //暫時寫死
                // search_date: moment().format("YYYY-MM-DD"),
            });
        },
        async fetchCoffeDonut(type) {
            await this.$store.dispatch("coffe/fetchCoffeDonut", {
                cafe_device_id: "1", //暫時寫死
                search_type: type,
                // start: moment().weekday(1).format("YYYY-MM-DD"), //本週一
                // end: moment().weekday(7).format("YYYY-MM-DD"), //本週日
            });
        },
        async fetchWeekCoffeLists(type) {
            await this.$store.dispatch("coffe/fetchWeekCoffeLists", {
                cafe_device_id: "1", //暫時寫死
                search_type: type,
            });
        },

        async addCoffeLog(eventData) {
            const payload = {
                cardId: this.usingMachine.cardId,
                userName: this.usingMachine.userName,
                coffe:
                    eventData.coffee_type == "1"
                        ? "濃縮"
                        : eventData.coffee_type == "2"
                        ? "雙倍濃縮"
                        : eventData.coffee_type == "6"
                        ? "混水濃縮"
                        : eventData.coffee_type == "7"
                        ? "雙倍混水濃縮"
                        : false,
                checkTime: moment().utc(eventData.press_time).format("HH:mm"),
            };
            await this.$store
                .dispatch("coffe/addCoffeCount", payload)
                .then(() => {
                    this.$store.dispatch("coffe/addCoffeLog", payload);
                });
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
.flex.justify-content-around {
    display: flex;
    justify-content: space-around;
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
