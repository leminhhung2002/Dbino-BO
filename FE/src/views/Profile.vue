<template>
  <div class="w-full profile-personal mt-4">
    <div class="profile">
      <div class="p-4">
        <h3
          class="mb-3"
          style="
            font-weight: blod;
            border-bottom: 1px solid #ffffff1a;
            padding-bottom: 1rem;
          "
        >
          Thông tin cá nhân
        </h3>
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex flex-wrap items-center avatar">
              <vs-avatar
                v-if="!avatar"
                :src="require('@/assets/images/avatar/df.jpg')"
                size="80px"
                class="mr-4"
              />
              <vs-avatar
                v-else-if="!!avatar"
                :src="`${dm}api/auth/me/photo/${avatar}`"
                size="80px"
                class="mr-4"
              />
              <div>
                <input
                  type="file"
                  class="hidden"
                  name="image"
                  ref="update_avatar_input"
                  @change="update_avatar($event.target.files)"
                  accept="image/png, image/jpg, image/jpeg"
                />
                <vs-button
                  type="border"
                  class="btn-upload-avatar"
                  @click="$refs.update_avatar_input.click()"
                >
                  <img
                    class="w-5 mr-2"
                    src="@/assets/images/camera.svg"
                    alt="camera"
                  />
                  <span> Thay ảnh </span>
                </vs-button>
              </div>
            </div>
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full lg:w-1/3">
            <vs-input
              label="Email"
              v-model="email"
              class="mt-2 w-full input-fix"
              disabled="disabled"
            />
          </div>

          <div class="vx-col w-full lg:w-1/3">
            <vs-input
              label="Biệt danh"
              v-model="nickName"
              class="mt-2 w-full input-fix"
              disabled="disabled"
            />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col w-full lg:w-1/3">
            <vs-input
              label="Tên"
              v-model="last_n"
              class="mt-2 w-full input-fix"
              disabled="disabled"
            />
            <p class="danger-text">* Bạn phải bật 2FA để điều chỉnh</p>
          </div>

          <div class="vx-col w-full lg:w-1/3">
            <vs-input
              label="Họ"
              v-model="frist_n"
              class="mt-2 w-full input-fix"
              disabled="disabled"
            />
            <p class="danger-text">* Bạn phải bật 2FA để điều chỉnh</p>
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full lg:w-1/2">
            <vs-input
              label="Mã 2FA"
              v-model="FA"
              class="mt-2 w-full input-fix"
              disabled="disabled"
            />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col w-full lg:w-1/2">
            <vs-button
              type="border"
              class="btn-confirm disabled"
              :disabled="true"
            >
              <span> Cập nhật tài khoản </span>
            </vs-button>
          </div>
        </div>
      </div>
    </div>
    <div class="profile mt-4 div-xacminh">
      <div class="p-4">
        <h3
          class="mb-3"
          style="
            font-weight: blod;
            border-bottom: 1px solid #ffffff1a;
            padding-bottom: 1rem;
          "
        >
          Xác minh tài khoản
        </h3>

        <div class="vx-row">
          <div class="vx-col w-full lg:w-1/4">
            <span class="color-white"> Xác minh Danh tính: </span>
          </div>

          <div class="vx-col w-full lg:w-1/2">
            <span class="d-flex mt-5" style="font-size: 12px">
              Để đảm bảo an toàn cho tài sản của bạn, chúng tôi cần xác minh
              danh tính. Hãy điền thông tin thật chính xác, khi đã hoàn tất xác
              minh danh tính thì thông tin sẽ không chỉnh sửa được nữa.
            </span>
          </div>

          <div class="vx-col w-full lg:w-1/4">
            <vs-button
              v-if="getDataJson.verify == 0"
              color="#34d1d6"
              type="border"
              class="mb-2 mt-2 lg:float-right"
              @click.stop="showHoSoSetting()"
              >Xác nhận ngay</vs-button
            >
            <span v-else-if="getDataJson.verify == 2" class="italic"
              >* Tài khoản đang được xem xét</span
            >
            <span v-else class="green italic"
              >* Tài khoản đã được xác minh</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="profile mt-4 div-xacminh">
      <div class="p-4">
        <h3
          class="mb-3"
          style="
            font-weight: blod;
            border-bottom: 1px solid #ffffff1a;
            padding-bottom: 1rem;
          "
        >
          Bảo mật
        </h3>

        <div class="vx-row">
          <div class="vx-col w-full lg:w-1/4">
            <span class="color-white"> Mật khẩu: </span>
          </div>

          <div class="vx-col w-full lg:w-1/2">
            <p class="d-flex mt-5" style="font-size: 12px">
              Bạn có muốn thay đổi mật khẩu không? Nhấp vào nút phía dưới để
              thay đổi.
            </p>
            <vs-button
              color="#34d1d6"
              type="border"
              class="mb-2 mt-2"
              @click.stop="popupActiveChangePass = true"
              >Đổi</vs-button
            >
            <p class="danger-text">* Bạn phải bật 2FA để đổi mật khẩu</p>
          </div>

          <div class="vx-col w-full lg:w-1/4"></div>
        </div>

        <div class="vx-row mt-2">
          <div class="vx-col w-full lg:w-1/4">
            <span class="color-white"> Mã 2FA: </span>
          </div>

          <div class="vx-col w-full lg:w-1/2">
            <p class="d-flex" style="font-size: 12px">
              Bắt buộc để rút tiền hoặc cập nhật các bảo mật.
            </p>
          </div>

          <div class="vx-col w-full lg:w-1/4 flex lg:justify-end">
            <vs-switch
              color="success"
              v-model="swi2Fa"
              @change="on2FA"
              icon-pack="feather"
              vs-icon="icon-check"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="profile mt-4 div-xacminh">
      <div class="p-4">
        <h3
          class="mb-3"
          style="
            font-weight: blod;
            border-bottom: 1px solid #ffffff1a;
            padding-bottom: 1rem;
          "
        >
          Quản lý API
        </h3>

        <div class="vx-row">
          <div class="vx-col w-full lg:w-1/4">
            <span class="color-white"> Quản lý API: </span>
          </div>

          <div class="vx-col w-full lg:w-1/2">
            <p class="d-flex mt-5" style="font-size: 12px">
              Không tiết lộ Mã API của bạn cho bất kỳ ai để tránh thất thoát tài
              sản. Lưu ý rằng Mã API của bạn có thể bị tiết lộ khi ủy quyền cho
              một nền tảng bên thứ ba.
            </p>
          </div>

          <div class="vx-col w-full lg:w-1/4 lg:text-right">
            <vs-button color="#34d1d6" type="border" class="mb-2 mt-2 btn-tao"
              >Tạo API</vs-button
            >
            <p class="danger-text">* Bạn phải bật 2FA để tạo API</p>
          </div>
        </div>
      </div>
    </div>

    <vs-popup
      background-color="rgba(0,0,0,.6)"
      :background-color-popup="colorxChangePass"
      class=""
      title="Đổi mật khẩu"
      :active.sync="popupActiveChangePass"
    >
      <div class="vx-vx-row">
        <div class="vx-col w-full">
          <vs-input
            type="password"
            label="Mật khẩu cũ"
            maxlength="20"
            v-model="passOld"
            name="passOld"
            class="mt-2 w-full"
          />
        </div>

        <div class="vx-col w-full">
          <vs-input
            type="password"
            label="Mật khẩu mới"
            maxlength="20"
            v-model="passNew"
            name="passNew"
            class="mt-2 w-full"
          />
        </div>

        <div class="vx-col w-full">
          <vs-input
            type="password"
            label="Nhập lại mật khẩu mới"
            maxlength="20"
            v-model="passRenew"
            name="passReNew"
            class="mt-2 w-full"
          />
        </div>
        <div class="vx-col w-full mt-5">
          <small class="red italic" v-if="!getDataJson.c2fa"
            >* Bạn phải bật 2FA để điều chỉnh</small
          >
          <vs-button
            v-else
            color="success"
            type="border"
            :disabled="disableChangePass"
            @click="ChangeNewPass()"
            >Đồng ý</vs-button
          >
        </div>
      </div>
    </vs-popup>

    <ho-so-setting
      :isSidebarActive="SidebarHSSetting"
      @closeSidebar="toggleDataSidebar"
    />

    <vs-prompt
      title="Xác thực Google"
      @close="closeGG2FA"
      :active.sync="popupActive2FA"
      :buttons-hidden="true"
    >
      <google-auth />
    </vs-prompt>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import HoSoSetting from "@/pages/trade/slidebar/HoSoSetting.vue";
