<!-- =========================================================================================
	File Name: App.vue
	Description: Main vue file - APP
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div id="app" :class="vueAppClasses">
		<router-view @setAppClasses="setAppClasses" />
	</div>
</template>

<script>
import themeConfig from '@/../themeConfig.js'
import jwt         from "@/http/requests/auth/jwt/index.js"
import AuthenticationService from '@/services/AuthenticationService'
import getData from '@/pages/trade/navbar/components/data.json'

export default {
  data() {
    return {
      vueAppClasses: [],
    }
  },
  watch: {
    '$store.state.theme'(val) {
      this.toggleClassInBody(val)
    },
    '$vs.rtl'(val) {
      document.documentElement.setAttribute("dir", val ? "rtl" : "ltr")
    },
  },
  methods: {
    toggleClassInBody(className) {
      if (className == 'dark') {
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
        document.body.classList.add('theme-dark')
      }
      else if (className == 'semi-dark') {
        if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark')
        document.body.classList.add('theme-semi-dark')
      }
      else {
        if (document.body.className.match('theme-dark'))      document.body.classList.remove('theme-dark')
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark')
      }
    },
    setAppClasses(classesStr) {
      this.vueAppClasses.push(classesStr)
    },
    handleWindowResize() {
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

      // Set --vh property
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    },
    handleScroll() {
      this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
    },
  },
  mounted() {
    this.toggleClassInBody(themeConfig.theme)
    this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)

    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
  async created() {

    // jwt
    jwt.init()

    let dir = this.$vs.rtl ? "rtl" : "ltr"
    document.documentElement.setAttribute("dir", dir)

    window.addEventListener('resize', this.handleWindowResize)
    window.addEventListener('scroll', this.handleScroll)

    let token = localStorage.hasOwnProperty('tokenUser');
    if(token){
      AuthenticationService.getInfoUser()
      .then((res) => {
          if(res.data.success == 1){

              let dt = res.data.data

              getData.uid= dt.id
              getData.email= dt.email
              getData.profile_image= dt.profile_image
              getData.displayName= dt.nick_name
              getData.uidLive= dt.order[1].u_id
              getData.uidDemo= dt.order[0].u_id
              getData.am_usdt= dt.b
              getData.vip= dt.vip
              getData.vip_lv= dt.level_vip
              getData.pen_commiss= dt.pending_commission
              getData.ref= dt.ref
              getData.upid= dt.upid
              getData.c2fa= dt.fa2
              getData.id_front= dt.id_front
              getData.id_back= dt.id_back,
              getData.first_name= dt.first_name
              getData.last_name= dt.last_name
              getData.verify= dt.verify
              getData.num_secu= dt.num_secury
              getData.country= dt.c
              getData.so_cmnd= dt.so_cmnd
              getData.mkt = dt.mkt
      
              getData.blLive = dt.order[1].balance
              getData.blDemo = dt.order[0].balance
              getData.balance = dt.balance

              localStorage.setItem('INFO', JSON.stringify(dt))
              //localStorage.removeItem('isLog')

          }else if(res.data.success == 4){
              localStorage.removeItem('INFO')
              localStorage.removeItem('tokenUser')
              window.location.href = window.location.origin + '/login'
          }
      })
    }

    // Auth0
    try       { await this.$auth.renewTokens() }
    catch (e) { console.error(e) }

  },
  destroyed() {
    window.removeEventListener('resize', this.handleWindowResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
}

</script>
