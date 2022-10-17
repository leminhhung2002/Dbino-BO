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
      

      <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColorLocal" :class="textColor">
        
        <!-- SM - OPEN SIDEBAR BUTTON -->
        <div class="icon-toggle cursor-pointer" @click.stop="showSidebar" >
          <i></i>
          <i></i>
          <i></i>
        </div>

        <router-link tag="div" class="vx-logo cursor-pointer" to="/">
          <logo class="w-full fill-current text-primary" />
        </router-link>

        <vs-spacer />
        <!--<span style="font-size: 14px;">Ứng dụng chỉ mục đích nghiên cứu và học hỏi, tôi sẽ không chịu trách nhiệm về nội dung hoặc có ai sử dụng với mục đích khác!</span>-->
        <!-- <i18n /> -->

        <!--<notification-drop-down />-->

        <profile />

      </vs-navbar>
    </div>
  </div>
</template>


<script>

//import I18n                 from "@/layouts/components/navbar/components/I18n.vue"
//import NotificationDropDown from "@/layouts/components/navbar/components/NotificationDropDown.vue"
//import NotificationDropDown from "@/pages/user/navbar/NotifiDropDown.vue"
import Profile      from "./components/Profile"
import Logo         from "./Logo.vue"

export default {
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    //I18n,
    //NotificationDropDown,
    Profile,
    Logo
  },
  computed: {
    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff" ? "#090f3e" : this.navbarColor
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth
    },
    textColor() {
      return {'text-white': (this.navbarColor != '#090f3e' && this.$store.state.theme === 'dark') || (this.navbarColor != '#fff' && this.$store.state.theme !== 'dark')}
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == "default")      return "navbar-default"
      else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced"
      else if (this.verticalNavMenuWidth)              return "navbar-full"
    },
  },
  methods: {
    showSidebar() {
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
    }
  }
}
</script>
<style scoped>

h1, h2{
    font-weight: normal;
}

</style>

<style>
@media screen and (max-width: 768px){
  .vx-logo{
    display: none;
    /*visibility: hidden;
    width: 0px;*/
  }
}

.icon-toggle {
  width: 32px;
  height: 32px;
}

@media screen and (min-width: 1200px){
  .icon-toggle{
    display: none;
  }
}

.icon-toggle i {
  margin-top: 4px;
  width: 24px;
  height: 4px;
  border-radius: 2px;
  background-color: #fff;
  display: block;
}

.icon-toggle i:nth-child(3) {
  width: 12px;
  height: 4px;
  border-radius: 2px;
  background-color: #fff;
  display: block;
  margin-bottom: 3px;
}
</style>