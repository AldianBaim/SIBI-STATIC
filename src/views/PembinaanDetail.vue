<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">Detil Informasi Pembinaan</div>
          <div class="col">
            <div class="text-right bread">
              <i class="fas fa-home"></i> Beranda > Pembinaan > Detil
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="$store.state.loadPage" id="content" class="mt-4">
      <div class="container">
        <div class="loading text-center">
          <img src="@/assets/loading-2.gif" alt="" class="img-fluid" />
        </div>
      </div>
    </section>

    <section v-else id="content" class="mt-4">
      <div class="container">
        <div class="card">
          <div class="row">
            <div class="col-lg-7">
              <img :src="policy.cover" class="w-100 h-100" alt="" />
            </div>
            <div class="col-lg-5">
              <div class="p-3">
                <div style="color: #1aae9f">{{ convertDateTitle }}</div>
                <h3 class="mt-3">{{ policy.title }}</h3>
                <h4 class="text-muted">{{ policy.subtitle }}</h4>
                <div style="margin-top: 100px">
                  <div>{{ policy.registered }} orang telah mendaftar</div>
                  <div>
                    {{ policy.seats - policy.registered }} sisa kursi tersedia
                  </div>
                  <button
                    class="btn btn-block mt-3"
                    style="background-color: #1aae9f;border-radius: 5px!important;color: white"
                  >
                    Daftar Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 pt-3">
            <h5>Tentang Event Ini</h5>
            <p>
              {{ policy.description }}
            </p>
          </div>
          <div class="col-lg-5">
            <div class="mb-4">
              <h5>Tanggal dan Waktu</h5>
              <span>{{ convertDate }} - Selesai</span>
            </div>
            <div class="mb-4">
              <h5>Tanggal dan Waktu</h5>
              <span>{{ policy.location_address }}</span> <br />
              <a target="_blank" :href="policy.maps_url">Lihat map</a>
            </div>
            <div class="mb-4">
              <h5>Persyaratan Peserta</h5>
              <p v-html="policy.requirement"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment from "moment";
moment.locale("id");

export default {
  computed: {
    ...mapState(["policy"]),
    convertDateTitle: function() {
      return moment(this.policy.start).format("LL");
    },
    convertDate: function() {
      return moment(this.policy.start).format("LLLL");
    },
  },
  methods: {
    ...mapActions(["fetchDetailTraining"]),
  },
  created() {
    this.fetchDetailTraining(this.$route.query.id);
  },
};
</script>
