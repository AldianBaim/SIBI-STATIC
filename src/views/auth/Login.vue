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
                <div class="input-group mb-3">
                  <input
                    v-model="user.password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control border-right-0"
                    placeholder="Password"
                  />
                  <div @click="setShowPassword()" class="input-group-prepend">
                    <span
                      class="input-group-text bg-white border-left-0"
                      id="basic-addon1"
                    >
                      <i v-if="!showPassword" class="fa fa-fw fa-eye"></i>
                      <i v-else class="fa fa-fw fa-eye-slash"></i>
                    </span>
                  </div>
                </div>
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
            <div>
              <div class="mb-3">Atau</div>
              <GoogleLogin
                class="btn btn-light shadow-sm"
                :params="params"
                :onSuccess="onSuccess"
                :onFailure="onFailure"
              >
                <img
                  src="@/assets/google-logo.png"
                  width="20"
                  class="mr-3"
                  alt="google"
                />
                <span>Login with google</span>
              </GoogleLogin>
            </div>
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
import Vue from "vue";
import { mapActions } from "vuex";
import { GoogleLogin, LoaderPlugin } from "vue-google-login";
import { gapi } from "gapi-script";

const googleClientId =
  "104944373110-hd7umobu1j3k66fnjm82l8gd32vnefm8.apps.googleusercontent.com";

Vue.use(LoaderPlugin, {
  client_id: googleClientId,
});

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      showPassword: false,
      params: {
        client_id: googleClientId,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    ...mapActions(["login"]),
    onSuccess(response) {
      if (response.xc.id_token) {
        this.login({ id_token: response.xc.id_token });
      }
    },
    onFailure(googleUser) {
      console.log(googleUser);
    },
    setShowPassword() {
      this.showPassword = !this.showPassword;
    },
    doLogin() {
      this.login(this.user);
    },
  },
  mounted() {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: googleClientId,
        plugin_name: "SIBI",
      });
    });
  },
};
</script>
