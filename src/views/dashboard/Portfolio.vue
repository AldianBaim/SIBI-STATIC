<template>
  <div id="dashboard-content">
    <div class="text-right mb-4">{{ $store.state.today }}</div>

    <div class="mt-4 mb-4 text-right">
      <router-link to="portfolio/add" class="btn btn-primary">
        <i class="fa fa-plus"></i> Tambah
      </router-link>
    </div>

    <template v-if="portfolios.length == 0">
      <div class="text-center mt-5">
        <img width="60" src="@/assets/not-found.png" class="img-fluid" alt="" />
        <h4 class="text-center mt-2">Data tidak ditemukan.</h4>
      </div>
    </template>
    <template v-else>
      <div v-if="$store.state.loadPage" class="loading text-center">
        <img src="@/assets/loading-2.gif" alt="" class="img-fluid" />
      </div>
      <table v-else class="table table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">Judul</th>
            <th scope="col">Type</th>
            <th scope="col">Deskripsi</th>
            <th scope="col">Status</th>
            <th scope="col">Lampiran</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(portfolio, index) in portfolios" :key="index">
            <td>{{ portfolio.title }}</td>
            <td>{{ portfolio.type }}</td>
            <td>{{ portfolio.description }}</td>
            <td v-if="portfolio.status == 'publish'">
              <span class="badge badge-success">{{ portfolio.status }}</span>
            </td>
            <td v-else>
              <span class="badge badge-danger">{{ portfolio.status }}</span>
            </td>
            <td align="center">
              <a :href="portfolio.attachment" target="_blank"
                ><span class="fa fa-download"></span
              ></a>
            </td>
            <td width="170">
              <router-link
                :to="{ name: 'Portfolio-Edit', params: { id: portfolio.id } }"
              >
                <span class="badge bg-info text-white p-2 rounded-pill">
                  <i class="fa fa-pencil-alt"></i> Edit
                </span>
              </router-link>
              <span
                style="cursor:pointer"
                @click="deletePortfolio(portfolio.id)"
                class="badge bg-danger text-white p-2 rounded-pill ml-1"
              >
                <i class="fa fa-trash"></i> Hapus
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </template>

    <div class="row my-4 text-right">
      <div class="col-md-12">
        <nav id="paging"></nav>
        <!-- courses pagination -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Portfolio",
  computed: {
    ...mapState(["portfolios"]),
  },
  methods: {
    ...mapActions(["fetchAllPortfolio", "deletePortfolioById"]),
    deletePortfolio(id) {
      const confirm = window.confirm("Apakah anda yakin akan menghapus?");
      confirm && this.deletePortfolioById(id);
    },
  },
  created() {
    this.fetchAllPortfolio();
    this.$store.state.messageStatusPortfolio = false;
  },
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
#paging strong {
  padding: 12px 20px;
  margin-right: 10px;
  background-color: #ffc600;
  border-radius: 6px;
}
#paging a {
  padding: 7px 16px;
  border: 2px solid #aaaaaa;
  margin-right: 10px;
  border-radius: 6px;
  color: black;
}
</style>
