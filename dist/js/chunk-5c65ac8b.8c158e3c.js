(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c65ac8b"],{"0bc7":function(t,e,a){t.exports=a.p+"img/loading-2.fe3e38fb.gif"},3014:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"dashboard-content"}},[s("div",{staticClass:"text-right mb-4"},[t._v(t._s(t.$store.state.today))]),s("div",{staticClass:"mb-3 mt-3"},[t._v("Filter berdasarkan field berikut :")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.filterBook()}}},[s("div",{staticClass:"row mb-3 mt-3"},[s("div",{staticClass:"col"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.title,expression:"book.title"}],staticClass:"form-control search_table",attrs:{id:"title",type:"text",placeholder:"Judul Buku"},domProps:{value:t.book.title},on:{input:function(e){e.target.composing||t.$set(t.book,"title",e.target.value)}}})]),s("div",{staticClass:"col"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.writer,expression:"book.writer"}],staticClass:"form-control search_table",attrs:{id:"writer",type:"text",placeholder:"Nama Penulis"},domProps:{value:t.book.writer},on:{input:function(e){e.target.composing||t.$set(t.book,"writer",e.target.value)}}})])]),s("div",{staticClass:"row mb-3 mt-3"},[s("div",{staticClass:"col"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.year,expression:"book.year"}],staticClass:"form-control search_table",attrs:{id:"published_year",type:"text",placeholder:"Tahun"},domProps:{value:t.book.year},on:{input:function(e){e.target.composing||t.$set(t.book,"year",e.target.value)}}})]),s("div",{staticClass:"col"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.isbn,expression:"book.isbn"}],staticClass:"form-control search_table",attrs:{id:"isbn",type:"text",placeholder:"ISBN"},domProps:{value:t.book.isbn},on:{input:function(e){e.target.composing||t.$set(t.book,"isbn",e.target.value)}}})])]),s("div",{staticClass:"d-flex justify-content-end mt-4"},[s("button",{staticClass:"btn btn-outline-primary btn-md btn-reset mr-2",attrs:{type:"button"},on:{click:function(e){return t.fetchBookDownload()}}},[s("span",{staticClass:"fa fa-retweet"}),t._v(" Reset ")]),t._m(0)])]),s("div",{staticClass:"mt-3 mb-3",attrs:{id:"result"}},[t._v(" Menampilkan "),s("span",{attrs:{id:"perpage"}},[t._v(t._s(t.$store.state.bookDownload.length))]),t._v(" dari "+t._s(t.$store.state.bookDownload.length)+" hasil ")]),0!=t.$store.state.bookDownload.length?s("div",[t.$store.state.loadPage?s("div",{staticClass:"loading text-center"},[s("img",{staticClass:"img-fluid",attrs:{src:a("0bc7"),alt:""}})]):[s("table",{staticClass:"table table-striped result-table",staticStyle:{display:"table"},attrs:{"data-pagination":"true"}},[t._m(1),s("tbody"),s("tbody",t._l(t.bookDownload,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.writer))]),s("td",[t._v(t._s(e.published_year))]),s("td",[t._v(t._s(e.isbn))]),s("td",[s("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:e.attachment,target:"blank"}},[t._v(" Unduh")])])])})),0)])]],2):[t._m(2)],t._m(3)],2)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-primary btn-md btn-filter",attrs:{type:"submit"}},[a("span",{staticClass:"fa fa-filter"}),t._v(" Terapkan ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Judul")]),a("th",{attrs:{scope:"col"}},[t._v("Penulis")]),a("th",{attrs:{scope:"col"}},[t._v("Tahun")]),a("th",{attrs:{scope:"col"}},[t._v("ISBN")]),a("th",{attrs:{scope:"col"}},[t._v("File Resolusi Tinggi")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center mt-5"},[s("img",{staticClass:"img-fluid",attrs:{width:"60",src:a("72dd"),alt:""}}),s("h4",{staticClass:"text-center mt-2"},[t._v("Data tidak ditemukan.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row my-4 text-right"},[a("div",{staticClass:"col-md-12"},[a("nav",{attrs:{id:"paging"}})])])}],i=a("5530"),r=a("2f62"),n={name:"Unduh",data:function(){return{book:{title:"",writer:"",year:"",isbn:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["fetchBookDownload","filterSearchBook"])),{},{filterBook:function(){this.filterSearchBook(this.book)}}),computed:Object(i["a"])({},Object(r["c"])(["bookDownload"])),beforeCreate:function(){var t=localStorage.getItem("user");t||this.$router.push("/login")},created:function(){this.fetchBookDownload()}},l=n,c=a("2877"),d=Object(c["a"])(l,s,o,!1,null,null,null);e["default"]=d.exports},"72dd":function(t,e,a){t.exports=a.p+"img/not-found.d2c7a8ec.png"}}]);
<<<<<<< HEAD:dist/js/chunk-5c65ac8b.8c158e3c.js
//# sourceMappingURL=chunk-5c65ac8b.8c158e3c.js.map
=======
//# sourceMappingURL=chunk-5c65ac8b.875c5612.js.map
>>>>>>> 22bacfd765f57431d3df148ce20a405ba2f940a1:dist/js/chunk-5c65ac8b.875c5612.js
