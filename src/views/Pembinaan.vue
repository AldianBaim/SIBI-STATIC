<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">Informasi Pembinaan Terbaru</div>
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
        <div class="row"></div>
        <div class="mb-4">
          Salah satu upaya yang dilakukan oleh Pusat Kurikulum dan Perbukuan
          untuk mewujudkan buku bermutu adalah melalui program-program pembinaan
          pelaku perbukuan dalam hal pembinaan kompetensi dan manajemen
          perbukuan. Berikut adalah informasi mengenai program-program yang akan
          berlangsung maupun yang sudah terlaksana sebelumnya.
        </div>

        <div class="row">
          <template v-if="$store.state.loadPage">
            <div v-for="i in 4" :key="i" class="col-lg-3">
              <div class="card shadow">
                <div class="card-body">
                  <vue-skeleton-loader
                    class="rounded"
                    type="rect"
                    :width="210"
                    :height="200"
                    animation="wave"
                  />
                  <vue-skeleton-loader
                    class="mt-3"
                    type="rect"
                    :width="210"
                    :height="20"
                    animation="wave"
                  />
                  <div class="row">
                    <div class="col-md-6">
                      <vue-skeleton-loader
                        class="mt-3"
                        type="rect"
                        :width="100"
                        :height="15"
                        animation="wave"
                      />
                    </div>
                    <div class="col-md-6">
                      <vue-skeleton-loader
                        class="mt-3"
                        type="rect"
                        :width="87"
                        :height="15"
                        animation="wave"
                      />
                    </div>
                    <div class="col-md-6">
                      <vue-skeleton-loader
                        class="mt-3"
                        type="rect"
                        :width="99"
                        :height="10"
                        animation="wave"
                      />
                    </div>
                    <div class="col-md-6">
                      <vue-skeleton-loader
                        class="mt-3"
                        type="rect"
                        :width="87"
                        :height="10"
                        animation="wave"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <div
            class="col-12 col-lg-4"
            v-for="(training, index) in trainings"
            :key="index"
          >
            <div class="card shadow">
              <div class="position-relative bg-success" style="height: 270px">
                <img
                  class="card-img-top mb-3 w-100 h-100 position-relative"
                  :src="training.cover"
                  alt="Image"
                />
                <div
                  v-if="training.status == 'publish'"
                  class="position-absolute btn btn-sm btn-success font-weight-bold"
                  style="bottom: 5%;left: 3%"
                >
                  Pendaftaran dibuka
                </div>
                <div
                  v-else
                  class="position-absolute btn btn-sm btn-danger font-weight-bold"
                  style="bottom: 5%;left: 3%"
                >
                  Pendaftaran ditutup
                </div>
              </div>
              <div class="card-body p-2">
                <h5 class="card-title">{{ training.title }}</h5>
                <p class="card-text">
                  {{ training.description }}
                </p>

                <div class="mt-4 mb-4">
                  <div>
                    <i class="fas fa-calendar-alt"></i>
                    {{ convertDate(training.start) }} <br />
                    {{ training.start.substr(10) }} -
                    {{ training.end.substr(10) }}
                  </div>

                  <div>
                    <i class="fas fa-map-marker-alt"></i>
                    {{
                      training.location == null
                        ? "Belum ditentukan"
                        : training.location
                    }}
                  </div>
                  <div>
                    <i class="fas fa-users"></i>
                    <span class="ml-1 font-weight-bold"
                      >Kuota :
                      {{ training.seats - training.registered }} tersisa dari
                      {{ training.seats }}</span
                    >
                  </div>
                </div>
                <router-link
                  :to="{ path: '/pembinaanDetail', query: { id: training.id } }"
                >
                  <a class="btn btn-outline-primary btn-block">Selengkapnya</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <nav class="courses-pagination mt-50">
              <div class="row my-4 text-center">
                <div class="col-md-12">
                  <nav id="paging"></nav>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VueSkeletonLoader from "skeleton-loader-vue";
import moment from "moment";
moment.locale("id");
export default {
  components: {
    VueSkeletonLoader,
  },
  computed: {
    ...mapState(["trainings"]),
  },
  methods: {
    ...mapActions(["fetchAllTraining"]),
    convertDate(date) {
      return moment(date).format("LL");
    },
  },

  created() {
    this.fetchAllTraining();
  },
};
</script>
