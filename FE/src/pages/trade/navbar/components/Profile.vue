<template>
  <div class="the-navbar__user-meta flex items-center text-acc" v-if="activeUserInfo.displayName != ''">
  <!--<div class="the-navbar__user-meta flex items-center"> -->
    <!-- <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.displayName }}</p>
     <small>Available</small>
    </div> -->
    <!-- <div >
      <div data-v-3bbff296 class="nav-streak" >
        <a data-v-3bbff296 href="/streak-challenge" class="nav-link p-0 btn-streak-challenge">
          <div data-v-3bbff296 class="nav-streak-rewards">
            <span data-v-3bbff296 class="nav-streak-rewards-label d-block">
                                                  Prize Pool
                                  </span>
            <span data-v-3bbff296 class="nav-streak-rewards-value d-block">
                                                      $37.69K
            </span>
          </div>
        </a>
      </div>
    </div> -->

    <div class="con-img ml-3 mr-3 info-money cursor-pointer" style="border-radius: 3px;">
      <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
        <div class="flex cursor-pointer">
          <div class="flex flex-col items-start">
            <p class="nowrap" style="color: #c1c1c1;font-size: 8px;font-weight: 400;margin-bottom: 0.25rem;color: #fff;font-family: 'Roboto', sans-serif;"> {{ isAcc ? 'Tài khoản Thực' : 'Tài khoản Demo' }} </p>
            <div class="text-money">$ {{ isAcc ? this.convert(blObj.blLive) : this.formatPrice(blObj.blDemo, 2) }}</div>
          </div>
          <feather-icon icon="ChevronDownIcon" svgClasses="w-6 h-6 text-down ml-2" />
        </div>
        <vs-dropdown-menu class="dropdown-account" style="width: 200px;">
          <div class="accLive flex mb-3">
            <label class="radio-check">
              <input type="radio" :checked="isAcc" name="radio">
              <span class="checkmark"></span>
            </label>
            <div>
              <span style="font-size: 12px;color: #d6d6d6;">Tài khoản Thực</span>
              <div class="balance cursor-pointer" @click="changeAccount(1)">
                <span style="color: #e8e8e8;font-weight: bold;font-size: 16px;">$ {{ convert(blObj.blLive) }}</span>
                <span class="reloadBalance absolute" style="right: 10px;z-index: 99999;" @click="clickShowPopTrans()">
                  <span class="material-icons-outlined cursor-pointer">sync_alt</span>
                </span>
              </div>
            </div>
          </div>
          <hr style="border-color: #414561;">
          <div class="accDemo flex mt-3">
            <label class="radio-check">
              <input type="radio" :checked="!isAcc" name="radio">
              <span class="checkmark"></span>
            </label>
            <div>
              <span style="font-size: 12px;color: #d6d6d6;">Tài khoản Demo </span>
              <div class="balance cursor-pointer" @click="changeAccount(0)">
                <span style="color: #e8e8e8;font-weight: bold;font-size: 16px;">$ {{ formatPrice(blObj.blDemo, 2) }}</span>
                <span class="absolute z-10" style="right: 10px">
                  <feather-icon icon="RotateCwIcon" svgClasses="w-5 h-5" class="block text-center h-5" @click.stop="reloadBalanceDemo()"/>
                </span>
              </div>
            </div>
          </div>
        </vs-dropdown-menu>
      </vs-dropdown>
      
    </div>
    <div class="con-img ml-3 mr-3 add-money-fix">
      <vs-button class="add-money" type="relief" @click="popupActiveNapNhanh=true,getBalanceWalletClick()">
        <span class="nowrap">{{ isMobile ? 'Nạp' : 'Nạp nhanh' }}</span>
      </vs-button>
      <!-- <vs-button type="line" icon-pack="feather" :color="colorNT" icon="icon-dollar-sign" @click.stop="viewNapTien()">Nạp nhanh</vs-button> -->
    </div>
    <!--<div class="con-img ml-3">
      <vs-button type="line" icon-pack="feather" :color="colorRT" icon="icon-dollar-sign" @click.stop="viewRutTien()">Rút tiền</vs-button>
    </div> -->
    <div class="con-img ml-3 mr-3 cursor-pointer msetting" @click="popupActiveCaiDat = true">
      <span class="block text-center h-5"><svg data-v-3bbff296="" xmlns="http://www.w3.org/2000/svg" width="17.281" height="17.283" viewBox="0 0 17.281 17.283"><g data-v-3bbff296="" id="gear" transform="translate(-2.004 -1.995)"><path data-v-3bbff296="" id="Path_30727" data-name="Path 30727" d="M18.111,9.362,16.772,9.25a6.245,6.245,0,0,0-.814-1.96l.871-1.03a1.28,1.28,0,0,0-1.8-1.8L14,5.326a6.234,6.234,0,0,0-1.963-.816L11.92,3.17a1.28,1.28,0,0,0-2.552,0L9.256,4.51a6.245,6.245,0,0,0-1.96.814l-1.03-.868a1.28,1.28,0,0,0-1.8,1.8l.871,1.029a6.239,6.239,0,0,0-.816,1.961l-1.341.112a1.281,1.281,0,0,0,0,2.552l1.341.112a6.238,6.238,0,0,0,.814,1.96l-.871,1.03a1.28,1.28,0,0,0,1.8,1.8L7.3,15.95a6.239,6.239,0,0,0,1.961.816l.112,1.341a1.281,1.281,0,0,0,2.552,0l.112-1.341a6.238,6.238,0,0,0,1.96-.814l1.03.871a1.28,1.28,0,0,0,1.8-1.8l-.871-1.029a6.233,6.233,0,0,0,.816-1.961l1.341-.112a1.281,1.281,0,0,0,0-2.552Zm-7.467,4.445a3.168,3.168,0,1,1,3.168-3.168A3.168,3.168,0,0,1,10.644,13.806Z" fill="#fff"></path></g></svg> </span>
      <span>Cài Đặt</span>
      <vs-popup class="setting" title="Cài Đặt" :active.sync="popupActiveCaiDat">
            <div class="wrap flex flex-col relative">
            <div class="line mb-3 line-language-pc line-pc flex align-center">
                <div class="type flex-1 flex align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                        <g id="globe" transform="translate(-0.324 -0.324)" opacity="0.5">
                            <line id="Line_1450" data-name="Line 1450" y2="18" transform="translate(9.824 0.824)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"></line>
                            <line id="Line_1451" data-name="Line 1451" x2="18" transform="translate(0.824 9.824)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"></line>
                            <ellipse id="Ellipse_1795" data-name="Ellipse 1795" cx="5.042" cy="8.824" rx="5.042" ry="8.824" transform="translate(4.782 1)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></ellipse>
                            <line id="Line_1452" data-name="Line 1452" x2="14.931" transform="translate(2.359 5.118)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"></line>
                            <line id="Line_1453" data-name="Line 1453" x2="14.931" transform="translate(2.359 14.53)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"></line>
                            <circle id="Ellipse_1796" data-name="Ellipse 1796" cx="9" cy="9" r="9" transform="translate(0.824 0.824)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"></circle>
                        </g>
                    </svg> <span class="white">Ngôn ngữ</span>
                </div>
                <div class="control flex-1 flex align-center">
                    <i18n />
                </div>
            </div>
            <div class="line mb-3 flex align-center">
                <div class="type flex-1 flex align-center">
                    <svg version="1.1" width="19" height="19" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 19" xml:space="preserve">
                    <g id="sound" transform="translate(0.5 -0.5)"><g id="Path_30736" fill="#887F9E">
                    <path d="M13.7,19.3c-0.2,0-0.4-0.1-0.6-0.2l-6.9-4.6H0.5c-0.6,0-1-0.4-1-1V6.3c0-0.6,0.4-1,1-1h5.7l6.9-4.6c0.3-0.2,0.7-0.2,1,0c0.3,0.2,0.5,0.5,0.5,0.9v16.8c0,0.4-0.2,0.7-0.5,0.9C14,19.3,13.9,19.3,13.7,19.3z M1.5,12.5h5c0.2,0,0.4,0.1,0.6,0.2l5.6,3.8V3.4L7.1,7.1C6.9,7.2,6.7,7.3,6.5,7.3h-5V12.5z" class="st0"></path></g> 
                    <g id="Path_30737" fill="#887F9E">
                    <path d="M16.8,15.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0c1.9-2,1.9-5.1-0.1-7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c2.8,2.7,2.8,7.1,0.1,9.9c0,0-0.1,0.1-0.1,0.1C17.2,15,17,15.1,16.8,15.1z" class="st0">
                    </path></g></g></svg>
                    <span class="white">Âm thanh</span>
                </div>
                <div class="control flex-1 flex align-center">
                    <div class="toggleButtonWrapper flex">
                        <span class="white uppercase">Off</span>
                        <vs-switch color="success" style="border: 1px solid #4e4e4e;min-width: 60px;" v-model="switchAmThanh" @change="OnOffSound"/>
                        <span class="white uppercase">On</span>
                    </div>
                </div>
            </div>
            </div>
        </vs-popup>
    </div>
    <div class="con-img ml-3 mr-3 cursor-pointer mhoso" @click.stop="viewHoSo()">
      <feather-icon icon="UserIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
      <span>Hồ Sơ</span>
    </div>
    <div class="con-img text-center relative cursor-pointer mTT show-notice" :class="{'icon-notification' : isMobile}">
        <notification-drop-down />
    </div>
    <!-- <div class="con-img ml-3 mr-3 cursor-pointer mhelper" @click.stop="viewHelp()">
      <svg class="block text-center h-5" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_17_2)">
        <path d="M10.506 18.428H14.467C14.7792 18.4281 15.0883 18.3667 15.3768 18.2473C15.6652 18.1279 15.9273 17.9528 16.1481 17.7321C16.3688 17.5113 16.5439 17.2492 16.6633 16.9608C16.7827 16.6723 16.8441 16.3632 16.844 16.051V13.675" stroke="#C1C5DB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
        <path d="M4.961 9.71399H1V13.675C1 14.0951 1.16689 14.498 1.46394 14.795C1.761 15.0921 2.1639 15.259 2.584 15.259H4.961V9.71399Z" stroke="#C1C5DB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
        <path d="M16.844 9.71399H12.883V15.259H15.26C15.6801 15.259 16.083 15.0921 16.3801 14.795C16.6771 14.498 16.844 14.0951 16.844 13.675V9.71399Z" stroke="#C1C5DB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
        <path d="M16.844 9.714V8.922C16.844 7.88167 16.6391 6.85152 16.241 5.89038C15.8429 4.92924 15.2593 4.05593 14.5237 3.3203C13.7881 2.58467 12.9148 2.00114 11.9536 1.60303C10.9925 1.20491 9.96233 1 8.922 1C6.82095 1 4.80596 1.83464 3.3203 3.3203C1.83464 4.80596 1 6.82095 1 8.922V9.714" stroke="#C1C5DB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
        </g>
        <defs>
        <clipPath id="clip0_17_2">
        <rect width="17.844" height="19.428" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <span>Trợ giúp</span>
    </div> -->

    <div v-if="$route.name.trim() === 'client-index'" class="con-img ml-3 mr-3 cursor-pointer mdot hidden xl:block" @click.stop="toggleDataSidebarHisOrder()">
      <div class="btn-dot">
        <feather-icon v-if="!$store.state.isOpenSideBar" icon="MoreVerticalIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
        <feather-icon v-else icon="ListIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
        <span v-if="countEnterOrder" class="count">{{countEnterOrder}}</span>
      </div>
    </div>

    <!-- <div class="menuMobileTopMobile">
        <div class="icon" @click="isMenuMobie = !isMenuMobie">
          <feather-icon icon="ListIcon" svgClasses="w-8 h-8"/>
        </div>
    </div>
    <div class="tabMenuMobileTOP flex items-center justify-center" :class="{'open': isMenuMobie}">
      <div class="con-img ml-3 mr-3 cursor-pointer" @click="popupActiveCaiDat = true">
        <feather-icon icon="SettingsIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
        <span>Cài Đặt</span>
      </div>
      <div class="con-img ml-3 mr-3 cursor-pointer" @click.stop="viewHoSo()">
        <feather-icon icon="UserIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
        <span>Hồ Sơ</span>
      </div>
    </div> -->

    <ho-so-user-info :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
    <his-order-bet v-if="($route.name.trim() === 'client-index') && $store.state.isRenderdTradeIndex && $store.state.isOpenSideBar" :isSidebarActive="$store.state.isOpenSideBar" @closeSidebar="toggleDataSidebarHisOrder"/>

     <!-- <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <feather-icon icon="UserIcon" svgClasses="w-8 h-8" />
        <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/pages/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>
         
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Đăng xuất</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>-->
    <vs-popup class="qDeposit" title="Nạp Nhanh" :active.sync="popupActiveNapNhanh">
        <div class="relative">
          <vs-button color="#38495d" type="filled" class="w-full text-left" @click="showPopWalSL = !showPopWalSL">
            <span class="icon USDT"></span>
            <span class="white">{{ balanceUSDT }}</span>
            <feather-icon class="material-icons right-0" icon="ChevronDownIcon" svgClasses="w-4 h-4" style="top: -3px; position: absolute !important;" />
          </vs-button> 
          <div class="listWallShow w-full" :class="{'block': showPopWalSL}">
              <span class="drop cursor-pointer w-full block" @click="selectWallet('usdt')">
                <span class="icon USDT"></span> 
                <span class="white">{{ balanceUSDT }}</span>
              </span>
          </div>
          <p class="white mt-4 mb-2 text-xs">Tiền Nạp</p>
          <div class="relative">
            <vs-input class="w-full" placeholder="Vui lòng nhập tiền nạp" @keyup="ttThucNhan" v-model="enterMoneyDeposit" />
            <span class="allIn cursor-pointer" @click="allEnterWallet()">
              <span class="uppercase">Tất cả</span>
            </span>
          </div>
          
          <p class="noticeDeposit mt-4 mb-4 text-right">
            <small>Giá trị nạp tối thiểu là $11</small>
          </p>
          <div class="sizeLarge">
            <p class="white mb-2 title">*Tổng sẽ nhận</p> 
            <p title="0.00" class="receiveAmount white mb-2 text-3xl">${{ ttNhan }}</p>
          </div>

          <vs-button class="w-full" color="success" icon-pack="feather" type="relief" @click="popupActiveNapNhanh=false,submitDeposit()">Nạp tiền ngay</vs-button>

          <p class="noticeDeposit text-center mt-2"><small>*Giá báo có thể thay đổi</small></p>
        
        </div>
    </vs-popup>
    <vs-popup class="text-center" title="Chuyển tiền" :active.sync="popupTransferActive">
        <div class="header flex">
            <div class="leftHeader flex flex-col items-center">
                <span class="text-sm mb-2 font-bold white" v-html="textWalletHtml"></span>
                <span class="text-3xl font-bold">{{ formatPrice(amountAcc, 2) }}</span>
            </div>
            <div class="rightHeader flex flex-col items-center">
                <span class="text-sm mb-2 font-bold white" v-html="textAccLive"></span> 
                <span class="text-3xl font-bold">{{ formatPrice(amountAccLive, 2) }}</span>
            </div>
            <div @click="changeTransMoney" class="changeAmount cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" class="iconTransfer"><g id="Group_10897" data-name="Group 10897" transform="translate(-559.431 -202.553)"><g id="Group_4613" data-name="Group 4613" transform="translate(559.431 202.553)"><g id="Rectangle_2919" data-name="Rectangle 2919" transform="translate(0)" fill="#e9f0fa" stroke="#e5e5e5" stroke-width="1"><rect width="30" height="30" rx="15" stroke="none"></rect> <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="none"></rect></g></g> <g id="conversion" transform="translate(567.976 210.905)"><path id="Path_13963" data-name="Path 13963" d="M13.474,6.51H1V5.376H12.1l-3.4-3.4.8-.8,4.37,4.37a.567.567,0,0,1-.4.968Z" transform="translate(-1 -1.172)" fill="#031219"></path> <path id="Path_13964" data-name="Path 13964" d="M5.536,33.338l-4.37-4.37a.567.567,0,0,1,.4-.968H14.041v1.134H2.936l3.4,3.4Z" transform="translate(-1 -20.395)" fill="#031219"></path></g></g></svg>
            </div>
        </div>
        <div class="content flex flex-col items-center">
            <div class="inputGroup mb-3 w-3/4 relative">
                <vs-input class="inputx text-left w-full" placeholder="Nhập số tiền" v-model="enterAmount" />
                <div class="input-append">
                    <button type="button" class="btn cursor-pointer" @click="enterAllMoney">Tất cả</button>
                </div>
            </div>
            <vs-button @click="clickTransMoney" color="rgb(62, 201, 214)" type="filled">Chuyển Tiền</vs-button>
        </div>
    </vs-popup>
    
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import HoSoUserInfo from '@/pages/trade/slidebar/HoSoUser'
import HisOrderBet from '@/pages/trade/slidebar/HisOrderBet.vue'
import getData from './data.json'
import AuthenticationService from '@/services/AuthenticationService'
import I18n  from "./i18n"
import NotificationDropDown from "@/pages/user/NotifiDropDown.vue"
//import { gsap } from "gsap"

