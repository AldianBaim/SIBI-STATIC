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
            class="col-lg-3"
            v-for="(training, index) in trainings"
            :key="index"
          >
            <div class="card shadow">
              <div class="card-body">
                <img
                  class="mb-3"
                  style="width: 100%"
                  :src="training.cover"
                  alt="Logo Kemendikbud"
                />

                <h5 class="card-title">{{ training.title }}</h5>
                <p class="card-text">
                  {{ training.description }}
                </p>

                <div class="mt-4 mb-4">
                  <span
                    ><i class="fas fa-clock"></i> {{ training.start }} -
                    {{ training.end }}</span
                  >
                  <br />
                  <span
                    ><i class="fas fa-search-location"></i>
                    {{ training.label }}</span
                  >
                </div>
                <router-link
                  :to="{ path: '/pembinaanDetail', query: { id: training.id } }"
                >
                  <a class="btn btn-primary">Selengkapnya</a>
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
export default {
  components: {
    VueSkeletonLoader,
  },
  computed: {
    ...mapState(["trainings"]),
  },
  methods: {
    ...mapActions(["fetchAllTraining"]),
  },

  created() {
    this.fetchAllTraining();
  },
};
</script>
