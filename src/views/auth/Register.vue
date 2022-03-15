<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">Halaman pendaftaran</div>
          <div class="col">
            <div class="text-right bread">
              <i class="fas fa-home"></i> Beranda &gt; Register
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="content" class="mt-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-3">
            <h2>Mendaftar</h2>
            <p>Daftar untuk melihat riwayat data dan aktifitas lainnya</p>
            <!-- <script
              type="text/javascript"
              src="https://www.google.com/recaptcha/api.js?render=onload&amp;hl=en"
              async=""
              defer=""
            ></script> -->

            <div
              v-if="!$store.state.loadPage"
              v-show="$store.state.messageStatus"
              :class="$store.state.msgColor"
            >
              {{ $store.state.message }}
            </div>
            <form @submit.prevent="doRegister()" accept-charset="utf-8">
              <input
                type="hidden"
                name="csrf_test_name"
                value="fc780e4b7335ee1e9e1333e69d3bb3e3"
              /><input type="hidden" id="role" name="role" value="3" />
              <div class="form-group">
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  id="name"
                  value=""
                  placeholder="Nama lengkap"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="user.username"
                  type="text"
                  class="form-control"
                  id="username"
                  value=""
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="user.email"
                  type="email"
                  value=""
                  id="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="form-group" id="">
                <select
                  v-model="user.role_id"
                  name="role_option"
                  class="form-control"
                >
                  <option value="" disabled>Bidang spesifik ...</option>
                  <option value="8">Desainer</option>
                  <option value="11">Penulis</option>
                  <option value="12">Penyadur</option>
                  <option value="13">Editor</option>
                  <option value="14">Ilustrator</option>
                  <option value="15">Penerbit</option>
                  <option value="16">Pengembang BE</option>
                  <option value="18">Pencetak</option>
                  <option value="19">Toko Buku</option>
                  <option value="20">Penerjemah</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  required
                  v-model="user.phone"
                  type="text"
                  class="form-control"
                  placeholder="No. WhatsApp"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="Kata sandi"
                /><span
                  toggle="#password"
                  class="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>
              <div class="form-group">
                <input
                  v-model="user.confirm_password"
                  type="password"
                  class="form-control"
                  placeholder="Konfirmasi kata sandi"
                />
              </div>
              <!-- <div class="form-group">
                <div
                  class="g-recaptcha"
                  data-sitekey="6LcFfVkUAAAAAKqPOitOzthA88792BCihdH5sk4P"
                  data-theme="light"
                  data-type="image"
                  data-size="normal"
                >
                  <div style="width: 304px; height: 78px">
                    <div>
                      <iframe
                        title="reCAPTCHA"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcFfVkUAAAAAKqPOitOzthA88792BCihdH5sk4P&amp;co=aHR0cHM6Ly9hcHAuYnVrdS5rZW1kaWtidWQuZ28uaWQ6NDQz&amp;hl=en&amp;type=image&amp;v=-TriQeni1Ls-Mdq_ssN2cUL5&amp;theme=light&amp;size=normal&amp;cb=4vni4rdv7wez"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-pjcli6jvm233"
                        frameborder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      ></iframe>
                    </div>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      class="g-recaptcha-response"
                      style="
                        width: 250px;
                        height: 40px;
                        border: 1px solid rgb(193, 193, 193);
                        margin: 10px 25px;
                        padding: 0px;
                        resize: none;
                        display: none;
                      "
                    ></textarea>
                  </div>
                  <iframe style="display: none"></iframe>
                </div>
              </div> -->
              <div class="form-group">
                <button
                  v-if="!$store.state.loadPage"
                  type="submit"
                  class="btn btn-primary register-submit"
                >
                  Daftar <i class="fas fa-user-plus"></i>
                </button>
                <button v-if="$store.state.loadPage" class="btn btn-primary">
                  <span class="spinner-border spinner-border-sm"></span>
                  Sedang diproses..
                </button>
              </div>
            </form>
            <div class="mb-4">
              Sudah pernah mendaftar?
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
import $ from "jquery";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
        source: "platform",
        role_id: "",
        // role_id: 3,
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    doRegister() {
      this.register(this.user);
    },
    // setRole() {
    //   this.user.role_id = $("#role").val();
    // },
  },
  created() {
    this.$store.state.messageStatus = false;
  },
  mounted() {
    $(document).ready(function() {
      $("#role").val(3);

      $(".choice.active").css({
        background: "#f1c40f",
      });

      $('select[name="role_option"]').change(function() {
        let id = $(this).val();

        $("#role").val(id);

        return false;
      });

      $(".btn-role").click(function() {
        let type = $(this).attr("data-type");

        $(".optional").hide();

        if (type == "siswa") {
          $("#school").show();
          $("#role").val(4);
        }

        if (type == "guru") {
          $("#school").show();
          $("#subject").show();
          $("#role").val(6);
        }

        if (type == "pelaku") {
          $("#role_option").show();
          $("#role").val(8);
        }

        $(".choice").css({
          background: "#f0f0f0",
        });

        $(this).css({
          background: "#f1c40f",
        });
      });
    });
  },
};
</script>

<style scoped>
.choice {
  float: left;
  padding: 10px;
  background: #f0f0f0;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.choice:hover {
  cursor: pointer;
}
.choice a {
  display: block;
  color: #444;
}
</style>
