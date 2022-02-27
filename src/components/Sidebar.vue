<template>
  <div id="dashboard-sidebar">
    <h3>Dasbor</h3>

    <div>
      <span
        >Halo, <b>{{ username }}</b></span
      >
    </div>
    <div>
      <small>{{ roleName }}</small>
    </div>

    <ul class="mt-4">
      <li class="active">
        <router-link to="/user/home">
          <a><i class="fas fa-home fa-fw"></i> Beranda</a>
        </router-link>
      </li>
      <li v-if="roleName != 'Penerbit'">
        <router-link to="/user/profil">
          <a><i class="fas fa-fw fa-user"></i> Profil</a>
        </router-link>
      </li>
      <li v-else>
        <router-link to="/user/profil/publisher">
          <a><i class="fas fa-fw fa-user"></i> Profil</a>
        </router-link>
      </li>
      <li>
        <router-link to="/user/portfolio">
          <a><i class="fa fa-camera-retro fa-fw"></i> Portfolio</a>
        </router-link>
      </li>
      <li>
        <router-link to="/user/lapor">
          <a><i class="fa fa-exclamation-circle fa-fw"></i> Lapor Buku</a>
        </router-link>
      </li>
      <li>
        <router-link to="/user/unduh">
          <a><i class="fa fa-download fa-fw"></i> Unduh Buku</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      username: "",
      roleName: "",
    };
  },
  created() {
    var user = localStorage.getItem("user");
    var parse = JSON.parse(user);

    this.username = parse.fullname;
    this.roleName = parse.role_name;
  },
};
</script>

<style scoped>
.router-link-exact-active a {
  font-weight: 700 !important;
  color: #0b85cc !important;
}
</style>
