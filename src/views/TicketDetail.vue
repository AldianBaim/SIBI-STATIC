<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div v-if="notFound" class="col-lg-7">
        <h4 class="text-center">Tiket tidak ditemukan</h4>
      </div>
      <div v-else class="col-lg-7">
        <div>
          Event : <strong>{{ ticket.training_event.title }}</strong>
        </div>
        <table class="table table-bordered mt-2">
          <tr>
            <td width="160">Nama</td>
            <td width="20">:</td>
            <td>{{ ticket.name }}</td>
          </tr>
          <tr>
            <td>Nomor Tiket</td>
            <td>:</td>
            <td>{{ ticket.ticketcode }}</td>
          </tr>
          <tr>
            <td>Tanggal Daftar</td>
            <td>:</td>
            <td>{{ registeredDate }}</td>
          </tr>
          <tr>
            <td>Kode QR</td>
            <td>:</td>
            <td>
              <img :src="qrCode" alt="Kode QR" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../store";
import moment from "moment";
moment.locale("id");

export default {
  data() {
    return {
      ticket: [],
      notFound: false,
    };
  },
  computed: {
    registeredDate: function() {
      return moment(this.ticket.created_at).format("LL");
    },
    qrCode: function() {
      let link = `https://api.buku.kemdikbud.go.id/api/training/ticket/${this.ticket.ticketcode}`;
      return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
    },
  },
  created() {
    axios
      .post(`${BASE_URL}api/training/ticket/${this.$route.params.id}`)
      .then((res) => {
        if (res.data.status == "failed") {
          this.notFound = true;
        } else {
          this.ticket = res.data.data;
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
