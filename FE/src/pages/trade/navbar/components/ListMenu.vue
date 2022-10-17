<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Sky Soft
    Author URL: https://skysoft.pw
========================================================================================== -->

<template> 
  <div>
      <div id="leftSidebar" class="contentSidebar flex flex-col xl:hidden">
          <div class="topSidebar">
              <div class="logo py-4 h-20">
                  <feather-icon style="color: #fff;" icon="XIcon" svgClasses="w-12 h-12 mx-4 cursor-pointer" class="block text-center" @click="onCloseMenu()"/>
                  <router-link tag="div" class="vx-logo cursor-pointer" to="/">
                      <img class="img-logo" src="@/assets/images/logo/logo-new.png" alt="logo">
                  </router-link>
              </div>
              <div class="nav-item btn-nav-item-new">
                  <vs-button class="btn-link" @click="quickDeposit()">Nạp</vs-button>
              </div>
              <div class="text-section">
                  Kiếm tiền
              </div>
              <div class="nav-item btn-nav-item-new bg-primary">
                  <router-link to="/trading" class="nav-link cursor-pointer">
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="19.776" height="20.801" viewBox="0 0 19.776 20.801" class="non-active"><g id="bracket-arrow" transform="translate(0 21.189) rotate(-90)"><g id="Path_30752" data-name="Path 30752" transform="translate(2.447 0)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5,13.385l3.226-3.5L9.5,6.391V1.5l7.743,8.388L9.5,18.276Z" stroke="none"></path><path d="M 9.499995231628418 18.2755241394043 L 17.24255561828613 9.887763977050781 L 9.499995231628418 1.500003933906555 L 9.499995231628418 6.390714168548584 L 12.72606468200684 9.887763977050781 L 9.499995231628418 13.38481426239014 L 9.499995231628418 18.2755241394043 M 9.499653816223145 19.77558326721191 C 9.316328048706055 19.77558326721191 9.131294250488281 19.74194717407227 8.953784942626953 19.67254447937012 C 8.378564834594727 19.44763374328613 7.99999475479126 18.89314460754395 7.99999475479126 18.2755241394043 L 7.99999475479126 13.38481426239014 C 7.99999475479126 13.00788402557373 8.141904830932617 12.64477443695068 8.397475242614746 12.3677339553833 L 10.68527698516846 9.887763977050781 L 8.397475242614746 7.407793998718262 C 8.141904830932617 7.130753993988037 7.99999475479126 6.767643928527832 7.99999475479126 6.390714168548584 L 7.99999475479126 1.500003933906555 C 7.99999475479126 0.8823840022087097 8.378564834594727 0.3278939723968506 8.953784942626953 0.1029839739203453 C 9.131258964538574 0.03359496966004372 9.316363334655762 -5.543701263377443e-05 9.499653816223145 -5.543701263377443e-05 C 9.910433769226074 -5.543701263377443e-05 10.31252574920654 0.1687753796577454 10.60219478607178 0.4825839698314667 L 18.34475517272949 8.870344161987305 C 18.87515449523926 9.444933891296387 18.87515449523926 10.33059406280518 18.34475517272949 10.90518379211426 L 10.60219478607178 19.29294395446777 C 10.31255149841309 19.60672569274902 9.910395622253418 19.77558326721191 9.499653816223145 19.77558326721191 Z" stroke="none" fill="#fff" class="fill-color-1"></path></g><g id="Path_30753" data-name="Path 30753" transform="translate(1.389 1.685)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6.687,14.905.5,8.2,6.687,1.5V5.408L4.109,8.2,6.687,11Z" stroke="none"></path><path d="M 6.686956405639648 14.90506172180176 L 6.686956405639648 10.99697208404541 L 4.10905647277832 8.202531814575195 L 6.686956405639648 5.408092021942139 L 6.686956405639648 1.500001788139343 L 0.4999963045120239 8.202531814575195 L 6.686956405639648 14.90506172180176 M 6.687297821044922 16.40512084960938 C 6.276517391204834 16.40512084960938 5.874425888061523 16.23628997802734 5.584756374359131 15.92248153686523 L -0.6022037267684937 9.219951629638672 C -1.132603645324707 8.64536190032959 -1.132603645324707 7.759701728820801 -0.6022037267684937 7.185111999511719 L 5.584756374359131 0.4825818240642548 C 5.87440013885498 0.1688009202480316 6.276555061340332 -5.759948908234946e-05 6.687297821044922 -5.759948908234946e-05 C 6.870623588562012 -5.759948908234946e-05 7.055656909942627 0.03357908129692078 7.233166217803955 0.1029818132519722 C 7.808386325836182 0.3278918266296387 8.186956405639648 0.882381796836853 8.186956405639648 1.500001788139343 L 8.186956405639648 5.408092021942139 C 8.186956405639648 5.785021781921387 8.045045852661133 6.148131847381592 7.78947639465332 6.425171852111816 L 6.149843215942383 8.202531814575195 L 7.78947639465332 9.979891777038574 C 8.045045852661133 10.25693225860596 8.186956405639648 10.620041847229 8.186956405639648 10.99697208404541 L 8.186956405639648 14.90506172180176 C 8.186956405639648 15.52268218994141 7.808386325836182 16.07717132568359 7.233166217803955 16.30208206176758 C 7.055692195892334 16.3714714050293 6.870587825775146 16.40512084960938 6.687297821044922 16.40512084960938 Z" stroke="none" fill="#fff" class="fill-color-1"></path></g></g></svg></span>
                      <span class="textLink">{{ $t('Trade') || 'Trade' }}</span>
                  </router-link>
              </div>
              <!-- <div class=" nav-item">
                  <router-link to="/" class="nav-link cursor-pointer">
                      <span class="position-relative mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18.981" height="20.266" viewBox="0 0 18.981 20.266" class="non-active"><g id="trophy" transform="translate(-1.5 -0.5)"><path id="Path_31718" data-name="Path 31718" d="M5.211,6.78H4.569A2.569,2.569,0,0,1,2,4.211V1H5.211" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><path id="Path_31719" data-name="Path 31719" d="M25,6.78h.642a2.569,2.569,0,0,0,2.569-2.569V1H25" transform="translate(-8.23)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><line id="Line_1501" data-name="Line 1501" y1="4" transform="translate(11 12.571)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></line><path id="Path_31720" data-name="Path 31720" d="M12.78,13.2h0A5.78,5.78,0,0,1,7,7.422V1H18.559V7.422a5.78,5.78,0,0,1-5.78,5.78Z" transform="translate(-1.789)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><path id="Path_31721" data-name="Path 31721" d="M17.991,29.211H9A3.211,3.211,0,0,1,12.211,26H14.78A3.211,3.211,0,0,1,17.991,29.211Z" transform="translate(-2.505 -8.945)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path></g></svg>
                          <span class="iconLive pc"><span class="live"><svg xmlns="http://www.w3.org/2000/svg" width="24.441" height="11.052" viewBox="0 0 24.441 11.052"><g id="_1246264" data-name="1246264" transform="translate(8.061)"><path id="Path_34924" data-name="Path 34924" d="M.07,43.94c.02.667.767,1.2,1.682,1.2H22.823c.931,0,1.686-.55,1.686-1.228V35.449Zm0,0" transform="translate(-8.128 -34.089)" fill="#ff3051"></path><path id="Path_34925" data-name="Path 34925" d="M24.441,1.228C24.441.55,23.686,0,22.756,0H1.686C.755,0,0,.55,0,1.228v8.6c0,.009,0,.018,0,.027L24.441,1.36Zm0,0" transform="translate(-8.061)" fill="#ff4764"></path><g id="Group_21085" data-name="Group 21085" transform="translate(-1.217 2.985)"><path id="Path_34926" data-name="Path 34926" d="M59.16,76.383H56.7V72.274a.362.362,0,0,0-.7,0v4.383a.32.32,0,0,0,.351.274H59.16a.282.282,0,1,0,0-.548Zm0,0" transform="translate(-56 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34927" data-name="Path 34927" d="M331.16,72.548a.282.282,0,1,0,0-.548h-2.809a.32.32,0,0,0-.351.274v4.383a.32.32,0,0,0,.351.274h2.809a.282.282,0,1,0,0-.548H328.7V74.739h1.755a.282.282,0,1,0,0-.548H328.7V72.548Zm0,0" transform="translate(-316.063 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34928" data-name="Path 34928" d="M160.351,72a.32.32,0,0,0-.351.274v4.383a.362.362,0,0,0,.7,0V72.274A.32.32,0,0,0,160.351,72Zm0,0" transform="translate(-155.436 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34929" data-name="Path 34929" d="M204.326,72.007a.443.443,0,0,0-.269.007.315.315,0,0,0-.183.153L202.127,75.8l-1.45-3.622a.378.378,0,0,0-.441-.18c-.185.045-.288.2-.23.344l1.755,4.383a.35.35,0,0,0,.326.192h.01a.359.359,0,0,0,.329-.178l2.107-4.383a.219.219,0,0,0-.009-.21A.331.331,0,0,0,204.326,72.007Zm0,0" transform="translate(-193.67 -71.99)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path></g><circle id="Ellipse_2017" data-name="Ellipse 2017" cx="1.5" cy="1.5" r="1.5" transform="translate(-6.619 3.969)" fill="#fff" class="fill-color"></circle></g></svg></span></span>
                      </span>
                  <span class="textLink">{{ $t('Challenge') || 'Challenge' }}</span>
                  </router-link>
              </div> -->
              <div class=" nav-item btn-nav-item-new">    
                  <router-link to="/user/affiliate/general" class="nav-link cursor-pointer">
                      <span class=""><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="23" viewBox="0 0 21 23" class="non-active"><defs><clipPath id="aff-clip-path"><rect width="21" height="23" fill="none"></rect></clipPath></defs><g id="aff" clip-path="url(#aff-clip-path)"><g id="aff-2" data-name="aff" transform="translate(-0.1 0.5)"><line id="Line_1252" data-name="Line 1252" y1="3.29" x2="5.265" transform="translate(7.968 5.855)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" class="stroke-color"></line><line id="Line_1253" data-name="Line 1253" x2="5.265" y2="3.29" transform="translate(7.968 12.855)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" class="stroke-color"></line><circle id="Ellipse_1366" data-name="Ellipse 1366" cx="3.5" cy="3.5" r="3.5" transform="translate(13.1 0.5)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle><circle id="Ellipse_1367" data-name="Ellipse 1367" cx="3.5" cy="3.5" r="3.5" transform="translate(13.1 14.5)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle><circle id="Ellipse_1368" data-name="Ellipse 1368" cx="3.5" cy="3.5" r="3.5" transform="translate(1.1 7.5)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle></g></g></svg></span>
                      <span class="textLink">{{ $t('Vip') || 'Vip' }}</span>
                  </router-link>
              </div>
              <!-- <div class=" nav-item">    
                  <router-link to="/user/affiliate/championship" class="nav-link cursor-pointer">
                      <span class="mb-2 championship">
                          <svg class="non-active" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.2971 1.73219H20.2172C20.2284 1.39106 20.2346 1.04792 20.2346 0.70313C20.2346 0.314761 19.9196 0 19.5315 0H4.46872C4.08054 0 3.76559 0.314761 3.76559 0.70313C3.76559 1.04792 3.77182 1.39106 3.78299 1.73219H0.70313C0.314761 1.73219 0 2.04695 0 2.43532C0 5.58586 0.823432 8.55823 2.3185 10.8051C3.79635 13.0264 5.76494 14.3005 7.89154 14.4244C8.37366 14.949 8.88325 15.3768 9.41407 15.7031V18.8281H8.2345C6.80846 18.8281 5.64848 19.9883 5.64848 21.4142V22.5937H5.59849C5.21012 22.5937 4.89536 22.9087 4.89536 23.2969C4.89536 23.6852 5.21012 24 5.59849 24H18.4017C18.7901 24 19.1048 23.6852 19.1048 23.2969C19.1048 22.9087 18.7901 22.5937 18.4017 22.5937H18.3517V21.4142C18.3517 19.9883 17.1917 18.8281 15.7657 18.8281H14.5861V15.7031C15.1169 15.3769 15.6267 14.949 16.1088 14.4244C18.2352 14.3005 20.2038 13.0264 21.6819 10.8051C23.1769 8.55823 24.0002 5.58586 24.0002 2.43532C24.0002 2.04695 23.6854 1.73219 23.2971 1.73219ZM3.48928 10.0262C2.25606 8.17297 1.53151 5.74901 1.42109 3.13845H3.86154C4.11514 6.34758 4.86845 9.31391 6.04582 11.6685C6.23332 12.0435 6.42943 12.3978 6.63286 12.7314C5.46336 12.2898 4.38101 11.3665 3.48928 10.0262ZM16.9454 21.4142V22.5939H7.05474V21.4142C7.05474 20.7638 7.58392 20.2344 8.2345 20.2344H15.7657C16.4163 20.2344 16.9454 20.7638 16.9454 21.4142ZM13.1798 18.8281H10.8203V16.3141C11.2069 16.4159 11.6007 16.4688 12.0001 16.4688C12.3994 16.4688 12.7933 16.4159 13.1798 16.3141V18.8281ZM13.6153 14.6412C13.5836 14.6542 13.5532 14.67 13.5241 14.6874C13.0271 14.9346 12.5165 15.0626 12.0001 15.0626C11.4839 15.0626 10.9734 14.9346 10.4766 14.6877C10.4472 14.67 10.4166 14.6542 10.3845 14.6409C9.8332 14.3494 9.29981 13.9092 8.79536 13.3307C8.7688 13.2928 8.73896 13.2579 8.70582 13.226C8.20502 12.6314 7.73388 11.9001 7.30358 11.0395C6.0114 8.45533 5.26505 5.05741 5.18009 1.40626H18.8201C18.7349 5.05741 17.9886 8.45551 16.6966 11.0395C16.2663 11.9001 15.7952 12.6314 15.2946 13.226C15.2612 13.2579 15.231 13.293 15.2046 13.3309C14.7002 13.9095 14.1666 14.3495 13.6153 14.6412ZM20.5109 10.0262C19.6192 11.3665 18.5368 12.2898 17.3673 12.7314C17.5708 12.3978 17.7669 12.0435 17.9544 11.6685C19.1317 9.31391 19.8849 6.34758 20.1386 3.13845H22.5791C22.4687 5.74901 21.7441 8.17297 20.5109 10.0262Z" fill="white" class="fill-color" />
                          </svg>
  
  
                          <span class="icon-live">
                              <span data-v-c6d93ce8="" class="live"><svg data-v-c6d93ce8="" xmlns="http://www.w3.org/2000/svg" width="24.441" height="11.052" viewBox="0 0 24.441 11.052"><g data-v-c6d93ce8="" id="_1246264" data-name="1246264" transform="translate(8.061)"><path data-v-c6d93ce8="" id="Path_34924" data-name="Path 34924" d="M.07,43.94c.02.667.767,1.2,1.682,1.2H22.823c.931,0,1.686-.55,1.686-1.228V35.449Zm0,0" transform="translate(-8.128 -34.089)" fill="#ff3051"></path> <path data-v-c6d93ce8="" id="Path_34925" data-name="Path 34925" d="M24.441,1.228C24.441.55,23.686,0,22.756,0H1.686C.755,0,0,.55,0,1.228v8.6c0,.009,0,.018,0,.027L24.441,1.36Zm0,0" transform="translate(-8.061)" fill="#ff4764"></path> <g data-v-c6d93ce8="" id="Group_21085" data-name="Group 21085" transform="translate(-1.217 2.985)"><path data-v-c6d93ce8="" id="Path_34926" data-name="Path 34926" d="M59.16,76.383H56.7V72.274a.362.362,0,0,0-.7,0v4.383a.32.32,0,0,0,.351.274H59.16a.282.282,0,1,0,0-.548Zm0,0" transform="translate(-56 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2"></path> <path data-v-c6d93ce8="" id="Path_34927" data-name="Path 34927" d="M331.16,72.548a.282.282,0,1,0,0-.548h-2.809a.32.32,0,0,0-.351.274v4.383a.32.32,0,0,0,.351.274h2.809a.282.282,0,1,0,0-.548H328.7V74.739h1.755a.282.282,0,1,0,0-.548H328.7V72.548Zm0,0" transform="translate(-316.063 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2"></path> <path data-v-c6d93ce8="" id="Path_34928" data-name="Path 34928" d="M160.351,72a.32.32,0,0,0-.351.274v4.383a.362.362,0,0,0,.7,0V72.274A.32.32,0,0,0,160.351,72Zm0,0" transform="translate(-155.436 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2"></path> <path data-v-c6d93ce8="" id="Path_34929" data-name="Path 34929" d="M204.326,72.007a.443.443,0,0,0-.269.007.315.315,0,0,0-.183.153L202.127,75.8l-1.45-3.622a.378.378,0,0,0-.441-.18c-.185.045-.288.2-.23.344l1.755,4.383a.35.35,0,0,0,.326.192h.01a.359.359,0,0,0,.329-.178l2.107-4.383a.219.219,0,0,0-.009-.21A.331.331,0,0,0,204.326,72.007Zm0,0" transform="translate(-193.67 -71.99)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2"></path></g> <circle data-v-c6d93ce8="" id="Ellipse_2017" data-name="Ellipse 2017" cx="1.5" cy="1.5" r="1.5" transform="translate(-6.619 3.969)" fill="none"></circle></g></svg></span>
                          </span>
                      </span>
                      <span class="textLink">{{ $t('Championship') || 'Championship' }}</span>
                  </router-link>
              </div>
              <div class=" nav-item">    
                  <router-link to="/user/affiliate/lucky" class="nav-link cursor-pointer">
                      <span class="mb-2 championship">
                          <svg class="non-active" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.4867 8.54782L15.4407 0.501848C14.7713 -0.167587 13.7231 -0.166978 13.0542 0.501848L0.502728 13.0533C0.173378 13.3827 -0.00981313 13.835 0.000405819 14.2938C0.0100154 14.7384 0.192082 15.1487 0.51351 15.4508L2.2272 17.1645C2.52402 17.4619 2.99357 17.4964 3.33085 17.2471C4.31491 16.5202 5.68453 16.615 6.51705 17.4684C7.36991 18.3422 7.47369 19.7149 6.75818 20.6617C6.50289 20.9995 6.53571 21.4733 6.83506 21.7726L8.55948 23.4971C8.88035 23.8177 9.31737 24 9.76401 24C9.77587 24 9.78805 23.9997 9.79991 23.9994C10.2446 23.9898 10.6548 23.808 10.957 23.4863L23.4974 10.945C23.8268 10.6159 24.0097 10.1639 23.9998 9.70486C23.9901 9.26019 23.8084 8.85003 23.4867 8.54782ZM14.2648 1.69226C14.2608 1.69451 14.2543 1.69564 14.2489 1.69676L13.6541 1.102L14.2648 1.69226ZM9.75299 22.2917L8.50604 21.0448C9.26675 19.5027 8.9838 17.5676 7.7309 16.2837C6.48227 15.0053 4.53762 14.7158 2.95739 15.4961L1.70819 14.2471L14.2478 1.70782L22.2923 9.75234L9.75299 22.2917Z" class="fill-color" fill="white"/>
                              <path d="M11.2599 3.39125L10.0532 4.58252L12.2296 6.78711L13.4363 5.59584L11.2599 3.39125Z" class="fill-color" fill="white"/>
                              <path d="M18.4347 10.5902L17.2432 11.7974L19.4484 13.9741L20.6399 12.767L18.4347 10.5902Z" class="fill-color" fill="white"/>
                              <path d="M14.8466 6.97668L13.6475 8.17578L15.8522 10.3805L17.0513 9.18142L14.8466 6.97668Z" class="fill-color" fill="white"/>
                          </svg>
  
                      </span>
                      <span class="textLink">{{ $t('DrawLuckyLots') || 'DrawLuckyLots' }}</span>
                  </router-link>
              </div> -->
              
  
              <div class="text-section mt-12">
                  Quản lý hồ sơ
              </div>
  
              <div class=" nav-item btn-nav-item-new">
                  <router-link to="/user/profile" class="nav-link cursor-pointer">
                      <span class="mb-2"><img data-v-b33baeb4="" width="22" height="23" viewbox="0 0 22 23" fill="none" src="~@/assets/images/sky/avatar-default.7edfdd52.svg"></span>
                  <span class="textLink">{{ user.nick_name }}</span>
                  </router-link>
              </div>
              <!--<div class=" nav-item">
                  <router-link to="/user/exchange" class="nav-link cursor-pointer">
                      <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18.904" height="15.292" viewBox="0 0 18.904 15.292" class="non-active"><g id="shuffle" transform="translate(0 -18.343)"><path id="Path_30758" data-name="Path 30758" d="M6.468,42.882l.876,1.751.881-1.761-.347-.695A3.917,3.917,0,0,0,4.354,40H0v1.575H4.354a2.35,2.35,0,0,1,2.114,1.306Z" transform="translate(0 -19.524)" fill="#fff" class="fill-color"></path> <path id="Path_30759" data-name="Path 30759" d="M99.678,105.869l-1.114,1.114L99.582,108h-3.24a2.35,2.35,0,0,1-2.114-1.306l-.876-1.751-.881,1.761.347.695a3.917,3.917,0,0,0,3.523,2.177h3.24L98.564,110.6l1.114,1.114,2.363-2.363a.788.788,0,0,0,0-1.114Z" transform="translate(-83.367 -78.074)" fill="#fff" class="fill-color"></path> <path id="Path_30760" data-name="Path 30760" d="M18.674,20.706l-2.363-2.363L15.2,19.457l1.018,1.018h-3.24a3.917,3.917,0,0,0-3.523,2.177L6.468,28.621a2.35,2.35,0,0,1-2.114,1.306H0V31.5H4.354a3.917,3.917,0,0,0,3.523-2.177l2.984-5.969a2.35,2.35,0,0,1,2.114-1.306h3.24L15.2,23.069l1.114,1.114,2.363-2.363a.788.788,0,0,0,0-1.114Z" transform="translate(0)" fill="#fff" class="fill-color"></path><path id="Path_30762" data-name="Path 30762" d="M8.9,0a1.484,1.484,0,1,0,0,2.968A5.936,5.936,0,1,1,2.968,8.9,1.484,1.484,0,1,0,0,8.9,8.9,8.9,0,1,0,8.9,0Z" fill="#fff" class="fill-color"></path></g></svg>
                      </span>
                      <span class="textLink">{{ $t('Exchange') || 'Exchange' }}</span>
                  </router-link>
              </div> -->
              <div class=" nav-item btn-nav-item-new">
                  <router-link to="/user/trade/history" class="nav-link cursor-pointer">
                  <span class="mb-2"><svg id="speedometer" xmlns="http://www.w3.org/2000/svg" width="17.809" height="17.809" viewBox="0 0 17.809 17.809" class="non-active"><path id="Path_30761" data-name="Path 30761" d="M9.995,9.995a2.226,2.226,0,0,0,0-3.149C9.125,5.978,1,1,1,1S5.978,9.125,6.846,9.995A2.226,2.226,0,0,0,9.995,9.995Z" transform="translate(0.484 0.484)" fill="#fff" class="fill-color"></path><path id="Path_30762" data-name="Path 30762" d="M8.9,0a1.484,1.484,0,1,0,0,2.968A5.936,5.936,0,1,1,2.968,8.9,1.484,1.484,0,1,0,0,8.9,8.9,8.9,0,1,0,8.9,0Z" fill="#fff" class="fill-color"></path></svg></span>
                      <span class="textLink">{{ $t('Dashboard') || 'Dashboard' }}</span>
                  </router-link>
              </div>
  
              <div class=" nav-item btn-nav-item-new">
                  <a href.prevent @click.stop="viewHisOrder()" class="nav-link cursor-pointer">
                      <span class="mb-2"><svg data-v-15b74760="" xmlns="http://www.w3.org/2000/svg" width="22.633" height="21.223" viewBox="0 0 22.633 21.223"><g data-v-15b74760="" id="transfer" transform="translate(-25.599 -35.35) rotate(-30)"><g data-v-15b74760="" id="Group_13372" data-name="Group 13372" transform="translate(0 51.198)"><path data-v-15b74760="" id="Path_30757" data-name="Path 30757" d="M17.79,55.881,13.3,51.386a.642.642,0,0,0-1.1.454v1.926H7.7a.642.642,0,0,0,0,1.284h5.137a.642.642,0,0,0,.642-.642V53.39l2.945,2.945L13.484,59.28V58.261a.642.642,0,0,0-.642-.642H5.778V55.693a.642.642,0,0,0-1.1-.454L.188,59.734a.642.642,0,0,0,0,.908l4.495,4.495a.642.642,0,0,0,.454.188.634.634,0,0,0,.246-.049.642.642,0,0,0,.4-.593V62.756h4.495a.642.642,0,1,0,0-1.284H5.136a.642.642,0,0,0-.642.642v1.018L1.55,60.187l2.945-2.945v1.018a.642.642,0,0,0,.642.642H12.2V60.83a.642.642,0,0,0,1.1.454l4.495-4.495A.642.642,0,0,0,17.79,55.881Z" transform="translate(0 -51.198)" fill="#ffffff" class="fill-color"></path></g></g></svg></span>
                      <span class="textLink">{{ $t('Command') || 'Command' }}</span>
                  </a>
              </div>
  
              <div class=" nav-item btn-nav-item-new">
                  <router-link to="/user/balance" class="nav-link cursor-pointer">
                      <span class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="19.815" height="16.846" viewBox="0 0 19.815 16.846" class="non-active iconWallet"><g id="_000000ff" data-name="#000000ff" transform="translate(-42.663 -106.619)"><path id="Path_30756" data-name="Path 30756" d="M45.072,106.675a3.344,3.344,0,0,1,.674-.054H58.933a5.487,5.487,0,0,1,1.171.061,2.972,2.972,0,0,1,2.374,2.926q0,5.458,0,10.916a2.985,2.985,0,0,1-2.939,2.94H46.391a5.837,5.837,0,0,1-1.532-.1,3,3,0,0,1-2.11-2.16,3.184,3.184,0,0,1-.085-.815q0-5.389,0-10.777a2.946,2.946,0,0,1,.652-1.866,2.985,2.985,0,0,1,1.756-1.066m-.426,2.89q0,5.454,0,10.908a1,1,0,0,0,1.007,1.008H59.49a1,1,0,0,0,1-.96c0-.671.008-1.343,0-2.014-1.494,0-2.988,0-4.482,0a3.467,3.467,0,0,1,.048-6.934H60.5q0-1,0-2.01a.99.99,0,0,0-.957-.961q-6.944,0-13.887,0a1,1,0,0,0-1,.963m9.934,5.193a1.5,1.5,0,0,0,.825,1.627,2.538,2.538,0,0,0,1.159.143c1.311,0,2.622,0,3.933,0,0-.99,0-1.98,0-2.97-1.5,0-2.994,0-4.491,0A1.492,1.492,0,0,0,54.58,114.758Z" fill="#fff" class="fill-color"></path></g></svg></span>
                  <span class="textLink">Ví</span>
                  </router-link>
              </div>
  
               <div class="text-section mt-12">
                  Cài đặt và trợ giúp
              </div>
  
  
              <div class="nav-item btn-nav-item-new">
                  <a href.prevent @click="onClickSetup()" class="nav-link cursor-pointer">
                  <span class="mb-2">
                      <svg data-v-15b74760="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g data-v-15b74760="" id="gear" transform="translate(-2.004 -1.995)"><path data-v-15b74760="" id="Path_30727" data-name="Path 30727" d="M18.111,9.362,16.772,9.25a6.245,6.245,0,0,0-.814-1.96l.871-1.03a1.28,1.28,0,0,0-1.8-1.8L14,5.326a6.234,6.234,0,0,0-1.963-.816L11.92,3.17a1.28,1.28,0,0,0-2.552,0L9.256,4.51a6.245,6.245,0,0,0-1.96.814l-1.03-.868a1.28,1.28,0,0,0-1.8,1.8l.871,1.029a6.239,6.239,0,0,0-.816,1.961l-1.341.112a1.281,1.281,0,0,0,0,2.552l1.341.112a6.238,6.238,0,0,0,.814,1.96l-.871,1.03a1.28,1.28,0,0,0,1.8,1.8L7.3,15.95a6.239,6.239,0,0,0,1.961.816l.112,1.341a1.281,1.281,0,0,0,2.552,0l.112-1.341a6.238,6.238,0,0,0,1.96-.814l1.03.871a1.28,1.28,0,0,0,1.8-1.8l-.871-1.029a6.233,6.233,0,0,0,.816-1.961l1.341-.112a1.281,1.281,0,0,0,0-2.552Zm-7.467,4.445a3.168,3.168,0,1,1,3.168-3.168A3.168,3.168,0,0,1,10.644,13.806Z" fill="#ffffff" class="fill-color"></path></g></svg></span>
                      <span class="textLink">{{ $t('Settings') || 'Settings' }}</span>
                  </a>
              </div>
              <!-- <div class="nav-item btn-nav-item-new">
                  <a href.prevent @click.stop="viewHoSo()" class="nav-link cursor-pointer">
                  <span class="mb-2">
                      <feather-icon style="color: #fff;" icon="UserIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
                  </span>
                      <span class="textLink">{{ $t('Profile') || 'Profile' }}</span>
                  </a>
              </div> -->
  
          </div>
          <div class="bottomSidebar btn-nav-item-new hidden lg:block">
              <div class=" nav-item">
                  <a href.prevent @click="logOut()" class="nav-link cursor-pointer">
                  <span class="mb-2"><feather-icon style="color: #fff;" icon="LogOutIcon" svgClasses="w-5 h-5" class="block text-center h-5"/></span>
                      <span class="textLink">{{ $t('Logout') || 'Logout' }}</span>
                  </a>
              </div>
          </div>
  
          <vs-popup class="setting popup-setting" title="Cài Đặt" :active.sync="popupActiveCaiDat">
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
              <div class="bottomSidebar btn-nav-item-new block lg:hidden">
                  <div class="nav-item">
                      <a href.prevent @click="logOut()" class="nav-link cursor-pointer items-center">
                      <span class="mr-0"><feather-icon style="color: #fff;" icon="LogOutIcon" svgClasses="w-5 h-5" class="block text-center h-5"/></span>
                          <span class="textLink">{{ $t('Logout') || 'Logout' }}</span>
                      </a>
                  </div>
              </div>
              </div>
          </vs-popup>
  
          <ho-so-user-info :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
          <!-- <his-order-bet :isSidebarActive="addSidebarHisOrder" @closeSidebar="toggleDataSidebarHisOrder"/> -->
  
      </div>
      <div class="hidden xl:flex">
          <div id="leftSidebar" class="contentSidebar flex flex-col">
          <div class="topSidebar topSidebarDesktop">
              <div class=" nav-item">
                  <router-link to="/trading" class="nav-link cursor-pointer">
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="19.776" height="20.801" viewBox="0 0 19.776 20.801" class="non-active"><g id="bracket-arrow" transform="translate(0 21.189) rotate(-90)"><g id="Path_30752" data-name="Path 30752" transform="translate(2.447 0)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5,13.385l3.226-3.5L9.5,6.391V1.5l7.743,8.388L9.5,18.276Z" stroke="none"></path><path d="M 9.499995231628418 18.2755241394043 L 17.24255561828613 9.887763977050781 L 9.499995231628418 1.500003933906555 L 9.499995231628418 6.390714168548584 L 12.72606468200684 9.887763977050781 L 9.499995231628418 13.38481426239014 L 9.499995231628418 18.2755241394043 M 9.499653816223145 19.77558326721191 C 9.316328048706055 19.77558326721191 9.131294250488281 19.74194717407227 8.953784942626953 19.67254447937012 C 8.378564834594727 19.44763374328613 7.99999475479126 18.89314460754395 7.99999475479126 18.2755241394043 L 7.99999475479126 13.38481426239014 C 7.99999475479126 13.00788402557373 8.141904830932617 12.64477443695068 8.397475242614746 12.3677339553833 L 10.68527698516846 9.887763977050781 L 8.397475242614746 7.407793998718262 C 8.141904830932617 7.130753993988037 7.99999475479126 6.767643928527832 7.99999475479126 6.390714168548584 L 7.99999475479126 1.500003933906555 C 7.99999475479126 0.8823840022087097 8.378564834594727 0.3278939723968506 8.953784942626953 0.1029839739203453 C 9.131258964538574 0.03359496966004372 9.316363334655762 -5.543701263377443e-05 9.499653816223145 -5.543701263377443e-05 C 9.910433769226074 -5.543701263377443e-05 10.31252574920654 0.1687753796577454 10.60219478607178 0.4825839698314667 L 18.34475517272949 8.870344161987305 C 18.87515449523926 9.444933891296387 18.87515449523926 10.33059406280518 18.34475517272949 10.90518379211426 L 10.60219478607178 19.29294395446777 C 10.31255149841309 19.60672569274902 9.910395622253418 19.77558326721191 9.499653816223145 19.77558326721191 Z" stroke="none" fill="#fff" class="fill-color"></path></g><g id="Path_30753" data-name="Path 30753" transform="translate(1.389 1.685)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6.687,14.905.5,8.2,6.687,1.5V5.408L4.109,8.2,6.687,11Z" stroke="none"></path><path d="M 6.686956405639648 14.90506172180176 L 6.686956405639648 10.99697208404541 L 4.10905647277832 8.202531814575195 L 6.686956405639648 5.408092021942139 L 6.686956405639648 1.500001788139343 L 0.4999963045120239 8.202531814575195 L 6.686956405639648 14.90506172180176 M 6.687297821044922 16.40512084960938 C 6.276517391204834 16.40512084960938 5.874425888061523 16.23628997802734 5.584756374359131 15.92248153686523 L -0.6022037267684937 9.219951629638672 C -1.132603645324707 8.64536190032959 -1.132603645324707 7.759701728820801 -0.6022037267684937 7.185111999511719 L 5.584756374359131 0.4825818240642548 C 5.87440013885498 0.1688009202480316 6.276555061340332 -5.759948908234946e-05 6.687297821044922 -5.759948908234946e-05 C 6.870623588562012 -5.759948908234946e-05 7.055656909942627 0.03357908129692078 7.233166217803955 0.1029818132519722 C 7.808386325836182 0.3278918266296387 8.186956405639648 0.882381796836853 8.186956405639648 1.500001788139343 L 8.186956405639648 5.408092021942139 C 8.186956405639648 5.785021781921387 8.045045852661133 6.148131847381592 7.78947639465332 6.425171852111816 L 6.149843215942383 8.202531814575195 L 7.78947639465332 9.979891777038574 C 8.045045852661133 10.25693225860596 8.186956405639648 10.620041847229 8.186956405639648 10.99697208404541 L 8.186956405639648 14.90506172180176 C 8.186956405639648 15.52268218994141 7.808386325836182 16.07717132568359 7.233166217803955 16.30208206176758 C 7.055692195892334 16.3714714050293 6.870587825775146 16.40512084960938 6.687297821044922 16.40512084960938 Z" stroke="none" fill="#fff" class="fill-color"></path></g></g></svg></span>
                      <span class="textLink">{{ $t('Trade') || 'Trade' }}</span>
                  </router-link>
              </div>
              <!-- <div class=" nav-item">
                  <router-link to="/" class="nav-link cursor-pointer">
                      <span class="position-relative mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18.981" height="20.266" viewBox="0 0 18.981 20.266" class="non-active"><g id="trophy" transform="translate(-1.5 -0.5)"><path id="Path_31718" data-name="Path 31718" d="M5.211,6.78H4.569A2.569,2.569,0,0,1,2,4.211V1H5.211" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><path id="Path_31719" data-name="Path 31719" d="M25,6.78h.642a2.569,2.569,0,0,0,2.569-2.569V1H25" transform="translate(-8.23)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><line id="Line_1501" data-name="Line 1501" y1="4" transform="translate(11 12.571)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></line><path id="Path_31720" data-name="Path 31720" d="M12.78,13.2h0A5.78,5.78,0,0,1,7,7.422V1H18.559V7.422a5.78,5.78,0,0,1-5.78,5.78Z" transform="translate(-1.789)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path><path id="Path_31721" data-name="Path 31721" d="M17.991,29.211H9A3.211,3.211,0,0,1,12.211,26H14.78A3.211,3.211,0,0,1,17.991,29.211Z" transform="translate(-2.505 -8.945)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1" class="stroke-color"></path></g></svg>
                          <span class="iconLive pc"><span class="live"><svg xmlns="http://www.w3.org/2000/svg" width="24.441" height="11.052" viewBox="0 0 24.441 11.052"><g id="_1246264" data-name="1246264" transform="translate(8.061)"><path id="Path_34924" data-name="Path 34924" d="M.07,43.94c.02.667.767,1.2,1.682,1.2H22.823c.931,0,1.686-.55,1.686-1.228V35.449Zm0,0" transform="translate(-8.128 -34.089)" fill="#ff3051"></path><path id="Path_34925" data-name="Path 34925" d="M24.441,1.228C24.441.55,23.686,0,22.756,0H1.686C.755,0,0,.55,0,1.228v8.6c0,.009,0,.018,0,.027L24.441,1.36Zm0,0" transform="translate(-8.061)" fill="#ff4764"></path><g id="Group_21085" data-name="Group 21085" transform="translate(-1.217 2.985)"><path id="Path_34926" data-name="Path 34926" d="M59.16,76.383H56.7V72.274a.362.362,0,0,0-.7,0v4.383a.32.32,0,0,0,.351.274H59.16a.282.282,0,1,0,0-.548Zm0,0" transform="translate(-56 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34927" data-name="Path 34927" d="M331.16,72.548a.282.282,0,1,0,0-.548h-2.809a.32.32,0,0,0-.351.274v4.383a.32.32,0,0,0,.351.274h2.809a.282.282,0,1,0,0-.548H328.7V74.739h1.755a.282.282,0,1,0,0-.548H328.7V72.548Zm0,0" transform="translate(-316.063 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34928" data-name="Path 34928" d="M160.351,72a.32.32,0,0,0-.351.274v4.383a.362.362,0,0,0,.7,0V72.274A.32.32,0,0,0,160.351,72Zm0,0" transform="translate(-155.436 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path><path id="Path_34929" data-name="Path 34929" d="M204.326,72.007a.443.443,0,0,0-.269.007.315.315,0,0,0-.183.153L202.127,75.8l-1.45-3.622a.378.378,0,0,0-.441-.18c-.185.045-.288.2-.23.344l1.755,4.383a.35.35,0,0,0,.326.192h.01a.359.359,0,0,0,.329-.178l2.107-4.383a.219.219,0,0,0-.009-.21A.331.331,0,0,0,204.326,72.007Zm0,0" transform="translate(-193.67 -71.99)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2" class="stroke-color"></path></g><circle id="Ellipse_2017" data-name="Ellipse 2017" cx="1.5" cy="1.5" r="1.5" transform="translate(-6.619 3.969)" fill="#fff" class="fill-color"></circle></g></svg></span></span>
                      </span>
                  <span class="textLink">{{ $t('Challenge') || 'Challenge' }}</span>
                  </router-link>
              </div> -->
              <div class=" nav-item">    
                  <router-link to="/user/affiliate/general" class="nav-link cursor-pointer">
                      <span class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="23" viewBox="0 0 21 23" class="non-active"><defs><clipPath id="aff-clip-path"><rect width="21" height="23" fill="none"></rect></clipPath></defs><g id="aff" clip-path="url(#aff-clip-path)"><g id="aff-2" data-name="aff" transform="translate(-0.1 0.5)"><line id="Line_1252" data-name="Line 1252" y1="3.29" x2="5.265" transform="translate(7.968 5.855)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" class="stroke-color"></line><line id="Line_1253" data-name="Line 1253" x2="5.265" y2="3.29" transform="translate(7.968 12.855)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" class="stroke-color"></line><circle id="Ellipse_1366" data-name="Ellipse 1366" cx="3.5" cy="3.5" r="3.5" transform="translate(13.1 0.5)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle><circle id="Ellipse_1367" data-name="Ellipse 1367" cx="3.5" cy="3.5" r="3.5" transform="translate(13.1 14.5)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle><circle id="Ellipse_1368" data-name="Ellipse 1368" cx="3.5" cy="3.5" r="3.5" transform="translate(1.1 7.5)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none" class="stroke-color"></circle></g></g></svg></span>
                      <span class="textLink">{{ $t('Vip') || 'Vip' }}</span>
                  </router-link>
              </div>
              <!-- <div class=" nav-item">    
                  <router-link to="/user/affiliate/championship" class="nav-link cursor-pointer">
                      <span class="mb-2 championship">
                          <svg class="non-active" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.2971 1.73219H20.2172C20.2284 1.39106 20.2346 1.04792 20.2346 0.70313C20.2346 0.314761 19.9196 0 19.5315 0H4.46872C4.08054 0 3.76559 0.314761 3.76559 0.70313C3.76559 1.04792 3.77182 1.39106 3.78299 1.73219H0.70313C0.314761 1.73219 0 2.04695 0 2.43532C0 5.58586 0.823432 8.55823 2.3185 10.8051C3.79635 13.0264 5.76494 14.3005 7.89154 14.4244C8.37366 14.949 8.88325 15.3768 9.41407 15.7031V18.8281H8.2345C6.80846 18.8281 5.64848 19.9883 5.64848 21.4142V22.5937H5.59849C5.21012 22.5937 4.89536 22.9087 4.89536 23.2969C4.89536 23.6852 5.21012 24 5.59849 24H18.4017C18.7901 24 19.1048 23.6852 19.1048 23.2969C19.1048 22.9087 18.7901 22.5937 18.4017 22.5937H18.3517V21.4142C18.3517 19.9883 17.1917 18.8281 15.7657 18.8281H14.5861V15.7031C15.1169 15.3769 15.6267 14.949 16.1088 14.4244C18.2352 14.3005 20.2038 13.0264 21.6819 10.8051C23.1769 8.55823 24.0002 5.58586 24.0002 2.43532C24.0002 2.04695 23.6854 1.73219 23.2971 1.73219ZM3.48928 10.0262C2.25606 8.17297 1.53151 5.74901 1.42109 3.13845H3.86154C4.11514 6.34758 4.86845 9.31391 6.04582 11.6685C6.23332 12.0435 6.42943 12.3978 6.63286 12.7314C5.46336 12.2898 4.38101 11.3665 3.48928 10.0262ZM16.9454 21.4142V22.5939H7.05474V21.4142C7.05474 20.7638 7.58392 20.2344 8.2345 20.2344H15.7657C16.4163 20.2344 16.9454 20.7638 16.9454 21.4142ZM13.1798 18.8281H10.8203V16.3141C11.2069 16.4159 11.6007 16.4688 12.0001 16.4688C12.3994 16.4688 12.7933 16.4159 13.1798 16.3141V18.8281ZM13.6153 14.6412C13.5836 14.6542 13.5532 14.67 13.5241 14.6874C13.0271 14.9346 12.5165 15.0626 12.0001 15.0626C11.4839 15.0626 10.9734 14.9346 10.4766 14.6877C10.4472 14.67 10.4166 14.6542 10.3845 14.6409C9.8332 14.3494 9.29981 13.9092 8.79536 13.3307C8.7688 13.2928 8.73896 13.2579 8.70582 13.226C8.20502 12.6314 7.73388 11.9001 7.30358 11.0395C6.0114 8.45533 5.26505 5.05741 5.18009 1.40626H18.8201C18.7349 5.05741 17.9886 8.45551 16.6966 11.0395C16.2663 11.9001 15.7952 12.6314 15.2946 13.226C15.2612 13.2579 15.231 13.293 15.2046 13.3309C14.7002 13.9095 14.1666 14.3495 13.6153 14.6412ZM20.5109 10.0262C19.6192 11.3665 18.5368 12.2898 17.3673 12.7314C17.5708 12.3978 17.7669 12.0435 17.9544 11.6685C19.1317 9.31391 19.8849 6.34758 20.1386 3.13845H22.5791C22.4687 5.74901 21.7441 8.17297 20.5109 10.0262Z" fill="white" class="fill-color" />
                          </svg>
  
  
                          <span class="icon-live">
                              <span data-v-c6d93ce8="" class="live"><svg data-v-c6d93ce8="" xmlns="http://www.w3.org/2000/svg" width="24.441" height="11.052" viewBox="0 0 24.441 11.052"><g data-v-c6d93ce8="" id="_1246264" data-name="1246264" transform="translate(8.061)"><path data-v-c6d93ce8="" id="Path_34924" data-name="Path 34924" d="M.07,43.94c.02.667.767,1.2,1.682,1.2H22.823c.931,0,1.686-.55,1.686-1.228V35.449Zm0,0" transform="translate(-8.128 -34.089)" fill="#ff3051"></path> <path data-v-c6d93ce8="" id="Path_34925" data-name="Path 34925" d="M24.441,1.228C24.441.55,23.686,0,22.756,0H1.686C.755,0,0,.55,0,1.228v8.6c0,.009,0,.018,0,.027L24.441,1.36Zm0,0" transform="translate(-8.061)" fill="#ff4764"></path> <g data-v-c6d93ce8="" id="Group_21085" data-name="Group 21085" transform="translate(-1.217 2.985)"><path data-v-c6d93ce8="" id="Path_34926" data-name="Path 34926" d="M59.16,76.383H56.7V72.274a.362.362,0,0,0-.7,0v4.383a.32.32,0,0,0,.351.274H59.16a.282.282,0,1,0,0-.548Zm0,0" transform="translate(-56 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2"></path> <path data-v-c6d93ce8="" id="Path_34927" data-name="Path 34927" d="M331.16,72.548a.282.282,0,1,0,0-.548h-2.809a.32.32,0,0,0-.351.274v4.383a.32.32,0,0,0,.351.274h2.809a.282.282,0,1,0,0-.548H328.7V74.739h1.755a.282.282,0,1,0,0-.548H328.7V72.548Zm0,0" transform="translate(-316.063 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2"></path> <path data-v-c6d93ce8="" id="Path_34928" data-name="Path 34928" d="M160.351,72a.32.32,0,0,0-.351.274v4.383a.362.362,0,0,0,.7,0V72.274A.32.32,0,0,0,160.351,72Zm0,0" transform="translate(-155.436 -72)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2"></path> <path data-v-c6d93ce8="" id="Path_34929" data-name="Path 34929" d="M204.326,72.007a.443.443,0,0,0-.269.007.315.315,0,0,0-.183.153L202.127,75.8l-1.45-3.622a.378.378,0,0,0-.441-.18c-.185.045-.288.2-.23.344l1.755,4.383a.35.35,0,0,0,.326.192h.01a.359.359,0,0,0,.329-.178l2.107-4.383a.219.219,0,0,0-.009-.21A.331.331,0,0,0,204.326,72.007Zm0,0" transform="translate(-193.67 -71.99)" fill="#f1f2f2" stroke="#fff" stroke-width="0.2"></path></g> <circle data-v-c6d93ce8="" id="Ellipse_2017" data-name="Ellipse 2017" cx="1.5" cy="1.5" r="1.5" transform="translate(-6.619 3.969)" fill="none"></circle></g></svg></span>
                          </span>
                      </span>
                      <span class="textLink">{{ $t('Championship') || 'Championship' }}</span>
                  </router-link>
              </div>
              <div class=" nav-item">    
                  <router-link to="/user/affiliate/lucky" class="nav-link cursor-pointer">
                      <span class="mb-2 championship">
                          <svg class="non-active" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.4867 8.54782L15.4407 0.501848C14.7713 -0.167587 13.7231 -0.166978 13.0542 0.501848L0.502728 13.0533C0.173378 13.3827 -0.00981313 13.835 0.000405819 14.2938C0.0100154 14.7384 0.192082 15.1487 0.51351 15.4508L2.2272 17.1645C2.52402 17.4619 2.99357 17.4964 3.33085 17.2471C4.31491 16.5202 5.68453 16.615 6.51705 17.4684C7.36991 18.3422 7.47369 19.7149 6.75818 20.6617C6.50289 20.9995 6.53571 21.4733 6.83506 21.7726L8.55948 23.4971C8.88035 23.8177 9.31737 24 9.76401 24C9.77587 24 9.78805 23.9997 9.79991 23.9994C10.2446 23.9898 10.6548 23.808 10.957 23.4863L23.4974 10.945C23.8268 10.6159 24.0097 10.1639 23.9998 9.70486C23.9901 9.26019 23.8084 8.85003 23.4867 8.54782ZM14.2648 1.69226C14.2608 1.69451 14.2543 1.69564 14.2489 1.69676L13.6541 1.102L14.2648 1.69226ZM9.75299 22.2917L8.50604 21.0448C9.26675 19.5027 8.9838 17.5676 7.7309 16.2837C6.48227 15.0053 4.53762 14.7158 2.95739 15.4961L1.70819 14.2471L14.2478 1.70782L22.2923 9.75234L9.75299 22.2917Z" class="fill-color" fill="white"/>
                              <path d="M11.2599 3.39125L10.0532 4.58252L12.2296 6.78711L13.4363 5.59584L11.2599 3.39125Z" class="fill-color" fill="white"/>
                              <path d="M18.4347 10.5902L17.2432 11.7974L19.4484 13.9741L20.6399 12.767L18.4347 10.5902Z" class="fill-color" fill="white"/>
                              <path d="M14.8466 6.97668L13.6475 8.17578L15.8522 10.3805L17.0513 9.18142L14.8466 6.97668Z" class="fill-color" fill="white"/>
                          </svg>
  
                      </span>
                      <span class="textLink">{{ $t('DrawLuckyLots') || 'DrawLuckyLots' }}</span>
                  </router-link>
              </div> -->
              <div class=" nav-item">
                  <!-- <router-link to="/token-airdrop" class="nav-link new cursor-pointer"> -->
                      <!-- <a href="#" class="nav-link new cursor-pointer">
                          <span class="mb-2">
                                 <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.5879 7.04299C12.3396 7.04362 12.0932 7.00063 11.8599 6.91599C11.4727 6.76014 11.1318 6.50807 10.8693 6.18363C10.6068 5.85919 10.4315 5.47313 10.3599 5.06199C10.1956 4.23927 10.2671 3.38691 10.5659 2.60299C10.8422 1.80944 11.3372 1.1102 11.9939 0.585986C12.3123 0.317197 12.694 0.133999 13.1029 0.0536887C13.5118 -0.026622 13.9344 -0.00139584 14.3309 0.126986C15.7469 0.641986 16.3129 2.53699 15.6199 4.43999C15.3448 5.23257 14.8516 5.93138 14.1969 6.45599C13.7395 6.82297 13.1741 7.02924 12.5879 7.04299V7.04299ZM13.5989 2.06599C13.468 2.08494 13.3456 2.14197 13.2469 2.22999C12.9072 2.51556 12.6529 2.88925 12.5119 3.30999C12.3495 3.72303 12.3042 4.17285 12.3809 4.60999C12.4359 4.85499 12.5299 4.96199 12.5669 4.97599C12.6039 4.98999 12.7449 4.96799 12.9449 4.81599C13.2845 4.53042 13.5389 4.15672 13.6799 3.73599C14.0209 2.79799 13.7709 2.12399 13.6249 2.07099C13.6166 2.06962 13.6082 2.06962 13.5999 2.07099L13.5989 2.06599Z" fill="#FF993A"/>
                                  <path d="M15.6198 4.43999C15.3448 5.23258 14.8515 5.93139 14.1968 6.456C13.7393 6.82255 13.1739 7.02846 12.5878 7.042C12.3396 7.04263 12.0932 6.99964 11.8598 6.915C11.4736 6.75847 11.1337 6.50609 10.8721 6.1817C10.6105 5.85731 10.4359 5.4716 10.3648 5.061C10.2621 4.58169 10.2465 4.08782 10.3188 3.60299C10.8407 3.88592 11.4252 4.03342 12.0188 4.032C12.1315 4.032 12.2428 4.02666 12.3528 4.016C12.3319 4.21369 12.342 4.41343 12.3828 4.608C12.4378 4.853 12.5318 4.96 12.5688 4.973C12.6058 4.986 12.7468 4.96499 12.9468 4.81199C13.286 4.52623 13.54 4.15257 13.6808 3.73199C13.6978 3.68499 13.7128 3.64 13.7268 3.595C14.1848 3.34504 14.5824 2.99775 14.8916 2.57757C15.2009 2.1574 15.4143 1.67454 15.5168 1.16299C15.7645 1.67095 15.9017 2.22562 15.9195 2.79046C15.9372 3.3553 15.8351 3.91749 15.6198 4.43999Z" fill="#F97C15"/>
                                  <path d="M7.75103 6.46298C7.09588 5.93756 6.60258 5.23766 6.32803 4.44398C5.63503 2.54398 6.20203 0.643983 7.61703 0.130983C8.01347 0.00260197 8.43609 -0.0226242 8.84499 0.0576865C9.2539 0.137997 9.63558 0.321195 9.95402 0.589983C10.6087 1.11459 11.102 1.8134 11.377 2.60598C11.6759 3.3899 11.7473 4.24227 11.583 5.06498C11.5114 5.47612 11.3361 5.86219 11.0736 6.18663C10.8111 6.51107 10.4702 6.76314 10.083 6.91898C9.84968 7.00363 9.60325 7.04662 9.35502 7.04598C8.76891 7.03253 8.20351 6.82661 7.74602 6.45998L7.75103 6.46298ZM8.32403 2.07498C8.17903 2.12798 7.92402 2.80298 8.26902 3.73998C8.41005 4.16072 8.66438 4.53441 9.00402 4.81998C9.20402 4.97198 9.34403 4.99398 9.38203 4.97998C9.42003 4.96598 9.51302 4.85998 9.56802 4.61398C9.64473 4.17685 9.59941 3.72702 9.43702 3.31398C9.29598 2.89325 9.04166 2.51955 8.70202 2.23398C8.60332 2.14597 8.48091 2.08893 8.35003 2.06998C8.34175 2.06864 8.3333 2.06864 8.32502 2.06998L8.32403 2.07498Z" fill="#FFAF40"/>
                                  <path d="M10.6539 1.29297C10.4514 1.03073 10.2162 0.795486 9.95393 0.592974C9.63549 0.324185 9.2538 0.140988 8.84489 0.0606772C8.43599 -0.0196335 8.01337 0.00559269 7.61693 0.133974C7.1065 0.363237 6.67991 0.74542 6.39615 1.22768C6.11238 1.70993 5.98546 2.26844 6.03293 2.82597C6.03398 2.98326 6.07138 3.13816 6.14223 3.27859C6.21307 3.41902 6.31544 3.54116 6.44131 3.63547C6.56719 3.72977 6.71315 3.7937 6.86783 3.82223C7.0225 3.85077 7.18169 3.84315 7.33293 3.79997L7.35294 3.79397C7.5669 3.73305 7.75526 3.60422 7.88963 3.42692C8.02401 3.24962 8.09711 3.03344 8.09793 2.81097C8.09793 2.38197 8.23292 2.11097 8.32292 2.07497C8.3312 2.07361 8.33965 2.07361 8.34793 2.07497C8.47881 2.09392 8.60123 2.15096 8.69994 2.23897C8.82089 2.33324 8.92941 2.44244 9.02293 2.56397C9.15967 2.73717 9.34897 2.86124 9.56233 2.91751C9.7757 2.97379 10.0016 2.95921 10.2059 2.87597L10.2249 2.86797C10.3716 2.80921 10.5026 2.71724 10.6077 2.59929C10.7129 2.48135 10.7892 2.34063 10.8308 2.18821C10.8724 2.03578 10.878 1.87579 10.8473 1.72081C10.8166 1.56582 10.7504 1.42006 10.6539 1.29497V1.29297Z" fill="#FFC751"/>
                                  <path d="M6.09399 2.13999C6.05371 2.36442 6.03331 2.59197 6.033 2.81999C6.03164 2.97727 6.06689 3.13271 6.13596 3.27402C6.20504 3.41533 6.30604 3.53863 6.43098 3.63418C6.55592 3.72973 6.70137 3.7949 6.85584 3.82455C7.01031 3.85419 7.16956 3.8475 7.32099 3.80499L7.352 3.79599C7.56615 3.73524 7.75472 3.6065 7.88929 3.42918C8.02386 3.25186 8.0971 3.03559 8.09798 2.81299C8.0985 2.71755 8.1062 2.62228 8.12099 2.52799C8.16431 2.27331 8.11118 2.01162 7.97199 1.79399L7.96099 1.77599C7.85009 1.60381 7.69011 1.46885 7.50172 1.38853C7.31332 1.30821 7.10517 1.28622 6.90415 1.32541C6.70314 1.3646 6.5185 1.46317 6.37408 1.60838C6.22965 1.75359 6.13209 1.93876 6.09399 2.13999V2.13999Z" fill="#FFE059"/>
                                  <path d="M20.218 22.901H1.38297C1.20157 22.901 1.02759 22.8289 0.899315 22.7006C0.77104 22.5724 0.698975 22.3984 0.698975 22.217V6.05698H20.902V22.217C20.902 22.3984 20.8299 22.5724 20.7016 22.7006C20.5734 22.8289 20.3994 22.901 20.218 22.901V22.901Z" fill="#12ADB5"/>
                                  <path d="M0.694092 6.05698H20.9021V9.99799H0.694092V6.05698Z" fill="#0D8BA0"/>
                                  <path d="M20.9021 6.05698V22.217C20.9021 22.3984 20.83 22.5724 20.7018 22.7006C20.5735 22.8289 20.3995 22.901 20.2181 22.901H1.37809C1.19668 22.901 1.02271 22.8289 0.89443 22.7006C0.766155 22.5724 0.694092 22.3984 0.694092 22.217V19.237C2.72288 20.5897 5.1178 21.2875 7.55565 21.2362C9.99351 21.1849 12.357 20.387 14.3271 18.9502C16.2972 17.5134 17.7791 15.5068 18.5729 13.2012C19.3667 10.8957 19.4341 8.40208 18.7661 6.05698H20.9021Z" fill="#0D8BA0"/>
                                  <path d="M20.914 8.835H0.684C0.502592 8.835 0.328613 8.76293 0.200338 8.63466C0.0720635 8.50638 0 8.33241 0 8.151V5.287C0 5.10559 0.0720635 4.93161 0.200338 4.80334C0.328613 4.67506 0.502592 4.603 0.684 4.603H20.914C21.0954 4.603 21.2694 4.67506 21.3977 4.80334C21.5259 4.93161 21.598 5.10559 21.598 5.287V8.151C21.598 8.33241 21.5259 8.50638 21.3977 8.63466C21.2694 8.76293 21.0954 8.835 20.914 8.835V8.835Z" fill="#3CD3D3"/>
                                  <path d="M15.5149 4.60199H4.00788C3.72808 4.60199 3.45973 4.71314 3.26188 4.911C3.06403 5.10885 2.95288 5.37719 2.95288 5.65699C2.95288 5.93679 3.06403 6.20514 3.26188 6.40299C3.45973 6.60084 3.72808 6.71199 4.00788 6.71199H15.5149C15.7947 6.71199 16.063 6.60084 16.2609 6.40299C16.4587 6.20514 16.5699 5.93679 16.5699 5.65699C16.5699 5.37719 16.4587 5.10885 16.2609 4.911C16.063 4.71314 15.7947 4.60199 15.5149 4.60199V4.60199Z" fill="#57EAE6"/>
                                  <path d="M6.95292 4.60199H5.47492C5.19512 4.60199 4.92677 4.71314 4.72892 4.911C4.53107 5.10885 4.41992 5.37719 4.41992 5.65699C4.41992 5.93679 4.53107 6.20514 4.72892 6.40299C4.92677 6.60084 5.19512 6.71199 5.47492 6.71199H6.95292C7.23272 6.71199 7.50106 6.60084 7.69891 6.40299C7.89676 6.20514 8.00792 5.93679 8.00792 5.65699C8.00792 5.37719 7.89676 5.10885 7.69891 4.911C7.50106 4.71314 7.23272 4.60199 6.95292 4.60199V4.60199Z" fill="#A5F9F3"/>
                                  <path d="M8.62695 6.05698H12.97V22.902H8.62695V6.05698Z" fill="#FFAF40"/>
                                  <path d="M8.62695 6.05698H12.973V9.99799H8.62996L8.62695 6.05698Z" fill="#FF993A"/>
                                  <path d="M8.50903 4.60199H13.088V8.83499H8.50903V4.60199Z" fill="#FFC751"/>
                                  <path d="M10.8052 17.91V12.392C10.8052 12.1032 10.6905 11.8262 10.4862 11.6219C10.282 11.4177 10.005 11.303 9.7162 11.303C9.42738 11.303 9.15039 11.4177 8.94617 11.6219C8.74194 11.8262 8.6272 12.1032 8.6272 12.392V17.91C8.6272 18.1988 8.74194 18.4758 8.94617 18.68C9.15039 18.8842 9.42738 18.999 9.7162 18.999C10.005 18.999 10.282 18.8842 10.4862 18.68C10.6905 18.4758 10.8052 18.1988 10.8052 17.91Z" fill="#FFC751"/>
                                  <path d="M10.8052 15.642V13.765C10.8052 13.4762 10.6905 13.1992 10.4862 12.995C10.282 12.7907 10.005 12.676 9.7162 12.676C9.42738 12.676 9.15039 12.7907 8.94617 12.995C8.74194 13.1992 8.6272 13.4762 8.6272 13.765V15.641C8.6272 15.9298 8.74194 16.2068 8.94617 16.411C9.15039 16.6153 9.42738 16.73 9.7162 16.73C10.005 16.73 10.282 16.6153 10.4862 16.411C10.6905 16.2068 10.8052 15.9298 10.8052 15.641V15.642Z" fill="#FFE059"/>
                                  <path d="M2.87209 15.271V12.053C2.87209 11.7642 2.75736 11.4872 2.55313 11.283C2.3489 11.0787 2.07191 10.964 1.78309 10.964C1.49427 10.964 1.21728 11.0787 1.01305 11.283C0.808825 11.4872 0.694092 11.7642 0.694092 12.053V15.271C0.694092 15.5598 0.808825 15.8368 1.01305 16.041C1.21728 16.2453 1.49427 16.36 1.78309 16.36C2.07191 16.36 2.3489 16.2453 2.55313 16.041C2.75736 15.8368 2.87209 15.5598 2.87209 15.271V15.271Z" fill="#3CD3D3"/>
                                  <path d="M2.87209 13.517V13.037C2.87209 12.7482 2.75736 12.4712 2.55313 12.2669C2.3489 12.0627 2.07191 11.948 1.78309 11.948C1.49427 11.948 1.21728 12.0627 1.01305 12.2669C0.808825 12.4712 0.694092 12.7482 0.694092 13.037V13.517C0.694092 13.8058 0.808825 14.0828 1.01305 14.287C1.21728 14.4912 1.49427 14.606 1.78309 14.606C2.07191 14.606 2.3489 14.4912 2.55313 14.287C2.75736 14.0828 2.87209 13.8058 2.87209 13.517V13.517Z" fill="#57EAE6"/>
                                  <path d="M8.50903 4.603H13.088V6.719H8.50903V4.603Z" fill="#FFE059"/>
                                  <path d="M12.97 19.81V22.902H8.62695V21.166C10.1487 20.9994 11.6237 20.5388 12.97 19.81Z" fill="#FF993A"/>
                                  <path d="M20.9031 13.011V22.217C20.9031 22.3984 20.831 22.5724 20.7028 22.7007C20.5745 22.8289 20.4005 22.901 20.2191 22.901H13.5061C18.0921 21.686 20.2511 17.801 20.9031 13.011Z" fill="#02718C"/>
                              </svg> -->
                              <!-- <img width="22" height="23" viewBox="0 0 22 23" fill="none" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABHNCSVQICAgIfAhkiAAABThJREFUWEfNWV1sVEUU/qZrIVHU+OA/qTyYaPRBkEToLqi8aI0o7KqtMSG2PGiNlQc1sVXUCBLARBMEo8SkrfFBuzTbFSGgL1Rll5YH6IMm+JMIqECERIk/UVp2/M5ub3N3d+7O/TPhJJtd6Jwz3/3mnG/OzFWIaMmMvkEBaYa5GRotUPzIt5jCcf4+Xv4GjmhgpJhTx6JMybmCW3Klnq8UOgjkAXrfGjDCNxy/U5eQLebVREBfThnAFq3QtyQSWEfWMgQcyLd2Gq2hGWB4Elh7cER95xeGr0lTy3WLbsYGQnyMDk1+g/sapzFF5P1qCq8VdqoTNh8rYC7/PYSY5cDLbcGi/J35fRYltDNNPm8UpyHg1rR+uklhCwMkooAJ4HuewLtYmB96+XgCTmX0Vjr1BJgstqEE/Xoxh1coM/xZbUbAqbTuZr6+GxuCEIFYlE8UR9T7VsCtK3RSJTDKJ2kOMU9sLqR2sgQsG8upgjtoFcOLMnruRcAhDrgyysxL7wDIECaouH/+HSUSTk8Bt4/n1M9OlCrA3LX28j/ujTLFxhcAASz2/Y/AM8zEKKD53J+xCNvqAC9eqe9ONGFfFLCrO4DV7dUR+rNA/1CUqMD5ElMjr0YlygzDZLfAfyTDhp5zMbDjPeDSS6oj/PEXdeo54NTpsJHpp7G/MKKWzgBOpvWj3Go/ihASa7qA9uXmCF+OAy++ESU6UCohfSCv8mWGye7H/MEFDWfXsESHyW4jk1w+LG1PWNP4gCx3qoULdfPsFpwhw5eFjbV1HbDA0rNJAXY9H3aGclqcIODrVdRiE0UQZfBjG7YBeyKVNVoV83cT2fU5ZT0sSQVJCT8mBfhId3iZo7ZvVlG01yRjNuDZXcDbA7ZR5r+LJiv2DRMUt9uChvCSMVnyLf0VFr0e6GGyHFLmxiUlTjElrg4K+CX2cfctq/YSEALGbaaCPPQ1sObVoDNK3eGYMPwPGZ4dxP3GecDgm/UeJunykrxQMqfxr+Tw70FPEybWvjoI9G02P7ZpUzn5KwvwqSA0lRk+KwwfIcM3+XX1kjEnL4V96SfmcIvesRuQB5F8H95e+XabFJ8UoW/T+FZyeJQ5fJcfJ5lwgKlw7VXVo50GR5Zf/u7uJ5yll3yXvHdbUJmjrH0hKeF7WzZVvRRa57MVVXC3lg4wd4FJ3ssKuC2IzDElhhQPmr08aG60MWxiT3yc3Uu2Zsltk9nGdLKb++GoDQEbII0+Vb7FacJh23CTjEkzI0su1mgTEW0W0GK2VWiEg7dFC5xu7Sf+mNto8F4evGuLxs2MtJaiBiZzF5es1OBb9bGWPGShzGl+ZBiVYpBK8Xgjl9qewc2a42diT1ahb1N1/1C7GpL/batsa4zthZzqrjDso4GXYtm2vsKM5FvPy+GbGJnT0XIBK1u5rYurauCnWQ7VU1h5iWEA1aHIg2hKQs2c6agWbVSLPTHEjz2E8RA6nRq+N5HYUXkE9Dzmy/i4LlJiexiNM6VJzD+wS/3ixKy7W1uc0SleAO+7EK6qiOFOKsOYm4AL9zKwcu06WLtaja5b5eD+ZGzLGyCQnN14c9lrcml8oZ3R8opggJ9ZAeYLPZQFdk6VsKqQV7zgMpv9lUFat3LQMAXwutBI/DhqnKR8pcc+Ubwn8jYrYHFdcr++ojQLawm6J262hVWmwDuJc1i/f7f6zfZsvgA7QXjpMm+6Fe2I47UXCchyy+3lzeRRG1BPWfPjON2SysXqg/wEf7Go8SlZHfrfXyyaHsbvq1suffkNaNRXt/8BaLzprLxEFdcAAAAASUVORK5CYII=" >
                              </img>
                          </span>
                          <span class="textLink">{{ $t('Alita Center') }}</span>
                      </a>  -->
                  <!-- </router-link> -->
              </div>
              <div class=" nav-item">
                  <router-link to="/user/balance" class="nav-link cursor-pointer">
                      <span class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="19.815" height="16.846" viewBox="0 0 19.815 16.846" class="non-active iconWallet"><g id="_000000ff" data-name="#000000ff" transform="translate(-42.663 -106.619)"><path id="Path_30756" data-name="Path 30756" d="M45.072,106.675a3.344,3.344,0,0,1,.674-.054H58.933a5.487,5.487,0,0,1,1.171.061,2.972,2.972,0,0,1,2.374,2.926q0,5.458,0,10.916a2.985,2.985,0,0,1-2.939,2.94H46.391a5.837,5.837,0,0,1-1.532-.1,3,3,0,0,1-2.11-2.16,3.184,3.184,0,0,1-.085-.815q0-5.389,0-10.777a2.946,2.946,0,0,1,.652-1.866,2.985,2.985,0,0,1,1.756-1.066m-.426,2.89q0,5.454,0,10.908a1,1,0,0,0,1.007,1.008H59.49a1,1,0,0,0,1-.96c0-.671.008-1.343,0-2.014-1.494,0-2.988,0-4.482,0a3.467,3.467,0,0,1,.048-6.934H60.5q0-1,0-2.01a.99.99,0,0,0-.957-.961q-6.944,0-13.887,0a1,1,0,0,0-1,.963m9.934,5.193a1.5,1.5,0,0,0,.825,1.627,2.538,2.538,0,0,0,1.159.143c1.311,0,2.622,0,3.933,0,0-.99,0-1.98,0-2.97-1.5,0-2.994,0-4.491,0A1.492,1.492,0,0,0,54.58,114.758Z" fill="#fff" class="fill-color"></path></g></svg></span>
                  <span class="textLink">{{ $t('Wallet') || 'Wallet' }}</span>
                  </router-link>
              </div>
              <!--<div class=" nav-item">
                  <router-link to="/user/exchange" class="nav-link cursor-pointer">
                      <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18.904" height="15.292" viewBox="0 0 18.904 15.292" class="non-active"><g id="shuffle" transform="translate(0 -18.343)"><path id="Path_30758" data-name="Path 30758" d="M6.468,42.882l.876,1.751.881-1.761-.347-.695A3.917,3.917,0,0,0,4.354,40H0v1.575H4.354a2.35,2.35,0,0,1,2.114,1.306Z" transform="translate(0 -19.524)" fill="#fff" class="fill-color"></path> <path id="Path_30759" data-name="Path 30759" d="M99.678,105.869l-1.114,1.114L99.582,108h-3.24a2.35,2.35,0,0,1-2.114-1.306l-.876-1.751-.881,1.761.347.695a3.917,3.917,0,0,0,3.523,2.177h3.24L98.564,110.6l1.114,1.114,2.363-2.363a.788.788,0,0,0,0-1.114Z" transform="translate(-83.367 -78.074)" fill="#fff" class="fill-color"></path> <path id="Path_30760" data-name="Path 30760" d="M18.674,20.706l-2.363-2.363L15.2,19.457l1.018,1.018h-3.24a3.917,3.917,0,0,0-3.523,2.177L6.468,28.621a2.35,2.35,0,0,1-2.114,1.306H0V31.5H4.354a3.917,3.917,0,0,0,3.523-2.177l2.984-5.969a2.35,2.35,0,0,1,2.114-1.306h3.24L15.2,23.069l1.114,1.114,2.363-2.363a.788.788,0,0,0,0-1.114Z" transform="translate(0)" fill="#fff" class="fill-color"></path><path id="Path_30762" data-name="Path 30762" d="M8.9,0a1.484,1.484,0,1,0,0,2.968A5.936,5.936,0,1,1,2.968,8.9,1.484,1.484,0,1,0,0,8.9,8.9,8.9,0,1,0,8.9,0Z" fill="#fff" class="fill-color"></path></g></svg>
                      </span>
                      <span class="textLink">{{ $t('Exchange') || 'Exchange' }}</span>
                  </router-link>
              </div> -->
              <div class=" nav-item">
                  <router-link to="/user/trade/history" class="nav-link cursor-pointer">
                  <span class="mb-2"><svg id="speedometer" xmlns="http://www.w3.org/2000/svg" width="17.809" height="17.809" viewBox="0 0 17.809 17.809" class="non-active"><path id="Path_30761" data-name="Path 30761" d="M9.995,9.995a2.226,2.226,0,0,0,0-3.149C9.125,5.978,1,1,1,1S5.978,9.125,6.846,9.995A2.226,2.226,0,0,0,9.995,9.995Z" transform="translate(0.484 0.484)" fill="#fff" class="fill-color"></path><path id="Path_30762" data-name="Path 30762" d="M8.9,0a1.484,1.484,0,1,0,0,2.968A5.936,5.936,0,1,1,2.968,8.9,1.484,1.484,0,1,0,0,8.9,8.9,8.9,0,1,0,8.9,0Z" fill="#fff" class="fill-color"></path></svg></span>
                      <span class="textLink">{{ $t('Dashboard') || 'Dashboard' }}</span>
                  </router-link>
              </div>
  
              <!-- <div class=" nav-item">
                  <a href.prevent @click.stop="viewHisOrder()" class="nav-link cursor-pointer">
                  <span class="mb-2">
                      <span class="noticeCmdN">{{ blObj.Notify }}</span> 
                      <svg style="color: #fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                  </span>
                      <span class="textLink">{{ $t('Command') || 'Command' }}</span>
                      
                  </a>
              </div> -->
  
              <div class="mobileA nav-item">
                  <a href.prevent @click="popupActiveCaiDat = true" class="nav-link cursor-pointer">
                  <span class="mb-2">
                      <svg data-v-15b74760="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g data-v-15b74760="" id="gear" transform="translate(-2.004 -1.995)"><path data-v-15b74760="" id="Path_30727" data-name="Path 30727" d="M18.111,9.362,16.772,9.25a6.245,6.245,0,0,0-.814-1.96l.871-1.03a1.28,1.28,0,0,0-1.8-1.8L14,5.326a6.234,6.234,0,0,0-1.963-.816L11.92,3.17a1.28,1.28,0,0,0-2.552,0L9.256,4.51a6.245,6.245,0,0,0-1.96.814l-1.03-.868a1.28,1.28,0,0,0-1.8,1.8l.871,1.029a6.239,6.239,0,0,0-.816,1.961l-1.341.112a1.281,1.281,0,0,0,0,2.552l1.341.112a6.238,6.238,0,0,0,.814,1.96l-.871,1.03a1.28,1.28,0,0,0,1.8,1.8L7.3,15.95a6.239,6.239,0,0,0,1.961.816l.112,1.341a1.281,1.281,0,0,0,2.552,0l.112-1.341a6.238,6.238,0,0,0,1.96-.814l1.03.871a1.28,1.28,0,0,0,1.8-1.8l-.871-1.029a6.233,6.233,0,0,0,.816-1.961l1.341-.112a1.281,1.281,0,0,0,0-2.552Zm-7.467,4.445a3.168,3.168,0,1,1,3.168-3.168A3.168,3.168,0,0,1,10.644,13.806Z" fill="#ffffff" class="fill-color-1"></path></g></svg></span>
                      <span class="textLink">{{ $t('Settings') || 'Settings' }}</span>
                  </a>
              </div>
              <div class="mobileA nav-item">
                  <a href.prevent @click.stop="viewHoSo()" class="nav-link cursor-pointer">
                  <span class="mb-2">
                      <feather-icon style="color: #fff;" icon="UserIcon" svgClasses="w-5 h-5" class="block text-center h-5"/>
                  </span>
                      <span class="textLink">{{ $t('Profile') || 'Profile' }}</span>
                  </a>
              </div>
  
          </div>
          <div class="bottomSidebar">
              <div class=" nav-item ">
                  <a href.prevent @click="logOut()" class="nav-link cursor-pointer">
                  <span class="mb-2"><feather-icon style="color: #fff;" icon="LogOutIcon" svgClasses="w-5 h-5" class="block text-center h-5  btn-logout "/></span>
                      <span class="textLink">{{ $t('Logout') || 'Logout' }}</span>
                  </a>
              </div>
          </div>
  
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
  
          <ho-so-user-info :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
          <his-order-bet :isSidebarActive="addSidebarHisOrder" @closeSidebar="toggleDataSidebarHisOrder"/>
      </div>
      </div>
  </div>
  </template>
  
  <script>
  import getData from "@/pages/trade/navbar/components/data.json";
  import HoSoUserInfo from "@/pages/trade/slidebar/HoSoUser";
  import I18n from "./i18n";
  import HisOrderBet from '@/pages/trade/slidebar/HisOrderBet.vue';
  import { isMobile } from "mobile-device-detect";
  import VuePerfectScrollbar from "vue-perfect-scrollbar";
  export default {
    components: {
      I18n,
      HoSoUserInfo,
      VuePerfectScrollbar,
      HisOrderBet
    },
    data() {
      return {
        blObj: getData,
        switchAmThanh: true,
        popupActiveCaiDat: false,
        addSidebarHisOrder: false,
        // Data Sidebar
        addNewDataSidebar: false,
        sidebarData: {},
        isMobile,
        user: {},
        isSidebarActiveLocal: false,
      };
    },
  
    methods: {
      logOut() {
        localStorage.removeItem("tokenUser");
        localStorage.removeItem("INFO");
        // xóa notice = 0
        getData.Notify = 0;
        localStorage.removeItem("stateOpen");
        // This is just for demo Purpose. If user clicks on logout -> redirect
        //this.$router.push('/login').catch(() => {})
        window.location.href = window.location.origin + "/login";
      },
  
      viewHoSo() {
        // this.toggleDataSidebar(true)
        this.$router.push("/user/profile").catch(() => {});
      },
  
      toggleDataSidebar(val = false) {
        this.addNewDataSidebar = val;
      },
  
      OnOffSound() {
        if (this.switchAmThanh) {
          localStorage.setItem("SOUND", true);
        } else {
          localStorage.setItem("SOUND", false);
        }
      },
  
      viewHisOrder() {
        // this.$store.commit('TOGGLE_IS_OPEN_SIDEBAR');
        this.toggleDataSidebarHisOrder(true);
      },
  
      toggleDataSidebarHisOrder(val = false) {
        this.addSidebarHisOrder = val;
      },
      quickDeposit() {
        this.$store.commit("SET_QUICK_DEPOSIT", true);
        this.onCloseMenu();
      },
      onCloseMenu() {
        this.$emit("onCloseMenu");
      },
      onClickSetup() {
        // if (isMobile) {
        //     this.isSidebarActiveLocal = true
        //     return
        // }
        this.popupActiveCaiDat = true;
        this.onCloseMenu();
      },
    },
  
    mounted() {
      let info = localStorage.getItem("INFO");
      if (info) {
        this.user = JSON.parse(info);
      }
    },
  };
  </script>
  
  <style scoped>
  .noticeCmdN {
    position: absolute;
    margin-left: 15px;
    margin-top: -5px;
    border-radius: 50%;
    background: #e22a67;
    width: 20px;
    height: 20px;
    color: #fff;
  }
  
  @media screen and (min-width: 600px) {
    .mobileA {
      display: none;
    }
  }
  
  .nav-item .nav-link {
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: capitalize;
  }
  
  .nav-item .championship {
    position: relative;
  }
  
  .nav-item .icon-live {
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
  }
  .v-nav-menu .feather-icon {
    margin-right: 0;
  }
  
  .v-nav-menu a {
    padding: 10px;
  }
  .v-nav-menu .router-link-active .textLink {
    background: transparent;
    box-shadow: none;
    /* color: #34D1D6!important; */
  }
  .v-nav-menu .router-link-active .fill-color {
    fill: #34d1d6;
  }
  .v-nav-menu .router-link-active .stroke-color {
    stroke: #34d1d6;
  }
  #leftSidebar {
    position: fixed !important;
    height: 100vh;
    width: 300px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    z-index: 99999999;
  }
  @media screen and (min-width: 1200px) {
    #leftSidebar {
      width: 105px;
      height: calc(100vh - 80px);
    }
  }
  
  #leftSidebar .nav-link {
    position: relative;
  }
  #leftSidebar .nav-link.new:before {
    position: absolute;
    top: 0;
    right: 15px;
    background: url("~@/assets/images/sky/icon-new.svg");
    display: block;
    overflow: hidden;
    width: 25px;
    height: 21px;
    content: "";
    background-size: 100% 100%;
  }
  .iconLive {
    position: absolute;
    top: 18px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -ms-flex-item-align: center;
    align-self: center;
  }
  
  .textLink {
    color: #8b8d96;
    text-transform: unset;
    word-wrap: break-word; /* IE 5.5-7 */
    white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
    white-space: pre-wrap; /* current browsers */
    text-align: center;
    font-family: Sarabun, sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
  }
  @media (max-width: 576px) {
  .textLink {
    color: #fff
  }
    
  }
  .topSidebar {
    height: calc(100% - 65px);
    overflow-y: auto;
    width: 300px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: flex-start;
    z-index: 99;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
  }
  @media screen and (min-width: 1200px) {
    .topSidebar {
      width: 105px;
    }
  }
  </style>
  <style>
  .v-nav-menu a span {
    font-size: 16px !important;
  }
  
  .v-nav-menu a .truncate {
    white-space: initial !important;
  }
  
  .btn-link {
    display: none;
    flex-direction: column;
    background-color: transparent;
    font-size: 13px !important;
    white-space: pre-wrap;
    text-transform: unset;
    word-wrap: break-word;
    font-family: "Sarabun", Arial, sans-serif;
    font-weight: 700;
    width: 100%;
    background-color: #34d1d6 !important;
    border-radius: 5px;
  }
  .btn-link .vs-button-text {
    margin: auto;
  }
  @media only screen and (max-width: 1200px) {
    .btn-link {
      display: flex;
    }
  }
  .logo {
    height: 7rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .logo .vx-logo {
    display: block;
  }
  .img-logo {
    width: 191px;
    height: 64px;
  }
  .text-section {
    font-size: 20px;
    color: #fff;
    margin: 0.5rem 0;
  }
  .btn-nav-item-new {
    display: flex;
    font-size: 13px !important;
    white-space: pre-wrap;
    text-transform: none;
    word-wrap: break-word;
    font-family: "Sarabun", Arial, sans-serif;
    font-weight: 700;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 5px;
    background-color: #2f3342 !important;
    cursor: pointer;
  }
  .btn-nav-item-new.bg-primary {
    background-color: #34d1d6 !important;
  }
  
  .btn-nav-item-new .nav-link {
    flex-direction: row !important;
    height: 45px !important;
    box-sizing: border-box;
  }
  .btn-nav-item-new .nav-link span:first-child {
    margin-right: 1rem;
  }
  .nav-link-new .new {
    width: 100%;
    justify-content: flex-start !important;
  }
  .nav-link-new .new::before {
    top: 10px !important;
  }
  .topSidebarDesktop {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .topSidebarDesktop .nav-link {
    align-items: center;
  }
  .topSidebarDesktop .router-link-active .textLink {
    color: #34d1d6 !important;
  }
  
  .topSidebarDesktop .textLink {
    text-align: center;
    font-weight: 400;
    font-size: 16px !important;
  }
  .btn-logout {
    border-top: 1px solid rgba(255, 255, 255, 0.22);
    padding-top: 0.2rem;
  }
  
  @media (max-width: 768px) {
    .popup-setting .vs-popup {
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      margin: 0 !important;
      width: unset !important;
      max-width: unset !important;
      max-height: unset !important;
    }
  
    .theme-dark .popup-setting.con-vs-popup .vs-popup .vs-popup--header {
      background: transparent !important;
    }
  
    .theme-dark .popup-setting.con-vs-popup .vs-popup .vs-popup--header h3 {
      font-size: 24px;
      font-weight: 900;
    }
  
    .popup-setting .vs-popup--close {
      transform: translate(-10px, 2px);
      font-size: 2rem;
    }
  
    .popup-setting .vs-popup--content {
      padding: 0;
      margin-top: 1rem;
    }
  
    .popup-setting .vs-popup--content .line-language-pc {
      padding: 1rem;
      background: #1d233b !important;
    }
  
    .popup-setting .vs-popup--content .line-language-pc .hidden {
      display: block !important;
    }
  
    .popup-setting .vs-popup--content .line {
      padding: 1rem;
      background: #1d233b !important;
    }
  
    .popup-setting .vs-popup--content,
    .popup-setting .wrap {
      height: 100%;
      max-height: unset !important;
    }
  
    .popup-setting .bottomSidebar {
      position: absolute;
      z-index: 1;
      content: "";
      width: 100%;
      height: 45px;
      bottom: 60px;
      left: 0;
    }
  }
  </style>