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
    <div
      v-for="(training, index) of trainings"
      :key="index"
      class="card mb-3 my-3 border-0"
    >
      <router-link :to="'/pembinaanDetail?id=' + training.training_id">
        <div class="row no-gutters text-dark">
          <div class="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
              class="w-100 h-100"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body p-2">
              <h5 class="card-title text-primary">
                {{
                  training.training_event != undefined
                    ? training.training_event.title
                    : "ss"
                }}
              </h5>
              <div>
                Kamis, 27 Mei 2022 - Sabtu, 28 Mei 2022, pukul 09:00 - selesai
              </div>
              <div class="card-text mt-4">
                <div class="float-left">
                  Status :
                  <span
                    v-if="training.status == 'pending'"
                    class="badge bg-salmon font-weight-bold"
                    >Menunggu Approval</span
                  >
                  <span
                    v-if="training.status == 'approved'"
                    class="badge bg-primary text-white font-weight-bold"
                    >Pendaftaran Diterima</span
                  >
                  <span
                    v-if="training.status == 'canceled'"
                    class="badge bg-danger text-white font-weight-bold"
                    >Pendaftaran Ditolak</span
                  >
                </div>
                <div v-if="training.status == 'approved'" class="float-right">
                  <router-link :to="'/ticket/' + training.ticketcode">
                    <a
                      class="btn btn-sm btn-outline-primary"
                      style="border-radius: 5px!important"
                      ><i class="fa fa-ticket-alt fa-fw mr-1"></i>Lihat tiket</a
                    >
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
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
    };
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
        this.trainings = res.data.data;
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
