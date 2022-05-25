<template>
  <div>
    <section v-if="$store.state.loadProvider" id="content" class="mt-4">
      <div class="container">
        <div class="loading text-center">
          <img src="@/assets/loading-2.gif" alt="" class="img-fluid" />
        </div>
      </div>
    </section>
    <section v-else class="my-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Daftar Penyedia Buku Kurikulum Merdeka</h5>
          <h6 v-if="providers.length < 1" class="text-center text-muted">
            Data belum tersedia
          </h6>
          <table v-else class="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(provider, index) in providers" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ provider.name }}</td>
                <td>{{ provider.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["providers"]),
  },
  methods: {
    ...mapActions(["fetchAllProvider"]),
  },
  created() {
    this.fetchAllProvider();
  },
};
</script>

<style></style>
