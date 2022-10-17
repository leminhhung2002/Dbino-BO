<template>
  <div style="background-color: #111">
    <div class="fill-row-loading">
      <div
        class="vs-con-loading__container loading-example"
        id="loading-radius"
        :class="{ activeLoading: activeLoading }"
      ></div>
    </div>
    <div data-v-59d426a6 class="wrapper Home">
      <div data-v-59d426a6="" class="spaceTop heightUnset"></div>
      <main data-v-59d426a6 class="wrapper-main-content primary1">
        <header class="header">
          <div class="header-bg">
            <!-- <img width="100%" height="100%" class="main-banner" :src="require('@/assets/images/sky/Wallpaper-BG.png')" > -->
            <!-- <video playsinline="" autoplay="" muted="" loop="" class="header-bg-video">
                    <source :src="require('@/assets/images/sky/header-bg.mp4')" type="video/mp4">
                </video>-->
          </div>

          <div class="container">
            <div class="header__menu">
              <a class="noAuthentication" href="#" aria-label="Trade">
                <img
                  width="130"
                  height="35"
                  :src="require('@/assets/images/sky/logo.57b09ac4.svg')"
                  alt="BO"
                />
              </a>
              <div data-v-3bbff296="" id="rightNav" class="d-flex">
                <div
                  data-v-3bbff296=""
                  class="pr-0 d-flex align-items-center pr-lg-2"
                >
                  <a
                    data-v-3bbff296=""
                    @click="RegisterUrl"
                    class="button primary btnMainBorder btn-large w-75 text-decoration-none mr-lg-3 mr-5 ml-1"
                    ><span data-v-3bbff296="" class="font-18 register"
                      >Đăng ký</span
                    ></a
                  ><a
                    data-v-3bbff296=""
                    @click="LoginUrl"
                    class="btnSignIn btnMainBorder btn-large w-75 text-decoration-none"
                    ><span
                      data-v-3bbff296=""
                      class="font-18 text-capitalize login"
                      >Đăng nhập</span
                    ></a
                  >
                </div>
                <!---->
              </div>
              <!-- <div class="header__btn pr-2 flex items-center lg:pr-2">
                <vs-button
                  class="button lary btnMainBorder btn btn-large logbtn w-80 text-decoration-none lg:mr-4 mr-1 ml-1"
                  color="#2b2e3b"
                  icon-pack="feather"
                  style="width: 149px; height: 48px"
                  @click="RegisterUrl"
                  >Đăng Ký</vs-button
                >
                <vs-button
                  class="button secondary btnMainBorder signbtn btn-large w-75 text-decoration-none lg:mr-4 mr-1 ml-1"
                  color="#2b2e3b"
                  icon-pack="feather"
                  style="width: 110px; height: 48px; background: #2f3342"
                  @click="LoginUrl"
                  >Đăng Nhập</vs-button
                >
              </div> -->
            </div>
            <div data-v-4f41e170 class="container main-banner-content-text">
              <h2 data-v-4f41e170="0" class="main-banner-title">
                Kỷ nguyên mới của giao dịch tiền điện tử
              </h2>
              <p data-v-4f41e170 class="main-banner-desc">
                Dbino là một nền tảng giao dịch sáng tạo cung cấp cho các nhà
                giao dịch trải nghiệm đặc biệt với các tính năng tiên tiến.
              </p>
              <div data-v-4f41e170 class="main-banner-link">
                <a
                  data-v-4f41e170=""
                  @click="LoginUrl"
                  class="uppercase mx-auto start btn-start button primary borderRounded font-20 text-decoration-none cl"
                  >Bắt đầu miễn phí</a
                >
              </div>
              <div
                data-v-4f41e170=""
                class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center"
              >
                <img
                  data-v-4f41e170=""
                  src="~@/assets/images/sky/Mockup-1.png"
                  width="561"
                  height="381"
                  class="main-banner-image"
                />
              </div>
              <!--<div class="forms forms_1 forms--dark text-center">
                        <vs-button class="h-16 text-2xl" color="rgb(62, 201, 214)" type="filled" @click="LoginUrl">Bắt đầu giao dịch</vs-button>
                    </div>-->
            </div>
          </div>
        </header>
        <div data-v-4f41e170 class="sub-info">
          <div data-v-4f41e170 class="container" style="width: 62.5%">
            <div data-v-4f41e170 class="sub-info-swiper">
              <div data-v-4f41e170 class="row">
                <div
                  data-v-4f41e170
                  class="lg:w-1/3 pr-4 pl-4 md:w-full sm:w-full"
                >
                  <p data-v-4f41e170>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAe1JREFUOE+1lTtMAkEQhmcuJgIJaiyhEGOhNEpMiI0F1BZS2gGtiRGxs1EbS8WY2GJpZY4CW2yNxqiNNCoNLfGR4BWGcXbD6h3e7aHGqza7c9/+89pB8PhitcLIYBuzBmKKgBIIGBOmvG7w+pqQTCtAlUa69OSGwN5NAQxYxip2qACII14Xy32iJzKwZAU6+70XOMACGmxjjYEJLbD3kOj6LURpO/wT3IU++qr0upHVM3xcwSX410o1yiV4qlrcQoTNH7nvYUwE2/WF3S38cwi+q5YhwfhpscBne+o8OToB9ZcmvL5bvg6EBwIwORSBy9aDw5ZV5zFeXTM5YYsyJOEInMyvwx2Dc+eHWriAHs0tQ3woClm2vWjdf8GJKgwuNgBhTO3uTC9BJprUwu1Qs3kBG7fHTu+4/EQoqNdnHdwX2oW5gsWZG7xfqPj/Wyjs6u3wlasyHMzmZUxd3bf9yMm7cSTPrQwUXJ35QaWdSB43R46bo6yrLQXvCyq5XG7yNXsz+CmEYR1c1LejpLw6D+DZCnZi/9fS4mKpum2ccUhmfNtNYyCSZoU6KfHCOZ7NfkLixeVmkCFwPJvK+LfK7UoVy300tQ0eS1DwS6hQyUOwxO6XtKPJ7mZXfQaBMgQYU/GXxc8DlfdMBppew/QDvPAeHSIzLhMAAAAASUVORK5CYII="
                      alt="tick"
                    />
                  </p>
                  <h2 data-v-4f41e170 class="sub-info__title">
                    Tài khoản Demo $1.000
                  </h2>
                  <h2 data-v-4f41e170 class="sub-info__desc">
                    Kiểm tra và trau dồi kỹ năng giao dịch của bạn bằng tài
                    khoản demo miễn phí và không giới hạn lần thử
                  </h2>
                </div>

                <div
                  data-v-4f41e170
                  class="lg:w-1/3 pr-4 pl-4 md:w-full sm:w-full"
                >
                  <p data-v-4f41e170>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAe1JREFUOE+1lTtMAkEQhmcuJgIJaiyhEGOhNEpMiI0F1BZS2gGtiRGxs1EbS8WY2GJpZY4CW2yNxqiNNCoNLfGR4BWGcXbD6h3e7aHGqza7c9/+89pB8PhitcLIYBuzBmKKgBIIGBOmvG7w+pqQTCtAlUa69OSGwN5NAQxYxip2qACII14Xy32iJzKwZAU6+70XOMACGmxjjYEJLbD3kOj6LURpO/wT3IU++qr0upHVM3xcwSX410o1yiV4qlrcQoTNH7nvYUwE2/WF3S38cwi+q5YhwfhpscBne+o8OToB9ZcmvL5bvg6EBwIwORSBy9aDw5ZV5zFeXTM5YYsyJOEInMyvwx2Dc+eHWriAHs0tQ3woClm2vWjdf8GJKgwuNgBhTO3uTC9BJprUwu1Qs3kBG7fHTu+4/EQoqNdnHdwX2oW5gsWZG7xfqPj/Wyjs6u3wlasyHMzmZUxd3bf9yMm7cSTPrQwUXJ35QaWdSB43R46bo6yrLQXvCyq5XG7yNXsz+CmEYR1c1LejpLw6D+DZCnZi/9fS4mKpum2ccUhmfNtNYyCSZoU6KfHCOZ7NfkLixeVmkCFwPJvK+LfK7UoVy300tQ0eS1DwS6hQyUOwxO6XtKPJ7mZXfQaBMgQYU/GXxc8DlfdMBppew/QDvPAeHSIzLhMAAAAASUVORK5CYII="
                      alt="tick"
                    />
                  </p>
                  <h2 data-v-4f41e170 class="sub-info__title">
                    Nạp tiền chỉ từ $5
                  </h2>
                  <h2 data-v-4f41e170 class="sub-info__desc">
                    Nạp tiền nhanh chóng trong vòng vài phút. Phí rút tiền thấp.
                  </h2>
                </div>

                <div
                  data-v-4f41e170
                  class="lg:w-1/3 pr-4 pl-4 md:w-full sm:w-full"
                >
                  <p data-v-4f41e170>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAe1JREFUOE+1lTtMAkEQhmcuJgIJaiyhEGOhNEpMiI0F1BZS2gGtiRGxs1EbS8WY2GJpZY4CW2yNxqiNNCoNLfGR4BWGcXbD6h3e7aHGqza7c9/+89pB8PhitcLIYBuzBmKKgBIIGBOmvG7w+pqQTCtAlUa69OSGwN5NAQxYxip2qACII14Xy32iJzKwZAU6+70XOMACGmxjjYEJLbD3kOj6LURpO/wT3IU++qr0upHVM3xcwSX410o1yiV4qlrcQoTNH7nvYUwE2/WF3S38cwi+q5YhwfhpscBne+o8OToB9ZcmvL5bvg6EBwIwORSBy9aDw5ZV5zFeXTM5YYsyJOEInMyvwx2Dc+eHWriAHs0tQ3woClm2vWjdf8GJKgwuNgBhTO3uTC9BJprUwu1Qs3kBG7fHTu+4/EQoqNdnHdwX2oW5gsWZG7xfqPj/Wyjs6u3wlasyHMzmZUxd3bf9yMm7cSTPrQwUXJ35QaWdSB43R46bo6yrLQXvCyq5XG7yNXsz+CmEYR1c1LejpLw6D+DZCnZi/9fS4mKpum2ccUhmfNtNYyCSZoU6KfHCOZ7NfkLixeVmkCFwPJvK+LfK7UoVy300tQ0eS1DwS6hQyUOwxO6XtKPJ7mZXfQaBMgQYU/GXxc8DlfdMBppew/QDvPAeHSIzLhMAAAAASUVORK5CYII="
                      alt="tick"
                    />
                  </p>
                  <h2 data-v-4f41e170 class="sub-info__title">
                    Đặt lệnh nhỏ nhất $1
                  </h2>
                  <h2 data-v-4f41e170 class="sub-info__desc">
                    Thật dễ dàng để bắt đầu giao dịch với số tiền nhỏ.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section data-v-4f41e170 class="security">
          <div data-v-4f41e170 class="container security-content">
            <div data-v-4f41e170 class="row">
              <div data-v-4f41e170 class="w-full">
                <h2 data-v-4f41e170 class="security-title">
                  Nền tảng mới. Triển vọng mới.
                </h2>
              </div>
              <div data-v-4f41e170 class="w-full">
                <div data-v-4f41e170 class="row">
                  <div data-v-4f41e170 class="w-full mt-5">
                    <p data-v-4f41e170 class="security-description">
                      Dbino tiếp tục đổi mới và cập nhật nền tảng giao dịch
                      bằng cách thêm các tính năng mới để bạn có thể giao dịch
                      thành công hơn và tận hưởng trải nghiệm người dùng tốt
                      hơn.
                    </p>
                  </div>
                </div>
                <div
                  data-v-4f41e170
                  class="lg:w-full pr-4 pl-4 md:w-full sm:w-full "
                >
                  <div data-v-4f41e170 class="row">
                    <div
                      data-v-4f41e170
                      class="security-item lg:w-1/3 pr-4 pl-4 md:w-full sm:w-full"
                    >
                      <img
                        data-v-4f41e170=""
                        width="25"
                        height="25"
                        src="~@/assets/images/sky/shield.3403e8c7.png"
                        class="security-item-icon"
                      />
                      <h3 data-v-4f41e170="" class="security-item-title">
                        Nền tảng bảo mật cao
                      </h3>
                      <p data-v-4f41e170 class="security-item-text">
                        Trong nhiều năm, chúng tôi đã phát triển các giao thức
                        bảo mật hàng đầu để bảo vệ các nhà giao dịch và tài sản
                        của họ.
                      </p>
                    </div>
                    <div
                      data-v-4f41e170
                      class="security-item lg:w-1/3 pr-4 pl-4 md:w-full sm:w-full"
                    >
                      <img
                        data-v-4f41e170=""
                        width="25"
                        height="25"
                        src="~@/assets/images/sky/lightning-fill.0aa01706.png"
                        class="security-item-icon"
                      />
                      <h3 data-v-4f41e170="" class="security-item-title">
                        Thích hợp cho mọi người
                      </h3>
                      <p data-v-4f41e170 class="security-item-text">
                        Giao dịch giờ đây dễ dàng hơn với một nền tảng mới, đầy
                        đủ tính năng, hoàn hảo cho mọi nhà giao dịch.
                      </p>
                    </div>
                    <div
                      data-v-4f41e170
                      class="security-item lg:w-1/3 pr-4 pl-4 md:w-full sm:w-full pr-4 pl-4"
                    >
                      <img
                        data-v-4f41e170=""
                        width="25"
                        height="25"
                        src="~@/assets/images/sky/currency-exchange.2f450568.png"
                        class="security-item-icon"
                      />
                      <h3 data-v-4f41e170="" class="security-item-title">
                        Các chỉ báo hữu ích
                      </h3>
                      <p data-v-4f41e170 class="security-item-text">
                        Các chỉ báo giao dịch của chúng tôi đủ dễ dàng cho người
                        mới bắt đầu và đủ mạnh mẽ để làm hài lòng hầu hết các
                        chuyên gia dày dạn kinh nghiệm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-v-4f41e170="" class="introduce text-center">
          <div data-v-4f41e170="" class="container introduce-content">
            <div data-v-4f41e170="" class="row">
              <div data-v-4f41e170="" class="col-12">
                <h2 data-v-4f41e170="" class="introduce-title">
                  Bắt đầu hành trình tự do tài chính của bạn ngay hôm nay!
                </h2>
              </div>
              <div data-v-4f41e170="" class="col-12">
                <p data-v-4f41e170="" class="introduce-desc">
                  Tất cả mọi người, bất kể kỹ năng như thế nào, đều có thể phát
                  triển chiến lược giao dịch có lợi nhuận và kiếm thu nhập ổn
                  định trên Didi.
                </p>
              </div>
              <div data-v-4f41e170="" class="col-lg-4 col-md-12 col-sm-12">
                <div data-v-4f41e170="" class="introduce-step">
                  <img
                    data-v-4f41e170=""
                    src="~@/assets/images/sky/introduce_step_1.png"
                    class="introduce-step-image"
                  />
                  <p data-v-4f41e170="" class="introduce-step-title">Đăng ký</p>
                  <p data-v-4f41e170="" class="introduce-step-desc">
                    Sử dụng email của bạn để tạo một tài khoản miễn phí.
                  </p>
                </div>
              </div>
              <div data-v-4f41e170="" class="col-lg-4 col-md-12 col-sm-12">
                <div data-v-4f41e170="" class="introduce-step">
                  <img
                    data-v-4f41e170=""
                    src="~@/assets/images/sky/introduce_step_2.png"
                    class="introduce-step-image"
                  />
                  <p data-v-4f41e170="" class="introduce-step-title">
                    Nạp tiền
                  </p>
                  <p data-v-4f41e170="" class="introduce-step-desc">
                    Nạp bằng tiền điện tử nhanh chóng và an toàn.
                  </p>
                </div>
              </div>
              <div data-v-4f41e170="" class="col-lg-4 col-md-12 col-sm-12">
                <div data-v-4f41e170="" class="introduce-step">
                  <img
                    data-v-4f41e170=""
                    src="~@/assets/images/sky/introduce_step_3.png"
                    class="introduce-step-image"
                  />
                  <p data-v-4f41e170="" class="introduce-step-title">
                    Bắt đầu giao dịch
                  </p>
                  <p data-v-4f41e170="" class="introduce-step-desc">
                    Dự đoán giá tài sản và kiếm tiền.
                  </p>
                </div>
              </div>
              <div data-v-4f41e170 class="col-12">
                <a
                  data-v-4f41e170
                  @click="RegisterUrl"
                  class="text-uppercase self-center btn-start button primary borderRounded font-14 text-decoration-none trade-now-link"
                  >Tham gia ngay</a
                >
              </div>
            </div>
          </div>
        </section>
        <section data-v-4f41e170="" class="trade-now">
          <div data-v-4f41e170="" class="container">
            <div data-v-4f41e170="" class="row items-stretch">
              <div
                data-v-4f41e170=""
                class="col-lg-6 col-md-12 col-sm-12 trade-now-content"
              >
                <h2 data-v-4f41e170="" class="trade-now-title">
                  Trở thành Nhà giao dịch chuyên nghiệp Với các công cụ của
                  chúng tôi
                </h2>
                <p data-v-4f41e170="" class="trade-now-description">
                  Các chỉ báo kỹ thuật của chúng tôi cho phép bạn phát triển các
                  chiến lược giao dịch có lợi nhất giúp việc giao dịch ít vất vả
                  hơn.
                </p>
                <a
                  data-v-4f41e170=""
                  @click="RegisterUrl"
                  class="text-uppercase btn-start button primary borderRounded font-14 text-decoration-none trade-now-link"
                  >Bắt đầu miễn phí</a
                >
              </div>
            </div>
          </div>
          <div data-v-4f41e170="" class="text-right">
            <img
              data-v-4f41e170=""
              width="560"
              src="~@/assets/images/sky/Mockup-3.png"
              height="550"
              class="trade-now-img"
            />
          </div>
        </section>
        <section data-v-4f41e170="" class="cryptocurrencies">
          <div data-v-4f41e170="" class="container">
            <div data-v-4f41e170="" class="row align-items-stretch">
              <div data-v-4f41e170="" class="col-12 list-coin-content">
                <h2 data-v-4f41e170="" class="cryptocurrencies-title">
                  Nạp rút liền mạch
                </h2>
                <p data-v-4f41e170="" class="cryptocurrencies-description">
                  Sử dụng các loại tiền điện tử phổ biến để nạp rút tiền nhanh
                  chóng và an toàn.
                </p>
              </div>
            </div>
            <div data-v-4f41e170="" class="cryptocurrencies-images">
              <img
                data-v-4f41e170=""
                src="~@/assets/images/sky/bitcoin.2b7d6815.svg"
                alt=""
              />
              <img
                data-v-4f41e170=""
                src="~@/assets/images/sky/tether.6d1c997e.svg"
                alt=""
              />
              <img
                data-v-4f41e170=""
                src="~@/assets/images/sky/binance.cf56a2f9.svg"
                alt=""
              />
            </div>
          </div>
        </section>
        <div data-v-4f41e170="">
          <div data-v-7e36f564="" class="footerFAQs">
            <div data-v-7e36f564="" class="container position-relative">
              <div
                data-v-7e36f564=""
                class="py-3 py-sm-5 blockRow border-bottom pb-0"
              >
                <div data-v-7e36f564="" class="block logo">
                  <p data-v-7e36f564="" class="mb-lg-2 mb-1">
                    <img
                      data-v-7e36f564=""
                      width="236"
                      height="73"
                      src="~@/assets/images/sky/logo.57b09ac4.svg"
                      alt=""
                    />
                  </p>
                  <div data-v-7e36f564="" class="font-12 txtContent">
                    © 2022
                    <div data-v-7e36f564="" class="text-domain d-inline-block">
                      Dbino
                    </div>
                    All rights reserved.
                  </div>
                  <p data-v-7e36f564="">
                    Email:
                    <a data-v-7e36f564="" href="mailto:contact@dbino.trade"
                      >contact@dbino.trade</a
                    >
                  </p>
                </div>
                <div
                  data-v-7e36f564=""
                  class="block pl-sm-4 my-4"
                  style="flex: 0.5 1 0%"
                >
                  <h4 data-v-7e36f564="">Hỗ trợ</h4>
                  <ul data-v-7e36f564="">
                    <li data-v-7e36f564="">
                      <p data-v-7e36f564="">
                        <a
                          data-v-7e36f564=""
                          href="https://didi.azureedge.net/Agency_Obligations/wl_Agency Obligations_vi.pdf"
                          download="agencyObligations.pdf"
                          target="_blank"
                          >Nghĩa vụ thành viên VIP</a
                        >
                      </p>
                    </li>
                    <li data-v-7e36f564="">
                      <p data-v-7e36f564="">
                        <a data-v-7e36f564="" href="/faqs/privacy-policy"
                          >Privacy Policy</a
                        >
                      </p>
                    </li>
                  </ul>
                </div>
                <div data-v-7e36f564="" class="block pl-sm-4 my-4"></div>
                <div data-v-7e36f564="" class="block pl-sm-4">
                  <div data-v-7e36f564="" class="dropdown language">
                    <button
                      data-v-7e36f564=""
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="btn dropdown-toggle colorSecondary dropdownMenuButton bgPrimary1 position-relative"
                    >
                      <img
                        data-v-7e36f564=""
                        width="18"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAAdhJREFUWAntmMsuxFAYx/+nV1MxmUywIWLjEgm7YWUvNnY2EqMLsfUInsHWwoZnsLLzAjYIIqYxIRHXjtBpe+qcGUQTjeqpaKTfprfv8vv+PZem5HB0aIlA2kQGLQA1ydHoSJBBtjZSENxLmYXjYISUsg3IGHNA0SGUK5gpBY0pGfpwui8l1Wxls4DycoeoaKH41ADVQQmd0yqKMxqUXhIqInKRGmD3yptyEkHZTE9FJUl3xTkNWn+4t+Ks9pGqNK+DNsI7qHPmw95xP3ziniTai9U+goHtLig9cqw6bp2itvAI/zoMHSc4LEOcCObj1gNY1QboPf02wrv0YS0mg+PJEwHyQLdGYZk2qB0N6d8yn6oN7+rnyvEa3BID8mDnmOJuy+GnX9rNxnNL7S8fxrwpBMhrdExEj8PCeKI5GEIXA2RsRkUNJfx8YVT+GLAwoYBo7UX5Zd+FtWTjYsWGc+K1OGU2yzW2gIuYUIvGpILmqYfr9Wc0dttQHOZp7xFdbF3sWTWYwsznvJmYMdE6+F5NH5PhHDKwIGJrY+3rQxLziZ7p77mijkIKOgc+yxsBxysydhE4nkJsgPAMv2w5oKjAuYL/WkH2iVGT+A8aBMGDaKepx7eY6Nor+sqCnmPgaisAAAAASUVORK5CYII="
                        alt=""
                        class="mr-2 mb-1"
                      /><span data-v-7e36f564="" class="colorSecondary"
                        >Tiếng Việt</span
                      >
                    </button>
                    <div
                      data-v-7e36f564=""
                      aria-labelledby="dropdownMenuButton"
                      class="dropdown-menu"
                    >
                      <div data-v-7e36f564="" class="dropdown-item pointer">
                        <img
                          data-v-7e36f564=""
                          width="18"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAABapJREFUWAm1WAtQVFUY/vayrLyWBR0nVqkwFtBMJ5spR8u0wFHJBB+g6BSiUw2KSlA66KijZWKML8SxbFJJealTkNpQ4oyFo1MzvTRFYAlKZCkSWEAWVtjt/Id2u3d370LD9s9c9p7/9X33P/ece34Ul6cs0o/K3hQ+atLDEEthfgt2b7+LB2arWO10P29BMPZ/EAbjuq0wf/U1t6vmzIImdyfS36hH+bl2pxixwlulQNaOsViePFqsxr0bd3AvK0cvaNckhGN9BswVlRIHCig+F4mHtN4SvScH2rHeHMORHOfCOGlTF+sE9UszoTm8C/cPHeeXmMDESX4oqxiPaTPUYvV/uFfI+lLOzy9NAGGIpfsfHsSJuAkmkwXKxyOh+eQgLHcNaH9lAyzGTntMULASHxfpkJapBeTx7P7SG+fXQyEAaW+F4FixDupAL7s7YRJ2P+NAXIgTcRMSY2vQ1GiGoFFDnb0ZPvFz0BqdiL5bNfZggZJmsqRF4SDCQxfpE1Fs/pkIpGVooRCZCKs1ZinHJg7E5feGXhA3obbahPjZ1bhyuYPj+iyORRB7AuPaLTDln5Fwmf58IEorojDhCV+JfiiDyVP8eewz0wIk7qYTpzlWUP4BEDYJcVk0pxrEjdUG6DD24bUVdcjb2wwrmxUqb3DpMVg7uiSVJN8QrQol5yOR5LDqyCYnK1JGo7AsgseKfahy1s77HIswLRYrcnOaOZeuzn7uap8vIpa314Cfvu/C3iPjoGFl9luXIs5nv1epBGzfHYqpzwbgcoXRrne88fUTcODoOMydH+Ro4mMiRReJ0diPzNR6Vr1/33/S2wnSgIQcFs6+jQ9PhiMiymdAKfOXgGdGB8pYgW3vhcLXl0+SrA8Zqm52Y21KPV8Ljo4uo2nRJMyrxhdlbY7+TmN3BNzZbInKzrZi2fxal+TIxyVBMvT0WJCR2oB3tjSir895uyCf4YjZbMGOrEZsWv8benstsqmUU6e734T11T04+L4B6Zu08PIS7Q2yKQc39PdbcSC7Gb/W9sAdvpUtDGX+Wd3gGT3sQQ+6cduYIWVV3HpxiUfmr0/fAGvbwMFAERwEpS5sSATcOrHdXPGzWucRgm6BhmGUXSTDyOnRUKX30096JOH/NsVNTU0emWJXB1ZPPLkyeYl+0DyTn/Lz/Dazx4DrP3S7xebbzLdXpd8+xwj60G/Y6Lk9kPLTNrP+bS1vKQpPtDhCSsayi2TECAH7joRh665QKJWe2aDFyN7eCv6t3pP7KAhLTlxaxoSqUHw+ArFxwXJxdj2deuXEnc0WE7dkJMciTFfiRPC5WWp8dnE8JkyU9gqugsvPt7Pv6R1XJq7bubkR5DOYEBZhEraj2AnSEZz6jo8KdOws6MX7EmqkxEd/WzB96OkQkf56PXp75DcBU7eF+8gdOCg3YVA/QphHT4VjzZus9xEJJxioUTJi4bzvIKIU2LZwNQS1v/1AaYtpNpixdH4NCo67f7lt/vRLvsvjakGxYqHDKmG0xa/imIJAiycER/IfQ4B6oKESxrPyll6MYuUdOHhSj9D+6gZo8t6F78pEcT5c/aYD8THVqPrFJNEPZXD9x/s89rtrXRJ3wqAWkzBtPdALszX49MsodmD2hVDCFgO9oFTmzqzd6K24gpGXTksqZ2HrgNqBVUl1aG/rkwC4H0inn2KTE2pxeP9A72OLpUoSZu/FSs6BuDwSNgIlF1iFaYnTlBqT0+E1JgRBp3J522cLpqSrk/S8oYIUz+bi5td5e7Kyhz2Uwx52mR6dHQONESWgVpOwiYORVZM4+bGeRugousDbPv+0lU5N0s0b3YiLuY1rle43c3mG8k9EORdEV4EwxEKNmj+7qO01Fl6A8GdBeR1y90EVM0PsB/rn0bKXa/CH4YFE78mB4e4DJC2oRfHJvyRpORfGqaWwvO5vX3k1cu5xJQIAAAAASUVORK5CYII="
                          alt=""
                          class="mr-2 mb-1"
                        /><span data-v-7e36f564="">English</span>
                      </div>
                      <div
                        data-v-7e36f564=""
                        class="dropdown-item pointer"
                        style="display: none"
                      >
                        <img
                          data-v-7e36f564=""
                          width="18"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAAdhJREFUWAntmMsuxFAYx/+nV1MxmUywIWLjEgm7YWUvNnY2EqMLsfUInsHWwoZnsLLzAjYIIqYxIRHXjtBpe+qcGUQTjeqpaKTfprfv8vv+PZem5HB0aIlA2kQGLQA1ydHoSJBBtjZSENxLmYXjYISUsg3IGHNA0SGUK5gpBY0pGfpwui8l1Wxls4DycoeoaKH41ADVQQmd0yqKMxqUXhIqInKRGmD3yptyEkHZTE9FJUl3xTkNWn+4t+Ks9pGqNK+DNsI7qHPmw95xP3ziniTai9U+goHtLig9cqw6bp2itvAI/zoMHSc4LEOcCObj1gNY1QboPf02wrv0YS0mg+PJEwHyQLdGYZk2qB0N6d8yn6oN7+rnyvEa3BID8mDnmOJuy+GnX9rNxnNL7S8fxrwpBMhrdExEj8PCeKI5GEIXA2RsRkUNJfx8YVT+GLAwoYBo7UX5Zd+FtWTjYsWGc+K1OGU2yzW2gIuYUIvGpILmqYfr9Wc0dttQHOZp7xFdbF3sWTWYwsznvJmYMdE6+F5NH5PhHDKwIGJrY+3rQxLziZ7p77mijkIKOgc+yxsBxysydhE4nkJsgPAMv2w5oKjAuYL/WkH2iVGT+A8aBMGDaKepx7eY6Nor+sqCnmPgaisAAAAASUVORK5CYII="
                          alt=""
                          class="mr-2 mb-1"
                        /><span data-v-7e36f564="">Tiếng Việt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-7e36f564="" class="py-3 py-sm-5 blockRow mb-0">
                <div data-v-7e36f564="" class="block">
                  <p data-v-7e36f564="" class="txtContent fullText">
                    Cảnh báo rủi ro: Giao dịch và đầu tư vào các tùy chọn kỹ
                    thuật số có mức độ rủi ro đáng kể và không phù hợp và / hoặc
                    thích hợp cho tất cả khách hàng. Vui lòng đảm bảo rằng bạn
                    cân nhắc cẩn thận các mục tiêu đầu tư, mức độ kinh nghiệm và
                    khẩu vị rủi ro trước khi mua hoặc bán bất kỳ tài sản kỹ
                    thuật số nào. Bạn nên nhận thức và hiểu đầy đủ tất cả các
                    rủi ro liên quan đến giao dịch và đầu tư vào tài sản kỹ
                    thuật số, bạn không nên đầu tư các khoản tiền mà bạn không
                    thể để mất. Bạn được cấp các quyền hạn chế không độc quyền
                    để sử dụng tài sản trí tuệ có trong trang web này cho mục
                    đích sử dụng cá nhân, phi thương mại, không thể chuyển
                    nhượng liên quan đến các dịch vụ được cung cấp trên trang
                    web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <log-reg-for-get />
      </main>
    </div>
  </div>