import AuthenticationService from "@/services/AuthenticationService";
import getData from "@/pages/trade/navbar/components/data.json";
import GoogleAuth from "@/pages/trade/slidebar/2FAGoogle";
import SETTINGS from "../../settings.json";

export default {
  components: {
    VuePerfectScrollbar,
    HoSoSetting,
    GoogleAuth,
  },
  data() {
    return {
      getDataJson: getData,
      dm: SETTINGS.BASE_URL,
      disableChangePass: false,
      passOld: "",
      passNew: "",
      passRenew: "",
      avatar: "df.jpg",
      url_avatar: "",
      nickName: "",
      email: "",
      frist_n: "",
      last_n: "",
      swi2Fa: false,
      FA: "",
      num_secury: 0,
      colorxChangePass: "#def1d1",
      popupActiveChangePass: false,
      popupActive2FA: false,
      // Data Sidebar
      SidebarHSSetting: false,
      sidebarDataSetting: {},
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  //   filters: {
  //     currencydecimal (val) {
  //       if(val == 'BTC') return val.toFixed(6)
  //       if(val == 'ETH') return val.toFixed(4)
  //       return val.toFixed(2)
  //     }
  //   },

  mounted() {},
  methods: {
    closeGG2FA() {
      if (!getData.c2fa) {
        this.swi2Fa = false;
      } else {
        this.swi2Fa = true;
      }
    },

    showHoSoSetting() {
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.SidebarHSSetting = val;
    },

    logOutUser() {
      localStorage.removeItem("tokenUser");
      localStorage.removeItem("INFO");
      getData.Notify = 0;
      localStorage.removeItem("stateOpen");

      window.location.href = window.location.origin + "/login";
    },

    ChangeNewPass() {
      this.disableChangePass = true;

      if (this.passOld == "" || this.passNew == "" || this.passRenew == "") {
        return this.$vs.notify({
          text: "Mật khẩu không được rỗng.",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
          position: "top-right",
        });
      }

      if (this.passNew != this.passRenew) {
        return this.$vs.notify({
          text: "Mật khẩu mới của bạn không khớp.",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
          position: "top-right",
        });
      }

      let obj = {
        email: this.email,
        passOld: this.passOld,
        password: this.passNew,
        code_secure: this.num_secury,
      };

      AuthenticationService.changePassword2(obj).then((res) => {
        this.disableChangePass = false;
        if (res.data.success == 1) {
          this.popupActiveChangePass = false;
          return this.$vs.notify({
            text: "Mật khẩu đã được đổi thành công.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
        } else if (res.data.success == 0) {
          return this.$vs.notify({
            text: "Mật khẩu cũ không đúng.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        } else if (res.data.success == 3) {
          this.popupActiveChangePass = false;
          return this.$vs.notify({
            text: "Mật khẩu đổi thất bại.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        }
      });
    },

    on2FA() {
      this.swi2Fa ? (this.swi2Fa = false) : (this.swi2Fa = true);

      // bật 2Fa
      this.popupActive2FA = true;
    },

    update_avatar(file) {
      //evt.preventDefault()

      this.urlPassFront = URL.createObjectURL(file[0]);

      const formData = new FormData();
      formData.append("image", file[0]);
      formData.append("nick", getData.displayName);

      AuthenticationService.uploadAvatar(formData).then((res) => {
        if (res.data.success) {
          return this.$vs.notify({
            text: "Ảnh đại diện thay đổi thành công.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
        }
      });
    },
  },

  created() {
    this.nickName = getData.displayName;
    this.avatar = getData.profile_image;
    this.email = getData.email;
    this.frist_n = getData.first_name;
    this.last_n = getData.last_name;

    this.swi2Fa = getData.c2fa;

    this.num_secury = getData.num_secu;
  },
};
</script>

<style lang="scss" scoped>
.pro-c-avatar__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.pro-c-avatar_size_extra-large .pro-c-avatar__placeholder {
  padding: 1rem;
}
.pro-c-avatar__placeholder {
  fill: currentColor;
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem;
  width: 100%;
}
.vs-sidebar--background {
  background: rgba(0, 0, 0, 0.5);
}
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>

<style>
.avatar img {
  object-fit: cover;
}

.theme-dark .con-vs-dialog .vs-dialog input,
.theme-dark .con-vs-dialog .vs-dialog .vs-con-textarea {
  background: transparent;
}

.vs-dialog {
  max-width: 600px !important;
}

.con-vs-dialog {
  z-index: 99999;
}
.profile-personal {
  width: 100%;
  max-width: 1140px;
  margin: auto;
  padding: 1rem;
}

.profile {
  background: #090f3e !important;
  border-radius: 20px !important;
  border: 1px solid #41416f;
}
.avatar {
  padding: 1rem 0;
}
.btn-upload-avatar {
  background-color: transparent !important;
  border: 1px solid;
  border-color: #34d1d6;
  border-radius: 5px;
  color: #fff !important;
  font-size: 16px;
  padding: 1rem 2rem !important;
}

.btn-upload-avatar:hover {
  background-color: #34d1d6 !important;
}
.btn-upload-avatar .vs-button-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-fix .vs-input--label {
  font-weight: 400;
  line-height: 20px;
  font-size: 1rem;
  display: inline-block;
  margin-bottom: 4px;
  color: hsla(0, 0%, 100%, 0.4);
}

.input-fix .vs-con-input {
  height: 45px;
  line-height: 45px;
}

.input-fix .vs-con-input input {
  height: 100%;
  line-height: 45px;
  font-size: 1rem !important;
  font-weight: 400;
}
.danger-text {
  color: #fa2843;
  font-style: italic;
  font-size: 0.8rem;
  font-weight: 400;
}

.btn-confirm {
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #1d233b !important;
  font-size: 16px;
  color: #fff !important;
  padding: 1rem 3rem !important;
}

.btn-confirm.disabled {
  background-color: #8b8d96 !important;
}

.div-xacminh .vx-row {
  margin: 0 !important;
}

.div-xacminh .vx-col {
  padding: 0 !important;
}

.div-xacminh .color-white {
  color: #fff !important;
}

.div-xacminh .vs-button {
  color: #fff !important;
}

.div-xacminh .vs-button:hover {
  background-color: #34d1d6 !important;
}

.vx-row.mt-2 {
  margin-top: 1rem !important;
}

.btn-tao {
  color: #fff !important;
  background-color: #34d1d6 !important;
  padding: 10px 2.5rem !important;
}
</style>
