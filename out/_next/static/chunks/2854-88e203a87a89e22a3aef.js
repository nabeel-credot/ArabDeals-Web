(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2854],{4011:function(n,t,r){"use strict";var e=r(6265),a=r(4121),o=r(7261),i=r(7294),s=r(1163),c=r(8216),l=r(2132),u=(r(2679),r(5708)),f=r(2806),p=r(6723),m=r(4922),d=r(8974),y=(r(3699),r(9710)),v=r(1919),g=r(4931),b=i.createElement;function h(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function Z(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,e.Z)(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function k(){var n=(0,o.Z)(["\nquery GetCart {\n  getCart {\n    products {\n      _id\n      productId\n      quantity\n      name\n      shortDescription\n      stock\n      color\n      size\n      price\n      image\n      sellingPrice\n      mrp\n    }\n    grandTotal\n    subTotal\n    deliveryCharge\n  }\n}\n"]);return k=function(){return n},n}function w(){var n=(0,o.Z)(["\n  mutation AddToCart($input: addToCartInput!) {\n    addToCart(input: $input) {\n      message\n    }\n  }\n"]);return w=function(){return n},n}var x=(0,y.Ps)(w()),F=(0,y.Ps)(k());t.Z=(0,c.$j)((function(n){return{wishlist:n.wishlist.list?n.wishlist.list:[]}}),Z(Z(Z({},u.Nw),f.Nw),p.Nw))((function(n){(0,s.useRouter)();var t,r,e=n.adClass,o=void 0===e?"":e,i=(n.link,n.product),c=(0,v.D)(x),u=(0,a.Z)(c,1)[0],f=localStorage.getItem("arabtoken"),p=(0,g.a)(F,{skip:!f,fetchPolicy:"network-only"}),y=(p.data,p.loading,p.error,p.refetch);function h(){var n;return i.price[0]!==i.price[1]&&0===i.variants.length?"-"+(100*(i.price[1]-i.price[0])/i.price[1]).toFixed(0)+"%":!(null===i||void 0===i||null===(n=i.variants)||void 0===n||!n.find((function(n){return null===n||void 0===n?void 0:n.sale_price})))&&"Sale"}return b("div",{className:"product-default media-with-lazy ".concat(o)},b("figure",{style:n.customStyle&&{paddingTop:n.customStyle}},b(d.Z,{href:"/product/default/".concat(null===i||void 0===i?void 0:i._id)},b("div",{className:"lazy-overlay"}),b("span",{style:{display:"flex",justifyContent:"center"}},b("img",{src:null===i||void 0===i||null===(t=i.images[0])||void 0===t?void 0:t.fileURL,style:{aspectRatio:"3/2",objectFit:"contain",marginTop:"30px",mixBlendMode:"multiply"}}))),b("div",{className:"label-group"},i.is_hot?b("div",{className:"product-label label-hot"},"HOT"):"",h()?b("div",{className:"product-label label-sale"},h()):"")),b("div",{className:"product-details",style:Z({alignItems:"left",justifyContent:"left"},n.customdetailStyle&&{marginTop:n.customdetailStyle})},b("div",{className:"category-wrap",style:{display:"flex",marginTop:"0",alignItems:"end",justifyContent:"center"}},b("div",{className:"category-list",style:{width:"50%",fontWeight:600}},b(d.Z,{href:"#",style:{color:"rgba(227, 6, 19, 1)",fontWeight:600}},null===i||void 0===i?void 0:i.categoryNamePath)),b("div",{style:{width:"50%",display:"flex",justifyContent:"end"}},(null===i||void 0===i?void 0:i.stock)>0&&b("div",{className:"custom-addcart",onClick:function(n){i.stock>0&&function(n){if(n.preventDefault(),localStorage.getItem("arabtoken"))try{if(i.stock>0&&!n.currentTarget.classList.contains("disabled")&&u({variables:{input:{productId:i._id,quantity:1}}}))return y(),(0,l.Am)(b(m.Z,{product:{product:i}}))}catch(e){console.log(e)}else{var t=JSON.parse(localStorage.getItem("cart"));if(t){var r=t.findIndex((function(n){return n.productId===i._id}));r>-1?t[r].quantity+=1:t.push({productId:i._id,quantity:1,name:i.productName,shortDescription:i.shortDescription,stock:i.stock,color:i.color,size:i.size,price:i.price,image:i.images[0]&&i.images[0].fileURL,sellingPrice:i.sellingPrice,mrp:i.mrp}),localStorage.setItem("cart",JSON.stringify(t))}else localStorage.setItem("cart",JSON.stringify([{productId:i._id,quantity:1,name:i.productName,shortDescription:i.shortDescription,stock:i.stock,color:i.color,size:i.size,price:i.price,image:i.images[0]&&i.images[0].fileURL,sellingPrice:i.sellingPrice,mrp:i.mrp}]))}(0,l.Am)(b(m.Z,{product:{product:i}}))}(n)},style:{cursor:"pointer"}},b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",viewBox:"0 0 25 24",fill:"black",stroke:"black",className:"plusbtn"},b("path",{d:"M6.51025 12.0156H18.2022","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),b("path",{d:"M12.356 17.8421V6.19043","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}))))),b("h3",{className:"product-title"},b(d.Z,{href:"/product/default/".concat(i._id),style:{fontWeight:"500px",fontSize:"14px"}},i.productName)),b("div",{className:"price-box"},b("span",{className:"omr",style:{fontFamily:"Plus Jakarta Sans"}},"OMR"),b("span",{className:"product-price",style:{fontFamily:"Plus Jakarta Sans",fontWeight:"800px",fontSize:"16px",lineHeight:"15px",marginLeft:"10px"}},null===i||void 0===i?void 0:i.sellingPrice.toFixed(2)),b("span",{className:"old-price",style:{marginLeft:"10px",color:"#777777"}},null===i||void 0===i||null===(r=i.mrp)||void 0===r?void 0:r.toFixed(2)))))}))},9905:function(n,t,r){"use strict";r.d(t,{Ji:function(){return I},lN:function(){return _}});var e=r(7261),a=r(917);function o(){var n=(0,e.Z)(["{\n    0%{\n        transform:scale3d(1,1,1);\n        opacity: 1;\n    }\n    100% {\n        transform:scale3d(1.1,1.1,1);\n        opacity: 1;\n    }\n}"]);return o=function(){return n},n}function i(){var n=(0,e.Z)(["{\n    from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n\n    from {\n        opacity: 0;\n        transform: translate3d(0, 3000px, 0);\n    }\n\n    60% {\n        opacity: 1;\n        transform: translate3d(0, -20px, 0);\n    }\n\n    75% {\n        transform: translate3d(0, 10px, 0);\n    }\n\n    90% {\n        transform: translate3d(0, -5px, 0);\n    }\n\n    to {\n        transform: translate3d(0, 0, 0);\n    }\n}"]);return i=function(){return n},n}function s(){var n=(0,e.Z)(["{\n    0%{\n        -webkit-transform:scale3d(.8,.8,.8);\n        opacity:0;\n        transform:scale3d(.8,.8,.8)\n    }\n    50%{\n        opacity:1\n    }\n}"]);return s=function(){return n},n}function c(){var n=(0,e.Z)([" {\n    0% {\n        animation-timing-function: ease-in;\n        filter: brightness(0%)\n    }\n  \n    to {\n        filter: brightness(100%)\n    }\n}"]);return c=function(){return n},n}function l(){var n=(0,e.Z)(["{\n    0% {\n        animation-timing-function: ease-out;\n        transform: perspective(400px)\n    }\n\n    to {\n        opacity: 0;\n        transform: perspective(400px) rotateY(90deg)\n    }\n}"]);return l=function(){return n},n}function u(){var n=(0,e.Z)(["{\n  0% {\n      animation-timing-function: ease-in;\n      opacity: 0;\n      transform: perspective(400px) rotateY(90deg);\n  }\n\n  to {\n      transform: perspective(400px);\n  }\n}"]);return u=function(){return n},n}function f(){var n=(0,e.Z)(["{\n    0% {\n        animation-timing-function: ease-in;\n        opacity: 0;\n        transform: perspective(400px) rotateX(90deg)\n    }\n  \n    to {\n        transform: perspective(400px)\n    }\n}"]);return f=function(){return n},n}function p(){var n=(0,e.Z)(["{\n    0% {\n        transform: translate3d(100%, 0, 0);\n        visibility: visible\n    }\n  \n    to {\n        transform: translateZ(0)\n    }\n}"]);return p=function(){return n},n}function m(){var n=(0,e.Z)(["{\n    0% {\n        transform: translate3d(-100%, 0, 0);\n        visibility: visible\n    }\n  \n    to {\n        transform: translateZ(0)\n    }\n}"]);return m=function(){return n},n}function d(){var n=(0,e.Z)(["{\n    0% {\n        transform: translate3d(0, -100%, 0);\n        visibility: visible\n    }\n\n    to {\n        transform: translateZ(0)\n    }\n}"]);return d=function(){return n},n}function y(){var n=(0,e.Z)(["{\n    0% {\n        transform: translate3d(0, 100%, 0);\n        visibility: visible\n    }\n\n    to {\n        transform: translateZ(0)\n    }\n}"]);return y=function(){return n},n}function v(){var n=(0,e.Z)(["{\n    from {\n        transform: translate(100%,0)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return v=function(){return n},n}function g(){var n=(0,e.Z)(["{\n    from {\n        transform: translate(0,-100%)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return g=function(){return n},n}function b(){var n=(0,e.Z)(["{\n    from {\n        transform: translate(-100%,0)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return b=function(){return n},n}function h(){var n=(0,e.Z)(["{\n    from {\n        transform: translate(0,100%)\n    }\n  \n    to {\n        transform: translate(0,0)\n    }\n}"]);return h=function(){return n},n}function Z(){var n=(0,e.Z)(["{\n    from {\n        opacity:1;\n        transform:scale(.2)\n    }\n  \n    to {\n        opacity:0;\n        transform:scale(1)\n    }\n}"]);return Z=function(){return n},n}function k(){var n=(0,e.Z)(["{\n    from {\n        opacity: 1;\n        filter: grayscale(0);\n    }\n    15% {\n        filter: grayscale(100%);\n    }\n    to {\n        opacity: .0;\n        filter: grayscale(100%);\n    }\n}"]);return k=function(){return n},n}function w(){var n=(0,e.Z)(["{\n    from {\n        opacity: 0;\n        filter: blur(20px);\n        transform: scale(1.2);\n    }\n    to {\n        opacity: 1;\n        filter: blur(0);\n        transform: none \n    }\n}"]);return w=function(){return n},n}function x(){var n=(0,e.Z)(["\nfrom {\n    opacity: 0;\n    transform: translate(0,-50px);\n    transform-origin: 0 0;\n}\n\nto {\n    opacity: 1;\n    transform: none\n}"]);return x=function(){return n},n}function F(){var n=(0,e.Z)(["\n0% {\n    -webkit-transform: translate3d( 0, 100%, 0 );\n    opacity: 0;\n    transform: translate3d( 0, 100 %, 0 )\n}\n\nto {\n    -webkit-transform: translateZ( 0 );\n    opacity: 1;\n    transform: translateZ( 0 )\n}"]);return F=function(){return n},n}function N(){var n=(0,e.Z)(["\nfrom {\n    opacity: 0;\n    transform: translate(0,50px);\n    transform-origin: 0 0;\n}\nto {\n    opacity:1;\n    transform:none\n}"]);return N=function(){return n},n}function O(){var n=(0,e.Z)(["\n0% {\n    -webkit-transform: translate3d(-100%,0,0);\n    opacity: 0;\n    transform: translate3d(-100%,0,0)\n}\n\nto {\n    -webkit-transform: translateZ(0);\n    opacity: 1;\n    transform: translateZ(0)\n}"]);return O=function(){return n},n}function P(){var n=(0,e.Z)(["{\n    from {\n        opacity: 0;\n        transform: translate(50px,0);\n        transform-origin: 0 0;\n    }\n    to {\n        opacity: 1;\n        transform: none\n    }\n}"]);return P=function(){return n},n}function j(){var n=(0,e.Z)(["\n0% {\n    -webkit-transform: translate3d(100%,0,0);\n    opacity: 0;\n    transform: translate3d(100%,0,0)\n}\n\nto {\n    -webkit-transform: translateZ(0);\n    opacity: 1;\n    transform: translateZ(0)\n}"]);return j=function(){return n},n}function S(){var n=(0,e.Z)(["\nfrom {\n  opacity: 0;\n  transform: translate(-50px,0);\n  transform-origin: 0 0;\n}\n\nto {\n  opacity: 1;\n  transform: none\n}"]);return S=function(){return n},n}function C(){var n=(0,e.Z)(["{\n    from {\n        opacity:0;\n    }\n  \n    to {\n        opacity:1;\n    }\n}"]);return C=function(){return n},n}var I=(0,a.F4)(C()),_=((0,a.F4)(S()),(0,a.F4)(j()),(0,a.F4)(P()),(0,a.F4)(O()),(0,a.F4)(N()));(0,a.F4)(F()),(0,a.F4)(x()),(0,a.F4)(w()),(0,a.F4)(k()),(0,a.F4)(Z()),(0,a.F4)(h()),(0,a.F4)(b()),(0,a.F4)(g()),(0,a.F4)(v()),(0,a.F4)(y()),(0,a.F4)(d()),(0,a.F4)(m()),(0,a.F4)(p()),(0,a.F4)(f()),(0,a.F4)(u()),(0,a.F4)(l()),(0,a.F4)(c()),(0,a.F4)(s()),(0,a.F4)(i()),(0,a.F4)(o())}}]);