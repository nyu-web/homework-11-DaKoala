(function(t){function e(e){for(var a,i,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)i=c[f],r[i]&&p.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b0a":function(t,e,n){},3766:function(t,e,n){"use strict";var a=n("c56a"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,r,o,!1,null,null,null);u.options.__file="App.vue";var s=u.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navigation")],1)},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("router-link",{staticClass:"nav__item",class:{"nav__item--active":1===t.path.length},attrs:{to:"/"}},[t._v("\n        Home\n    ")]),n("router-link",{staticClass:"nav__item",class:{"nav__item--active":t.path.indexOf("about")>-1},attrs:{to:"/about"}},[t._v("\n        About\n    ")]),n("router-link",{staticClass:"nav__item",class:{"nav__item--active":t.path.indexOf("projects")>-1},attrs:{to:"/projects"}},[t._v("\n        Projects\n    ")]),n("router-link",{staticClass:"nav__item",class:{"nav__item--active":t.path.indexOf("blog")>-1},attrs:{to:"/blog"}},[t._v("\n        Blog\n    ")]),n("router-link",{staticClass:"nav__item",class:{"nav__item--active":t.path.indexOf("contact")>-1},attrs:{to:"/contact"}},[t._v("\n        Contact\n    ")])],1)},_=[],d={name:"Navigation",data:function(){return{path:this.$route.path}}},b=d,h=(n("3766"),Object(i["a"])(b,v,_,!1,null,"cc5d1514",null));h.options.__file="Navigation.vue";var m=h.exports,g={name:"home",components:{Navigation:m}},O=g,y=(n("bd93"),Object(i["a"])(O,f,p,!1,null,"1d0b0ca8",null));y.options.__file="Home.vue";var j=y.exports;a["a"].use(l["a"]);var w=new l["a"]({routes:[{path:"/",name:"home",component:j}]}),x=n("2f62");a["a"].use(x["a"]);var k=new x["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:w,store:k,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},bd93:function(t,e,n){"use strict";var a=n("1b0a"),r=n.n(a);r.a},c56a:function(t,e,n){}});
//# sourceMappingURL=app.26847eb5.js.map