export default {
  components: {
    I18n,
    HoSoUserInfo,
    NotificationDropDown,
    HisOrderBet,
  },
  data() {
    return {
      popupTransferActive: false,
      textWalletHtml: '<span class="mr-1 color-blue uppercase green">USDT</span> <span>Wallet</span>',
      textAccLive: 'Tài khoản Thực',
      amountAcc: 0,
      amountAccLive: 0,
      enterAmount: '',


      isMenuMobie: false,
      switchAmThanh: true,
      popupActiveCaiDat: false,
      popupActiveNapNhanh: false,
      numberTween: 1000,
      counter: false,
      isAcc: 0,
      blObj: getData,
      colorNT: '#0094ff',
      colorRT: '#fff',

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      interval: false,
      showPopWalSL: false,
      walletIsSelect: 'usdt',
      balanceUSDT: 0,
      enterMoneyDeposit: '',
      ttNhan: 0.00,
      isMobile,
      countEnterOrder: 0,
    }
  },
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  computed: {
    activeUserInfo() {
      return getData.displayName
    },
    isOpenQuickDeposit() {
      return this.$store.state.isOpenQuickDeposit
    },
  },
  watch: {
    number() {
      
      clearInterval(this.counter);
      if (this.number === this.numberTween) {
        return;
      }
      this.counter = setInterval(function () {
        if (Math.floor(this.numberTween) !== Math.floor(this.number)) {
          var change = (this.number - this.numberTween) / 5;
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.numberTween = this.numberTween + change;
        } else {
          this.numberTween = this.number;
          clearInterval(this.counter);
        }
      }.bind(this), 20);
    },

    isOpenQuickDeposit() {
      if (this.isOpenQuickDeposit) {
        this.popupActiveNapNhanh=true
        this.getBalanceWalletClick()
      }
    },

    popupActiveNapNhanh() {
      if (!this.popupActiveNapNhanh) {
        this.$store.commit('SET_QUICK_DEPOSIT', false)
      }
    }
  },
  methods: {

    clickShowPopTrans(){
      this.popupTransferActive=true;

      this.amountAcc = getData.balance;
      this.amountAccLive = getData.blLive;

    },

    convert(value)
{
    if(value>=1e9)
    {
        value=(value/1e9).toFixed(2);
        value=value.toString() + "B";
    }
    else if(value>=1e6)
    {
        value=(value/1e6).toFixed(2);
        value=value.toString() + "M";
    }
    else if(value>=1e3)
    {
        value=(value/1e3).toFixed(2);
        value=value.toString() + "K";
    }
    return value;
},

    clickTransMoney(){
        let amount = this.enterAmount.toString()
        amount = this.replaceAll(amount, ',', '')
        amount = this.replaceAll(amount.toString(), '-', '')
        
        if(!this.isNumber(amount) || amount <= 0){
            return this.$vs.notify({
                text:'Giá trị không hợp lệ',
                color:'danger',
                position:'top-right',
                iconPack: 'feather',
                icon:'icon-x-circle'})
        }


        if(this.typeChange){
            // nếu true thì live to wallet

             // gửi tiền từ live tới tài khoản chính
            let obj = {
                email: getData.email,
                m: amount
            }

            AuthenticationService.sendMoneyLiveToUsdt(obj)
            .then((res) => {
                if(res.data.success){
                    
                    getData.blLive -= amount
                    getData.balance += amount

                    this.amountAcc = getData.blLive
                    this.amountAccLive = getData.balance

                     // reload lại lịch sử
                    this.getListHisTradeWGD()

                    return this.$vs.notify({
                        text:'Chuyển tiền thành công',
                        color:'success',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-check'
                        })
                }else{
                     return this.$vs.notify({
                        text:'Số dư của bạn không đủ',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    })
                }
            })

        }else{
            // wallet to live

            // gửi tiền từ tài khoản chính tới live
            let obj = {
                email: getData.email,
                m: amount
            }

            AuthenticationService.sendMoneyUsdtToLive(obj)
            .then((res) => {
                if(res.data.success){

                    getData.blLive = getData.blLive + amount
                    getData.balance = getData.balance - amount

                    this.amountAcc = getData.balance
                    this.amountAccLive = getData.blLive

                    // reload lại lịch sử
                    this.getListHisTradeWGD()

                    return this.$vs.notify({
                        text:'Chuyển tiền thành công',
                        color:'success',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-check'
                        })
                }else{
                     return this.$vs.notify({
                        text:'Số dư của bạn không đủ',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    })
                }
            })
        }
    },

    changeTransMoney(){
        
        
        if(this.typeChange){
            // Live to Wallet  
            this.typeChange = false

            let b = this.textWalletHtml
            let a = this.textAccLive
            let d = getData.balance
            let c = getData.blLive

            this.textAccLive = b
            this.textWalletHtml = a
            this.amountAcc = d
            this.amountAccLive = c

        }else{ 
            // Live to Wallet
            this.typeChange = true

            let a = this.textWalletHtml
            let b = this.textAccLive
            let c = getData.balance
            let d = getData.blLive


            this.textAccLive = a
            this.textWalletHtml = b
            this.amountAcc = d
            this.amountAccLive = c

        }

    },

    enterAllMoney(){
        if(this.typeChange){
            // nếu true thì live to wallet

            this.enterAmount = getData.blLive

        }else{
            // wallet to live

            this.enterAmount = getData.balance

        }
    },
    
    // numberTo(start, end, duration, currency = false){

    //   console.log()
    //   this.blanceStart = end

    //   clearInterval(mm);
    //   var range = end - start;
    //   var minTimer = 50;
    //   var stepTime = Math.abs(Math.floor(duration / range));
    //   stepTime = Math.max(stepTime, minTimer);
    //   var startTime = new Date().getTime();
    //   var endTime = startTime + duration;

    //   var mm = setInterval(() => {
    //       var now = new Date().getTime();
    //       var remaining = Math.max((endTime - now) / duration, 0);
    //       var value = (end - (remaining * range))>>0;
    //       var blance = currency ? this.formatPrice(value, 2) : value;
    //       this.isAcc ? getData.blLive = blance : getData.blDemo = blance
    //       if (value == end) {
    //         clearInterval(mm);
    //       }
    //   }, stepTime);
    // },

    OnOffSound(){
        if(this.switchAmThanh){
          localStorage.setItem('SOUND', true);
        }else{
          localStorage.setItem('SOUND', false);
        }
    },

    ttThucNhan(e){

        let amount = e.currentTarget.value
        amount = this.replaceAll(amount, ',', '')
        amount = this.replaceAll(amount.toString(), '-', '')

        if(!this.isNumber(amount) || amount <= 0){
            return this.$vs.notify({
                text:'Giá trị không hợp lệ',
                color:'danger',
                position:'top-right',
                iconPack: 'feather',
                icon:'icon-x-circle'})
        }
      


        this.ttNhan = this.formatPrice(amount, 2)
    },

    submitDeposit(){
      let amount = this.ttNhan

      amount = this.replaceAll(amount.toString(), ',', '')
      amount = this.replaceAll(amount.toString(), '-', '')

      if(amount <= 0){
          return this.$vs.notify({
              text:'Giá trị không hợp lệ',
              color:'danger',
              position:'top-right',
              iconPack: 'feather',
              icon:'icon-x-circle'})
      }

      if(amount < 11){
        return this.$vs.notify({
              text:'Số tiền tối thiểu không đủ',
              color:'danger',
              position:'top-right',
              iconPack: 'feather',
              icon:'icon-x-circle'})
      }

      
      let obj = {
          money: amount,
          id: getData.uidLive
      }

      AuthenticationService.depositWallet(obj)
      .then((res) => {
          if(res.data.success == 1){
              getData.balance -= amount;
              getData.blLive += amount;

              this.$vs.notify({
                  text: 'Nạp tiền thành công.',
                  iconPack: 'feather',
                  icon: 'icon-check',
                  color: 'success'
              })
          }else if(res.data.success == 3){
            this.$vs.notify({
                  text: 'Số dư bạn không đủ.',
                  color:'danger',
                  position:'top-right',
                  iconPack: 'feather',
                  icon:'icon-x-circle'
              })
          }else{
            this.$vs.notify({
              text:'Giá trị không hợp lệ',
              color:'danger',
              position:'top-right',
              iconPack: 'feather',
              icon:'icon-x-circle'})
          }
      })
    },  

    allEnterWallet(){
      this.ttNhan = this.formatPrice(getData.balance, 2)
      this.enterMoneyDeposit = this.formatPrice(getData.balance, 2)

    },
    

    selectWallet(val){
      this.walletIsSelect = val
      this.showPopWalSL = false
    },

    reloadBalanceDemo(){
          $('.dropdown-account').hide()  
          AuthenticationService.reloadMoneyDemo()
          .then((res) => {
              if(res.data.success){

                  getData.blDemo = 1000;

                  this.$vs.notify({
                      text: 'Tài khoản Demo đã nạp.',
                      iconPack: 'feather',
                      icon: 'icon-check',
                      color: 'success'
                  });
              }
          })
    },

    getBalanceWalletClick(){
      AuthenticationService.getBalanceWallet()
          .then((res) => {
              if(res.data.success){
                  let mU = res.data.data.usdt
                  this.balanceUSDT = this.formatPrice(mU, 2)
              }
          })
    },

    changeAccount(val){
      if(val){
        localStorage.setItem('BO_BALANCE_TYPE', 'LIVE')
        this.isAcc = getData.isAccount = 1;
      }else{
        localStorage.setItem('BO_BALANCE_TYPE', 'DEMO')
        this.isAcc = getData.isAccount = 0;
      }
    },

    replaceAll(str, find, replace) {
        return Number(str.replace(new RegExp(find, 'g'), replace));
    },

    formatPrice(value, minimum) {
        var formatter = new Intl.NumberFormat('en-US', {
            //style: 'currency',
            //currency: '',
            minimumFractionDigits: minimum
        });
        return formatter.format(value);
    },

    isNumber(value){
        return typeof value === 'number' && isFinite(value);
    },

    viewHoSo(){ 
      // this.toggleDataSidebar(true)
      this.$router.push('/user/profile').catch(() => {})
    },

    viewHelp() {
      this.$router.push('/ho-tro').catch(() => {})
    },

    toggleDataSidebarHisOrder(){
      this.$store.commit('TOGGLE_IS_OPEN_SIDEBAR');
    },

    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },

    logout() {

        // // if user is logged in via auth0
        // if (this.$auth.profile) this.$auth.logOut();

        // // if user is logged in via firebase
        // const firebaseCurrentUser = firebase.auth().currentUser

        // if (firebaseCurrentUser) {
        //     firebase.auth().signOut().then(() => {
        //         this.$router.push('/pages/login').catch(() => {})
        //     })
        // }
        // // If JWT login
        // if(localStorage.getItem("accessToken")) {
        //   localStorage.removeItem("accessToken")
        //   this.$router.push('/pages/login').catch(() => {})
        // }

        // // Change role on logout. Same value as initialRole of acj.js
        // this.$acl.change('admin')
        // localStorage.removeItem('userInfo')
        localStorage.removeItem('tokenUser')

        // This is just for demo Purpose. If user clicks on logout -> redirect
        this.$router.push('/login').catch(() => {})
    },
  },
  created() {
    let checkSound = localStorage.hasOwnProperty('SOUND');
    if(!checkSound){
        localStorage.setItem('SOUND', true);
    }else{
        let getS = localStorage.getItem('SOUND');
        if(getS === 'false'){
            this.switchAmThanh = false;
        }
    }
    

    
    this.blanceStart = this.isAcc ? getData.blLive : getData.blDemo

    let acc = localStorage.getItem('BO_BALANCE_TYPE')
    if(acc == 'LIVE'){
      this.isAcc = getData.isAccount = 1
    }else{
      this.isAcc = getData.isAccount = 0
    }
    
  },
  mounted() {
    let stateOpen = localStorage.getItem('stateOpen');
    if (stateOpen) {
      const list = JSON.parse(stateOpen)
      if(list){
        this.countEnterOrder = list.l.bet[0].items.length;
      } else {
        this.countEnterOrder = 0;
      }
    }

    window.addEventListener('stateOpen-localstorage-changed', (event) => {
      if (!event.detail.storage) {
        this.countEnterOrder = 0;
        return;
      }
      const list = JSON.parse(event.detail.storage)
      if(list){
        this.countEnterOrder = list.l.bet[0].items.length;
      } else {
        this.countEnterOrder = 0;
      }
    });
  },
}
</script>

