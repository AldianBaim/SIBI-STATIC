(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d470"],{f78a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-5"},[a("div",{staticClass:"row justify-content-center"},[t.notFound?a("div",{staticClass:"col-lg-7"},[a("h4",{staticClass:"text-center"},[t._v("Tiket tidak ditemukan")])]):a("div",{staticClass:"col-lg-7"},[a("div",[t._v(" Tiket untuk : "),a("strong",[t._v(t._s(t.ticket.training_event.title))])]),a("table",{staticClass:"table table-bordered mt-2"},[a("tr",[a("td",{attrs:{width:"160"}},[t._v("ID Ticket")]),a("td",{attrs:{width:"20"}},[t._v(":")]),a("td",[t._v(t._s(t.ticket.ticketcode))])]),a("tr",[a("td",[t._v("Tanggal Daftar")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.registeredDate))])]),a("tr",[a("td",[t._v("Waktu")]),a("td",[t._v(":")]),a("td",[t.ticket.training_event.start.substr(0,10)===t.ticket.training_event.end.substr(0,10)?a("div",[t._v(" "+t._s(t.convertStartDate)+" ")]):a("div",[t._v(t._s(t.convertStartDate)+" - "+t._s(t.convertEndDate))]),a("span",[t._v("Pukul "+t._s(t.ticket.training_event.start.substr(10))+" - Selesai")])])]),a("tr",[a("td",[t._v("Tempat")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.ticket.training_event.location))])]),a("tr",[a("td",[t._v("Zoom Meeting")]),a("td",[t._v(":")]),a("td",[a("div",[t._v(" Meeting ID : "+t._s(t.ticket.training_event.zoom_meeting_id)+" ")]),a("div",[t._v("Passcode : "+t._s(t.ticket.training_event.zoom_passcode))]),a("a",{attrs:{href:t.ticket.training_event.zoom_link,target:"_blank"}},[t._v("Zoom link")])])]),""!=t.ticket.training_event.youtube_link?a("tr",[a("td",[t._v("Youtube Live")]),a("td",[t._v(":")]),a("td",[a("a",{attrs:{href:t.ticket.training_event.youtube_link}},[t._v(t._s(t.ticket.training_event.youtube_link))])])]):t._e(),a("tr",[a("td",[t._v("Kode QR")]),a("td",[t._v(":")]),a("td",[a("img",{attrs:{src:t.qrCode,alt:"Kode QR"}})])])]),t._m(0),a("table",{staticClass:"table table-bordered mt-2"},[a("tr",[a("td",{attrs:{width:"160"}},[t._v("Nama Lengkap")]),a("td",{attrs:{width:"20"}},[t._v(":")]),a("td",[t._v(t._s(t.ticket.name))])]),a("tr",[a("td",[t._v("Email")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.ticket.email))])]),a("tr",[a("td",[t._v("No Whatsapp")]),a("td",[t._v(":")]),a("td",[t._v(t._s(t.ticket.phone))])]),a("tr",[a("td",[t._v("Alamat")]),a("td",[t._v(":")]),a("td",[t._v(" "+t._s(t.ticket.address)+" ")])]),a("tr",[a("td",[t._v("Status")]),a("td",[t._v(":")]),a("td",[a("span",{staticClass:"text-primary"},[t._v(t._s("approved"==t.ticket.status&&"Pendaftaran Diterima"))])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("strong",[t._v("Detail Peserta : ")])])}],r=(a("99af"),a("bc3a")),s=a.n(r),d=a("4360"),c=a("c1df"),_=a.n(c);_.a.locale("id");var o={data:function(){return{ticket:[],notFound:!1}},computed:{convertStartDate:function(){return _()(this.ticket.training_event.start).format("LL")},convertEndDate:function(){return _()(this.ticket.training_event.end).format("LL")},registeredDate:function(){return _()(this.ticket.created_at).format("LL")},qrCode:function(){var t="https://app.buku.kemdikbud.go.id/ticket/".concat(this.ticket.ticketcode);return"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(t)}},created:function(){var t=this;s.a.post("".concat(d["a"],"api/training/ticket/").concat(this.$route.params.id)).then((function(e){"failed"==e.data.status?t.notFound=!0:(console.log(e),t.ticket=e.data.data)})).catch((function(t){return console.log(t)}))}},v=o,u=a("2877"),l=Object(u["a"])(v,i,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22d470.06d189a0.js.map