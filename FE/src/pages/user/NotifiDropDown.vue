<template>
  <div>
    <vs-dropdown
      vs-custom-content
      vs-trigger-click
      class="wrapper-notification-1 cursor-pointer"
      v-if="!isMobile"
    >
      <template>
        <feather-icon
          icon="BellIcon"
          svgClasses="w-5 h-5"
          class="block text-center h-5"
        />
        <span class="block ttM">Thông Báo</span>
        <span class="notification-dropdown-button-number">{{ countNews }}</span>
      </template>

      <vs-dropdown-menu class="dropdown-custom vx-navbar-dropdown">
        <div class="wrapper-notification bordered-items">
          <div class="left">
            Thông báo
            <svg
              v-if="countNews"
              @click="readAllNoti()"
              data-v-2d9e44ac=""
              data-v-221cd0d8=""
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="21"
              viewBox="0 0 38 21"
              class="icon-svg-notification"
            >
              <g
                data-v-2d9e44ac=""
                data-v-221cd0d8=""
                id="Group_21335"
                data-name="Group 21335"
                transform="translate(-917 -81)"
              >
                <rect
                  data-v-2d9e44ac=""
                  data-v-221cd0d8=""
                  id="Rectangle_4940"
                  data-name="Rectangle 4940"
                  width="38"
                  height="21"
                  rx="3"
                  transform="translate(917 81)"
                  fill="#34D1D6"
                ></rect>
                <g
                  data-v-2d9e44ac=""
                  data-v-221cd0d8=""
                  id="check-all"
                  transform="translate(924.785 83.931)"
                >
                  <path
                    data-v-2d9e44ac=""
                    data-v-221cd0d8=""
                    id="Path_35112"
                    data-name="Path 35112"
                    d="M4.773,18.9,0,14.123l1.3-1.3,3.91,2.607L14.336,5l1.3.652L6.757,18.727a1.3,1.3,0,0,1-1.985.168Z"
                    transform="translate(0 -5)"
                    fill="#fefefe"
                  ></path>
                  <path
                    data-v-2d9e44ac=""
                    data-v-221cd0d8=""
                    id="Path_35113"
                    data-name="Path 35113"
                    d="M28.91,10.3H25.652a.652.652,0,1,1,0-1.3H28.91a.652.652,0,1,1,0,1.3Z"
                    transform="translate(-8.709 -6.393)"
                    fill="#fefefe"
                  ></path>
                  <path
                    data-v-2d9e44ac=""
                    data-v-221cd0d8=""
                    id="Path_35114"
                    data-name="Path 35114"
                    d="M27.516,17.3H21.652a.652.652,0,0,1,0-1.3h5.865a.652.652,0,1,1,0,1.3Z"
                    transform="translate(-7.316 -8.832)"
                    fill="#fefefe"
                  ></path>
                  <path
                    data-v-2d9e44ac=""
                    data-v-221cd0d8=""
                    id="Path_35115"
                    data-name="Path 35115"
                    d="M25.774,24.3H16.652a.652.652,0,0,1,0-1.3h9.123a.652.652,0,0,1,0,1.3Z"
                    transform="translate(-5.574 -11.271)"
                    fill="#fefefe"
                  ></path>
                </g>
              </g>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="21"
              viewBox="0 0 38 21"
              class="isReaded"
            >
              <g
                id="Group_21335"
                data-name="Group 21335"
                transform="translate(-917 -81)"
              >
                <rect
                  id="Rectangle_4940"
                  data-name="Rectangle 4940"
                  width="38"
                  height="21"
                  rx="3"
                  transform="translate(917 81)"
                  fill="#34D1D6"
                ></rect>
                <g id="check-all" transform="translate(924.785 83.931)">
                  <path
                    id="Path_35112"
                    data-name="Path 35112"
                    d="M4.773,18.9,0,14.123l1.3-1.3,3.91,2.607L14.336,5l1.3.652L6.757,18.727a1.3,1.3,0,0,1-1.985.168Z"
                    transform="translate(0 -5)"
                    fill="#fefefe"
                  ></path>
                  <path
                    id="Path_35113"
                    data-name="Path 35113"
                    d="M28.91,10.3H25.652a.652.652,0,1,1,0-1.3H28.91a.652.652,0,1,1,0,1.3Z"
                    transform="translate(-8.709 -6.393)"
                    fill="#fefefe"
                  ></path>
                  <path
                    id="Path_35114"
                    data-name="Path 35114"
                    d="M27.516,17.3H21.652a.652.652,0,0,1,0-1.3h5.865a.652.652,0,1,1,0,1.3Z"
                    transform="translate(-7.316 -8.832)"
                    fill="#fefefe"
                  ></path>
                  <path
                    id="Path_35115"
                    data-name="Path 35115"
                    d="M25.774,24.3H16.652a.652.652,0,0,1,0-1.3h9.123a.652.652,0,0,1,0,1.3Z"
                    transform="translate(-5.574 -11.271)"
                    fill="#fefefe"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="right" @click="goNotificationPage()">Xem tất cả</div>
        </div>
        <div id="loading-corners" class="vs-con-loading__container">
          <VuePerfectScrollbar
            ref="mainSidebarPs"
            class="scroll-area--nofications-dropdown p-0"
            :settings="settings"
            :key="$vs.rtl"
          >
            <ul class="bordered-items">
              <div
                v-if="unreadNotifications.length === 0"
                class="no-notification"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.899"
                  height="23.949"
                  viewBox="0 0 21.899 23.949"
                >
                  <g id="bell" transform="translate(-3.7 -1)">
                    <path
                      id="Path_35098"
                      data-name="Path 35098"
                      d="M24.4,15.9a4.983,4.983,0,0,1-1.625-3.676V9.048A8.289,8.289,0,0,0,14.649,1,8.331,8.331,0,0,0,6.524,9.125v3.1A4.983,4.983,0,0,1,4.9,15.9a3.505,3.505,0,0,0-1.2,2.36c0,2.128,4.411,3.559,10.949,3.559S25.6,20.384,25.6,18.256A3.589,3.589,0,0,0,24.4,15.9Z"
                      transform="translate(0 0)"
                      fill="#878098"
                    ></path>
                    <path
                      id="Path_35099"
                      data-name="Path 35099"
                      d="M26.6,56.555a31.474,31.474,0,0,1-3.4-.155,3.506,3.506,0,0,0,3.4,2.515,3.552,3.552,0,0,0,3.4-2.515A31.474,31.474,0,0,1,26.6,56.555Z"
                      transform="translate(-11.955 -33.966)"
                      fill="#878098"
                    ></path>
                  </g>
                </svg>
                <div>Không có thông báo mới</div>
              </div>
              <li
                v-for="ntf in unreadNotifications"
                :key="ntf.index"
                class="
                  flex
                  justify-between
                  px-4
                  py-4
                  notification
                  cursor-pointer
                "
              >
                <div class="flex items-center">
                  <span
                    v-html="getIcon(ntf.type)"
                    style="width: 30.33px"
                  ></span>
                  <div class="mx-2">
                    <span
                      class="font-medium block notification-title"
                      :class="[`text-${ntf.category}`]"
                      >{{ ntf.title }}</span
                    >
                    <small v-html="ntf.msg"></small>
                  </div>
                </div>
                <small class="mt-1 whitespace-no-wrap">{{ ntf.time }}</small>
              </li>
            </ul>
          </VuePerfectScrollbar>
        </div>
      </vs-dropdown-menu>
    </vs-dropdown>

    <div v-else @click="isSidebarActiveLocal = true">
      <span class="material-icons white">notifications</span>
      <span class="notification-dropdown-button-number">{{ countNews }}</span>
    </div>

    <vs-sidebar
      click-not-close
      position-right
      parent="body"
      default-index="1"
      color="primary"
      class="toggle-notice items-no-padding"
      spacer
      v-model="isSidebarActiveLocal"
    >
      <div class="wrapper-notification">
        <div class="left">
          Thông báo
          <svg
            v-if="countNews"
            @click="readAllNoti()"
            data-v-2d9e44ac=""
            data-v-221cd0d8=""
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="21"
            viewBox="0 0 38 21"
            class="icon-svg-notification"
          >
            <g
              data-v-2d9e44ac=""
              data-v-221cd0d8=""
              id="Group_21335"
              data-name="Group 21335"
              transform="translate(-917 -81)"
            >
              <rect
                data-v-2d9e44ac=""
                data-v-221cd0d8=""
                id="Rectangle_4940"
                data-name="Rectangle 4940"
                width="38"
                height="21"
                rx="3"
                transform="translate(917 81)"
                fill="#34D1D6"
              ></rect>
              <g
                data-v-2d9e44ac=""
                data-v-221cd0d8=""
                id="check-all"
                transform="translate(924.785 83.931)"
              >
                <path
                  data-v-2d9e44ac=""
                  data-v-221cd0d8=""
                  id="Path_35112"
                  data-name="Path 35112"
                  d="M4.773,18.9,0,14.123l1.3-1.3,3.91,2.607L14.336,5l1.3.652L6.757,18.727a1.3,1.3,0,0,1-1.985.168Z"
                  transform="translate(0 -5)"
                  fill="#fefefe"
                ></path>
                <path
                  data-v-2d9e44ac=""
                  data-v-221cd0d8=""
                  id="Path_35113"
                  data-name="Path 35113"
                  d="M28.91,10.3H25.652a.652.652,0,1,1,0-1.3H28.91a.652.652,0,1,1,0,1.3Z"
                  transform="translate(-8.709 -6.393)"
                  fill="#fefefe"
                ></path>
                <path
                  data-v-2d9e44ac=""
                  data-v-221cd0d8=""
                  id="Path_35114"
                  data-name="Path 35114"
                  d="M27.516,17.3H21.652a.652.652,0,0,1,0-1.3h5.865a.652.652,0,1,1,0,1.3Z"
                  transform="translate(-7.316 -8.832)"
                  fill="#fefefe"
                ></path>
                <path
                  data-v-2d9e44ac=""
                  data-v-221cd0d8=""
                  id="Path_35115"
                  data-name="Path 35115"
                  d="M25.774,24.3H16.652a.652.652,0,0,1,0-1.3h9.123a.652.652,0,0,1,0,1.3Z"
                  transform="translate(-5.574 -11.271)"
                  fill="#fefefe"
                ></path>
              </g>
            </g>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="21"
            viewBox="0 0 38 21"
            class="isReaded"
          >
            <g
              id="Group_21335"
              data-name="Group 21335"
              transform="translate(-917 -81)"
            >
              <rect
                id="Rectangle_4940"
                data-name="Rectangle 4940"
                width="38"
                height="21"
                rx="3"
                transform="translate(917 81)"
                fill="#34D1D6"
              ></rect>
              <g id="check-all" transform="translate(924.785 83.931)">
                <path
                  id="Path_35112"
                  data-name="Path 35112"
                  d="M4.773,18.9,0,14.123l1.3-1.3,3.91,2.607L14.336,5l1.3.652L6.757,18.727a1.3,1.3,0,0,1-1.985.168Z"
                  transform="translate(0 -5)"
                  fill="#fefefe"
                ></path>
                <path
                  id="Path_35113"
                  data-name="Path 35113"
                  d="M28.91,10.3H25.652a.652.652,0,1,1,0-1.3H28.91a.652.652,0,1,1,0,1.3Z"
                  transform="translate(-8.709 -6.393)"
                  fill="#fefefe"
                ></path>
                <path
                  id="Path_35114"
                  data-name="Path 35114"
                  d="M27.516,17.3H21.652a.652.652,0,0,1,0-1.3h5.865a.652.652,0,1,1,0,1.3Z"
                  transform="translate(-7.316 -8.832)"
                  fill="#fefefe"
                ></path>
                <path
                  id="Path_35115"
                  data-name="Path 35115"
                  d="M25.774,24.3H16.652a.652.652,0,0,1,0-1.3h9.123a.652.652,0,0,1,0,1.3Z"
                  transform="translate(-5.574 -11.271)"
                  fill="#fefefe"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <feather-icon
          icon="XIcon"
          @click.stop="isSidebarActiveLocal = false"
          class="cursor-pointer"
        ></feather-icon>
      </div>
      <div id="loading-corners" class="vs-con-loading__container">
        <VuePerfectScrollbar
          ref="mainSidebarPs"
          class="scroll-area--nofications-dropdown p-0"
          :settings="settings"
          :key="$vs.rtl"
        >
          <ul class="bordered-items">
            <div
              v-if="unreadNotifications.length === 0"
              class="no-notification"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.899"
                height="23.949"
                viewBox="0 0 21.899 23.949"
              >
                <g id="bell" transform="translate(-3.7 -1)">
                  <path
                    id="Path_35098"
                    data-name="Path 35098"
                    d="M24.4,15.9a4.983,4.983,0,0,1-1.625-3.676V9.048A8.289,8.289,0,0,0,14.649,1,8.331,8.331,0,0,0,6.524,9.125v3.1A4.983,4.983,0,0,1,4.9,15.9a3.505,3.505,0,0,0-1.2,2.36c0,2.128,4.411,3.559,10.949,3.559S25.6,20.384,25.6,18.256A3.589,3.589,0,0,0,24.4,15.9Z"
                    transform="translate(0 0)"
                    fill="#878098"
                  ></path>
                  <path
                    id="Path_35099"
                    data-name="Path 35099"
                    d="M26.6,56.555a31.474,31.474,0,0,1-3.4-.155,3.506,3.506,0,0,0,3.4,2.515,3.552,3.552,0,0,0,3.4-2.515A31.474,31.474,0,0,1,26.6,56.555Z"
                    transform="translate(-11.955 -33.966)"
                    fill="#878098"
                  ></path>
                </g>
              </svg>
              <div>Không có thông báo mới</div>
            </div>
            <li
              v-for="ntf in unreadNotifications"
              :key="ntf.index"
              class="flex justify-between px-4 py-4 notification cursor-pointer"
            >
              <div class="flex items-center">
                <span v-html="getIcon(ntf.type)" style="width: 30.33px"></span>
                <div class="mx-2">
                  <span
                    class="font-medium block notification-title"
                    :class="[`text-${ntf.category}`]"
                    >{{ ntf.title }}</span
                  >
                  <small v-html="ntf.msg"></small>
                </div>
              </div>
              <small class="mt-1 whitespace-no-wrap">{{ ntf.time }}</small>
            </li>
          </ul>
        </VuePerfectScrollbar>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