<style scoped>
.nowrap {
  white-space: nowrap;
}

.reloadBalance {
    right: 10px;
    background: #34d1d6;
    width: 40px;
    height: 25px;
    text-align: center;
    color: #fff;
    border-radius: 5px
}

.menuMobileTopMobile{
  display: none;
}

.tabMenuMobileTOP{
    visibility: hidden;
    position: fixed;
    height: 60px;
    left: 0;
    right: 0;
    top: -60px;
    background: #090f3e;
    z-index: 999;
    transform: translate3d(0, 0, 0);
    transition-property: -webkit-transform visibility;
    transition-property: transform visibility;
    transition-property: transform visibility, -webkit-transform visibility;
    transition-duration: .2s;
}


.notification-dropdown-button-number {
    position: absolute;
    top: -7px;
    left: calc(50% + 2px);
    display: inline-block;
    overflow: hidden;
    background: #e22a67;
    color: #fff;
    min-width: 18px;
    height: 18px;
    line-height: 14px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 9px;
    border: 2px solid #090f3e;
    padding: 0 2px;
}

.toggleButtonWrapper span {
    display: inline-block;
    line-height: 25px;
    padding-left: 5px;
    padding-right: 5px;
}

.setting .wrap .line .type svg, 
.setting .wrap .line .control svg {
    margin-right: 5px;
}

