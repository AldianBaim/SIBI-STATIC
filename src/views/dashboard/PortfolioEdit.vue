<template>
  <div id="dashboard-content">
    <div
      v-if="$store.state.messageStatusPortfolio"
      class="alert alert-success"
      role="alert"
    >
      Successfully inserted. <i class="fa fa-check"></i>
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
    <div><b>Sunting Portofolio</b></div>
    <div class="mt-4">
      <form
        @submit.prevent="updatePortfolio()"
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
          <div class="col-md-6">
            <div class="form-group">
              <label>File/Attachment ~ Maks 2MB</label
              ><input
                v-model="portfolio.attachment"
                type="text"
                accept="application/pdf"
                class="form-control"
                placeholder="File url in here.."
                data-error="File is required."
                required="required"
              />
              <div class="help-block with-errors"></div>
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
  data() {
    return {
      portfolio: {
        title: "",
        description: "",
        attachment: "",
        year: "",
      },
    };
  },
  name: "Portfolio Detail",
  methods: {
    ...mapActions(["fetchDetailPortfolio", "updateDetailPortfolio"]),
    setValue(portfolio) {
      portfolio = portfolio || this.$store.state.portfolio;
      this.portfolio.title = portfolio.title;
      this.portfolio.description = portfolio.description;
      this.portfolio.attachment = portfolio.attachment;
      this.portfolio.year = portfolio.year;
    },
    updatePortfolio() {
      this.updateDetailPortfolio(this.portfolio);
    },
  },
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
  created() {
    this.$store.state.portfolio
      ? this.fetchDetailPortfolio(this.$route.params.id).then(this.setValue)
      : this.setValue();
    // this.fetchDetailPortfolio(this.$route.params.id);
  },
};
</script>