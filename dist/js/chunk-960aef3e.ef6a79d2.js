(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-960aef3e"],{"26a3":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("div",{attrs:{id:"dashboard-wrapper"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-8"},[e("Sidebar")],1),e("div",{staticClass:"col-lg-8"},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1)])])])])},s=[],i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"dashboard-sidebar"}},[e("h3",[a._v("Dasbor")]),e("div",[e("span",[a._v("Halo, "),e("b",[a._v(a._s(a.username))])])]),a._m(0),e("ul",{staticClass:"mt-4"},[e("li",{staticClass:"active"},[e("router-link",{attrs:{to:"/user/home"}},[e("a",[e("i",{staticClass:"fas fa-home fa-fw"}),a._v(" Beranda")])])],1),e("li",[e("router-link",{attrs:{to:"/user/profil"}},[e("a",[e("i",{staticClass:"fas fa-fw fa-user"}),a._v(" Profil")])])],1),e("li",[e("router-link",{attrs:{to:"/user/portfolio"}},[e("a",[e("i",{staticClass:"fa fa-camera-retro fa-fw"}),a._v(" Portfolio")])])],1),e("li",[e("router-link",{attrs:{to:"/user/lapor"}},[e("a",[e("i",{staticClass:"fa fa-exclamation-circle fa-fw"}),a._v(" Lapor Buku")])])],1),e("li",[e("router-link",{attrs:{to:"/user/unduh"}},[e("a",[e("i",{staticClass:"fa fa-download fa-fw"}),a._v(" Unduh Buku")])])],1)])])},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("small",[a._v("Penerbit")])])}],n={name:"Sidebar",data:function(){return{username:""}},created:function(){var a=localStorage.getItem("user"),t=JSON.parse(a);this.username=t.fullname}},o=n,u=e("2877"),c=Object(u["a"])(o,i,l,!1,null,null,null),f=c.exports,d={components:{Sidebar:f},beforeCreate:function(){var a=localStorage.getItem("user");a||this.$router.push("/login")}},v=d,m=(e("7e1a"),Object(u["a"])(v,r,s,!1,null,null,null));t["default"]=m.exports},"7e1a":function(a,t,e){"use strict";e("db8f")},db8f:function(a,t,e){}}]);
//# sourceMappingURL=chunk-960aef3e.ef6a79d2.js.map