<template>
  <div>
    <div class="container">
      <div id="dashboard-wrapper">
        <div class="row">
          <div class="col-lg-4 col-md-8">
            <Sidebar></Sidebar>
          </div>
          <div class="col-lg-8">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0.1;
}
</style>
