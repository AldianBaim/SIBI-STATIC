(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d470"],{f78a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-5"},[a("div",{staticClass:"row justify-content-center"},[t.notFound?a("div",{staticClass:"col-lg-7"},[a("h4",{staticClass:"text-center"},[t._v("Tiket tidak ditemukan")])]):a("div",{staticClass:"col-lg-7"},[a("div",[t._v(" Event : "),a("strong",[t._v(t._s(t.ticket.training_event.title))])]),a("table",{staticClass:"table table-bordered mt-2"},[a("tr",[a("td",{attrs:{width:"160"}},[t._v("Nama")]),a("td",{attrs:{width:"20"}},[t._v(":")]),a("td",[t._v(t._s(t.ticket.name))])]),a("tr",[a("td",[t._v("Nomor Tiket")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.ticket.ticketcode))])]),a("tr",[a("td",[t._v("Tanggal Daftar")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.registeredDate))])]),a("tr",[a("td",[t._v("Kode QR")]),a("td",[t._v(":")]),a("td",[a("img",{attrs:{src:t.qrCode,alt:"Kode QR"}})])])])])])])},c=[],n=(a("99af"),a("bc3a")),d=a.n(n),r=a("4360"),s=a("c1df"),o=a.n(s);o.a.locale("id");var u={data:function(){return{ticket:[],notFound:!1}},computed:{registeredDate:function(){return o()(this.ticket.created_at).format("LL")},qrCode:function(){var t="https://app.buku.kemdikbud.go.id/ticket/".concat(this.ticket.ticketcode);return"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(t)}},created:function(){var t=this;d.a.post("".concat(r["a"],"api/training/ticket/").concat(this.$route.params.id)).then((function(e){"failed"==e.data.status?t.notFound=!0:t.ticket=e.data.data})).catch((function(t){return console.log(t)}))}},l=u,v=a("2877"),_=Object(v["a"])(l,i,c,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d22d470.9162024a.js.map