var connection = false;

import VuePerfectScrollbar from "vue-perfect-scrollbar";
import AuthenticationService from "@/services/AuthenticationService";
import getData from "@/pages/trade/navbar/components/data.json";
import moment from "moment";
import SETTINGS from "../../../settings.json";
import { isMobile } from "mobile-device-detect";

moment.updateLocale("en", {
  relativeTime: {
    h: "1 giờ",
    hh: "%d giờ",
    d: "1 ngày",
    dd: "%d ngày",
    w: "1 tuần",
    ww: "%d tuần",
    M: "1 tháng",
    MM: "%d tháng",
    y: "1 năm",
    yy: "%d năm",
    future: (diff) => (diff == "bây giờ" ? diff : `trong ${diff}`),
    past: (diff) => (diff == "bây giờ" ? diff : `${diff} trước`),
    s: "bây giờ",
    ss: "%d giây",
  },
});

export default {
  components: {
    VuePerfectScrollbar,
  },
  data() {
    return {
      isMobile,
      countNews: 0,
      unreadNotifications: [
        {
          index: 0,
          title: "Nạp tiền",
          msg: "Bạn vừa nhận $ 10.00 từ <b>ABC</b>",
          icon: "MessageSquareIcon",
          time: "",
          category: "success",
        },
      ],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      isShowNotice: false,
      isSidebarActiveLocal: false,
    };
  },
  methods: {
    mouseEnter() {
      this.$store.commit("UPDATE_SHOW_NOTICE", false);
    },
    mouseLeave() {
      this.$store.commit("UPDATE_SHOW_NOTICE", true);
    },

    getHMS(value) {
      if (value) {
        let now = moment(String(value)).fromNow();
        //let mim = moment(String(value)).format('mm');
        //let sec = moment(String(value)).format('ss');
        return now;
      }
    },

    getListNotifi() {
      this.unreadNotifications = [];
      let obj = {
        e: getData.email,
      };

      AuthenticationService.getListNotifi(obj).then((res) => {
        this.$vs.loading.close("#loading-corners > .con-vs-loading");
        if (res.data.success) {
          let dataN = res.data.data;
          for (let i = 0; i < dataN.length; i++) {
            if (dataN[i].views === 0) this.countNews++;
            let json = {
              index: i,
              title: dataN[i].title,
              msg: dataN[i].content,
              type: dataN[i].type,
              time: this.getHMS(dataN[i].created_at),
              category: "success",
            };

            this.unreadNotifications.push(json);
          }
        }
      });
    },

    readAllNoti() {
      this.countNews = 0;
      AuthenticationService.updateListNotifi({
        e: getData.email,
      });
    },

    openLoadingInDiv() {
      this.$vs.loading({
        container: "#loading-corners",
        type: "corners",
        scale: 0.6,
      });
    },

    goNotificationPage() {
      this.$router.push("/thong-bao");
    },

    sendMessage(message) {
      this.connection.send(JSON.stringify(message));
    },

    getIcon(type) {
      switch (type) {
        case "vip":
          return `<svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5446 16.239L18.2442 14.0783C17.9405 13.4805 17.7646 12.8259 17.7277 12.1563V8.86625C17.7258 7.41525 17.313 5.99445 16.5373 4.76826C15.7615 3.54206 14.6543 2.56059 13.344 1.93743C13.0096 1.34377 12.522 0.850799 11.932 0.510024C11.342 0.169249 10.6714 -0.00682409 9.99006 0.00020236C9.30359 -0.000581737 8.62941 0.182217 8.03736 0.529656C7.44532 0.877095 6.95695 1.37653 6.62287 1.97622C5.33754 2.61212 4.25503 3.59392 3.49703 4.81125C2.73903 6.02858 2.33558 7.4332 2.33201 8.86723V12.1573C2.29597 12.824 2.11871 13.4755 1.81198 14.0685L0.498895 16.239C0.237315 16.6372 0.0730472 17.0914 0.0193557 17.5648C-0.0343358 18.0382 0.0240535 18.5177 0.189809 18.9644C0.355564 19.4111 0.624041 19.8125 0.973559 20.1363C1.32308 20.4601 1.74384 20.6972 2.20188 20.8284C4.72356 21.6786 7.36771 22.1091 10.0288 22.1027C12.6886 22.107 15.3316 21.681 17.8553 20.8412C18.3022 20.6924 18.7098 20.4448 19.0478 20.1168C19.3859 19.7889 19.6457 19.3889 19.808 18.9468C19.9703 18.5046 20.0309 18.0316 19.9853 17.5628C19.9397 17.0941 19.789 16.6416 19.5446 16.239V16.239Z" fill="#fff"/>
<path d="M13.6824 23.4154C13.4094 24.1727 12.9098 24.8276 12.2514 25.291C11.5931 25.7544 10.808 26.0038 10.0029 26.0052C9.48959 26.0056 8.98137 25.9034 8.50806 25.7047C8.03475 25.5061 7.60587 25.2149 7.2466 24.8483C6.83138 24.4466 6.51923 23.9507 6.33667 23.4026C6.50559 23.4286 6.67452 23.4414 6.8567 23.4674C7.15575 23.5062 7.46758 23.5455 7.77989 23.5715C8.52089 23.6363 9.27516 23.6756 10.0289 23.6756C10.7699 23.6756 11.5109 23.6368 12.2387 23.5715C12.5117 23.5455 12.7847 23.5327 13.045 23.4934L13.6824 23.4154Z" fill="#FEFEFE"/>
<path opacity="0.4" d="M11.589 4.03919C12.3814 3.89693 13.1984 4.00218 13.9289 4.34063C14.6594 4.67909 15.2679 5.23431 15.6717 5.93081C15.9284 6.37548 16.0938 6.86697 16.158 7.37643C16.2223 7.88588 16.1841 8.40304 16.0458 8.89753C15.906 9.45732 15.6333 9.97515 15.2509 10.4072C15.1889 10.2479 15.1155 10.0952 15.047 9.9244C14.9315 9.64577 14.8099 9.3576 14.6755 9.07284C14.3612 8.3987 14.0181 7.72585 13.6412 7.07306C13.2707 6.43133 12.8666 5.809 12.4461 5.2114C12.2871 4.98797 12.1395 4.7579 11.9754 4.55215L11.589 4.03919Z" fill="#FEFEFE"/>
</svg>`;
        case "nap":
          return `<svg id="Group_21411" data-name="Group 21411" xmlns="http://www.w3.org/2000/svg" width="32.367" height="28.505" viewBox="0 0 32.367 28.505">																			
<path id="Combined-Shape" d="M13.831,8.69c.063-.063.137-.106.2-.167a10.488,10.488,0,0,0-3.476-.633,10.558,10.558,0,1,0,9.183,15.67l-5.923-5.925A6.32,6.32,0,0,1,13.831,8.69Zm17.917,2.986a2.1,2.1,0,0,0-2.973-.015l-2.382,2.382V2.605a2.112,2.112,0,0,0-4.223,0V14.043l-2.38-2.382A2.113,2.113,0,0,0,16.8,14.649l6,6a2.071,2.071,0,0,0,1.47.6,2.045,2.045,0,0,0,1.489-.6l6-6A2.113,2.113,0,0,0,31.748,11.676Z" transform="translate(0 -0.5)" fill="#2077fc" fill-rule="evenodd"></path>																			
<path id="Combined-Shape-2" data-name="Combined-Shape" d="M13.831,5.616c.063-.063.137-.106.2-.167a10.488,10.488,0,0,0-3.476-.633,10.558,10.558,0,1,0,9.183,15.67L13.818,14.56A6.32,6.32,0,0,1,13.831,5.616Z" transform="translate(0 2.575)" fill="#fefefe" fill-rule="evenodd"></path>																			
</svg>`;
        case "rut":
          return `<svg id="Group_21412" data-name="Group 21412" xmlns="http://www.w3.org/2000/svg" width="30.338" height="28.644" viewBox="0 0 30.338 28.644">                                                                          
<g id="icon-withdraw-red" transform="translate(0 0)">                                                                         
<g id="icon-withdraw">                                                                          
<path id="Combined-Shape" d="M16.362,18.069V13.942a6.052,6.052,0,0,1-5.749-5.721c-.131,0-.252-.037-.383-.037a10.23,10.23,0,1,0,8.976,15.04A6.122,6.122,0,0,1,16.362,18.069ZM24.546,6.985l2.308,2.308A2.046,2.046,0,0,0,29.746,6.4L23.934.585a2.05,2.05,0,0,0-2.868,0L15.253,6.4a2.046,2.046,0,0,0,2.893,2.893l2.308-2.308V18.068a2.046,2.046,0,0,0,4.092,0Z" transform="translate(0 0)" fill="#2077fc" fill-rule="evenodd"></path>                                                                            
</g>                                                                          
</g>                                                                          
<g id="icon-withdraw-red-2" data-name="icon-withdraw-red" transform="translate(0 8.184)">                                                                           
<g id="icon-withdraw-2" data-name="icon-withdraw">                                                                            
<path id="Combined-Shape-2" data-name="Combined-Shape" d="M16.362,15.024V10.9a6.052,6.052,0,0,1-5.749-5.721c-.131,0-.252-.037-.383-.037a10.23,10.23,0,1,0,8.976,15.04A6.122,6.122,0,0,1,16.362,15.024Z" transform="translate(0 -5.14)" fill="#fefefe" fill-rule="evenodd"></path>                                                                           
</g>                                                                          
</g>                                                                          
</svg>`;
        case "kyc":
          return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27.842" height="30.5" viewBox="0 0 27.842 30.5">																			
<defs>																			
<clipPath id="clip-path">																			
<path id="Path_35315" data-name="Path 35315" d="M-2202.038,313.372l.118,2.1s8.453.907,8.531.763a26.961,26.961,0,0,0-1.42-2.96s-.376-2.639-.364-2.793a1.162,1.162,0,0,0-1.17-.781c-.8-.011-4.493-.26-4.829-.232s-1.265.1-1.3.232S-2202.038,313.372-2202.038,313.372Z" transform="translate(2202.477 -309.468)" fill="none" stroke="#707070" stroke-width="1"></path>																			
</clipPath>																			
<clipPath id="clip-path-2">																			
<circle id="Ellipse_2126" data-name="Ellipse 2126" cx="7" cy="7" r="7" transform="translate(0.055 0.285)" fill="#fea829" stroke="#707070" stroke-width="1"></circle>																			
</clipPath>																			
</defs>																			
<g id="Group_21418" data-name="Group 21418" transform="translate(18013.039 -2904.5)">																			
<g id="Group_21416" data-name="Group 21416" transform="translate(-18012.539 2905)">																			
<g id="Group_21348" data-name="Group 21348" transform="translate(0 0)">																			
<g id="identity-card">																			
<path id="Path_35308" data-name="Path 35308" d="M20.184,3.5h6.263a.9.9,0,0,1,.895.895V20.5a.9.9,0,0,1-.895.895H1.395A.9.9,0,0,1,.5,20.5V4.395A.9.9,0,0,1,1.395,3.5H7.658" transform="translate(-0.5 0.079)" fill="none" stroke="#fcfcfd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>																			
<path id="Path_35310" data-name="Path 35310" d="M8.5,8.5h7.158" transform="translate(6.947 4.026)" fill="none" stroke="#2177ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>																			
<path id="Path_35311" data-name="Path 35311" d="M8.5,10.5h7.158" transform="translate(6.947 5.605)" fill="none" stroke="#fcfcfd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>																			
<path id="Path_35316" data-name="Path 35316" d="M8.5,10.5h7.158" transform="translate(6.947 -1.187)" fill="none" stroke="#fcfcfd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>																			
<path id="Path_35312" data-name="Path 35312" d="M9.184,1.5a2.684,2.684,0,0,1,2.684,2.684V6.868H6.5V4.184A2.684,2.684,0,0,1,9.184,1.5Z" transform="translate(4.237 -1.5)" fill="none" stroke="#2177ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>																			
</g>																			
<path id="Path_35313" data-name="Path 35313" d="M17.864,12A1.864,1.864,0,0,0,16,13.864V14.8a2.077,2.077,0,0,0,1.864,2.1,2.077,2.077,0,0,0,1.864-2.1v-.932A1.864,1.864,0,0,0,17.864,12Z" transform="translate(-11.237 -3.283)" fill="#2177ff"></path>																			
<g id="Mask_Group_610" data-name="Mask Group 610" transform="translate(2.577 11.614)" clip-path="url(#clip-path)">																			
<path id="Path_35314" data-name="Path 35314" d="M6.93,1A5.77,5.77,0,0,0,1,6.581a5.77,5.77,0,0,0,5.93,5.581,5.77,5.77,0,0,0,5.93-5.581A5.77,5.77,0,0,0,6.93,1Zm3.609,9.368v-.031A1.443,1.443,0,0,0,9.76,9.074L8.687,8.494A2.6,2.6,0,0,1,6.93,9.25a2.6,2.6,0,0,1-1.757-.756L4.1,9.074a1.444,1.444,0,0,0-.779,1.264v.031a4.954,4.954,0,0,1-1.8-3.787,5.268,5.268,0,0,1,5.414-5.1,5.268,5.268,0,0,1,5.414,5.1A4.954,4.954,0,0,1,10.539,10.368Z" transform="translate(-2.856 -6.422)" fill="#fcfcfd"></path>																			
</g>																			
</g>																			
<g id="Mask_Group_612" data-name="Mask Group 612" transform="translate(6.484 15.715)" clip-path="url(#clip-path-2)">																			
<g id="Group_21349" data-name="Group 21349" transform="translate(-0.206 -0.209)">																			
<g id="Ellipse_2125" data-name="Ellipse 2125" transform="translate(0.262 0.495)" fill="#fea829" stroke="#707070" stroke-width="1">																			
<circle cx="7" cy="7" r="7" stroke="none"></circle>																			
<circle cx="7" cy="7" r="6.5" fill="none"></circle>																			
</g>																			
<g id="remove" transform="translate(0)">																			
<path id="Path_35317" data-name="Path 35317" d="M14.723,1H1.98A.98.98,0,0,0,1,1.98V14.723a.98.98,0,0,0,.98.98H14.723a.98.98,0,0,0,.98-.98V1.98A.98.98,0,0,0,14.723,1ZM12.332,11.292l-1.039,1.04L8.351,9.391,5.411,12.332l-1.039-1.04L7.312,8.352,4.371,5.411l1.039-1.04L8.351,7.312l2.941-2.941,1.039,1.04L9.391,8.352Z" transform="translate(-1 -1)" fill="#fea829"></path>																			
</g>																			
</g>																			
</g>																			
</g>																			
<g id="countdown-2" transform="translate(-18002.992 2923.778)">																			
<path id="Path_35318" data-name="Path 35318" d="M5.577,4.15A1.01,1.01,0,1,1,4.149,5.577C3.742,5.169,1.6,1.6,1.6,1.6S5.169,3.742,5.577,4.15Z" transform="translate(-0.784 -0.784)" fill="#fcfcfd"></path>																			
<path id="Path_35319" data-name="Path 35319" d="M4.079,8.158A4.091,4.091,0,0,1,0,4.079a.482.482,0,0,1,.51-.51.482.482,0,0,1,.51.51A3.059,3.059,0,1,0,4.079,1.02a.482.482,0,0,1-.51-.51A.482.482,0,0,1,4.079,0a4.079,4.079,0,0,1,0,8.158Z" transform="translate(0 0)" fill="#fcfcfd"></path>																			
</g>																			
</g>																			
</svg>`;

        default:
          break;
      }
    },
  },

  mounted() {
    this.getListNotifi();
    if (!connection) {
      connection = true;
      this.connection = new WebSocket(SETTINGS.BASE_URL_SOCKET_NOTIFY);

      this.connection.onopen = function () {
        let uidLive = getData.uidLive;
        let uidDemo = getData.uidDemo;
        let uidAcc = 0;

        let acc = localStorage.getItem("BO_BALANCE_TYPE");
        if (acc == "LIVE") {
          getData.isAccount = 1;
        } else {
          getData.isAccount = 0;
        }

        getData.isAccount ? (uidAcc = uidLive) : (uidAcc = uidDemo);

        this.sendMessage({
          type: "accountDetail",
          data: { uid: uidAcc, email: getData.email },
        });

        let notify = JSON.parse(localStorage.getItem("stateOpen"));
        if (notify) {
          getData.Notify = notify.l.bet[0].items.length;
        }
      }.bind(this);

      this.connection.onmessage = function (event) {
        let data = JSON.parse(event.data);

        if (data.typeSocket === "notifiSms") {
          this.countNews += 1;
          this.unreadNotifications = [
            {
              index: this.unreadNotifications.length,
              title: data.title,
              msg: data.content,
              type: data.type,
              time: moment().fromNow(),
              category: "success",
            },
          ].concat(this.unreadNotifications);
        }
      }.bind(this);

      this.connection.onclose = () => {
        getData.Notify = 0;
        localStorage.removeItem("stateOpen");
      };
    }
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 600px) {
  .wrapper-notification-1 {
    .ttM {
      white-space: nowrap;
    }
  }

  .dropdown-custom {
    width: 90vw !important;
  }
}

.dropdown-custom {
  box-shadow: none;
  border: none;
  width: 400px;
  max-height: 450px;
}

.bordered-items {
  border: 1px solid #383442;
  background: #02102c;
}

.notification-dropdown-button-number {
  position: absolute;
  top: -10px;
  left: calc(50% + 2px);
  display: inline-block;
  overflow: hidden;
  background: #e22a67;
  color: #fff;
  min-width: 22px;
  height: 22px;
  line-height: 14px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 9px;
  border: 2px solid #090f3e;
  padding: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-notification {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 15px;
  color: #878098;
  font-size: 14px;
  font-weight: bold;
}

.wrapper-notification {
  background: #090f3e;
  padding: 13px 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 3px 3px 3px 3px;

  .left {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    line-height: 24px;
    margin-bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 5px;
      cursor: pointer;
    }
  }

  .right {
    font-size: 14px;
    color: #878098;
    line-height: 24px;
    font-weight: normal;
    cursor: pointer;
  }
}
@media screen and (max-width: 600px) {
  .notification-dropdown-button-number {
    top: -10px;
    min-width: 22px;
    height: 22px;
    line-height: 18px;
    font-size: 12px;
  }
}
</style>
<style>
.dropdown-custom .vs-dropdown--menu--after {
  background: rgb(9 15 62) !important;
  border-color: #383442 !important;
}

@media screen and (max-width: 600px) {
  .con-vs-dropdown--menu {
    transform: translate(-50%, 0%) !important;
    left: 50% !important;
  }
}

.white {
  color: #fff;
}
.toggle-notice .vs-sidebar{
  z-index: 999999;
}
</style>

