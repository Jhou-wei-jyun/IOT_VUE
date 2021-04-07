    <!-- =========================================================================================
    File Name: ChangeTimeDurationDropdown.vue
    Description: Change duration dropdown component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<!-- :class="data.class" -->

<template >
    <select v-model="abc" @change="timeDurationChange">
        <option>請選擇你最愛的寵物</option>
        <option>Dog</option>
        <option>Cat</option>
        <option>Hamster</option>
        <option>Parrot</option>
        <option>Spider</option>
        <option>Goldfish</option>
        <option>123</option>
    </select>
</template>
<script>
export default {
    data() {
        return {
            abc: "123",
        };
    },
    components: {},
    created() {},
    beforeDestroy: function () {},
    mounted() {},
    computed: {},
    methods: {
        timeDurationChange() {
            console.log("click");
            this.$emit("changeTime", this.abc);
        },
    },
};
</script>