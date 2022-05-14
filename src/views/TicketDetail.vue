<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div v-if="notFound" class="col-lg-7">
        <h4 class="text-center">Tiket tidak ditemukan</h4>
      </div>
      <div v-else class="col-lg-7">
        <div v-if="ticket.status == 'approved' || ticket.status == 'attended'">
          <div>
            Tiket untuk : <strong>{{ ticket.training_event.title }}</strong>
          </div>
          <table class="table table-bordered mt-2">
            <tr>
              <td width="160">ID Ticket</td>
              <td width="20">:</td>
              <td>{{ ticket.ticketcode }}</td>
            </tr>
            <tr>
              <td>Tanggal Daftar</td>
              <td>:</td>
              <td>{{ registeredDate }}</td>
            </tr>
            <tr>
              <td>Waktu</td>
              <td>:</td>
              <td>
                <div
                  v-if="
                    ticket.training_event.start.substr(0, 10) ===
                      ticket.training_event.end.substr(0, 10)
                  "
                >
                  {{ convertStartDate }}
                </div>
                <div v-else>{{ convertStartDate }} - {{ convertEndDate }}</div>
                <span
                  >Pukul {{ ticket.training_event.start.substr(10) }} -
                  Selesai</span
                >
              </td>
            </tr>
            <tr>
              <td>Tempat</td>
              <td>:</td>
              <td>
                <div>{{ ticket.training_event.location }}</div>
                <a
                  v-if="ticket.training_event.maps_url != ''"
                  :href="ticket.training_event.maps_url"
                  >Lihat map</a
                >
              </td>
            </tr>
            <tr>
              <td>Zoom Meeting</td>
              <td>:</td>
              <td>
                <div>
                  Meeting ID : {{ ticket.training_event.zoom_meeting_id }}
                </div>
                <div>Passcode : {{ ticket.training_event.zoom_passcode }}</div>
                <a :href="ticket.training_event.zoom_link" target="_blank"
                  >Zoom link</a
                >
              </td>
            </tr>
            <tr v-if="ticket.training_event.youtube_link != ''">
              <td>Youtube Live</td>
              <td>:</td>
              <td>
                <a :href="ticket.training_event.youtube_link">{{
                  ticket.training_event.youtube_link
                }}</a>
              </td>
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
        <div class="mt-4">
          <strong>Detail Peserta : </strong>
        </div>
        <table class="table table-bordered mt-2">
          <tr>
            <td width="160">Nama Lengkap</td>
            <td width="20">:</td>
            <td>{{ ticket.name }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>{{ ticket.email }}</td>
          </tr>
          <tr>
            <td>No Whatsapp</td>
            <td>:</td>
            <td>{{ ticket.phone }}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>
              {{ ticket.address }}
            </td>
          </tr>
          <tr>
            <td>Status Pendaftaran</td>
            <td>:</td>
            <td>
              <span v-if="ticket.status == 'approved'" class="text-primary">
                Pendaftaran Diterima
              </span>
              <span v-if="ticket.status == 'attended'" class="text-primary">
                Telah Mengikuti Acara
              </span>
              <span v-if="ticket.status == 'pending'" class="text-primary">
                Menunggu Konfirmasi
              </span>
              <span v-if="ticket.status == 'canceled'" class="text-primary">
                Pendaftaran Ditolak
              </span>
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
    convertStartDate: function() {
      return moment(this.ticket.training_event.start).format("LL");
    },
    convertEndDate: function() {
      return moment(this.ticket.training_event.end).format("LL");
    },
    registeredDate: function() {
      return moment(this.ticket.created_at).format("LL");
    },
    qrCode: function() {
      let link = `https://app.buku.kemdikbud.go.id/ticket/${this.ticket.ticketcode}`;
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
          console.log(res);
          this.ticket = res.data.data;
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
