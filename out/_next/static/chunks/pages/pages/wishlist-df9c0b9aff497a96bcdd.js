(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6436],{2023:function(t,e,n){"use strict";n.r(e);var r=n(6265),s=n(809),a=n.n(s),c=n(2447),o=n(4121),i=n(7261),l=n(7294),u=n(8216),d=n(2679),p=n(8974),m=n(5708),f=n(2806),h=n(6723),v=n(9710),b=n(1919),g=n(4931),w=n(2559),N=(n(4922),n(2132)),y=n(4593),k=n(1163),P=l.createElement;function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(){var t=(0,i.Z)(["\n  mutation RemoveFromWishList($input: RemoveFromWishListInput!) {\n    removeFromWishList(input: $input) {\n      message\n    }\n  }\n"]);return I=function(){return t},t}function Z(){var t=(0,i.Z)(["\n  query GetCart {\n    getCart {\n      products {\n        _id\n        productId\n        quantity\n        name\n        shortDescription\n        stock\n        color\n        size\n        price\n        image\n        sellingPrice\n        mrp\n      }\n      grandTotal\n      subTotal\n      deliveryCharge\n    }\n  }\n"]);return Z=function(){return t},t}function _(){var t=(0,i.Z)(["\n  mutation AddToCart($input: addToCartInput!) {\n    addToCart(input: $input) {\n      message\n    }\n  }\n"]);return _=function(){return t},t}function j(){var t=(0,i.Z)(["\n  query Products {\n    getWishListProducts {\n      products {\n        image\n        productId\n        productName\n        sellingPrice\n        shortDescription\n      }\n    }\n  }\n"]);return j=function(){return t},t}var C=(0,v.Ps)(j()),D=(0,v.Ps)(_()),E=(0,v.Ps)(Z()),S=(0,v.Ps)(I());e.default=(0,w.Z)({ssr:!1})((0,u.$j)((function(t){return{wishlist:t.wishlist.list?t.wishlist.list:[]}}),x(x(x({},m.Nw),f.Nw),h.Nw))((function(t){var e=(0,k.useRouter)(),n=(t.wishlist,t.removeFromWishlist,t.showQuickView,(0,l.useState)(0)),r=n[0],s=(n[1],(0,l.useState)([])),i=s[0],u=s[1],m=(0,b.D)(D),f=(0,o.Z)(m,1)[0],h=(0,b.D)(S),v=(0,o.Z)(h,1)[0],w=localStorage.getItem("arabtoken"),O=(0,g.a)(E,{skip:!w}),x=(O.data,O.loading,O.error,O.refetch),I=(0,g.a)(C,{skip:!w,fetchPolicy:"network-only"}),Z=I.data,_=I.loading,j=I.error,T=I.refetch;(0,l.useEffect)((function(){j?console.log(j):i&&u((null===Z||void 0===Z?void 0:Z.getWishListProducts.products)||[])}),[Z]);var W=function(){var t=(0,c.Z)(a().mark((function t(e,n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!n){t.next=8;break}return t.next=4,v({variables:{input:{productId:n.productId}}});case 4:if(!t.sent){t.next=8;break}return T(),t.abrupt("return",N.Am.success("Successfully product removed to cart"));case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}(),A=function(){var t=(0,c.Z)(a().mark((function t(e,n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),t.prev=1,!n){t.next=10;break}return t.next=5,f({variables:{input:{productId:n.productId,quantity:1}}});case 5:if(!t.sent){t.next=10;break}return x(),T(),t.abrupt("return",N.Am.success("Successfully product added to cart"));case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}();return P(l.Fragment,null,P(y.q,null,P("title",null,"Wishlist | Arab Deals")),P("main",{className:"main"},P("div",{className:"page-header"},P("div",{className:"container d-flex flex-column align-items-center"},P("h1",null,"Wishlist"))),P("div",{className:"container"},P("div",{className:"success-alert"},1===r?P("p",null,"Product successfully removed."):"",2===r?P("p",null,"Product added to cart successfully."):""),_&&P("div",null,"loading..."),_||0!==(null===i||void 0===i?void 0:i.length)?"":P("div",{className:"wishlist-table-container"},P("div",{className:"table table-wishlist mb-0"},P("div",{className:"wishlist-empty-page text-center"},P("i",{className:"far fa-heart"}),P("p",null,"No products added to the wishlist"),P(p.Z,{href:"/shop",className:"btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto"},"go shop"," ")))),!_&&i.length?P("div",{className:"wishlist-table-container"},P("table",{className:"table table-wishlist mb-0"},P("thead",null,P("tr",null,P("th",{className:"thumbnail-col"},"Product"),P("th",{className:"product-col"}),P("th",{className:"price-col"},"Price"),P("th",{className:"status-col"},"Stock Status"),P("th",{className:"action-col"},"Actions"))),P("tbody",null,null===i||void 0===i?void 0:i.map((function(t,n){var r;return P("tr",{key:"wishlist-item"+n,className:"product-row",style:{borderBottom:"1px solid #e7e7e7"}},P("td",{className:"media-with-lazy"},P("figure",{className:"product-image-container"},P(p.Z,{href:"/product/default/".concat(null===t||void 0===t?void 0:t.productId),className:"product-image"},P(d.LazyLoadImage,{alt:"product",src:t.image,threshold:500,width:"80",height:"80"})),P("a",{className:"btn-remove icon-cancel",title:"Remove Product",onClick:function(e){return W(e,t)}}))),P("td",null,P("h5",{className:"product-title"},P(p.Z,{href:"/product/default/".concat(t.productId)},null===t||void 0===t?void 0:t.productName))),P("td",{style:{color:"black"}},P("div",{className:"price-box"},P("span",{className:"product-price",style:{color:"#000"}},"OMR "+(null===t||void 0===t?void 0:t.sellingPrice)))),P("td",null,P("span",{className:"stock-status"},t.stock<=0?"Out of stock":"In stock")),P("td",{className:"action"},P("div",{className:"btn btn-quickview mt-1 mt-md-0",title:"View",style:{border:"1px solid"},onClick:function(n){return e.push("/product/default/".concat(t.productId))}},"View"),(null===t||void 0===t||null===(r=t.variants)||void 0===r?void 0:r.length)>0?P(p.Z,{className:"btn btn-dark btn-add-cart product-type-simple btn-shop",href:"/product/default/".concat(t.slug)},"select options"):P("button",{className:"btn btn-dark btn-add-cart product-type-simple btn-shop hoverbtn",onClick:function(e){A(e,t)}},"ADD TO CART")))}))))):"")))})))},9855:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/wishlist",function(){return n(2023)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=9855,t(t.s=e);var e}));var e=t.O();_N_E=e}]);