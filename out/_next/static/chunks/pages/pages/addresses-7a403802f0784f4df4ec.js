(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2732],{9592:function(e,n,t){"use strict";var r=t(809),i=t.n(r),a=t(6265),s=t(2447),o=t(4121),l=t(7261),u=t(7294),d=t(2439),p=t(2559),c=t(9710),m=t(4931),v=t(1919),f=t(2132),g=t(1163),h=(t(8974),t(1649)),b=u.createElement;function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(){var e=(0,l.Z)(["mutation EditUserShippingAddress($input: UserEditShippingAddressInput!) {\n    editUserShippingAddress(input: $input) {\n      _id\n    }\n  }"]);return x=function(){return e},e}function S(){var e=(0,l.Z)(["query GetUserShippingAddress($input: GetUserShippingAddressInput!) {\n    getUserShippingAddress(input: $input) {\n      _id\n      apartment\n      city\n      \n      country\n      email\n      firstname\n      houseNumber\n      mobile\n      postCode\n      streetName\n      suite\n      unit\n     \n    }\n  }"]);return S=function(){return e},e}function C(){var e=(0,l.Z)(["mutation CreateUserShippingAddress($input: UserCreateShippingAddressInput!) {\n    createUserShippingAddress(input: $input) {\n      _id\n    }\n  }"]);return C=function(){return e},e}var A=(0,c.Ps)(C()),w=(0,c.Ps)(S()),P=(0,c.Ps)(x());n.ZP=(0,p.Z)({ssr:!1})((function(e){var n,t,r,a,l,p,c=e.isEdit,y=e.addressId,x=e.onClose,S=e.isShipping,C=e.onIsShipping,U=((0,g.useRouter)(),(0,m.a)(w,{variables:{input:{_id:y}}})),k=U.data,O=(U.loading,U.error,(0,d.cI)({defaultValues:{firstname:"",country:"",streetName:"",houseNumber:"",city:"",postCode:"",apartment:"",email:"",mobile:""}})),E=(O.register,O.handleSubmit),D=(O.watch,O.setValue),q=O.reset,_=O.formState.errors,Z=O.control;(0,u.useEffect)((function(){var e,n,t,r,i,a,s,o,l;c&&(D("firstname",null===k||void 0===k||null===(e=k.getUserShippingAddress)||void 0===e?void 0:e.firstname),D("country",null===k||void 0===k||null===(n=k.getUserShippingAddress)||void 0===n?void 0:n.country),D("houseNumber",null===k||void 0===k||null===(t=k.getUserShippingAddress)||void 0===t?void 0:t.houseNumber),D("streetName",null===k||void 0===k||null===(r=k.getUserShippingAddress)||void 0===r?void 0:r.streetName),D("city",null===k||void 0===k||null===(i=k.getUserShippingAddress)||void 0===i?void 0:i.city),D("postCode",null===k||void 0===k||null===(a=k.getUserShippingAddress)||void 0===a?void 0:a.postCode),D("mobile",null===k||void 0===k||null===(s=k.getUserShippingAddress)||void 0===s?void 0:s.mobile),D("email",null===k||void 0===k||null===(o=k.getUserShippingAddress)||void 0===o?void 0:o.email),D("apartment",null===k||void 0===k||null===(l=k.getUserShippingAddress)||void 0===l?void 0:l.apartment))}),[c,k]);var T=(0,v.D)(A),j=(0,o.Z)(T,1)[0],I=(0,v.D)(P),F=(0,o.Z)(I,1)[0],Q=function(){var e=(0,s.Z)(i().mark((function e(n){var t,r,a,s,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(event.preventDefault(),e.prev=1,!c){e.next=9;break}return e.next=5,F({variables:{input:N({_id:null===k||void 0===k||null===(t=k.getUserShippingAddress)||void 0===t?void 0:t._id},n)}});case 5:e.sent&&(f.Am.success(b("div",{style:{padding:"10px"}},"Shipping address updated")),x()),e.next=13;break;case 9:return e.next=11,j({variables:{input:N({},n)}});case 11:(r=e.sent)&&(null===(a=localStorage)||void 0===a||a.setItem("shippingId",null===r||void 0===r||null===(s=r.data)||void 0===s||null===(o=s.createUserShippingAddress)||void 0===o?void 0:o._id),(0,f.Am)(b("div",{style:{padding:"10px"}},"Shipping address added")),x(),q());case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),(0,f.Am)(b("div",{style:{padding:"10px"}},e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(n){return e.apply(this,arguments)}}(),W={city:{required:"City is required"},firstname:{required:"First Name is required"},houseNumber:{required:"HouseNumber is required"},mobile:{required:"Mobile is required"},postCode:{required:"postCode is required"},streetName:{required:"Street Name is required"},email:{pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message:"Invalid email address"}}};return b("div",null,b("div",{className:"container checkout-container"},b("div",{className:"row"},b("div",{className:"col-lg-12"},b("ul",{className:"checkout-steps"},b("li",null,b("div",{className:"container custom-formspace"},b("h4",{className:"step-title",style:{display:"flex",alignItems:"center",gap:"10px"}},b("div",{onClick:function(){return C(!S)},className:{width:"40px",height:"40px",backgroundColor:"rgba(232, 232, 232, 0.29)",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}},b(h.UkU,{style:{fontSize:"20px"}})),"Shipping address")),b("form",{onSubmit:E(Q),id:"checkout-form",style:{marginTop:"40px"}},b("div",{className:"form-group"},b("label",{style:{fontFamily:"Poppins",fontWeight:"400px",lineHeight:"20px"}},"First name"," ",b("ab",{className:"required",title:"required"},"*")),b(d.Qr,{control:Z,name:"firstname",render:function(e){var n=e.field,t=n.onChange,r=n.value;return b("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})},rules:W.firstname}),null!==_&&void 0!==_&&_.firstname?b("div",{style:{color:"red",fontWeight:"300"}},null===_||void 0===_||null===(n=_.firstname)||void 0===n?void 0:n.message):null),b("div",{className:"form-group"},b("label",{style:{fontFamily:"Poppins",fontWeight:"400px",lineHeight:"20px"}},"Country / Region "," "),b(d.Qr,{control:Z,name:"country",render:function(e){var n=e.field,t=n.onChange,r=n.value;return b("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})}})),b("div",{className:"form-group"},b("label",null,"Street address ",b("span",{className:"required"},"*")),b(d.Qr,{control:Z,name:"houseNumber",render:function(e){var n=e.field,t=n.onChange,r=n.value;return b("input",{type:"text",className:"form-control",placeholder:"House number and street name",value:r,onChange:t,style:{marginTop:"10px"}})},rules:W.houseNumber}),null!==_&&void 0!==_&&_.houseNumber?b("div",{style:{color:"red",fontWeight:"300"}},null===_||void 0===_||null===(t=_.houseNumber)||void 0===t?void 0:t.message):null,b(d.Qr,{control:Z,name:"streetName",render:function(e){var n=e.field,t=n.onChange,r=n.value;return b("input",{type:"text",className:"form-control",placeholder:"Apartment, suite, unit, etc. (optional)",value:r,onChange:t})},rules:W.streetName}),null!==_&&void 0!==_&&_.streetName?b("div",{style:{color:"red",fontWeight:"300"}},null===_||void 0===_||null===(r=_.streetName)||void 0===r?void 0:r.message):null),b("div",{className:"form-group"},b("label",null,"Twon/City ",b("span",{className:"required"},"*")),b(d.Qr,{control:Z,name:"city",render:function(e){var n=e.field,t=n.onChange,r=n.value;return b("input",{type:"text",className:"form-control",placeholder:"Abu Dhabi",value:r,onChange:t,style:{marginTop:"10px"}})},rules:W.city}),null!==_&&void 0!==_&&_.city?b("div",{style:{color:"red",fontWeight:"300"}},null===_||void 0===_||null===(a=_.city)||void 0===a?void 0:a.message):null),b("div",{className:"form-group"},b("label",null,"Pincode/Zip ",b("span",{className:"required"},"*")),b(d.Qr,{control:Z,name:"postCode",render:function(e){var n=e.field,t=n.onChange,r=n.value;return b("input",{type:"number",className:"form-control",placeholder:"6730016",value:r,onChange:t,style:{marginTop:"10px"}})},rules:W.postCode}),null!==_&&void 0!==_&&_.postCode?b("div",{style:{color:"red",fontWeight:"300"}},null===_||void 0===_||null===(l=_.postCode)||void 0===l?void 0:l.message):null),b("div",{className:"form-group"},b("label",null,"Phone",b("span",{className:"required"},"*")),b("div",{className:"input-group",style:{marginTop:"10px"}},b("div",{className:"input-group-prepend"},b("span",{className:"input-group-text",style:{padding:"10px"}},b("img",{src:"images\\brands\\flag1.svg",alt:"Flag",width:"24",height:"16"}),"+971")),b(d.Qr,{control:Z,name:"mobile",render:function(e){var n=e.field,t=n.onChange,r=n.value;return b("input",{type:"tel",className:"form-control",placeholder:"Enter your phone number",value:r,onChange:t})},rules:W.mobile})),null!==_&&void 0!==_&&_.mobile?b("div",{style:{color:"red",fontWeight:"300"}},null===_||void 0===_||null===(p=_.city)||void 0===p?void 0:p.mobile):null),b("div",{className:"form-group"},b("label",null,"Email"),b(d.Qr,{control:Z,name:"email",render:function(e){var n=e.field,t=n.onChange,r=n.value;return b("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})}})),b("div",{className:"container",style:{display:"flex",justifyContent:"flex-end"}},b("div",{className:"mt-3"},b("button",{type:"submit",className:"btn btn-dark mr-0"},"Save changes"))))))))))}))},3252:function(e,n,t){"use strict";t.r(n),t.d(n,{DEFAULT_ADDRESS:function(){return q},GET_ADDRESSES:function(){return E},REMOVE_ADDRESS:function(){return D},default:function(){return _}});var r=t(809),i=t.n(r),a=t(2447),s=t(4121),o=t(7261),l=t(7294),u=(t(8216),t(8974)),d=t(6265),p=t(2439),c=t(2559),m=t(9710),v=t(1919),f=l.createElement;function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(){var e=(0,o.Z)(["query Query($input: userInput!) {\n    getUserRecord(input: $input) {\n      message\n      record {\n        displayName\n        lastName\n        _id\n        address\n        city\n        country\n        countryCode\n        email\n        firstName\n        houseNumber\n        mobileNumber\n        pincode\n        streetName\n        token\n      }\n    }\n  }"]);return b=function(){return e},e}function y(){var e=(0,o.Z)(["mutation UpdateUserProfile($input: updateUserProfileInput!) {\n    updateUserProfile(input: $input) {\n\n      message\n    }\n  }"]);return y=function(){return e},e}var N=(0,m.Ps)(y());(0,m.Ps)(b());var x=(0,c.Z)({ssr:!1})((function(){var e=(0,p.cI)({defaultValues:{firstName:"",lastName:"",email:"",mobileNumber:"",pincode:"",city:"",streetName:"",houseNumber:"",country:""}}),n=(e.register,e.handleSubmit),t=(e.watch,e.setValue,e.reset),r=(e.formState.errors,e.control),o=(0,v.D)(N),l=(0,s.Z)(o,1)[0],u=function(){var e=(0,a.Z)(i().mark((function e(n){var r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return event.preventDefault(),e.prev=1,"65bb85834825212140ac3aed",e.next=5,l({variables:{input:h({_id:"65bb85834825212140ac3aed".toString()},n)}});case 5:(r=e.sent)&&(window.alert(null===r||void 0===r||null===(a=r.data)||void 0===a||null===(s=a.updateUserProfile)||void 0===s?void 0:s.message),t()),SetIsOtp(!0),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return f("div",null,f("div",{className:"container checkout-container"},f("div",{className:"row"},f("div",{className:"col-lg-12"},f("ul",{className:"checkout-steps"},f("li",null,f("div",{className:"container",style:{marginTop:"6rem",padding:"2px"}},f("h4",{className:"step-title"},"Billing address")),f("form",{onSubmit:n(u),id:"checkout-form",style:{marginTop:"40px"}},f("div",{className:"row"},f("div",{className:"col-md-6"},f("div",{className:"form-group"},f("label",{style:{fontFamily:"Poppins",fontWeight:"400px",lineHeight:"20px"}},"First name"," ",f("ab",{className:"required",title:"required"},"*")),f(p.Qr,{control:r,name:"firstName",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})}}))),f("div",{className:"col-md-6"},f("div",{className:"form-group"},f("label",{style:{fontFamily:"Poppins",fontWeight:"400px",lineHeight:"20px"}},"Last name"," ",f("ab",{className:"required",title:"required"},"*")),f(p.Qr,{control:r,name:"lastName",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"text",className:"form-control",style:{marginTop:"10px"},value:r,onChange:t})}})))),f("div",{className:"form-group"},f("label",{style:{fontFamily:"Poppins",fontWeight:"400px",lineHeight:"20px"}},"Country / Region "," ",f("ab",{className:"required",title:"required"},"*")),f(p.Qr,{control:r,name:"country",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})}})),f("div",{className:"form-group"},f("label",null,"Street address ",f("span",{className:"required"},"*")),f(p.Qr,{control:r,name:"houseNumber",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"text",className:"form-control",placeholder:"House number and street name",value:r,onChange:t,style:{marginTop:"10px"}})}}),f(p.Qr,{control:r,name:"streetName",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"text",className:"form-control",placeholder:"Apartment, suite, unit, etc. (optional)",value:r,onChange:t})}})),f("div",{className:"form-group"},f("label",null,"Twon/City ",f("span",{className:"required"},"*")),f(p.Qr,{control:r,name:"city",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"text",className:"form-control",placeholder:"Abu Dhabi",value:r,onChange:t,style:{marginTop:"10px"}})}})),f("div",{className:"form-group"},f("label",null,"Pincode/Zip ",f("span",{className:"required"},"*")),f(p.Qr,{control:r,name:"pincode",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"number",className:"form-control",placeholder:"6730016",value:r,onChange:t,style:{marginTop:"10px"}})}})),f("div",{className:"form-group"},f("label",null,"Phone",f("span",{className:"required"},"*")),f("div",{className:"input-group",style:{marginTop:"10px"}},f("div",{className:"input-group-prepend"},f("span",{className:"input-group-text",style:{padding:"10px"}},f("img",{src:"images\\brands\\flag1.svg",alt:"Flag",width:"24",height:"16"}),"+971")),f(p.Qr,{control:r,name:"mobileNumber",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"tel",className:"form-control",placeholder:"Enter your phone number",value:r,onChange:t})}}))),f("div",{className:"form-group"},f("label",null,"Email",f("span",{className:"required"},"*")),f(p.Qr,{control:r,name:"email",render:function(e){var n=e.field,t=n.onChange,r=n.value;return f("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})}})),f("div",{className:"container",style:{display:"flex",justifyContent:"flex-end"}},f("div",{className:"mt-3"},f("button",{type:"submit",className:"btn btn-dark mr-0"},"Save changes"))))))))))})),S=t(9592),C=t(4931),A=t(471),w=t(2132),P=l.createElement;function U(){var e=(0,o.Z)(["mutation UpdateUserShippingAddressAsDefault($input: updateUserShippingAddressAsDefaultInput!) {\n  updateUserShippingAddressAsDefault(input: $input) {\n    _id\n    message\n  }\n}"]);return U=function(){return e},e}function k(){var e=(0,o.Z)(["mutation RemoveUserShippingAddress($input: UserRemoveShippingAddressInput!) {\n  removeUserShippingAddress(input: $input) {\n    _id\n    message\n  }\n}"]);return k=function(){return e},e}function O(){var e=(0,o.Z)(["query GetUserShippingAddresses {\n  getUserShippingAddresses {\n    address {\n      _id\n      apartment\n      city\n     \n      country\n      email\n      firstname\n      houseNumber\n      mobile\n      postCode\n      streetName\n      suite\n      unit\n      isDefault\n     \n    }\n  }\n}"]);return O=function(){return e},e}var E=(0,m.Ps)(O()),D=(0,m.Ps)(k()),q=(0,m.Ps)(U());var _=(0,c.Z)({ssr:!1})((function(){var e,n,t=(0,l.useState)(!1),r=t[0],o=(t[1],(0,l.useState)(!1)),d=o[0],p=o[1],c=(0,C.a)(E),m=c.data,f=(c.loading,c.error,c.refetch),g=(0,l.useState)(!1),h=g[0],b=g[1],y=(0,l.useState)(null),N=y[0],U=y[1],k=(0,l.useState)(!1),O=(k[0],k[1],(0,v.D)(D)),_=(0,s.Z)(O,1)[0],Z=(0,v.D)(q),T=(0,s.Z)(Z,1)[0];(0,l.useEffect)((function(){f()}),[]);var j=function(){var e=(0,a.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({variables:{input:{_id:n}}});case 2:e.sent,f();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(){var e=(0,a.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({variables:{input:{addressId:n}}});case 2:a=e.sent,f(),w.Am.success(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(r=t.updateUserShippingAddressAsDefault)||void 0===r?void 0:r.message);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return P("main",{className:"main main-test"},P("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav"},P("div",{className:"container"},P("ol",{className:"breadcrumb"},P("li",{className:"breadcrumb-item"},P(u.Z,{href:"/"},"Home")),P("li",{className:"breadcrumb-item active","aria-current":"page"},"addresses")))),P("div",{className:" d-flex flex-column align-items-center",style:{backgroundColor:"#F9F9F9",marginTop:"10px"}},P("ul",{className:"checkout-progress-bar d-flex justify-content-center flex-wrap mb-0"},P("li",{className:""},P(u.Z,{href:"/pages/account"},"My Account")),P("li",{className:"active"},P(u.Z,{href:"/pages/orders"},"Addresses")))),P("div",{className:"container",style:{marginTop:"3rem",borderBottom:"1px solid",borderColor:"#E2E2E2",padding:"2px"}},P("h2",{className:"step-title addresstitle"},"Address")),P(l.Fragment,null,r?P(x,null):d?P(S.ZP,{isEdit:h,addressId:N,onClose:function(){p(!1),f()}}):P("div",{className:"container d-flex justify-content-between flex-column flex-sm-row w-sm-100",style:{gap:"5rem",marginBottom:"75px"}},P("div",{className:"custom-addressbox"},P("div",{className:"p-5"},P("h4",{style:{fontFamily:"Poppins",fontWeight:"600px",fontSize:"24px",lineHeight:"20px"}},"Shipping Addresses"),m&&(null===m||void 0===m||null===(e=m.getUserShippingAddresses)||void 0===e?void 0:e.address.length)>0?null===m||void 0===m||null===(n=m.getUserShippingAddresses)||void 0===n?void 0:n.address.map((function(e,n){var t;return P(l.Fragment,null,P("div",{key:n,style:{padding:"20px 0",display:"flex",lineHeight:"19px"}},P(A.Aph,{style:{fontSize:"40px",color:"#E30613",paddingRight:"20px"}}),P("div",null,P("span",null,null===e||void 0===e?void 0:e.firstname),P("br",null),P("span",null,null===e||void 0===e?void 0:e.houseNumber,", ",null===e||void 0===e?void 0:e.streetName),P("br",null),P("span",null,"PostCode:\xa0",null===e||void 0===e?void 0:e.postCode),P("br",null),P("span",null,null===e||void 0===e?void 0:e.city,", ",null===e||void 0===e?void 0:e.country),P("div",{style:{display:"flex",gap:"35px",color:"black",marginTop:"10px"}},P("button",{className:"editbtn",style:{cursor:"pointer",background:"none",border:"none",fontWeight:"600",color:"black !important"},onClick:function(){p(!0),b(!0),U(null===e||void 0===e?void 0:e._id)}},"Edit"),m&&(null===m||void 0===m||null===(t=m.getUserShippingAddresses)||void 0===t?void 0:t.address.length)>1&&P("button",{className:"editbtn",style:{cursor:"pointer",background:"none",border:"none",fontWeight:"600"},onClick:function(){return j(null===e||void 0===e?void 0:e._id)}},"Remove"),!e.isDefault&&P("button",{style:{cursor:"pointer",background:"none",border:"none",fontWeight:"600"},onClick:function(){return I(null===e||void 0===e?void 0:e._id)}},"Set as default")))))})):P("p",{style:{fontFamily:"Poppins",fontWeight:"400px",fontSize:"14px",lineHeight:"20px"}},"You have not set up this type of address yet."),P("button",{type:"submit",className:"btn  mr-0",style:{border:"1px solid ",marginTop:"20px",width:"152px",height:"43px",padding:"10px",background:"white"},onClick:function(){p(!0)}},"ADD ADDRESSES"))))))}))},1550:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/addresses",function(){return t(3252)}])}},function(e){e.O(0,[955,2439,9774,2888,179],(function(){return n=1550,e(e.s=n);var n}));var n=e.O();_N_E=n}]);