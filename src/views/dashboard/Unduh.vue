<template>
  <div id="dashboard-content">
    <div class="text-right mb-4">{{ $store.state.today }}</div>

    <div class="mb-3 mt-3">Filter berdasarkan field berikut :</div>
    <form @submit.prevent="filterBook()">
      <div class="row mb-3 mt-3">
        <div class="col">
          <input
            v-model="book.title"
            id="title"
            type="text"
            class="form-control search_table"
            placeholder="Judul Buku"
          />
        </div>
        <div class="col">
          <input
            v-model="book.writer"
            id="writer"
            type="text"
            class="form-control search_table"
            placeholder="Nama Penulis"
          />
        </div>
      </div>

      <div class="row mb-3 mt-3">
        <div class="col">
          <input
            v-model="book.year"
            id="published_year"
            type="text"
            class="form-control search_table"
            placeholder="Tahun"
          />
        </div>
        <div class="col">
          <input
            v-model="book.isbn"
            id="isbn"
            type="text"
            class="form-control search_table"
            placeholder="ISBN"
          />
        </div>
      </div>

      <div class="d-flex justify-content-end mt-4">
        <button
          @click="fetchBookDownload()"
          class="btn btn-outline-primary btn-md btn-reset mr-2"
          type="button"
        >
          <span class="fa fa-retweet"></span> Reset
        </button>
        <button class="btn btn-primary btn-md btn-filter" type="submit">
          <span class="fa fa-filter"></span> Terapkan
        </button>
      </div>
    </form>

    <div class="mt-3 mb-3" id="result">
      Menampilkan
      <span id="perpage">{{ $store.state.bookDownload.length }}</span> dari
      {{ $store.state.bookDownload.length }} hasil
    </div>

    <div v-if="$store.state.bookDownload.length != 0">
      <div v-if="$store.state.loadPage" class="loading text-center">
        <img src="@/assets/loading-2.gif" alt="" class="img-fluid" />
      </div>
      <template v-else>
        <table
          class="table table-striped result-table"
          style="display: table"
          data-pagination="true"
        >
          <thead>
            <tr>
              <th scope="col">Judul</th>
              <th scope="col">Penulis</th>
              <th scope="col">Tahun</th>
              <th scope="col">ISBN</th>
              <th scope="col">File Resolusi Tinggi</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tbody>
            <tr v-for="(book, index) of bookDownload" :key="index">
              <td>{{ book.title }}</td>
              <td>{{ book.writer }}</td>
              <td>{{ book.published_year }}</td>
              <td>{{ book.isbn }}</td>
              <td>
                <a
                  :href="book.attachment"
                  target="blank"
                  class="btn btn-sm btn-primary"
                >
                  Unduh</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>

    <template v-else>
      <div class="text-center mt-5">
        <img width="60" src="@/assets/not-found.png" class="img-fluid" alt="" />
        <h4 class="text-center mt-2">Data tidak ditemukan.</h4>
      </div>
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
  name: "Unduh",
  data() {
    return {
      book: {
        title: "",
        writer: "",
        year: "",
        isbn: "",
      },
    };
  },
  methods: {
    ...mapActions(["fetchBookDownload", "filterSearchBook"]),
    filterBook() {
      this.filterSearchBook(this.book);
    },
  },
  computed: {
    ...mapState(["bookDownload"]),
  },
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
  created() {
    this.fetchBookDownload();
  },
};
</script>