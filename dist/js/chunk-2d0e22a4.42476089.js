(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e22a4"],{"7e11":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard-content"}},[t.$store.state.messageStatusReport?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Laporan berhasil dibuat "),a("i",{staticClass:"fa fa-check"}),t._m(0)]):t._e(),a("div",{staticClass:"text-right mb-4"},[t._v(t._s(t.$store.state.today))]),a("div",{staticClass:"mt-4"},[a("form",{staticClass:"form",attrs:{"accept-charset":"utf-8"},on:{submit:function(e){return e.preventDefault(),t.sendReport()}}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Buku")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.report.slug,expression:"report.slug"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.report,"slug",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Pilih ..")]),t._l(t.books,(function(e,r){return a("option",{key:r,domProps:{value:e.slug}},[t._v(" "+t._s(e.title)+" ")])}))],2),a("div",{staticClass:"help-block with-errors"})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Kategori")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.report.category,expression:"report.category"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.report,"category",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Pilih Kategori")]),a("option",{attrs:{value:"Salah Ketik"}},[t._v("Salah Ketik")]),a("option",{attrs:{value:"Pornografi"}},[t._v("Pornografi")]),a("option",{attrs:{value:"Sara"}},[t._v("Sara")]),a("option",{attrs:{value:"Lain-lain"}},[t._v("Lain-lain")])]),a("div",{staticClass:"help-block with-errors"})]),a("div",{staticClass:"single-form form-group"},[a("label",[t._v("Pesan")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.report.message,expression:"report.message"}],staticClass:"form-control",attrs:{placeholder:"Pesan","data-error":"Mohon tulis pesan Anda.",required:"required"},domProps:{value:t.report.message},on:{input:function(e){e.target.composing||t.$set(t.report,"message",e.target.value)}}}),a("div",{staticClass:"help-block with-errors"})]),a("div",{staticClass:"text-right"},[t.$store.state.loadPage?a("button",{staticClass:"btn btn-primary"},[a("span",{staticClass:"spinner-border spinner-border-sm"}),t._v(" Sedang diproses.. ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Kirim")])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],o=a("5530"),i=a("2f62"),l={name:"Lapor",data:function(){return{report:{message:"",slug:"",category:""}}},computed:Object(o["a"])({},Object(i["c"])(["books"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["fetchAllBook","sendReportBook"])),{},{sendReport:function(){var t=this;this.sendReportBook(this.report).then((function(e){"success"==e.data.status&&(t.report.message="",t.report.slug="",t.report.category="")}))}}),beforeCreate:function(){var t=localStorage.getItem("user");t||this.$router.push("/login")},created:function(){this.fetchAllBook()}},n=l,c=a("2877"),u=Object(c["a"])(n,r,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e22a4.42476089.js.map