<template>
  <div id="dashboard-content">
    <div class="row">
      <div class="col-lg-4">
        <!-- <select class="form-control" aria-label="Default select example">
          <option selected>Semua Event</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> -->
      </div>
      <div class="col-lg-8">
        <div class="text-right mb-4">{{ timeToday }}</div>
      </div>
    </div>
    <div v-if="notFound" class="text-center my-5">
      <h5>Anda belum terdaftar dalam event apapun</h5>
    </div>
    <div
      v-else
      v-for="(training, index) of trainings"
      :key="index"
      class="card mb-3 my-3 border-0"
    >
      <div class="row no-gutters text-dark">
        <div class="col-md-4 pr-3">
          <router-link :to="'/pembinaanDetail?id=' + training.training_id">
            <img :src="training.training_event.cover" class="w-100" alt="..." />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body p-2">
            <router-link :to="'/pembinaanDetail?id=' + training.training_id">
              <h5 class="card-title text-primary">
                {{
                  training.training_event != undefined
                    ? training.training_event.title
                    : "ss"
                }}
              </h5>
            </router-link>
            <div>
              <span>
                {{
                  trainingDate(
                    training.training_event.start,
                    training.training_event.end,
                  )
                }}
              </span>
              , pukul {{ training.training_event.start.substr(11) }} - selesai
            </div>
            <div class="card-text mt-4">
              <div class="float-left">
                Status :
                <span
                  v-if="training.status == 'pending'"
                  class="badge bg-primary text-white font-weight-bold"
                  >Menunggu Approval</span
                >
                <span
                  v-if="
                    training.status == 'approved' ||
                      training.status == 'attended'
                  "
                  class="badge bg-success text-white font-weight-bold"
                  >Pendaftaran Diterima</span
                >
                <span
                  v-if="training.status == 'canceled'"
                  class="badge bg-warning text-white font-weight-bold"
                  >Pendaftaran Ditolak</span
                >
              </div>
              <div
                v-if="training.status == 'approved'"
                class="float-right mt-3"
              >
                <router-link :to="'/ticket/' + training.ticketcode">
                  <a
                    class="btn btn-sm btn-outline-primary mr-2"
                    style="border-radius: 5px!important"
                    ><i class="fa fa-ticket-alt fa-fw mr-1"></i>Lihat Tiket</a
                  >
                </router-link>
                <router-link :to="'/sertifikat/' + training.ticketcode">
                  <a
                    class="btn btn-sm btn-outline-success"
                    style="border-radius: 5px!important"
                    ><i class="fa fa-award fa-fw mr-1"></i>Lihat Sertifikat</a
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import { BASE_URL } from "../../store";

moment.locale("id");

export default {
  name: "Home",
  data() {
    return {
      trainings: [],
      notFound: false,
    };
  },
  methods: {
    trainingDate(start, end) {
      let momentStart =
        moment(start).format("dddd") + ", " + moment(start).format("LL");
      let momentEnd =
        moment(end).format("dddd") + ", " + moment(end).format("LL");
      let date =
        momentStart == momentEnd
          ? momentStart
          : momentStart + " - " + momentEnd;
      return date;
    },
  },
  computed: {
    timeToday: function() {
      const day = moment(this.$store.state.today).format("dddd");
      return day + ", " + moment(this.$store.state.today).format("LL");
    },
  },
  created() {
    const { email } = JSON.parse(localStorage.getItem("user"));
    axios
      .post(`${BASE_URL}api/training/tickets?email=${email}&limit=10&page=1`)
      .then((res) => {
        let statusUser = res.data.status;
        if (statusUser == "failed") {
          this.notFound = true;
        } else {
          this.trainings = res.data.data;
        }
      })
      .catch((err) => console.log(err));
  },
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
};
</script>