</template>

<script>
import tickicon from "@/assets/images/sky/greentick.png";
import LogRegForGet from "@/pages/user/LogRegForGet";
//import AuthenticationService from '@/services/AuthenticationService'

export default {
  components: {
    LogRegForGet,
  },
  data() {
    return {
      activeLoading: false,
    };
  },
  computed: {
    i18n_locale_img() {
      return require(`@/assets/images/flags/${this.$i18n.locale}.png`);
    },
    getCurrentLocaleData() {
      const locale = this.$i18n.locale;
      if (locale == "vi") return { flag: "vi", lang: "Tiếng Việt" };
      else if (locale == "en") return { flag: "us", lang: "English" };
      else if (locale == "pt") return { flag: "br", lang: "Portuguese" };
      else if (locale == "fr") return { flag: "fr", lang: "French" };
      else if (locale == "de") return { flag: "de", lang: "German" };
    },
  },
  methods: {
    updateLocale(locale) {
      this.$i18n.locale = locale;
    },
    LoginUrl() {
      this.$router.push({ path: "/login" });
    },

    RegisterUrl() {
      this.$router.push({ path: "/register" });
    },

    onWindowLoad() {
      let path = this.$router.currentRoute.path;
      let checkTK = localStorage.hasOwnProperty("tokenUser");
      if (path == "/" && checkTK) {
        this.$router.push({ path: "/trading" });
      }
      //this.activeLoading = false
      //this.$vs.loading.close()
    },
  },
  created() {
    window.addEventListener("load", this.onWindowLoad);
  },
};
</script>

