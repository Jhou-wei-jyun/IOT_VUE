<template>
    <div id="basic-card">
        <!-- {{ namespace }} -->
        <!-- {{ lineAreaElectricity }} -->
        {{ usingMachine }}
        <!-- {{ exitData }} -->
        <!-- {{ sewingRecordLists }} -->
        <div class="vx-row">
            <div class="vx-col w-full mb-base">
                <vx-card class="text-center">
                    <div class="vx-row">
                        <!-- CARD 1: 操作人員 -->
                        <div class="vx-col w-full md:w-1/5 flex items-center">
                            <div class="machine-icon mx-auto">
                                <svg
                                    :style="
                                        getStyle(usingMachine.device_status)
                                    "
                                    width="75"
                                    height="75"
                                    version="1.1"
                                    id="圖層_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 73.3 65.6"
                                    style="enable-background: new 0 0 73.3 65.6"
                                    xml:space="preserve"
                                >
                                    <g>
                                        <g>
                                            <path
                                                class="st0"
                                                d="M62.6,42.8l-9,0c0,0,0,0,0,0c-0.6,0-1.1,0.5-1.1,1.2c0,0.3,0.1,0.6,0.3,0.9c0.2,0.2,0.5,0.3,0.7,0.3l9,0
			c0,0,0,0,0,0c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8C63.7,43.3,63.2,42.8,62.6,42.8z"
                                            />
                                            <path
                                                class="st0"
                                                d="M13.8,38.7c0,0.2,0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.6,0.3l2.2,0c0,0,0,0,0,0h0l2.2,0c0,0,0,0,0,0
			c0.5,0,0.9-0.4,0.9-0.9l-4.1,0L13.8,38.7z"
                                            />
                                            <polygon
                                                class="st0"
                                                points="47.9,55.8 47.9,55.8 47.9,55.8 3,55.6 2.9,65.2 68.1,65.6 68.2,55.9 47.9,55.8 		"
                                            />
                                            <path
                                                class="st0"
                                                d="M47.5,51.4L1.3,51.2C1.2,51.2,0,51.4,0,53c0,1.5,2.4,1.7,2.5,1.7l44.9,0.2L47.5,51.4z"
                                            />
                                            <path
                                                class="st0"
                                                d="M61.9,0.9C61.9,0.4,61.5,0,61,0h-3.5c-0.5,0-0.9,0.4-0.9,0.9V4l5.4,0V0.9z"
                                            />
                                            <path
                                                class="st0"
                                                d="M52.9,0.9C52.9,0.4,52.5,0,52,0h-3.5c-0.5,0-0.9,0.4-0.9,0.9V4l5.4,0V0.9z"
                                            />
                                            <path
                                                class="st0"
                                                d="M18.5,1.6c0-0.2-0.2-0.4-0.4-0.4h-2.6c-0.2,0-0.4,0.2-0.4,0.4V4l3.4,0V1.6z"
                                            />
                                            <path
                                                class="st0"
                                                d="M62.6,5c0,0-0.1,0-0.2,0H56c-0.1,0-0.1,0-0.2,0l-2.3,0c-0.1,0-0.1,0-0.2,0H47c0,0-0.1,0-0.1,0L19,5
			c0,0,0,0-0.1,0h-4.4c0,0,0,0,0,0l-3.8,0c0,0,0,0-0.1,0c-0.3,0-2.9,0.1-4.6,2C4.4,8.8,4,11.7,4.8,15.4c3.2,16.5,5.8,22.3,7,22.3
			l1.3,0c0,0,0,0,0,0c0,0,0,0,0,0l7.2,0c0,0,0,0,0,0l1.5,0c0.4,0,1.3-1,1.3-4.7c0-5.9,0.1-7.4,0.1-7.5c0,0-0.1-1.9,1.2-3.3
			c0.9-1,2.3-1.5,4-1.5c0,0,0,0,0,0l16.6,0c0,0,1.4,0,2.5,1c0.8,0.7,1.1,1.8,1.1,3.2l-0.2,25.8l0,4l19.7,0.1l0.1-41.8
			c0-0.1,0.2-4.4-2-6.7C65.4,5.5,64.1,5,62.6,5z M64.1,45.5c-0.4,0.4-0.9,0.6-1.5,0.6c0,0,0,0,0,0c0,0,0,0,0,0l-9,0
			c-0.5,0-1.1-0.2-1.4-0.6c-0.4-0.4-0.6-1-0.6-1.6c0-1.2,0.9-2.2,2.1-2.2c0,0,0,0,0,0l9,0c1.2,0,2.1,1,2.1,2.2
			C64.7,44.5,64.5,45.1,64.1,45.5z M58.2,23.4C58.2,23.4,58.2,23.4,58.2,23.4c-1.7,0-3.3-0.7-4.6-1.9c-1.3-1.3-2-3-2-4.8
			c0-3.7,3-6.7,6.6-6.7c1.7,0,3.3,0.7,4.6,1.9c1.3,1.3,2,3,2,4.8C64.8,20.4,61.8,23.4,58.2,23.4z"
                                            />
                                            <path
                                                class="st0"
                                                d="M72.3,16.3h-3.1v21.5h3.1c0.5,0,0.9-0.4,0.9-0.9V17.2C73.3,16.7,72.8,16.3,72.3,16.3z"
                                            />
                                            <path
                                                class="st0"
                                                d="M58.3,11c-3.1,0-5.6,2.6-5.6,5.7c0,1.6,0.6,3,1.7,4.1c1,1,2.4,1.6,3.8,1.6c0,0,0,0,0,0c3.1,0,5.6-2.6,5.6-5.7
			c0-1.6-0.6-3-1.7-4.1C61.1,11.5,59.7,11,58.3,11z"
                                            />
                                            <path
                                                class="st0"
                                                d="M16.9,45.5L16.9,45.5c-0.3,0-0.5-0.2-0.5-0.5v-4c0-0.3,0.2-0.5,0.5-0.5l0,0c0.3,0,0.5,0.2,0.5,0.5v4
			C17.4,45.3,17.2,45.5,16.9,45.5z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <img
                                    class="user-icon"
                                    :src="getUserIcon(usingMachine.user_status)"
                                    width="50"
                                />
                            </div>
                        </div>
                        <div class="vx-col w-full md:w-1/5 flex items-center">
                            <div class="flex mx-auto">
                                <h1>
                                    <p>{{ usingMachine.factory_line_name }}</p>
                                    <p>{{ usingMachine.device_name }}</p>
                                </h1>
                            </div>
                        </div>
                        <div class="vx-col w-full md:w-1/5">
                            <vue-apex-charts
                                ref="realtimeChart"
                                type="line"
                                height="150"
                                :options="lineAreaElectricity.chartOptions"
                                :series="lineAreaElectricity.series"
                            ></vue-apex-charts>
                        </div>
                        <!-- CARD 2: 操作用戶 -->
                        <div class="vx-col w-full md:w-1/5 flex items-center">
                            <div class="flex mx-auto">
                                <h1>
                                    {{
                                        usingMachine.user_name
                                            | userFilter(usingMachine)
                                    }}
                                </h1>
                            </div>
                        </div>
                        <!-- CARD 2: 操作時間 -->
                        <div class="vx-col w-full md:w-1/5 flex items-center">
                            <div class="flex mx-auto">
                                <h1>
                                    {{
                                        usingMachine.used_time
                                            | timestampToDatetime
                                    }}
                                </h1>
                            </div>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
        <div class="vx-row">
            <!-- CARD 3: 工作針數 -->
            <div class="vx-col w-full md:w-1/3 mb-base">
                <vx-card title="工作針數" class="log-card overflow-hidden">
                    <div slot="no-body" v-if="supportTracker.analyticsData">
                        <div class="vx-row">
                            <!-- Chart -->
                            <div class="vx-col w-full mx-auto">
                                <vue-apex-charts
                                    type="radialBar"
                                    height="300"
                                    :options="
                                        DashBoardData.supportTrackerRadialBar
                                            .chartOptions
                                    "
                                    :series="supportTracker.series"
                                    class="py-10"
                                />
                            </div>
                        </div>

                        <!-- Support Tracker Meta Data -->
                        <div class="flex justify-content-around">
                            <p
                                class="text-center"
                                v-for="(val, key) in supportTracker
                                    .analyticsData.meta"
                                :key="key"
                            >
                                <span class="block">{{ key }}</span>
                                <span class="text-2xl font-semibold">{{
                                    val
                                }}</span>
                            </p>
                        </div>
                    </div>
                </vx-card>
            </div>
            <!-- CARD 9: DISPATCHED ORDERS -->
            <div class="vx-col w-full md:w-1/3">
                <vx-card title="操作履歷" class="log-card overflow-hidden">
                    <div slot="no-body" class="mt-4 text-center">
                        <vs-table
                            max-items="5"
                            pagination
                            :data="sewingRecordLists"
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
                                    <vs-td :data="data[index].inTime">
                                        <span>{{ data[index].inTime }}</span>
                                    </vs-td>
                                    <vs-td :data="data[index].user">
                                        <ul class="users-liked user-list">
                                            <li>
                                                <vx-tooltip
                                                    :text="data[index].user"
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
                                    <vs-td :data="data[index].user">
                                        <span>{{ data[index].user }}</span>
                                    </vs-td>
                                    <vs-td :data="data[index].outTime">
                                        <span>{{ data[index].outTime }}</span>
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </div>
                </vx-card>
            </div>
            <!-- CARD 9: DISPATCHED ORDERS -->
            <div class="vx-col w-full md:w-1/3 flex log-card overflow-hidden">
                <img
                    src="@/assets/images/logo/icon14.svg"
                    class="ml-auto mt-auto"
                    width="250"
                    height="250"
                />
            </div>
        </div>

        <!-- CARD 9: DISPATCHED ORDERS -->
        <!-- <div class="vx-col w-full">
                <vx-card title="Dispatched Orders">
                    <div slot="no-body" class="mt-4">
                        <vs-table
                            :data="paginatedData"
                            class="table-dark-inverted"
                        >
                            <template slot="thead">
                                <vs-th>ORDER NO.</vs-th>
                                <vs-th>STATUS</vs-th>
                                <vs-th>OPERATORS</vs-th>
                                <vs-th>LOCATION</vs-th>
                                <vs-th>DISTANCE</vs-th>
                                <vs-th>START DATE</vs-th>
                                <vs-th>EST DELIVERY DATE</vs-th>
                            </template>

                            <template slot-scope="{ data }">
                                <vs-tr
                                    :key="indextr"
                                    v-for="(tr, indextr) in data"
                                >
                                    <vs-td :data="data[indextr].orderNo">
                                        <span
                                            >#{{ data[indextr].orderNo }}</span
                                        >
                                    </vs-td>
                                    <vs-td :data="data[indextr].status">
                                        <span
                                            class="flex items-center px-2 py-1 rounded"
                                            ><div
                                                class="h-3 w-3 rounded-full mr-2"
                                                :class="
                                                    'bg-' +
                                                    data[indextr].statusColor
                                                "
                                            ></div>
                                            {{ data[indextr].status }}</span
                                        >
                                    </vs-td>
                                    <vs-td :data="data[indextr].orderNo">
                                        <ul class="users-liked user-list">
                                            <li
                                                v-for="(
                                                    user, userIndex
                                                ) in data[indextr].usersLiked"
                                                :key="userIndex"
                                            >
                                                <vx-tooltip
                                                    :text="user.name"
                                                    position="bottom"
                                                >
                                                    <vs-avatar
                                                        :src="user.img"
                                                        size="30px"
                                                        class="border-2 border-white border-solid -m-1"
                                                    ></vs-avatar>
                                                </vx-tooltip>
                                            </li>
                                        </ul>
                                    </vs-td>
                                    <vs-td :data="data[indextr].orderNo">
                                        <span>{{
                                            data[indextr].location
                                        }}</span>
                                    </vs-td>
                                    <vs-td :data="data[indextr].orderNo">
                                        <span>{{
                                            data[indextr].distance
                                        }}</span>
                                        <vs-progress
                                            :percent="data[indextr].distPercent"
                                            :color="data[indextr].statusColor"
                                        ></vs-progress>
                                    </vs-td>
                                    <vs-td :data="data[indextr].orderNo">
                                        <span>{{
                                            data[indextr].startDate
                                        }}</span>
                                    </vs-td>
                                    <vs-td :data="data[indextr].orderNo">
                                        <span>{{
                                            data[indextr].estDelDate
                                        }}</span>
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </div>
                    <vs-pagination
                        :total="dispatchedOrders.length"
                        :max="size"
                        v-model="currentPage"
                    />
                </vx-card>
            </div> -->
        <!-- <user-list-view></user-list-view> -->
    </div>
