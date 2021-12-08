<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">Daftar pelaku perbukuan tersertifikasi</div>
          <div class="col">
            <div class="text-right bread">
              <i class="fas fa-home"></i> Beranda > Pembinaan
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="content" class="mt-4">
      <div class="container">
        <div class="mb-4">
          Pusat Kurikulum dan Perbukuan bekerja sama dengan lembaga sertifikasi
          profesi melaksanakan sertifikasi profesi terhadap penulis dan
          penyunting baik yang berada di lingkungan Kementerian Pendidikan,
          Kebudayaan, Riset, dan Teknologi maupun penulis dan penyunting yang
          berasal dari instansi lain atau masyarakat secara umum yang juga
          berkompeten.
        </div>

        <div class="row">
          <div class="col-md-3">
            <div class="sidebar">
              <div class="form-group">
                <input
                  ref="input"
                  type="text"
                  id="input-name"
                  class="form-control"
                  placeholder="Cari nama"
                  v-model="filter.name"
                  @keyup.enter="filterSearch()"
                />
              </div>

              <div class="mb-3">Filter berdasarkan :</div>
              <div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input input-role"
                    value="Penulis"
                    id="role-name-1"
                    v-model="filter.penulis"
                  />
                  <label class="custom-control-label" for="role-name-1"
                    >Penulis</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input input-role"
                    value="Penelaah"
                    id="role-name-2"
                    v-model="filter.penelaah"
                  />
                  <label class="custom-control-label" for="role-name-2"
                    >Penelaah</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input input-role"
                    value="Editor"
                    id="role-name-3"
                    v-model="filter.editor"
                  />
                  <label class="custom-control-label" for="role-name-3"
                    >Editor</label
                  >
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input input-role"
                    value="Ilustrator"
                    id="role-name-4"
                    v-model="filter.ilustrator"
                  />
                  <label class="custom-control-label" for="role-name-4"
                    >Ilustrator</label
                  >
                </div>
              </div>

              <div class="mt-4">
                <button
                  @click="filterSearch()"
                  class="btn btn-primary btn-filter mb-2 mr-1"
                  type="button"
                >
                  Terapkan
                </button>
                <button
                  class="btn btn-warning btn-md btn-reset"
                  type="button"
                  @click="fetchAll"
                >
                  <span class="fa fa-retweet"></span>
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-9">
            <div class="mt-3 mb-3" id="result">
              Menampilkan {{ $store.state.perPage }} dari
              {{ $store.state.totalRows }} hasil
            </div>

            <div
              v-if="$store.state.loadPage"
              style="height: 400px"
              class="d-flex justify-content-center align-items-center"
            >
              <img src="@/assets/loading-2.gif" alt="" class="img-fluid" />
            </div>
            <div v-else class="table-responsive">
              <table
                class="table table-striped result-table table-responsive"
                style="display: table"
                data-pagination="true"
              >
                <thead>
                  <tr>
                    <th scope="col">Nama</th>
                    <th scope="col">Organisasi</th>
                    <th scope="col">Asesor</th>
                    <th scope="col">Tanggal Sertifikasi</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(certification, index) of certifications"
                    :key="index"
                  >
                    <td>{{ certification.name }}</td>
                    <td>{{ certification.organization }}</td>
                    <td>{{ certification.assessor }}</td>
                    <td>{{ certification.created_at }}</td>
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
                @click="fetchAll"
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
  data() {
    return {
      amount: 1,
      filter: {
        name: "",
        penulis: "",
        penelaah: "",
        editor: "",
        ilustrator: "",
      },
    };
  },
  computed: {
    ...mapState(["certifications"]),
    checkTotal() {
      if (this.$store.state.perPage == this.$store.state.totalRows) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions([
      "fetchAllCertification",
      "filterCertification",
      "fetchLoadMoreCertification",
    ]),
    fetchAll() {
      this.fetchAllCertification();
      this.$nextTick(() => {
        this.$refs.input.scrollIntoView();
      });
    },
    filterSearch() {
      if (this.filter.penulis == true) {
        this.filter.penulis = "Penulis";
      } else if (this.filter.penelaah == true) {
        this.filter.penelaah = "Penelaah";
      } else if (this.filter.editor == true) {
        this.filter.editor = "Editor";
      } else if (this.filter.ilustrator == true) {
        this.filter.ilustrator = "Ilustrator";
      } else if (this.filter.name == true) {
        this.filter.name = "Name";
      }
      this.filterCertification(this.filter);
    },
    loadMore() {
      this.amount++;
      this.fetchLoadMoreCertification(this.amount);
      this.$nextTick(() => {
        this.$refs.input.scrollIntoView();
      });
    },
  },
  created() {
    this.fetchAllCertification();
  },
};
</script>
