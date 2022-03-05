<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">Halaman lupa kata sandi</div>
          <div class="col">
            <div class="text-right bread">
              <i class="fas fa-home"></i> Beranda &gt; Recovery
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="content" class="mt-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-3">
            <h2>Lupa kata sandi?</h2>
            <template v-if="$store.state.messageRecovery == ''">
              <div
                v-if="$store.state.messageRecoveryError != ''"
                class="alert alert-warning"
              >
                {{ $store.state.messageRecoveryError }}
              </div>
            </template>
            <template v-else>
              <div
                v-if="$store.state.messageRecovery != ''"
                class="alert alert-success"
              >
                {{ $store.state.messageRecovery }}
              </div>
            </template>
            <p class="mb-3">
              Masukan email yang terdaftar pada situs ini, kami akan mengirimkan
              tautan untuk memperbaharui kata sandi.
            </p>
            <form
              @submit.prevent="submit()"
              class="margin-lg-top"
              method="post"
              accept-charset="utf-8"
            >
              <div class="form-group">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <button
                  v-if="!$store.state.loadPage"
                  type="submit"
                  id="btn-submit-login"
                  class="btn btn-primary register-submit"
                >
                  Kirim
                  <i class="fas fa-paper-plane"></i>
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-primary register-submit"
                >
                  Tunggu sebentar..
                </button>
              </div>
            </form>
            <div>
              Sudah punya akun?
              <router-link to="/login">
                <a>Masuk disini</a>
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
      email: "",
    };
  },
  methods: {
    ...mapActions(["recoveryAccount"]),
    submit() {
      this.recoveryAccount(this.email);
      this.email = "";
    },
  },
};
</script>
