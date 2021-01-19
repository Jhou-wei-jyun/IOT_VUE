<template>
    <div>
        <!-- {{ electData }} -->
        <!-- {{ this.lineAreaElectricity.series[0].data }} -->
        <!-- {{ this.lineAreaElectricity.chartOptions.xaxis.categories }} -->
        <vue-apex-charts
            ref="realtimeChart"
            type="area"
            height="300"
            :options="lineAreaElectricity.chartOptions"
            :series="lineAreaElectricity.series"
        ></vue-apex-charts>
    </div>
</template>
<script>
import moment from "moment";
import VueApexCharts from "vue-apexcharts";
// import moduleIot from "@/store/iot/moduleIot.js";
// import electData from "./123.json";

export default {
    data() {
        return {
            electData: [
                {
                    mid: "41fdcc13-f5b3-4cdc-96d6-2200fb6a5d81",
                    out: false,
                    createAt: "2021-01-18 16:10:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957401.111735, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5d87e69b-63be-4863-9f70-c065717722fa",
                    out: false,
                    createAt: "2021-01-18 16:10:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957402.141398, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "28a4ed11-e058-4e99-b634-c7788a3bb467",
                    out: false,
                    createAt: "2021-01-18 16:10:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957403.184641, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d471f7e4-baf4-4402-8350-0a9756e2621f",
                    out: false,
                    createAt: "2021-01-18 16:10:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957404.248588, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b9234c72-efa0-4294-81ae-9be1e701011f",
                    out: false,
                    createAt: "2021-01-18 16:10:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957405.437144, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bf7ad292-b64e-4881-a8ec-7e5137cd4309",
                    out: false,
                    createAt: "2021-01-18 16:10:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957406.606963, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "757111c8-1a93-4ccb-99b3-1e65b8d600bc",
                    out: false,
                    createAt: "2021-01-18 16:10:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957407.763575, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "21275587-97c8-4df7-b6d4-334a4510532d",
                    out: false,
                    createAt: "2021-01-18 16:10:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957408.79028, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2650b28c-fcb3-440c-8a60-55e411fbaa20",
                    out: false,
                    createAt: "2021-01-18 16:10:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957409.870583, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "88c369a3-d9bb-4d11-aa9e-08ae88c36ecc",
                    out: false,
                    createAt: "2021-01-18 16:10:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957410.900926, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0c19b2c1-aa08-4250-8068-b249ec02c74b",
                    out: false,
                    createAt: "2021-01-18 16:10:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957411.925393, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "75f31b3f-8d57-4cad-ada8-3ad32542ac22",
                    out: false,
                    createAt: "2021-01-18 16:10:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957412.956141, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0f0c875c-fce9-41de-81b6-97dc6644d725",
                    out: false,
                    createAt: "2021-01-18 16:10:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957414.093154, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cc59bdce-6d0f-41df-b38b-19c943899f64",
                    out: false,
                    createAt: "2021-01-18 16:10:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957415.119326, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "680ee9c2-2072-425b-b37b-445c960a5545",
                    out: false,
                    createAt: "2021-01-18 16:10:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957416.281104, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3143d752-2495-4b75-a3aa-79ef20b2ab74",
                    out: false,
                    createAt: "2021-01-18 16:10:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957417.49132, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f4d53335-9cf2-4618-9576-908d91821045",
                    out: false,
                    createAt: "2021-01-18 16:10:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957418.525787, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c2edf0ea-3309-4aed-a75f-659114c943ec",
                    out: false,
                    createAt: "2021-01-18 16:10:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957419.736654, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c5976154-b58c-4ee1-bfc3-b65ddf03e190",
                    out: false,
                    createAt: "2021-01-18 16:10:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957420.776722, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "740494ac-753f-4f76-99c6-5a4b5ac3f016",
                    out: false,
                    createAt: "2021-01-18 16:10:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957421.845307, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "62a6e50d-56b4-46db-81e0-3ae55fd82e3d",
                    out: false,
                    createAt: "2021-01-18 16:10:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957422.882653, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6e5d9950-0917-4683-9aa8-acd3413551f9",
                    out: false,
                    createAt: "2021-01-18 16:10:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957423.928021, "current_power": "345"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ec1e0fb0-8d26-4f26-ac4e-09fa610a54e7",
                    out: false,
                    createAt: "2021-01-18 16:10:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957424.956108, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ce431964-a393-40eb-85e5-a7561a5a7532",
                    out: false,
                    createAt: "2021-01-18 16:10:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957426.01801, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3ea7b698-f88e-4470-ae72-6a1ffc190796",
                    out: false,
                    createAt: "2021-01-18 16:10:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957427.069305, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5b212320-f606-4ba9-864c-8b87e02c014b",
                    out: false,
                    createAt: "2021-01-18 16:10:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957428.252684, "current_power": "176540"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "46a7cdd8-7e73-4189-b441-011b2be834b1",
                    out: false,
                    createAt: "2021-01-18 16:10:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957429.95736, "current_power": "88235"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3906f226-38b5-4e94-a5aa-0294fcd07ab5",
                    out: false,
                    createAt: "2021-01-18 16:10:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957431.000688, "current_power": "54955"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1fb9eb9f-adad-43c7-8ac7-7754994ddfd7",
                    out: false,
                    createAt: "2021-01-18 16:10:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957432.066381, "current_power": "34290"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f0b8620a-776a-4c52-bd55-d50b0dadc155",
                    out: false,
                    createAt: "2021-01-18 16:10:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957433.105146, "current_power": "21455"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "910e36e0-e41f-4382-9099-e5b918add13b",
                    out: false,
                    createAt: "2021-01-18 16:10:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957434.145211, "current_power": "13480"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e5f2411f-847b-41a9-9f26-cc45a5aba33e",
                    out: false,
                    createAt: "2021-01-18 16:10:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957435.218073, "current_power": "8520"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d33a9331-d295-4b4c-8f66-d1f379ffb599",
                    out: false,
                    createAt: "2021-01-18 16:10:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957436.238257, "current_power": "5445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "00d79cc9-84c3-4302-91a8-8bb989c69c65",
                    out: false,
                    createAt: "2021-01-18 16:10:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957437.367193, "current_power": "3520"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c750b9e1-42ee-4c78-abe0-b783664c4e33",
                    out: false,
                    createAt: "2021-01-18 16:10:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957438.420065, "current_power": "2345"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5ad7be95-eb9e-4c1c-bfeb-b8c594d51259",
                    out: false,
                    createAt: "2021-01-18 16:10:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957439.470359, "current_power": "1120"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "597779b0-59a7-49f0-bcd3-299110637cb8",
                    out: false,
                    createAt: "2021-01-18 16:10:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957440.496941, "current_power": "850"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ac0f237e-b6dc-428f-8414-0126e34c3fb3",
                    out: false,
                    createAt: "2021-01-18 16:10:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957441.728629, "current_power": "665"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "96b57441-f907-4574-bfae-4531d18969c7",
                    out: false,
                    createAt: "2021-01-18 16:10:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957442.765218, "current_power": "560"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cf32fb14-3296-45c9-b59d-52f0dbdf978e",
                    out: false,
                    createAt: "2021-01-18 16:10:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957443.851943, "current_power": "505"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "593712dd-d21f-41da-a893-b6b9ad58fb47",
                    out: false,
                    createAt: "2021-01-18 16:10:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957444.982806, "current_power": "465"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fc516d5f-47d9-471f-9290-9d25032f4b7a",
                    out: false,
                    createAt: "2021-01-18 16:10:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957446.069886, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3b15a292-6b8b-45a7-9ca6-23175164f98a",
                    out: false,
                    createAt: "2021-01-18 16:10:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957447.092467, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "580edd3e-b012-428d-bcd7-ab5c9a8d2e94",
                    out: false,
                    createAt: "2021-01-18 16:10:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957448.126615, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1108fb96-07f9-4aa2-9498-fa6ad869fb44",
                    out: false,
                    createAt: "2021-01-18 16:10:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957449.195049, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "278bb400-2ecf-44d4-9be2-4eb66d6de044",
                    out: false,
                    createAt: "2021-01-18 16:10:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957450.238569, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "023c63eb-bddc-463a-9db2-4b826b65175d",
                    out: false,
                    createAt: "2021-01-18 16:10:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957451.365884, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "578fcadb-10ab-4b5b-a795-e1f99386ce73",
                    out: false,
                    createAt: "2021-01-18 16:10:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957453.011311, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1322e154-eb08-41a2-896a-803d69fc3b59",
                    out: false,
                    createAt: "2021-01-18 16:10:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957454.05803, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "221891e0-72e1-4fbd-b801-12777a72cb0d",
                    out: false,
                    createAt: "2021-01-18 16:10:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957455.289775, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e08593ef-7bb4-4cb1-923d-7c0fa1295183",
                    out: false,
                    createAt: "2021-01-18 16:10:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957456.812974, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "414c0af2-587a-4428-b362-083e571caa7f",
                    out: false,
                    createAt: "2021-01-18 16:10:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957458.000423, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "77a2fc8a-c116-46b5-b055-d243c375c4ae",
                    out: false,
                    createAt: "2021-01-18 16:10:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957459.077562, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "88d80181-2c43-488e-a594-deafc54343af",
                    out: false,
                    createAt: "2021-01-18 16:11:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957460.949838, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "740846d5-ced6-48a3-80c0-1082e58c1658",
                    out: false,
                    createAt: "2021-01-18 16:11:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957462.030712, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5d244b62-e1e8-4d8b-9d3d-2f3b65a10900",
                    out: false,
                    createAt: "2021-01-18 16:11:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957463.068133, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2d6f879c-28f3-4d93-9b37-b626fead58bd",
                    out: false,
                    createAt: "2021-01-18 16:11:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957464.102914, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "939c3ab7-3a85-45a8-a69a-b0bbe4610ea0",
                    out: false,
                    createAt: "2021-01-18 16:11:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957465.193319, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6e79145f-2a8b-45f7-93a3-6f88daa05e1e",
                    out: false,
                    createAt: "2021-01-18 16:11:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957466.264116, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d685da6e-950b-41ec-9ed2-932c6712cafd",
                    out: false,
                    createAt: "2021-01-18 16:11:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957467.321168, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c3c59b55-fe09-407f-8c8c-be1bad50a6d1",
                    out: false,
                    createAt: "2021-01-18 16:11:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957468.906221, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8b9c4916-ab90-4b26-97a4-a2ac5e980d44",
                    out: false,
                    createAt: "2021-01-18 16:11:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957470.003629, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7b910884-7a15-40c7-80c2-5f907857beed",
                    out: false,
                    createAt: "2021-01-18 16:11:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957471.074723, "current_power": "360"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "11af9031-f4a4-440f-b6d6-591c6e741d51",
                    out: false,
                    createAt: "2021-01-18 16:11:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957472.104477, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dec8316c-cf10-440a-8159-343c848657e7",
                    out: false,
                    createAt: "2021-01-18 16:11:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957473.163416, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3c4e0eda-1110-4ffd-8709-5d18ab9e46ad",
                    out: false,
                    createAt: "2021-01-18 16:11:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957474.191923, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3f024195-d603-44e8-a0a1-2c37832f9a19",
                    out: false,
                    createAt: "2021-01-18 16:11:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957475.258595, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a36794bf-4e9c-48ec-bd52-54a117441859",
                    out: false,
                    createAt: "2021-01-18 16:11:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957476.294264, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "31bdf985-5d2f-43c1-862f-051f496d6fe2",
                    out: false,
                    createAt: "2021-01-18 16:11:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957478.118766, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "850352eb-e8ca-4fcd-ad17-5740fd4799f7",
                    out: false,
                    createAt: "2021-01-18 16:11:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957479.161803, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "53a72cd5-80a8-4f02-9a5c-10039fb80a4b",
                    out: false,
                    createAt: "2021-01-18 16:11:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957480.192448, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d9e51e63-7dbe-4ad5-8bc9-234699fb175f",
                    out: false,
                    createAt: "2021-01-18 16:11:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957482.222555, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ff5f1b0b-7527-4a92-a7df-c3fa13f25ea6",
                    out: false,
                    createAt: "2021-01-18 16:11:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957483.259676, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ba74c220-e5c4-474f-a090-ce8f4356da25",
                    out: false,
                    createAt: "2021-01-18 16:11:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957484.294397, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "189ea6f5-336e-448e-8de3-12f39147464b",
                    out: false,
                    createAt: "2021-01-18 16:11:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957485.323632, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c23b337c-9277-40e7-a50a-8f16389cdd1b",
                    out: false,
                    createAt: "2021-01-18 16:11:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957486.348888, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a8b456de-caa8-4936-99dd-18755b7c4c21",
                    out: false,
                    createAt: "2021-01-18 16:11:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957487.370218, "current_power": "355"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "be07e4ca-82cc-48f2-9463-9b3fb2283a6e",
                    out: false,
                    createAt: "2021-01-18 16:11:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957488.43449, "current_power": "355"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "245d317c-f7d6-4377-a0bd-ffda12011bff",
                    out: false,
                    createAt: "2021-01-18 16:11:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957489.495623, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "11823f29-3da0-4c0d-a158-b5215c0afabf",
                    out: false,
                    createAt: "2021-01-18 16:11:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957490.560621, "current_power": "365"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8e373bbe-aa62-4db2-9284-53e89bb70c34",
                    out: false,
                    createAt: "2021-01-18 16:11:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957491.595447, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "67547f70-e436-436b-8c2a-ffa7338dc198",
                    out: false,
                    createAt: "2021-01-18 16:11:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957492.725429, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "658a8608-5080-479e-8d16-a2f8598c5a3c",
                    out: false,
                    createAt: "2021-01-18 16:11:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957493.781835, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "20d7a16e-57bc-43c7-92cd-24ff63720639",
                    out: false,
                    createAt: "2021-01-18 16:11:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957494.811014, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e5218c44-8723-4a0f-becb-4d307ded8b1c",
                    out: false,
                    createAt: "2021-01-18 16:11:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957495.855703, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2da3ff17-0be4-4780-848d-fe6f31865985",
                    out: false,
                    createAt: "2021-01-18 16:11:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957496.893649, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "142ad85f-de32-4eac-ac83-88ac62bf5962",
                    out: false,
                    createAt: "2021-01-18 16:11:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957498.061846, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1a0178a8-0a84-49dc-8aeb-956513c383c5",
                    out: false,
                    createAt: "2021-01-18 16:11:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957499.886305, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ebd6ebb1-0677-4160-a7ea-d3ce031940ed",
                    out: false,
                    createAt: "2021-01-18 16:11:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957500.913001, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c6e0bb08-5350-47c2-b58a-7b29e1474e0f",
                    out: false,
                    createAt: "2021-01-18 16:11:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957501.960006, "current_power": "233385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ae156d34-e6f8-4fb1-b7cf-739100b0f677",
                    out: false,
                    createAt: "2021-01-18 16:11:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957502.98429, "current_power": "145110"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dc5c336d-6102-4cde-8374-1d02cd1b69a9",
                    out: false,
                    createAt: "2021-01-18 16:11:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957504.104893, "current_power": "90275"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "641123bc-5d24-4df4-b1db-57b116e75976",
                    out: false,
                    createAt: "2021-01-18 16:11:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957505.258242, "current_power": "56220"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d6a9ff9f-24ab-4c52-b485-5e3c0ee5ba0d",
                    out: false,
                    createAt: "2021-01-18 16:11:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957506.302235, "current_power": "35090"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e6f646e5-5d27-45db-adc1-4504d61a08f2",
                    out: false,
                    createAt: "2021-01-18 16:11:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957510.327638, "current_power": "117660"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2ac1f6ee-8bd7-4e35-bc32-8039d7639ffe",
                    out: false,
                    createAt: "2021-01-18 16:11:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957511.353464, "current_power": "42710"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d0f2b2f0-274c-4b80-bb4d-159b1787dfd7",
                    out: false,
                    createAt: "2021-01-18 16:11:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957512.38705, "current_power": "26690"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2843fa5c-157d-4c7c-a19f-c2ea3af6d6ab",
                    out: false,
                    createAt: "2021-01-18 16:11:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957513.410588, "current_power": "204635"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3bfa28ba-dc66-449b-bf34-50d4a3374b93",
                    out: false,
                    createAt: "2021-01-18 16:11:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957514.471455, "current_power": "127280"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6e2a26d0-840e-4c3d-9a6b-85749001727c",
                    out: false,
                    createAt: "2021-01-18 16:11:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957515.503942, "current_power": "79210"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "46dcea89-6f1a-4ff5-a91c-ffe79ebeb597",
                    out: false,
                    createAt: "2021-01-18 16:11:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957516.535439, "current_power": "49325"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "282ae7ab-8f78-4558-9371-5f4227c46718",
                    out: false,
                    createAt: "2021-01-18 16:11:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957517.622979, "current_power": "30800"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "47f82039-6741-4e2e-9007-aa6ed2be46b0",
                    out: false,
                    createAt: "2021-01-18 16:11:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957518.644019, "current_power": "19265"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "192dd2de-d3e9-42ac-8b1c-2a0d137425b7",
                    out: false,
                    createAt: "2021-01-18 16:11:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957519.668169, "current_power": "12125"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4ced3b84-0ec9-4739-ae87-f31c8294e58f",
                    out: false,
                    createAt: "2021-01-18 16:11:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957520.691264, "current_power": "7665"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d2408d68-32a7-41dd-b3f5-1276b5b6e85c",
                    out: false,
                    createAt: "2021-01-18 16:12:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957521.717765, "current_power": "4915"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7f9eb33c-f2fc-40c3-917a-ee92af7cfe73",
                    out: false,
                    createAt: "2021-01-18 16:12:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957522.830389, "current_power": "3215"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "45702ab3-ec47-4154-b71d-b24c86e9c167",
                    out: false,
                    createAt: "2021-01-18 16:12:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957523.897428, "current_power": "2110"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b5641136-40ca-425c-898c-50e794624720",
                    out: false,
                    createAt: "2021-01-18 16:12:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957524.936382, "current_power": "1465"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4caebc7c-ea62-4014-a79d-664108326cc0",
                    out: false,
                    createAt: "2021-01-18 16:12:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957526.002627, "current_power": "1055"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a9dc83c0-ccfd-4ade-811f-39a45ad069cf",
                    out: false,
                    createAt: "2021-01-18 16:12:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957527.054693, "current_power": "665"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f43ce5c8-e4ab-4554-a683-fc09b172ecfa",
                    out: false,
                    createAt: "2021-01-18 16:12:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957528.094168, "current_power": "560"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1af83b4e-55aa-4718-b126-71f0776817b0",
                    out: false,
                    createAt: "2021-01-18 16:12:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957529.17171, "current_power": "490"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e1a6e9f4-c92b-40bd-ad47-6c01a29c4462",
                    out: false,
                    createAt: "2021-01-18 16:12:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957530.206826, "current_power": "450"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5e9cabc1-54c7-41b8-9f28-395fa4184d20",
                    out: false,
                    createAt: "2021-01-18 16:12:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957531.260528, "current_power": "445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a58bf00c-c145-40d4-94e2-be965e7851cf",
                    out: false,
                    createAt: "2021-01-18 16:12:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957532.297789, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5cb8b8a6-030a-49f9-bd63-c8dffe2e0fbf",
                    out: false,
                    createAt: "2021-01-18 16:12:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957533.323786, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "65638c2a-bb3b-45db-9571-56091ae01691",
                    out: false,
                    createAt: "2021-01-18 16:12:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957534.368619, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "54d90e32-59b4-422e-8f79-929375c03859",
                    out: false,
                    createAt: "2021-01-18 16:12:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957535.429355, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "623fba6f-6b09-4dea-ada8-548a8c2f1802",
                    out: false,
                    createAt: "2021-01-18 16:12:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957536.463063, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "16b8fd31-f106-45af-8762-fd7c39fedb6e",
                    out: false,
                    createAt: "2021-01-18 16:12:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957538.332244, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1f09de46-25ab-4ee8-8db7-b38e53531b03",
                    out: false,
                    createAt: "2021-01-18 16:12:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957539.37076, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9be2ee60-e0ce-4c96-bc62-7c6cb950d93e",
                    out: false,
                    createAt: "2021-01-18 16:12:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957540.397699, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "81ec4ec9-ee71-474e-bdd1-cc780f2e4743",
                    out: false,
                    createAt: "2021-01-18 16:12:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957541.467441, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0453f8c6-4aa0-4635-b6f9-8f4c6958ac64",
                    out: false,
                    createAt: "2021-01-18 16:12:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957542.50757, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "961f1186-9292-490e-a5ca-11cb9bf72a0f",
                    out: false,
                    createAt: "2021-01-18 16:12:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957543.612294, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9614a65c-9bbd-4880-ae3e-ae5221406ddd",
                    out: false,
                    createAt: "2021-01-18 16:12:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957544.675564, "current_power": "365"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "52097915-4dfb-4a1f-846b-ec44cf4836d3",
                    out: false,
                    createAt: "2021-01-18 16:12:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957545.702423, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5e06faa8-6a09-4bf7-9a3c-c3461938240e",
                    out: false,
                    createAt: "2021-01-18 16:12:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957546.747996, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "79ec7fd8-3281-4b3b-b466-6001126f2003",
                    out: false,
                    createAt: "2021-01-18 16:12:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957547.795493, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5e7cc9f6-4c09-49f7-abeb-55d3ab45d3d2",
                    out: false,
                    createAt: "2021-01-18 16:12:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957548.882391, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dcbdded2-ff04-4bd9-9c95-6f883bc027bb",
                    out: false,
                    createAt: "2021-01-18 16:12:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957549.976581, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "caecd445-462e-4301-81af-709b093851a7",
                    out: false,
                    createAt: "2021-01-18 16:12:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957551.011224, "current_power": "365"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "73c23e69-53e7-43b2-983e-163259985a1f",
                    out: false,
                    createAt: "2021-01-18 16:12:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957552.062779, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "63a7b1c0-8dbe-4351-b4d9-cd26380d3f03",
                    out: false,
                    createAt: "2021-01-18 16:12:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957553.570909, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dec354c2-4670-43f3-85df-74c1f5093ca5",
                    out: false,
                    createAt: "2021-01-18 16:12:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957554.598884, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a059741f-0a1d-4d0a-9b89-56591090dbdd",
                    out: false,
                    createAt: "2021-01-18 16:12:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957555.622402, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "85e47a09-a9a6-42fe-9d2d-81d0f31ce5cd",
                    out: false,
                    createAt: "2021-01-18 16:12:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957556.657039, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ca78dd3d-dd36-49e4-bdd4-e5509a5eabe0",
                    out: false,
                    createAt: "2021-01-18 16:12:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957557.957137, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4f902f1a-796f-45e6-9e00-fbe8296d0466",
                    out: false,
                    createAt: "2021-01-18 16:12:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957558.996928, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2236669c-2818-4c55-9f89-c5e19bdf262e",
                    out: false,
                    createAt: "2021-01-18 16:12:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957560.022356, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a50418d9-5f80-4de5-b87e-08c74b0d4ed0",
                    out: false,
                    createAt: "2021-01-18 16:12:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957561.056716, "current_power": "209985"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9a7a2df0-3037-4861-a73a-86853cc18177",
                    out: false,
                    createAt: "2021-01-18 16:12:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957562.379423, "current_power": "81225"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a91863f3-2645-4509-9a65-c55791d22d4f",
                    out: false,
                    createAt: "2021-01-18 16:12:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957563.61478, "current_power": "81225"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2fa92e1d-586e-479e-83dc-beb317511264",
                    out: false,
                    createAt: "2021-01-18 16:12:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957564.85779, "current_power": "81225"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dafc6cb8-a8e4-4f45-a7e1-8b869de12fd5",
                    out: false,
                    createAt: "2021-01-18 16:12:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957566.684705, "current_power": "12055"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d585c54c-e13b-4c8b-ac60-a8a8a38734c3",
                    out: false,
                    createAt: "2021-01-18 16:12:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957568.204052, "current_power": "7630"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "57d81a04-afe6-4ea4-bbdc-fe1aff5cf123",
                    out: false,
                    createAt: "2021-01-18 16:12:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957570.459574, "current_power": "2120"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "25d2edec-3fa4-439f-86cc-d8bceb63d5c0",
                    out: false,
                    createAt: "2021-01-18 16:12:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957571.48092, "current_power": "2120"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "55920b9a-5f93-4bca-b82b-da532ad5d29a",
                    out: false,
                    createAt: "2021-01-18 16:12:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957572.501487, "current_power": "2120"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "daf6844e-c22d-413e-83e6-49646738f845",
                    out: false,
                    createAt: "2021-01-18 16:12:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957573.7697, "current_power": "795"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a53dfbdb-ef6b-4902-bd1d-7dc6fc763228",
                    out: false,
                    createAt: "2021-01-18 16:12:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957574.959272, "current_power": "655"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f433781e-2a33-47a2-ab6f-a7c7d3368813",
                    out: false,
                    createAt: "2021-01-18 16:12:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957575.991787, "current_power": "560"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3587bba5-c656-4cc2-b3f7-3e08883d0806",
                    out: false,
                    createAt: "2021-01-18 16:12:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957578.143628, "current_power": "445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "46dac6a4-1e3a-414c-b658-752f7f3fce4b",
                    out: false,
                    createAt: "2021-01-18 16:12:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957579.202257, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c3723b97-690a-41fb-a125-6557bb7b47f9",
                    out: false,
                    createAt: "2021-01-18 16:12:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957580.235458, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c37d5518-c526-4133-b4fb-bb8279093e63",
                    out: false,
                    createAt: "2021-01-18 16:13:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957581.317223, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e2e77bdd-fd0f-4773-8f74-0b145668a210",
                    out: false,
                    createAt: "2021-01-18 16:13:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957582.355276, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "433825fc-6171-46df-83b6-51b140894bea",
                    out: false,
                    createAt: "2021-01-18 16:13:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957583.400184, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5162a8ff-1d34-4c45-ab5d-f5dddf66a420",
                    out: false,
                    createAt: "2021-01-18 16:13:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957584.440451, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b62ce472-a92d-450a-a0a2-582a3c7afc1a",
                    out: false,
                    createAt: "2021-01-18 16:13:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957585.47685, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "816139cd-f3ba-4928-bd0e-f141802b02e6",
                    out: false,
                    createAt: "2021-01-18 16:13:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957586.639369, "current_power": "70460"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4da2dd9f-a7e0-4a50-bc60-fd67ce0bdf0b",
                    out: false,
                    createAt: "2021-01-18 16:13:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957588.140111, "current_power": "101820"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d119077a-c362-4d9d-b4c0-36beb50debe0",
                    out: false,
                    createAt: "2021-01-18 16:13:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957589.171812, "current_power": "120065"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1fe773d2-1c6f-43f2-a22b-74eeb8b7f1e4",
                    out: false,
                    createAt: "2021-01-18 16:13:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957590.202506, "current_power": "120065"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8bc30359-424c-4e01-a527-480f87e31eef",
                    out: false,
                    createAt: "2021-01-18 16:13:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957591.259597, "current_power": "120065"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "be4480a1-5cf8-47dd-a2c2-ee34c4ba8b0e",
                    out: false,
                    createAt: "2021-01-18 16:13:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957592.29471, "current_power": "114135"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e0618f4b-340b-4e3d-beee-43a5bf4383c2",
                    out: false,
                    createAt: "2021-01-18 16:13:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957593.512048, "current_power": "53360"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "02188b1b-4d76-4d93-96c4-d43b230b9626",
                    out: false,
                    createAt: "2021-01-18 16:13:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957594.577129, "current_power": "41615"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "34ed9050-ac6b-474e-a96a-39481f9f97c4",
                    out: false,
                    createAt: "2021-01-18 16:13:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957595.840124, "current_power": "35100"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "86bb094c-b90e-458b-a75b-dcd7f4ab6ca9",
                    out: false,
                    createAt: "2021-01-18 16:13:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957596.867552, "current_power": "30945"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b6b4a777-2dd3-48d4-9500-2e3d73488437",
                    out: false,
                    createAt: "2021-01-18 16:13:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957598.110833, "current_power": "37705"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f2424b13-af71-4a95-8ff9-a4614f98f3dd",
                    out: false,
                    createAt: "2021-01-18 16:13:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957599.148986, "current_power": "415655"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "71edfd02-2f69-49b9-9e52-575c2b671d13",
                    out: false,
                    createAt: "2021-01-18 16:13:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957600.192858, "current_power": "652890"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4b3c7d74-0297-4d33-b5e2-7be727d143c3",
                    out: false,
                    createAt: "2021-01-18 16:13:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957601.22744, "current_power": "813420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2abf480f-595f-48b4-af34-77c2e1f2201f",
                    out: false,
                    createAt: "2021-01-18 16:13:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957602.267178, "current_power": "708655"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fce427ba-c4ae-40fd-b1ee-32b6875ddbfa",
                    out: false,
                    createAt: "2021-01-18 16:13:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957603.312241, "current_power": "440270"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ddacb034-2207-4159-b613-8186c6c9c540",
                    out: false,
                    createAt: "2021-01-18 16:13:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957604.342319, "current_power": "273590"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c1ac88c8-e190-4b00-81ba-8b6a30c8eae1",
                    out: false,
                    createAt: "2021-01-18 16:13:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957605.367832, "current_power": "292020"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "76069107-cad4-4f10-98f2-1bec51fa97f8",
                    out: false,
                    createAt: "2021-01-18 16:13:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957606.474529, "current_power": "588960"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "464482f3-c75a-4aa6-a793-660ccaefb17b",
                    out: false,
                    createAt: "2021-01-18 16:13:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957607.526006, "current_power": "773915"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "468fcbae-1092-485e-9d02-62bae6bad618",
                    out: false,
                    createAt: "2021-01-18 16:13:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957608.849334, "current_power": "888780"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3bb8ad76-9b2e-4378-a4d8-3f9ae518eb25",
                    out: false,
                    createAt: "2021-01-18 16:13:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957609.896491, "current_power": "959995"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "91dc9dd1-7f86-48f2-b6ea-5696f2a25264",
                    out: false,
                    createAt: "2021-01-18 16:13:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957611.316348, "current_power": "779175"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9bd1f2de-0c9b-4803-9580-3786d295a0d3",
                    out: false,
                    createAt: "2021-01-18 16:13:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957612.338275, "current_power": "892350"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5aa726fb-6df1-4e33-9cfb-9423454336f9",
                    out: false,
                    createAt: "2021-01-18 16:13:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957613.363733, "current_power": "961990"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2e8b6db5-e4b7-4519-98c4-e6bb75dde198",
                    out: false,
                    createAt: "2021-01-18 16:13:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957614.416595, "current_power": "961990"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d84f1e0d-41d7-49c0-858f-2278038a19c6",
                    out: false,
                    createAt: "2021-01-18 16:13:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957615.456839, "current_power": "1048350"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "47cd3f44-ed5f-46c7-b9b3-ce22c8f6b2cc",
                    out: false,
                    createAt: "2021-01-18 16:13:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957616.521843, "current_power": "1058815"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3ec35455-f84f-4a2f-83cd-5d4c35d4c84c",
                    out: false,
                    createAt: "2021-01-18 16:13:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957617.546516, "current_power": "1065390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c6270c37-e879-4974-9645-e34d1896fb32",
                    out: false,
                    createAt: "2021-01-18 16:13:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957618.58697, "current_power": "1069540"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3a802b5a-c8bb-4663-ad6f-ed7a6d22b10b",
                    out: false,
                    createAt: "2021-01-18 16:13:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957619.610781, "current_power": "1072415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6bf7cbdd-23e8-402f-802b-7d6267026bb2",
                    out: false,
                    createAt: "2021-01-18 16:13:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957620.632762, "current_power": "1074510"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "784285b4-0b27-4b13-9534-b760febe0400",
                    out: false,
                    createAt: "2021-01-18 16:13:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957621.693277, "current_power": "1075915"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "36127ee7-21e6-4733-a857-190d47d0d125",
                    out: false,
                    createAt: "2021-01-18 16:13:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957622.956624, "current_power": "1076720"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "752f51ad-318f-405e-8d10-f6369e4af6dc",
                    out: false,
                    createAt: "2021-01-18 16:13:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957624.040296, "current_power": "721235"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ad7ec2ba-2912-402e-99fb-25481a6fa7c7",
                    out: false,
                    createAt: "2021-01-18 16:13:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957625.193461, "current_power": "448090"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "40de9bda-fbf3-4e6b-83b8-67a8e9dbbed6",
                    out: false,
                    createAt: "2021-01-18 16:13:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957626.284719, "current_power": "278430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "53e80bc4-69d5-43f4-b16e-9cd4125388a1",
                    out: false,
                    createAt: "2021-01-18 16:13:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957627.324052, "current_power": "178485"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "aa7695d7-18f4-41ae-a0a4-4ad76fa7d3c5",
                    out: false,
                    createAt: "2021-01-18 16:13:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957628.344127, "current_power": "120450"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "86d6dc48-b6f8-4a94-9576-a4cee569de64",
                    out: false,
                    createAt: "2021-01-18 16:13:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957629.448978, "current_power": "84850"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d8f4f58d-694e-481f-b28b-d0d903c0bb85",
                    out: false,
                    createAt: "2021-01-18 16:13:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957630.497801, "current_power": "46845"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "017fb474-ca18-45e8-b615-bc5de1f7b304",
                    out: false,
                    createAt: "2021-01-18 16:13:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957631.538743, "current_power": "155225"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "813eaf1d-8634-48b2-81db-79c348a89583",
                    out: false,
                    createAt: "2021-01-18 16:13:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957632.597108, "current_power": "491050"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "394455a0-103d-4f52-9ee1-ca5857558a3c",
                    out: false,
                    createAt: "2021-01-18 16:13:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957633.712952, "current_power": "400340"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6c14b031-87f6-4bec-9d90-e0ccadabf9d4",
                    out: false,
                    createAt: "2021-01-18 16:13:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957635.406446, "current_power": "248835"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "67c580e2-14eb-4680-97b1-9eb184a7cdbc",
                    out: false,
                    createAt: "2021-01-18 16:13:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957636.631079, "current_power": "544425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2099157d-a00c-4ddb-b99c-f59f6d251813",
                    out: false,
                    createAt: "2021-01-18 16:13:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957637.702241, "current_power": "617140"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d16f411c-ab3f-406b-992e-565ad1535255",
                    out: false,
                    createAt: "2021-01-18 16:13:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957638.777588, "current_power": "436245"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "93f3943b-eadd-42be-9c51-5589a7ffa110",
                    out: false,
                    createAt: "2021-01-18 16:13:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957639.912172, "current_power": "322025"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "104ca34e-e378-4202-b420-23bfaec7bda6",
                    out: false,
                    createAt: "2021-01-18 16:14:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957640.934114, "current_power": "249205"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d163041c-6003-4102-99a9-40f82fda84e1",
                    out: false,
                    createAt: "2021-01-18 16:14:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957641.963089, "current_power": "442790"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "30469e89-41f8-49a9-9cb8-3b61e7f65623",
                    out: false,
                    createAt: "2021-01-18 16:14:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957642.984509, "current_power": "648260"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3c0ecd16-880b-4532-af01-74570b243d76",
                    out: false,
                    createAt: "2021-01-18 16:14:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957644.01291, "current_power": "398420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ea41cfd2-001c-4fbf-b80c-24d4650aa7d7",
                    out: false,
                    createAt: "2021-01-18 16:14:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957645.280361, "current_power": "255910"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "77b3ed77-6f77-446a-9cec-ea2ed8bfc24d",
                    out: false,
                    createAt: "2021-01-18 16:14:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957646.635321, "current_power": "167995"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a53cc65a-af78-4516-bc6c-84d784f1efb8",
                    out: false,
                    createAt: "2021-01-18 16:14:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957647.681777, "current_power": "520605"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bbc0b6ad-24f1-45ee-a898-71accf38e83e",
                    out: false,
                    createAt: "2021-01-18 16:14:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957648.747235, "current_power": "718145"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e419dc8a-62bb-4ad9-af9f-91cd2d666cdd",
                    out: false,
                    createAt: "2021-01-18 16:14:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957649.933575, "current_power": "842820"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3ba6c4f4-5977-4f16-aa0d-3d424196f6b1",
                    out: false,
                    createAt: "2021-01-18 16:14:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957650.963056, "current_power": "933135"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b7cf8754-491f-4db1-9b89-fa5e94981f5f",
                    out: false,
                    createAt: "2021-01-18 16:14:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957652.030536, "current_power": "776360"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c2e5bb17-2cd3-4c39-9914-149ac6cff712",
                    out: false,
                    createAt: "2021-01-18 16:14:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957653.072337, "current_power": "482340"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "75c0e3d9-c90c-4859-98f6-e6099308b107",
                    out: false,
                    createAt: "2021-01-18 16:14:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957654.111539, "current_power": "299655"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b7f8e52d-ac7e-43ea-ac21-c845d98cb844",
                    out: false,
                    createAt: "2021-01-18 16:14:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957655.632627, "current_power": "404980"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "59a28959-98fc-4407-accb-7c6c8aef5b59",
                    out: false,
                    createAt: "2021-01-18 16:14:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957656.660335, "current_power": "660010"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4db56736-5201-4efd-8d8b-51c20be097a4",
                    out: false,
                    createAt: "2021-01-18 16:14:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957658.001537, "current_power": "915980"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ca6b2bb7-2101-4b6d-978d-f5d905e47a82",
                    out: false,
                    createAt: "2021-01-18 16:14:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957659.026875, "current_power": "976985"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "770f986d-4936-4b5f-8d6a-ca6b8993d7b2",
                    out: false,
                    createAt: "2021-01-18 16:14:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957660.067048, "current_power": "795545"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3a7daadd-1e07-467f-9ec4-bdba03f2b7d7",
                    out: false,
                    createAt: "2021-01-18 16:14:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957661.098395, "current_power": "911475"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c19f3456-8c9c-47b7-a64d-b1cd8581b303",
                    out: false,
                    createAt: "2021-01-18 16:14:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957662.125484, "current_power": "979890"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "74d5f4f7-d6c6-41ea-acac-364b6e4e1d43",
                    out: false,
                    createAt: "2021-01-18 16:14:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957663.156828, "current_power": "1022720"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1d0dabf1-ff6a-4418-82ce-1890eb8c6986",
                    out: false,
                    createAt: "2021-01-18 16:14:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957664.183747, "current_power": "1049755"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cfb54989-e077-440e-9618-b4e56e2e4135",
                    out: false,
                    createAt: "2021-01-18 16:14:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957665.350167, "current_power": "1066820"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b42828db-cb6a-491e-b7d4-550399230a9e",
                    out: false,
                    createAt: "2021-01-18 16:14:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957666.408714, "current_power": "1077285"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e8fb1e7e-e2d5-4940-9015-913072f1902a",
                    out: false,
                    createAt: "2021-01-18 16:14:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957667.481173, "current_power": "1083805"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0d79715c-0762-4bd5-a705-dda84725ecf0",
                    out: false,
                    createAt: "2021-01-18 16:14:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957668.534071, "current_power": "1087840"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ae8c0e92-5413-43e3-9246-be1529c1c0b9",
                    out: false,
                    createAt: "2021-01-18 16:14:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957669.560656, "current_power": "1090415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1a786324-9bcb-4618-9913-b58891920d56",
                    out: false,
                    createAt: "2021-01-18 16:14:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957671.16808, "current_power": "1089870"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "09193c8d-fde6-4969-b95b-cb6a50422a9f",
                    out: false,
                    createAt: "2021-01-18 16:14:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957672.245375, "current_power": "1092135"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "76339ef0-f88b-4d5e-8058-00064deb6ed5",
                    out: false,
                    createAt: "2021-01-18 16:14:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957673.266507, "current_power": "1093685"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d70fcc28-9bec-47ce-97a8-2b430399f5c3",
                    out: false,
                    createAt: "2021-01-18 16:14:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957674.426095, "current_power": "1094915"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ccae78c5-098c-40cc-ae91-ac917ce771f4",
                    out: false,
                    createAt: "2021-01-18 16:14:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957675.450835, "current_power": "1094915"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b485e3de-e7c1-48d3-aaae-67f0305f1ff7",
                    out: false,
                    createAt: "2021-01-18 16:14:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957676.471437, "current_power": "1096515"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b30c75f1-8819-40ee-a667-41afbab7ca7e",
                    out: false,
                    createAt: "2021-01-18 16:14:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957677.53328, "current_power": "1096785"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "74beb6e7-b224-4e89-8ac5-a4d30d7ace26",
                    out: false,
                    createAt: "2021-01-18 16:14:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957678.576882, "current_power": "1096805"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1ea50da5-ee1b-4c37-9f21-e726963eab81",
                    out: false,
                    createAt: "2021-01-18 16:14:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957679.609347, "current_power": "1096730"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e32d3e17-ecd6-44dc-8142-edaba0fd08f8",
                    out: false,
                    createAt: "2021-01-18 16:14:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957680.640332, "current_power": "1096815"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "117d79a6-76e3-4d4f-b1be-7885334efd1f",
                    out: false,
                    createAt: "2021-01-18 16:14:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957681.663507, "current_power": "1097055"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5d86a449-ac66-4d1f-a1fd-6a1f0410e9e4",
                    out: false,
                    createAt: "2021-01-18 16:14:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957682.709757, "current_power": "1097190"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dace023d-0062-4e30-ae92-468436053fb8",
                    out: false,
                    createAt: "2021-01-18 16:14:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957683.814365, "current_power": "1097130"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b194c5fc-9d25-4e03-bd78-a044a094d3d7",
                    out: false,
                    createAt: "2021-01-18 16:14:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957684.839185, "current_power": "1096635"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c16555ba-867b-4349-a9ef-c3394b3b6d62",
                    out: false,
                    createAt: "2021-01-18 16:14:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957685.883588, "current_power": "1096450"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "90f5d0d7-2a50-4f27-8495-ea9a812bfdec",
                    out: false,
                    createAt: "2021-01-18 16:14:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957687.024317, "current_power": "1097185"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "19c4265b-dd45-4cc2-854e-358473731bc8",
                    out: false,
                    createAt: "2021-01-18 16:14:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957689.066022, "current_power": "1097510"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5cf003b7-a7ed-42bd-9641-7f12ad9c7102",
                    out: false,
                    createAt: "2021-01-18 16:14:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957690.09205, "current_power": "1097550"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "28a72e45-1795-4e7d-9850-d3440d516e05",
                    out: false,
                    createAt: "2021-01-18 16:14:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957691.129782, "current_power": "1097905"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2615ea3d-d87a-4f5c-9342-ac6d6b292762",
                    out: false,
                    createAt: "2021-01-18 16:14:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957692.645547, "current_power": "1094740"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1dee8fee-7faa-4213-9d8c-63636724a43f",
                    out: false,
                    createAt: "2021-01-18 16:14:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957693.917959, "current_power": "1095755"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "88e332af-0ec0-40ac-9064-19f254f5c5f2",
                    out: false,
                    createAt: "2021-01-18 16:14:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957695.298829, "current_power": "1096190"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a48b0f04-0486-4cbc-b4fd-f23c6bba0f87",
                    out: false,
                    createAt: "2021-01-18 16:14:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957696.357117, "current_power": "1095965"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "83efa713-679a-4f14-bb79-efa19c70e6c6",
                    out: false,
                    createAt: "2021-01-18 16:14:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957697.436219, "current_power": "1095875"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fffbfb08-0a2f-47fb-afad-01aaf585b66e",
                    out: false,
                    createAt: "2021-01-18 16:14:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957698.756919, "current_power": "1095175"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6e10dce7-3695-4876-8ace-c58764022a4b",
                    out: false,
                    createAt: "2021-01-18 16:14:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957700.147059, "current_power": "1094675"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "83c5f1f7-8c7c-4862-bbd4-bd8ae962dd0c",
                    out: false,
                    createAt: "2021-01-18 16:15:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957701.170181, "current_power": "1094840"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4a7f5b64-7c9c-4242-82e0-1a2b26d89717",
                    out: false,
                    createAt: "2021-01-18 16:15:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957702.207363, "current_power": "937795"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f6bb5052-82ab-4666-9368-33c236fdcc58",
                    out: false,
                    createAt: "2021-01-18 16:15:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957703.28464, "current_power": "582580"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "17dfea74-5acd-490c-8e7a-2c2114c8aad8",
                    out: false,
                    createAt: "2021-01-18 16:15:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957704.435579, "current_power": "361960"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fef49f5f-e641-4caf-b488-fb77d7204787",
                    out: false,
                    createAt: "2021-01-18 16:15:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957705.457059, "current_power": "225005"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5263391f-0491-406c-9046-4594d4490997",
                    out: false,
                    createAt: "2021-01-18 16:15:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957706.477302, "current_power": "149285"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3b0b43d9-d28c-4887-85a2-2a3ff326a89b",
                    out: false,
                    createAt: "2021-01-18 16:15:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957708.69793, "current_power": "73225"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "73ec116f-747e-45c6-be34-be1981a7344a",
                    out: false,
                    createAt: "2021-01-18 16:15:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957709.721901, "current_power": "53825"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c11cce7e-772a-4b88-986e-56e00f1bd001",
                    out: false,
                    createAt: "2021-01-18 16:15:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957710.765241, "current_power": "39555"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8174b5f1-d45a-40db-b36f-4636164eca92",
                    out: false,
                    createAt: "2021-01-18 16:15:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957711.844504, "current_power": "342995"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c4509e3e-8ea6-45c8-84d6-75af6cafd9b2",
                    out: false,
                    createAt: "2021-01-18 16:15:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957712.925637, "current_power": "614160"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "24c2028f-0726-448f-9a70-94f857d24dd3",
                    out: false,
                    createAt: "2021-01-18 16:15:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957713.991397, "current_power": "510165"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bd562285-1268-4489-b35d-0abfeecc48a5",
                    out: false,
                    createAt: "2021-01-18 16:15:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957715.031739, "current_power": "317025"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2448ad5d-c758-48bb-bdc0-9405819ae254",
                    out: false,
                    createAt: "2021-01-18 16:15:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957716.09506, "current_power": "339465"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4a660dc6-c1e3-4fb0-8def-461001f1990a",
                    out: false,
                    createAt: "2021-01-18 16:15:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957717.266531, "current_power": "611470"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b199ce78-5261-45a1-8a12-d803e4e63f48",
                    out: false,
                    createAt: "2021-01-18 16:15:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957718.339178, "current_power": "607485"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6853ca6e-af13-467d-bb74-05b6f8ecf333",
                    out: false,
                    createAt: "2021-01-18 16:15:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957719.380536, "current_power": "377455"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3a3fccaa-6597-4777-a65c-519c92b5001c",
                    out: false,
                    createAt: "2021-01-18 16:15:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957720.439734, "current_power": "234605"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4a25e1ca-0d9e-4bc9-ad05-ac10129629e8",
                    out: false,
                    createAt: "2021-01-18 16:15:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957721.490601, "current_power": "226650"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6483c2f1-fe61-46e9-afff-e630038bf893",
                    out: false,
                    createAt: "2021-01-18 16:15:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957722.52995, "current_power": "541640"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5cf95a4e-fd56-4ed9-adbe-a07a3974d729",
                    out: false,
                    createAt: "2021-01-18 16:15:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957723.65492, "current_power": "483995"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6b35d4cf-8999-454a-bafd-118d9506dc47",
                    out: false,
                    createAt: "2021-01-18 16:15:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957724.682729, "current_power": "300775"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "45ad719f-2f56-4f3f-804d-ee183c3141c6",
                    out: false,
                    createAt: "2021-01-18 16:15:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957725.709543, "current_power": "186945"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a2789187-2620-4ab4-a1bd-b344039f6e87",
                    out: false,
                    createAt: "2021-01-18 16:15:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957726.751902, "current_power": "116290"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8698973d-22b4-4c5a-9874-0cd57d7f6240",
                    out: false,
                    createAt: "2021-01-18 16:15:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957727.794223, "current_power": "421920"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "047c6477-4ecf-40d1-8674-e735663652ff",
                    out: false,
                    createAt: "2021-01-18 16:15:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957728.847632, "current_power": "544210"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "db7cd2a4-e41b-46ef-ab27-6aec78fca485",
                    out: false,
                    createAt: "2021-01-18 16:15:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957729.970092, "current_power": "338160"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bd40dbaa-6714-4d33-aaf8-9cb3d0cc36b9",
                    out: false,
                    createAt: "2021-01-18 16:15:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957731.230939, "current_power": "130740"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a39d4e70-d848-4227-b35b-81c9d2e5d415",
                    out: false,
                    createAt: "2021-01-18 16:15:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957732.26701, "current_power": "312240"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8b8ff478-0077-4c12-8ceb-6cb558aec385",
                    out: false,
                    createAt: "2021-01-18 16:15:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957733.306978, "current_power": "594800"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f43ccf08-da25-4b0f-97f3-7ef00c8a3cb1",
                    out: false,
                    createAt: "2021-01-18 16:15:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957734.330895, "current_power": "393410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e4253cf9-a515-428d-97d6-f72a5c936450",
                    out: false,
                    createAt: "2021-01-18 16:15:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957735.373394, "current_power": "244500"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8e12a5c2-a5b0-41d1-9ee3-8c39720005e8",
                    out: false,
                    createAt: "2021-01-18 16:15:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957736.472595, "current_power": "244500"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "869319d6-c202-49f0-86f4-a3a3e8c7f178",
                    out: false,
                    createAt: "2021-01-18 16:15:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957737.49595, "current_power": "186900"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "033446e1-ba00-49aa-a582-20de3a5f076f",
                    out: false,
                    createAt: "2021-01-18 16:15:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957738.564669, "current_power": "437730"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bc408dad-205f-4039-9a2d-d7cff5e597ad",
                    out: false,
                    createAt: "2021-01-18 16:15:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957739.62222, "current_power": "272020"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8122a2dc-a953-4acb-bdcd-845aeceac8e3",
                    out: false,
                    createAt: "2021-01-18 16:15:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957740.672815, "current_power": "169125"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f63825bb-a550-4d8c-8ae7-9ab2ef9950b9",
                    out: false,
                    createAt: "2021-01-18 16:15:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957741.696406, "current_power": "105200"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "110c254b-caad-4147-a989-3e9f679ec95f",
                    out: false,
                    createAt: "2021-01-18 16:15:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957742.791217, "current_power": "65490"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7827a016-6d3b-410d-8fc8-a05afb15df6b",
                    out: false,
                    createAt: "2021-01-18 16:15:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957743.813011, "current_power": "233570"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "138de5ec-135a-4b1c-9588-5c4c934db4c3",
                    out: false,
                    createAt: "2021-01-18 16:15:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957744.837523, "current_power": "145220"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "604e1807-52ac-4498-9906-902409b754e3",
                    out: false,
                    createAt: "2021-01-18 16:15:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957745.959291, "current_power": "90325"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9c64fef3-0b76-4512-9217-d322eb7d122a",
                    out: false,
                    createAt: "2021-01-18 16:15:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957746.986165, "current_power": "56265"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1962adc7-7d20-4898-9804-11d1fb6681e7",
                    out: false,
                    createAt: "2021-01-18 16:15:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957749.4277, "current_power": "13820"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "29c58e7c-0724-44c9-b540-0d37a2f3a9cf",
                    out: false,
                    createAt: "2021-01-18 16:15:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957750.5126, "current_power": "8745"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "164c0da4-4c4d-403d-b18f-58c5b5790138",
                    out: false,
                    createAt: "2021-01-18 16:15:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957751.546564, "current_power": "5575"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "52cb6d69-78f1-4d95-ab1c-c6f3e2dcd01d",
                    out: false,
                    createAt: "2021-01-18 16:15:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957752.627972, "current_power": "3635"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6a270933-b678-4c6a-b710-76a27d1b21b0",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957753.673023, "current_power": "2385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e79db346-c5b3-4b2b-a1a7-a8773a73df5c",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957754.900036, "current_power": "1640"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fcd7e10a-8ef2-446c-b16b-7c12bc32cd93",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957755.961179, "current_power": "1170"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "78972988-9d4c-45dd-9833-6f9e7994818c",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957757.035529, "current_power": "870"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9d12b2cb-2240-4eb0-b8b6-9580b05ebce7",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957758.280487, "current_power": "575"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "600581d0-8bb2-4c92-8214-510b91689986",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957759.317191, "current_power": "500"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7f1c8993-7632-4257-a859-aa9c4c068caf",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957760.3682, "current_power": "470"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6434a849-eebf-4517-ba52-b7b3dd29aad9",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957761.395225, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6cebcfd8-d17d-4a78-8da3-24f5357538f3",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957762.420608, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2a5a2c66-3d52-4955-98e8-4e798e597658",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957763.446924, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "67879cbd-72da-41a5-bdd7-9ec5bc3901ea",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957764.675984, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "abbfa5ba-b133-4f15-81ca-2f696b9c522a",
                    out: false,
                    createAt: "2021-01-18 16:16:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957766.148225, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ef973c40-316b-44cc-8cdd-1501fd5b928e",
                    out: false,
                    createAt: "2021-01-18 16:16:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957767.19577, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7366f691-93f5-4f5c-972a-0d602492b8e8",
                    out: false,
                    createAt: "2021-01-18 16:16:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957768.312668, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "abc6fa45-1378-4fb2-8bb0-00957621bc60",
                    out: false,
                    createAt: "2021-01-18 16:16:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957769.345885, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "69c62a23-ebbc-4174-9180-9b6b5efd44e2",
                    out: false,
                    createAt: "2021-01-18 16:16:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957770.427955, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8fba9fbe-5579-4131-9561-b73026b44f13",
                    out: false,
                    createAt: "2021-01-18 16:16:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957771.524178, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f5cbc662-37b4-4c7c-bfa7-b92975f93ce8",
                    out: false,
                    createAt: "2021-01-18 16:16:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957772.572006, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "837d2418-0a84-430b-8a34-5a1334576876",
                    out: false,
                    createAt: "2021-01-18 16:16:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957773.596921, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "50a042a5-98b6-4589-ac56-f930011caf66",
                    out: false,
                    createAt: "2021-01-18 16:16:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957774.631531, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4d65e063-27b4-484d-a916-17243a8e9c4d",
                    out: false,
                    createAt: "2021-01-18 16:16:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957775.653549, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bb92ce84-e667-463f-a3c4-3f2532953443",
                    out: false,
                    createAt: "2021-01-18 16:16:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957776.69483, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5b50776a-a3c9-42b9-b853-049542ccc615",
                    out: false,
                    createAt: "2021-01-18 16:16:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957777.957959, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fdec3e9c-403c-48bd-8219-4f3c33a9e9c1",
                    out: false,
                    createAt: "2021-01-18 16:16:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957779.355916, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f86c3d56-b3e3-4e57-a9b5-75deb01cff9c",
                    out: false,
                    createAt: "2021-01-18 16:16:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957780.439527, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "931eb235-3167-4905-afbd-edbd4eefa2a6",
                    out: false,
                    createAt: "2021-01-18 16:16:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957781.480162, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9c8b6b15-2899-497c-a027-c1c2c126f8dc",
                    out: false,
                    createAt: "2021-01-18 16:16:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957782.550634, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9d31e9c2-84ec-4157-b63a-285554cc8ce1",
                    out: false,
                    createAt: "2021-01-18 16:16:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957783.600877, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "142f9def-96d2-4308-a199-c5915de22c8d",
                    out: false,
                    createAt: "2021-01-18 16:16:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957784.6471, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c39d459f-94d0-4084-a371-4d683af4f806",
                    out: false,
                    createAt: "2021-01-18 16:16:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957785.686735, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f8c435c3-c6b7-4bb8-969a-dd006fceb5fc",
                    out: false,
                    createAt: "2021-01-18 16:16:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957786.760644, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "11ff0259-7379-43a2-9c7c-f453bca260b7",
                    out: false,
                    createAt: "2021-01-18 16:16:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957787.786301, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0639e835-96d2-4e89-931b-8a567bb343e9",
                    out: false,
                    createAt: "2021-01-18 16:16:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957788.835567, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "934523d4-4c90-4b03-8283-f1e3196cc38e",
                    out: false,
                    createAt: "2021-01-18 16:16:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957790.030052, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b12c2cc6-0ab6-400b-b680-ebc4c9991ce7",
                    out: false,
                    createAt: "2021-01-18 16:16:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957791.114894, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "db627871-1c1b-482b-a339-5e531d33e372",
                    out: false,
                    createAt: "2021-01-18 16:16:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957792.139001, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2dcfa4ed-c6b1-4073-8f28-e9b5329c1640",
                    out: false,
                    createAt: "2021-01-18 16:16:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957793.180698, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f8acf35a-6c78-43f6-b86d-915eddc643ea",
                    out: false,
                    createAt: "2021-01-18 16:16:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957794.282513, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "122b840d-933d-41b9-abe9-b6f3c4684ed0",
                    out: false,
                    createAt: "2021-01-18 16:16:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957796.664618, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5afe398e-4d2c-4f3e-8553-a9dae720818b",
                    out: false,
                    createAt: "2021-01-18 16:16:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957797.708291, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "86a28ae9-36c2-4ccc-81fd-cc9afbc22f9c",
                    out: false,
                    createAt: "2021-01-18 16:16:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957798.785978, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bd26e1a5-3f75-41ea-87f3-f1a9510c6c0e",
                    out: false,
                    createAt: "2021-01-18 16:16:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957799.820891, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "66e0b434-26be-468f-b99b-5ac9fa50dcfb",
                    out: false,
                    createAt: "2021-01-18 16:16:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957800.857672, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5a7e4776-6b17-411c-9647-1ccd0bfca723",
                    out: false,
                    createAt: "2021-01-18 16:16:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957801.919925, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "486b698f-f090-4b88-8d02-4d006b726a02",
                    out: false,
                    createAt: "2021-01-18 16:16:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957803.073997, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "424e7bb3-9359-49d6-bf0f-ecdd64bfec52",
                    out: false,
                    createAt: "2021-01-18 16:16:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957804.109828, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "20b67a8f-b0db-4335-83ba-517ca3413398",
                    out: false,
                    createAt: "2021-01-18 16:16:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957805.238077, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "76670f1f-77e4-43e9-8fcd-3448e0dff228",
                    out: false,
                    createAt: "2021-01-18 16:16:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957806.388893, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9082fc5e-df0d-48d9-8a76-13bc947f4c5b",
                    out: false,
                    createAt: "2021-01-18 16:16:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957807.413503, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ef38f7b7-fc3c-45cf-9bbb-96b5e185f827",
                    out: false,
                    createAt: "2021-01-18 16:16:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957808.444327, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e78c3a63-8ef9-476f-892b-ab5228f98a23",
                    out: false,
                    createAt: "2021-01-18 16:16:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957809.475359, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e81d2cf3-2cf1-4c53-ac88-340d4d7cd547",
                    out: false,
                    createAt: "2021-01-18 16:16:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957810.520012, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b9880f06-a49b-456f-aa54-461ba2a5ec84",
                    out: false,
                    createAt: "2021-01-18 16:16:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957811.553215, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "68e12339-e078-4c0a-9b73-8ce9a568a4ee",
                    out: false,
                    createAt: "2021-01-18 16:16:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957812.601953, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "37c415c1-8da2-4ecc-9b4e-0a6630232f57",
                    out: false,
                    createAt: "2021-01-18 16:16:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957813.867224, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e44a63fe-411c-45b9-b929-5692f4635e65",
                    out: false,
                    createAt: "2021-01-18 16:16:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957814.994419, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "abaf5642-b9f1-42b3-9b38-22ebd0e5ab50",
                    out: false,
                    createAt: "2021-01-18 16:16:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957816.040152, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8025c5d9-c4d8-41fc-b38b-3d4858ba46dc",
                    out: false,
                    createAt: "2021-01-18 16:16:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957817.068227, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "19c0b93b-0cc7-4c2b-90df-f98e3ab467b4",
                    out: false,
                    createAt: "2021-01-18 16:16:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957818.130525, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "56c4c122-6711-4d62-ae2c-d23f8432c325",
                    out: false,
                    createAt: "2021-01-18 16:16:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957819.159363, "current_power": "122675"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8b64dfce-71d3-462f-8639-8be4828fc679",
                    out: false,
                    createAt: "2021-01-18 16:16:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957820.215756, "current_power": "150535"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d3a9ce34-9607-40c0-a48e-5e50a5d6b50c",
                    out: false,
                    createAt: "2021-01-18 16:17:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957821.281346, "current_power": "93655"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e61b7452-9982-45e3-944f-c15659060b5c",
                    out: false,
                    createAt: "2021-01-18 16:17:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957822.335271, "current_power": "58325"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "be36cef0-8b36-4c71-b648-c0b1e22db86d",
                    out: false,
                    createAt: "2021-01-18 16:17:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957823.36812, "current_power": "36385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "58c321b3-93ac-48b3-b8d7-3518e8832e33",
                    out: false,
                    createAt: "2021-01-18 16:17:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957824.413644, "current_power": "22755"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "227b88cf-4e81-453b-886b-9410dd580b59",
                    out: false,
                    createAt: "2021-01-18 16:17:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957825.440849, "current_power": "14275"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b73bec63-8203-42da-8782-dd7a46bfcff4",
                    out: false,
                    createAt: "2021-01-18 16:17:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957826.526763, "current_power": "9015"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0462a44f-99cb-4344-98ce-bf57ed61e099",
                    out: false,
                    createAt: "2021-01-18 16:17:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957827.65012, "current_power": "3705"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bede71ff-3ca5-44e9-9928-eb6dc9313b3b",
                    out: false,
                    createAt: "2021-01-18 16:17:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957828.731969, "current_power": "2430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ac398fe9-1173-4182-8dee-fad2b79de442",
                    out: false,
                    createAt: "2021-01-18 16:17:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957829.769946, "current_power": "1650"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5f631c5a-9f33-437a-984d-9d48f109a2a1",
                    out: false,
                    createAt: "2021-01-18 16:17:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957830.859052, "current_power": "1180"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "76f2dc4f-6f10-4df7-ac98-185c30e49455",
                    out: false,
                    createAt: "2021-01-18 16:17:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957832.391705, "current_power": "880"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1abfe29b-75e3-476c-8656-8b2f47151a97",
                    out: false,
                    createAt: "2021-01-18 16:17:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957833.965755, "current_power": "605"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7030d256-f3db-457f-8184-b385dee73024",
                    out: false,
                    createAt: "2021-01-18 16:17:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957835.138458, "current_power": "485"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5e835eb0-e0e1-453b-89ec-f53dd04868d9",
                    out: false,
                    createAt: "2021-01-18 16:17:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957836.191508, "current_power": "455"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9afb1c47-4cc8-4676-a271-65235574133b",
                    out: false,
                    createAt: "2021-01-18 16:17:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957837.213889, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "923b6742-4fef-4c2f-8fcb-b6dd71d31d8d",
                    out: false,
                    createAt: "2021-01-18 16:17:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957838.357319, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e54e8072-bd72-4daf-8b14-6d41b30b0ee8",
                    out: false,
                    createAt: "2021-01-18 16:17:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957839.429165, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "59a7f8f0-45eb-4a59-96a7-df25e57af880",
                    out: false,
                    createAt: "2021-01-18 16:17:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957840.475657, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bf690877-c7a2-4542-bbea-c33cf9b7d5d4",
                    out: false,
                    createAt: "2021-01-18 16:17:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957841.51018, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "139b9fa7-3cd9-491f-b225-14dec93438e8",
                    out: false,
                    createAt: "2021-01-18 16:17:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957842.533905, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f5da5938-4d9a-4bd2-ba60-fcdab11aee6a",
                    out: false,
                    createAt: "2021-01-18 16:17:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957843.560158, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a8f36df5-2e06-4e49-a0fa-f85851016fd8",
                    out: false,
                    createAt: "2021-01-18 16:17:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957844.602092, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "234e1ba0-d29a-4d4d-9e91-5c7d39d01ced",
                    out: false,
                    createAt: "2021-01-18 16:17:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957845.679608, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3637636a-9d21-4398-a7ab-09119e535b6c",
                    out: false,
                    createAt: "2021-01-18 16:17:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957846.905431, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a98bb20d-b0dd-4b75-98c7-d5934c6ffda7",
                    out: false,
                    createAt: "2021-01-18 16:17:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957847.94219, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "88f2327a-68c1-4edd-abcd-bd75ce62e247",
                    out: false,
                    createAt: "2021-01-18 16:17:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957849.357895, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "157df95d-ab35-4895-bfda-25dfd2db3bba",
                    out: false,
                    createAt: "2021-01-18 16:17:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957850.40661, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "223dc7d2-7a29-45ad-81ee-6332019672bc",
                    out: false,
                    createAt: "2021-01-18 16:17:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957851.449661, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "64d17593-f111-4603-b51f-ae072704dcb1",
                    out: false,
                    createAt: "2021-01-18 16:17:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957852.53309, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "98dfc326-2bef-4a8c-abec-8a92bbdf9b96",
                    out: false,
                    createAt: "2021-01-18 16:17:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957853.584606, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ed146798-f8be-49ed-a6f4-493f6daa0fcc",
                    out: false,
                    createAt: "2021-01-18 16:17:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957854.665754, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6a39e56a-6d78-4705-91e9-652af4b302b8",
                    out: false,
                    createAt: "2021-01-18 16:17:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957855.755021, "current_power": "445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "733687e9-3804-4371-99eb-b7ff67eada63",
                    out: false,
                    createAt: "2021-01-18 16:17:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957856.802739, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dae34636-8521-4f95-846a-bcaea73d650c",
                    out: false,
                    createAt: "2021-01-18 16:17:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957858.017564, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1cb25102-2154-44a9-a0c2-b1115dd759bd",
                    out: false,
                    createAt: "2021-01-18 16:17:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957859.172674, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9de10af0-1d94-4503-a66a-1bdc88de40f6",
                    out: false,
                    createAt: "2021-01-18 16:17:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957860.340316, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8680701b-c5c8-4b84-90bf-ff675029abb9",
                    out: false,
                    createAt: "2021-01-18 16:17:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957861.421674, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "19df18cb-162d-4f3e-9b27-de6eeb8163e3",
                    out: false,
                    createAt: "2021-01-18 16:17:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957862.467527, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "aca2ba7d-4770-45c3-85b1-23c0e9b4d29a",
                    out: false,
                    createAt: "2021-01-18 16:17:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957863.522645, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4445f4d0-8152-4e86-86b1-813c007b25fa",
                    out: false,
                    createAt: "2021-01-18 16:17:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957864.919164, "current_power": "119380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "52631b2a-b3be-48a1-9438-f928a331c233",
                    out: false,
                    createAt: "2021-01-18 16:17:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957865.968856, "current_power": "74310"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7a33a539-ad5e-4d51-b0c9-19911600aa83",
                    out: false,
                    createAt: "2021-01-18 16:17:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957867.019195, "current_power": "46315"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e9d80f74-ed36-44fe-aa05-2786d7130d5a",
                    out: false,
                    createAt: "2021-01-18 16:17:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957868.373567, "current_power": "28920"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "340d8d68-4b5b-4fde-9868-5f5ec8748015",
                    out: false,
                    createAt: "2021-01-18 16:17:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957869.432481, "current_power": "18145"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a635d234-054d-42fa-9be5-33fc6b505c10",
                    out: false,
                    createAt: "2021-01-18 16:17:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957870.488964, "current_power": "11435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f6f6129c-a128-438b-bc54-61075a5a3b36",
                    out: false,
                    createAt: "2021-01-18 16:17:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957871.517468, "current_power": "7245"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c09375c3-b606-4572-959b-74f4f2f234df",
                    out: false,
                    createAt: "2021-01-18 16:17:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957872.596784, "current_power": "4640"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4e35bbf2-359a-4c2f-8b6a-2d6ce9504212",
                    out: false,
                    createAt: "2021-01-18 16:17:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957873.655388, "current_power": "3050"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e11830be-c73b-4e15-831f-35510146385d",
                    out: false,
                    createAt: "2021-01-18 16:17:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957874.825873, "current_power": "1390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e391dc85-0969-4f34-b6a9-4e002dc4f30c",
                    out: false,
                    createAt: "2021-01-18 16:17:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957875.877077, "current_power": "1000"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c929a1e2-96fc-4e9d-9864-c439b2983d04",
                    out: false,
                    createAt: "2021-01-18 16:17:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957876.943989, "current_power": "775"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6540acfe-45b6-4c86-86f6-4437ff8cd280",
                    out: false,
                    createAt: "2021-01-18 16:17:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957877.996365, "current_power": "650"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "48317f71-7a8f-48d8-b12b-684d504f8460",
                    out: false,
                    createAt: "2021-01-18 16:17:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957879.020416, "current_power": "550"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d9c4e4d1-9945-47e3-a5f7-122d480b72cd",
                    out: false,
                    createAt: "2021-01-18 16:17:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957880.07002, "current_power": "490"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b5b90e2c-c399-4fbc-ae18-fa2f3445c395",
                    out: false,
                    createAt: "2021-01-18 16:18:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957881.100639, "current_power": "480"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c14138ef-605e-45fb-9e0e-6fdcd5ec2872",
                    out: false,
                    createAt: "2021-01-18 16:18:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957882.140051, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c77399a7-0b41-4473-a1b4-7d0a55fdd819",
                    out: false,
                    createAt: "2021-01-18 16:18:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957883.165991, "current_power": "450"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "17603f05-971b-4053-8885-5f56a0853501",
                    out: false,
                    createAt: "2021-01-18 16:18:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957884.269555, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9403f2da-ac7d-46d1-baa1-d20f6a78ef60",
                    out: false,
                    createAt: "2021-01-18 16:18:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957885.305594, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7b261da7-952d-4e59-8630-846108b5827e",
                    out: false,
                    createAt: "2021-01-18 16:18:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957886.515104, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "33b1be24-8ed8-4801-9edf-bb56f5994419",
                    out: false,
                    createAt: "2021-01-18 16:18:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957887.539993, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "be182344-f373-4512-95f1-2db38fea23aa",
                    out: false,
                    createAt: "2021-01-18 16:18:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957888.61822, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ba4eb9be-a2fc-43bb-9ebc-ff72ca94fb18",
                    out: false,
                    createAt: "2021-01-18 16:18:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957889.665647, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ca3231d0-bba5-4ce4-a2c2-4d4cd1240084",
                    out: false,
                    createAt: "2021-01-18 16:18:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957890.693761, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4d6980c8-c01a-4007-9b75-b71d74f7b72c",
                    out: false,
                    createAt: "2021-01-18 16:18:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957891.736024, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "065c5ad1-ccac-4920-a2e9-e3359edd888e",
                    out: false,
                    createAt: "2021-01-18 16:18:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957892.777791, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fc2ee687-fed0-481c-b5ef-7367f38a3531",
                    out: false,
                    createAt: "2021-01-18 16:18:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957893.875027, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2c738c75-581f-470d-94e3-d23a75f31cf2",
                    out: false,
                    createAt: "2021-01-18 16:18:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957894.915102, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d7793657-0c2d-4d5c-ba10-349a173d5e58",
                    out: false,
                    createAt: "2021-01-18 16:18:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957895.944966, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0c56c076-c35b-4af0-a82a-fbd35f498ef7",
                    out: false,
                    createAt: "2021-01-18 16:18:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957896.97673, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "06b9f70b-04ed-4825-9cac-26748ac98c38",
                    out: false,
                    createAt: "2021-01-18 16:18:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957898.976103, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "584912da-340c-46fd-9c26-a4b13d753502",
                    out: false,
                    createAt: "2021-01-18 16:18:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957900.015788, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c342c88a-c1a7-44d4-ada6-7831531fa3cd",
                    out: false,
                    createAt: "2021-01-18 16:18:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957901.051793, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5a0ba1ce-d32f-4e28-b16a-97baa5fc8b11",
                    out: false,
                    createAt: "2021-01-18 16:18:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957902.075134, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b9d8505f-0135-460e-bd52-8d6a1b1e2edf",
                    out: false,
                    createAt: "2021-01-18 16:18:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957903.135773, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "531b612d-683c-4a74-9828-79fd1e4b4f9a",
                    out: false,
                    createAt: "2021-01-18 16:18:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957904.81449, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "36452714-75bf-469e-87f7-4f6a80eede69",
                    out: false,
                    createAt: "2021-01-18 16:18:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957905.837394, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "476c1674-4457-4e43-ae0b-c8dfc1a82e6e",
                    out: false,
                    createAt: "2021-01-18 16:18:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957907.043521, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e30b2d63-c7ed-4370-8164-f79be5986320",
                    out: false,
                    createAt: "2021-01-18 16:18:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957908.10512, "current_power": "132415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1341540f-8a3d-479f-8dce-ad44a744a036",
                    out: false,
                    createAt: "2021-01-18 16:18:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957909.334976, "current_power": "147190"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "46df41dc-0970-4c69-b254-e0943813f743",
                    out: false,
                    createAt: "2021-01-18 16:18:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957910.362986, "current_power": "91575"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fcfe037f-a653-4404-adbb-83faf99b413c",
                    out: false,
                    createAt: "2021-01-18 16:18:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957911.419528, "current_power": "57055"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e400b317-12e2-4e27-8b48-22e23c5cdffa",
                    out: false,
                    createAt: "2021-01-18 16:18:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957912.463178, "current_power": "35595"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7c44f9f8-7446-4ee6-9493-fad295f83cc5",
                    out: false,
                    createAt: "2021-01-18 16:18:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957913.487837, "current_power": "22265"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3e18b2ff-4eaa-4049-83a9-c44d8a1401b1",
                    out: false,
                    createAt: "2021-01-18 16:18:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957914.877493, "current_power": "13960"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a2cb66d6-cb6f-4fdd-9862-4cf2bcf77f3f",
                    out: false,
                    createAt: "2021-01-18 16:18:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957916.557066, "current_power": "5625"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8bf5a87f-7d1c-4d2d-b7ab-eeca0b35f8be",
                    out: false,
                    createAt: "2021-01-18 16:18:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957917.603888, "current_power": "3650"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8f20a7e1-9ebe-43d0-bf94-fe3c1e77495f",
                    out: false,
                    createAt: "2021-01-18 16:18:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957918.704569, "current_power": "2415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "33bde5c4-b49e-45e5-b166-a59a5125cbcb",
                    out: false,
                    createAt: "2021-01-18 16:18:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957920.191079, "current_power": "2415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cc4a0147-affa-495c-a54b-043d63c24f4d",
                    out: false,
                    createAt: "2021-01-18 16:18:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957921.3958, "current_power": "2415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e3b9ccd8-1081-4810-897b-b1d36251de58",
                    out: false,
                    createAt: "2021-01-18 16:18:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957922.494667, "current_power": "695"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a6d6cae6-1f9d-441a-a353-8c998b62151d",
                    out: false,
                    createAt: "2021-01-18 16:18:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957923.542939, "current_power": "585"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "83945de1-ef40-4179-9182-804bad35caae",
                    out: false,
                    createAt: "2021-01-18 16:18:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957924.776819, "current_power": "520"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "96682068-5e28-4539-85d0-66cfa7661118",
                    out: false,
                    createAt: "2021-01-18 16:18:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957925.900152, "current_power": "460"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "51eea473-8822-4b09-9e4c-70f4cca9e688",
                    out: false,
                    createAt: "2021-01-18 16:18:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957927.162452, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8e36cd2c-06b4-445d-9ae9-a0dc252e75e3",
                    out: false,
                    createAt: "2021-01-18 16:18:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957929.684192, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9aa9f2ce-161f-44da-b5a1-391e7512b090",
                    out: false,
                    createAt: "2021-01-18 16:18:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957930.7257, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "adece1aa-48e5-4a2d-9931-8e10815d22bd",
                    out: false,
                    createAt: "2021-01-18 16:18:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957931.842327, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9642a14e-a675-40a3-9b5f-7f7535fe29e0",
                    out: false,
                    createAt: "2021-01-18 16:18:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957932.885209, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d91611df-c5f4-4ba2-b8e1-f6fee32354cd",
                    out: false,
                    createAt: "2021-01-18 16:18:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957933.927156, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "84b22d26-02b7-4ad9-a2ea-13b82a656783",
                    out: false,
                    createAt: "2021-01-18 16:18:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957935.054678, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b56c18b1-f517-4abf-8e28-f69c8edbc4a6",
                    out: false,
                    createAt: "2021-01-18 16:18:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957936.112068, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "440d5557-72d4-48a2-ae71-2cd2bcaedb3d",
                    out: false,
                    createAt: "2021-01-18 16:18:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957937.137572, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2b9da19e-efc5-443d-80a1-500d533efa0e",
                    out: false,
                    createAt: "2021-01-18 16:18:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957938.208186, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9ce7ff12-d810-4e8c-8314-113fc585a910",
                    out: false,
                    createAt: "2021-01-18 16:18:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957939.310853, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "874105e2-fe25-4174-b3d1-9fd08b985200",
                    out: false,
                    createAt: "2021-01-18 16:18:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957940.36324, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "db323ab4-5af7-4509-a58f-fadc372111e5",
                    out: false,
                    createAt: "2021-01-18 16:19:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957941.401742, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "683e7bf1-faff-46af-9a3d-2e8e6386ce88",
                    out: false,
                    createAt: "2021-01-18 16:19:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957942.423413, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "204840b1-1f50-46c0-a6e6-170f4bb9fe5e",
                    out: false,
                    createAt: "2021-01-18 16:19:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957943.447078, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1d720a6a-3b61-429c-b37d-ca2046eaed61",
                    out: false,
                    createAt: "2021-01-18 16:19:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957944.527299, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3d18ebcc-2562-4b92-92ac-d56f104885b0",
                    out: false,
                    createAt: "2021-01-18 16:19:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957945.581597, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3df32d27-de83-4905-afad-e953cc281b9a",
                    out: false,
                    createAt: "2021-01-18 16:19:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957946.625175, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "234cc633-7d15-4e8c-9e2a-b86632c82db2",
                    out: false,
                    createAt: "2021-01-18 16:19:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957947.661567, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c7648b56-3051-48c4-8509-c16b718021de",
                    out: false,
                    createAt: "2021-01-18 16:19:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957948.756922, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b39f4e7a-68c2-462a-9292-2af52fa031be",
                    out: false,
                    createAt: "2021-01-18 16:19:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957950.089256, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "026c5f66-94c1-4a8d-b499-609d00d7eb16",
                    out: false,
                    createAt: "2021-01-18 16:19:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957951.356953, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bb0d6b84-c931-4ca7-8458-d2b535ca1537",
                    out: false,
                    createAt: "2021-01-18 16:19:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957955.549891, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "72a04bd9-0dcf-409c-895e-5374eaee39ef",
                    out: false,
                    createAt: "2021-01-18 16:19:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957956.585494, "current_power": "47180"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "383c970d-0009-4a7c-b19d-eef89e9f1e41",
                    out: false,
                    createAt: "2021-01-18 16:19:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957957.61696, "current_power": "29445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "81057edd-c61a-4bc5-a89c-153214f14384",
                    out: false,
                    createAt: "2021-01-18 16:19:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957958.661967, "current_power": "18445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a43ad815-5c70-4cdc-bb8d-3fd447bdbb87",
                    out: false,
                    createAt: "2021-01-18 16:19:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957959.715575, "current_power": "11630"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4f1b9c41-6ac3-4d02-9df7-27c34359b6e4",
                    out: false,
                    createAt: "2021-01-18 16:19:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957960.742359, "current_power": "7375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "aeebaf29-9b6b-460b-9b05-597e478f5b7f",
                    out: false,
                    createAt: "2021-01-18 16:19:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957961.831876, "current_power": "4720"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8309a4cd-84b0-4b29-bcab-e3feaae444f4",
                    out: false,
                    createAt: "2021-01-18 16:19:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957962.855241, "current_power": "3080"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2099e192-a9ef-499e-89ff-751287b7c468",
                    out: false,
                    createAt: "2021-01-18 16:19:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957963.959416, "current_power": "2030"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "42fa9441-d2cc-4f08-b280-8bf3ed8d37cb",
                    out: false,
                    createAt: "2021-01-18 16:19:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957965.000253, "current_power": "1420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ec7fd7d2-9132-42a5-b79f-f77033222a8e",
                    out: false,
                    createAt: "2021-01-18 16:19:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957966.02264, "current_power": "1020"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "67b33728-ac7b-4dd1-9391-10b4292f56ca",
                    out: false,
                    createAt: "2021-01-18 16:19:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957967.214197, "current_power": "645"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "345cdf07-fe82-491b-973f-e749cc683234",
                    out: false,
                    createAt: "2021-01-18 16:19:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957968.261605, "current_power": "545"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "060e364d-16db-4f32-8736-4e75397bbfaa",
                    out: false,
                    createAt: "2021-01-18 16:19:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957969.340593, "current_power": "510"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0f853039-3f6c-460c-a5ff-56f0bd46b65d",
                    out: false,
                    createAt: "2021-01-18 16:19:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957970.417537, "current_power": "445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f30a00cc-0a42-4046-86ba-fd02193f5d1f",
                    out: false,
                    createAt: "2021-01-18 16:19:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957971.463892, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "db5d4def-a57b-4b92-acba-f6695452cf56",
                    out: false,
                    createAt: "2021-01-18 16:19:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957972.486514, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bdf60e95-39e3-4453-9e11-dd91aa0bef8b",
                    out: false,
                    createAt: "2021-01-18 16:19:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957973.534121, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "46b938f7-8c63-406c-83ce-4680f6eb19d4",
                    out: false,
                    createAt: "2021-01-18 16:19:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957974.62969, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "115df5f7-8e14-4f20-b182-1e3b26ebf70b",
                    out: false,
                    createAt: "2021-01-18 16:19:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957975.744775, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8859d1e9-f5d7-46c8-9551-0951f96d0b2b",
                    out: false,
                    createAt: "2021-01-18 16:19:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957976.905701, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fe794b98-ed34-4ded-9886-560528c4c2f7",
                    out: false,
                    createAt: "2021-01-18 16:19:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957978.01455, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6ed8f00c-c176-436d-a75c-ab26bda9bc58",
                    out: false,
                    createAt: "2021-01-18 16:19:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957979.222029, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "77fd0675-5015-41a1-bfa7-0f1293431a27",
                    out: false,
                    createAt: "2021-01-18 16:19:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957980.270495, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "33b33161-fea2-49a4-ab22-77e43f803842",
                    out: false,
                    createAt: "2021-01-18 16:19:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957981.446751, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b9c97591-d9d9-4133-99f7-b3aeecbbbc3c",
                    out: false,
                    createAt: "2021-01-18 16:19:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957982.62206, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dec79b86-66a1-4221-ac4a-5a795a4b1e79",
                    out: false,
                    createAt: "2021-01-18 16:19:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957983.676309, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "28bb70d2-45bc-439c-8a02-64688510cbf6",
                    out: false,
                    createAt: "2021-01-18 16:19:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957985.040253, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e29a921c-62ae-4650-a154-45f77c851668",
                    out: false,
                    createAt: "2021-01-18 16:19:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957987.528955, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fcb4696b-07ea-44c9-b960-ae244253854c",
                    out: false,
                    createAt: "2021-01-18 16:19:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957989.45142, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cb12efe3-252b-474b-b2be-bcb17d2fe405",
                    out: false,
                    createAt: "2021-01-18 16:19:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957990.491006, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "53af51a7-e46a-49d1-8e95-135b6a4fcae3",
                    out: false,
                    createAt: "2021-01-18 16:19:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957991.540512, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f0cef9bf-8c41-4442-a718-03ce7affafc2",
                    out: false,
                    createAt: "2021-01-18 16:19:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957992.682074, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "101aebac-e020-45e9-b6ed-6ab8ecb91edd",
                    out: false,
                    createAt: "2021-01-18 16:19:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957993.988988, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "642d1978-ee61-45ee-af06-430962a2eb7f",
                    out: false,
                    createAt: "2021-01-18 16:19:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957995.13714, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3e39e286-2624-452e-bf03-dc8c47b86bf2",
                    out: false,
                    createAt: "2021-01-18 16:19:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957996.170232, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ef6806dd-e0fb-42ce-887a-00522e215532",
                    out: false,
                    createAt: "2021-01-18 16:19:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957997.192221, "current_power": "445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5cdff854-62cc-4594-bffa-0222935201dc",
                    out: false,
                    createAt: "2021-01-18 16:19:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957998.233851, "current_power": "88625"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3b6eeb45-8f6d-4473-8377-0fd5c4eea3ac",
                    out: false,
                    createAt: "2021-01-18 16:19:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610957999.293865, "current_power": "158690"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "21a484b2-287a-4d02-801c-b33f33d868a0",
                    out: false,
                    createAt: "2021-01-18 16:19:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958000.416661, "current_power": "61485"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5516a500-1a5b-4f94-be68-cb8e83b975d9",
                    out: false,
                    createAt: "2021-01-18 16:20:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958001.446187, "current_power": "38330"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "35caf515-7d7f-4675-a503-243c811e5b0e",
                    out: false,
                    createAt: "2021-01-18 16:20:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958002.488069, "current_power": "23935"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6ffbcaba-6262-452b-823f-ea4544017687",
                    out: false,
                    createAt: "2021-01-18 16:20:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958003.51515, "current_power": "15005"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2732819e-d655-4146-b1d2-61910f562b22",
                    out: false,
                    createAt: "2021-01-18 16:20:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958004.538607, "current_power": "9490"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e669f6ab-ab72-465a-9b97-738da43934a0",
                    out: false,
                    createAt: "2021-01-18 16:20:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958005.571014, "current_power": "5895"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3ffb1f18-251c-41c3-86fd-6e7c25ed5d56",
                    out: false,
                    createAt: "2021-01-18 16:20:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958006.604293, "current_power": "3800"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d06c5917-fb08-4bb4-91ad-0ca3e941a70b",
                    out: false,
                    createAt: "2021-01-18 16:20:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958007.675567, "current_power": "2525"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b142295a-84fa-4a6a-b7df-5228ad2a8db1",
                    out: false,
                    createAt: "2021-01-18 16:20:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958008.76254, "current_power": "1730"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dd56abd5-056d-48c1-961d-b7e33344b01d",
                    out: false,
                    createAt: "2021-01-18 16:20:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958009.880172, "current_power": "1225"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "47a8dc5c-5ccd-4fb7-a9a6-a687d0ab2bbb",
                    out: false,
                    createAt: "2021-01-18 16:20:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958010.907607, "current_power": "920"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3c47d6cb-6f67-45d6-a634-54d176829d8f",
                    out: false,
                    createAt: "2021-01-18 16:20:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958011.934619, "current_power": "755"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a594aa0f-4828-4c56-887b-f9d82ac26c72",
                    out: false,
                    createAt: "2021-01-18 16:20:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958012.959926, "current_power": "620"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "79c7fb72-a9ef-4912-acff-3e00d1d7fb01",
                    out: false,
                    createAt: "2021-01-18 16:20:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958013.990722, "current_power": "520"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "436a4540-c855-42a6-836b-427ea8f2453d",
                    out: false,
                    createAt: "2021-01-18 16:20:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958015.096918, "current_power": "465"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "52987428-bf61-4c80-99c8-2b6751a5d377",
                    out: false,
                    createAt: "2021-01-18 16:20:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958016.153178, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6b59dac6-ddec-407c-8c7c-4f23182e35dc",
                    out: false,
                    createAt: "2021-01-18 16:20:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958017.296499, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7d74a018-67c8-43cd-b15b-3532f08eee32",
                    out: false,
                    createAt: "2021-01-18 16:20:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958018.48092, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "16604bd6-b21e-45ea-98c2-a9986a35b513",
                    out: false,
                    createAt: "2021-01-18 16:20:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958019.554981, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "faf5f0eb-6f5f-4f32-8f64-069d5bccd2e9",
                    out: false,
                    createAt: "2021-01-18 16:20:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958020.753595, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a63a2ac4-cd22-46b4-99f9-afa73a02b646",
                    out: false,
                    createAt: "2021-01-18 16:20:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958021.804764, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c638c228-a561-4e9a-8612-6534de293a82",
                    out: false,
                    createAt: "2021-01-18 16:20:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958022.835457, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f5c8e770-19dc-497b-acd9-d373f047f0c9",
                    out: false,
                    createAt: "2021-01-18 16:20:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958023.939737, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "75fae6ec-effc-48e1-89e9-9a0b0106522e",
                    out: false,
                    createAt: "2021-01-18 16:20:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958024.974244, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6fe36a5c-0f69-4db2-bdcb-01e37e13dbb8",
                    out: false,
                    createAt: "2021-01-18 16:20:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958026.103782, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f7052d71-38ce-47fb-86b6-1870e7626ea7",
                    out: false,
                    createAt: "2021-01-18 16:20:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958027.133829, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6d10713c-fba6-4359-bc5a-7bae735fdeac",
                    out: false,
                    createAt: "2021-01-18 16:20:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958028.182244, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "224ac36d-bfee-486d-9707-1c66aea3528c",
                    out: false,
                    createAt: "2021-01-18 16:20:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958029.335555, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1d7b1425-ab18-46ae-a637-f74811ec0b21",
                    out: false,
                    createAt: "2021-01-18 16:20:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958030.390374, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4a5a25df-b3ac-424d-a1ce-0f6317972c08",
                    out: false,
                    createAt: "2021-01-18 16:20:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958031.581562, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "75606668-6a6f-417f-9213-1559d08682ef",
                    out: false,
                    createAt: "2021-01-18 16:20:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958032.61712, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cd92cb95-c1c0-4454-a938-49a0d404420a",
                    out: false,
                    createAt: "2021-01-18 16:20:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958033.665929, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a0bae4ae-e002-434d-bb76-111885e28794",
                    out: false,
                    createAt: "2021-01-18 16:20:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958034.707955, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1fe053d7-7819-44b2-949b-e67884d999bb",
                    out: false,
                    createAt: "2021-01-18 16:20:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958035.741858, "current_power": "355"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c536ede7-3763-473b-8ead-1c93e618970d",
                    out: false,
                    createAt: "2021-01-18 16:20:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958036.800296, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f872cb34-0684-4a73-b8e3-17056c27cbe9",
                    out: false,
                    createAt: "2021-01-18 16:20:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958037.845142, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "87f76504-93a6-4ce6-8848-23c2f01939d8",
                    out: false,
                    createAt: "2021-01-18 16:20:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958038.880805, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c5119c55-b050-4155-8138-f024c15f253a",
                    out: false,
                    createAt: "2021-01-18 16:20:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958039.95646, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "06e2d060-8e3f-4ac4-a28f-fddfa5fcd576",
                    out: false,
                    createAt: "2021-01-18 16:20:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958041.207592, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "43b24890-d588-41f2-8670-e1f3b751eb5a",
                    out: false,
                    createAt: "2021-01-18 16:20:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958042.331371, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d626a245-5d9d-470d-86c2-f158a951411c",
                    out: false,
                    createAt: "2021-01-18 16:20:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958043.555351, "current_power": "205465"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "445d4ef3-2b50-4da4-923b-0ff54fce8730",
                    out: false,
                    createAt: "2021-01-18 16:20:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958044.746732, "current_power": "79535"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "05729275-2a7f-4010-977b-30f454f2f787",
                    out: false,
                    createAt: "2021-01-18 16:20:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958045.821386, "current_power": "49550"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1da7320c-c9ef-4da8-bfcf-c2425a12b797",
                    out: false,
                    createAt: "2021-01-18 16:20:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958046.868822, "current_power": "30940"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "885264ab-5de6-41ae-8cd2-52f3a387653e",
                    out: false,
                    createAt: "2021-01-18 16:20:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958048.023146, "current_power": "19350"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b80fc102-4ddc-4097-b75f-7a796715e48c",
                    out: false,
                    createAt: "2021-01-18 16:20:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958049.058446, "current_power": "11785"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "31ecb56f-4428-4712-9462-a92355dea7d3",
                    out: false,
                    createAt: "2021-01-18 16:20:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958050.157883, "current_power": "7455"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d2ae3d83-ef35-4d5e-9ede-d5aadced1bf1",
                    out: false,
                    createAt: "2021-01-18 16:20:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958051.21098, "current_power": "4785"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e572ef78-a54f-4f0a-89d8-5577b5bde577",
                    out: false,
                    createAt: "2021-01-18 16:20:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958052.375409, "current_power": "3120"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f55e54a7-1f46-4a5d-9705-5fe19aa76d53",
                    out: false,
                    createAt: "2021-01-18 16:20:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958053.398959, "current_power": "2095"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a12f18ed-5a15-4192-b338-31e60848c131",
                    out: false,
                    createAt: "2021-01-18 16:20:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958054.646617, "current_power": "2095"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1ea522c4-929d-4e6f-8b6d-b735278b9759",
                    out: false,
                    createAt: "2021-01-18 16:20:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958055.68811, "current_power": "800"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9630093e-d09c-4392-8242-f582d5d75d61",
                    out: false,
                    createAt: "2021-01-18 16:20:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958056.730551, "current_power": "660"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d09a0ba5-5209-4174-b3a1-aec74d8339ec",
                    out: false,
                    createAt: "2021-01-18 16:20:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958057.790026, "current_power": "550"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "578f5451-2516-49ae-9846-59021bf6f140",
                    out: false,
                    createAt: "2021-01-18 16:20:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958058.819878, "current_power": "480"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a66f1664-1be4-42b0-9e91-55a63bfa7553",
                    out: false,
                    createAt: "2021-01-18 16:20:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958059.860316, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "aacdd1f9-bb0e-43d6-b28f-53396e3ffb51",
                    out: false,
                    createAt: "2021-01-18 16:20:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958060.888771, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cf64c5d8-c76b-41ce-964c-a34722145f61",
                    out: false,
                    createAt: "2021-01-18 16:21:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958061.987323, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e13478d5-1125-4df3-8ee3-f61641789c3e",
                    out: false,
                    createAt: "2021-01-18 16:21:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958063.069707, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7eb6720d-3bb4-4c44-8a8c-c286cb76a2cf",
                    out: false,
                    createAt: "2021-01-18 16:21:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958064.113171, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "62be7e45-064e-4141-b7cf-8724efef874f",
                    out: false,
                    createAt: "2021-01-18 16:21:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958065.158429, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ca9e8cf0-b30a-402d-9ce4-b9180d563cb5",
                    out: false,
                    createAt: "2021-01-18 16:21:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958066.514949, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "36bb9e21-d387-4a70-b4d0-31d2a27d4930",
                    out: false,
                    createAt: "2021-01-18 16:21:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958067.554613, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a8b00ec7-1036-4e64-a79e-819a5f873094",
                    out: false,
                    createAt: "2021-01-18 16:21:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958068.590569, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "628b688e-209b-493a-94d7-74366983b463",
                    out: false,
                    createAt: "2021-01-18 16:21:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958069.618918, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d4294ac9-f78f-40cf-a518-622e0bb833e4",
                    out: false,
                    createAt: "2021-01-18 16:21:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958070.65767, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "610712d8-80ec-41ec-b027-8b2a5b947fb7",
                    out: false,
                    createAt: "2021-01-18 16:21:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958071.766899, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d9989d3d-347b-4697-95d0-94e604ecb6e7",
                    out: false,
                    createAt: "2021-01-18 16:21:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958072.942317, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a4662ab2-4b91-4464-aa07-7e6263786f75",
                    out: false,
                    createAt: "2021-01-18 16:21:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958074.042227, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2d3af29d-c992-42a8-8e70-9ec5ab721d1e",
                    out: false,
                    createAt: "2021-01-18 16:21:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958075.145149, "current_power": "365"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6c2b90bd-7b8a-40f8-977a-e0a7877f4b1d",
                    out: false,
                    createAt: "2021-01-18 16:21:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958076.192818, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "836f4cd8-4f13-42e8-b5c5-b74b18d21f54",
                    out: false,
                    createAt: "2021-01-18 16:21:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958077.234148, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f8b6fe21-7394-46a4-93b0-6c1e2c202555",
                    out: false,
                    createAt: "2021-01-18 16:21:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958078.314898, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1a32a970-2747-4949-86d3-9683d35723b8",
                    out: false,
                    createAt: "2021-01-18 16:21:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958079.418329, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4e060804-6341-41cb-a2fc-154a4ff84756",
                    out: false,
                    createAt: "2021-01-18 16:21:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958080.440333, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "91818cbf-732d-46f8-9c32-41b45160622c",
                    out: false,
                    createAt: "2021-01-18 16:21:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958081.490121, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ba81ab0f-796b-4b26-bde6-94755d45eb81",
                    out: false,
                    createAt: "2021-01-18 16:21:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958082.52408, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7168e4d3-1be0-4201-adbc-892996641870",
                    out: false,
                    createAt: "2021-01-18 16:21:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958083.549676, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "29fa4e82-d080-4d0e-ab35-4be3b9e0dd6c",
                    out: false,
                    createAt: "2021-01-18 16:21:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958084.58548, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fc0544dc-5a14-4a5f-9800-260c5a043d8c",
                    out: false,
                    createAt: "2021-01-18 16:21:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958085.615011, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b8e2b120-f205-4ee9-b1c5-d07bdeb04b1f",
                    out: false,
                    createAt: "2021-01-18 16:21:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958086.645716, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "66856bd0-3013-49b3-8832-da105ab1650e",
                    out: false,
                    createAt: "2021-01-18 16:21:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958087.802388, "current_power": "137305"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "115cc3bc-a277-4a4b-8265-09f3bb1f9cdd",
                    out: false,
                    createAt: "2021-01-18 16:21:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958088.919423, "current_power": "92145"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b9478e26-d42c-456c-961e-85cafc5f2065",
                    out: false,
                    createAt: "2021-01-18 16:21:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958089.996393, "current_power": "57420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a41fa2d2-5688-4a7b-8561-98c6b4293ae0",
                    out: false,
                    createAt: "2021-01-18 16:21:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958091.103067, "current_power": "35825"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3e7c6d91-4244-47c2-af97-cb69e79480f2",
                    out: false,
                    createAt: "2021-01-18 16:21:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958092.144137, "current_power": "21715"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e42439cc-512d-45e4-93c7-ce4fe2a0668e",
                    out: false,
                    createAt: "2021-01-18 16:21:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958093.173241, "current_power": "13635"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "90da3118-e0d0-42df-9818-b9e3a73c56ab",
                    out: false,
                    createAt: "2021-01-18 16:21:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958094.222136, "current_power": "8610"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "da620f94-94d8-4e13-a571-d6bb44142735",
                    out: false,
                    createAt: "2021-01-18 16:21:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958095.416992, "current_power": "5505"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "01cf015b-4ee3-46b2-94b8-c65bc21e2932",
                    out: false,
                    createAt: "2021-01-18 16:21:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958096.592406, "current_power": "3570"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "67742e6e-7722-440f-8c57-efd56502a558",
                    out: false,
                    createAt: "2021-01-18 16:21:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958097.701368, "current_power": "2380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a42ea91e-63bb-4343-98df-96939a0e48bc",
                    out: false,
                    createAt: "2021-01-18 16:21:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958098.868027, "current_power": "1645"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7a3f4b05-2dd2-44b9-a683-e7e9d50c7e17",
                    out: false,
                    createAt: "2021-01-18 16:21:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958099.894599, "current_power": "1180"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5baf75f9-4f56-48a8-be8f-d75e7e797ab0",
                    out: false,
                    createAt: "2021-01-18 16:21:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958100.979502, "current_power": "670"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "57662516-5752-4a6c-8251-8b482d14518d",
                    out: false,
                    createAt: "2021-01-18 16:21:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958102.011788, "current_power": "555"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "71464cfd-44ca-442a-b4d3-a507107f7949",
                    out: false,
                    createAt: "2021-01-18 16:21:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958103.037858, "current_power": "505"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2a1ac5fa-eefd-4bb7-80b6-e4722f1ade2e",
                    out: false,
                    createAt: "2021-01-18 16:21:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958104.072934, "current_power": "475"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "88a21dc2-cf7c-42a1-914c-933577075efe",
                    out: false,
                    createAt: "2021-01-18 16:21:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958105.10382, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "188c294b-9235-41d5-9f48-83e8a06ea3db",
                    out: false,
                    createAt: "2021-01-18 16:21:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958106.13072, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "72a9dffa-0a8d-4372-a9fb-0eb488b47e8b",
                    out: false,
                    createAt: "2021-01-18 16:21:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958107.158936, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d535b6e6-e9e9-4295-ba36-ae5ab06b813c",
                    out: false,
                    createAt: "2021-01-18 16:21:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958108.199572, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6430d6b2-c468-4ac0-9f72-8202ca3cbb11",
                    out: false,
                    createAt: "2021-01-18 16:21:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958109.241904, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a3212cdb-0df7-4f65-96a5-0113253f40bc",
                    out: false,
                    createAt: "2021-01-18 16:21:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958110.29393, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6a5916e0-987f-4874-8e4a-7e90aab84d1d",
                    out: false,
                    createAt: "2021-01-18 16:21:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958111.343626, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "44226faf-2a40-46d2-86df-18458c9d5733",
                    out: false,
                    createAt: "2021-01-18 16:21:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958112.375986, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0f917d20-ce33-4327-8e81-72b962f5fbfb",
                    out: false,
                    createAt: "2021-01-18 16:21:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958113.490488, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3e5797b4-245d-4829-b5a7-f4c21c4d4311",
                    out: false,
                    createAt: "2021-01-18 16:21:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958114.570939, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "53cabca0-a068-424d-9337-062ffedb98b6",
                    out: false,
                    createAt: "2021-01-18 16:21:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958115.614318, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b5f8ce80-1cfc-4b25-af4e-dca9c36950f8",
                    out: false,
                    createAt: "2021-01-18 16:21:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958116.706991, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f5f2208a-1002-425f-9b1f-7838f861f4fa",
                    out: false,
                    createAt: "2021-01-18 16:21:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958117.736878, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2247d1e4-e718-4f04-bca1-f4670202c522",
                    out: false,
                    createAt: "2021-01-18 16:21:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958118.851676, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fa23c7a5-c522-4d5b-b85d-e383dabc932d",
                    out: false,
                    createAt: "2021-01-18 16:21:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958119.892093, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "79b79bf2-86cf-41c5-95da-c996a6ee43a4",
                    out: false,
                    createAt: "2021-01-18 16:22:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958120.934216, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "af381353-768c-4d2f-affb-b485f833fd17",
                    out: false,
                    createAt: "2021-01-18 16:22:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958121.981649, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d88be116-33a1-41eb-a1b3-9e765e9cb439",
                    out: false,
                    createAt: "2021-01-18 16:22:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958123.056655, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e1744326-1ce7-4792-988a-bba00620a610",
                    out: false,
                    createAt: "2021-01-18 16:22:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958124.210419, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bcd01687-c51c-4a80-ab26-75755ba85590",
                    out: false,
                    createAt: "2021-01-18 16:22:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958125.243262, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "99204fd2-de70-41f6-ba25-a047fe553382",
                    out: false,
                    createAt: "2021-01-18 16:22:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958126.615597, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a0f5dba3-dd3d-4888-afef-f1db085ca6e2",
                    out: false,
                    createAt: "2021-01-18 16:22:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958127.766304, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "876f0756-5da7-4ccc-ae84-f1829d22c88a",
                    out: false,
                    createAt: "2021-01-18 16:22:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958128.796549, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ba608016-c98d-4742-9873-f8fac3dbefaf",
                    out: false,
                    createAt: "2021-01-18 16:22:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958129.837653, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "91437a62-a414-4eb9-9163-61d0cac68d4d",
                    out: false,
                    createAt: "2021-01-18 16:22:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958130.882388, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "39813a1a-81f4-48c5-84f7-b14f1db9ebe4",
                    out: false,
                    createAt: "2021-01-18 16:22:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958131.958913, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a0562283-26bd-4260-b2b0-8a652a307304",
                    out: false,
                    createAt: "2021-01-18 16:22:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958133.051735, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a3887877-856f-40c5-8dee-d48b2f5a3201",
                    out: false,
                    createAt: "2021-01-18 16:22:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958134.093984, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6ac4ed4b-15f6-4da1-9b6f-cf5464e133ef",
                    out: false,
                    createAt: "2021-01-18 16:22:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958135.156305, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6018efe9-030b-4707-848a-f056eef453b8",
                    out: false,
                    createAt: "2021-01-18 16:22:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958136.181339, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7571c83f-3468-4b11-b5c9-e7131ba46897",
                    out: false,
                    createAt: "2021-01-18 16:22:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958137.22868, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "da950ffe-44bc-44aa-8012-1e7694e16899",
                    out: false,
                    createAt: "2021-01-18 16:22:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958138.493889, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2e77fba0-00e2-428f-8919-ffef02b613a8",
                    out: false,
                    createAt: "2021-01-18 16:22:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958139.532813, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "49918ab1-2ed2-461f-93d9-c9cb4208ae29",
                    out: false,
                    createAt: "2021-01-18 16:22:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958140.572734, "current_power": "355"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "70b351e7-aa1a-4113-ac3b-cd2fa486f777",
                    out: false,
                    createAt: "2021-01-18 16:22:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958141.602482, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2197a616-321f-4541-a87a-0a2bcfb8831e",
                    out: false,
                    createAt: "2021-01-18 16:22:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958142.642291, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "877e4d6c-8e0a-48dc-87bb-a0e8815dd778",
                    out: false,
                    createAt: "2021-01-18 16:22:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958143.673654, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "51ffe505-620d-4682-a85d-a81dcfcc236d",
                    out: false,
                    createAt: "2021-01-18 16:22:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958144.796271, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7db73ed3-3787-4d0c-9cfe-fef7b1c99d10",
                    out: false,
                    createAt: "2021-01-18 16:22:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958145.827086, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "67c2168a-26e8-4b8c-92ea-a2b3a5d3acd7",
                    out: false,
                    createAt: "2021-01-18 16:22:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958146.853393, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "46f6bcae-62fc-4fdc-a058-1019a7bd9a26",
                    out: false,
                    createAt: "2021-01-18 16:22:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958147.916315, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "12bb0be2-3c0e-4485-a278-0b48b274b2bd",
                    out: false,
                    createAt: "2021-01-18 16:22:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958148.975857, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "15fda145-5c58-4577-8082-c5faeb296878",
                    out: false,
                    createAt: "2021-01-18 16:22:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958150.140081, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "19858c6a-9889-49a5-86ed-6cdeec8115b1",
                    out: false,
                    createAt: "2021-01-18 16:22:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958151.175127, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c92aa8df-c0ff-4456-803a-a9c8fee6a0a8",
                    out: false,
                    createAt: "2021-01-18 16:22:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958152.197307, "current_power": "365"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1de9729b-26d1-4713-9327-388bcfd99f37",
                    out: false,
                    createAt: "2021-01-18 16:22:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958153.226061, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e94a6770-904d-4782-a42a-16c3c8b63d5d",
                    out: false,
                    createAt: "2021-01-18 16:22:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958154.274373, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "67487cbd-8c26-4846-ab1f-4c771e7db3ff",
                    out: false,
                    createAt: "2021-01-18 16:22:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958155.343521, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3ee18c1f-7248-438d-872d-b0b6e774a56a",
                    out: false,
                    createAt: "2021-01-18 16:22:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958156.52627, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2b324569-2178-4ff8-974c-13a0ba8b1929",
                    out: false,
                    createAt: "2021-01-18 16:22:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958157.625284, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b205e1ec-d405-4d5d-8fc6-efb650a61b0d",
                    out: false,
                    createAt: "2021-01-18 16:22:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958158.67701, "current_power": "365"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "051e5e43-b2f6-480a-903f-605b9f822445",
                    out: false,
                    createAt: "2021-01-18 16:22:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958159.750811, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "43242466-4777-4b3b-b3b0-6e5134291f5a",
                    out: false,
                    createAt: "2021-01-18 16:22:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958160.774878, "current_power": "365"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "697fce7d-8c7e-499a-8816-2f679ee69f7b",
                    out: false,
                    createAt: "2021-01-18 16:22:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958161.805713, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9aed1d51-4a8d-43d1-8fa9-0d1a385d4052",
                    out: false,
                    createAt: "2021-01-18 16:22:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958162.835627, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c83071d4-9493-4b75-95dc-fb0c075c7757",
                    out: false,
                    createAt: "2021-01-18 16:22:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958163.863565, "current_power": "370"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5d6751f9-dc5f-4907-be29-a8ca2e569e5f",
                    out: false,
                    createAt: "2021-01-18 16:22:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958164.902208, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "05ca2631-6a58-46ba-8f66-cd2c0f30f921",
                    out: false,
                    createAt: "2021-01-18 16:22:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958165.943534, "current_power": "215940"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a0b5bbf9-c86d-4be0-bfbb-4c5a6769ff97",
                    out: false,
                    createAt: "2021-01-18 16:22:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958167.001199, "current_power": "134255"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1002bb2b-443c-46b3-9951-a8a192f405a7",
                    out: false,
                    createAt: "2021-01-18 16:22:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958168.127039, "current_power": "134255"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3f5301d9-be2c-4fa8-927f-463b4648920c",
                    out: false,
                    createAt: "2021-01-18 16:22:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958169.254311, "current_power": "52070"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "566b35ab-0416-4e61-b139-9f71f18d00b3",
                    out: false,
                    createAt: "2021-01-18 16:22:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958170.283636, "current_power": "32505"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "053768b3-a736-46e0-bf90-033f5280ee26",
                    out: false,
                    createAt: "2021-01-18 16:22:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958171.305273, "current_power": "167225"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3e997227-4bc1-43ef-b9f3-fd0bded41067",
                    out: false,
                    createAt: "2021-01-18 16:22:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958172.338324, "current_power": "171930"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d53ed8d0-fbcb-4bd6-9c37-cddb5530daae",
                    out: false,
                    createAt: "2021-01-18 16:22:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958173.40014, "current_power": "106955"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "aba6958d-69e1-4d4e-84c6-acc29f7280d3",
                    out: false,
                    createAt: "2021-01-18 16:22:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958174.469828, "current_power": "66575"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "528d89a4-39ce-4c38-a49c-ea64b37fbef7",
                    out: false,
                    createAt: "2021-01-18 16:22:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958175.517771, "current_power": "25910"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9af8b29e-7935-486c-917e-2468c4936166",
                    out: false,
                    createAt: "2021-01-18 16:22:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958176.556138, "current_power": "202005"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "99f7f3dd-1fa5-4c45-9aac-2004c4880d99",
                    out: false,
                    createAt: "2021-01-18 16:22:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958177.608698, "current_power": "125605"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "48509cdc-a3c2-4995-9706-8ce08b5c2eb3",
                    out: false,
                    createAt: "2021-01-18 16:22:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958178.636365, "current_power": "78160"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7733301b-89ac-4b5f-b439-00cc264eca2a",
                    out: false,
                    createAt: "2021-01-18 16:22:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958179.699432, "current_power": "48700"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "837ac134-35c8-4298-a499-b5bd96db9e24",
                    out: false,
                    createAt: "2021-01-18 16:22:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958180.726934, "current_power": "30400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e38ba941-5ac1-42ba-8407-5c2004b295d6",
                    out: false,
                    createAt: "2021-01-18 16:23:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958181.749382, "current_power": "18440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e4a67486-cc87-4379-a029-2f73d845d3b2",
                    out: false,
                    createAt: "2021-01-18 16:23:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958182.823633, "current_power": "11615"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f890582e-cbf5-41ad-a2a8-9e49127fdd0b",
                    out: false,
                    createAt: "2021-01-18 16:23:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958183.869297, "current_power": "7360"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "99d3b766-f3bf-43fb-a331-d33ec55b16e0",
                    out: false,
                    createAt: "2021-01-18 16:23:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958185.11481, "current_power": "4750"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8532077a-de06-4f28-b10d-c88df60b1fa7",
                    out: false,
                    createAt: "2021-01-18 16:23:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958186.149815, "current_power": "3085"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c2782d4f-6ad3-421e-b82e-22c0692a5506",
                    out: false,
                    createAt: "2021-01-18 16:23:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958187.182209, "current_power": "2070"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "74cc16ae-27e9-4da7-b134-b84479a5b91e",
                    out: false,
                    createAt: "2021-01-18 16:23:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958188.222193, "current_power": "1445"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "951af46d-bcb2-4cf9-b951-cb20c4bac000",
                    out: false,
                    createAt: "2021-01-18 16:23:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958189.269203, "current_power": "1040"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8c056824-758e-4c0c-9227-202d4186732b",
                    out: false,
                    createAt: "2021-01-18 16:23:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958190.300074, "current_power": "795"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1693f3e7-6575-4ae1-9c41-36c24aa23af5",
                    out: false,
                    createAt: "2021-01-18 16:23:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958191.387673, "current_power": "650"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dea068b1-b644-4541-9daf-cc1d72581ff4",
                    out: false,
                    createAt: "2021-01-18 16:23:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958192.459157, "current_power": "540"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6c5e3ea9-8185-43ad-b746-d14e8de1955d",
                    out: false,
                    createAt: "2021-01-18 16:23:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958193.484473, "current_power": "470"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a786d78f-fb50-44d4-95a6-1c119ba25e00",
                    out: false,
                    createAt: "2021-01-18 16:23:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958194.516522, "current_power": "455"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e307762d-791d-4ce9-acbe-89e7ad4f7fc4",
                    out: false,
                    createAt: "2021-01-18 16:23:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958195.565867, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "52955503-a1d3-40f2-9821-4cc464700c36",
                    out: false,
                    createAt: "2021-01-18 16:23:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958196.600145, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "24d42dd0-fdc0-41a4-9859-5f36cd7e8965",
                    out: false,
                    createAt: "2021-01-18 16:23:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958197.63796, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bcfad6cc-70f2-4b18-9472-d6ca36bbc7a5",
                    out: false,
                    createAt: "2021-01-18 16:23:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958198.809745, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1d8432aa-6594-42dc-87ae-f408bd2fd023",
                    out: false,
                    createAt: "2021-01-18 16:23:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958199.850646, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4832a23e-b556-409b-8991-aa5cedd0bb78",
                    out: false,
                    createAt: "2021-01-18 16:23:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958200.977457, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a84363d1-535b-44ea-bbea-6b2d1981eacd",
                    out: false,
                    createAt: "2021-01-18 16:23:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958202.060945, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d17b2107-e23b-4a84-86b8-bb006c00af55",
                    out: false,
                    createAt: "2021-01-18 16:23:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958203.141628, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3f1446c6-abce-4d65-b94b-0cdf3993eb7d",
                    out: false,
                    createAt: "2021-01-18 16:23:23",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958204.170893, "current_power": "375"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a96f72a1-6b5d-4f73-a1a8-f0c3244e7a9f",
                    out: false,
                    createAt: "2021-01-18 16:23:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958205.289216, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ac74779a-63d2-4221-bd08-0ac2771dbebf",
                    out: false,
                    createAt: "2021-01-18 16:23:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958206.471121, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "51a9a171-a8b6-42c0-ac8f-4b73f8be8c29",
                    out: false,
                    createAt: "2021-01-18 16:23:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958207.502954, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ba3f9359-8d37-4b28-bd87-20cdaf2a32f9",
                    out: false,
                    createAt: "2021-01-18 16:23:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958208.54712, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c66dc03b-4ed1-4a5f-a2c3-2913d06b988f",
                    out: false,
                    createAt: "2021-01-18 16:23:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958209.587678, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d9686d85-4826-4715-907e-fb93e4be55f8",
                    out: false,
                    createAt: "2021-01-18 16:23:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958210.632044, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9f1bdc57-f1c6-4d34-9205-b71940ea01a9",
                    out: false,
                    createAt: "2021-01-18 16:23:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958211.694738, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b9920bc6-d8f2-4142-b646-0b0c37b4c95b",
                    out: false,
                    createAt: "2021-01-18 16:23:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958212.841698, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1bec35d4-b311-4987-813b-a10711bd9f7e",
                    out: false,
                    createAt: "2021-01-18 16:23:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958213.879441, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bf5c9128-6b2d-4e9f-bb71-d1e6ba8920a1",
                    out: false,
                    createAt: "2021-01-18 16:23:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958214.930951, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0de089ea-f96d-4e16-86c3-ae8a31587d14",
                    out: false,
                    createAt: "2021-01-18 16:23:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958216.058532, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a26e86f9-150d-4b47-a06c-8f270cfe6550",
                    out: false,
                    createAt: "2021-01-18 16:23:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958217.327448, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "78ae1388-7b74-41a3-bcfa-85b1733741bc",
                    out: false,
                    createAt: "2021-01-18 16:23:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958218.401576, "current_power": "450"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4e3fe65d-56aa-49bb-82dc-6dbcd1b081d4",
                    out: false,
                    createAt: "2021-01-18 16:23:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958219.4921, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5d9b1448-7621-4db6-a1a8-25c8d83e5551",
                    out: false,
                    createAt: "2021-01-18 16:23:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958220.6304, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c0d575ff-198d-4933-9285-6abcb5368c13",
                    out: false,
                    createAt: "2021-01-18 16:23:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958221.732983, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d55c6a67-1d11-4d3a-a6fa-5cfc0dc0628c",
                    out: false,
                    createAt: "2021-01-18 16:23:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958222.806231, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "941c8620-c237-4047-8349-372632f155cc",
                    out: false,
                    createAt: "2021-01-18 16:23:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958223.91415, "current_power": "202230"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "38e79234-ecc9-4ae3-b29e-d25df0487de4",
                    out: false,
                    createAt: "2021-01-18 16:23:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958224.936532, "current_power": "125745"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2dd2e768-7388-4011-b63d-d648273eff5f",
                    out: false,
                    createAt: "2021-01-18 16:23:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958225.968026, "current_power": "78265"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "da599ae2-674e-4b31-b51a-adf48579c253",
                    out: false,
                    createAt: "2021-01-18 16:23:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958227.020243, "current_power": "48750"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ae1a5419-395e-421b-8eb4-1c0637859696",
                    out: false,
                    createAt: "2021-01-18 16:23:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958228.079442, "current_power": "30435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d161de40-2396-428d-97a8-8ad73a896ab6",
                    out: false,
                    createAt: "2021-01-18 16:23:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958229.134557, "current_power": "30435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "247b761a-a58b-4055-a5dd-ff0ea72808c4",
                    out: false,
                    createAt: "2021-01-18 16:23:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958230.2083, "current_power": "11610"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a33fa1b1-6ee6-426b-b947-087ffd9fe788",
                    out: false,
                    createAt: "2021-01-18 16:23:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958231.256334, "current_power": "7350"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b59bab0d-0d35-4da1-a67d-0b8acb64efc5",
                    out: false,
                    createAt: "2021-01-18 16:23:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958232.292678, "current_power": "4705"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "696ef1bf-223e-4080-8dfb-9a976e6ae5c9",
                    out: false,
                    createAt: "2021-01-18 16:23:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958233.411642, "current_power": "3060"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "673a652f-1f40-4865-8a44-3f085c775afa",
                    out: false,
                    createAt: "2021-01-18 16:23:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958234.707586, "current_power": "3060"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a7ecb0ce-ac76-4691-b2c3-441d74b5e464",
                    out: false,
                    createAt: "2021-01-18 16:23:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958235.735831, "current_power": "3060"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1399edf5-e2a2-4f87-854c-1e05a9aad3d7",
                    out: false,
                    createAt: "2021-01-18 16:23:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958236.769782, "current_power": "810"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "802b4863-deb4-4f45-a9df-f4298d09778f",
                    out: false,
                    createAt: "2021-01-18 16:23:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958237.888811, "current_power": "660"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "93aa3aab-039f-4959-9dc5-0c32d5ad3719",
                    out: false,
                    createAt: "2021-01-18 16:23:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958239.081645, "current_power": "590"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "dc6a858a-a4ea-4a73-a11e-9e1f53e85142",
                    out: false,
                    createAt: "2021-01-18 16:23:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958240.164993, "current_power": "525"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3d8ca9fc-3fc3-4cfe-9d1c-8bc53f8ba13a",
                    out: false,
                    createAt: "2021-01-18 16:24:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958241.240669, "current_power": "460"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5469ae30-e5f1-47ba-a8d2-0cb2ab025341",
                    out: false,
                    createAt: "2021-01-18 16:24:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958242.265571, "current_power": "440"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c084367c-3232-42a9-8547-2cb1b5b921ae",
                    out: false,
                    createAt: "2021-01-18 16:24:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958243.308027, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "15163f08-e77f-42fe-b365-93d7ee3cb26e",
                    out: false,
                    createAt: "2021-01-18 16:24:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958244.341063, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "10f3bf04-a264-42ca-ab15-ec36f9bacf19",
                    out: false,
                    createAt: "2021-01-18 16:24:04",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958245.36199, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1e4577ea-ce55-4b3b-8f07-436b881b44cf",
                    out: false,
                    createAt: "2021-01-18 16:24:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958246.399454, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3469fde7-49f4-46a0-9f4f-47da438f0349",
                    out: false,
                    createAt: "2021-01-18 16:24:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958247.444262, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f7cb9025-fd7e-4626-b225-2d0aeb2544ef",
                    out: false,
                    createAt: "2021-01-18 16:24:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958248.557022, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2d6e4a2b-e418-4de2-a2a1-3e0e899dad6b",
                    out: false,
                    createAt: "2021-01-18 16:24:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958249.594691, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ac53ef9f-ee0d-4aad-8e6a-3e591dce0cea",
                    out: false,
                    createAt: "2021-01-18 16:24:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958250.623173, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "af347d8d-234e-447a-a5c7-7caa43e57cc3",
                    out: false,
                    createAt: "2021-01-18 16:24:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958251.649902, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3f0d2fa7-53fc-4d84-aa79-3afc62523527",
                    out: false,
                    createAt: "2021-01-18 16:24:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958252.681498, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "25166fe2-be36-4c44-b806-b3ba7bda5db9",
                    out: false,
                    createAt: "2021-01-18 16:24:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958253.758968, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e289886f-4c14-43dd-b14c-4f7d1069ca11",
                    out: false,
                    createAt: "2021-01-18 16:24:13",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958254.827567, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2971cedc-294c-460f-a733-2155f6948e21",
                    out: false,
                    createAt: "2021-01-18 16:24:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958255.934018, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "08d30527-2554-43c8-891a-3e4cd7d4c9bf",
                    out: false,
                    createAt: "2021-01-18 16:24:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958257.057742, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "49ba1e7b-82ad-478d-a686-b3f94130322d",
                    out: false,
                    createAt: "2021-01-18 16:24:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958258.1442, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9ab12214-3c62-4aeb-abf9-4c1dc75106bb",
                    out: false,
                    createAt: "2021-01-18 16:24:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958259.20006, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "39237924-0f27-4362-a061-7c3c2e497da2",
                    out: false,
                    createAt: "2021-01-18 16:24:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958260.234254, "current_power": "425"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a71cb6b5-1ac5-4ad7-86fb-db27e915c068",
                    out: false,
                    createAt: "2021-01-18 16:24:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958261.508213, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0d470ab2-85b0-4c3e-bdcb-e9361c96a984",
                    out: false,
                    createAt: "2021-01-18 16:24:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958262.635763, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "32dd90ed-200c-4a70-9e5a-91a8d2bff85e",
                    out: false,
                    createAt: "2021-01-18 16:24:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958263.756872, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9b1b7c1d-cfb5-4227-b5c3-1e0fa7ad2120",
                    out: false,
                    createAt: "2021-01-18 16:24:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958265.049421, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8b1e1179-943c-4ed2-9830-81dd2a29c0e8",
                    out: false,
                    createAt: "2021-01-18 16:24:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958266.541227, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4312cb6b-c979-4381-aece-185184244fa6",
                    out: false,
                    createAt: "2021-01-18 16:24:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958267.603018, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "955785d2-1a80-4acc-9c5e-ca7805f38b5a",
                    out: false,
                    createAt: "2021-01-18 16:24:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958268.675902, "current_power": "65260"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1a1f08d7-1036-47ef-9f1c-e9744f1a04e1",
                    out: false,
                    createAt: "2021-01-18 16:24:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958269.710406, "current_power": "162145"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "a291d025-0faa-4a14-954e-f23be1ddeee9",
                    out: false,
                    createAt: "2021-01-18 16:24:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958270.744288, "current_power": "100895"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4d97768c-fe28-4525-b097-949fe46be82a",
                    out: false,
                    createAt: "2021-01-18 16:24:30",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958271.7968, "current_power": "100895"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9f7479cf-3d5b-41c7-8661-26546bd3199d",
                    out: false,
                    createAt: "2021-01-18 16:24:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958272.842035, "current_power": "100895"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cba7e758-5796-45d0-9f8c-be94530eb86a",
                    out: false,
                    createAt: "2021-01-18 16:24:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958274.310535, "current_power": "14900"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "e56b5e18-34d1-4784-97b6-e23e01cd8f92",
                    out: false,
                    createAt: "2021-01-18 16:24:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958275.51196, "current_power": "9410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ac70bcdb-5bdd-4b2c-8698-76f37ae2c6f8",
                    out: false,
                    createAt: "2021-01-18 16:24:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958276.654498, "current_power": "5990"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0af85b8e-a589-4259-a1e2-0d3977929ed5",
                    out: false,
                    createAt: "2021-01-18 16:24:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958277.750729, "current_power": "3865"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "21ef0c25-4394-4ce8-b633-5ccd7285bfa2",
                    out: false,
                    createAt: "2021-01-18 16:24:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958278.788852, "current_power": "2545"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "53be1a17-6e65-466f-927e-40c53fbd93f3",
                    out: false,
                    createAt: "2021-01-18 16:24:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958279.82328, "current_power": "1735"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6b8a28b4-e098-4210-b8c7-51c19cb007a5",
                    out: false,
                    createAt: "2021-01-18 16:24:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958280.931873, "current_power": "1245"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b098d8c6-ea40-4ad8-8f0a-5c530419547c",
                    out: false,
                    createAt: "2021-01-18 16:24:41",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958281.967764, "current_power": "725"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6e6b5fc2-f23a-4388-a437-7b3d87817f69",
                    out: false,
                    createAt: "2021-01-18 16:24:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958283.084383, "current_power": "600"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b21c878d-cfa8-4eb1-b478-9e43d7974ae1",
                    out: false,
                    createAt: "2021-01-18 16:24:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958284.145068, "current_power": "500"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "2dd765e7-1db9-41ec-b672-2196b3ea6ffc",
                    out: false,
                    createAt: "2021-01-18 16:24:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958285.30936, "current_power": "480"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f9cbd4a3-00a3-423c-9bee-1ef430b3854d",
                    out: false,
                    createAt: "2021-01-18 16:24:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958286.337757, "current_power": "475"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "03942069-3161-4c3f-877e-b1cc0472362b",
                    out: false,
                    createAt: "2021-01-18 16:24:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958287.385484, "current_power": "455"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "22351147-9e97-486e-aede-940b100936cc",
                    out: false,
                    createAt: "2021-01-18 16:24:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958288.410845, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fcb51562-b8cb-4b95-87d2-e4f19ef78af8",
                    out: false,
                    createAt: "2021-01-18 16:24:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958289.439229, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "69be81e6-7030-4ab9-a43e-b93183e9237b",
                    out: false,
                    createAt: "2021-01-18 16:24:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958290.465616, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7ffbfc48-4796-40f9-9a33-97f50c405187",
                    out: false,
                    createAt: "2021-01-18 16:24:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958291.498799, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "56582ec8-3bf9-4da9-a48c-cf3977e21a99",
                    out: false,
                    createAt: "2021-01-18 16:24:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958292.543056, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "44589814-064d-4140-92a6-2e0ce18051b4",
                    out: false,
                    createAt: "2021-01-18 16:24:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958294.144703, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "74a10244-b9ed-400a-9581-b3c6f543e01e",
                    out: false,
                    createAt: "2021-01-18 16:24:54",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958295.170782, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "71f0d03d-1317-4cf8-adfa-e8368187f631",
                    out: false,
                    createAt: "2021-01-18 16:24:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958296.259812, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7ec1125b-00bd-4c87-af8a-f1c427e74d17",
                    out: false,
                    createAt: "2021-01-18 16:24:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958297.293261, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "86bb1f01-25db-496a-bfdf-06e485f772f3",
                    out: false,
                    createAt: "2021-01-18 16:24:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958298.325451, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7080fa93-fa0d-45d3-8f8a-f0753c650b2d",
                    out: false,
                    createAt: "2021-01-18 16:24:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958299.383854, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "235f5051-6751-425c-a112-9278e8d2dde2",
                    out: false,
                    createAt: "2021-01-18 16:24:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958300.441414, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d93c86ca-cdfd-415f-a10e-9332a746b25e",
                    out: false,
                    createAt: "2021-01-18 16:25:00",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958301.57103, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c071b463-b62c-477e-af37-65cfb80e5aad",
                    out: false,
                    createAt: "2021-01-18 16:25:01",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958302.599383, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "242db38b-e77a-4bb3-907f-7f8ba20acddd",
                    out: false,
                    createAt: "2021-01-18 16:25:02",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958303.858073, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "20d127e7-a0b5-4d3b-a41e-802388da6feb",
                    out: false,
                    createAt: "2021-01-18 16:25:03",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958304.890136, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b464d218-fd78-4996-8810-d3eba60ecaed",
                    out: false,
                    createAt: "2021-01-18 16:25:05",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958305.951095, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "086b1374-dd9b-4e6b-af08-2deb65340773",
                    out: false,
                    createAt: "2021-01-18 16:25:06",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958306.998621, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8265beea-40c5-4356-b58f-65ebfcd9b280",
                    out: false,
                    createAt: "2021-01-18 16:25:07",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958308.057094, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "447a8aea-c0b7-4450-ade2-1ea51328791d",
                    out: false,
                    createAt: "2021-01-18 16:25:08",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958309.423626, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "50e693f7-bca6-4c91-a986-651a1eb0c1ac",
                    out: false,
                    createAt: "2021-01-18 16:25:09",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958310.51689, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "56b7276e-d637-4e1d-9a55-f9db6919058a",
                    out: false,
                    createAt: "2021-01-18 16:25:10",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958311.554176, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6edafbcf-4605-4460-8eb9-ebac3ce124ed",
                    out: false,
                    createAt: "2021-01-18 16:25:11",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958312.777789, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6e0fb42f-0c34-42aa-bd0d-10bec0e2b543",
                    out: false,
                    createAt: "2021-01-18 16:25:12",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958313.808212, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "01770c79-ebb8-4a2d-861a-b148c606e983",
                    out: false,
                    createAt: "2021-01-18 16:25:14",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958314.928312, "current_power": "385"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "66421f80-5fca-4d51-b967-346ddc978b02",
                    out: false,
                    createAt: "2021-01-18 16:25:15",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958315.965992, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9858424c-cbd0-47a8-9adc-9ae48f97def2",
                    out: false,
                    createAt: "2021-01-18 16:25:16",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958317.091979, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d920046d-c702-4e54-b8a1-e281a3f015fa",
                    out: false,
                    createAt: "2021-01-18 16:25:17",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958318.140451, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "3aeb79ec-953b-4ecc-a81f-fd9bbffc558b",
                    out: false,
                    createAt: "2021-01-18 16:25:18",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958319.191982, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6d745b22-345f-47c6-a8b5-127563409669",
                    out: false,
                    createAt: "2021-01-18 16:25:19",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958320.279644, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "00d767c8-0bbf-4fad-a1ab-7f05b26d7471",
                    out: false,
                    createAt: "2021-01-18 16:25:20",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958321.365349, "current_power": "405"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "720bdc4e-cc32-4f60-9a06-bc237ca7533b",
                    out: false,
                    createAt: "2021-01-18 16:25:21",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958322.527163, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "1825cf8d-5c7b-476a-a1d9-f8a1cf57adcd",
                    out: false,
                    createAt: "2021-01-18 16:25:22",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958323.596553, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "151e3245-e1e7-4352-8682-666fa638bfb2",
                    out: false,
                    createAt: "2021-01-18 16:25:24",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958325.360251, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9051740f-c5fb-4aae-b0dd-5e4f5e119a18",
                    out: false,
                    createAt: "2021-01-18 16:25:25",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958326.58165, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "bc36b62f-08ba-4860-bb60-e2d2f0f78402",
                    out: false,
                    createAt: "2021-01-18 16:25:26",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958327.636747, "current_power": "400"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "01a491d3-99c5-45ab-9cc0-8692101e7912",
                    out: false,
                    createAt: "2021-01-18 16:25:27",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958328.672789, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "5f4b1654-6e2b-4513-9541-c40be386b552",
                    out: false,
                    createAt: "2021-01-18 16:25:28",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958329.711657, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d94c8332-f7dc-4763-a1c2-f91359c6bd61",
                    out: false,
                    createAt: "2021-01-18 16:25:29",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958330.800938, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "c8161023-63c3-4458-a6cf-0dbbdadde6cd",
                    out: false,
                    createAt: "2021-01-18 16:25:31",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958331.880184, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "d3451718-65b0-4be6-b1b3-261f37a460d4",
                    out: false,
                    createAt: "2021-01-18 16:25:32",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958332.957695, "current_power": "380"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "cc3f1b59-df17-4c50-8598-06f066b5b3a2",
                    out: false,
                    createAt: "2021-01-18 16:25:33",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958333.98954, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "95ab5a6a-fb84-4b1b-889b-efeb8fb52fb8",
                    out: false,
                    createAt: "2021-01-18 16:25:34",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958335.081133, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ac43c03b-92be-448f-91ec-0f0b765f7066",
                    out: false,
                    createAt: "2021-01-18 16:25:35",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958336.124569, "current_power": "410"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "b72c4098-1d61-4a8a-bb75-34ecd7f50975",
                    out: false,
                    createAt: "2021-01-18 16:25:36",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958337.200561, "current_power": "430"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "768c96bd-d187-44b3-9d23-e6606fd9be1e",
                    out: false,
                    createAt: "2021-01-18 16:25:37",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958338.379148, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "ee44a810-d806-454f-ac24-8c072dbed595",
                    out: false,
                    createAt: "2021-01-18 16:25:38",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958339.405346, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7424335b-b710-4f56-92cd-1f505f86baf6",
                    out: false,
                    createAt: "2021-01-18 16:25:39",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958340.729018, "current_power": "435"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8f8e6edd-6eeb-4bfc-8e6a-92133a730799",
                    out: false,
                    createAt: "2021-01-18 16:25:40",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958341.768913, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "0a8f1f74-cfef-46ff-a499-3e82f174cfde",
                    out: false,
                    createAt: "2021-01-18 16:25:42",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958343.176042, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fa38b225-c4ec-4710-b1c1-f6e3363fdbec",
                    out: false,
                    createAt: "2021-01-18 16:25:43",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958344.288315, "current_power": "390"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6e1315fa-f8f2-4fa4-b844-92449a9a6d3e",
                    out: false,
                    createAt: "2021-01-18 16:25:44",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958345.333394, "current_power": "395"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "6dc92c6e-289b-4b37-b117-1f00662a676d",
                    out: false,
                    createAt: "2021-01-18 16:25:45",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958346.378813, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "9918ef29-97b3-47a1-8a19-46c2ae890ae2",
                    out: false,
                    createAt: "2021-01-18 16:25:46",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958347.452679, "current_power": "420"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "635bb57e-d378-4876-9ead-57b17bfc349b",
                    out: false,
                    createAt: "2021-01-18 16:25:47",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958348.513356, "current_power": "415"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "57b7241c-cfe7-4e30-b0c6-e5124fb419a4",
                    out: false,
                    createAt: "2021-01-18 16:25:48",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958349.558593, "current_power": "133460"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "fd437c76-4f5b-4d2b-a0ba-57e885b8806d",
                    out: false,
                    createAt: "2021-01-18 16:25:49",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958350.602106, "current_power": "162835"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7f751584-7791-44b2-b53e-f74403fef745",
                    out: false,
                    createAt: "2021-01-18 16:25:50",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958351.634644, "current_power": "101295"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f6c94bb3-a537-4eb7-bc18-16a04c61e022",
                    out: false,
                    createAt: "2021-01-18 16:25:51",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958352.65964, "current_power": "63095"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "85e40a64-b5ad-4775-8979-beab48279f1f",
                    out: false,
                    createAt: "2021-01-18 16:25:52",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958353.747286, "current_power": "63095"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "4eb345c4-c4d3-430b-9ec6-ec24d9dd3fff",
                    out: false,
                    createAt: "2021-01-18 16:25:53",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958354.800816, "current_power": "36310"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "8735ab80-8ead-4fba-a419-a5071883757a",
                    out: false,
                    createAt: "2021-01-18 16:25:55",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958355.890199, "current_power": "198580"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "f3d97408-684e-420b-b620-eb2f4057e63b",
                    out: false,
                    createAt: "2021-01-18 16:25:56",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958356.920785, "current_power": "123500"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "618f8921-eec4-404b-bc43-18b83d6d7ee9",
                    out: false,
                    createAt: "2021-01-18 16:25:57",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958357.975505, "current_power": "76850"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "7abcf987-3f30-46b5-a1a4-381f313bc8f5",
                    out: false,
                    createAt: "2021-01-18 16:25:58",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958359.035006, "current_power": "47900"}',
                    qos: 0,
                    retain: false,
                },
                {
                    mid: "83957f23-5d5d-4243-8cec-e9ce417433bc",
                    out: false,
                    createAt: "2021-01-18 16:25:59",
                    topic: "power_usage",
                    payload:
                        '{"time": 1610958360.082257, "current_power": "29915"}',
                    qos: 0,
                    retain: false,
                },
            ],
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
                            enabled: true,
                            type: "x",
                            autoScaleYaxis: true,
                        },
                        toolbar: {
                            show: true,
                        },
                        // animations: {
                        //     enabled: true,
                        //     easing: "linear",
                        //     dynamicAnimation: {
                        //         speed: 1000,
                        //     },
                        // },
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
                        range: 1000 * 1000,
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
                        // range: 3000,
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
                            format: "HH:mm:ss:SSS",
                        },
                    },
                },
            },
        };
    },
    components: {
        VueApexCharts,
    },
    created() {},
    mounted() {
        this.appendData();
    },
    computed: {},
    methods: {
        appendData() {
            this.electData.forEach((element) => {
                // console.log(this.lineAreaElectricity.series[0].data.length);
                // console.log(
                //     this.lineAreaElectricity.chartOptions.xaxis.categories
                //         .length
                // );
                var data = JSON.parse(element.payload);
                this.lineAreaElectricity.series[0].data = [
                    ...this.lineAreaElectricity.series[0].data,
                    data.current_power,
                ];
                this.lineAreaElectricity.chartOptions = {
                    ...this.lineAreaElectricity.chartOptions,
                    ...{
                        xaxis: {
                            categories: [
                                ...this.lineAreaElectricity.chartOptions.xaxis
                                    .categories,
                                data.time * 1000,
                                // moment(data.time).valueOf(),
                            ],
                        },
                    },
                };
            });
        },
    },
};
</script>