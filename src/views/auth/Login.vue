<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">Halaman untuk masuk ke dashboard</div>
          <div class="col">
            <div class="text-right bread">
              <i class="fas fa-home"></i> Beranda &gt; Login
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="content" class="mt-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-3">
            <h2>Masuk</h2>
            <p>Masuk untuk melihat riwayat data dan aktifitas lainnya</p>
            <form
              @submit.prevent="doLogin()"
              class="margin-lg-top"
              accept-charset="utf-8"
            >
              <input
                type="hidden"
                name="csrf_test_name"
                value="fc780e4b7335ee1e9e1333e69d3bb3e3"
              />
              <div
                v-if="$store.state.messageStatus"
                :class="$store.state.msgColor"
              >
                {{ $store.state.message }}
              </div>
              <div class="form-group">
                <input
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="form-group mt-4">
                <button
                  v-if="!$store.state.loadPage"
                  type="submit"
                  class="btn btn-primary register-submit"
                >
                  Masuk <i class="fas fa-sign-in-alt"></i>
                </button>
                <button v-if="$store.state.loadPage" class="btn btn-primary">
                  <span class="spinner-border spinner-border-sm"></span>
                  Tunggu sebentar...
                </button>
              </div>
            </form>
            <div class="mt-4">
              <router-link to="/recovery">
                <a>Saya lupa kata sandi.</a>
              </router-link>
              Belum punya akun? <br />
              <router-link to="/register">
                <a>Klik disini untuk daftar.</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    doLogin() {
      this.login(this.user);
    },
  },
};
</script>