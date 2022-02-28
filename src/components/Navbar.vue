<template>
  <nav class="navbar white navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/">
        <a class="navbar-brand">
          <img
            width="250"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa0AAABvCAYAAABfAZ88AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGy2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA2LTI2VDEzOjI4OjU2KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA2LTI2VDEzOjI4OjU2KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNi0yNlQxMzoyODo1NiswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozZDg2NmMxNi1jNGE3LTA5NDctYWFkOS1lNDFhNmY2MmQzOTUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3OGNiOWIzNy01MjY5LWJmNDItOGRmNS00MTBjYmNkY2MxYzMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NmEyMDljOS1lNjg2LWNhNDItOTc0OC1jMjFlZGYzNDEzOTEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NmEyMDljOS1lNjg2LWNhNDItOTc0OC1jMjFlZGYzNDEzOTEiIHN0RXZ0OndoZW49IjIwMjEtMDYtMjZUMTM6Mjg6NTYrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2Q4NjZjMTYtYzRhNy0wOTQ3LWFhZDktZTQxYTZmNjJkMzk1IiBzdEV2dDp3aGVuPSIyMDIxLTA2LTI2VDEzOjI4OjU2KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU2lzdGVtIEluZm9ybWFzaSIgcGhvdG9zaG9wOkxheWVyVGV4dD0iU2lzdGVtIEluZm9ybWFzaSIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IlBlcmJ1a3VhbiBJbmRvbmVzaWEiIHBob3Rvc2hvcDpMYXllclRleHQ9IlBlcmJ1a3VhbiBJbmRvbmVzaWEiLz4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/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"
          />
        </a>
      </router-link>
      <button
        ref="button"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        @click="setShow"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" class="nav-link" exact-active-class="active">
            Beranda
          </router-link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Buku
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                target="_blank"
                href="https://buku.kemdikbud.go.id/buku-teks"
                >Buku Teks</a
              >
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="https://buku.kemdikbud.go.id/buku-nonteks"
                target="_blank"
                >Buku Non Teks</a
              >
              <a
                class="dropdown-item"
                href="https://buku.kemdikbud.go.id/buku-sekolah-penggerak"
                target="_blank"
                >Buku Sekolah Penggerak</a
              >
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              to="/penilaian"
              event=""
              active-class="active"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Penilaian
            </router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                active-class="active"
                to="/penilaian"
                class="dropdown-item"
                >Hasil Penilaian
              </router-link>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="http://penilaian.buku.kemdikbud.go.id"
                target="_blank"
                >Penilaian Buku Teks</a
              >
              <a
                class="dropdown-item"
                href="http://penilaian.bukunonteks.kemdikbud.go.id"
                target="_blank"
                >Penilaian Buku Non Teks</a
              >
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="/pelaku"
              active-class="active"
              event=""
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pelaku Perbukuan
            </router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                class="dropdown-item"
                exact-active-class="active"
                to="/pelaku/sertifikasi"
                >Pelaku Perbukuan Tersertifikasi
              </router-link>

              <div class="dropdown-divider"></div>

              <router-link
                class="dropdown-item"
                exact-active-class="active"
                to="/pelaku/pembinaan"
                >Pembinaan
              </router-link>

              <a
                target="_blank"
                class="dropdown-item"
                exact-active-class="active"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2t5XGrlZUqPEAyBFWlDh1VJFwDZFyI4qJUoyuCBDKLAveTw/viewform"
              >
                Pengajuan HET
              </a>
            </div>
          </li>
          <router-link class="nav-link" active-class="active" to="/kebijakan">
            Kebijakan
          </router-link>
        </ul>
        <div v-if="isLoggin" class="text-right">
          <router-link to="/user/home">
            <a class="btn btn-sm btn-primary rounded-pill py-1 px-3 mr-2"
              >Ke Dasbor <i class="fa fa-door-open"></i
            ></a>
          </router-link>
          <a
            @click.prevent="logout2"
            class="btn btn-sm btn-danger rounded-pill py-1 px-3 mr-2"
            >Logout <i class="fa fa-sign-out-alt"></i
          ></a>
        </div>
        <div v-else class="text-right">
          <router-link to="/login">
            <a class="btn btn-primary rounded-pill py-1 px-3 mr-2">Masuk</a>
          </router-link>
          <router-link to="/register">
            <a class="btn btn-outline-primary rounded-pill py-1 px-3 mr-2"
              >Daftar</a
            >
          </router-link>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="hetModal"
      tabindex="-1"
      aria-labelledby="hetModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="hetModalLabel">Pilih Pengajuan HET</h5>
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
            <div class="row justify-content-center">
              <div class="col-md-6 my-2">
                <a
                  href="https://forms.gle/WnwvRcVzorPq2Pck7"
                  class="btn btn-info btn-block"
                  target="_blank"
                >
                  HET Hardcover
                </a>
              </div>
              <div class="col-md-6 my-2">
                <a
                  href="https://forms.gle/Vb2Wv5XP6otZNjWk6"
                  class="btn btn-info btn-block"
                  target="_blank"
                >
                  HET Softcover
                </a>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </nav>
</template>

<script>
import $ from "jquery";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      timeout: 1000,
      logged_in: false,
      activeItem: "Beranda",
      isShow: false,
    };
  },
  computed: {
    active() {
      console.log(this.$router.history.current.name);
      return true;
    },
    isLoggin() {
      return this.$store.state.token ? true : false;
    },
  },
  methods: {
    ...mapActions(["logout"]),
    logout2() {
      this.logout();
      this.$router.push("/login");
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setShow() {
      this.isShow = !this.isShow;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
  watch: {
    isShow(val) {
      val && $(".navbar-collapse").collapse("show");
      !val && $(".navbar-collapse").collapse("hide");
    },
    $route() {
      window.innerWidth <= 768 && (this.isShow = false);
    },
  },
};
</script>
