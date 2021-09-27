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
                  id="type"
                  name=""
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
                  id="title"
                  name=""
                  type="text"
                  class="form-control search_table"
                  placeholder="Judul Buku"
                />
              </div>
              <div class="form-group">
                <label for="">Nama Penulis</label>
                <input
                  id="writer"
                  name=""
                  type="text"
                  class="form-control search_table"
                  placeholder="Nama Penulis"
                />
              </div>
              <div class="form-group">
                <label for="">Nama Penerbit</label>
                <input
                  id="publisher"
                  name=""
                  type="text"
                  class="form-control search_table"
                  placeholder="Nama Penerbit"
                />
              </div>

              <div class="form-group">
                <label for="">Peruntukan</label>
                <input
                  id="stage"
                  name=""
                  type="text"
                  class="form-control search_table"
                  placeholder="Peruntukan"
                />
              </div>
              <div class="form-group">
                <label for="">SK Kelayakan</label>
                <input
                  id="no_sk"
                  name=""
                  type="text"
                  class="form-control search_table"
                  placeholder="SK Kelayakan"
                />
              </div>

              <button class="btn btn-primary btn-filter mb-5" type="button">
                Terapkan
              </button>
            </div>
          </div>

          <div class="col-md-9">
            <div class="mt-3 mb-3" id="result">
              Menampilkan {{ $store.state.result.per_page }} dari
              {{ formatNumber($store.state.result.total_rows) }} hasil
            </div>

            <div class="loading" v-if="$store.state.loadPage">
              <div class="alert alert-warning">Sedang memuat data ...</div>
            </div>
            <table
              class="table table-striped result-table table-responsive"
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
                <tr v-for="(hasil, index) in hasilPenilaian" :key="index">
                  <td>{{ hasil.title }}</td>
                  <td>{{ hasil.author }}</td>
                  <td>{{ hasil.publisher }}</td>
                  <td>{{ hasil.category }}</td>
                  <td>{{ hasil.edu_stage }}</td>
                  <td>{{ hasil.no_sk }}</td>
                  <td>{{ hasil.data }}</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <div class="row">
              <div class="col-lg-12">
                <nav class="courses-pagination mt-50">
                  <div class="row my-4 text-right">
                    <div class="col-md-12">
                      <nav id="paging" class="search_table"></nav>
                    </div>
                  </div>
                </nav>
              </div>
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
  computed: {
    ...mapState(["hasilPenilaian"]),
  },
  methods: {
    ...mapActions(["fetchAllPenilaian"]),
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    },
  },
  created() {
    this.fetchAllPenilaian();
  },
};
</script>