<style scoped>
.main-banner[data-v-d36eb9da] {
  background: #02102c;
  padding: 150px 0 280px;
  position: relative;
  z-index: 2;
}

.main-banner-content-text[data-v-d36eb9da] {
  padding-top: 20px;
  width: 610px;
}

.main-banner-content-img[data-v-d36eb9da] {
  width: 965px;
  height: auto;
  position: absolute;
  top: 0;
  right: -22px;
  z-index: 2;
}

@media (max-width: 1024px) {
  .main-banner-content-img[data-v-d36eb9da] {
    width: 600px;
  }
}

.main-banner[data-v-d36eb9da]:before {
  content: "";
  display: block;
  width: 1060px;
  height: 925px;
  background: url(~@/assets/images/sky/video-poster.jpg) 0 0 no-repeat;
  background-size: cover;
  position: absolute;
  right: -25%;
  top: -48%;
  z-index: 1;
}

@media (max-width: 1023px) {
  .main-banner[data-v-d36eb9da]:before {
    width: 337px;
    height: 404px;
    top: -18%;
    right: -27%;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}

.main-banner-title[data-v-d36eb9da] {
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #f4f7f9;
  margin-bottom: 25px;
  font-family: "Public Sans", sans-serif;
}

.main-banner-text[data-v-d36eb9da] {
  font-size: 16px;
  line-height: 27px;
  color: #8d9eb9;
  margin-bottom: 22px;
  width: 530px;
}

@media (max-width: 1024px) {
  .main-banner[data-v-d36eb9da] {
    padding-top: 100px;
    padding-bottom: 0;
  }

  .main-banner .main-banner-content-text[data-v-d36eb9da] {
    width: auto;
    padding-top: 50px;
  }

  .main-banner .main-banner-content-img[data-v-d36eb9da] {
    position: relative;
    width: auto;
    height: auto;
    top: auto;
    right: -50px;
    margin-top: -35px;
  }

  .main-banner .main-banner-title[data-v-d36eb9da] {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 20px;
    width: auto;
    padding-right: 100px;
  }

  .main-banner .main-banner-text[data-v-d36eb9da] {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 30px;
    width: auto;
    padding-right: 50px;
  }
}

@media (max-width: 767px) {
  .main-banner[data-v-d36eb9da] {
    padding-top: 125px;
    padding-bottom: 0;
  }

  .main-banner .main-banner-content-text[data-v-d36eb9da] {
    padding-top: 0;
  }

  .main-banner .main-banner-content-img[data-v-d36eb9da] {
    right: -15px;
  }

  .main-banner .main-banner-title[data-v-d36eb9da] {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 15px;
  }

  .main-banner .main-banner-text[data-v-d36eb9da] {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 26px;
  }

  .main-banner .main-banner .main-banner-content-img img[data-v-d36eb9da] {
    content: url(~@/assets/images/sky/video-poster.jpg);
  }
}

@media (max-width: 1023px) {
  .main-banner .main-banner-title[data-v-4f41e170] {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 25px;
  }
}

.header__logo_mb {
  display: block;
}

.section-padding {
  padding: 64px 0;
}

.trade {
  position: relative;
  z-index: 1;
  -webkit-box-shadow: 0 -16px 56px -8px #111;
  box-shadow: 0 -16px 56px -8px #111;
}

.header__btn .button {
  height: 40px;
  padding: 0;
  width: 48px;
}

.button--transparent {
  color: #fff;
  background: 0 0;
  border: 1px solid #fff;
}

.header__menu {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 104px;
}

.header__btn {
  display: flex;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header__btn,
.payments__container {
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-orient: horizontal;
}

.header__logo {
  display: none;
}

.header-bg {
  position: absolute;
  top: 0;
  height: 100%;
  width: 264%;
  left: -112%;
  background-image: url("~@/assets/images/sky/video-poster.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  z-index: -1;
}

.header-bg-video {
  position: absolute;
  width: 100%;
  z-index: -1;
}

.header__btn .button__icon {
  height: 16px;
}

.header .h1 {
  margin-bottom: 32px;
}

.header {
  padding: 16px 0 160px;
  overflow: hidden;
}

.header::after {
  position: absolute;
  top: 0;
  width: 100%;
  height: 102%;
  z-index: -1;
}

.content__item::before,
.header::after {
  content: "";
}

.h1 {
  color: #fff;
  font-size: 32px;
  line-height: 44px;
  font-weight: 700px;
}

.text--blue {
  color: #0094ff;
}

.text--orange {
  color: #facc4f;
}

.h2 {
  color: #fff;
  margin: 0 0 16px;
  font-size: 32px;
  line-height: 40px;
}

.trade .h2 {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 56px;
}

.trade__list {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
}

.trade__content,
.trade__item,
.trade__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.trade__item {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 40px;
}

.trade__item svg {
  margin-bottom: 16px;
  width: 80px;
}

.h3 {
  color: #fff;
  margin-bottom: 8px;
}

.h3,
.subtitle {
  font-size: 16px;
  line-height: 24px;
}

.h1,
.h2,
.h3 {
  font-weight: 700;
}

.trade__text {
  color: #696a6d;
  text-align: center;
}

.section-padding {
  padding: 64px 0;
}

.regime .h2 {
  max-width: 840px;
  margin: 0 auto 64px;
}

.regime__container,
.regime__content {
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-direction: normal;
}

.regime__container {
  display: flex;
  max-width: 320px;
  margin: 0 auto;
  -webkit-box-orient: vertical;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.regime__left {
  margin-bottom: 64px;
}

.regime__left,
.regime__right {
  max-width: 440px;
  width: 100%;
}

.regime__content {
  height: 100%;
  display: flex;
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.content__text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.content__img,
.content__list {
  margin-bottom: 32px;
}

.content__item:nth-child(odd) {
  margin-bottom: 16px;
}

.content__item {
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  padding-left: 32px;
}

.content__item::before {
  position: absolute;
  top: calc(50% - 8px);
  left: 0;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: contain;
}

.content__item-1::before {
  background-image: url("~@/assets/images/sky/home/icon1.svg");
}

.content__item-2::before {
  background-image: url("~@/assets/images/sky/home/icon2.svg");
}

.content__item-3::before {
  background-image: url("~@/assets/images/sky/home/icon3.svg");
}

.content__item-4::before {
  background-image: url("~@/assets/images/sky/home/icon4.svg");
}

.wrapper_v2 .content__item-3::before,
.wrapper_v4 .content__item-3::before {
  background-image: url("~@/assets/images/sky/home/icon5.svg");
}

.payments {
  padding: 64px 0;
}

.payments .h2 {
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;
}

.payments__container {
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}

.payments__container svg {
  margin: 0 12px 24px;
}

.registration .h2 {
  max-width: 840px;
  margin-right: auto;
  margin-left: auto;
}

.registration .forms {
  min-height: 100px;
  max-width: 328px;
  margin: 0 auto;
  padding: 24px 16px 16px;
}

.footer {
  color: #696a6d;
  padding-top: 0;
  padding-top: 64px;
}

.footer,
.header {
  position: relative;
  z-index: 1;
}

.footer .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding-bottom: 40px;
}

.footer__container {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
  background: 0 0;
  padding-top: 0;
  margin-left: 0;
  padding-left: 0;
}

.footer .get__info-logo {
  display: block;
  margin-left: 0;
  margin-bottom: 42px;
}

.footer .get__social {
  width: auto;
  margin-left: 0;
  margin-bottom: 32px;
  max-width: 320px;
}

.get__social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 288px;
  width: 100%;
  margin: 0 auto 56px;
}

.footer .social__item {
  margin-right: 32px;
}

.get__social .social__item svg {
  cursor: pointer;
  width: 24px;
  height: 24px;
}

.footer .footer {
  padding-top: 0;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  margin-bottom: 32px;
  text-align: left;
}

.regulation-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 288px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}

.footer .regulation-info {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-line-pack: center;
  align-content: center;
}

.regulation-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--regulation-text-color);
  font-size: 10px;
  line-height: 16px;
  margin-bottom: 32px;
  max-width: 288px;
}