</template>
<script>
import moment from "moment";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import VueApexCharts from "vue-apexcharts";
import DashBoardData from "./DashBoardData.js";
import VxTimeline from "@/components/timeline/VxTimeline";
import moduleSewing from "@/store/sewing-list/moduleSewing.js";
import moduleSewingInfo from "@/store/sewing-Info/moduleSewingInfo.js";
// import initalState from "../store/sewing-list/data.js";

export default {
    data() {
        return {
            sewingWebsocket: null,
            rfidWebsocket: null,
            electWebsocket: null,
            counterInterval3000: null,
            counterInterval10000: null,
            timelineData: [
                {
                    color: "primary",
                    icon: "PlusIcon",
                    title: "登入",
                    time: "25 mins Ago",
                },
                {
                    color: "danger",
                    icon: "UsersIcon",
                    title: "下班",
                    time: "20 days ago",
                },
            ],
            DashBoardData,
            initalState: {
                supportTracker: {
                    analyticsData: {
                        openTickets: 163,
                        meta: {
                            累積針數: 0,
                            目標針數: 1340,
                        },
                    },
                    series: [],
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
                            curve: "smooth",
                            width: 2,
                        },
                        // fill: {
                        //     type: "gradient",
                        //     gradient: {
                        //         shade: "dark",
                        //         gradientToColors: ["#35f0fd"],
                        //     },
                        // },
                        xaxis: {
                            type: "datetime",
                            range: 12 * 3600,
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
                                format: "HH:mm:ss",
                            },
                        },
                    },
                },
            },
            namespace: null,
            device_id: null,
        };
    },
    components: {
        StatisticsCardLine,
        VueApexCharts,
        VxTimeline,
    },
    created() {
        this.device_id = window.location.href.split("sewing/")[1];
        this.namespace = "sewing" + window.location.href.split("sewing/")[1];
        if (!moduleSewing.isRegistered) {
            this.$store.registerModule("sewingLists", moduleSewing);
            moduleSewing.isRegistered = true;
            this.$store.dispatch("sewingLists/fetchSewingItems");
            // console.log("init", this.$store.state.sewingLists.sewingLists);
        }
        this.$store.registerModule(this.namespace, moduleSewingInfo);
        this.$store.dispatch(this.namespace + "/resetSate", this.initalState);

        this.initSewingWebSocket();
        this.initRfidWebSocket();
        // this.initElectWebSocket();
    },
    async mounted() {
        // this.$store.dispatch(
        //     this.namespace + "/fetchSewingTargetItem",
        //     window.location.href.split("sewing/")[1]
        // );
        await this.$store.dispatch(
            this.namespace + "/fetchSewingRecordListItems",
            {
                search_date: moment().format("YYYY-MM-DD hh:mm:ss"),
                device_name: window.location.href.split("sewing/")[1],
            }
        );
        // console.log("init2", this.$store.state.sewingLists.sewingLists);
        await this.$store.dispatch(this.namespace + "/updateUsingMachine", {
            updateData: this.$store.state.sewingLists.sewingLists,
            namespace: window.location.href.split("sewing/")[1],
        });
        //FAKE用
        this.fakeDataLoop(1500);
        this.counterInterval3000 = setInterval(() => {
            this.resetElectricity();
        }, 1000 * 60 * 3.2);
    },
    beforeDestroy: function () {
        clearInterval(this.counterInterval3000);
        clearInterval(this.counterInterval10000);
        // this.$store.commit(this.namespace + "/RESET_STATE");
        // this.$store.unregisterModule("sewingLists");
        this.$store.unregisterModule(this.namespace);
        // this.sewingWebsocket.close();
        this.rfidWebsocket.close();
        // this.electWebsocket.close();
    },
    filters: {
        timestampToDatetime(timestamp) {
            if (timestamp == null) {
                return null;
            } else {
                console.log("checktime", moment(timestamp).format("HH:mm"));
                return moment(timestamp).format("HH:mm");
            }
        },
        userFilter(status, usingMachine) {
            // console.log(status);
            if (status === null) {
                return status;
            }
            if (usingMachine.user_status === "in") {
                return status + " 使用中";
            }
            if (usingMachine.user_status === "out") {
                return "前一位使用者: " + status;
            }
        },
    },
    computed: {
        usingMachine() {
            return this.$store.state[this.namespace].usingMachine;
        },
        styleList() {
            return this.$store.state[this.namespace].styleList;
        },
        srcList() {
            return this.$store.state[this.namespace].srcList;
        },
        supportTracker() {
            return this.$store.state[this.namespace].supportTracker;
            // set: function () {
            //     return this.$store.commit("sewing/GET_SERIES", {
            //         accumulation: this.supportTracker.analyticsData.meta[
            //             "累積針數"
            //         ],
            //         target: this.supportTracker.analyticsData.meta["目標針數"],
            //     });
            // },
        },
        lineAreaElectricity() {
            return this.$store.state[this.namespace].lineAreaElectricity;
        },
        sewingRecordLists() {
            return this.$store.state[this.namespace].sewingRecordLists;
        },
    },
    methods: {
        fakeDataLoop(int) {
            this.counterInterval10000 = window.setInterval(() => {
                var obj = {
                    value: Math.floor(Math.random() * Math.floor(int)),
                    datetime: moment().valueOf(),
                };
                this.$store.dispatch(this.namespace + "/setElectricity", obj);
                // console.log("power", obj);
            }, 1000);
        },
        initSewingWebSocket() {
            // this.websocket = new WebSocket("ws://10.112.10.119:8765");
            this.sewingWebsocket = new WebSocket(
                "ws://10.112.10.127:1500/swp/" +
                    Math.random().toString(36).substring(7)
            );
            this.setSewingListener();
        },
        initRfidWebSocket() {
            this.rfidWebsocket = new WebSocket(
                "ws://10.112.10.127:1500/userlog/" +
                    Math.random().toString(36).substring(7)
            );
            this.setRfidListener();
        },
        initElectWebSocket() {
            this.electWebsocket = new WebSocket(
                "ws://10.112.10.127:1500/power/" +
                    Math.random().toString(36).substring(7)
            );
            this.setElectListener();
        },
        setSewingListener() {
            this.sewingWebsocket.onopen = () => {
                console.log("WebSocket連線開啟-針數");
            };

            this.sewingWebsocket.onclose = () => {
                console.log("WebSocket連線關閉-針數");
            };

            //接收 Server 發送的訊息
            this.sewingWebsocket.onmessage = (event) => {
                console.log("WebSocket收到事件包-針數");
                console.log("user: ", JSON.parse(JSON.parse(event.data)));
                // console.log("count: ", JSON.parse(event.data).swpcount);
                var eventData = JSON.parse(JSON.parse(event.data));
                if (eventData.swpcount) {
                    if (this.usingMachine.device_name === eventData.device_id) {
                        // this.$store.dispatch(this.namespace + "/setElectricity", {
                        //     value: parseInt(eventData.swpcount),
                        //     datetime: new Date(),
                        // });
                        this.$store.dispatch(this.namespace + "/setNeedle", {
                            value: parseInt(eventData.swpcount),
                        });
                    }
                }
            };
            this.sewingWebsocket.onerror = function (error) {
                console.error("WebSocket連線錯誤-針數");
                console.error(`[error] ${error.message}`);
            };
        },
        setRfidListener() {
            this.rfidWebsocket.onopen = () => {
                console.log("WebSocket連線開啟-RFID");
            };

            this.rfidWebsocket.onclose = () => {
                console.log("WebSocket連線關閉-RFID");
            };

            //接收 Server 發送的訊息
            this.rfidWebsocket.onmessage = (event) => {
                console.log("WebSocket收到事件包-RFID");
                console.log("user: ", JSON.parse(JSON.parse(event.data)));
                // console.log("count: ", JSON.parse(event.data).swpcount);
                var eventData = JSON.parse(JSON.parse(event.data));
                if (
                    eventData.card_id &&
                    eventData.device_id == this.device_id
                ) {
                    this.$store.dispatch(this.namespace + "/setStatus", {
                        userName: eventData.username,
                        userStatus: eventData.status,
                        machineStatus: eventData.power_device,
                        checkTime: moment().utc(eventData.timestamp),
                    });
                    // console.log(
                    //     "send before",
                    //     this.$store.state[this.namespace].sewingRecordLists
                    // );
                    this.$store.dispatch(this.namespace + "/addSewingLog", {
                        userId: eventData.card_id,
                        userName: eventData.username,
                        userStatus: eventData.status,
                        checkTime: moment()
                            .utc(eventData.timestamp)
                            .format("HH:mm"),
                    });
                    // console.log(
                    //     "send after",
                    //     this.$store.state[this.namespace].sewingRecordLists
                    // );
                }
            };
            this.rfidWebsocket.onerror = function (error) {
                console.error("WebSocket連線錯誤-RFID");
                console.error(`[error] ${error.message}`);
            };
        },
        setElectListener() {
            this.counterInterval3000 = setInterval(() => {
                this.resetElectricity();
            }, 1000 * 60 * 3.2);
            this.electWebsocket.onopen = () => {
                console.log("WebSocket連線開啟-針車機電力");
            };

            this.electWebsocket.onclose = () => {
                console.log("WebSocket連線關閉-針車機電力");
            };

            //接收 Server 發送的訊息
            this.electWebsocket.onmessage = (event) => {
                console.log("WebSocket收到事件包-針車機電力");
                console.log("user: ", JSON.parse(JSON.parse(event.data)));
                // console.log("count: ", JSON.parse(event.data).swpcount);
                var eventData = JSON.parse(JSON.parse(event.data));

                if (eventData.power_of_device === "coffee_power") {
                    this.$store.dispatch(this.namespace + "/setElectricity", {
                        value: eventData.current_power,
                        datetime: parseInt(eventData.time),
                        // datetime: new Date(),
                    });
                }
            };
            this.electWebsocket.onerror = function (error) {
                console.error("WebSocket連線錯誤-針車機電力");
                console.error(`[error] ${error.message}`);
            };
        },
        getStyle(machineStatus) {
            switch (machineStatus) {
                case "on":
                    return this.styleList.nomal;
                case 2:
                    return this.styleList.warning;
                case 3:
                    return this.styleList.danger;
                case "off":
                    return this.styleList.close;
                default:
                    return this.styleList.close;
            }
        },
        getUserIcon(userStatus) {
            switch (userStatus) {
                case "in":
                    return this.srcList.nomal;
                case "out":
                    return this.srcList.close;
                default:
                    return this.srcList.close;
            }
        },
    },
};
</script>

<style lang="scss">
/*! rtl:begin:ignore */

.machine-icon {
    position: relative;
}
.user-icon {
    position: absolute;
    bottom: -5px;
    right: -10px;
}
.flex.justify-content-around {
    display: flex;
    justify-content: space-around;
}
#basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .user-card {
        height: 25vh;
    }

    .log-card {
        height: 50vh;
    }
}
/*! rtl:end:ignore */
</style>
