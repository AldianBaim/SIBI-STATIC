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
            <p class="mb-3">
              Masukan email yang terdaftar pada situs ini, kami akan mengirimkan
              tautan untuk memperbaharui kata sandi.
            </p>
            <form
              action="api.buku.kemdikbud.cloudapp.web.id/user/recovery_action"
              class="margin-lg-top"
              method="post"
              accept-charset="utf-8"
            >
              <input
                type="hidden"
                name="csrf_test_name"
                value="fc780e4b7335ee1e9e1333e69d3bb3e3"
              />
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  id="btn-submit-login"
                  class="btn btn-primary register-submit"
                >
                  Kirim <i class="fas fa-paper-plane"></i>
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
export default {};
</script>