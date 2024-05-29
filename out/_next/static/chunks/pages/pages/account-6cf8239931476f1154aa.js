(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1354],{3702:function(e,t,a){"use strict";a.r(t),a.d(t,{USER_DETAIL:function(){return b}});var n=a(809),s=a.n(n),i=a(2447),l=a(4121),r=a(7261),o=a(7294),c=a(8974),d=a(340),u=a(1163),p=a(1649),h=a(9710),m=a(8460),C=a(1919),f=a(2559),g=a(4593),x=o.createElement;function v(){var e=(0,r.Z)(["\n  mutation LogoutUser {\n    logoutUser {\n      _id\n    }\n  }\n"]);return v=function(){return e},e}function w(){var e=(0,r.Z)(["\n  query GetUserRecord($input: userInput!) {\n    getUserRecord(input: $input) {\n      message\n      record {\n        _id\n        firstName\n        displayName\n        email\n        lastName\n      }\n    }\n  }\n"]);return w=function(){return e},e}var b=(0,h.Ps)(w()),y=(0,h.Ps)(v());t.default=(0,f.Z)({ssr:!1})((function(){var e,t,a,n,r,h=null===(e=localStorage)||void 0===e?void 0:e.getItem("userId"),f=localStorage.getItem("arabtoken"),v=(0,m.t)(b),w=(0,l.Z)(v,2),N=w[0],Z=w[1],L=(Z.loading,Z.error,Z.data),k=(Z.refetch,(0,C.D)(y)),_=(0,l.Z)(k,2),j=_[0],M=_[1],R=(M.loading,M.error,(0,u.useRouter)()),I=function(){var e=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.clear(),e.next=4,j();case 4:R.push("/pages/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Logout error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){f||R.push("/pages/login"),N({variables:{input:{_id:h}}})}),[h,f]),x("div",null,x(g.q,null,x("title",null,"Account | Arab Deals")),x("main",{className:"main main-test"},x("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav"},x("div",{className:"container"},x("ol",{className:"breadcrumb"},x("li",{className:"breadcrumb-item"},x(c.Z,{href:"/"},x(p.QO$,{style:{fontSize:"16px"}}))),x("li",{className:"breadcrumb-item active","aria-current":"page"},x(c.Z,{className:"activeitem",href:"/pages/account"},"Dashboard"))))),x("div",{className:" d-flex flex-column align-items-center"},x("ul",{className:"checkout-progress-bar d-flex justify-content-center flex-wrap",style:{backgroundColor:"#F9F9F9",width:"100%"}},x("li",{className:""},x(c.Z,{href:"/pages/account"},"My Account")),x("li",{className:"active"},x(c.Z,{href:"/pages/account"},"Dashboard"))))),x("div",{className:"container account-container custom-account-container"},x(d.mQ,{selectedTabClassName:"active",selectedTabPanelClassName:"active show",defaultIndex:0,className:"tab"},x("div",{className:"row"},x("div",{className:"col-12 order-0"}),x("div",{className:"col-12 container order-1 tab-content"},x(d.x4,{className:"tab-pane fade",id:"dashboard"},x("div",{className:"dashboard-content"},x("p",{style:{fontWeight:"400",fontSize:"20px",lineHeight:"20px",fontFamily:"Poppins"}},"Hello",null!==L&&void 0!==L&&null!==(t=L.getUserRecord)&&void 0!==t&&null!==(a=t.record)&&void 0!==a&&a.displayName?x("strong",{className:"text-dark",style:{fontSize:"26px",lineHeight:"20px",fontFamily:"Poppins",paddingLeft:"10px"}},null===L||void 0===L||null===(n=L.getUserRecord)||void 0===n||null===(r=n.record)||void 0===r?void 0:r.displayName):""),x("p",{style:{fontWeight:"400",fontSize:"14px",lineHeight:"26px",fontFamily:"Poppins"}},"From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your account details."),x("div",{className:"container p-md-5 p-sm-0"},x("div",{className:"row"},x("div",{className:"col-12 col-md-4 mb-4"},x("div",{className:"feature-box text-center justify-content-center content-box mr-sm-0 w-sm-100",style:{width:"321.46px",height:"276.71px"}},x(c.Z,{href:"/pages/orders"},x("div",{style:{width:"321.46px",height:"276.71p",display:"flex",justifyContent:"center"}},x("div",{className:"iconwrapper-dash",style:{width:"103.59px",height:"103.59px",backgroundColor:"rgb(237, 237, 237,1)",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}},x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"43",height:"42",viewBox:"0 0 43 42",fill:"black",className:"iconhover"},x("path",{d:"M35.9791 13.6215L22.6161 21.3616C22.0781 21.674 21.4012 21.674 20.8459 21.3616L7.48281 13.6215C6.52831 13.0661 6.28534 11.7645 7.01424 10.9488C7.51752 10.3761 8.09023 9.90756 8.69764 9.57782L18.1039 4.37143C20.117 3.24338 23.3797 3.24338 25.3928 4.37143L34.799 9.57782C35.4064 9.90756 35.9792 10.3935 36.4824 10.9488C37.1766 11.7645 36.9337 13.0661 35.9791 13.6215Z"}),x("path",{d:"M20.7417 24.5903V36.4261C20.7417 37.7451 19.4054 38.6128 18.2252 38.0401C14.6502 36.2873 8.62812 33.0073 8.62812 33.0073C6.51086 31.8098 4.77539 28.7901 4.77539 26.3084V17.3534C4.77539 15.9824 6.21583 15.1146 7.39594 15.7915L19.8739 23.0284C20.3946 23.3581 20.7417 23.9482 20.7417 24.5903Z"}),x("path",{d:"M22.7202 24.5903V36.4261C22.7202 37.7451 24.0565 38.6128 25.2366 38.0401C28.8117 36.2873 34.8338 33.0073 34.8338 33.0073C36.951 31.8098 38.6865 28.7901 38.6865 26.3084V17.3534C38.6865 15.9824 37.2461 15.1146 36.0659 15.7915L23.5879 23.0284C23.0673 23.3581 22.7202 23.9482 22.7202 24.5903Z"})))),x("div",{className:"feature-box-content",style:{marginTop:"20px"}},x("h3",null,"ORDERS"))))),x("div",{className:"col-12 col-md-4 mb-4"},x("div",{className:"feature-box text-center justify-content-center  content-box mr-sm-0 w-sm-100 ",style:{width:"321.46px",height:"276.71px"}},x(c.Z,{href:"/pages/wishlist"},x("div",{style:{width:"321.46px",height:"276.71p",display:"flex",justifyContent:"center"}},x("div",{className:"iconwrapper-dash",style:{width:"103.59px",height:"103.59px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}},x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"42",height:"42",viewBox:"0 0 42 42",fill:"black",className:"iconhover"},x("path",{d:"M28.6168 5.63477C25.4756 5.63477 22.6641 7.16197 20.9113 9.50485C19.1585 7.16197 16.347 5.63477 13.2058 5.63477C7.87795 5.63477 3.55664 9.97343 3.55664 15.336C3.55664 17.4012 3.88638 19.3102 4.45908 21.0804C7.20112 29.7577 15.6528 34.9468 19.8353 36.3698C20.4254 36.5781 21.3972 36.5781 21.9873 36.3698C26.1697 34.9468 34.6215 29.7577 37.3635 21.0804C37.9362 19.3102 38.2659 17.4012 38.2659 15.336C38.2659 9.97343 33.9446 5.63477 28.6168 5.63477Z"})))),x("div",{className:"feature-box-content",style:{marginTop:"20px"}},x("h3",null,"Wishlist"))))),x("div",{className:"col-12 col-md-4 mb-4"},x("div",{className:"feature-box text-center justify-content-center  content-box mr-sm-0 w-sm-100",style:{width:"321.46px",height:"276.71px"}},x(c.Z,{href:"/pages/addresses"},x("div",{style:{width:"321.46px",height:"276.71p",display:"flex",justifyContent:"center"}},x("div",{className:"iconwrapper-dash",style:{width:"103.59px",height:"103.59px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}},x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"43",height:"43",viewBox:"0 0 43 43",fill:"black",className:"iconhover"},x("path",{d:"M16.7848 13.4395C15.8129 13.4395 15.0493 14.2204 15.0493 15.1749C15.0493 16.1294 15.8303 16.9104 16.7848 16.9104C17.7393 16.9104 18.5202 16.1294 18.5202 15.1749C18.5202 14.2204 17.7393 13.4395 16.7848 13.4395Z"}),x("path",{d:"M38.1481 9.18792C36.6903 5.80377 33.4797 3.91211 29.0022 3.91211H14.459C8.88819 3.91211 4.37598 8.42432 4.37598 13.9952V28.5384C4.37598 33.0159 6.26763 36.2265 9.65179 37.6843C9.98153 37.8231 10.3633 37.7363 10.6063 37.4934L37.9572 10.1424C38.2175 9.88211 38.3043 9.50031 38.1481 9.18792ZM19.1795 21.6833C18.5027 22.3427 17.6176 22.6551 16.7325 22.6551C15.8474 22.6551 14.9623 22.3254 14.2855 21.6833C12.5153 20.0172 10.5716 17.362 11.3178 14.2034C11.9773 11.3399 14.5111 10.0557 16.7325 10.0557C18.9539 10.0557 21.4877 11.3399 22.1471 14.2208C22.876 17.362 20.9323 20.0172 19.1795 21.6833Z"}),x("path",{d:"M34.695 36.07C35.0768 36.4518 35.0247 37.0765 34.5561 37.3368C33.0289 38.1872 31.172 38.6211 29.0027 38.6211H14.4595C13.9562 38.6211 13.7479 38.031 14.095 37.6839L24.5772 27.2017C24.9243 26.8546 25.4623 26.8546 25.8094 27.2017L34.695 36.07Z"}),x("path",{d:"M39.0857 13.9951V28.5383C39.0857 30.7076 38.6518 32.5819 37.8015 34.0918C37.5411 34.5604 36.9164 34.5951 36.5346 34.2306L27.649 25.345C27.3019 24.998 27.3019 24.46 27.649 24.1129L38.1312 13.6307C38.4957 13.2836 39.0857 13.4918 39.0857 13.9951Z"})))),x("div",{className:"feature-box-content",style:{marginTop:"20px"}},x("h3",null,"Address"))))),x("div",{className:"col-12 col-md-4 mb-4"},x("div",{className:"feature-box text-center justify-content-center  content-box mr-sm-0 w-sm-100",style:{width:"321.46px",height:"276.71px"}},x(c.Z,{href:"/pages/accountdetails"},x("div",{style:{width:"321.46px",height:"276.71p",display:"flex",justifyContent:"center"}},x("div",{className:"iconwrapper-dash",style:{width:"103.59px",height:"103.59px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}},x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"42",height:"43",viewBox:"0 0 42 43",fill:"black",className:"iconhover"},x("path",{d:"M20.8436 4.38672C16.2966 4.38672 12.6001 8.08326 12.6001 12.6302C12.6001 17.0903 16.0884 20.7001 20.6353 20.8563C20.7741 20.8389 20.913 20.8389 21.0171 20.8563C21.0518 20.8563 21.0692 20.8563 21.1039 20.8563C21.1212 20.8563 21.1212 20.8563 21.1386 20.8563C25.5814 20.7001 29.0697 17.0903 29.087 12.6302C29.087 8.08326 25.3905 4.38672 20.8436 4.38672Z"}),x("path",{d:"M29.6598 25.4737C24.8179 22.2457 16.9215 22.2457 12.0448 25.4737C9.8408 26.9489 8.62598 28.9446 8.62598 31.0793C8.62598 33.2139 9.8408 35.1923 12.0275 36.6501C14.4571 38.2814 17.6504 39.0971 20.8436 39.0971C24.0369 39.0971 27.2302 38.2814 29.6598 36.6501C31.8465 35.175 33.0613 33.1965 33.0613 31.0446C33.044 28.9099 31.8465 26.9315 29.6598 25.4737Z"})))),x("div",{className:"feature-box-content",style:{marginTop:"20px"}},x("h3",null,"Account Details"))))),x("div",{className:"col-12 col-md-4 mb-4"},x("div",{className:"feature-box text-center justify-content-center  content-box mr-sm-0 w-sm-100",style:{width:"321.46px",height:"276.71px"},onClick:I},x("div",null,x("div",null,x("div",{className:"iconwrapper-dash",style:{width:"103.59px",height:"103.59px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}},x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"42",height:"43",viewBox:"0 0 42 43",fill:"black",className:"iconhover"},x("path",{d:"M34.5435 7.7655C29.4065 2.64588 21.0762 2.64588 15.974 7.7655C12.3816 11.3232 11.3056 16.4428 12.6939 20.955L4.53726 29.1117C3.96456 29.7018 3.5654 30.8645 3.68688 31.6976L4.20752 35.4809C4.39843 36.7304 5.56119 37.9105 6.81072 38.0841L10.594 38.6047C11.4271 38.7262 12.5898 38.3444 13.1799 37.737L14.603 36.3139C14.9501 35.9842 14.9501 35.4288 14.603 35.0817L11.2362 31.7149C10.7329 31.2116 10.7329 30.3786 11.2362 29.8753C11.7394 29.372 12.5725 29.372 13.0758 29.8753L16.4599 33.2595C16.7896 33.5892 17.345 33.5892 17.6747 33.2595L21.3539 29.5976C25.8488 31.0034 30.9684 29.91 34.5435 26.3523C39.6631 21.2327 39.6631 12.8851 34.5435 7.7655ZM25.3628 21.2674C22.9679 21.2674 21.0242 19.3237 21.0242 16.9288C21.0242 14.5338 22.9679 12.5901 25.3628 12.5901C27.7578 12.5901 29.7015 14.5338 29.7015 16.9288C29.7015 19.3237 27.7578 21.2674 25.3628 21.2674Z"})))),x("div",{className:"feature-box-content",style:{marginTop:"20px"}},x("h3",null,"Logout"))))))))))))))}))},1114:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/account",function(){return a(3702)}])}},function(e){e.O(0,[340,9774,2888,179],(function(){return t=1114,e(e.s=t);var t}));var t=e.O();_N_E=t}]);