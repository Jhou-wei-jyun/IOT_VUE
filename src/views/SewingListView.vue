<template>
    <div id="dashboard-analytics">
        <!-- <button @click="sendTestDataIn">登入</button>
        <button @click="sendTestDataOut">登出</button> -->
        <!-- {{ sewingLists }} -->
        <div class="vx-row">
            <!-- CARD 1: 操作人員 -->
            <div class="vx-col w-full mb-base">
                <vx-card>
                    <div class="vx-row mb-base mr-3">
                        <div class="flex items-center ml-auto">
                            <img
                                src="@/assets/images/Sewing-M-icons/icon05.svg"
                                width="50"
                            />
                            <h6>機台運作／人員登入</h6>
                        </div>
                        <div class="flex items-center">
                            <img
                                src="@/assets/images/Sewing-M-icons/icon06.svg"
                                width="50"
                            />
                            <h6>機台異常</h6>
                        </div>
                        <div class="flex items-center">
                            <img
                                src="@/assets/images/Sewing-M-icons/icon07.svg"
                                width="50"
                            />
                            <h6>嚴重錯誤</h6>
                        </div>
                        <div class="flex items-center">
                            <img
                                src="@/assets/images/Sewing-M-icons/icon14.svg"
                                width="50"
                            />
                            <h6>機台未開啟／人員未登入</h6>
                        </div>
                    </div>
                    <div
                        class="vx-row mb-base"
                        v-for="(item, index) in sewingLists"
                        :key="index"
                    >
                        <div class="vx-col md:w-1/6 my-auto">
                            <div class="text-center">
                                <h1>{{ item.factory_line_name }}</h1>
                            </div>
                        </div>

                        <div class="vx-col md:w-5/6 my-auto">
                            <div class="vx-row">
                                <div
                                    v-for="(i, idx) in item.factory_devices"
                                    :key="idx"
                                    class="vx-col md:w-1/10"
                                >
                                    <router-link
                                        tag="div"
                                        class="vx-logo cursor-pointer flex items-center"
                                        :to="{
                                            path:
                                                '/dashboard/sewing/' +
                                                i.device_name,
                                        }"
                                    >
                                        <div class="text-center">
                                            <div class="machine-icon">
                                                <svg
                                                    :style="
                                                        getStyle(
                                                            i.device_status
                                                        )
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
                                                    style="
                                                        enable-background: new 0
                                                            0 73.3 65.6;
                                                    "
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
                                                    :src="
                                                        getUserIcon(
                                                            i.user_status
                                                        )
                                                    "
                                                    width="50"
                                                />
                                            </div>

                                            <!-- <feather-icon
                                        icon="MonitorIcon"
                                        svgClasses="w-10 h-10 "
                                        :class="getStyle(i.machineStatus)"
                                    ></feather-icon> -->
                                            <p>{{ i.device_name }}</p>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
        <div class="vx-row">
            <!-- <vx-card>

                <ag-grid-vue
                    ref="agGridTable"
                    :gridOptions="gridOptions"
                    class="ag-theme-material w-100 my-4 ag-grid-table"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="contacts"
                    rowSelection="multiple"
                    colResizeDefault="shift"
                    :animateRows="true"
                    :floatingFilter="true"
                    :pagination="true"
                    :paginationPageSize="paginationPageSize"
                    :suppressPaginationPanel="true"
                    :enableRtl="$vs.rtl"
                >
                </ag-grid-vue>
                <vs-pagination
                    :total="totalPages"
                    :max="maxPageNumbers"
                    v-model="currentPage"
                />
            </vx-card> -->
        </div>
    </div>
</template>
<script>
import moment from "moment";
import VueApexCharts from "vue-apexcharts";
import VxTimeline from "@/components/timeline/VxTimeline";
import moduleSewing from "@/store/sewing-list/moduleSewing.js";