.setting .wrap .line-language-pc {
  padding: 15px;
  border-bottom: 1px solid #4A3C6F;
}

.setting .wrap .line {
  padding: 15px;
}

.qDeposit .allIn{
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    color: #00ffe9;
}

.qDeposit .listWallShow {
    position: absolute;
    z-index: 1000;
    display: none;
    background-color: #38495d;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
}

.qDeposit .listWallShow .drop{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
}

.icon.USDT {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogIDxpbWFnZSBpZD0iXzgyNSIgZGF0YS1uYW1lPSI4MjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FNQUFBQkVwSXJHQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTE5VRXhVUlV4cGNTYWdlaVdnZWdBQUFDYWdleVdnZWxXcXFpYWhleWFnZWxXcVZTV2ZlUUIvZjM5L2Z3Q3FWUzZrZndELy95dW5nU2VwZ1FDcXFpYWdlMUN2a1pIYXRpV2dlalNuaEQycmlDcWpmZ0QvQUM2cWd5K3FnMUN1a3k2b2d5K3FnMysvcjArcmp5V2llemFyaUNXaWZFMnhsQ3lrZmkrbGdDdWpmemVyaUN1bWdWZTFtVENuZ1Rhc2lEU3JoV084cGwyN216U25oQ3VtZ0dhL21UU25oQzZsZ0Mra2dDYWhlaTJrZ0N1amZpdWtmbTdIcGpXcmhpK3BnMDJ4a2k2bWdWZTJtUytsZ1RDbWdqZW5obEswbGkrbGdTV2hlbFd2a1RHcWhUQ3FoWm15c3ArL3Z6R3BoRFdsaERhb2hGQzFrelduaEN1bmdWbTRtWisvbnoydWl6MnhqaXVuZ1N5aWZUeXFpVGFvaEVtdWpGVzNsa0d5amtheWtqV3NpQzZvZ1RDbmdqV3FoaTJuZ2ordmppK25naWFoZS8vLy95V2hleW1pZlNPZ2Vkdnc2U2VoZkNhbGZpV2dlaWlpZkNlaGV5bXVoU2l0aENhcGdTbW9nU0tmZVRHbWdUU25neDJkZGlXaWZDZXBnU1dqZkNhamZCcWNkUDcvL2htYmN5U2dlc3ZvM3grZWR6R21ndS80OVNXaGVoYWFjZTc0OVJlYWNoNmRkdXYyOHlDZmVDK2xnU1dtZmlhcGdDYW5meVNoZWlhamZTYWtmU21wZ1NLZmVCZWJjak9uZzNEQnFDZWlmS25heTJLN29QMysvaWlpZlRpcGhrcXhrUnFiYzZ6YnpDeWtmeGFhY3UzNDlPcjI4b2pMdGtpd2tLSFd4b2pNdDludjZCdWNkRkcwbG4vSXNYSENxVHVxaUpIUHZNN3E0V3kvcFNHZmQ4am8zUk9aYiszMzlNcm8zMlc4b1dPOG9HRzduMTY2bllMSnMvRDU5dkw1OXkya2YvNy8vL1Q2K0h6SHNDbXVoRE9uZ3FyYXl5aXRnekNtZ2QveDdOenc2cXZiekwvajJmTDY5Mk83b0hQQ3FyL2oyQ2FnZXltaWZHL0JwNFRLdERlb2hST1liNGJMdFNTZ2VXSzduL3I5L0dpK28vdjkvWUhKc2hPWWNFT3RqQmliY3l1amZtcStwQ3VqZlVDc2lpMmxmeWFoZWhtY2MvajgrK24xOG5qRXJYZkVyTzczOWQveTdQYjcraUtnZU56djZuL0hzVVF3dEUwQUFBQmxkRkpPVXdEKyt3SDgvUVArK3dQN0FnSUQvZ0g2L2dQK013ZjZwbC9zQWV2b0p1cnJDQ1Q4aXZ3azc5YnVoK2N0MUpla0Z4U1krUlNhL2Z6OTArM3JGNkhMSWM4anpzK0pJdEg2TTgzTENnaktpWWNtaWZzb0NGOWY5KzFkcFNZblhTaVU2TkdVNTEzUktIWXZ3d0FBQXVsSlJFRlVPTXR0VS9WYlZFRVVuUzNlZ3NTcXBJQ0VvQklpaW9xQzNkM2ROY05iMkY1Z2lRMldFRnhRQkJXbEpFd2FwVlRDN3U3dXpyL0JlYkdyZkhKK21ybm5mSFB2ekp3REFJMStmUUFZdWpRa2VMQzkvZURna0dWREFlakRBLy9BRm9DZ0lZSHFSRW1DVkpvZ1NWUUhEZ21paTJaWWdka0RSTW84QVo5RFFFaHcrSUk4cFdpQU43RCt5M3ZPVktSeiswSUwrbkxUejQzenhBUU5hK0RvdnNPWmdOMUFURmQ1T1RKbjJBSi85eHdoL0EvQ0hLK0oxQndPZGs3VGR2VEFZNFZxZ3BPZEF6NWxuc0tHMmtkMUExV3hVU3pFTkcveElsOENrdnE3MGNlaUxUZ1dmVk5QUXNKUHRBYS94Z2dsRjBJeXN3WjF3NzFNRWtLdWNnUUFvVzY3OEFYSWl1ZDBYVmRVcEtNWER5dXdnRWgyQ3dPdWFnRnVWMXoxTk9WRVNrdkRFNFNlTmJUZ1pXTlZNUzRMOGwyQlMyOCtOVkNNd1dUTSt2amhJRUtWcE41b05CbmtWSlhmMndVTWtuRHdTaWJWR01WdjM3OXJScWo5WmVkcnNWRWpsZUV5UnpJYURFekFJOGkwNWRXbjJscFB2bW52NnVwb1BObmFkcXE2WElzVlJOSVlZQy9Gdk9iRzBjTjEyYVNwOHh0Q0hka21NcnZ1OEtIQ0xLeVFqcVFGWk1iVld5V0dWeGxOUDMrZE9mTTkvVVdtM2xCeTdVSUdTUXZvRmpDMllIL1prZnJUWDgvK3Jqbjc1WFQ5a2JMOUJic2gwNElaRXU3UnBwWStyajMwQTZGUFIyc0xTK08wZXlBN0pIdE5VaWJXSEdnNi9obWg1a2NQRG1qRU1wSzU1aXJnbWk5Z2YyL2ZIUmkvSGFGdDkyK1QrOWlTUUwwU2hORlBUVU11anFNRThiRXhadGNrcndnRllCajFXVDBMdU1waEFQQVdpSHdKaStDZ1RsZHBFUkIrdy8xNTJKaFRHTVBRZ2pTRXJsc0VOb3I1bU1hV202d1Nzb0pMVjlMU0xwOW5CVUxWSkc5c09kQUxUTzIva3pXbFBIWHYzbFE1YThtZC9jZGprckc5aDRxMXZSaUQ2ZStzOHBoaGpvNFY4Sm1saUJKU3dZbkJvSUlqakZMTTlURUhoenBqU2NCd1paS0FIMDVGTDV3dlNMcTRQR0RPMytoUmM0QjE2emZqOENibjVpYmo4RzdZdEJvdy9jMmc0aCs1WmV6V2lGR2pJamFPWFJ1SjQ5K1BZZjRBS2NwYTNSVHNiVzBBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K);
    background-repeat: no-repeat;
    background-position: center;
}

