<template>
  <div>
    <Navbar></Navbar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Navbar, Footer },
  mounted() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-KQZ4PELP78");

    $(".btn-read").click(function () {
      let url = $(this).attr("data-url");

      $("#embed").attr("src", url);
      $("#modal").modal("show");
      return false;
    });
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(30px);
  opacity: 0.1;
}
</style>