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
              <img :src="policy.cover" class="w-100" alt="" />
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
                    v-if="
                      policy.status == 'publish' &&
                        userRegisteredStatus.status == 'pending'
                    "
                    class="btn btn-block mt-3"
                    style="background-color: #1aae9f;border-radius: 5px!important;color: white"
                    disabled
                  >
                    Menunggu Konfirmasi
                  </button>
                  <button
                    v-if="
                      policy.status == 'publish' &&
                        userRegisteredStatus.status == 'approved'
                    "
                    class="btn btn-block mt-3"
                    style="background-color: #1aae9f;border-radius: 5px!important;color: white"
                    data-toggle="modal"
                    data-target="#tiketModal"
                  >
                    Lihat Tiket
                  </button>
                  <button
                    v-if="policy.status == 'draft' || policy.status == ''"
                    class="btn btn-block mt-3"
                    style="background-color: #1aae9f;border-radius: 5px!important;color: white"
                    disabled
                  >
                    Pendaftaran Ditutup
                  </button>
                  <button
                    v-if="
                      policy.status == 'publish' &&
                        userRegisteredStatus.status == 'failed'
                    "
                    class="btn btn-block mt-3"
                    style="background-color: #1aae9f;border-radius: 5px!important;color: white"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Daftar Event
                  </button>
                  <button
                    v-if="
                      policy.status == 'publish' &&
                        userRegisteredStatus.status == undefined
                    "
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
              <div
                v-if="policy.start.substr(0, 10) == policy.end.substr(0, 10)"
              >
                {{ convertStartDate }}
              </div>
              <div v-else>{{ convertStartDate }} - {{ convertEndDate }}</div>
              <span>Pukul {{ policy.start.substr(10) }} - Selesai</span>
            </div>
            <div class="mb-4">
              <h5>Lokasi</h5>
              <div>
                {{
                  policy.location != null || policy.location != ""
                    ? policy.location
                    : "Online (Daring)"
                }}
              </div>
              <div v-if="policy.location_address != ''">
                {{ policy.location_address }}
              </div>
              <a
                v-if="policy.maps_url != ''"
                target="_blank"
                :href="policy.maps_url"
                >Lihat map</a
              >
              <!-- <a target="_blank" :href="policy.maps_url">Lihat map</a> -->
            </div>
            <div
              v-if="policy.requirement != '' && policy.requirement != null"
              class="mb-4"
            >
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
            <form
              v-if="!successRegistered"
              @submit.prevent="postRegisterTraining()"
            >
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
                  <label for="role" class="form-label">Daftar Sebagai</label>
                  <select
                    id="role"
                    v-model="register.role"
                    class="form-control"
                  >
                    <option value="Desainer">Desainer</option>
                    <option value="Penulis">Penulis</option>
                    <option value="Penyadur">Penyadur</option>
                    <option value="Editor">Editor</option>
                    <option value="Ilustrator">Ilustrator</option>
                    <option value="Penerbit">Penerbit</option>
                    <option value="Pengembang BE">Pengembang BE</option>
                    <option value="Pencetak">Pencetak</option>
                    <option value="Toko Buku">Toko Buku</option>
                    <option value="Penerjemah">Penerjemah</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="eventType" class="form-label"
                    >Mengikuti Event secara :</label
                  >
                  <div class="form-check">
                    <input
                      v-model="register.session"
                      value="online"
                      class="form-check-input"
                      type="radio"
                      name="eventType"
                      id="online"
                    />
                    <label class="form-check-label" for="online">
                      Online (Zoom)
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      v-model="register.session"
                      value="offline"
                      class="form-check-input"
                      type="radio"
                      id="offline"
                      name="eventType"
                    />
                    <label class="form-check-label" for="offline">
                      Offline (di lokasi)
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="portfolio" class="form-label"
                    >Portfolio *Tidak Wajib</label
                  >
                  <small
                    v-if="message.portfolio.error != ''"
                    class="text-danger d-block"
                    >{{ message.portfolio.error }}</small
                  >
                  <input
                    type="file"
                    id="portfolio"
                    class="form-control"
                    @change="selectFilePDF"
                  />
                  <input type="hidden" v-model="fileUploaded.portfolio" />
                  <div class="my-2">
                    <div class="row">
                      <div class="col-md-4">
                        <button
                          v-if="
                            !loading.portfolio && !message.portfolio.uploaded
                          "
                          @click="uploadFilePDF()"
                          type="button"
                          class="btn btn-sm btn-primary btn-block"
                        >
                          Upload
                        </button>
                        <button
                          type="button"
                          v-if="message.portfolio.uploaded"
                          class="btn btn-secondary btn-sm"
                        >
                          Uploaded
                        </button>
                        <button
                          type="button"
                          v-if="
                            loading.portfolio && !message.portfolio.uploaded
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
                <div v-if="policy.metadata !== ''" class="form-group">
                  <label for="kerangka" class="form-label"
                    >Kerangka Buku Anak</label
                  >
                  <small
                    v-if="message.kerangka_buku_anak.error != ''"
                    class="text-danger d-block"
                    >{{ message.kerangka_buku_anak.error }}</small
                  >
                  <input
                    type="file"
                    id="kerangka"
                    class="form-control"
                    @change="selectFileKerangkaBuku"
                    required
                  />
                  <input
                    type="hidden"
                    v-model="fileUploaded.kerangka_buku_anak"
                  />
                  <div class="my-2">
                    <div class="row">
                      <div class="col-md-4">
                        <button
                          v-if="
                            !loading.kerangka_buku_anak &&
                              !message.kerangka_buku_anak.uploaded
                          "
                          @click="uploadFileKerangka()"
                          type="button"
                          class="btn btn-sm btn-primary btn-block"
                        >
                          Upload
                        </button>
                        <button
                          type="button"
                          v-if="message.kerangka_buku_anak.uploaded"
                          class="btn btn-secondary btn-sm"
                        >
                          Uploaded
                        </button>
                        <button
                          type="button"
                          v-if="
                            loading.kerangka_buku_anak &&
                              !message.kerangka_buku_anak.uploaded
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
              </div>
              <div class="modal-footer">
                <button
                  v-if="!$store.state.loadProcess"
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
            <div v-else class="modal-body">
              <div class="alert alert-success">
                Selamat, pendaftaran berhasil. Selanjutnya mohon untuk menunggu
                proses verifikasi.
              </div>

              <table class="table table-bordered">
                <tr>
                  <td width="160">Nama</td>
                  <td width="20">:</td>
                  <td>{{ dataRegistered.name }}</td>
                </tr>
                <tr>
                  <td>Nomor Tiket</td>
                  <td>:</td>
                  <td>{{ dataRegistered.ticketcode }}</td>
                </tr>
                <tr>
                  <td>Tanggal Daftar</td>
                  <td>:</td>
                  <td>{{ registeredDate }}</td>
                </tr>
                <tr>
                  <td>Kode QR</td>
                  <td>:</td>
                  <td>
                    <img :src="qrCodeRegistered" alt="" />
                  </td>
                </tr>
              </table>

              <p>
                Note : Mohon untuk menyimpan kode tiket pendaftaran untuk
                keperluan verifikasi. Bukti pendaftaran acara juga sudah kami
                kirimkan ke email.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="tiketModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="tiketModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center" id="tiketModalLabel">
                Tiket
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
            <div class="modal-body">
              <p>Berikut ini informasi tiket anda :</p>
              <table class="table table-bordered">
                <tr>
                  <td width="160">Nama</td>
                  <td width="20">:</td>
                  <td>{{ userRegisteredStatus.name }}</td>
                </tr>
                <tr>
                  <td>Nomor Tiket</td>
                  <td>:</td>
                  <td>{{ userRegisteredStatus.ticketcode }}</td>
                </tr>
                <tr>
                  <td>Tanggal Daftar</td>
                  <td>:</td>
                  <td>{{ registeredDate }}</td>
                </tr>
                <tr>
                  <td>Kode QR</td>
                  <td>:</td>
                  <td>
                    <img :src="qrCode" alt="" />
                  </td>
                </tr>
              </table>
            </div>
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
        session: "online",
        studentMeta: "",
        role: "Desainer",
      },
      file: {
        portfolio: null,
        kerangka_buku_anak: null,
      },
      fileUploaded: {
        portfolio: "",
        kerangka_buku_anak: "",
      },
      message: {
        portfolio: {
          error: "",
          uploaded: false,
        },
        kerangka_buku_anak: {
          error: "",
          uploaded: false,
        },
      },
      loading: {
        portfolio: false,
        kerangka_buku_anak: false,
      },
      dataRegistered: [],
      userRegisteredStatus: [],
      successRegistered: false,
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
    registeredDate: function() {
      return moment(this.userRegisteredStatus.created_at).format("LL");
    },
    qrCode: function() {
      let link = `https://api.buku.kemdikbud.go.id/api/training/ticket/${this.userRegisteredStatus.ticketcode}`;
      return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
    },
    qrCodeRegistered: function() {
      let link = `https://api.buku.kemdikbud.go.id/api/training/ticket/${this.dataRegistered.ticketcode}`;
      return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
    },
    dateRegistered: function() {
      return moment(this.dataRegistered.created_at).format("LL");
    },
  },
  methods: {
    ...mapActions([
      "fetchDetailTraining",
      "uploadImage",
      "registerTraining",
      "fetchRegisterTraining",
    ]),
    selectFilePDF(e) {
      const file = e.target.files[0];
      this.file.portfolio = file;
    },
    selectFileKerangkaBuku(e) {
      const file = e.target.files[0];
      this.file.kerangka_buku_anak = file;
    },
    uploadFilePDF() {
      if (this.file.portfolio == null) {
        this.message.portfolio.error = "File portfolio harus diisi";
      } else {
        this.loading.portfolio = true;
        this.message.portfolio.error = "";
        this.uploadImage(this.file.portfolio).then((res) => {
          this.loading.portfolio = false;
          this.message.portfolio.uploaded = true;
          this.fileUploaded.portfolio = res.data.url;
        });
      }
    },
    uploadFileKerangka() {
      if (this.policy.metadata != "") {
        if (this.file.kerangka_buku_anak == null) {
          this.message.kerangka_buku_anak.error =
            "File kerangka buku anak harus diisi";
        } else {
          this.loading.kerangka_buku_anak = true;
          this.message.kerangka_buku_anak.error = "";
          this.uploadImage(this.file.kerangka_buku_anak).then((res) => {
            this.message.kerangka_buku_anak.uploaded = true;
            this.loading.kerangka_buku_anak = false;
            this.fileUploaded.kerangka_buku_anak = res.data.url;
            console.log(res);
            // this.register.studentMeta = res.data.url;
          });
        }
      }
    },
    postRegisterTraining() {
      // Wrap and convert file portfolio & kerangka buku to JSON
      const files = {
        portfolio: this.fileUploaded.portfolio,
        kerangka_buku: this.fileUploaded.kerangka_buku_anak,
      };

      this.register.studentMeta = JSON.stringify(files);

      this.registerTraining(this.register).then((res) => {
        if (res.data.status == "success") {
          this.dataRegistered = res.data.data;
          this.successRegistered = true;
          this.userRegisteredStatus = "pending";
        } else {
          this.successRegistered = false;
        }
      });
    },
    setValue(data) {
      this.register.user_id = data.user_id;
      this.register.name = data.name;
      this.register.email = data.email;
      this.register.phone = data.phone;
      this.register.address = data.address;
      this.register.role = data.role;
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
      // Handle if status pending
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        user_id: user.user_id,
        training_id: this.$route.query.id,
      };
      this.fetchRegisterTraining(data).then((res) => {
        this.userRegisteredStatus = res.data;
      });
    }

    this.fetchDetailTraining(this.$route.query.id);
    this.register.training_id = this.$route.query.id;
  },
};
</script>
