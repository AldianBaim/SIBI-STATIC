<template>
  <div id="dashboard-content">
    <div
      v-if="$store.state.messageStatusPortfolio"
      class="alert alert-success"
      role="alert"
    >
      Berhasil ditambahkan. <i class="fa fa-check"></i>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="text-right mb-4">{{ $store.state.today }}</div>
    <div><b>Tambah Portofolio</b></div>
    <div class="mt-4">
      <form
        @submit.prevent="portfolioAdd()"
        enctype="multipart/form-data"
        accept-charset="utf-8"
      >
        <input
          type="hidden"
          name="csrf_test_name"
          value="44c8529798bd8316b2483295c17206d9"
        /><input type="hidden" name="status" value="draft" />
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Title</label
              ><input
                v-model="portfolio.title"
                type="text"
                class="form-control"
                placeholder="Title"
                required="required"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label>Tipe</label>
              <select v-model="portfolio.type" class="form-control">
                <option value="Buku">Buku</option>
                <option value="Ilustrasi">Ilustrasi</option>
                <option value="Foto">Foto</option>
              </select>
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label>Description</label
              ><textarea
                v-model="portfolio.description"
                class="form-control"
                placeholder="Deskripsi"
                required="required"
              ></textarea>
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-6 mb-5">
            <div class="row d-flex align-items-center">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Lampiran (PDF/Zip) Maks 10MB</label>
                  <input
                    v-model="portfolio.attachment"
                    type="hidden"
                    class="form-control"
                  />
                  <small
                    v-if="messageError !== ''"
                    class="text-danger d-block"
                    >{{ messageError }}</small
                  >
                  <input
                    @change="selectFile"
                    type="file"
                    class="form-control"
                    required="required"
                  />
                  <div class="help-block with-errors"></div>
                </div>
                <div v-show="messageStatus" class="mt-2 alert alert-success">
                  {{ message }}
                </div>
                <button
                  v-if="!$store.state.loadUploadFile"
                  @click="uploadingFile()"
                  type="button"
                  class="btn btn-primary btn-block"
                >
                  Upload
                </button>
                <button
                  type="button"
                  v-if="$store.state.loadUploadFile"
                  class="btn btn-primary btn-block"
                >
                  <span class="spinner-border spinner-border-sm"></span>
                  Sedang diproses
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Year</label
              ><input
                v-model="portfolio.year"
                name="year"
                type="date"
                class="form-control"
                placeholder="Year"
                data-error="Valid email is required."
                required="required"
                value=""
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <p class="form-message"></p>
        </div>
        <div class="text-right">
          <button v-if="$store.state.loadPage" class="btn btn-primary">
            <span class="spinner-border spinner-border-sm"></span>
            Sedang diproses..
          </button>
          <button v-else type="submit" class="btn btn-primary">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Portfolio Add",
  data() {
    return {
      portfolio: {
        title: "",
        type: "Buku",
        attachment: "",
        description: "",
        year: "",
      },
      file: null,
      messageStatus: false,
      message: "",
      messageError: "",
    };
  },
  methods: {
    ...mapActions(["addNewPortfolio", "uploadFile"]),
    selectFile(e) {
      const file = e.target.files[0];
      this.file = file;
    },
    uploadingFile() {
      if (this.file === null) {
        this.messageError = "File portfolio harus diisi";
      } else {
        if (this.file.size >= 10000000) {
          this.messageError = "Ukuran file terlalu besar, maksimal 10 mb";
        } else {
          this.messageError = "";
          this.uploadFile(this.file)
            .then((res) => {
              if (res.status === "success") {
                this.portfolio.attachment = res.file;
                this.messageStatus = true;
                this.message =
                  "Berhasil diupload, selanjutnya silahkan klik tombol simpan";
              } else {
                this.messageError = res.message;
              }
            })
            .catch((err) => {
              this.messageError = "File gagal diupload";
              this.$store.state.loadUploadFile = false;
              console.log(err);
            });
        }
      }
    },
    portfolioAdd() {
      if (this.portfolio.attachment === "") {
        this.messageError = "Silahkan upload file portfolio terlebih dahulu";
      } else {
        this.addNewPortfolio(this.portfolio).then(() => {
          this.$router.push("/user/portfolio");
        });
      }
    },
  },
};
</script>

<style></style>
