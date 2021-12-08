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
        <h3>{{ policy.title }}</h3>
        <div class="row">
          <div class="col-md-6 col-sm-4">
            <img
              style="width: 100%"
              class="mt-4"
              :src="policy.cover"
              alt="Banner Pembinaan"
            />
          </div>
        </div>

        <p class="mt-4">{{ policy.description }}</p>

        <div><b>Informasi :</b></div>

        <div class="mt-4">
          <table class="table table-condensed table-striped">
            <tr>
              <th>Tempat</th>
              <td>Zoom</td>
            </tr>
            <tr>
              <th>Mulai</th>
              <td>{{ policy.start }}</td>
            </tr>
            <tr>
              <th>Berakhir</th>
              <td>{{ policy.end }}</td>
            </tr>
            <tr>
              <th>Deskripsi</th>
              <td>{{ policy.description }}</td>
            </tr>
          </table>

          <div class="mt-4 text-right">
            <div class="alert alert-warning">
              Daftar akun terlebih dahulu untuk mendaftar pembinaan. Jika sudah
              punya, silahkan login.
            </div>
            <a href="http://sibi.local/user/login" class="btn btn-warning"
              >Login &nbsp;&nbsp;<i class="fas fa-sign-in-alt"></i
            ></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["policy"]),
  },
  methods: {
    ...mapActions(["fetchDetailTraining"]),
  },
  created() {
    this.fetchDetailTraining(this.$route.query.id);
  },
};
</script>
