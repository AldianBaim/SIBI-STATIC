(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d27b7a2c"],{"26a3":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("div",{attrs:{id:"dashboard-wrapper"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-8"},[e("Sidebar")],1),e("div",{staticClass:"col-lg-8"},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1)])])])])},i=[],r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"dashboard-sidebar"}},[e("h3",[a._v("Dasbor")]),e("div",[e("span",[a._v("Halo, "),e("b",[a._v(a._s(a.username))])])]),e("div",[e("small",[a._v(a._s(a.roleName))])]),e("ul",{staticClass:"mt-4"},[e("li",{staticClass:"active"},[e("router-link",{attrs:{to:"/user/home"}},[e("a",[e("i",{staticClass:"fas fa-home fa-fw"}),a._v(" Beranda")])])],1),"Penerbit"!=a.roleName?e("li",[e("router-link",{attrs:{to:"/user/profil"}},[e("a",[e("i",{staticClass:"fas fa-fw fa-user"}),a._v(" Profil")])])],1):e("li",[e("router-link",{attrs:{to:"/user/profil/publisher"}},[e("a",[e("i",{staticClass:"fas fa-fw fa-user"}),a._v(" Profil")])])],1),e("li",[e("router-link",{attrs:{to:"/user/portfolio"}},[e("a",[e("i",{staticClass:"fa fa-camera-retro fa-fw"}),a._v(" Portfolio")])])],1),e("li",[e("router-link",{attrs:{to:"/user/lapor"}},[e("a",[e("i",{staticClass:"fa fa-exclamation-circle fa-fw"}),a._v(" Lapor Buku")])])],1),e("li",[e("router-link",{attrs:{to:"/user/unduh"}},[e("a",[e("i",{staticClass:"fa fa-download fa-fw"}),a._v(" Unduh Buku")])])],1),e("span",{directives:[{name:"show",rawName:"v-show",value:a.checkRole,expression:"checkRole"}]},[a.showDaftarBuku?e("li",[e("a",{attrs:{href:"https://bntp.buku.kemdikbud.go.id/daftar/buku?id_penerbit="+a.user_id+"&penerbit="+a.username+"&email="+a.email}},[e("i",{staticClass:"fa fa-book fa-fw"}),a._v(" Daftarkan Buku")])]):e("li",[a._m(0)])])]),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[a._m(1),e("div",{staticClass:"modal-body"},[e("p",[a._v(" Silahkan lengkapi data profil penerbit terlebih dahulu, terutama berkas-berkas untuk mendaftar penilaian buku. ")]),e("router-link",{attrs:{to:"/user/profil/publisher"}},[e("a",{attrs:{type:"button","data-dismiss":"modal"}},[e("i",{staticClass:"fas fa-fw fa-edit"}),a._v(" Lengkapi profil")])])],1),a._m(2)])])])])},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{attrs:{href:"","data-toggle":"modal","data-target":"#exampleModal"}},[e("i",{staticClass:"fa fa-book fa-fw"}),a._v(" Daftarkan Buku")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a._v("Penilaian Buku")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[a._v(" Close ")])])}],o=e("bc3a"),n=e.n(o),u={name:"Sidebar",data:function(){return{user_id:"",email:"",username:"",roleName:"",showDaftarBuku:!1,checkRole:!1}},created:function(){var a=this,t=localStorage.getItem("user"),e=JSON.parse(t);this.user_id=e.user_id,this.username=e.fullname,this.email=e.email,this.roleName=e.role_name,"Penerbit"==this.roleName&&(this.checkRole=!0);var s=localStorage.getItem("token");n.a.get("https://api.buku.kemdikbud.go.id/api/user/getPublisherProfile",{headers:{Authorization:s}}).then((function(t){""!=t.data.result.siup?"penerbit"==t.data.result.role_name&&(a.showDaftarBuku=!0):a.showDaftarBuku=!1}))}},d=u,c=(e("cd11"),e("2877")),f=Object(c["a"])(d,r,l,!1,null,"98d98bb0",null),m=f.exports,b={components:{Sidebar:m},beforeCreate:function(){var a=localStorage.getItem("user");a||this.$router.push("/login")}},h=b,p=(e("7e1a"),Object(c["a"])(h,s,i,!1,null,null,null));t["default"]=p.exports},"4a42":function(a,t,e){},"7e1a":function(a,t,e){"use strict";e("db8f")},cd11:function(a,t,e){"use strict";e("4a42")},db8f:function(a,t,e){}}]);
//# sourceMappingURL=chunk-d27b7a2c.a2226e86.js.map