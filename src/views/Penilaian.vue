<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">Daftar Hasil Penilaian Buku.</div>
          <div class="col">
            <div class="text-right bread">
              <i class="fas fa-home"></i> Beranda > Penilaian > Hasil
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="content" class="mt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="sidebar">
              <div class="mb-3 mt-3">Filter berdasarkan field berikut :</div>

              <div class="form-group">
                <label for="">Tipe</label>
                <select
                  v-model="filter.type"
                  class="form-control search_table"
                  placeholder="Tipe Buku"
                >
                  <option value="" selected>Semua</option>
                  <option value="text">Buku Teks Pelajaran</option>
                  <option value="nontext">Buku Non Teks Pelajaran</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Judul</label>
                <input
                  @keyup.enter="search()"
                  v-model="filter.title"
                  type="text"
                  class="form-control search_table"
                  placeholder="Judul Buku"
                />
              </div>
              <div class="form-group">
                <label for="">Nama Penulis</label>
                <input
                  @keyup.enter="search()"
                  v-model="filter.author"
                  type="text"
                  class="form-control search_table"
                  placeholder="Nama Penulis"
                />
              </div>
              <div class="form-group">
                <label for="">Nama Penerbit</label>
                <input
                  @keyup.enter="search()"
                  v-model="filter.publisher"
                  type="text"
                  class="form-control search_table"
                  placeholder="Nama Penerbit"
                />
              </div>

              <div class="form-group">
                <label for="">Peruntukan</label>
                <input
                  @keyup.enter="search()"
                  v-model="filter.edu_stage"
                  type="text"
                  class="form-control search_table"
                  placeholder="Peruntukan"
                />
              </div>
              <div class="form-group">
                <label for="">SK Kelayakan</label>
                <input
                  @keyup.enter="search()"
                  v-model="filter.no_sk"
                  type="text"
                  class="form-control search_table"
                  placeholder="SK Kelayakan"
                />
              </div>

              <button
                ref="loader"
                @click="search()"
                class="btn btn-primary btn-filter mb-5"
                type="button"
              >
                Terapkan
              </button>
            </div>
          </div>

          <div class="col-md-9">
            <div class="mt-3 mb-3" id="result">
              Menampilkan {{ $store.state.perPage }} dari
              {{ formatNumber($store.state.totalRows) }} hasil
            </div>

            <div
              v-if="$store.state.loadPage"
              style="height: 400px"
              class="d-flex justify-content-center align-items-center"
            >
              <img src="@/assets/loading-2.gif" class="img-fluid" alt="" />
            </div>

            <div v-else class="table-responsive">
              <table
                class="table table-striped result-table"
                style="display: table"
                data-pagination="true"
              >
                <thead>
                  <tr>
                    <th scope="col">Judul Buku</th>
                    <th scope="col">Penulis</th>
                    <th scope="col">Penerbit</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Peruntukan</th>
                    <th scope="col">SK Kelayakan</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(assessment, index) in assesments" :key="index">
                    <td>{{ assessment.title }}</td>
                    <td>{{ assessment.author }}</td>
                    <td>{{ assessment.publisher }}</td>
                    <td>{{ assessment.category }}</td>
                    <td>{{ assessment.edu_stage }}</td>
                    <td>{{ assessment.no_sk }}</td>
                    <td>{{ assessment.data }}</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="$store.state.loadPage == false" class="text-center mt-4">
              <button
                v-show="checkTotal"
                @click="loadMore()"
                class="btn btn-primary"
              >
                <span class="fa fa-filter"></span> Load More
              </button>
              <button
                class="btn btn-outline-warning btn-md btn-reset ml-1"
                type="button"
                @click="fetchAllAssesment()"
              >
                <span class="fa fa-retweet"></span> Reset
              </button>
            </div>

            <!-- row -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Penilaian",
  data() {
    return {
      amount: 1,
      filter: {
        type: "",
        title: "",
        author: "",
        publisher: "",
        edu_stage: "",
        no_sk: "",
      },
    };
  },
  computed: {
    ...mapState(["assesments"]),
    checkTotal() {
      if (this.$store.state.perPage == this.$store.state.totalRows) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions([
      "fetchAllAssesment",
      "filterSearch",
      "fetchLoadMoreAssesment",
    ]),
    search() {
      this.$store.state.assesments = [];
      this.filterSearch(this.filter);
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    },
    loadMore() {
      this.amount++;
      this.fetchLoadMoreAssesment(this.amount);
      this.$nextTick(() => {
        this.$refs.loader.scrollIntoView();
      });
    },
  },
  created() {
    this.fetchAllAssesment();
  },
};
</script>
