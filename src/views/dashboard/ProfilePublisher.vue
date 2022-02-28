<template>
  <div id="dashboard-content">
    <section id="profile-publisher">
      <form @submit.prevent="updateProfile()">
        <h6 class="font-weight-bold mb-2"><u>Data Penerbit</u></h6>
        <p class="mb-4">Silahkan isi data-data terkait penerbit</p>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="penerbit" class="form-label">Nama Penerbit</label>
              <input
                required
                id="penerbit"
                type="text"
                class="form-control"
                placeholder="Masukan nama penerbit"
                v-model="publisher.name"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="provinsi" class="form-label">Provinsi</label>
              <select
                v-model="publisher.province"
                id="provinsi"
                class="form-control"
                required
                @change="getCity($event)"
              >
                <option value="" disabled>Pilih ..</option>
                <option
                  v-for="(province, index) of provinces"
                  :key="index"
                  :value="province.id"
                >
                  {{ province.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="kota" class="form-label">Kota</label>
              <select
                required
                class="form-control"
                id="kota"
                v-model="publisher.city"
              >
                <option value="" selected disabled>Pilih Kota</option>
                <option
                  v-for="(city, index) in cities"
                  :key="index"
                  :value="city.id"
                  >{{ city.name }}</option
                >
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="alamat" class="form-label">Alamat Penerbit</label>
              <textarea
                required
                id="alamat"
                class="form-control"
                v-model="publisher.address"
              ></textarea>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="noTelp" class="form-label"
                >No. Telepon Penerbit</label
              >
              <input
                required
                type="number"
                id="noTelp"
                class="form-control"
                v-model="publisher.phone"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="email" class="form-label">Email Penerbit</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                <input
                  readonly
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Masukan email penerbit"
                  v-model="publisher.email"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="alamatPusat" class="form-label"
                >Alamat Kantor Pusat</label
              >
              <textarea
                required
                id="alamatPusat"
                class="form-control"
                v-model="publisher.head_office"
              ></textarea>
            </div>
          </div>
        </div>
        <hr />
        <h6 class="font-weight-bold mb-2"><u>Data Direktur</u></h6>
        <p class="mb-4">Silahkan isi data-data terkait direktur</p>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="direktur" class="form-label">Nama Direktur</label>
              <input
                required
                id="direktur"
                type="text"
                class="form-control"
                placeholder="Masukan nama direktur"
                v-model="publisher.director_name"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="noHpDirektur" class="form-label"
                >No. HP / Telepon Direktur</label
              >
              <input
                required
                id="noHpDirektur"
                type="number"
                class="form-control"
                placeholder="Masukan nomor telepon"
                v-model="publisher.director_phone"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="emailDirektur" class="form-label"
                >Email Direktur</label
              >
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                <input
                  required
                  type="email"
                  class="form-control"
                  id="emailDirektur"
                  placeholder="Masukan email direktur"
                  v-model="publisher.director_email"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="contactPerson1" class="form-label"
                >Nama Kontak Person
              </label>
              <input
                required
                id="contactPerson1"
                type="text"
                class="form-control"
                placeholder="Masukan nama kontak person"
                v-model="publisher.contact_person"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="contactPerson" class="form-label"
                >No Telp Kontak Person</label
              >
              <input
                required
                id="contactPerson"
                type="number"
                class="form-control"
                placeholder="Masukan nomor telepon kontak person"
                v-model="publisher.contact_person_phone"
              />
            </div>
          </div>
        </div>
        <hr />
        <h6 class="font-weight-bold mb-2"><u>Data Berkas</u></h6>
        <p class="mb-4">Silahkan isi data-data terkait berkas</p>
        <div
          v-if="$store.state.messageStatusErrorPublisher"
          v-html="$store.state.messageErrorPublisher"
          class="alert alert-danger"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="pengajuan" class="form-label"
                >Surat Pengajuan Penilaian Buku</label
              >
              <small v-if="validation.pengajuan" class="text-danger d-block"
                >Berkas harus diisi</small
              >
              <input
                type="file"
                id="pengajuan"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="publisher.surat_pengajuan" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadPengajuan"
                  type="button"
                  id="uploadPengajuan"
                  class="btn btn-info btn-sm"
                  @click="uploadData"
                >
                  {{ loading.pengajuan ? "sedang diproses.." : "Upload" }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded
                </button>
                <a
                  v-if="link.pengajuan != '' || publisher.pengajuan != ''"
                  :href="link.pengajuan"
                  class="text-dark ml-2"
                  >Lihat berkas <i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="pernyataan" class="form-label"
                >Surat Pernyataan Kebenaran Informasi</label
              >
              <small v-if="validation.pernyataan" class="text-danger d-block"
                >Berkas harus diisi</small
              >
              <input
                type="file"
                id="pernyataan"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="publisher.surat_pernyataan" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadPernyataan"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadPernyataan"
                  @click="uploadData"
                >
                  {{ loading.pernyataan ? "sedang diproses.." : "Upload" }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded
                </button>
                <a
                  v-if="link.pernyataan != ''"
                  :href="link.pernyataan"
                  class="text-dark ml-2"
                  >Lihat berkas <i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="kta" class="form-label">KTA IKAPI</label>
              <small v-if="validation.kta" class="text-danger d-block"
                >Berkas harus diisi</small
              >
              <input
                type="file"
                id="kta"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="publisher.kta_ikapi" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadKta"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadKTA"
                  @click="uploadData"
                >
                  {{ loading.kta ? "sedang diproses.." : "Upload" }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded
                </button>
                <a v-if="link.kta != ''" :href="link.kta" class="text-dark ml-2"
                  >Lihat berkas <i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="akta" class="form-label">Akta</label>
              <small v-if="validation.akta" class="text-danger d-block"
                >Berkas harus diisi</small
              >
              <input
                type="file"
                id="akta"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="publisher.akta" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadAkta"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadAkta"
                  @click="uploadData"
                >
                  {{ loading.akta ? "sedang diproses.." : "Upload" }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded
                </button>
                <a
                  v-if="link.akta != ''"
                  :href="link.akta"
                  class="text-dark ml-2"
                  >Lihat berkas <i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="npwp" class="form-label">NPWP</label>
              <small v-if="validation.npwp" class="text-danger d-block"
                >Berkas harus diisi</small
              >
              <input
                type="file"
                id="npwp"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="publisher.npwp" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadNpwp"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadNPWP"
                  @click="uploadData"
                >
                  {{ loading.npwp ? "sedang diproses.." : "Upload" }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded
                </button>
                <a
                  v-if="link.npwp != ''"
                  :href="link.npwp"
                  class="text-dark ml-2"
                  >Lihat berkas <i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="siup" class="form-label">SIUP</label>
              <small v-if="validation.siup" class="text-danger d-block"
                >Berkas harus diisi</small
              >
              <input
                type="file"
                id="siup"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="publisher.siup" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadSiup"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadSIUP"
                  @click="uploadData"
                >
                  {{ loading.siup ? "sedang diproses.." : "Upload" }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded
                </button>
                <a
                  v-if="link.siup != ''"
                  :href="link.siup"
                  class="text-dark ml-2"
                  >Lihat berkas <i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="$store.state.messageStatusPublisher"
          class="alert alert-success"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <span
            >Berhasil memperbaharui data profil penerbit. Selanjutnya silahkan
            klik <a href="https://odk.101.my.id/">tautan ini</a> untuk
            mendaftarkan buku.</span
          >
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            {{ $store.state.loadPage ? "Sedang diproses.." : "Submit" }}
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      API_KEY:
        "a0a39455c89dadd653f4a0f4a1748df3aa5c92448396881214a47d90547494fa",
      API_PROVINCE: "https://api.binderbyte.com",
      provinces: [],
      cities: [],

      publisher: {
        name: "",
        address: "",
        province: "",
        phone: "",
        email: "",
        head_office: "",
        city: "",
        director_name: "",
        director_phone: "",
        director_email: "",
        contact_person: "",
        contact_person_phone: "",
        npwp: "",
        siup: "",
        akta: "",
        kta_ikapi: "",
        surat_pengajuan: "",
        surat_pernyataan: "",
      },
      file: {
        npwp: null,
        siup: null,
        akta: null,
        kta_ikapi: null,
        surat_pengajuan: null,
        surat_pernyataan: null,
      },
      loading: {
        pengajuan: false,
        pernyataan: false,
        npwp: false,
        kta: false,
        akta: false,
        siup: false,
      },
      validation: {
        pengajuan: false,
        pernyataan: false,
        siup: false,
        akta: false,
        kta: false,
        npwp: false,
      },
      link: {
        pengajuan: "",
        pernyataan: "",
        siup: "",
        akta: "",
        npwp: "",
        kta: "",
      },
    };
  },
  methods: {
    ...mapActions(["updatePublisherProfile", "uploadFile"]),
    selectFile(event) {
      let file = event.target.files[0];
      event.target.id == "pengajuan" && (this.file.surat_pengajuan = file);
      event.target.id == "pernyataan" && (this.file.surat_pernyataan = file);
      event.target.id == "npwp" && (this.file.npwp = file);
      event.target.id == "siup" && (this.file.siup = file);
      event.target.id == "akta" && (this.file.akta = file);
      event.target.id == "kta" && (this.file.kta_ikapi = file);
    },
    uploadData(event) {
      console.log(this.file.surat_pengajuan);
      let file = null;

      // Conditional event button click
      if (event.target.id == "uploadPengajuan") {
        if (this.file.surat_pengajuan !== null) {
          this.loading.pengajuan = true;
          file = this.file.surat_pengajuan;
        } else {
          this.validation.pengajuan = true;
        }
      }

      if (event.target.id == "uploadPernyataan") {
        if (this.file.surat_pernyataan !== null) {
          this.loading.pernyataan = true;
          file = this.file.surat_pernyataan;
        } else {
          this.validation.pernyataan = true;
        }
      }

      if (event.target.id == "uploadNPWP") {
        if (this.file.npwp !== null) {
          this.loading.npwp = true;
          file = this.file.npwp;
        } else {
          this.validation.npwp = true;
        }
      }

      if (event.target.id == "uploadSIUP") {
        if (this.file.siup !== null) {
          this.loading.siup = true;
          file = this.file.siup;
        } else {
          this.validation.siup = true;
        }
      }

      if (event.target.id == "uploadAkta") {
        if (this.file.akta !== null) {
          this.loading.akta = true;
          file = this.file.akta;
        } else {
          this.validation.akta = true;
        }
      }

      if (event.target.id == "uploadKTA") {
        if (this.file.kta_ikapi !== null) {
          this.loading.kta = true;
          file = this.file.kta_ikapi;
        } else {
          this.validation.kta = true;
        }
      }

      // Upload file to server
      if (file !== null) {
        this.uploadFile(file).then((res) => {
          console.log(res);
          if (event.target.id == "uploadPengajuan") {
            this.publisher.surat_pengajuan = res.file;
            this.link.pengajuan = res.file;
            this.$store.state.loadPengajuan = true;
            this.validation.pengajuan = false;
          }
          if (event.target.id == "uploadPernyataan") {
            this.publisher.surat_pernyataan = res.file;
            this.link.pernyataan = res.file;
            this.$store.state.loadPernyataan = true;
            this.validation.pernyataan = false;
          }
          if (event.target.id == "uploadNPWP") {
            this.publisher.npwp = res.file;
            this.link.npwp = res.file;
            this.$store.state.loadNpwp = true;
            this.validation.npwp = false;
          }
          if (event.target.id == "uploadSIUP") {
            this.publisher.siup = res.file;
            this.link.siup = res.file;
            this.$store.state.loadSiup = true;
            this.validation.siup = false;
          }
          if (event.target.id == "uploadAkta") {
            this.publisher.akta = res.file;
            this.link.akta = res.file;
            this.$store.state.loadAkta = true;
            this.validation.akta = false;
          }
          if (event.target.id == "uploadKTA") {
            this.publisher.kta_ikapi = res.file;
            this.link.kta = res.file;
            this.$store.state.loadKta = true;
            this.validation.kta = false;
          }
        });
      }
    },
    updateProfile() {
      this.updatePublisherProfile(this.publisher);
      this.$store.state.loadPage = false;
    },
    setValue(publisher) {
      this.publisher.name = publisher.name;
      this.publisher.province = publisher.province;
      this.publisher.city = publisher.city;
      this.publisher.address = publisher.address;
      this.publisher.phone = publisher.phone;
      this.publisher.head_office = publisher.head_office;
      this.publisher.director_name = publisher.director_name;
      this.publisher.director_phone = publisher.director_phone;
      this.publisher.director_email = publisher.director_email;
      this.publisher.contact_person = publisher.contact_person;
      this.publisher.contact_person_phone = publisher.contact_person_phone;
      this.publisher.surat_pengajuan = publisher.surat_pengajuan;
      this.publisher.surat_pernyataan = publisher.surat_pernyataan;
      this.publisher.npwp = publisher.npwp;
      this.publisher.kta_ikapi = publisher.kta_ikapi;
      this.publisher.siup = publisher.siup;
      this.publisher.akta = publisher.akta;

      // Set link state
      this.link.pengajuan = publisher.surat_pengajuan;
      this.link.pernyataan = publisher.surat_pernyataan;
      this.link.npwp = publisher.npwp;
      this.link.kta = publisher.kta_ikapi;
      this.link.siup = publisher.siup;
      this.link.akta = publisher.akta;
    },
    getCity(e) {
      axios({
        method: "get",
        url:
          this.API_PROVINCE +
          `/wilayah/kabupaten?api_key=${this.API_KEY}&id_provinsi=${e.target.value}`,
      }).then((res) => {
        console.log(res);
        this.cities = res.data.value;
      });
    },
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"));

    this.publisher.email = user.email;
  },
  mounted() {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://api.buku.kemdikbud.cloudapp.web.id/api/user/getPublisherProfile",
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((res) => {
        this.setValue(res.data.result);
        axios({
          method: "get",
          url:
            this.API_PROVINCE +
            `/wilayah/kabupaten?api_key=${this.API_KEY}&id_provinsi=${res.data.result.province}`,
        }).then((res) => {
          console.log(res);
          this.cities = res.data.value;
        });
      });

    // Get Province
    axios({
      method: "get",
      url: this.API_PROVINCE + `/wilayah/provinsi?api_key=${this.API_KEY}`,
    }).then((res) => {
      this.provinces = res.data.value;
    });
  },
};
</script>

<style></style>
