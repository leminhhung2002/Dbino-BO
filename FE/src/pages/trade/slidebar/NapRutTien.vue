<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Ares DN
  Author URL: 
========================================================================================== -->


<template>

    <div class="deposit_widthdraw ">
        <div class="headerTab">
            <ul class="listTab mb-0 pl-0">
                <li class="itemTab" :class="{active: activeNRT = getSetSys.isDepositOpen}" @click="activeNRT = true, getSetSys.isWithdraOpen = false, getSetSys.isDepositOpen = true"><span>Nạp Tiền</span>
                </li>
                <li class="itemTab" :class="{active: getSetSys.isWithdraOpen}" @click="activeNRT = false, getSetSys.isDepositOpen = false, getSetSys.isWithdraOpen = true"><span>Rút Tiền</span>
                </li>
            </ul>
        </div>
        <div class="boxModal" :class="{'ld-loading':isLoading}">
            <div class="loading">
                <div class="loading__ring">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                        <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"></path>
                    </svg>
                </div>
                <div class="loading__ring">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                        <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z"></path>
                    </svg>
                </div>
            </div>
            <div class="mainBoxModal">
                <div class="contenTab">
                    <div class="combo d-flex mb-4">
                        <div class="listBalance" style="flex: 1 1 0%;">
                            <div class="boxSelectUnit bgSecondary3 borderSecondary2 cbx" :class="{activeSelectItem: showSelectTypeC}" @click="showSelectTypeC ? showSelectTypeC = false : showSelectTypeC = true">
                                <div id="selectedUnitDeposit" :class="`selectedUnit hasitem ${textTypePay}`">
                                    <div :class="`icon ${textTypePay}`"></div>
                                    <div class="info">
                                        <div class="amount">
                                            <span class="number">{{ getAmount }}</span>
                                        </div>
                                        <i class="material-icons absolute right-0" style="top: 5px;">expand_more</i>
                                    </div>
                                </div>
                                <div class="listUnits shadow">
                                    <div class="itemSelectUnit PAYPAL" @click="selectTypePay('PAYPAL')" v-if="getSetSys.isActiveWalletPaypal">
                                        <div class="icon PAYPAL"></div>
                                        <div class="info">
                                            <div class="amount w-full">
                                                <span class="number">{{ balancePaypal }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="itemSelectUnit VND" @click="selectTypePay('VND')" v-if="getSetSys.isActiveWalletVND && typePay == 'VND'">
                                        <div class="icon VND"></div>
                                        <div class="info">
                                            <div class="amount w-full">
                                                <span class="number">{{ activeNRT ? "Nạp" : "Rút"}} tiền VNĐ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="itemSelectUnit USDT" @click="selectTypePay('USDT')" v-if="getSetSys.isActiveWalletUSDT && typePay == 'USDT'">
                                        <div class="icon USDT"></div>
                                        <div class="info">
                                            <div class="amount w-full">
                                                <span class="number">{{ balanceUSDT }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="itemSelectUnit ETH" @click="selectTypePay('ETH')" v-if="getSetSys.isActiveWalletETH">
                                        <div class="icon ETH"></div>
                                        <div class="info">
                                            <div class="amount w-full">
                                                <span class="number">{{ balanceETH }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="itemSelectUnit BTC" @click="selectTypePay('BTC')" v-if="getSetSys.isActiveWalletBTC">
                                        <div class="icon BTC"></div>
                                        <div class="info">
                                            <div class="amount w-full">
                                                <span class="number">{{ balanceBTC }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="boxAddress">
                        <div v-if="isPaypal">
                            <div class="transfer-network">
                                <div v-if="!activeNRT">
                                    <h4 class="transfer-network-title mt-0">
                                        Mạng lưới
                                    </h4>
                                    <ul class="transfer-network-list transfer-network-list--deposit has-bsc">
                                        <li class="transfer-network-item" :class="{'is-active': isActiveSelectTransPaypal}" @click="isActiveSelectTransPaypal = true">
                                            <span class="transfer-network-item-label">Nội bộ</span>
                                            <span class="transfer-network-item-fee">Phí: {{ getSetSys.feeRutPaypalNoiBo }} USD</span>
                                        </li>
                                        <li class="transfer-network-item" :class="{'is-active': !isActiveSelectTransPaypal}" @click="isActiveSelectTransPaypal = false">
                                            <span class="transfer-network-item-label">Paypal</span>
                                            <span class="transfer-network-item-fee">Phí: {{ getSetSys.feeRutPaypalAcc }} USD</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="deposit_widthdraw_box">
                                    <div class="form-group relative mt-4">
                                        <h4 class="colorSecondary2">Giá trị USD</h4>
                                        <input v-if="activeNRT" type="number" v-model="amount" decimal="true" :placeholder="`Số tiền tối thiểu: ${ getSetSys.minDepositPaypal } USDT`" class="form-control">
                                        <input v-if="!activeNRT" type="number" v-model="amount" decimal="true" :placeholder="`Số tiền tối thiểu: ${ getSetSys.minWithdrawalPaypal } USDT`" class="form-control">
                                        <button class="btn sendMax button primary" v-if="!activeNRT" @click="enterMaxAmount">Tối đa</button>
                                    </div>
                                    <div class="form-group relative" v-if="!activeNRT">
                                        <h4 class="colorSecondary2">{{ isActiveSelectTransPaypal ? 'Biệt danh người nhận' : 'Tài khoản người nhận' }} </h4>
                                        <input type="text" :placeholder="`${ isActiveSelectTransPaypal ? 'Nhập biệt danh người nhận' : 'Nhập tài khoản nhận' }`" class="form-control "/>
                                    </div>
                                    <div class="text-center address">
                                        <div class="text-center p-4" v-if="isNap">
                                            <h1>Đang thực hiện thanh toán</h1>
                                            <p class="p-3">Có 1 cửa sổ Popup sẽ được bật lên, vui lòng thánh toán để hoàn thành.</p>
                                            <i>* Lưu ý: Nếu bạn không thấy của sổ Popup bật lên xin vui lòng vào trình duyệt Cài đặt -> bỏ chặn Cửa sổ bật lên</i>
                                        </div>
                                        <span class="noted" v-if="activeNRT">Nạp tối thiểu là {{getSetSys.minDepositPaypal}} USD</span>
                                        <small class="colorRed enable2fa" v-if="!getData.c2fa && !activeNRT && !DISABLE_2FA">Bạn phải bật 2FA để yêu cầu rút tiền</small>
                                        <vs-button v-if="activeNRT" class="buttonCommon greenButton" :class="{hidden: isNap}" type="filled" @click="DepositPaypal">Nạp Tiền</vs-button>
                                        <vs-button v-if="!activeNRT && !DISABLE_2FA" class="buttonCommon redButton" :disabled="!getData.c2fa && !DISABLE_2FA" type="filled" @click="WithDrawalPaypal">Rút Tiền</vs-button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div v-if="isVND" :class="isMobile ? 'scrollMobile' : ''">
                           <div class="deposit_widthdraw_box" v-if="activeNRT">
                                <div class="form-group relative mt-4">
                                    <h4 class="colorSecondary2">Giá trị USD</h4>
                                    <input type="number" v-model="amount" decimal="true" :placeholder="`Số tiền tối thiểu: ${ getSetSys.minDepositUSDT } USDT`" class="form-control">
                                </div>
                                <div class="text-center address">
                                    <div class="p-3">
                                        <div>Để thanh toán bạn vui lòng chuyển tiền theo nội dung {{ bank }}</div>
                                        <div>Với số tiền <b>{{ formatPrice(getSetSys.quotePriceVND * amount, 0) }}</b> VNĐ</div>
                                        <div>---</div>
                                        <div>Chủ tài khoản: NGUYEN CONG KHOE</div>
                                        <div>Ngân hàng: TECHCOMBANK</div>
                                        <div>Số tài khoản: 19038100028016</div>
                                        <div>---</div>
                                        <div>Chủ tài khoản: NGUYEN CONG KHOE</div>
                                        <div>Ngân hàng: TP BANK</div>
                                        <div>Số tài khoản: 05420392001</div>
                                        <div>---</div>
                                        <div>Chủ tài khoản: BUI DIEU ANH</div>
                                        <div>Ngân hàng: VP BANK</div>
                                        <div>Số tài khoản: 255434071</div>
                                        <div>---</div>
                                    </div>
                                    <div><b>Sau khi chuyển khoản bạn hãy ấn nút nạp tiền ở bên dưới.</b></div>
                                    <i>* Lưu ý: Hệ thống sẽ không chịu trách nhiệm nếu bạn gửi sai nội dung!</i>
                                    <span class="noted">1 USD = {{ formatPrice(getSetSys.quotePriceVND, 0) }} VNĐ</span>
                                    <vs-button class="buttonCommon greenButton" :class="{hidden: isNap}" type="filled" @click="DepositVND()">Nạp Tiền</vs-button>
                                </div>
                            </div>

                            <div v-else class="deposit_widthdraw_box">
                                <div class="colorSecondary2">USD trong ví: 
                                    <span class="price mr-2">
                                        {{ getAmount }}$
                                    </span>
                                </div>
                                <div class="colorSecondary2">Số tiền rút quy đổi: 
                                    <span class="price mr-2">
                                        {{ formatPrice(amount * getSetSys.quotePriceVND, 0) }} VNĐ
                                    </span>
                                </div>
                                <div class="form-group relative mt-4">
                                    <input v-model="amount" type="number" decimal="true" :placeholder="`Số tiền tối thiểu: ${ getSetSys.minWithdrawalUSDT } USDT`" class="form-control">
                                    <button class="btn sendMax button primary" @click="enterMaxAmount">Tối đa</button>
                                </div>
                                <div class="form-group relative">
                                    <vs-select v-model="tenNganHang" label="Tên ngân hàng *" class="mt-5 w-full" name="item-category" placeholder="Chọn ngân hàng">
                                        <vs-select-item value="Vietcombank" text="Vietcombank" />
                                        <vs-select-item value="Vietinbank" text="Vietinbank" />
                                        <vs-select-item value="Techcombank" text="Techcombank" />
                                        <vs-select-item value="BIDV" text="BIDV" />
                                        <vs-select-item value="VPBank" text="VPBank" />
                                        <vs-select-item value="MBBank" text="MBBank" />
                                        <vs-select-item value="ACB" text="ACB" />
                                        <vs-select-item value="TPBank" text="TPBank" />
                                        <vs-select-item value="HDBank" text="HDBank" />
                                        <vs-select-item value="SHB" text="SHB" />
                                        <vs-select-item value="Sacombank" text="Sacombank" />
                                        <vs-select-item value="Abbank" text="Abbank" />
                                        <vs-select-item value="Baovietbank" text="Baovietbank" />
                                        <vs-select-item value="Eximbank" text="Eximbank" />
                                        <vs-select-item value="Lienvietpostbank" text="Lienvietpostbank" />
                                        <vs-select-item value="VIB" text="VIB" />
                                    </vs-select>
                                </div>
                                <div class="form-group relative">
                                    <h4 class="colorSecondary2"> Chi nhánh ngân hàng * </h4>
                                    <input placeholder="Nhập chi nhánh ngân hàng của bạn" type="text" v-model="chiNhanhNganHang"  class="form-control ">
                                </div>
                                <div class="form-group relative">
                                    <h4 class="colorSecondary2"> Số tài khoản * </h4>
                                    <input placeholder="Nhập số tài khoản của bạn" type="text" v-model="soTaiKhoan" class="form-control ">
                                </div>
                                <div class="form-group relative">
                                    <h4 class="colorSecondary2"> Chủ tài khoản * </h4>
                                    <input placeholder="Nhập tên chủ tài khoản" type="text" v-model="chuTaiKhoan" class="form-control ">
                                </div>
                                <div class="form-group relative">
                                    <h4 class="colorSecondary2"> Ghi chú <i>(không bắt buộc)</i> </h4>
                                    <input type="text" v-model="noteRut" placeholder="Nhập ghi chú của bạn" class="form-control ">
                                </div>
                                <div class="text-center address" v-if="DISABLE_2FA">
                                    <vs-button class="buttonCommon redButton" type="filled" @click="Withdrawal()">Rút Tiền</vs-button>
                                </div>
                                <div v-if="!pop2FAokPay && !DISABLE_2FA">
                                    <div class="text-center address">
                                        <small class="colorRed enable2fa" v-if="!getData.c2fa">Bạn phải bật 2FA để yêu cầu rút tiền</small>
                                        <vs-button :disabled="!getData.c2fa" class="buttonCommon redButton" type="filled" @click="Withdrawal()">Rút Tiền</vs-button>
                                    </div>
                                </div>
                                <div v-else-if="!DISABLE_2FA">
                                    <div class="form-group relative">
                                        <h4 class="colorSecondary2"><i>Nhập mã 2FA *</i> </h4>
                                        <input type="text" v-model="code2FA" placeholder="Nhập mã 2FA" class="form-control ">
                                        <div class="text-center address mt-4">
                                            <vs-button class="buttonCommon redButton" type="filled" @click="WithdrawalOKPay()">Đồng ý</vs-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="transfer-network">
								<h4 class="transfer-network-title mt-0">
									Mạng lưới
								</h4>
								<ul class="transfer-network-list transfer-network-list--deposit has-bsc">
									<li class="transfer-network-item" :class="{'is-active': isActiveSelectTransNB}" @click="isActiveSelectTransNB = true, isActiveSelectTransBEP20 = false, isActiveSelectTransERC20 = false">
										<span class="transfer-network-item-label">{{ !activeNRT ? 'Nội bộ' : 'BEP20 (BSC)' }}</span>
										<span class="transfer-network-item-fee" v-if="!activeNRT">Phí: {{ getSetSys.feeRutUSDTNoiBo }} USDT</span>
									</li>
                                    <li v-if="!activeNRT" class="transfer-network-item transfer-network-item--bsc" :class="{'is-active': isActiveSelectTransBEP20}" @click="isActiveSelectTransBEP20 = true, isActiveSelectTransNB = false, isActiveSelectTransERC20 = false">
										<span class="transfer-network-item-label">BEP20 (BSC)</span>
										<span class="transfer-network-item-fee" v-if="!activeNRT">Phí: {{ getSetSys.feeRutUSDTBEP20 }} USDT</span>
									</li>
									<!--<li v-if="!activeNRT" class="transfer-network-item" :class="{'is-active': isActiveSelectTransERC20}" @click="isActiveSelectTransERC20 = true, isActiveSelectTransNB = false, isActiveSelectTransBEP20 = false">
										<span class="transfer-network-item-label">ERC20</span>
										<span class="transfer-network-item-fee" v-if="!activeNRT">Phí: {{ getSetSys.feeRutUSDTERC20 }} USDT</span>
									</li>-->
								</ul>
								<p class="transfer-network-warn" v-if="activeNRT" :class="{'hidden': !isActiveSelectTransNB}">
									<span class="font-bold">Chú ý:</span> Để đảm bảo an toàn cho tài sản của bạn, xin hãy xác nhận lần nữa blockchain bạn cần dùng là BSC.
								</p>
								<p class="transfer-network-warn" v-if="!activeNRT" :class="{'hidden': !isActiveSelectTransBEP20}">
									<span class="font-bold">Chú ý:</span> Để đảm bảo an toàn cho tài sản của bạn, xin hãy xác nhận lần nữa blockchain bạn cần dùng là BSC.
								</p>
                            </div>
                            <div class="depos" :class="{block: activeNRT}">
                                <h4 class="text-center">Địa chỉ nạp <span>USDT</span> của bạn</h4>
                                <div class="text-center mt-4">
                                    <div class="boxQRCode">
                                        <div class="qr-code-container">
                                            <canvas height="100" width="100" style="height: 100px; width: 100px;"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="md:w-full">
                                        <div class="address">
                                            <input v-model="textAddress" readonly="readonly" id="depositAddress" class="bgSecondary colorSecondary2 text-center">
                                        </div>
                                        <div class="md:w-full text-center">
                                            <div class="address">
                                                <span class="noted">Nạp tối thiểu là {{ getSetSys.minDepositUSDT }} USDT</span>
                                                <!-- <span class="noted">** Để giảm tải máy chủ, vui lòng khi nạp tiền rồi nhấp vào kiểm tra, hệ thống sẽ kiểm tra trong vòng 2 phút, nếu USDT chưa vào tài khoản thì xin nhấp KIỂM TRA lại. Vui lòng không Spam tránh việc khóa tài khoản!</span> -->
                                                <vs-button class="buttonCommon greenButton" type="filled" @click="CopyAddress">Sao chép</vs-button>
                                                <!-- <vs-button  id="button-with-loading" class="vs-con-loading__container buttonCommon ml-2" color="warning" type="filled" :disabled="checkispay" @click="CheckPAY('USDT')">{{ ssDownSend }}</vs-button> -->
                                                <!---->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="depos deposit_widthdraw_box" :class="{block: !activeNRT}">
                                <div class="form-group relative">
                                    <h4 class="colorSecondary2">
                                                    Giá trị USDT
                                                    </h4>
                                    <input type="number" v-model="amount" decimal="true" :placeholder="`Số tiền tối thiểu: ${ activeNRT ? getSetSys.minDepositUSDT : getSetSys.minWithdrawalUSDT } USDT`" class="form-control">
                                    <button class="btn sendMax button primary" @click="enterMaxAmount">Tối đa</button>
                                </div>
                                <div class="form-group relative">
                                    <h4 class="colorSecondary2">{{ isActiveSelectTransNB ? 'Biệt danh người nhận' : 'Địa chỉ người nhận' }} </h4>
                                    <input type="text" v-model="adddressWithDrawal" :placeholder="`${ isActiveSelectTransNB ? 'Nhập biệt danh người nhận' : 'Nhập địa chỉ nhận' }`" class="form-control "/>

                                </div>
                                <div class="form-group relative">
                                    <h4 class="colorSecondary2"> Ghi chú <i>(không bắt buộc)</i> </h4>
                                    <input type="text" v-model="noteRut" placeholder="Nhập ghi chú của bạn" class="form-control ">
                                </div>
                                <div v-if="DISABLE_2FA">
                                    <div class="text-center address">
                                        <vs-button class="buttonCommon redButton" type="filled" @click="Withdrawal()">Rút Tiền</vs-button>
                                    </div>
                                </div>
                                <div v-else>
                                    <div v-if="!pop2FAokPay">
                                        <div class="text-center address">
                                            <small class="colorRed enable2fa" v-if="!getData.c2fa">Bạn phải bật 2FA để yêu cầu rút tiền</small>
                                            <vs-button :disabled="!getData.c2fa" class="buttonCommon redButton" type="filled" @click="Withdrawal()">Rút Tiền</vs-button>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="form-group relative">
                                            <h4 class="colorSecondary2"><i>Nhập mã 2FA *</i> </h4>
                                            <input type="text" v-model="code2FA" placeholder="Nhập mã 2FA" class="form-control ">
                                            <div class="text-center address mt-4">
                                                <vs-button class="buttonCommon redButton" type="filled" @click="WithdrawalOKPay()">Đồng ý</vs-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import getData from '@/pages/trade/navbar/components/data.json'
import AuthenticationService from '@/services/AuthenticationService'
import getSetSys  from '@/services/settingSys.json'
import { isMobile } from 'mobile-device-detect'
import QRCode from 'qrcode'
import makeid from '../../../utils/makeid';
import SETTINGS from '../../../../settings.json'

export default {
    props: {
        typePay: {
            type: String,
            default: '',
        }
    },
    data(){
        return {
            pop2FAokPay: !this.DISABLE_2FA,
            code2FA: '',

            isNap: false,
            isLoading: false,
            isPaypal: false,
            isVND: false,

            checkispay: false,

            textTypePay: 'USDT',

            showSelectTypeC: false,

            getAmount: 0,

            amount: '',

            adddressWithDrawal: '',

            getData: getData,
            getSetSys: getSetSys,
            activeNRT: true,
            isActiveSelectTransPaypal: true,
            isActiveSelectTransNB: true,
            isActiveSelectTransBEP20: false,
            isActiveSelectTransERC20: false,

            textAddress: '',

            amountRut: 0,
            addressRut: 0,
            noteRut: '',
            tenNganHang: '',
            chiNhanhNganHang: '',
            soTaiKhoan: '',
            chuTaiKhoan: '',

            balanceUSDT: 0,
            balanceETH: 0,
            balanceBTC: 0,
            balancePaypal: 0,

            colorLoading: '#fff',
            ssDownSend: 'Kiểm tra',
            bank: `${getData.displayName}_${makeid(4)}`,
            isMobile,

            DISABLE_2FA: false,

            connectionSetting: null,
        }
    },
    methods: {
        enterMaxAmount(){
            this.amount = this.parseLocaleNumber(this.getAmount)
        },

        DepositVND(){
            if(this.amount < getSetSys.minDepositUSDT){
                return this.$vs.notify({
                    text: `Số tiền nạp tối thiểu là $${getSetSys.minDepositUSDT}.`,
                    iconPack: 'feather',
                    icon: 'icon-check',
                    position:'top-right',
                    color: 'danger'
                });
            }

            let obj = {
                a: Number(this.amount),
                n: getData.displayName,
                al: getSetSys.quotePriceVND * +this.amount,
                b: this.bank,
            }

            // AuthenticationService.depositVND(obj)
            // .then((res) => {
            //     let d = res.data

            //     if(d.success == 3 || d.success == 4){
            //         localStorage.removeItem('token')
            //         this.$router.push('/login').catch(() => {})
            //         return
            //     }

            //     if(d.success){
                    this.isNap = false;
                    return this.$vs.notify({
                        text: 'Gửi yêu cầu nạp tiền thành công!',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        color: 'success',
                        position:'top-right',
                    });
                // }
            // })
        },
        
        DepositPaypal(){
            if(this.amount < getSetSys.minDepositPaypal){
                return this.$vs.notify({
                    text: `Số tiền nạp tối thiểu là $${getSetSys.minDepositPaypal}.`,
                    iconPack: 'feather',
                    icon: 'icon-check',
                    position:'top-right',
                    color: 'danger'
                });
            }

            this.isNap = true

            let obj = {
                a: Number(this.amount),
                n: getData.displayName,
                // Bỏ qua 2fa
                f: this.DISABLE_2FA,
            }

            AuthenticationService.depositPaypal(obj)
            .then((res) => {
                let d = res.data

                if(d.success == 3 || d.success == 4){
                    localStorage.removeItem('token')
                    this.$router.push('/login').catch(() => {})
                    return
                }

                if(d.success){
                    this.$vs.notify({
                        text: 'Vui lòng hoàn thành các bước để nạp tiền.',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position:'top-right',
                        color: 'success'
                    });
                    setTimeout(() =>{
                        this.isNap = false
                    }, 30000)
                    window.open(res.data.link);
                }
            })
        },

        WithDrawalPaypal(){
            if (!this.DISABLE_2FA) {
                if(!getData.c2fa){
                     return this.$vs.notify({
                        text:'Bạn phải bật 2FA để yêu cầu rút tiền',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'})
                }
            }

            // đây là số tiền nhập
            let amount = Number(this.amount)
            
            if(amount <= 0 || amount == ''){
                return this.$vs.notify({
                    text:'Giá trị không hợp lệ',
                    color:'danger',
                    position:'top-right',
                    iconPack: 'feather',
                    icon:'icon-x-circle'})
            }

            if(amount < getSetSys.maxWithdrawalUSDT){
              return this.$vs.notify({
                      text: `Số tiền rút tối thiểu là $${getSetSys.maxWithdrawalUSDT}.`,
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
            }

            // mặc định rút nội bộ

            let obj = {
                amS: amount,
                nick: getData.displayName,
                gc: this.noteRut,
                // bỏ qua 2fa
                f: this.DISABLE_2FA,
            }
            
            if(this.isActiveSelectTransPaypal){  // rút Nội bộ
                

                let phi = getSetSys.feeRutPaypalNoiBo;
                let tongphi = amount + Number(phi);
                
                // kiểm tra số tiền gốc = số tiền nhập hay không
                if(this.getAmount < tongphi){
                    return this.$vs.notify({
                        text: 'Số dư không đủ.',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    });
                }
                
                AuthenticationService.withdrawalPaypalNoiBo(obj)
                .then((res) => {
                    let d = res.data

                    if(d.success == 3 || d.success == 4){
                        localStorage.removeItem('token')
                        this.$router.push('/login').catch(() => {})
                        return
                    }
                    
                    if(res.data.success){
                        return this.$vs.notify({
                            text: 'Rút tiền thành công.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success',
                            position:'top-right',
                        });
                    }else{
                        return this.$vs.notify({
                            text: 'Số dư không đủ.',
                            color:'danger',
                            position:'top-right',
                            iconPack: 'feather',
                            icon:'icon-x-circle'
                        });
                    }
                })

            }
            else
            { 

                let phi = getSetSys.feeRutPaypalAcc
                let tongphi = amount + phi
                
                // kiểm tra số tiền gốc = số tiền nhập hay không
                if(this.getAmount < tongphi){
                    return this.$vs.notify({
                        text: 'Số dư không đủ.',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    });
                }
                
                AuthenticationService.withdrawalPaypalAccount(obj)
                .then((res) => {
                    let d = res.data

                    if(d.success == 3 || d.success == 4){
                        localStorage.removeItem('token')
                        this.$router.push('/login').catch(() => {})
                        return
                    }
                    
                    if(res.data.success){
                        return this.$vs.notify({
                            text: 'Rút tiền thành công.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success',
                            position:'top-right',
                        });
                    }else{
                        return this.$vs.notify({
                            text: 'Số dư không đủ.',
                            color:'danger',
                            position:'top-right',
                            iconPack: 'feather',
                            icon:'icon-x-circle'
                        });
                    }
                })
            }
            
            
        },

        CopyAddress(){
            const thisIns = this;
            this.$copyText(this.textAddress).then(function() {
                thisIns.$vs.notify({
                    text: 'Đã sao chép',
                    color: 'success',
                    iconPack: 'feather',
                    position: 'top-right',
                    icon: 'icon-check-circle'
                })
            })
        },

        CheckPAY(val){

            if(!this.checkispay){

                this.checkispay = true;
                this.$vs.loading({
                    //background: this.backgroundLoading,
                    color: this.colorLoading,
                    container: "#button-with-loading",
                    scale: 0.45
                });
                let giay = 120;
                let countD = setInterval(() => {
                    this.ssDownSend = giay + 's'
                    if(giay == 0){
                        this.checkispay = false;
                        this.$vs.loading.close("#button-with-loading > .con-vs-loading")
                        this.ssDownSend = 'Kiểm tra'
                        clearInterval(countD)
                    }
                    giay--
                }, 1000);

                if(val == 'USDT'){
                    AuthenticationService.checkGiaoDich({is: true})
                    .then((res) => {
                        let d = res.data;
                        
                        
                        if(d.ok == 1){

                            this.checkispay = false;
                            this.$vs.loading.close("#button-with-loading > .con-vs-loading");
                            this.ssDownSend = 'Kiểm tra';
                            clearInterval(countD);

                            let mo = d.money ? d.money : 0;

                            getData.balance += mo;

                            return this.$vs.notify({
                                text: d.msg,
                                color: 'success',
                                iconPack: 'feather',
                                position: 'top-right',
                                icon: 'icon-check-circle'
                            })
                        }else{
                            return this.$vs.notify({
                                text: d.msg,
                                color: 'danger',
                                iconPack: 'feather',
                                position: 'top-right',
                                icon: 'icon-check-circle'
                            })
                        }
                    });
                    
                }
            }else{
                return this.$vs.notify({
                    text: 'Vui lòng đợi!',
                    color: 'warning',
                    iconPack: 'feather',
                    position: 'top-right',
                    icon: 'icon-check-circle'
                })
            }
           
        },

        Withdrawal(){
            if (!this.DISABLE_2FA) {
                if(!getData.c2fa){
                     return this.$vs.notify({
                        text:'Bạn phải bật 2FA để yêu cầu rút tiền',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'})
                }
            }

            // đây là số tiền nhập
            let amount = Number(this.amount)
            
            if(amount <= 0 || amount == ''){
                return this.$vs.notify({
                    text:'Giá trị không hợp lệ',
                    color:'danger',
                    position:'top-right',
                    iconPack: 'feather',
                    icon:'icon-x-circle'})
            }

            if(amount < getSetSys.minWithdrawalUSDT){
              return this.$vs.notify({
                      text: `Số tiền rút tối thiểu là $${getSetSys.minWithdrawalUSDT}.`,
                      color:'danger',
                      position:'top-right',
                      iconPack: 'feather',
                      icon:'icon-x-circle'
                  });
            }

            if (!this.DISABLE_2FA) {
                this.pop2FAokPay = true;
            }

            if (this.DISABLE_2FA) {
                // Bật 2FA thì mở lại cái này
                this.WithdrawalOKPay();
            }

        },

        WithdrawalOKPay(){
            if (getData.mkt === 1) return;
            if (!this.DISABLE_2FA) {
                if(!getData.c2fa){
                     return this.$vs.notify({
                        text:'Bạn phải bật 2FA để yêu cầu rút tiền',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'})
                }
    
                if (!this.code2FA.trim()) {
                    return this.$vs.notify({
                        text:'Bạn phải nhập 2FA để yêu cầu rút tiền',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'})
                }
            }
            
            // mặc định rút nội bộ

            let amount = Number(this.amount);

            let obj = {
                amS: amount,
                nick: getData.displayName,
                gc: this.noteRut,
                address: this.adddressWithDrawal,
                nw: '',
                code: this.code2FA,
                amR: amount * getSetSys.quotePriceVND, // Số tiền VNĐ nhập
                tenNganHang: this.tenNganHang,
                chiNhanhNganHang: this.chiNhanhNganHang,
                soTaiKhoan: this.soTaiKhoan,
                chuTaiKhoan: this.chuTaiKhoan,
                // bỏ qua 2fa
                f: this.DISABLE_2FA,
            }

            const getAmountFormat = this.parseLocaleNumber(this.getAmount);

            if (this.isVND) {
                // Rút tiền qua thẻ ngân hàng
                // kiểm tra số tiền gốc = số tiền nhập hay không
                if(getAmountFormat < amount){
                    return this.$vs.notify({
                        text: 'Số dư không đủ.',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    });
                }

                if (!this.tenNganHang || !this.chiNhanhNganHang || !this.soTaiKhoan || !this.chuTaiKhoan) {
                    return this.$vs.notify({
                        text: 'Bạn cần nhập đủ thông tin ngân hàng của mình.',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    });
                }

                obj.nw = 'vnd';

                AuthenticationService.withdrawalUsdtVND(obj)
                .then((res) => {
                    let d = res.data;

                    if(d.success == 3 || d.success == 4){
                        localStorage.removeItem('token')
                        this.$router.push('/login').catch(() => {})
                        return
                    }

                    // cập nhật lại tiền ví nếu thành công
                    this.balanceUSDT = this.formatPrice(getAmountFormat - amount, 2)
                    this.getAmount = this.balanceUSDT;

                    if(res.data.success == 1){

                        getData.balance -= amount;
                        getData.balanceUSDT -= amount;

                        return this.$vs.notify({
                            text: 'Rút tiền thành công.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success',
                            position:'top-right',
                        });
                    }else if(res.data.success === 10){
                        return this.$vs.notify({
                            text: 'Tài khoản chưa được xác minh.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'danger',
                            position:'top-right',
                        });
                    }else if(res.data.success === 2){
                        return this.$vs.notify({
                            text: 'Mã 2Fa không đúng.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'danger',
                            position:'top-right',
                        });
                    }else{
                        return this.$vs.notify({
                            text: 'Số dư không đủ.',
                            color:'danger',
                            position:'top-right',
                            iconPack: 'feather',
                            icon:'icon-x-circle'
                        });
                    }
                })

                return;
            }

            
            if(this.isActiveSelectTransNB){  // rút Nội bộ
                let phi = getSetSys.feeRutUSDTNoiBo;
                let tongphi = amount + Number(phi);
                
                // kiểm tra số tiền gốc = số tiền nhập hay không
                if(getAmountFormat < tongphi){
                    return this.$vs.notify({
                        text: 'Số dư không đủ.',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    });
                }

                obj.nw = 'nb';
                
                AuthenticationService.withdrawalUserNoiBo(obj)
                .then((res) => {
                    let d = res.data
                    

                    if(d.success == 3 || d.success == 4){
                        localStorage.removeItem('token')
                        return this.$router.push('/login').catch(() => {})
                    }

                    if(d.success == 5){
                        return this.$vs.notify({
                            text: 'Biệt danh không đúng hoặc không tồn tại.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'danger',
                            position:'top-right',
                        });
                    }

                    
                    if(d.success == 2){
                        return this.$vs.notify({
                            text: 'Mã 2FA không chính xác.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'danger',
                            position:'top-right',
                        });
                    }
                    
                    if(res.data.success == 1){
                        
                        getData.balance -= tongphi;
                        getData.balanceUSDT -= tongphi;

                        return this.$vs.notify({
                            text: 'Rút tiền thành công.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success',
                            position:'top-right',
                        });
                    }else if(res.data.success === 10){
                        return this.$vs.notify({
                            text: 'Tài khoản chưa được xác minh.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'danger',
                            position:'top-right',
                        });
                    }else{
                        return this.$vs.notify({
                            text: 'Không tìm thấy người nhận.',
                            color:'danger',
                            position:'top-right',
                            iconPack: 'feather',
                            icon:'icon-x-circle'
                        });
                    }
                })

            }else if(this.isActiveSelectTransBEP20){ // rút BEP20 (BSC)
            

                let phi = getSetSys.feeRutUSDTBEP20;
                let tongphi = amount + Number(phi);

        
                // kiểm tra số tiền gốc = số tiền nhập hay không

                if(getAmountFormat < tongphi){
                    return this.$vs.notify({
                        text: 'Số dư không đủ.',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    });
                }

                obj.nw = 'bep20';
                
                AuthenticationService.withdrawalUsdtBSC(obj)
                .then((res) => {
                    let d = res.data;

                    if(d.success == 3 || d.success == 4){
                        localStorage.removeItem('token')
                        this.$router.push('/login').catch(() => {})
                        return
                    }

                    // cập nhật lại tiền ví nếu thành công
                    this.balanceUSDT = this.formatPrice(Number(this.balanceUSDT) - tongphi, 2)
                    this.getAmount = this.balanceUSDT;

                    
                    
                    if(res.data.success == 1){

                        getData.balance -= tongphi;
                        getData.balanceUSDT -= tongphi;

                        return this.$vs.notify({
                            text: 'Rút tiền thành công.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success',
                            position:'top-right',
                        });
                    }else if(res.data.success === 10){
                        return this.$vs.notify({
                            text: 'Tài khoản chưa được xác minh.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'danger',
                            position:'top-right',
                        });
                    }else if(res.data.success === 2){
                        return this.$vs.notify({
                            text: 'Mã 2Fa không đúng.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'danger',
                            position:'top-right',
                        });
                    }else{
                        return this.$vs.notify({
                            text: 'Số dư không đủ.',
                            color:'danger',
                            position:'top-right',
                            iconPack: 'feather',
                            icon:'icon-x-circle'
                        });
                    }
                })
            }else if(this.isActiveSelectTransERC20){  // rút ERC 20
                
                let phi = getSetSys.feeRutUSDTERC20
                let tongphi = amount + Number(phi)
                
                // kiểm tra số tiền gốc = số tiền nhập hay không
                if(getAmountFormat < tongphi){
                    return this.$vs.notify({
                        text: 'Số dư không đủ.',
                        color:'danger',
                        position:'top-right',
                        iconPack: 'feather',
                        icon:'icon-x-circle'
                    });
                }

                obj.nw = 'erc20';
                
                AuthenticationService.withdrawalUsdtERC(obj)
                .then((res) => {
                    let d = res.data

                    if(d.success == 3 || d.success == 4){
                        localStorage.removeItem('token')
                        this.$router.push('/login').catch(() => {})
                        return
                    }

                    // cập nhật lại tiền ví nếu thành công
                    this.balanceUSDT = this.formatPrice(Number(this.balanceUSDT) - tongphi, 2)
                    this.getAmount = this.balanceUSDT

                    
                    
                    if(res.data.success){
                        getData.balance -= tongphi;
                        getData.balanceUSDT -= tongphi;

                        return this.$vs.notify({
                            text: 'Rút tiền thành công.',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success',
                            position:'top-right',
                        });
                    }else{
                        return this.$vs.notify({
                            text: 'Số dư không đủ.',
                            color:'danger',
                            position:'top-right',
                            iconPack: 'feather',
                            icon:'icon-x-circle'
                        });
                    }
                })
                
            }
            
        },
        selectTypePay(val){
            this.isLoading = true
            
            if (val === 'VND') {
                this.isVND = true;
                this.isLoading = false;
            } else {
                this.isVND = false;
                if(val !== 'PAYPAL'){
                    setTimeout(() => {
                        this.getAddressF(val)
                    }, 100)
                    this.isPaypal = false
                } else{
                    this.isPaypal = true
                    this.isLoading = false
                }
            }

            switch(val){
                case 'PAYPAL':
                    this.getAmount = this.balancePaypal
                    break;
                case 'USDT':
                case 'VND':
                    this.getAmount = this.balanceUSDT
                    break;
                case 'BTC':
                    this.getAmount = this.balanceBTC
                    break;
                case 'ETH':
                    this.getAmount = this.balanceETH
                    break;
                default:
                    this.getAmount = this.amountPaypal
            }

            this.textTypePay = val
        },

        getAddressF(coint){

            this.isLoading = true
            AuthenticationService.getAddressCoin(coint)
            .then((res) => {
                this.isLoading = false
                let d = res.data
                if(d.success == 3 || d.success == 4){
                    localStorage.removeItem('token')
                    this.$router.push('/login').catch(() => {})
                    return
                }
                this.textAddress = d.a

                var canvas = document.querySelector('canvas')

                QRCode.toCanvas(canvas, d.a, { 
                    margin: 1,
                    color: {
                        dark: '#fa2843',
                    }
                    }, function (error) {
                    if (error) console.error(error)
                        //console.log('success!');
                })
            })
        },

        getBalanceWallet(){
            AuthenticationService.getBalanceWallet()
            .then((res) => {
                let d = res.data
                if(d.success == 3 || d.success == 4){
                    localStorage.removeItem('token')
                    this.$router.push('/login').catch(() => {})
                    return
                }
                if(d.success){
                    let mU = d.data.usdt
                    let mE = d.data.eth
                    let mB = d.data.btc
                    let mP = d.data.paypal

                    this.balanceUSDT = this.formatPrice(mU, 2)
                    this.balanceETH = this.formatPrice(mE, 4)
                    this.balanceBTC = this.formatPrice(mB, 6)
                    this.balancePaypal = this.formatPrice(mP, 2)

                    // mặc định hiển thị tiền đầu vào
                    this.getAmount = this.balanceUSDT
                }
            })
        },
        parseLocaleNumber(stringNumber, locale = 'en-US') {
            var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
            var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');

            return parseFloat(stringNumber
                .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
                .replace(new RegExp('\\' + decimalSeparator), '.')
            );
        },

        formatPrice(value, minimum) {
            var formatter = new Intl.NumberFormat('en-US', {
                //style: 'currency',
                //currency: '',
                minimumFractionDigits: minimum
            });
            return formatter.format(value);
        },
    },
    mounted() {
        if (this.typePay) {
            console.log(this.typePay)
            this.selectTypePay(this.typePay)
        }
        this.connectionSetting = new WebSocket(SETTINGS.BASE_URL_SOCKET_SYS)
        this.connectionSetting.onmessage = function(event) {

            let data = JSON.parse(event.data)
            let dl = data.data

            if (dl) {
                getSetSys.isActiveWalletVND = dl.isActiveWalletVND
            }

        }
    },
    created() {
        
        // lấy số tiền mặc định của ví
        this.getAmount = this.amountPaypal

        // lấy mặc định coin USDT
        this.getAddressF('USDT')

        // lấy số tiền cái ví
        this.getBalanceWallet()


    },
}
</script>


<style scoped>


.boxSelectUnit.cbx .listUnits .itemSelectUnit .info {
    line-height: 30px;
    width: 100%;
}

.boxSelectUnit.cbx .listUnits .itemSelectUnit {
    height: 40px;
    padding: 5px;
}

.boxSelectUnit.cbx .listUnits .itemSelectUnit .info .amount .number {
    display: block;
    width: 100%;
}

.boxSelectUnit .listUnits .itemSelectUnit {
    padding: 10px 11px;
    height: 74px;
    color: #fff;
    border-bottom: 1px solid #142C37;
    width: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
}

.boxSelectUnit .listUnits .itemSelectUnit:hover {
    background-color: #313131;
}


.boxSelectUnit.cbx .listUnits {
    top: 40px;
}

.boxSelectUnit .listUnits {
    border: 1px solid #777777;
    background: transparent;
    border-top: none;
    display: none;
    position: absolute;
    top: 74px;
    left: 0px;
    width: 100%;
    z-index: 9;
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;
    background: #011122;
}

.boxSelectUnit.cbx.activeSelectItem .listUnits {
    display: block;
}

.deposit_widthdraw .depos{
    display: none;
}

.button {
    cursor: pointer;
    border: none;
    background: none;
    position: relative;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    font-weight: 700!important;
    text-decoration: none;
}

.deposit_widthdraw .listTab{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #6b6b6b;
    background: transparent;
}

.deposit_widthdraw .listTab .itemTab.active {
    font-weight: 700;
    position: relative;
}

.deposit_widthdraw .listTab .itemTab {
    width: 50%;
    height: 100%;
    text-align: center;
    background: transparent;
    font-size: 16px;
    line-height: 48px;
    font-weight: 400;
    cursor: pointer;
}

.deposit_widthdraw .listTab .itemTab.active:before {
    content: "";
    height: 4px;
    width: 160px;
    background: #fa2843;
    border-radius: 3px 3px 0 0;
    display: block;
    position: absolute;
    bottom: -1px;
    left: 50%;
    margin-left: -80px;
}

.deposit_widthdraw .listTab .itemTab.active span {
    color: #fff;
}

.deposit_widthdraw .boxModal .mainBoxModal {
    padding: 20px!important;
}

.deposit_widthdraw .combo .listBalance {
    margin: 0;
}

.deposit_widthdraw .deposit_widthdraw_box .form-control {
    color: #fff;
    border: 1px solid hsla(0,0%,100%,.23);
    border-radius: 8px;
    height: 46px!important;
    line-height: 46px!important;
    margin-bottom: 0!important;
    padding: 0 10px;
}

.transfer-network-item--bsc .transfer-network-item-fee {
    color: #fedd3c !important;
    text-transform: uppercase;
    font-weight: 700;
}


.boxSelectUnit {
    height: 40px;
    border-radius: 5px;
    position: relative;
}

.borderSecondary2 {
    border: 1px solid;
    border-color: #fa2843;
}

.boxAddress,
.transfer-network {
    overflow: hidden;
}

.address .greenButton {
    background: #34D1D6 !important;
}

.boxAddress .address button {
    width: 230px;
}

.address .buttonCommon {
    text-align: center;
    border-radius: 5px;
    color: #fff;
    height: 47px;
    padding: 11px 15px;
    line-height: 19px;
    font-weight: 700;
    font-weight: 16px;
    border: none;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    outline: none;
}

.boxAddress h4.colorSecondary2 {
    background: #111111;
    font-size: 12px;
    line-height: 14px;
    color: #778e9f;
    font-weight: 400;
    margin: 0;
    position: absolute;
    top: -6px;
    left: 30px;
    padding: 0 6px;
}

.boxAddress input {
    font-size: 14px;
    border: 1px solid #2f3342;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    line-height: 40px;
}

.boxAddress .form-group {
    margin-bottom: 20px;
}

.boxAddress .btn.sendMax, 
.boxAddress .paste {
    position: absolute;
    right: 14px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.boxAddress .btn.sendMax {
    top: 50%;
    color: #fff;
    background-color: #fa2843;
    padding: 7px 10px;
    border-radius: 5px;
}

.boxAddress .noted {
    color: #fff;
    display: block;
    font-style: italic;
    padding: 10px;
}

.boxQRCode {
    margin-bottom: 20px;
}

.transfer-network-item.is-active:before {
    content: "";
    display: block;
    width: 17px;
    height: 17px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAYxJREFUOE+N07tPwlAUBvDv2OJjITJqHLrqIsbZCAm7GuNo1EVHGBQY1QnQgdVJjIMDMSHxD7CLo0knVy+JcfUx8Sg95rbpg4Kld+y999fvnJ4SQksrswbLzAPIgChtbzMbIDJAfCcqCT18h4IPtFK/DpAEopaOrrIj6vTtHvIQrWS2AGxNAJxtmaynZl3IRmImCPu6qKpZ+ZDsHvDgPVaC0WYciYraoLgpkrPAw7GC5BywUR14ZYlaYk0iBkCrUUlcYGURuH1hXD5Z3nFRVYm0kslxgcdXxmnTB+x7xNkhpJCbwvICcNa08NsBggnGAj7ilyORfI7w9gmc3A9ws69AlvAvIJGukiKtaDZAOHBLut6bwu66P4ORAKMtaqpGWrmfAdNzsC8uFAk4Q3chaolzZ9iKfR1Em0FoKQV8fEW0nNFGT0nLqXWQAs9jxtQnfeoA+QNLyYgrMuzeuhs2NG22wolGssgErGy7wBDiYWXzEMyFkVTyMriBnloP/sFjkeCb7abL1VGN8MXguT+ofapXySW9rwAAAABJRU5ErkJggg==) 0 0 no-repeat;
    position: absolute;
    top: -5px;
    right: -5px;
}

.transfer-network-item-label {
    font-size: 12px;
    line-height: 13px;
    margin-bottom: 2px;
    font-weight: 700;
}

.transfer-network-item.is-active .transfer-network-item-label {
    color: #fff;
    font-weight: 700;
}

.transfer-network-warn {
    border-radius: 5px;
    background: rgba(240,185,11,.26);
    border: 1px solid #f0b90b;
    color: #f0b90b;
    padding: 10px 15px;
    font-size: 12px;
    line-height: 13px;
    margin-bottom: 20px;
}


.transfer-network-item {
    background: #d0c4b9;
    border: 1px solid #9f9085;
    border-radius: 6px;
    margin: 0 4px;
    padding: 9px 0;
    color: #4d3434;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    cursor: pointer;
    position: relative;
}

.deposit_widthdraw .transfer-network-item.is-active {
    background-color: #fa2843;
    border-color: #fa2843;
}

.deposit_widthdraw .transfer-network-item {
    background: #2f3342;
    border: 1px solid #2f3342;
    color: #7c7c7c;
}

.transfer-network-list--deposit {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
}

.transfer-network-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 0 -4px 15px;
}

.transfer-network-title {
    font-size: 12px;
    line-height: 1;
    margin-bottom: 15px;
}

.icon.USDT {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMjAiPgogIDxpbWFnZSBpZD0iXzgyNSIgZGF0YS1uYW1lPSI4MjUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FNQUFBQkVwSXJHQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTE5VRXhVUlV4cGNTYWdlaVdnZWdBQUFDYWdleVdnZWxXcXFpYWhleWFnZWxXcVZTV2ZlUUIvZjM5L2Z3Q3FWUzZrZndELy95dW5nU2VwZ1FDcXFpYWdlMUN2a1pIYXRpV2dlalNuaEQycmlDcWpmZ0QvQUM2cWd5K3FnMUN1a3k2b2d5K3FnMysvcjArcmp5V2llemFyaUNXaWZFMnhsQ3lrZmkrbGdDdWpmemVyaUN1bWdWZTFtVENuZ1Rhc2lEU3JoV084cGwyN216U25oQ3VtZ0dhL21UU25oQzZsZ0Mra2dDYWhlaTJrZ0N1amZpdWtmbTdIcGpXcmhpK3BnMDJ4a2k2bWdWZTJtUytsZ1RDbWdqZW5obEswbGkrbGdTV2hlbFd2a1RHcWhUQ3FoWm15c3ArL3Z6R3BoRFdsaERhb2hGQzFrelduaEN1bmdWbTRtWisvbnoydWl6MnhqaXVuZ1N5aWZUeXFpVGFvaEVtdWpGVzNsa0d5amtheWtqV3NpQzZvZ1RDbmdqV3FoaTJuZ2ordmppK25naWFoZS8vLy95V2hleW1pZlNPZ2Vkdnc2U2VoZkNhbGZpV2dlaWlpZkNlaGV5bXVoU2l0aENhcGdTbW9nU0tmZVRHbWdUU25neDJkZGlXaWZDZXBnU1dqZkNhamZCcWNkUDcvL2htYmN5U2dlc3ZvM3grZWR6R21ndS80OVNXaGVoYWFjZTc0OVJlYWNoNmRkdXYyOHlDZmVDK2xnU1dtZmlhcGdDYW5meVNoZWlhamZTYWtmU21wZ1NLZmVCZWJjak9uZzNEQnFDZWlmS25heTJLN29QMysvaWlpZlRpcGhrcXhrUnFiYzZ6YnpDeWtmeGFhY3UzNDlPcjI4b2pMdGtpd2tLSFd4b2pNdDludjZCdWNkRkcwbG4vSXNYSENxVHVxaUpIUHZNN3E0V3kvcFNHZmQ4am8zUk9aYiszMzlNcm8zMlc4b1dPOG9HRzduMTY2bllMSnMvRDU5dkw1OXkya2YvNy8vL1Q2K0h6SHNDbXVoRE9uZ3FyYXl5aXRnekNtZ2QveDdOenc2cXZiekwvajJmTDY5Mk83b0hQQ3FyL2oyQ2FnZXltaWZHL0JwNFRLdERlb2hST1liNGJMdFNTZ2VXSzduL3I5L0dpK28vdjkvWUhKc2hPWWNFT3RqQmliY3l1amZtcStwQ3VqZlVDc2lpMmxmeWFoZWhtY2MvajgrK24xOG5qRXJYZkVyTzczOWQveTdQYjcraUtnZU56djZuL0hzVVF3dEUwQUFBQmxkRkpPVXdEKyt3SDgvUVArK3dQN0FnSUQvZ0g2L2dQK013ZjZwbC9zQWV2b0p1cnJDQ1Q4aXZ3azc5YnVoK2N0MUpla0Z4U1krUlNhL2Z6OTArM3JGNkhMSWM4anpzK0pJdEg2TTgzTENnaktpWWNtaWZzb0NGOWY5KzFkcFNZblhTaVU2TkdVNTEzUktIWXZ3d0FBQXVsSlJFRlVPTXR0VS9WYlZFRVVuUzNlZ3NTcXBJQ0VvQklpaW9xQzNkM2ROY05iMkY1Z2lRMldFRnhRQkJXbEpFd2FwVlRDN3U3dXpyL0JlYkdyZkhKK21ybm5mSFB2ekp3REFJMStmUUFZdWpRa2VMQzkvZURna0dWREFlakRBLy9BRm9DZ0lZSHFSRW1DVkpvZ1NWUUhEZ21paTJaWWdka0RSTW84QVo5RFFFaHcrSUk4cFdpQU43RCt5M3ZPVktSeiswSUwrbkxUejQzenhBUU5hK0RvdnNPWmdOMUFURmQ1T1RKbjJBSi85eHdoL0EvQ0hLK0oxQndPZGs3VGR2VEFZNFZxZ3BPZEF6NWxuc0tHMmtkMUExV3hVU3pFTkcveElsOENrdnE3MGNlaUxUZ1dmVk5QUXNKUHRBYS94Z2dsRjBJeXN3WjF3NzFNRWtLdWNnUUFvVzY3OEFYSWl1ZDBYVmRVcEtNWER5dXdnRWgyQ3dPdWFnRnVWMXoxTk9WRVNrdkRFNFNlTmJUZ1pXTlZNUzRMOGwyQlMyOCtOVkNNd1dUTSt2amhJRUtWcE41b05CbmtWSlhmMndVTWtuRHdTaWJWR01WdjM3OXJScWo5WmVkcnNWRWpsZUV5UnpJYURFekFJOGkwNWRXbjJscFB2bW52NnVwb1BObmFkcXE2WElzVlJOSVlZQy9Gdk9iRzBjTjEyYVNwOHh0Q0hka21NcnZ1OEtIQ0xLeVFqcVFGWk1iVld5V0dWeGxOUDMrZE9mTTkvVVdtM2xCeTdVSUdTUXZvRmpDMllIL1prZnJUWDgvK3Jqbjc1WFQ5a2JMOUJic2gwNElaRXU3UnBwWStyajMwQTZGUFIyc0xTK08wZXlBN0pIdE5VaWJXSEdnNi9obWg1a2NQRG1qRU1wSzU1aXJnbWk5Z2YyL2ZIUmkvSGFGdDkyK1QrOWlTUUwwU2hORlBUVU11anFNRThiRXhadGNrcndnRllCajFXVDBMdU1waEFQQVdpSHdKaStDZ1RsZHBFUkIrdy8xNTJKaFRHTVBRZ2pTRXJsc0VOb3I1bU1hV202d1Nzb0pMVjlMU0xwOW5CVUxWSkc5c09kQUxUTzIva3pXbFBIWHYzbFE1YThtZC9jZGprckc5aDRxMXZSaUQ2ZStzOHBoaGpvNFY4Sm1saUJKU3dZbkJvSUlqakZMTTlURUhoenBqU2NCd1paS0FIMDVGTDV3dlNMcTRQR0RPMytoUmM0QjE2emZqOENibjVpYmo4RzdZdEJvdy9jMmc0aCs1WmV6V2lGR2pJamFPWFJ1SjQ5K1BZZjRBS2NwYTNSVHNiVzBBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L3N2Zz4K);
    background-repeat: no-repeat;
    background-position: center;
}

.icon.PAYPAL {
    background: url('~@/assets/images/sky/icon_bank/paypal-mini.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 20px;
}

.icon.VND {
    background: url('~@/assets/images/sky/icon_bank/vnd-mini.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 20px;
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

.icon {
    width: 30px;
    height: 20px;
    text-align: center;
    margin: 5px 4px;
}

.selectedUnit {
    padding: 5px 20px 5px 3px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    cursor: pointer;
}

.selectedUnit .number {
    color: #fff!important;
}

.transfer-network-item.is-active .transfer-network-item-fee {
    color: hsla(0,0%,100%,.5);
}

.transfer-network-item-fee {
    font-size: 12px;
    line-height: 13px;
}

.boxAddress .enable2fa {
    font-style: italic;
    display: block;
    clear: both;
    margin-bottom: 5px;
    color: #fa2843;
}

.address .buttonCommon {
    text-align: center;
    border-radius: 5px;
    color: #fff;
    height: 47px;
    padding: 11px 15px;
    line-height: 19px;
    font-weight: 700;
    font-weight: 16px;
    border: none;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    outline: none;
}

.boxAddress .address button {
    width: 230px;
}

.address .redButton {
    background: #fa2843 !important;
}

.qr-code-container canvas {
    width: 150px!important;
    height: 150px!important;
}

.scrollMobile {
    max-height: calc(100vh - 330px);
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
