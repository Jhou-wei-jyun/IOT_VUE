<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="relative">
        <div class="vx-navbar-wrapper" :class="classObj">
            <vs-navbar
                class="vx-navbar navbar-custom navbar-skelton"
                :color="navbarColorLocal"
                :class="textColor"
            >
                <!-- SM - OPEN SIDEBAR BUTTON -->
                <feather-icon
                    class="sm:inline-flex xl:hidden cursor-pointer p-2"
                    icon="MenuIcon"
                    @click.stop="showSidebar"
                />

                <svg
                    :style="logoColorLocal"
                    version="1.1"
                    id="圖層_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="150"
                    x="0px"
                    y="0px"
                    viewBox="0 0 169.5 26.9"
                    style="enable-background: new 0 0 169.5 26.9"
                    xml:space="preserve"
                >
                    <g>
                        <path
                            class="st0"
                            d="M17.9,12.2c1,1,1,2.5,0,3.5l-4,4c-2.2,2.2-5.4,2.9-8.2,2c-1.2-0.4-2.4-1-3.3-2c-3.2-3.2-3.2-8.5,0-11.7L8,2.4
		c3.2-3.2,8.3-3.2,11.5-0.1c-2.2-2.1-5.8-2.1-8,0.1L9.9,4c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1L8.2,5.7L5.6,8.3L4.1,9.8
		c-2.2,2.2-2.2,5.9,0,8.1c0.5,0.5,1.1,0.9,1.7,1.2c2.1,1,4.7,0.6,6.4-1.2L17.9,12.2z"
                        />
                        <path
                            class="st0"
                            d="M8.9,14.8c-1-1-1-2.5,0-3.5l4-4c2.2-2.2,5.4-2.9,8.2-2c1.2,0.4,2.4,1,3.3,2c3.2,3.2,3.1,8.5,0,11.7l-5.6,5.6
		c-3.2,3.2-8.3,3.2-11.5,0.1c2.2,2.1,5.8,2.1,8-0.1c0,0,0.1-0.1,0.1-0.1l7.2-7.2C24.9,15,25,11.2,22.7,9c-0.5-0.5-1.1-0.9-1.7-1.1
		c-2.1-1-4.7-0.6-6.4,1.2L8.9,14.8z"
                        />
                        <path
                            class="st0"
                            d="M35.3,15.3c0.3,0,0.4,0.1,0.4,0.3c0.2,1,1.1,1.6,3.1,1.6c2,0,2.9-0.7,2.9-1.5c0-0.5-0.4-1-1.7-1.1l-3.3-0.2
		c-2.6-0.2-3.9-1.2-3.9-3c0-2,1.9-3.8,5.6-3.8c3.9,0,5.5,1.6,5.5,3.4c0,0.2-0.1,0.3-0.4,0.3h-2.1c-0.2,0-0.3-0.1-0.4-0.3
		c-0.1-0.7-0.8-1.3-2.7-1.3c-1.8,0-2.8,0.6-2.8,1.5c0,0.5,0.4,0.9,1.5,1l3.3,0.2c2.9,0.2,4.1,1.6,4.1,3.1c0,1.8-1.7,3.8-5.8,3.8
		c-3.8,0-6-1.6-6-3.5v-0.2c0-0.2,0.2-0.3,0.4-0.3H35.3z"
                        />
                        <path
                            class="st0"
                            d="M60.4,18.9c0,0.1-0.1,0.2-0.3,0.2h-2.4c-0.1,0-0.3-0.1-0.3-0.2v-4h-7.3v4c0,0.1-0.1,0.2-0.3,0.2h-2.4
		c-0.1,0-0.3-0.1-0.3-0.2V8c0-0.1,0.1-0.2,0.3-0.2h2.4c0.1,0,0.3,0.1,0.3,0.2v4.7h7.3V8c0-0.1,0.1-0.2,0.3-0.2h2.4
		c0.1,0,0.3,0.1,0.3,0.2V18.9z"
                        />
                        <path
                            class="st0"
                            d="M77.2,13.5c0,3.6-3.2,5.9-7,5.9c-3.8,0-7-2.3-7-5.9c0-3.5,3.2-5.9,7-5.9C74,7.6,77.2,10,77.2,13.5 M66.1,13.5
		c0,2.3,1.9,3.7,4.1,3.7c2.2,0,4.1-1.4,4.1-3.7c0-2.3-1.9-3.7-4.1-3.7C68,9.8,66.1,11.2,66.1,13.5"
                        />
                        <path
                            class="st0"
                            d="M82.9,14.4V17h7.4c0.1,0,0.3,0.2,0.3,0.3v1.6c0,0.1-0.2,0.3-0.3,0.3h-10c-0.1,0-0.3-0.1-0.3-0.2V8
		c0-0.1,0.1-0.2,0.3-0.2h9.9c0.1,0,0.3,0.2,0.3,0.3v1.6c0,0.1-0.2,0.3-0.3,0.3h-7.3v2.3h6.6c0.1,0,0.3,0.2,0.3,0.3v1.6
		c0,0.1-0.2,0.3-0.3,0.3H82.9z"
                        />
                        <path
                            class="st0"
                            d="M96.2,15.3c0.3,0,0.4,0.1,0.4,0.3c0.2,1,1.1,1.6,3.1,1.6c2,0,2.9-0.7,2.9-1.5c0-0.5-0.4-1-1.7-1.1l-3.3-0.2
		c-2.6-0.2-3.9-1.2-3.9-3c0-2,1.9-3.8,5.6-3.8c3.9,0,5.5,1.6,5.5,3.4c0,0.2-0.1,0.3-0.4,0.3h-2.1c-0.2,0-0.3-0.1-0.4-0.3
		c-0.1-0.7-0.8-1.3-2.7-1.3c-1.8,0-2.8,0.6-2.8,1.5c0,0.5,0.4,0.9,1.5,1l3.3,0.2c2.9,0.2,4.1,1.6,4.1,3.1c0,1.8-1.7,3.8-5.8,3.8
		c-3.8,0-6-1.6-6-3.5v-0.2c0-0.2,0.2-0.3,0.4-0.3H96.2z"
                        />
                        <path
                            class="st0"
                            d="M118.3,12.4c-0.2,0-0.3-0.1-0.4-0.3c-0.2-1.3-1.5-2.3-3.4-2.3c-2.2,0-3.9,1.5-3.9,3.7c0,2.2,1.7,3.7,3.9,3.7
		c1.9,0,3.2-0.9,3.4-2.1c0-0.2,0.1-0.3,0.4-0.3h2.1c0.2,0,0.4,0.1,0.4,0.3c0,2.4-2.5,4.3-6.3,4.3c-3.8,0-6.8-2.4-6.8-5.9
		c0-3.5,3-5.9,6.8-5.9c4,0,6.3,2.3,6.3,4.5c0,0.1-0.1,0.2-0.3,0.2H118.3z"
                        />
                        <path
                            class="st0"
                            d="M136.8,13.5c0,3.6-3.2,5.9-7,5.9c-3.8,0-7-2.3-7-5.9c0-3.5,3.2-5.9,7-5.9C133.6,7.6,136.8,10,136.8,13.5
		 M125.7,13.5c0,2.3,1.9,3.7,4.1,3.7c2.2,0,4.1-1.4,4.1-3.7c0-2.3-1.9-3.7-4.1-3.7C127.6,9.8,125.7,11.2,125.7,13.5"
                        />
                        <path
                            class="st0"
                            d="M150.4,19.1l-6.4-5.9c-0.7-0.6-1.4-1.5-1.4-1.5h-0.1v7.1c0,0.1-0.1,0.2-0.3,0.2h-2.4c-0.1,0-0.3-0.1-0.3-0.2V8
		c0-0.1,0.1-0.2,0.3-0.2h1.9l6.4,5.8c0.7,0.6,1.5,1.5,1.5,1.5h0.1V8c0-0.1,0.1-0.2,0.3-0.2h2.4c0.1,0,0.3,0.1,0.3,0.2v10.9
		c0,0.1-0.1,0.2-0.3,0.2H150.4z"
                        />
                        <path
                            class="st0"
                            d="M167.3,19.1l-6.4-5.9c-0.7-0.6-1.4-1.5-1.4-1.5h-0.1v7.1c0,0.1-0.1,0.2-0.3,0.2h-2.4c-0.1,0-0.3-0.1-0.3-0.2V8
		c0-0.1,0.1-0.2,0.3-0.2h1.9l6.4,5.8c0.7,0.6,1.5,1.5,1.5,1.5h0.1V8c0-0.1,0.1-0.2,0.3-0.2h2.4c0.1,0,0.3,0.1,0.3,0.2v10.9
		c0,0.1-0.1,0.2-0.3,0.2H167.3z"
                        />
                    </g>
                </svg>

                <!-- <bookmarks :navbarColor="navbarColor" v-if="windowWidth >= 992" /> -->

                <vs-spacer />

                <search-bar class="mr-4" />

                <notification-drop-down />

                <profile-drop-down />
            </vs-navbar>
        </div>
    </div>