.icon.ETH {
    background: url('~@/assets/images/sky/eth.svg');
    background-repeat: no-repeat;
    background-position: 50%;
}

.icon.BTC {
    background: url('~@/assets/images/sky/bitcoin.svg');
    background-repeat: no-repeat;
    background-position: 50%;
}

.mhelper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mhelper span {
  text-align: center;
  white-space: nowrap;
}

@media screen and (max-width: 600px) {
  .msetting, .mhoso, .ttM, .mhelper {
    display: none !important;
  }

  .mTT svg{
    width: 1.7rem !important;
    height: 1.7rem !important;
  }

  .mTT .notification-dropdown-button-number{
    top: -10px;
    min-width: 22px;
    height: 22px;
    line-height: 18px;
    font-size: 12px;
  }

  .menuMobileTopMobile{
      position: fixed;
      right: 0;
      top: 60px;
      background: #090f3e;
      padding: 0px 10px;
      border-bottom-left-radius: 20px;
      display: block;
      cursor: pointer;
  }

  .tabMenuMobileTOP.open{
      visibility: visible;
      transform: translate3d(0, 100%, 0);
  }
 
}

@media screen and (max-width: 376px) {
  /* .text-acc{
      zoom: .8;
    } */
  .text-down{
    width: 1.2rem !important;
    height: 1.2rem !important;
  }
  .vs-tabs--li button.vs-tabs--btn{
    font-size: 12px;
  }
}


