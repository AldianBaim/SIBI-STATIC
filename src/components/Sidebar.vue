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
      <li v-if="roleName == 'Penerbit' || roleName == 'Pencetak'">
        <router-link to="/user/profil/publisher">
          <a><i class="fas fa-fw fa-user"></i> Profil</a>
        </router-link>
      </li>
      <li v-else>
        <router-link to="/user/profil">
          <a><i class="fas fa-fw fa-user"></i> Profil</a>
        </router-link>
      </li>
      <li>
        <router-link to="/user/portfolio">
          <a><i class="fa fa-camera-retro fa-fw"></i> Portfolio</a>
        </router-link>
      </li>
      <li>
        <router-link to="/user/pembinaan">
          <a><i class="fa fa-calendar-alt fa-fw"></i> Pembinaan</a>
        </router-link>
      </li>
      <li>
        <router-link to="/user/lapor">
          <a><i class="fa fa-exclamation-circle fa-fw"></i> Lapor Buku</a>
        </router-link>
      </li>
      <!--
      <li>
        <router-link to="/user/unduh">
          <a><i class="fa fa-download fa-fw"></i> Unduh Buku</a>
        </router-link>
      </li>
      -->
      <span v-if="roleName == 'Penerbit'">
        <li v-if="showDaftarBuku">
          <a
            v-bind:href="
              'https://bntp.buku.kemdikbud.go.id/daftar/buku?id_penerbit=' +
                user_id +
                '&penerbit=' +
                username +
                '&email=' +
                email +
                '&hash=' +
                hash
            "
            target="_blank"
            ><i class="fa fa-book fa-fw"></i> Daftarkan Buku</a
          >
        </li>
        <li v-else>
          <a
            style="cursor: pointer"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i class="fa fa-book fa-fw"></i> Daftarkan Buku
          </a>
        </li>
        <li>
          <router-link to="/user/izin-cetak">
            <a><i class="fa fa-print fa-fw"></i> Izin Cetak Buku</a>
          </router-link>
        </li>
      </span>
      <span v-if="roleName == 'Pencetak'">
        <li>
          <router-link to="/user/izin-cetak">
            <a><i class="fa fa-print fa-fw"></i> Izin Cetak Buku</a>
          </router-link>
        </li>
      </span>
      <!-- <li>
          <router-link to="/user/penilaian">
            <a><i class="fa fa-edit fa-fw"></i> Penilaian Buku</a>
          </router-link>
        </li> -->
    </ul>

    <div v-if="roleName == 'Penerbit'" class="alert alert-warning">
      Terdapat kesulitan dalam pengisian formulir?
      <a href="https://wa.me/6285156897664" target="_blank"
        >Tanyakan disini <i class="fab fa-whatsapp"></i
      ></a>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Penilaian Buku</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Silahkan lengkapi data profil penerbit terlebih dahulu, terutama
              berkas-berkas untuk mendaftar penilaian buku.
            </p>
            <router-link to="/user/profil/publisher">
              <a type="button" data-dismiss="modal"
                ><i class="fas fa-fw fa-edit"></i> Lengkapi profil</a
              >
            </router-link>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../store";
export default {
  name: "Sidebar",
  data() {
    return {
      user_id: "",
      email: "",
      username: "",
      hash: "",
      roleName: "",
      showDaftarBuku: false,
      checkRole: false,
    };
  },
  created() {
    var user = localStorage.getItem("user");
    var parse = JSON.parse(user);

    this.user_id = parse.user_id;
    this.username = parse.fullname;
    this.hash = parse.hash;
    this.email = parse.email;
    this.roleName = parse.role_name;

    // if (this.roleName == "Penerbit" || this.roleName == "Pencetak") {
    //   this.checkRole = true;
    // }

    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}api/user/getPublisherProfile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.result.siup != "") {
          if (this.roleName == "Penerbit") {
            this.showDaftarBuku = true;
          }
        } else {
          this.showDaftarBuku = false;
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.router-link-exact-active a {
  font-weight: 700 !important;
  color: #0b85cc !important;
}
</style>