</template>


<script>
import Bookmarks from "./components/Bookmarks.vue";
import SearchBar from "./components/SearchBar.vue";
import NotificationDropDown from "./components/NotificationDropDown.vue";
import ProfileDropDown from "./components/ProfileDropDown.vue";

export default {
    name: "the-navbar-vertical",
    props: {
        navbarColor: {
            type: String,
            default: "#fff",
        },
    },
    components: {
        Bookmarks,
        SearchBar,
        NotificationDropDown,
        ProfileDropDown,
    },
    computed: {
        logoColorLocal() {
            return this.navbarColor === "#fff"
                ? { fill: "#10163a" }
                : { fill: "#fff" };
        },
        navbarColorLocal() {
            return this.$store.state.theme === "dark" &&
                this.navbarColor === "#fff"
                ? "#10163a"
                : this.navbarColor;
        },
        verticalNavMenuWidth() {
            return this.$store.state.verticalNavMenuWidth;
        },
        textColor() {
            return {
                "text-white":
                    (this.navbarColor !== "#10163a" &&
                        this.$store.state.theme === "dark") ||
                    (this.navbarColor !== "#fff" &&
                        this.$store.state.theme !== "dark"),
            };
        },
        windowWidth() {
            return this.$store.state.windowWidth;
        },

        // NAVBAR STYLE
        classObj() {
            if (this.verticalNavMenuWidth === "default")
                return "navbar-default";
            else if (this.verticalNavMenuWidth === "reduced")
                return "navbar-reduced";
            else if (this.verticalNavMenuWidth) return "navbar-full";
        },
    },
    methods: {
        showSidebar() {
            this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
        },
    },
};
</script>

