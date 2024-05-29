(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8158],{3918:function(e,t,n){"use strict";n.r(t),n.d(t,{LOGIN:function(){return w},OTP_VERIFY:function(){return S},default:function(){return O}});var r=n(1229),a=n(809),o=n.n(a),i=n(2447),u=n(4121),s=n(7261),l=n(7294),c=(n(8974),function(e){return"object"===typeof e&&null!==e}),p=function(e){var t=e.value,n=void 0===t?"":t,r=e.numInputs,a=void 0===r?4:r,o=e.onChange,i=e.onPaste,u=e.renderInput,s=e.shouldAutoFocus,p=void 0!==s&&s,d=e.inputType,f=void 0===d?"text":d,m=e.renderSeparator,v=e.placeholder,g=e.containerStyle,b=e.inputStyle,h=e.skipDefaultStyles,y=void 0!==h&&h,N=l.useState(0),x=N[0],k=N[1],w=l.useRef([]),S=function(){return n?n.toString().split(""):[]},O="number"===f||"tel"===f;l.useEffect((function(){w.current=w.current.slice(0,a)}),[a]),l.useEffect((function(){var e;p&&(null===(e=w.current[0])||void 0===e||e.focus())}),[p]);var T=function(){if("string"===typeof v){if(v.length===a)return v;v.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},I=function(e){return(O?!isNaN(Number(e)):"string"===typeof e)&&1===e.trim().length},D=function(e){var t=e.target.value;I(t)&&(C(t),E(x+1))},_=function(e){var t=e.nativeEvent,n=e.target.value;if(!I(n)){if(n.length===a)n.split("").some((function(e){return!I(e)}))||(Z(n.split("")),E(a-1));null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),C(""),E(x-1)),e.target.value=""}},A=function(){k(x-1)},P=function(e){var t=S();[e.code,e.key].includes("Backspace")?(e.preventDefault(),C(""),E(x-1)):"Delete"===e.code?(e.preventDefault(),C("")):"ArrowLeft"===e.code?(e.preventDefault(),E(x-1)):"ArrowRight"===e.code||e.key===t[x]?(e.preventDefault(),E(x+1)):"Spacebar"!==e.code&&"Space"!==e.code&&"ArrowUp"!==e.code&&"ArrowDown"!==e.code||e.preventDefault()},E=function(e){var t,n,r=Math.max(Math.min(a-1,e),0);w.current[r]&&(null===(t=w.current[r])||void 0===t||t.focus(),null===(n=w.current[r])||void 0===n||n.select(),k(r))},C=function(e){var t=S();t[x]=e[0],Z(t)},Z=function(e){var t=e.join("");o(t)},L=function(e){var t;e.preventDefault();var n=S(),r=x,o=e.clipboardData.getData("text/plain").slice(0,a-x).split("");if(!O||!o.some((function(e){return isNaN(Number(e))}))){for(var i=0;i<a;++i)i>=x&&o.length>0&&(n[i]=null!==(t=o.shift())&&void 0!==t?t:"",r++);E(r),Z(n)}};return l.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},c(g)&&g),className:"string"===typeof g?g:void 0,onPaste:i},Array.from({length:a},(function(e,t){return t})).map((function(e){var t,n,r;return l.createElement(l.Fragment,{key:e},u({value:null!==(t=S()[e])&&void 0!==t?t:"",placeholder:null!==(r=null===(n=T())||void 0===n?void 0:n[e])&&void 0!==r?r:void 0,ref:function(t){return w.current[e]=t},onChange:D,onFocus:function(t){return function(e){return function(t){k(t),e.target.select()}}(t)(e)},onBlur:A,onKeyDown:P,onPaste:L,autoComplete:"off","aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(y?{}:{width:"1em",textAlign:"center"},c(b)?b:{}),className:"string"===typeof b?b:void 0,type:f,inputMode:O?"numeric":"text",onInput:_},e),e<a-1&&("function"===typeof m?m(e):m))})))},d=n(9710),f=n(1919),m=n(2559),v=n(1163),g=n(2132),b=n(980),h=n(4593),y=l.createElement;function N(){var e=(0,s.Z)(["\n    mutation BulkAddToCart($input: BulkAddToCartInput!) {\n      bulkAddToCart(input: $input) {\n        message\n      }\n    }\n  "]);return N=function(){return e},e}function x(){var e=(0,s.Z)(["\n  mutation UserVerifyOtp($input: userVerifyOtpInput!) {\n    userVerifyOtp(input: $input) {\n      message\n      token\n      userId\n    }\n  }\n"]);return x=function(){return e},e}function k(){var e=(0,s.Z)(["\n  mutation UserLoginOtp($input: userLoginOtpInput!) {\n    userLoginOtp(input: $input) {\n      message\n      mobileNumber\n      _id\n    }\n  }\n"]);return k=function(){return e},e}var w=(0,d.Ps)(k()),S=(0,d.Ps)(x());var O=(0,m.Z)({ssr:!1})((function(e){e.mutate;var t=(0,v.useRouter)(),n=t.query.origin,a=n?null===n||void 0===n?void 0:n.replace("-","/"):null,s=(0,l.useState)(!1),c=s[0],m=s[1],x=(0,l.useState)(""),k=x[0],O=x[1],T=(0,l.useState)(""),I=T[0],D=T[1],_=(0,l.useState)(""),A=_[0],P=_[1],E=(0,l.useState)(""),C=E[0],Z=E[1],L=(0,l.useState)(""),B=L[0],F=L[1],V=(0,f.D)(w),q=(0,u.Z)(V,1)[0],R=(0,f.D)(S),W=(0,u.Z)(R,1)[0],$=function(){var e=(0,i.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,k.trim()){e.next=5;break}return D("Mobile number is required"),e.abrupt("return");case 5:return e.next=7,q({variables:{input:{mobileNumber:"+968 ".concat(k)}}});case 7:n=e.sent,F(n.data.userLoginOtp._id),g.Am.success(y("div",{style:{padding:"10px"}},"OTP sent successfully")),m(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q({variables:{input:{mobileNumber:"+968 ".concat(k)}}});case 3:e.sent&&g.Am.success(y("div",{style:{padding:"10px"}},"OTP sent successfully")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),g.Am.error(y("div",{style:{padding:"10px"}},null===e.t0||void 0===e.t0?void 0:e.t0.message)),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),j=(0,d.Ps)(N()),z=(0,f.D)(j),U=(0,u.Z)(z,1)[0],G=function(){var e=(0,i.Z)(o().mark((function e(n){var r,i,u,s,l,c,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,C){e.next=5;break}return P("Otp is required"),e.abrupt("return");case 5:return e.next=7,W({variables:{input:{code:C,_id:B}}});case 7:if(!(r=e.sent)){e.next=31;break}if(localStorage.setItem("arabtoken",null===r||void 0===r||null===(i=r.data)||void 0===i||null===(u=i.userVerifyOtp)||void 0===u?void 0:u.token),localStorage.setItem("userId",null===r||void 0===r||null===(s=r.data)||void 0===s||null===(l=s.userVerifyOtp)||void 0===l?void 0:l.userId),e.prev=11,!((null===(c=JSON.parse(localStorage.getItem("cart")))||void 0===c?void 0:c.length)>0)){e.next=17;break}return e.next=16,U({variables:{input:{products:c.map((function(e){return{productId:e.productId,quantity:e.quantity}}))}}});case 16:e.sent;case 17:localStorage.removeItem("cart"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(11),console.log(e.t0);case 23:if(!a){e.next=25;break}return e.abrupt("return",t.push("/".concat(a)));case 25:if(!(p=localStorage.getItem("historyUrl"))){e.next=30;break}return e.abrupt("return",t.push(p));case 30:return e.abrupt("return",t.push("/"));case 31:e.next=36;break;case 33:e.prev=33,e.t1=e.catch(1),console.log("error",e.t1);case 36:case"end":return e.stop()}}),e,null,[[1,33],[11,20]])})));return function(t){return e.apply(this,arguments)}}();return y(l.Fragment,null,y(h.q,null,y("title",null,"Login | Arab Deals")),y("main",{className:"main"},y("div",{className:" login-container container",style:{marginTop:"0",position:"relative"}},y("div",{style:{zIndex:"99",position:"absolute",width:"100%",left:"0",right:"0",background:"white"},className:"custom_loginresp"},y("div",null,y(b.ZP,null))),y("div",{className:"container custom_login_space "},y("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav mb-0",style:{paddingBottom:"15px",borderBottom:"1px solid #F0F0F0"}})),y("div",{className:"row"},y("div",{className:"col-lg-12 mx-auto custom_headlog"},c?y("div",{className:"row custom-loginleft"},y("div",{className:"col-md-6"},y("div",{className:"heading mb-1 otpcontainer"},y("h2",{className:"title"},"Verify Phone Number"),y("div",{className:""},y("p",{className:"",style:{marginTop:"20px",paddingBottom:"20px",fontSize:"12px",color:"#777777",fontWeight:"400"}},"Secure Your Account, Shop With Confidence."))),y("form",{style:{marginTop:"70px"}},y("div",{className:"mt-3"},y(p,{value:C,onChange:Z,numInputs:5,containerStyle:{textAlign:"center",width:"60px",height:"60px",gap:"24px"},renderInput:function(e){return y("input",(0,r.Z)({},e,{className:"otpbox"}))}}),y("button",{type:"submit",className:"btn btn-dark btn-md ",style:{marginTop:"48px",fontWeight:"600"},onClick:G},"Verify OTP"),A&&y("div",{style:{color:"red"}},A),y("div",{className:"resend-action",style:{marginTop:"33px"}},y("p",{style:{fontWeight:"400",fontSize:"12px",color:"#000000"}},"Don't have OTP ?",y("span",{style:{paddingLeft:"5px",color:"#399E0A",fontWeight:"500",cursor:"pointer"},className:"btn-text",onClick:M},"Resend")))))),y("div",{className:"col-md-6"},y("div",null,y("img",{class:"google-icon",src:"images\\brands\\loginBanner.svg"})))):y("div",{className:"row custom-loginleft"},y("div",{className:"col-md-6 left-login-section"},y("div",{className:"heading mb-1"},y("h2",{className:"title"},"Login/ Register to your account"),y("div",{className:""},y("p",{className:"",style:{marginTop:"20px",fontSize:"12px",color:"#777777",fontWeight:"400"}},"Access Exclusive Offer Now."))),y("div",null),y("form",{style:{marginTop:"70px"}},y("div",{className:"container"},y("div",{className:"input-group",style:{position:"relative"}},y("div",{className:"input-group-prepend",style:{position:"absolute"}},y("span",{className:"input-group-text countrycodeinput",style:{padding:"10px"}},y("img",{src:"images/brands/flag1.svg",alt:"Flag",width:"24",height:"20"}),"+968")),y("input",{type:"number",placeholder:"Enter Mobile Number",className:"form-input form-wide",value:k,onChange:function(e){return O(e.target.value)},style:{outline:"none",paddingLeft:"80px"}}))),I&&y("div",{style:{color:"red"}},I),y("button",{type:"submit",className:"btn btn-dark btn-md ",style:{marginTop:"36px",fontWeight:"600"},onClick:$},"GET OTP"))),y("div",{className:"col-md-6",style:{paddingRight:"0"}},y("div",null,y("img",{class:"google-icon",src:"images\\brands\\loginBanner.svg"})))))))))}))},749:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/login",function(){return n(3918)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=749,e(e.s=t);var t}));var t=e.O();_N_E=t}]);