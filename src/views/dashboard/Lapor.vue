<template>
  <div id="dashboard-content">
    <div
      v-if="$store.state.messageStatusReport"
      class="alert alert-success"
      role="alert"
    >
      Laporan berhasil dibuat <i class="fa fa-check"></i>
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

    <div class="mt-4">
      <form @submit.prevent="sendReport()" class="form" accept-charset="utf-8">
        <div class="form-group">
          <label>Buku</label>
          <select v-model="report.slug" class="form-control" required>
            <option value="" disabled>Pilih ..</option>
            <option
              v-for="(book, index) of books"
              :key="index"
              :value="book.slug"
            >
              {{ book.title }}
            </option>
          </select>
          <div class="help-block with-errors"></div>
        </div>

        <div class="form-group">
          <label>Kategori</label>
          <select v-model="report.category" class="form-control" required>
            <option value="" disabled>Pilih Kategori</option>
            <option value="Salah Ketik">Salah Ketik</option>
            <option value="Pornografi">Pornografi</option>
            <option value="Sara">Sara</option>
            <option value="Lain-lain">Lain-lain</option>
          </select>
          <div class="help-block with-errors"></div>
        </div>

        <div class="single-form form-group">
          <label>Pesan</label>
          <textarea
            v-model="report.message"
            class="form-control"
            placeholder="Pesan"
            data-error="Mohon tulis pesan Anda."
            required="required"
          ></textarea>
          <div class="help-block with-errors"></div>
        </div>

        <div class="text-right">
          <button v-if="$store.state.loadPage" class="btn btn-primary">
            <span class="spinner-border spinner-border-sm"></span>
            Sedang diproses..
          </button>
          <button v-else type="submit" class="btn btn-primary">Kirim</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Lapor",
  data() {
    return {
      report: {
        message: "",
        slug: "",
        category: "",
      },
    };
  },
  computed: {
    ...mapState(["books"]),
  },
  methods: {
    ...mapActions(["fetchAllBook", "sendReportBook"]),
    sendReport() {
      this.sendReportBook(this.report).then((res) => {
        if (res.data.status == "success") {
          this.report.message = "";
          this.report.slug = "";
          this.report.category = "";
        }
      });
    },
  },
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
  created() {
    this.fetchAllBook();
  },
};
</script>