.content .inputGroup .input-append button {
    width: 60px;
    height: 38px;
    background: transparent;
    border: none;
}

.content .inputGroup .input-append {
    position: absolute;
    top: 0;
    right: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
}

.content {
    padding: 2rem;
}


.header {
    position: relative;
    background-color: #181c21;
}

.header .leftHeader {
    border-right: 1px solid rgba(255, 255, 255, 0.17);
}

.header .leftHeader, 
.header .rightHeader {
    padding: 2rem;
    flex: 1 auto;
    max-width: 50%;
}

.header .iconTransfer {
    width: 40px;
    height: 40px;
}

.header .changeAmount {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

</style>
<style >

.content .inputGroup input {
    background: #fff;
    color: #545454;
}

@media screen and (max-width: 376px) {
  .vs-tabs--li button.vs-tabs--btn{
    font-size: 12px;
  }
}

.navbar-floating .vx-navbar{
  padding: 0.5rem 15px;
  height: 56px;
  display: flex;
  align-items: center;
}

.setting .vs-popup{
  width: 390px !important;
}

.qDeposit .vs-popup{
  width: 300px !important;
}
.qDeposit .vs-button--text{
  width: 100%;
}
.qDeposit .vs-button--text > span.icon, 
.qDeposit .listWallShow .drop> span.icon {
    width: 20px;
    height: 20px;
    overflow: hidden;
    margin-right: 4px;
}

.qDeposit .vs-button--text > span, 
.qDeposit .listWallShow .drop> span {
    line-height: 20px;
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
}

.vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {
    padding: 0.75rem 1rem;
}

.wrapper-money {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.text-money {
  cursor: pointer;
  font-size: 15px;
  line-height: 16px;
  font-weight: 900;
  color: #fff;
  margin-top: 3px;
  font-family: Sarabun, sans-serif;
}

.btn-dot {
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #444A5F;
  border-radius: 6px;
  margin-bottom: 5px;
  position: relative;
}

.btn-dot .count {
    position: absolute;
    top: -7px;
    left: calc(50% + 2px);
    display: inline-block;
    overflow: hidden;
    background: #e22a67;
    color: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 22px;
    height: 22px;
    line-height: 14px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 9px;
    border: 2px solid #090f3e;
    padding: 0 2px;
}

@media screen and (max-width: 600px) {
    .btn-dot .count{
        top: -10px;
        line-height: 18px;
        font-size: 12px;
    }
}
@media screen and (max-width: 1200px) {
    .add-money, .add-money-fix {
      display: none;
    }
}
.add-money {
  box-shadow: inset 0 -3px 0 0 rgb(0 0 0 / 20%);
  background: linear-gradient(180deg,#34d1d6,#34d1d6 50%,#34d1d6)!important;
  color: #fff!important;
  font-weight: 600;
  border-radius: 10px;
}

.info-money {
  background-color: #2f3342!important;
  height: 41px;
  width: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-streak-rewards {
    height: 40px;
    padding: 5px 10px 4px 24px;
    border: 1px solid #592ae6;
    border-radius: 6px;
    background: linear-gradient(133deg,#020024,#290c7e 0,#592ae6);
    text-align: left;
    position: relative;
}
#rightNav a span {
    white-space: nowrap;
}

.nav-streak-rewards-label {
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    margin-bottom: 3px;
    font-family: Lato;
}
.d-block {
    display: block!important;
}
#rightNav a span {
    white-space: nowrap;
}

.nav-streak-rewards-value {
    font-size: 15px;
    line-height: 16px;
    font-weight: 900;
    color: #f7a62f;
}
.nav-streak-rewards:before {
    content: "";
    display: block;
    width: 44px;
    height: 44px;
    background: url(data:image/png;base64,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) 0 0 no-repeat;
    position: absolute;
    left: -22px;
    right: -5px;
    top: -4px ;
}
.accLive {
  display: flex;
}
/* The radio-check */
.radio-check {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #2f3342;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio-check:hover input ~ .checkmark {
  background-color: #2f3342;
}

/* When the radio button is checked, add a blue background */
.radio-check input:checked ~ .checkmark {
  background-color: #2f3342;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-check input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-check .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #34d1d6;
}

@media (max-width: 1200px) {
    .icon-notification {
        padding: 8px 7px 4px 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1d233b;
        border-radius: 4px;
    }
}

.show-notice .vs-sidebar--background{
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.show-notice .vs-content-sidebar {
  position: relative;
}

.show-notice .vs-sidebar-parent {
    max-width: unset !important;
    left: unset !important;
    right: 0;
    height: unset !important;
    width: 400px;
    top: 18px;
}

.btn-streak-challenge {
  width: 95px;
  display: block;
  margin-left: 1rem;
}
</style>
