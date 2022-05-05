<template>
  <div id="dashboard-content">
    <section id="profile-assesment">
      <form @submit.prevent="createAssesment()">
        <div
          v-if="$store.state.messageStatusErrorAssesment"
          v-html="$store.state.messageErrorAssesment"
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
        <h6 class="font-weight-bold mb-2"><u>Identitas Buku</u></h6>
        <p class="mb-4">Silahkan isi data-data terkait identitas buku</p>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="judulBuku" class="form-label">Judul Buku</label>
              <input
                required
                id="judulBuku"
                type="text"
                class="form-control"
                placeholder="Masukan judul buku"
                v-model="assesment.judul_buku"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="isbn" class="form-label">ISBN</label>
              <input
                required
                id="isbn"
                type="text"
                class="form-control"
                placeholder="Masukan ISBN"
                v-model="assesment.isbn"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="tahunTerbit" class="form-label"
                >Tahun Terbit (3 tahun terakhir)</label
              >
              <select
                required
                v-model="assesment.tahun_terbit"
                id="tahunTerbit"
                class="form-control"
              >
                <option value="2019" selected>2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="klasifikasi" class="form-label">Klasifikasi</label>
              <select
                required
                v-model="assesment.klasifikasi"
                id="klasifikasi"
                class="form-control"
              >
                <option value="Pengayaan Siswa">Pengayaan Siswa</option>
                <option value="Panduan Pendidik">Panduan Pendidik</option>
                <option value="Referensi">Referensi</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="kategori" class="form-label"
                >Kategori Penilaian</label
              >
              <select
                required
                v-model="assesment.kategori"
                id="kategori"
                class="form-control"
              >
                <option value="A.PAUD">A. PAUD</option>
                <option value="B.Non Fiksi">B. Non Fiksi</option>
                <option value="C.Fiksi">C. Fiksi</option>
                <option value="D.Panduan Pendidik">D. Panduan Pendidik</option>
              </select>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <label for="imprint" class="form-label">Imprint</label>
              <input
                required
                id="imprint"
                type="text"
                class="form-control"
                placeholder="Masukan nama dagang"
                v-model="assesment.imprint"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="edisi" class="form-label">Edisi Ke</label>
              <input
                required
                id="edisi"
                type="number"
                class="form-control"
                placeholder="Masukan edisi"
                v-model="assesment.edisi"
              />
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <label for="jumlahHalPrelim" class="form-label"
                >Jumlah Hal Prelim</label
              >
              <input
                required
                type="number"
                id="jumlahHalPrelim"
                class="form-control"
                v-model="assesment.jumlah_hal_prelim"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="jumlahHalIsi" class="form-label"
                >Jumlah Hal Isi</label
              >
              <input
                required
                type="number"
                id="jumlahHalIsi"
                class="form-control"
                v-model="assesment.jumlah_hal_isi"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="jumlahHalPostlim" class="form-label"
                >Jumlah Hal Postlim</label
              >
              <input
                required
                type="number"
                id="jumlahHalPostlim"
                class="form-control"
                v-model="assesment.jumlah_hal_postlim"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="isbn" class="form-label">Ukuran</label>
              <select required v-model="assesment.ukuran" class="form-control">
                <option value="A5">A5 (14.8 cm x 21 cm)</option>
                <option value="B5">B5 (17.6 cm x 25 cm)</option>
                <option value="A4">A4 (21 cm x 29.7 cm)</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="isbn" class="form-label">Warna*</label>
              <select required v-model="assesment.warna" class="form-control">
                <option value="BLACK WHITE">BLACK WHITE (BW)</option>
                <option value="1 Warna">1 Warna</option>
                <option value="2 Warna">2 Warna</option>
                <option value="FULL COLOR">FULL COLOR</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <label for="" class="form-label d-block"
              >Apakah buku ini pernah dinilai sebelumnya?</label
            >
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="pernah"
                v-model="assesment.pernah_dinilai"
              />
              <label class="form-check-label" for="inlineRadio1"
                >Pernah Dinilai</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="belum"
                v-model="assesment.pernah_dinilai"
              />
              <label class="form-check-label" for="inlineRadio2"
                >Belum Pernah Dinilai</label
              >
            </div>
          </div>
        </div>
        <hr />
        <h6 class="font-weight-bold mb-2"><u>Data Pelaku Perbukuan</u></h6>
        <p class="mb-4">Silahkan isi data-data terkait pelaku perbukuan</p>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="penulis" class="form-label">Nama Penulis*</label>
              <input
                required
                id="penulis"
                type="text"
                class="form-control"
                placeholder="Masukan nama penulis"
                v-model="assesment.penulis"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="editor" class="form-label">Nama Editor*</label>
              <input
                required
                id="editor"
                type="text"
                class="form-control"
                placeholder="Masukan nama editor"
                v-model="assesment.editor"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="ilustrator" class="form-label"
                >Nama Ilustrator*</label
              >
              <input
                required
                id="ilustrator"
                type="text"
                class="form-control"
                placeholder="Masukan nama ilustrator"
                v-model="assesment.ilustrator"
              />
            </div>
          </div>
        </div>
        <hr />
        <h6 class="font-weight-bold mb-2"><u>Data Berkas Buku</u></h6>
        <p class="mb-4">Silahkan isi data-data terkait berkas buku</p>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="fileOriginal" class="form-label"
                >File PDF Orisinil dan Lengkap
                <span class="text-muted">(PDF, ukuran maks 1mb)</span></label
              >
              <small
                v-if="validation.file_original"
                class="text-danger d-block"
                >{{
                  validation.message.file_original == ""
                    ? "Berkas harus diisi"
                    : validation.message.file_original
                }}</small
              >
              <input
                type="file"
                id="fileOriginal"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="assesment.file_original" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadFileOriginal"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadFileOriginal"
                  @click="uploadData"
                >
                  {{ loading.file_original ? "sedang diproses.." : "Upload" }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded <i class="fas fa-check"></i>
                </button>
                &nbsp;&nbsp;<small>{{ link.file_original }}</small>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <label for="fileNoIdentity" class="form-label"
                >File PDF Tanpa Identitas
                <span class="text-muted">(PDF, ukuran maks 1mb)</span></label
              >
              <small
                v-if="validation.file_no_identity"
                class="text-danger d-block"
                >{{
                  validation.message.file_no_identity == ""
                    ? "Berkas harus diisi"
                    : validation.message.file_no_identity
                }}</small
              >
              <input
                type="file"
                id="fileNoIdentity"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="assesment.file_no_identity" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadFileNoIdentity"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadFileNoIdentity"
                  @click="uploadData"
                >
                  {{
                    loading.file_no_identity ? "sedang diproses.." : "Upload"
                  }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded <i class="fas fa-check"></i>
                </button>
                &nbsp;&nbsp;<small>{{ link.file_no_identity }}</small>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <label for="BuktiPerbaikan" class="form-label"
                >Bukti perbaikan (khusus buku yang pernah dinilai dan tidak
                lulus)
                <span class="text-muted">(PDF, ukuran maks 1mb)</span></label
              >
              <small
                v-if="validation.bukti_perbaikan"
                class="text-danger d-block"
                >{{
                  validation.message.bukti_perbaikan == ""
                    ? "Berkas harus diisi"
                    : validation.message.bukti_perbaikan
                }}</small
              >
              <input
                type="file"
                id="buktiPerbaikan"
                class="form-control"
                @change="selectFile"
              />
              <input type="hidden" v-model="assesment.bukti_perbaikan" />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadBuktiPerbaikan"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadBuktiPerbaikan"
                  @click="uploadData"
                >
                  {{ loading.bukti_perbaikan ? "sedang diproses.." : "Upload" }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded <i class="fas fa-check"></i>
                </button>
                &nbsp;&nbsp;<small>{{ link.bukti_perbaikan }}</small>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h6 class="font-weight-bold mb-2"><u>Data Berkas Legalitas</u></h6>
        <p class="mb-4">Silahkan isi data-data terkait berkas legalitas</p>
        <div
          v-if="$store.state.messageStatusErrorassesment"
          v-html="$store.state.messageErrorassesment"
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
              <label for="suratPerjanjianPenerbitan" class="form-label"
                >Surat Perjanjian Penerbitan Penerbit Dan Penulis / Penerbit Dan
                Penerbit Asli (Bila Terjemahan)
                <span class="text-muted">(PDF, ukuran maks 1mb)</span></label
              >
              <small
                v-if="validation.surat_perjanjian_penerbitan"
                class="text-danger d-block"
                >{{
                  validation.message.surat_perjanjian_penerbitan == ""
                    ? "Berkas harus diisi"
                    : validation.message.surat_perjanjian_penerbitan
                }}</small
              >
              <input
                type="file"
                id="suratPerjanjianPenerbitan"
                class="form-control"
                @change="selectFile"
              />
              <input
                type="hidden"
                v-model="assesment.surat_perjanjian_penerbitan"
              />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadSuratPerjanjianPenerbitan"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadSuratPerjanjianPenerbitan"
                  @click="uploadData"
                >
                  {{
                    loading.surat_perjanjian_penerbitan
                      ? "sedang diproses.."
                      : "Upload"
                  }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded <i class="fas fa-check"></i>
                </button>
                &nbsp;&nbsp;<small>{{
                  link.surat_perjanjian_penerbitan
                }}</small>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <label for="suratPernyataanPenulis" class="form-label"
                >Surat Pernyataan Penulis Atau Ahli Waris Tentang Keaslian
                Naskah
                <span class="text-muted">(PDF, ukuran maks 1mb)</span></label
              >
              <small
                v-if="validation.surat_pernyataan_penulis"
                class="text-danger d-block"
                >{{
                  validation.message.surat_pernyataan_penulis == ""
                    ? "Berkas harus diisi"
                    : validation.message.surat_pernyataan_penulis
                }}</small
              >
              <input
                type="file"
                id="suratPernyataanPenulis"
                class="form-control"
                @change="selectFile"
              />
              <input
                type="hidden"
                v-model="assesment.surat_pernyataan_penulis"
              />
              <div class="my-1">
                <button
                  v-if="!$store.state.loadSuratPernyataanPenulis"
                  type="button"
                  class="btn btn-info btn-sm"
                  id="uploadSuratPernyataanPenulis"
                  @click="uploadData"
                >
                  {{
                    loading.surat_pernyataan_penulis
                      ? "sedang diproses.."
                      : "Upload"
                  }}
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-secondary btn-sm"
                  disabled
                >
                  Uploaded <i class="fas fa-check"></i>
                </button>
                &nbsp;&nbsp;<small>{{ link.surat_pernyataan_penulis }}</small>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="penanggungJawab" class="form-label"
                >Penanggung Jawab</label
              >
              <input
                required
                id="penanggungJawab"
                type="text"
                class="form-control"
                placeholder="Masukan nama penanggung jawab"
                v-model="assesment.penanggung_jawab"
              />
            </div>
          </div>
        </div>
        <div
          v-if="$store.state.messageStatusAssesment"
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
          <span>Sukses penilaian</span>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            {{
              $store.state.loadSubmitAssesment ? "Sedang diproses.." : "Submit"
            }}
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      assesment: {
        judul_buku: "",
        isbn: "",
        tahun_terbit: "2019",
        klasifikasi: "Pengayaan Siswa",
        kategori: "A.PAUD",
        imprint: "",
        edisi: "",
        jumlah_hal_prelim: "",
        jumlah_hal_isi: "",
        jumlah_hal_postlim: "",
        ukuran: "A5",
        warna: "BLACK WHITE",
        pernah_dinilai: "belum",
        penulis: "",
        editor: "",
        ilustrator: "",
        file_original: "",
        file_no_identity: "",
        bukti_perbaikan: "",
        surat_perjanjian_penerbitan: "",
        surat_pernyataan_penulis: "",
        penanggung_jawab: "",
      },
      file: {
        file_original: null,
        file_no_identity: null,
        bukti_perbaikan: null,
        surat_perjanjian_penerbitan: null,
        surat_pernyataan_penulis: null,
      },
      loading: {
        file_original: false,
        file_no_identity: false,
        bukti_perbaikan: false,
        surat_perjanjian_penerbitan: false,
        surat_pernyataan_penulis: false,
      },
      validation: {
        message: {
          file_original: "",
          file_no_identity: "",
          bukti_perbaikan: "",
          surat_perjanjian_penerbitan: "",
          surat_pernyataan_penulis: "",
        },
        file_original: false,
        file_no_identity: false,
        bukti_perbaikan: false,
        surat_perjanjian_penerbitan: false,
        surat_pernyataan_penulis: false,
      },
      link: {
        file_original: "",
        file_no_identity: "",
        bukti_perbaikan: "",
        surat_perjanjian_penerbitan: "",
        surat_pernyataan_penulis: "",
      },
    };
  },
  methods: {
    ...mapActions(["submitAssesment", "uploadFile"]),
    selectFile(event) {
      let file = event.target.files[0];
      event.target.id == "fileOriginal" && (this.file.file_original = file);
      event.target.id == "fileNoIdentity" &&
        (this.file.file_no_identity = file);
      event.target.id == "buktiPerbaikan" && (this.file.bukti_perbaikan = file);
      event.target.id == "suratPerjanjianPenerbitan" &&
        (this.file.surat_perjanjian_penerbitan = file);
      event.target.id == "suratPernyataanPenulis" &&
        (this.file.surat_pernyataan_penulis = file);
    },
    uploadData(event) {
      let file = null;

      // Conditional event button click
      if (event.target.id == "uploadFileOriginal") {
        console.log("file");
        if (this.file.file_original !== null) {
          this.loading.file_original = true;
          file = this.file.file_original;
        } else {
          this.validation.file_original = true;
        }
      }

      if (event.target.id == "uploadFileNoIdentity") {
        if (this.file.file_no_identity !== null) {
          this.loading.file_no_identity = true;
          file = this.file.file_no_identity;
        } else {
          this.validation.file_no_identity = true;
        }
      }

      if (event.target.id == "uploadBuktiPerbaikan") {
        if (this.file.bukti_perbaikan !== null) {
          this.loading.bukti_perbaikan = true;
          file = this.file.bukti_perbaikan;
        } else {
          this.validation.bukti_perbaikan = true;
        }
      }

      if (event.target.id == "uploadSuratPerjanjianPenerbitan") {
        if (this.file.surat_perjanjian_penerbitan !== null) {
          this.loading.surat_perjanjian_penerbitan = true;
          file = this.file.surat_perjanjian_penerbitan;
        } else {
          this.validation.surat_perjanjian_penerbitan = true;
        }
      }

      if (event.target.id == "uploadSuratPernyataanPenulis") {
        if (this.file.surat_pernyataan_penulis !== null) {
          this.loading.surat_pernyataan_penulis = true;
          file = this.file.surat_pernyataan_penulis;
        } else {
          this.validation.surat_pernyataan_penulis = true;
        }
      }

      // Upload file to server
      if (file !== null) {
        this.uploadFile(file)
          .then((res) => {
            if (event.target.id == "uploadFileOriginal") {
              if (res.status == "success") {
                this.assesment.file_original = res.file;
                this.link.file_original = res.file;
                this.$store.state.loadFileOriginal = true;
                this.validation.file_original = false;
              } else {
                this.validation.message.file_original = res.message;
                this.validation.file_original = true;
              }
            }

            if (event.target.id == "uploadFileNoIdentity") {
              if (res.status == "success") {
                this.assesment.file_no_identity = res.file;
                this.link.file_no_identity = res.file;
                this.$store.state.loadFileNoIdentity = true;
                this.validation.file_no_identity = false;
              } else {
                this.validation.message.file_no_identity = res.message;
                this.validation.file_no_identity = true;
              }
            }

            if (event.target.id == "uploadBuktiPerbaikan") {
              if (res.status == "success") {
                this.assesment.bukti_perbaikan = res.file;
                this.link.bukti_perbaikan = res.file;
                this.$store.state.loadBuktiPerbaikan = true;
                this.validation.bukti_perbaikan = false;
              } else {
                this.validation.message.bukti_perbaikan = res.message;
                this.validation.bukti_perbaikan = true;
              }
            }

            if (event.target.id == "uploadSuratPerjanjianPenerbitan") {
              if (res.status == "success") {
                this.assesment.surat_perjanjian_penerbitan = res.file;
                this.link.surat_perjanjian_penerbitan = res.file;
                this.$store.state.loadSuratPerjanjianPenerbitan = true;
                this.validation.surat_perjanjian_penerbitan = false;
              } else {
                this.validation.message.surat_perjanjian_penerbitan =
                  res.message;
                this.validation.surat_perjanjian_penerbitan = true;
              }
            }

            if (event.target.id == "uploadSuratPernyataanPenulis") {
              if (res.status == "success") {
                this.assesment.surat_pernyataan_penulis = res.file;
                this.link.surat_pernyataan_penulis = res.file;
                this.$store.state.loadSuratPernyataanPenulis = true;
                this.validation.surat_pernyataan_penulis = false;
              } else {
                this.validation.message.surat_pernyataan_penulis = res.message;
                this.validation.surat_pernyataan_penulis = true;
              }
            }
          })
          .catch((err) => {
            if (err == 403) {
              if (event.target.id == "uploadFileOriginal") {
                this.validation.message.file_original =
                  "Ukuran file terlalu besar";
                this.validation.file_original = true;
              }

              if (event.target.id == "uploadFileNoIdentity") {
                this.validation.message.file_no_identity =
                  "Ukuran file terlalu besar";
                this.validation.file_no_identity = true;
              }

              if (event.target.id == "uploadBuktiPerbaikan") {
                this.validation.message.bukti_perbaikan =
                  "Ukuran file terlalu besar";
                this.validation.bukti_perbaikan = true;
              }

              if (event.target.id == "uploadSuratPerjanjianPenerbitan") {
                this.validation.message.surat_perjanjian_penerbitan =
                  "Ukuran file terlalu besar";
                this.validation.surat_perjanjian_penerbitan = true;
              }

              if (event.target.id == "uploadSuratPernyataanPenulis") {
                this.validation.message.surat_pernyataan_penulis =
                  "Ukuran file terlalu besar";
                this.validation.surat_pernyataan_penulis = true;
              }
            }
          })
          .finally(() => {
            this.loading.file_original = false;
            this.loading.file_no_identity = false;
            this.loading.bukti_perbaikan = false;
            this.loading.surat_perjanjian_penerbitan = false;
            this.loading.surat_pernyataan_penulis = false;
          });
      }
    },
    createAssesment() {
      this.submitAssesment(this.assesment);
      setTimeout(() => {
        this.$store.state.loadSubmitAssesment = false;
        scrollTo({ top: "0", behavior: "smooth" });
      }, 1000);
    },
  },
};
</script>

<style></style>
