(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2f0c"],{"25f9":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),s("section",{staticClass:"mt-4 mb-4",attrs:{id:"content"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 offset-md-3"},[s("h2",[t._v("Lupa kata sandi?")]),""==t.$store.state.messageRecovery?[""!=t.$store.state.messageRecoveryError?s("div",{staticClass:"alert alert-warning"},[t._v(" "+t._s(t.$store.state.messageRecoveryError)+" ")]):t._e()]:[""!=t.$store.state.messageRecovery?s("div",{staticClass:"alert alert-success"},[t._v(" "+t._s(t.$store.state.messageRecovery)+" ")]):t._e()],s("p",{staticClass:"mb-3"},[t._v(" Masukan email yang terdaftar pada situs ini, kami akan mengirimkan tautan untuk memperbaharui kata sandi. ")]),s("form",{staticClass:"margin-lg-top",attrs:{method:"post","accept-charset":"utf-8"},on:{submit:function(a){return a.preventDefault(),t.submit()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),s("div",{staticClass:"form-group"},[t.$store.state.loadPage?s("button",{staticClass:"btn btn-primary register-submit",attrs:{type:"button"}},[t._v(" Tunggu sebentar.. ")]):s("button",{staticClass:"btn btn-primary register-submit",attrs:{type:"submit",id:"btn-submit-login"}},[t._v(" Kirim "),s("i",{staticClass:"fas fa-paper-plane"})])])]),s("div",[t._v(" Sudah punya akun? "),s("router-link",{attrs:{to:"/login"}},[s("a",[t._v("Masuk disini")])])],1)],2)])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{attrs:{id:"top-bar"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Halaman lupa kata sandi")]),s("div",{staticClass:"col"},[s("div",{staticClass:"text-right bread"},[s("i",{staticClass:"fas fa-home"}),t._v(" Beranda > Recovery ")])])])])])}],r=s("5530"),n=s("2f62"),o={data:function(){return{email:"",source:"platform"}},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])(["recoveryAccount"])),{},{submit:function(){this.recoveryAccount(this.email),this.email=""}}),created:function(){this.$store.state.messageRecovery="",this.$store.state.messageRecoveryError=""}},c=o,l=s("2877"),u=Object(l["a"])(c,e,i,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b2f0c.98993b78.js.map