.regulation-item:first-child {
  margin-left: 0;
}

.regulation-item svg {
  width: 36px;
  height: 36px;
  min-width: 36px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
}

.regulation-item p {
  text-align: left;
  font-size: 10px;
  line-height: 16px;
}

@media only screen and (min-width: 768px) {
  .regulation-info {
    max-width: 224px;
  }

  .footer .footer {
    margin-bottom: 40px;
  }

  .footer .get__social {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
    margin-bottom: 0;
  }

  .footer .get__info-logo {
    margin-bottom: 24px;
  }

  .footer__container {
    max-width: 60.4%;
  }

  .footer .container {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 1144px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-bottom: 56px;
  }

  .registration .container {
    padding: 0;
    max-width: 100%;
  }

  .registration .forms {
    padding: 24px;
  }

  .registration .container-bg:before {
    position: absolute;
    width: 100%;
    height: 176%;
    content: "";
    background-image: url("~@/assets/images/sky/home/rega-bg.png");
    background-size: 1438px 1340px;
    background-repeat: no-repeat;
    background-position: center;
    top: -28%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }

  .registration .container-bg {
    position: relative;
  }

  .registration .h2 {
    padding: 0 16px;
  }

  .payments__container svg {
    margin: 0 20px 40px;
  }

  .subtitle {
    font-size: 24px;
    line-height: 32px;
  }

  .payments {
    padding: 80px 0 40px;
  }

  .content__text {
    width: auto;
  }

  .content__img {
    margin-bottom: 0;
    margin-right: 40px;
  }

  .regime__content {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .regime__left {
    margin-bottom: 80px;
  }

  .regime__container {
    max-width: 454px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .regime,
  .h2 {
    margin-bottom: 80px;
  }

  .section-padding {
    padding: 40px 0;
  }

  .header-bg {
    left: -24%;
    width: 134%;
  }

  .header__menu {
    margin-bottom: 96px;
  }

  .header__btn .button {
    width: auto;
    padding: 0 32px;
  }

  .header__btn .button__icon {
    margin-right: 8px;
  }

  .header .h1 {
    margin-bottom: 26px;
  }

  .header {
    padding: 40px 0 80px;
  }

  .h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    font-family: "Public Sans", sans-serif;
  }

  .section-padding {
    padding: 80px 0;
  }

  .h2 {
    font-size: 56px;
    line-height: 64px;
  }

  .trade__content,
  .trade__item,
  .trade__list {
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
  }

  .trade__item {
    margin-bottom: 72px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
  }

  .trade__item svg {
    margin-bottom: 0;
    margin-right: 40px;
  }

  .trade__text {
    text-align: left;
  }
}

@media only screen and (min-width: 1024px) {
  .header__logo_mb {
    display: none;
  }

  .footer__container {
    max-width: 70%;
  }

  .footer .container {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .subtitle {
    margin-bottom: 64px;
  }

  .regime__content {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .regime__left {
    margin-bottom: 0;
  }

  .regime__container {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    max-width: 988px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .header__menu {
    margin-bottom: 91px;
  }

  .header__logo {
    display: block;
  }

  .h1 {
    font-size: 72px;
    line-height: 80px;
  }

  .trade__list {
    max-width: 1120px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .trade__content,
  .trade__item,
  .trade__list {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .trade__item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    max-width: 280px;
    margin-bottom: 0;
  }

  .trade__item svg {
    margin-bottom: 16px;
    margin-right: 0;
  }

  .trade__text {
    text-align: center;
  }
}
/* 
@media only screen and (max-width: 490px) {
    .header__btn {
        zoom: 0.7;
    }
} */

@media screen and (max-width: 1024.98px) {
  .desc {
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    margin: 0 0 35px;
  }
}

.main-banner-title[data-v-4f41e170] {
  color: #fff;
  font-size: 40px;
  line-height: 47px;
  font-weight: 700;
  text-align: center;
}

.main-banner-title[data-v-4f41e170] {
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: #ffffff;
  margin-bottom: 23px;
  font-family: "Public Sans", sans-serif;
}

.homepage[data-v-4f41e170] {
  overflow: hidden;
  background-color: #020409 !important;
  font-family: Public Sans, sans-serif;
}

.main-banner-desc[data-v-4f41e170] {
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 16px;
  max-width: 555px;
  margin: 0 auto 35px;
  text-align: center;
}

.desc {
  color: hsla(0, 0%, 100%, 0.5);
  text-align: center;
  max-width: 555px;
}

p {
  margin-top: 0px;
  margin-bottom: 1rem;
}

.button.primary[data-v-4f41e170] {
  background-color: #34d1d6 !important;
  color: #fff !important;
  text-transform: uppercase;
}

.main-banner-link a[data-v-4f41e170] {
  border-radius: 8px !important;
  text-align: center;
}

.button.primary,
.button.primary span,
.text-primary,
a .primary-hover:hover {
  color: #fff !important;
}

.button.primary {
  background-color: #34d1d6 !important;
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .btn-start[data-v-4f41e170] {
    padding: 15px 20px;
    font-size: 10px;
    line-height: 14px;
  }

  .btn-start[data-v-4f41e170] {
    padding: 20px 45px;
    color: #fff;
    font-weight: 700 !important;
    font-size: 14px;
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
    border-radius: 8px;
    margin-left: 0 !important;
    border-radius: 30px;
  }

  .button[data-v-4f41e170] {
    cursor: pointer;
    border: none;
    background: 0 0;
    position: relative;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-weight: 700 !important;
    text-decoration: none;
  }

  .button[data-v-4f41e170] {
    font-weight: 700;
  }

  .button[data-v-4f41e170] {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

.main-banner-link a[data-v-4f41e170] {
  border-radius: 8px !important;
}

@media (max-width: 1023px) {
  .main-banner .main-banner-link[data-v-4f41e170] {
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 1024.98px) {
  .main-banner-link[data-v-4f41e170] {
    text-align: left;
  }
}

.main-banner-link[data-v-4f41e170] {
  margin-bottom: 35px;
  text-align: center;
}

.main-banner-link[data-v-4f41e170] {
  margin-bottom: 78px;
}

.button.primary[data-v-4f41e170] {
  background-color: #34d1d6 !important;
  color: #fff !important;
}

.main-banner-link a[data-v-4f41e170] {
  border-radius: 8px !important;
}

.button.primary,
.button.primary span,
.text-primary,
a .primary-hover:hover {
  color: #fff !important;
}

.button.primary {
  background-color: #34d1d6 !important;
}

.btn-start[data-v-4f41e170] {
  padding: 20px 45px;
  color: #fff;
  font-weight: 700 !important;
  font-size: 14px;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  border-radius: 8px;
  margin-left: 0 !important;
  border-radius: 30px;
}

.button[data-v-4f41e170] {
  cursor: pointer;
  border: none;
  background: 0 0;
  position: relative;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-weight: 700 !important;
  text-decoration: none;
}

.button[data-v-4f41e170] {
  font-weight: 700;
}

.button[data-v-4f41e170] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.borderRounded[data-v-4f41e170] {
  border-radius: 5px;
}

.font-20[data-v-4f41e170] {
  font-size: 20px;
}

.button.primary,
.button.primary span,
.text-primary,
a .primary-hover:hover {
  color: #fff !important;
}

.button.primary {
  background-color: #34d1d6 !important;
}

a:not(.md-button) {
  text-decoration: none;
}

a:not(.md-button) {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: color, background-color, opacity;
}

.button {
  cursor: pointer;
  border: none;
  background: 0 0;
  position: relative;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-weight: 700 !important;
  text-decoration: none;
}

.button {
  font-weight: 700;
}

.button {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.borderRounded {
  border-radius: 5px;
}

.font-20 {
  font-size: 20px;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.button {
  cursor: pointer;
  border: none;
  background: 0 0;
  position: relative;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-weight: 700 !important;
  text-decoration: none;
}

.button {
  font-weight: 700;
}

.button {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.borderRounded {
  border-radius: 5px;
}

.font-20 {
  font-size: 20px;
}

a {
  color: #34d1d6;
  text-decoration: none;
  background-color: transparent;
}

#rightNav a span[data-v-3bbff296] {
  white-space: nowrap;
}

.font-18[data-v-3bbff296] {
  font-size: 18px;
}

.font-18 {
  font-size: 18px;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-18 {
  font-size: 18px;
}

*,
:after,
:before {
  box-sizing: inherit;
}

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.Forgot .headerMaster .boxHeader a[data-v-3bbff296],
.Home .headerMaster .boxHeader a[data-v-3bbff296],
.Login .headerMaster .boxHeader a[data-v-3bbff296],
.Oauth .headerMaster .boxHeader a[data-v-3bbff296],
.Resend .headerMaster .boxHeader a[data-v-3bbff296],
.Signup-with-email .headerMaster .boxHeader a[data-v-3bbff296],
.SignupMethod .headerMaster .boxHeader a[data-v-3bbff296],
.VerifyAccount .headerMaster .boxHeader a[data-v-3bbff296] {
  color: #fff;
}

.Forgot .headerMaster .boxHeader a,
.Home .headerMaster .boxHeader a,
.Login .headerMaster .boxHeader a,
.Oauth .headerMaster .boxHeader a,
.Resend .headerMaster .boxHeader a,
.Signup-with-email .headerMaster .boxHeader a,
.SignupMethod .headerMaster .boxHeader a,
.VerifyAccount .headerMaster .boxHeader a {
  color: #fff;
}

.Forgot .headerMaster .boxHeader a,
.Home .headerMaster .boxHeader a,
.Login .headerMaster .boxHeader a,
.Oauth .headerMaster .boxHeader a,
.Resend .headerMaster .boxHeader a,
.Signup-with-email .headerMaster .boxHeader a,
.SignupMethod .headerMaster .boxHeader a,
.VerifyAccount .headerMaster .boxHeader a {
  color: #fff;
}

.btnSignIn[data-v-3bbff296] {
  background-color: #2f3342;
  color: #fff;
  cursor: pointer;
}

.btnMainBorder[data-v-3bbff296] {
  border-radius: 10px;
  padding: 11px 20px;
  font-weight: 700 !important;
  font-size: 13px;
}

.boxHeader a[data-v-3bbff296] {
  font-weight: 400;
  color: #8b8d96;
}

.btnSignIn {
  background-color: #2f3342;
  color: #fff;
}

.btnMainBorder {
  border-radius: 10px;
  padding: 11px 20px;
  font-weight: 700 !important;
  font-size: 13px;
}

.btnSignIn {
  background-color: #2f3342;
  color: #fff;
}

.btnMainBorder {
  border-radius: 10px;
  padding: 11px 20px;
  font-weight: 700 !important;
  font-size: 13px;
}

a:not(.md-button) {
  text-decoration: none;
}

a:not(.md-button) {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: color, background-color, opacity;
}

.text-decoration-none {
  text-decoration: none !important;
}

.w-75 {
  width: 75% !important;
}

a {
  color: #34d1d6;
  text-decoration: none;
  background-color: transparent;
}

*,
:after,
:before {
  box-sizing: inherit;
}

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

user agent stylesheet a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

#rightNav a span[data-v-3bbff296] {
  white-space: nowrap;
}

.font-18[data-v-3bbff296] {
  font-size: 18px;
}

.font-18 {
  font-size: 18px;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-18 {
  font-size: 18px;
}

*,
:after,
:before {
  box-sizing: inherit;
}

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.signbtn {
  font-family: "Sarabun", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
}

.lary {
  background-color: #34d1d6 !important;
}

.logbtn {
  font-family: "Sarabun", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
}

.justify-content-end {
  -webkit-box-pack: end !important;
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}

.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

@media (min-width: 992px) {
  .col-lg-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .col-md-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 576px) {
  .col-sm-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.sub-info[data-v-4f41e170] {
  width: 100%;
  padding: 30px 10px;
  background: #090f3e;
  z-index: 1;
}

.main-banner .sub-info[data-v-4f41e170] {
  width: 100%;
  padding: 30px;
  background: #090f3e;
  z-index: 1;
}

.sub-info__title[data-v-4f41e170] {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.sub-info__desc[data-v-4f41e170] {
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 16px;
}

.main-banner[data-v-4f41e170] {
  color: #fff;
  padding: 170px 0 0;
  position: relative;
  z-index: 2;
  background: url("~@/assets/images/sky/Wallpaper-BG.png");
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: 848px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 992px) {
  .col-lg-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
}

@media (min-width: 768px) {
  .col-md-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 576px) {
  .col-sm-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.swiper-slide {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.swiper-container-android,
.swiper-slide,
.swiper-wrapper {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.swiper-container-android,
.swiper-slide,
.swiper-wrapper {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.main-banner-image[data-v-4f41e170] {
  position: absolute;
  top: -41px;
  right: 50%;
  -webkit-transform: translate(50%);
  transform: translate(50%);
}

audio:not(.md-image),
canvas:not(.md-image),
embed:not(.md-image),
iframe:not(.md-image),
img:not(.md-image),
object:not(.md-image),
video:not(.md-image) {
  height: auto;
}

audio,
canvas,
embed,
iframe,
img,
object,
video {
  max-width: 100%;
  font-style: italic;
  vertical-align: middle;
}

img,
svg {
  vertical-align: middle;
}

img {
  border-style: none;
}

.btn-start[data-v-4f41e170] {
  padding: 20px 45px;
  color: #fff;
  font-weight: 700 !important;
  font-size: 14px;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  border-radius: 8px;
  margin-left: 0 !important;
  border-radius: 30px;
}

.button {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.btn-start[data-v-4f41e170] {
  text-align: center;
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.container.main-banner-content-text {
  min-height: 49vh;
}

.sub-info[data-v-4f41e170] {
  display: flex;
  justify-content: space-evenly;
}

@media screen and (max-width: 1024.98px) {
  .main-banner.sub-info[data-v-4f41e170] {
    padding: 30px 10px;
  }
}

@media (max-width: 1023px) {
  .main-banner.main-banner-title[data-v-4f41e170] {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 25px;
  }
}

@media screen and (max-width: 1024.98px) {
  .main-banner-title[data-v-4f41e170] {
    font-size: 24px;
    line-height: 28px;
    text-align: left;
  }
}

.main-banner-title[data-v-4f41e170] {
  color: #fff;
  font-size: 40px;
  line-height: 47px;
  font-weight: 700;
  text-align: center;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.security[data-v-4f41e170] {
  background: #fff;
  padding-top: 150px;
  background-position: 50%;
  background-size: cover;
  text-align: left;
  padding-bottom: 120px;
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

.security[data-v-4f41e170] {
  background: #fff;
  padding-top: 150px;
  background-position: 50%;
  background-size: cover;
  text-align: left;
  padding-bottom: 120px;
}

.security-title[data-v-4f41e170] {
  color: #141415;
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 0;
  font-weight: 700;
}

.security-description[data-v-4f41e170] {
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  margin-bottom: 0;
  max-width: 700px;
  margin-left: 16px;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.security[data-v-4f41e170] {
  background: #fff;
  padding-top: 150px;
  background-position: 50%;
  background-size: cover;
  text-align: left;
  padding-bottom: 120px;
}

.security-item-icon[data-v-4f41e170] {
  width: 120px;
  height: 120px;
}

.security-item-title[data-v-4f41e170] {
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
}

.security-item-text[data-v-4f41e170] {
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0;
}

.introduce[data-v-4f41e170] {
  background: url("~@/assets/images/sky/introduce-BG.png") 0 0 no-repeat;
  background-size: cover;
  position: relative;
  padding: 100px 0;
}

.text-center {
  text-align: center !important;
}

.introduce-title[data-v-4f41e170] {
  font-size: 40px;
  line-height: 47px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 30px;
}

.introduce-desc[data-v-4f41e170] {
  font-size: 16px;
  line-height: 18px;
  color: hsla(0, 0%, 100%, 0.5);
  max-width: 680px;
  margin: 0 auto;
  margin-bottom: 80px;
}

.introduce-step[data-v-4f41e170] {
  position: relative;
  background-color: #1c2942;
  border-radius: 30px;
  padding: 100px 20px 20px;
  margin-top: 110px;
  margin-bottom: 80px;
}

.__web-inspector-hide-shortcut__,
.__web-inspector-hide-shortcut__ *,
.__web-inspector-hidebefore-shortcut__::before,
.__web-inspector-hideafter-shortcut__::after {
  visibility: hidden !important;
}

.introduce-step-image[data-v-4f41e170] {
  position: absolute;
  height: 185px;
  left: 50%;
  top: -50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

audio:not(.md-image),
canvas:not(.md-image),
embed:not(.md-image),
iframe:not(.md-image),
img:not(.md-image),
object:not(.md-image),
video:not(.md-image) {
  height: auto;
}

.__web-inspector-hide-shortcut__,
.__web-inspector-hide-shortcut__ *,
.__web-inspector-hidebefore-shortcut__::before,
.__web-inspector-hideafter-shortcut__::after {
  visibility: hidden !important;
}

audio,
canvas,
embed,
iframe,
img,
object,
video {
  max-width: 100%;
  font-style: italic;
  vertical-align: middle;
}

img,
svg {
  vertical-align: middle;
}

img {
  border-style: none;
}

.introduce-step-title[data-v-4f41e170] {
  color: #fff;
  font-size: 18px;
  line-height: 21px;
}

.introduce-step-desc[data-v-4f41e170] {
  color: #6b6f8b;
  font-size: 16px;
  line-height: 19px;
}

.trade-now[data-v-4f41e170] {
  color: #fff;
  background: #fff;
  position: relative;
  height: 650px;
}

.trade-now-content[data-v-4f41e170] {
  padding-top: 130px;
  padding-bottom: 110px;
  z-index: 2;
}

.trade-now-title[data-v-4f41e170] {
  font-size: 48px;
  line-height: 57px;
  font-weight: 700;
  color: #34d1d6;
  margin-bottom: 40px;
}

.trade-now-description[data-v-4f41e170] {
  color: #080808;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 40px;
}

.text-right {
  text-align: right !important;
}

.trade-now-img[data-v-4f41e170] {
  position: absolute;
  right: 0;
  bottom: 0;
}

.cryptocurrencies[data-v-4f41e170] {
  padding: 100px 0;
  background-image: url("~@/assets/images/sky/cryptocurrencies-BG.png");
}

.cryptocurrencies-title[data-v-4f41e170] {
  color: #fff;
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 20px;
  text-align: center;
}

.container[data-v-02074fa0],
.container-fluid[data-v-02074fa0],
.container-lg[data-v-02074fa0],
.container-md[data-v-02074fa0],
.container-sm[data-v-02074fa0],
.container-xl[data-v-02074fa0] {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.h2,
h2 {
  font-size: 2rem;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.cryptocurrencies-description[data-v-4f41e170] {
  color: #8b8d96;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 40px;
  text-align: center;
}

.cryptocurrencies-images[data-v-4f41e170] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.cryptocurrencies-images img[data-v-4f41e170] {
  margin: 0 10px;
}

.homepage,
.footerFAQs[data-v-7e36f564] {
  background-color: #131626;
  padding-top: 40px;
}

.homepage,
.footerFAQs {
  background-color: #131626;
  padding-top: 40px;
}

.footerFAQs[data-v-7e36f564] {
  display: block;
  color: #fff;
  background-color: #131626 !important;
}

.footerFAQs[data-v-7e36f564] {
  background: #02102c !important;
}

.homepage,
.footerFAQs {
  background-color: #131626;
  padding-top: 40px;
}

.footerFAQs {
  background: #02102c !important;
}

.footerFAQs {
  background: #02102c !important;
}

.footerFAQs,
.blockRow[data-v-7e36f564] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.footerFAQs[data-v-7e36f564] {
  display: block;
  color: #fff;
  background-color: #131626 !important;
}

.footerFAQs,
.border-bottom[data-v-7e36f564] {
  border-color: rgba(139, 141, 150, 0.28) !important;
}

.border-bottom {
  border-bottom: 1px solid #41416f !important;
}

.txtContent[data-v-7e36f564] {
  color: #fff;
  opacity: 0.6;
}

.font-12[data-v-7e36f564] {
  font-size: 12px;
}

.__web-inspector-hide-shortcut__,
.__web-inspector-hide-shortcut__ *,
.__web-inspector-hidebefore-shortcut__::before,
.__web-inspector-hideafter-shortcut__::after {
  visibility: hidden !important;
}

.d-inline-block {
  display: inline-block !important;
}

element.style {
  flex: 0.5 1 0%;
}

.footerFAQs .blockRow .block[data-v-7e36f564] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.footerFAQs,
.blockRow,
.block,
.logo[data-v-7e36f564] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 20px;
}
@media (min-width: 576px) {
  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important;
  }
}

element.style {
  flex: 0.5 1 0%;
}
.footerFAQs .blockRow ul li a[data-v-7e36f564] {
  color: #fff !important;
  opacity: 0.6;
  line-height: 30px;
}

a[data-v-7e36f564]:active,
a[data-v-7e36f564]:hover,
a[data-v-7e36f564]:link,
a[data-v-7e36f564]:visited {
  text-decoration: none !important;
}
a:not(.md-button) {
  text-decoration: none;
}
a:not(.md-button) {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: color, background-color, opacity;
}
a {
  color: #34d1d6;
  text-decoration: none;
  background-color: transparent;
}
.footerFAQs .blockRow .block[data-v-7e36f564] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.footerFAQs .blockRow .block.logo[data-v-7e36f564] {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 20px;
}
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.spaceTop[data-v-59d426a6] {
  background-color: transparent;
  height: 65px;
}
.heightUnset[data-v-59d426a6] {
  height: unset !important;
}
.heightUnset {
  height: unset !important;
}
.heightUnset {
  height: unset !important;
}
@media (max-width: 1023px) {
  .main-banner .main-banner-title[data-v-4f41e170] {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 25px;
  }
}
@media screen and (max-width: 1024.98px) {
  .main-banner-title[data-v-4f41e170] {
    text-align: left;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }
}
.main-banner-title[data-v-4f41e170] {
  color: #fff;

  font-weight: 700;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
@media screen and (max-width: 1024.98px) {
  .main-banner-image[data-v-4f41e170] {
    position: absolute;
    right: 50%;
    -webkit-transform: translate(50%);
    transform: translate(50%);
  }
}
.main-banner-image[data-v-4f41e170] {
  position: absolute;
  right: 50%;
  -webkit-transform: translate(50%);
  transform: translate(50%);
}
.main-banner-image[data-v-4f41e170] {
  position: absolute;
  right: 50%;
  -webkit-transform: translate(50%);
  transform: translate(50%);
}
audio:not(.md-image),
canvas:not(.md-image),
embed:not(.md-image),
iframe:not(.md-image),
img:not(.md-image),
object:not(.md-image),
video:not(.md-image) {
  height: auto;
}
audio,
canvas,
embed,
iframe,
img,
object,
video {
  max-width: 100%;
  font-style: italic;
  vertical-align: middle;
}
img,
svg {
  vertical-align: middle;
}
img {
  border-style: none;
}
@media screen and (max-width: 1024.98px) {
  .main-banner-desc[data-v-4f41e170] {
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    margin: 0 0 35px;
  }
}

.main-banner-desc[data-v-4f41e170] {
  color: hsla(0, 0%, 100%, 0.5);

  max-width: 555px;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
@media screen and (max-width: 1024.98px) {
  .main-banner-image[data-v-4f41e170] {
    position: absolute;
    right: 50%;
    -webkit-transform: translate(50%);
    transform: translate(50%);
  }
}
@media screen and (max-width: 1023px) {
  .btn-start[data-v-4f41e170] {
    padding: 15px 20px;
    font-size: 10px;
    line-height: 14px;
    left: -1px;
  }
}
@media screen and (max-width: 1024.98px) {
  .main-banner .sub-info[data-v-4f41e170] {
    padding: 30px 10px;
  }
}
.main-banner .sub-info[data-v-4f41e170] {
  width: 100%;
  padding: 30px;
  background: #090f3e;
  z-index: 1;
}
@media screen and (max-width: 1600px) {
  .main-banner-image[data-v-4f41e170] {
    position: absolute;
    right: 50%;
    transform: translate(50%);
  }
}
@media screen and (max-width: 1024.98px) {
  .security[data-v-4f41e170] {
    text-align: center;
  }
}
@media screen and (max-width: 1024.98px) {
  .security-title[data-v-4f41e170] {
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (max-width: 1024.98px) {
  .security-description[data-v-4f41e170] {
    font-size: 14px;
    line-height: 16px;
    margin: 0 auto;
  }
}
@media (max-width: 1023px) {
  .introduce .introduce-title[data-v-4f41e170] {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
  }
}
@media (max-width: 1023px) {
  .introduce .introduce-desc[data-v-4f41e170] {
    font-size: 14px;
    line-height: 16px;
  }
}
@media (max-width: 992px) {
  .introduce-step[data-v-4f41e170] {
    max-width: 330px;
    margin: 100px auto 80px;
  }
}
audio,
canvas,
embed,
iframe,
img,
object,
video {
  max-width: 100%;
  font-style: italic;
  vertical-align: middle;
}
.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
@media (max-width: 1023px) {
  .introduce .introduce-title[data-v-4f41e170] {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
  }
}

@media screen and (max-width: 1023px) {
  .trade-now-title[data-v-4f41e170] {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 15px;
  }
}
@media screen and (max-width: 1023px) {
  .trade-now-description[data-v-4f41e170] {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 45px;
  }
}
@media (max-width: 600px) {
  .trade-now .container .row > div[data-v-4f41e170]:last-child {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }
}
@media (max-width: 600px) {
  .trade-now .container .row > div[data-v-4f41e170]:first-child {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
}
@media screen and (max-width: 1023px) {
  .trade-now-content[data-v-4f41e170] {
    padding-top: 124px;
    padding-bottom: 0;
  }
}
@media screen and (max-width: 1023px) {
  .trade-now-img[data-v-4f41e170] {
    position: inherit;
    right: 0;
    bottom: 0;
  }
}
@media screen and (max-width: 1023px) {
  .trade-now[data-v-4f41e170] {
    height: auto;
  }
}
@media screen and (max-width: 1023px) {
  .btn-start[data-v-4f41e170] {
    padding: 15px 20px;
    font-size: 10px;
    line-height: 14px;
  }
}
@media screen and (max-width: 1024.98px) {
  .cryptocurrencies-title[data-v-4f41e170] {
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (max-width: 1024.98px) {
  .cryptocurrencies-description[data-v-4f41e170] {
    font-size: 14px;
    line-height: 16px;
  }
}
@media screen and (max-width: 1024.98px) {
  .main-banner .sub-info[data-v-4f41e170] {
    padding: 30px 10px;
  }
}
@media (min-width: 992px) {
  .col-lg-4 {
    -webkit-box-flex: 0;

    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
}

@media (min-width: 768px) {
  .col-md-12 {
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .col-lg-6 {
    -webkit-box-flex: 0;

    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 1024.98px) {
  .main-banner .sub-info[data-v-4f41e170] {
    padding: 30px 10px;
  }
  .main-banner .sub-info[data-v-4f41e170] {
    width: 100%;

    background: #090f3e;
    z-index: 1;
  }
}
@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 90%;
  }
}
@media screen and (max-width: 767.98px) {
  .block[data-v-7e36f564] {
    -webkit-box-flex: unset;
  }
}

@media (max-width: 1024px) {
  .footerFAQs,
  .blockRow,
  .block[data-v-7e36f564] {
    margin-bottom: 40px !important;
  }
}
@media (max-width: 1024px) {
  .footerFAQs,
  .blockRow,
  h4[data-v-7e36f564] {
    margin-bottom: 5px;
  }
}
@media screen and (max-width: 767.98px) {
  .block,
  .logo[data-v-7e36f564] {
    -webkit-box-flex: unset;
    flex: unset;
    padding: 0;
  }
}
@media screen and (max-width: 767.98px) {
  .footerFAQs,
  .blockRow[data-v-7e36f564] {
    display: block;
  }
}
@media only screen and (max-width: 767.98px) {
  .btnMainBorder[data-v-3bbff296] {
    font-size: 12px;
    padding: 7px 10px;
    border-radius: 3px;
  }
}
</style>
