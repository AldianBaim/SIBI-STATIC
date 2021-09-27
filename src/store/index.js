import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasilPenilaian: [],
    result: {},
    loadPage: false,
  },
  mutations: {
    // setHasilPenilaian(state, payload) {},
  },
  actions: {
    fetchAllPenilaian(context) {
      context.state.loadPage = true;
      axios
        .get("http://localhost:8080/hasil-penilaian.json")
        .then((res) => {
          context.state.hasilPenilaian = res.data.results;
          context.state.result = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(function() {
          context.state.loadPage = false;
        });
    },
  },
  modules: {},
});
