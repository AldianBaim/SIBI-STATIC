(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2881e72c"],{"44b7":function(e,t,s){},"935e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("section",{staticClass:"mt-4 mb-4",attrs:{id:"content"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 offset-md-3"},[s("h2",[e._v("Mendaftar")]),s("p",[e._v("Daftar untuk melihat riwayat data dan aktifitas lainnya")]),e.$store.state.loadPage?e._e():s("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.messageStatus,expression:"$store.state.messageStatus"}],class:e.$store.state.msgColor},[e._v(" "+e._s(e.$store.state.message)+" ")]),s("form",{attrs:{"accept-charset":"utf-8"},on:{submit:function(t){return t.preventDefault(),e.doRegister()}}},[s("input",{attrs:{type:"hidden",name:"csrf_test_name",value:"fc780e4b7335ee1e9e1333e69d3bb3e3"}}),s("input",{attrs:{type:"hidden",id:"role",name:"role",value:"3"}}),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",value:"",placeholder:"Nama lengkap"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",value:"",placeholder:"Username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",value:"",id:"email",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),s("div",{staticClass:"form-group",attrs:{id:""}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.user.specificField,expression:"user.specificField"}],staticClass:"form-control",attrs:{name:"role_option"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"specificField",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",disabled:""}},[e._v("Bidang spesifik ...")]),s("option",{attrs:{value:"8"}},[e._v("Desainer")]),s("option",{attrs:{value:"11"}},[e._v("Penulis")]),s("option",{attrs:{value:"12"}},[e._v("Penyadur")]),s("option",{attrs:{value:"13"}},[e._v("Editor")]),s("option",{attrs:{value:"14"}},[e._v("Ilustrator")]),s("option",{attrs:{value:"15"}},[e._v("Penerbit")]),s("option",{attrs:{value:"16"}},[e._v("Pengembang BE")]),s("option",{attrs:{value:"18"}},[e._v("Pencetak")]),s("option",{attrs:{value:"19"}},[e._v("Toko Buku")]),s("option",{attrs:{value:"20"}},[e._v("Penerjemah")])])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"No. WhatsApp"},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Kata sandi"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),s("span",{staticClass:"zmdi zmdi-eye field-icon toggle-password",attrs:{toggle:"#password"}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirm_password,expression:"user.confirm_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Konfirmasi kata sandi"},domProps:{value:e.user.confirm_password},on:{input:function(t){t.target.composing||e.$set(e.user,"confirm_password",t.target.value)}}})]),s("div",{staticClass:"form-group"},[e.$store.state.loadPage?e._e():s("button",{staticClass:"btn btn-primary register-submit",attrs:{type:"submit"}},[e._v(" Daftar "),s("i",{staticClass:"fas fa-user-plus"})]),e.$store.state.loadPage?s("button",{staticClass:"btn btn-primary"},[s("span",{staticClass:"spinner-border spinner-border-sm"}),e._v(" Sedang diproses.. ")]):e._e()])]),s("div",{staticClass:"mb-4"},[e._v(" Sudah pernah mendaftar? "),s("router-link",{attrs:{to:"/login"}},[s("a",[e._v("Masuk disini")])])],1)])])])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{attrs:{id:"top-bar"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[e._v("Halaman pendaftaran")]),s("div",{staticClass:"col"},[s("div",{staticClass:"text-right bread"},[s("i",{staticClass:"fas fa-home"}),e._v(" Beranda > Register ")])])])])])}],o=s("5530"),i=s("1157"),n=s.n(i),l=s("2f62"),u={data:function(){return{user:{name:"",username:"",email:"",phone:"",password:"",confirm_password:"",specificField:""}}},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["register"])),{},{doRegister:function(){this.register(this.user)}}),created:function(){this.$store.state.messageStatus=!1},mounted:function(){n()(document).ready((function(){n()("#role").val(3),n()(".choice.active").css({background:"#f1c40f"}),n()('select[name="role_option"]').change((function(){var e=n()(this).val();return n()("#role").val(e),!1})),n()(".btn-role").click((function(){var e=n()(this).attr("data-type");n()(".optional").hide(),"siswa"==e&&(n()("#school").show(),n()("#role").val(4)),"guru"==e&&(n()("#school").show(),n()("#subject").show(),n()("#role").val(6)),"pelaku"==e&&(n()("#role_option").show(),n()("#role").val(8)),n()(".choice").css({background:"#f0f0f0"}),n()(this).css({background:"#f1c40f"})}))}))}},c=u,d=(s("fc5b"),s("2877")),p=Object(d["a"])(c,a,r,!1,null,"177413a6",null);t["default"]=p.exports},fc5b:function(e,t,s){"use strict";s("44b7")}}]);
//# sourceMappingURL=chunk-2881e72c.42a0b622.js.map