export default {
    data() {
        return {
            dashBoardUrl: "/dashboard/sewing",
            //connectTimeOut
            rfidWebsocketReconnect: null,
        };
    },
    components: {
        VueApexCharts,
        VxTimeline,
    },
    created() {
        if (!moduleSewing.isRegistered) {
            this.$store.registerModule("sewingLists", moduleSewing);
            moduleSewing.isRegistered = true;
        }
        this.$store.dispatch("sewingLists/fetchSewingItems");
        this.initRfidWebSocket();
    },
    beforeDestroy: function () {
        if (this.rfidWebsocketReconnect !== null) {
            clearTimeout(this.rfidWebsocketReconnect);
        }
        // this.rfidWebsocket.close();
    },
    computed: {
        sewingLists() {
            return this.$store.state.sewingLists.sewingLists;
        },
        styleList() {
            return this.$store.state.sewingLists.styleList;
        },
        srcList() {
            return this.$store.state.sewingLists.srcList;
        },
    },
    methods: {
        // sendTestDataOut() {
        //     this.$store.dispatch("sewingLists/setSewingListStatus", {
        //         userName: "Phil",
        //         userStatus: "out",
        //         machineNo: "SB20002",
        //         machineStatus: "off",
        //         checkTime: moment(new Date()).format("HH:mm"),
        //     });
        // },
        // sendTestDataIn() {
        //     this.$store.dispatch("sewingLists/setSewingListStatus", {
        //         userName: "Phil",
        //         userStatus: "in",
        //         machineNo: "SB20002",
        //         machineStatus: "on",
        //         checkTime: moment(new Date()).format("HH:mm"),
        //     });
        // },
        initRfidWebSocket() {
            // this.rfidWebsocket = require("socket.io")(
            //     "https://10.112.10.127:1500/userlog/get_user/" +
            //         Math.random().toString(36).substring(7)
            // );
            // this.rfidWebsocket = this.$socketio.connect(
            //     "ws://10.112.10.66:8000/userlog/" +
            //         Math.random().toString(36).substring(7),
            //     { origins: "*:*" }
            // );
            // this.rfidWebsocket = this.$socketio.connect(
            //     "ws://10.112.10.127:1500/userlog/get_user/" +
            //         Math.random().toString(36).substring(7)
            // );
            //https寫法
            this.rfidWebsocket = this.$socketio.connect(
                "http://10.112.10.66:8000/userlog/" +
                    Math.random().toString(36).substring(7),
                {
                    rejectUnauthorized: false,
                }
            );
            // this.rfidWebsocket = new WebSocket(
            //     "ws://10.112.10.127:1500/userlog/get_user"
            // );
            this.setRfidListenerSocketio();
        },
        setRfidListenerSocketio() {
            this.rfidWebsocket.on("connect", () => {
                console.log("socket.io連線開啟-清單RFID");
            });

            this.rfidWebsocket.on("disconnect", () => {
                console.log("socket.io連線關閉-清單RFID");
            });
            this.rfidWebsocket.on("connect_error", () => {
                this.rfidWebsocketReconnect = setTimeout(() => {
                    console.log("socket.io連線關閉-嘗試重新連線中-清單RFID");
                    this.rfidWebsocket.connect();
                }, 1000);
            });
            this.rfidWebsocket.on("connect", () => {
                console.log("socket.io連線開啟-清單RFID");
            });
            this.rfidWebsocket.on("event", () => {
                console.log("socket.io收到事件包-清單RFID");
                console.log("socket: ", event.data);
            });

            // //接收 Server 發送的訊息
            // this.rfidWebsocket.onmessage = (event) => {
            //     console.log("WebSocket收到事件包-清單RFID");
            //     console.log("user: ", JSON.parse(JSON.parse(event.data)));
            //     // console.log("count: ", JSON.parse(event.data).swpcount);
            //     var eventData = JSON.parse(JSON.parse(event.data));
            //     if (eventData.card_id) {
            //         this.$store.dispatch("sewingLists/setSewingListStatus", {
            //             userName: eventData.username,
            //             userStatus: eventData.status,
            //             machineNo: eventData.device_id,
            //             machineStatus: eventData.power_device,
            //             checkTime: moment()
            //                 .utc(eventData.timestamp)
            //                 .format("HH:mm"),
            //         });
            //     }
            // };
            // this.rfidWebsocket.onerror = function (error) {
            //     console.error("WebSocket連線錯誤-清單RFID");
            //     console.error(`[error] ${error.message}`);
            // };
        },
        setRfidListener() {
            this.rfidWebsocket.onopen = () => {
                console.log("WebSocket連線開啟-清單RFID");
            };

            this.rfidWebsocket.onclose = () => {
                console.log("WebSocket連線關閉-清單RFID");
            };

            //接收 Server 發送的訊息
            this.rfidWebsocket.onmessage = (event) => {
                console.log("WebSocket收到事件包-清單RFID");
                console.log("user: ", JSON.parse(JSON.parse(event.data)));
                // console.log("count: ", JSON.parse(event.data).swpcount);
                var eventData = JSON.parse(JSON.parse(event.data));
                if (eventData.card_id) {
                    this.$store.dispatch("sewingLists/setSewingListStatus", {
                        userName: eventData.username,
                        userStatus: eventData.status,
                        machineNo: eventData.device_id,
                        machineStatus: eventData.power_device,
                        checkTime: moment()
                            .utc(eventData.timestamp)
                            .format("HH:mm"),
                    });
                }
            };
            this.rfidWebsocket.onerror = function (error) {
                console.error("WebSocket連線錯誤-清單RFID");
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
#dashboard-analytics {
    .greet-user {
        position: relative;

        .decore-left {
            position: absolute;
            left: 0;
            top: 0;
        }
        .decore-right {
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    @media (max-width: 576px) {
        .decore-left,
        .decore-right {
            width: 140px;
        }
    }
}
.flex.align-items-center {
    display: flex;
    align-items: center;
}
.machine-icon {
    position: relative;
}
.user-icon {
    position: absolute;
    bottom: -5px;
    right: -10px;
}
/*! rtl:end:ignore */
</style>
