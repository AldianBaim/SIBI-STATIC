(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e26655ee"],{"6a17":function(e,t,a){"use strict";a("8aa3")},"8aa3":function(e,t,a){},"935e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("section",{staticClass:"mt-4 mb-4",attrs:{id:"content"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 offset-md-3"},[a("h2",[e._v("Mendaftar")]),a("div",{staticClass:"mb-3"},[e._v("Daftar sebagai :")]),e._m(1),e.$store.state.loadPage?e._e():a("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.messageStatus,expression:"$store.state.messageStatus"}],class:e.$store.state.msgColor},[e._v(" "+e._s(e.$store.state.message)+" ")]),a("form",{attrs:{"accept-charset":"utf-8"},on:{submit:function(t){t.preventDefault(),e.setRole(),e.doRegister()}}},[a("input",{attrs:{type:"hidden",name:"csrf_test_name",value:"fc780e4b7335ee1e9e1333e69d3bb3e3"}}),a("input",{attrs:{type:"hidden",id:"role",name:"role",value:"3"}}),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",value:"",placeholder:"Nama lengkap"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",value:"",placeholder:"Username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",value:"",id:"email",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),a("div",{staticClass:"form-group optional",staticStyle:{display:"none"},attrs:{id:"role_option"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.user.specificField,expression:"user.specificField"}],staticClass:"form-control",attrs:{name:"role_option"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"specificField",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[e._v("Bidang spesifik ...")]),a("option",{attrs:{value:"8"}},[e._v("Desainer")]),a("option",{attrs:{value:"11"}},[e._v("Penulis")]),a("option",{attrs:{value:"12"}},[e._v("Penyadur")]),a("option",{attrs:{value:"13"}},[e._v("Editor")]),a("option",{attrs:{value:"14"}},[e._v("Ilustrator")]),a("option",{attrs:{value:"15"}},[e._v("Penerbit")]),a("option",{attrs:{value:"16"}},[e._v("Pengembang BE")]),a("option",{attrs:{value:"18"}},[e._v("Pencetak")]),a("option",{attrs:{value:"19"}},[e._v("Toko Buku")]),a("option",{attrs:{value:"20"}},[e._v("Penerjemah")])])]),a("div",{staticClass:"form-group optional",staticStyle:{display:"none"},attrs:{id:"school"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.school,expression:"user.school"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Sekolah"},domProps:{value:e.user.school},on:{input:function(t){t.target.composing||e.$set(e.user,"school",t.target.value)}}})]),a("div",{staticClass:"form-group optional",staticStyle:{display:"none"},attrs:{id:"subject"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lesson,expression:"user.lesson"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Mata pelajaran"},domProps:{value:e.user.lesson},on:{input:function(t){t.target.composing||e.$set(e.user,"lesson",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"No. WhatsApp"},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Kata sandi"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),a("span",{staticClass:"zmdi zmdi-eye field-icon toggle-password",attrs:{toggle:"#password"}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirm_password,expression:"user.confirm_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Konfirmasi kata sandi"},domProps:{value:e.user.confirm_password},on:{input:function(t){t.target.composing||e.$set(e.user,"confirm_password",t.target.value)}}})]),e._m(2),a("div",{staticClass:"form-group"},[e.$store.state.loadPage?e._e():a("button",{staticClass:"btn btn-primary register-submit",attrs:{type:"submit"}},[e._v(" Daftar "),a("i",{staticClass:"fas fa-user-plus"})]),e.$store.state.loadPage?a("button",{staticClass:"btn btn-primary"},[a("span",{staticClass:"spinner-border spinner-border-sm"}),e._v(" Sedang diproses.. ")]):e._e()])]),a("div",{staticClass:"mb-4"},[e._v(" Sudah pernah mendaftar? "),a("router-link",{attrs:{to:"/login"}},[a("a",[e._v("Masuk disini")])])],1)])])])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"top-bar"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[e._v("Halaman pendaftaran")]),a("div",{staticClass:"col"},[a("div",{staticClass:"text-right bread"},[a("i",{staticClass:"fas fa-home"}),e._v(" Beranda > Register ")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-4"},[a("div",{staticClass:"choice btn-role active",staticStyle:{background:"rgb(241, 196, 15)"},attrs:{"data-type":"umum"}},[a("i",{staticClass:"fas fa-user-friends"}),e._v("  Umum ")]),a("div",{staticClass:"choice btn-role",attrs:{"data-type":"siswa"}},[a("i",{staticClass:"fas fa-child"}),e._v("  Siswa ")]),a("div",{staticClass:"choice btn-role",attrs:{"data-type":"guru"}},[a("i",{staticClass:"fas fa-chalkboard-teacher"}),e._v("  Guru ")]),a("div",{staticClass:"choice btn-role",attrs:{"data-type":"pelaku"}},[a("i",{staticClass:"fas fa-briefcase"}),e._v("  Lainnya ")]),a("div",{staticStyle:{clear:"both"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("div",{staticClass:"g-recaptcha",attrs:{"data-sitekey":"6LcFfVkUAAAAAKqPOitOzthA88792BCihdH5sk4P","data-theme":"light","data-type":"image","data-size":"normal"}},[a("div",{staticStyle:{width:"304px",height:"78px"}},[a("div",[a("iframe",{attrs:{title:"reCAPTCHA",src:"https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcFfVkUAAAAAKqPOitOzthA88792BCihdH5sk4P&co=aHR0cHM6Ly9hcHAuYnVrdS5rZW1kaWtidWQuZ28uaWQ6NDQz&hl=en&type=image&v=-TriQeni1Ls-Mdq_ssN2cUL5&theme=light&size=normal&cb=4vni4rdv7wez",width:"304",height:"78",role:"presentation",name:"a-pjcli6jvm233",frameborder:"0",scrolling:"no",sandbox:"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"}})]),a("textarea",{staticClass:"g-recaptcha-response",staticStyle:{width:"250px",height:"40px",border:"1px solid rgb(193, 193, 193)",margin:"10px 25px",padding:"0px",resize:"none",display:"none"},attrs:{id:"g-recaptcha-response",name:"g-recaptcha-response"}})]),a("iframe",{staticStyle:{display:"none"}})])])}],r=a("5530"),i=a("1157"),n=a.n(i),l=a("2f62"),c={data:function(){return{user:{name:"",username:"",email:"",phone:"",password:"",confirm_password:"",school:"",lesson:"",specificField:"",role_id:3}}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["register"])),{},{doRegister:function(){this.register(this.user)},setRole:function(){this.user.role_id=n()("#role").val()}}),created:function(){this.$store.state.messageStatus=!1},mounted:function(){n()(document).ready((function(){n()("#role").val(3),n()(".choice.active").css({background:"#f1c40f"}),n()('select[name="role_option"]').change((function(){var e=n()(this).val();return n()("#role").val(e),!1})),n()(".btn-role").click((function(){var e=n()(this).attr("data-type");n()(".optional").hide(),"siswa"==e&&(n()("#school").show(),n()("#role").val(4)),"guru"==e&&(n()("#school").show(),n()("#subject").show(),n()("#role").val(6)),"pelaku"==e&&(n()("#role_option").show(),n()("#role").val(8)),n()(".choice").css({background:"#f0f0f0"}),n()(this).css({background:"#f1c40f"})}))}))}},u=c,p=(a("6a17"),a("2877")),d=Object(p["a"])(u,s,o,!1,null,"6effe6f2",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-e26655ee.20eb54a3.js.map