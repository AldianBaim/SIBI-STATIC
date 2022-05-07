<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">Detil Informasi Pembinaan</div>
          <div class="col">
            <div class="text-right bread">
              <i class="fas fa-home"></i> Beranda > Pembinaan > Detil
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="$store.state.loadPage" id="content" class="mt-4">
      <div class="container">
        <div class="loading text-center">
          <img src="@/assets/loading-2.gif" alt="" class="img-fluid" />
        </div>
      </div>
    </section>

    <section v-else id="content" class="mt-4">
      <div class="container">
        <div class="card">
          <div class="row">
            <div class="col-lg-7">
              <img :src="policy.cover" class="w-100 h-100" alt="" />
            </div>
            <div class="col-lg-5">
              <div class="p-3">
                <div style="color: #1aae9f">{{ convertDateTitle }}</div>
                <h3 class="mt-3">{{ policy.title }}</h3>
                <h4 class="text-muted">{{ policy.subtitle }}</h4>
                <div style="margin-top: 100px">
                  <div>{{ policy.registered }} orang telah mendaftar</div>
                  <div>
                    {{ policy.seats - policy.registered }} sisa kursi tersedia
                  </div>
                  <button
                    class="btn btn-block mt-3"
                    style="background-color: #1aae9f;border-radius: 5px!important;color: white"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Daftar Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 pt-3">
            <h5>Tentang Event Ini</h5>
            <p>
              {{ policy.description }}
            </p>
          </div>
          <div class="col-lg-5">
            <div class="mb-4">
              <h5>Tanggal dan Waktu</h5>
              <span>{{ convertStartDate }} - {{ convertEndDate }}</span> <br />
              <span>Pukul {{ policy.start.substr(10) }} - Selesai</span>
            </div>
            <div class="mb-4">
              <h5>Tanggal dan Waktu</h5>
              <span>{{ policy.location_address }}</span> <br />
              <a target="_blank" :href="policy.maps_url">Lihat map</a>
            </div>
            <div class="mb-4">
              <h5>Persyaratan Peserta</h5>
              <p v-html="policy.requirement"></p>
            </div>
          </div>
        </div>
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
              <h5 class="modal-title text-center" id="exampleModalLabel">
                Konfirmasi Pendaftaran
              </h5>
              <button
                @click="$store.state.messageRegisterSuccess = ''"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="postRegisterTraining()">
              <div class="modal-body">
                <div class="mb-3">
                  <span class="font-weight-bold">Judul Event :</span> <br />
                  <span>{{ policy.title }}</span>
                </div>
                <div class="form-group">
                  <label for="namaPeserta" class="form-label"
                    >Nama Peserta</label
                  >
                  <input
                    type="text"
                    v-model="register.name"
                    id="namaPeserta"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Alamat Email</label>
                  <input
                    type="email"
                    v-model="register.email"
                    id="email"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone" class="form-label">Nomor Whatsapp</label>
                  <input
                    type="number"
                    v-model="register.phone"
                    id="phone"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="address" class="form-label">Alamat</label>
                  <input
                    type="text"
                    v-model="register.address"
                    id="address"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="portfolio" class="form-label">Portfolio</label>
                  <small
                    v-if="message.error != ''"
                    class="text-danger d-block"
                    >{{ message.error }}</small
                  >
                  <input
                    required
                    type="file"
                    id="portfolio"
                    class="form-control"
                    @change="selectImage"
                  />
                  <input type="hidden" v-model="register.studentMeta" />
                  <div class="my-2">
                    <div class="row">
                      <div class="col-md-4">
                        <button
                          v-if="
                            !$store.state.loadUploadFile && !message.uploaded
                          "
                          @click="uploadingImage()"
                          type="button"
                          class="btn btn-sm btn-primary btn-block"
                        >
                          Upload
                        </button>
                        <button
                          type="button"
                          v-if="message.uploaded"
                          class="btn btn-secondary btn-sm"
                        >
                          Uploaded
                        </button>
                        <button
                          type="button"
                          v-if="
                            $store.state.loadUploadFile && !message.uploaded
                          "
                          class="btn btn-sm btn-primary btn-block"
                        >
                          <span class="spinner-border spinner-border-sm"></span>
                          Sedang upload..
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="$store.state.messageRegisterSuccess != ''"
                  class="alert alert-success"
                >
                  {{ $store.state.messageRegisterSuccess }}
                </div>
              </div>
              <div class="modal-footer">
                <button
                  v-if="!$store.state.loadUploadFile"
                  type="submit"
                  class="btn btn-primary"
                >
                  Daftar
                </button>
                <button v-else type="button" class="btn btn-primary">
                  Sedang diproses..
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment from "moment";
import axios from "axios";
import { BASE_URL } from "../store";
moment.locale("id");

export default {
  data() {
    return {
      register: {
        training_id: "",
        user_id: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        session: "",
        studentMeta: "",
      },
      portfolio: null,
      message: {
        error: "",
        uploaded: false,
      },
    };
  },
  computed: {
    ...mapState(["policy"]),
    convertDateTitle: function() {
      return moment(this.policy.start).format("LL");
    },
    convertStartDate: function() {
      return moment(this.policy.start).format("LL");
    },
    convertEndDate: function() {
      return moment(this.policy.end).format("LL");
    },
  },
  methods: {
    ...mapActions(["fetchDetailTraining", "uploadImage", "registerTraining"]),
    selectImage(e) {
      const file = e.target.files[0];
      this.portfolio = file;
    },
    uploadingImage() {
      if (this.portfolio == null) {
        this.message.error = "File portfolio harus diisi";
      } else {
        this.message.error = "";
        this.uploadImage(this.portfolio).then((res) => {
          console.log(res);
          this.message.uploaded = true;
          this.register.studentMeta = res.data.url;
        });
      }
    },
    postRegisterTraining() {
      if (this.portfolio == null) {
        this.message.error = "File portfolio harus diisi";
      } else {
        this.registerTraining(this.register);
      }
    },
    setValue(data) {
      console.log(data);
      this.register.name = data.name;
      this.register.email = data.email;
      this.register.phone = data.phone;
      this.register.address = data.address;
    },
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${BASE_URL}api/user/getPublisherProfile`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          this.setValue(res.data.result);
        });
    }
    this.fetchDetailTraining(this.$route.query.id);
    this.register.training_id = this.$route.query.id;
  },
};
</script>
