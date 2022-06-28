<template>
  <div id="dashboard-content">
    <div
      v-if="$store.state.messageStatusReport"
      class="alert alert-success"
      role="alert"
    >
      Laporan berhasil dibuat <i class="fa fa-check"></i>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="text-right mb-4">{{ $store.state.today }}</div>
    <h6 class="font-weight-bold mb-2"><u>Izin Cetak K-13</u></h6>
    <p>
      Harap untuk mencentang semua persyaratan dan pastikan data profil sudah
      dilengkapi. Data belum lengkap?
      <router-link to="/user/profil/publisher">Lengkapi disini</router-link>
    </p>
    <div class="mt-4">
      <div v-if="message !== ''" class="alert alert-danger">
        {{ message }}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="message = ''"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div v-if="messageSuccess !== ''" class="alert alert-success">
        {{ messageSuccess }}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="messageSuccess = ''"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <table class="table table-bordered">
        <tr>
          <td width="250">Nama Perusahaan</td>
          <td width="10">:</td>
          <td>{{ profilePublisher.name }}</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>{{ profilePublisher.address }}</td>
        </tr>
        <tr>
          <td>No. Telepon</td>
          <td>:</td>
          <td>{{ profilePublisher.phone }}</td>
        </tr>
        <tr>
          <td>NIB</td>
          <td>:</td>
          <td>{{ profilePublisher.nib }}</td>
        </tr>
        <tr>
          <td>Lampiran NIB</td>
          <td>:</td>
          <td>
            <a target="_blank" :href="profilePublisher.siup">{{
              profilePublisher.siup
            }}</a>
          </td>
        </tr>
        <tr>
          <td>Narahubung</td>
          <td>:</td>
          <td>{{ profilePublisher.contact_person_phone }}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>:</td>
          <td>{{ profilePublisher.email }}</td>
        </tr>
        <tr>
          <td>No Whatsapp</td>
          <td>:</td>
          <td>{{ profilePublisher.phone }}</td>
        </tr>
      </table>

      <form @submit.prevent="sendPermission()" accept-charset="utf-8">
        <div class="form-check">
          <input
            v-model="print_permission.cover"
            class="form-check-input"
            type="checkbox"
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            Mencantumkan harga buku pada cover belakang.
          </label>
        </div>
        <div class="form-check">
          <input
            v-model="print_permission.identity"
            class="form-check-input"
            type="checkbox"
            id="defaultCheck2"
          />
          <label class="form-check-label" for="defaultCheck2">
            Menampilkan identitas penerbit/percetakan pada halaman hak cipta
          </label>
        </div>
        <div class="form-check">
          <input
            v-model="print_permission.content"
            class="form-check-input"
            type="checkbox"
            id="defaultCheck3"
          />
          <label class="form-check-label" for="defaultCheck3">
            Tidak mengubah konten/materi dan spesifikasi teknis buku sesuai
            dengan SK Kepala BSKAP Nomor : 020/H/P/2022 tentang penetapan HET
            Buku Teks Pelajaran Kurikulum Merdeka.
          </label>
        </div>
        <div class="text-right">
          <button v-if="$store.state.loadPage" class="btn btn-primary">
            <span class="spinner-border spinner-border-sm"></span>
            Sedang diproses..
          </button>
          <button v-else type="submit" class="btn btn-primary">Kirim</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { BASE_URL } from "../../store";
export default {
  name: "Izin Cetak",
  data() {
    return {
      profilePublisher: [],
      print_permission: {
        cover: false,
        identity: false,
        content: false,
      },
      message: "",
      messageSuccess: "",
    };
  },
  methods: {
    ...mapActions(["sendPrintPermission"]),
    sendPermission() {
      if (
        this.print_permission.cover === false ||
        this.print_permission.identity === false ||
        this.print_permission.content === false
      ) {
        this.message = "Semua syarat harus disetujui";
      } else {
        this.sendPrintPermission()
          .then((res) => {
            this.message = "";
            if (res.data.status == "success") {
              this.messageSuccess = "Persyaratan berhasil dikirim";
            }
          })
          .catch((err) => console.log(err));
      }
    },
  },
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
  created() {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}api/user/getPublisherProfile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        this.profilePublisher = res.data.result;
        if (res.data.result.print_permission !== null) {
          this.print_permission.cover = true;
          this.print_permission.identity = true;
          this.print_permission.content = true;
        }
      });
  },
};
</script>
