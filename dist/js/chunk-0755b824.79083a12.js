<<<<<<< HEAD:dist/js/chunk-005b70e4.e579b855.js
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-005b70e4"],{"0bc7":function(t,e,a){t.exports=a.p+"img/loading-2.fe3e38fb.gif"},1145:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("section",{staticClass:"mt-4",attrs:{id:"content"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"mb-4"},[t._v(" Pusat Kurikulum dan Perbukuan bekerja sama dengan lembaga sertifikasi profesi melaksanakan sertifikasi profesi terhadap penulis dan penyunting baik yang berada di lingkungan Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi maupun penulis dan penyunting yang berasal dari instansi lain atau masyarakat secara umum yang juga berkompeten. ")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-3"},[i("div",{staticClass:"sidebar"},[i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.name,expression:"filter.name"}],ref:"input",staticClass:"form-control",attrs:{type:"text",id:"input-name",placeholder:"Cari nama"},domProps:{value:t.filter.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterSearch()},input:function(e){e.target.composing||t.$set(t.filter,"name",e.target.value)}}})]),i("div",{staticClass:"mb-3"},[t._v("Filter berdasarkan :")]),i("div",[i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.penulis,expression:"filter.penulis"}],staticClass:"custom-control-input input-role",attrs:{type:"checkbox",value:"Penulis",id:"role-name-1"},domProps:{checked:Array.isArray(t.filter.penulis)?t._i(t.filter.penulis,"Penulis")>-1:t.filter.penulis},on:{change:function(e){var a=t.filter.penulis,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r="Penulis",l=t._i(a,r);i.checked?l<0&&t.$set(t.filter,"penulis",a.concat([r])):l>-1&&t.$set(t.filter,"penulis",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.filter,"penulis",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"role-name-1"}},[t._v("Penulis")])]),i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.penelaah,expression:"filter.penelaah"}],staticClass:"custom-control-input input-role",attrs:{type:"checkbox",value:"Penelaah",id:"role-name-2"},domProps:{checked:Array.isArray(t.filter.penelaah)?t._i(t.filter.penelaah,"Penelaah")>-1:t.filter.penelaah},on:{change:function(e){var a=t.filter.penelaah,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r="Penelaah",l=t._i(a,r);i.checked?l<0&&t.$set(t.filter,"penelaah",a.concat([r])):l>-1&&t.$set(t.filter,"penelaah",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.filter,"penelaah",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"role-name-2"}},[t._v("Penelaah")])]),i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.editor,expression:"filter.editor"}],staticClass:"custom-control-input input-role",attrs:{type:"checkbox",value:"Editor",id:"role-name-3"},domProps:{checked:Array.isArray(t.filter.editor)?t._i(t.filter.editor,"Editor")>-1:t.filter.editor},on:{change:function(e){var a=t.filter.editor,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r="Editor",l=t._i(a,r);i.checked?l<0&&t.$set(t.filter,"editor",a.concat([r])):l>-1&&t.$set(t.filter,"editor",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.filter,"editor",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"role-name-3"}},[t._v("Editor")])]),i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.ilustrator,expression:"filter.ilustrator"}],staticClass:"custom-control-input input-role",attrs:{type:"checkbox",value:"Ilustrator",id:"role-name-4"},domProps:{checked:Array.isArray(t.filter.ilustrator)?t._i(t.filter.ilustrator,"Ilustrator")>-1:t.filter.ilustrator},on:{change:function(e){var a=t.filter.ilustrator,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r="Ilustrator",l=t._i(a,r);i.checked?l<0&&t.$set(t.filter,"ilustrator",a.concat([r])):l>-1&&t.$set(t.filter,"ilustrator",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.filter,"ilustrator",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"role-name-4"}},[t._v("Ilustrator")])])]),i("div",{staticClass:"mt-4"},[i("button",{staticClass:"btn btn-primary btn-filter mb-2 mr-1",attrs:{type:"button"},on:{click:function(e){return t.filterSearch()}}},[t._v(" Terapkan ")]),i("button",{staticClass:"btn btn-warning btn-md btn-reset",attrs:{type:"button"},on:{click:t.fetchAll}},[i("span",{staticClass:"fa fa-retweet"}),t._v(" Reset ")])])])]),i("div",{staticClass:"col-md-9"},[i("div",{staticClass:"mt-3 mb-3",attrs:{id:"result"}},[t._v(" Menampilkan "+t._s(t.$store.state.perPage)+" dari "+t._s(t.$store.state.totalRows)+" hasil ")]),t.$store.state.loadPage?i("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"400px"}},[i("img",{staticClass:"img-fluid",attrs:{src:a("0bc7"),alt:""}})]):i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-striped result-table table-responsive",staticStyle:{display:"table"},attrs:{"data-pagination":"true"}},[t._m(1),i("tbody",t._l(t.certifications,(function(e,a){return i("tr",{key:a},[i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.organization))]),i("td",[t._v(t._s(e.assessor))]),i("td",[t._v(t._s(e.created_at))])])})),0)])]),0==t.$store.state.loadPage?i("div",{staticClass:"text-center mt-4"},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.checkTotal,expression:"checkTotal"}],staticClass:"btn btn-primary",on:{click:function(e){return t.loadMore()}}},[i("span",{staticClass:"fa fa-filter"}),t._v(" Load More ")]),i("button",{staticClass:"btn btn-outline-warning btn-md btn-reset ml-1",attrs:{type:"button"},on:{click:t.fetchAll}},[i("span",{staticClass:"fa fa-retweet"}),t._v(" Reset ")])]):t._e()])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"top-bar"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Daftar pelaku perbukuan tersertifikasi")]),a("div",{staticClass:"col"},[a("div",{staticClass:"text-right bread"},[a("i",{staticClass:"fas fa-home"}),t._v(" Beranda > Pembinaan ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Nama")]),a("th",{attrs:{scope:"col"}},[t._v("Organisasi")]),a("th",{attrs:{scope:"col"}},[t._v("Asesor")]),a("th",{attrs:{scope:"col"}},[t._v("Tanggal Sertifikasi")])])])}],r=a("5530"),l=(a("4de4"),a("b0c0"),a("2f62")),n={data:function(){return{amount:1,filter:{name:"",penulis:"",penelaah:"",editor:"",ilustrator:""}}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["certifications"])),{},{checkTotal:function(){return this.$store.state.perPage!=this.$store.state.totalRows}}),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["fetchAllCertification","filterCertification","fetchLoadMoreCertification"])),{},{fetchAll:function(){var t=this;this.fetchAllCertification(),this.$nextTick((function(){t.$refs.input.scrollIntoView()}))},filterSearch:function(){1==this.filter.penulis?this.filter.penulis="Penulis":1==this.filter.penelaah?this.filter.penelaah="Penelaah":1==this.filter.editor?this.filter.editor="Editor":1==this.filter.ilustrator?this.filter.ilustrator="Ilustrator":1==this.filter.name&&(this.filter.name="Name"),this.filterCertification(this.filter)},loadMore:function(){var t=this;this.amount++,this.fetchLoadMoreCertification(this.amount),this.$nextTick((function(){t.$refs.input.scrollIntoView()}))}}),created:function(){this.fetchAllCertification()}},o=n,c=a("2877"),u=Object(c["a"])(o,i,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-005b70e4.e579b855.js.map
=======
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0755b824"],{"0bc7":function(t,e,a){t.exports=a.p+"img/loading-2.fe3e38fb.gif"},1145:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("section",{staticClass:"mt-4",attrs:{id:"content"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"mb-4"},[t._v(" Pusat Kurikulum dan Perbukuan bekerja sama dengan lembaga sertifikasi profesi melaksanakan sertifikasi profesi terhadap penulis dan penyunting baik yang berada di lingkungan Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi maupun penulis dan penyunting yang berasal dari instansi lain atau masyarakat secara umum yang juga berkompeten. ")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-3"},[i("div",{staticClass:"sidebar"},[i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.name,expression:"filter.name"}],ref:"input",staticClass:"form-control",attrs:{type:"text",id:"input-name",placeholder:"Cari nama"},domProps:{value:t.filter.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterSearch()},input:function(e){e.target.composing||t.$set(t.filter,"name",e.target.value)}}})]),i("div",{staticClass:"mb-3"},[t._v("Filter berdasarkan :")]),i("div",[i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.penulis,expression:"filter.penulis"}],staticClass:"custom-control-input input-role",attrs:{type:"checkbox",value:"Penulis",id:"role-name-1"},domProps:{checked:Array.isArray(t.filter.penulis)?t._i(t.filter.penulis,"Penulis")>-1:t.filter.penulis},on:{change:function(e){var a=t.filter.penulis,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r="Penulis",l=t._i(a,r);i.checked?l<0&&t.$set(t.filter,"penulis",a.concat([r])):l>-1&&t.$set(t.filter,"penulis",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.filter,"penulis",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"role-name-1"}},[t._v("Penulis")])]),i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.penelaah,expression:"filter.penelaah"}],staticClass:"custom-control-input input-role",attrs:{type:"checkbox",value:"Penelaah",id:"role-name-2"},domProps:{checked:Array.isArray(t.filter.penelaah)?t._i(t.filter.penelaah,"Penelaah")>-1:t.filter.penelaah},on:{change:function(e){var a=t.filter.penelaah,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r="Penelaah",l=t._i(a,r);i.checked?l<0&&t.$set(t.filter,"penelaah",a.concat([r])):l>-1&&t.$set(t.filter,"penelaah",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.filter,"penelaah",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"role-name-2"}},[t._v("Penelaah")])]),i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.editor,expression:"filter.editor"}],staticClass:"custom-control-input input-role",attrs:{type:"checkbox",value:"Editor",id:"role-name-3"},domProps:{checked:Array.isArray(t.filter.editor)?t._i(t.filter.editor,"Editor")>-1:t.filter.editor},on:{change:function(e){var a=t.filter.editor,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r="Editor",l=t._i(a,r);i.checked?l<0&&t.$set(t.filter,"editor",a.concat([r])):l>-1&&t.$set(t.filter,"editor",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.filter,"editor",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"role-name-3"}},[t._v("Editor")])]),i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.ilustrator,expression:"filter.ilustrator"}],staticClass:"custom-control-input input-role",attrs:{type:"checkbox",value:"Ilustrator",id:"role-name-4"},domProps:{checked:Array.isArray(t.filter.ilustrator)?t._i(t.filter.ilustrator,"Ilustrator")>-1:t.filter.ilustrator},on:{change:function(e){var a=t.filter.ilustrator,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r="Ilustrator",l=t._i(a,r);i.checked?l<0&&t.$set(t.filter,"ilustrator",a.concat([r])):l>-1&&t.$set(t.filter,"ilustrator",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.filter,"ilustrator",s)}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"role-name-4"}},[t._v("Ilustrator")])])]),i("div",{staticClass:"mt-4"},[i("button",{staticClass:"btn btn-primary btn-filter mb-2 mr-1",attrs:{type:"button"},on:{click:function(e){return t.filterSearch()}}},[t._v(" Terapkan ")]),i("button",{staticClass:"btn btn-warning btn-md btn-reset",attrs:{type:"button"},on:{click:t.fetchAll}},[i("span",{staticClass:"fa fa-retweet"}),t._v(" Reset ")])])])]),i("div",{staticClass:"col-md-9"},[i("div",{staticClass:"mt-3 mb-3",attrs:{id:"result"}},[t._v(" Menampilkan "+t._s(t.$store.state.perPage)+" dari "+t._s(t.$store.state.totalRows)+" hasil ")]),t.$store.state.loadPage?i("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"400px"}},[i("img",{staticClass:"img-fluid",attrs:{src:a("0bc7"),alt:""}})]):i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-striped result-table table-responsive",staticStyle:{display:"table"},attrs:{"data-pagination":"true"}},[t._m(1),i("tbody",t._l(t.certifications,(function(e,a){return i("tr",{key:a},[i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.organization))]),i("td",[t._v(t._s(e.assessor))]),i("td",[t._v(t._s(e.created_at))])])})),0)])]),0==t.$store.state.loadPage?i("div",{staticClass:"text-center mt-4"},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.checkTotal,expression:"checkTotal"}],staticClass:"btn btn-primary",on:{click:function(e){return t.loadMore()}}},[i("span",{staticClass:"fa fa-filter"}),t._v(" Load More ")]),i("button",{staticClass:"btn btn-outline-warning btn-md btn-reset ml-1",attrs:{type:"button"},on:{click:t.fetchAll}},[i("span",{staticClass:"fa fa-retweet"}),t._v(" Reset ")])]):t._e()])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"top-bar"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("Daftar pelaku perbukuan tersertifikasi")]),a("div",{staticClass:"col"},[a("div",{staticClass:"text-right bread"},[a("i",{staticClass:"fas fa-home"}),t._v(" Beranda > Pembinaan ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Nama")]),a("th",{attrs:{scope:"col"}},[t._v("Organisasi")]),a("th",{attrs:{scope:"col"}},[t._v("Asesor")]),a("th",{attrs:{scope:"col"}},[t._v("Tanggal Sertifikasi")])])])}],r=a("5530"),l=(a("4de4"),a("b0c0"),a("2f62")),n={data:function(){return{amount:1,filter:{name:"",penulis:"",penelaah:"",editor:"",ilustrator:""}}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["certifications"])),{},{checkTotal:function(){return this.$store.state.perPage!=this.$store.state.totalRows}}),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["fetchAllCertification","filterCertification","fetchLoadMoreCertification"])),{},{fetchAll:function(){var t=this;this.fetchAllCertification(),this.$nextTick((function(){t.$refs.input.scrollIntoView()}))},filterSearch:function(){1==this.filter.penulis?this.filter.penulis="Penulis":1==this.filter.penelaah?this.filter.penelaah="Penelaah":1==this.filter.editor?this.filter.editor="Editor":1==this.filter.ilustrator?this.filter.ilustrator="Ilustrator":1==this.filter.name&&(this.filter.name="Name"),this.filterCertification(this.filter)},loadMore:function(){var t=this;this.amount++,this.fetchLoadMoreCertification(this.amount),this.$nextTick((function(){t.$refs.input.scrollIntoView()}))}}),created:function(){this.fetchAllCertification()}},o=n,c=a("2877"),u=Object(c["a"])(o,i,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0755b824.79083a12.js.map
>>>>>>> 752de142050bb30ce2e3d81a29262aae4033754d:dist/js/chunk-0755b824.79083a12.js