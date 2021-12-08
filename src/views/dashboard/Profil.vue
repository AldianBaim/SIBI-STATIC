<template>
  <div id="dashboard-content">
    <div
      v-if="$store.state.messageStatus"
      class="alert alert-success"
      role="alert"
    >
      Profil berhasil diperbaharui <i class="fa fa-check"></i>
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

    <form class="form" accept-charset="utf-8" @submit.prevent="updateProfile()">
      <input
        type="hidden"
        name="csrf_test_name"
        value="a83cafdced2655775fd6961a11625b1d"
      />
      <div class="mb-4">
        <u><b>Data Akun</b></u>
      </div>

      <div class="form-group">
        <label>Nama</label>
        <input type="text" v-model="user.name" class="form-control" />
      </div>

      <div class="form-group">
        <label>Nama pengguna / untuk login</label>
        <input type="text" v-model="user.username" class="form-control" />
      </div>

      <div class="form-group">
        <label>Foto Profil</label>
        <input type="file" name="avatar" id="avatar" class="form-control" />
        <img
          class="mt-3"
          width="150"
          src="http://sibi.local/sites/sibi/uploads/original/61ddb0e76689892a74ebeaab50c77d44.jpg"
        />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="text" v-model="user.email" class="form-control" disabled />
      </div>

      <div class="mb-4 mt-5">
        <u><b>Data Profil</b></u>
      </div>

      <div class="form-group">
        <label>Tanggal Lahir</label>
        <input
          type="date"
          v-model="user.profile[0]"
          name="profile[birthday]"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label>Pekerjaan</label>
        <input
          type="text"
          v-model="user.profile[1]"
          name="profile[jobs]"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label>Kota</label>
        <input
          type="text"
          v-model="user.profile[2]"
          name="profile[city]"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label>Nomor Telepon</label>
        <input
          type="text"
          v-model="user.profile[3]"
          name="profile[phone]"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Domisili/alamat</label>
        <input type="text" v-model="user.profile[4]" class="form-control" />
      </div>

      <div class="form-group">
        <label>Biografi</label>
        <input
          type="text"
          v-model="user.profile[5]"
          name="profile[phone]"
          class="form-control"
        />
      </div>

      <div class="mb-4 mt-5">
        <u><b>Ganti Password (opsional)</b></u>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          v-model="user.password"
          type="password"
          name="password"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label>Konfirmasi Password</label>
        <input
          v-model="user.confirm_password"
          type="password"
          name="confirm_password"
          class="form-control"
        />
      </div>
      <div class="text-right">
        <button
          v-if="!$store.state.loadPage"
          type="submit"
          class="btn btn-primary"
        >
          Perbaharui
        </button>
        <button v-if="$store.state.loadPage" class="btn btn-primary">
          <span class="spinner-border spinner-border-sm"></span>
          Sedang diproses..
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        profile: [],
      },
    };
  },
  name: "Profil",
  methods: {
    ...mapActions(["fetchUserProfile", "updateUserProfile"]),
    setValue(user) {
      user = user || this.$store.state.userProfile;
      this.user.name = user.name;
      this.user.username = user.username;
      this.user.email = user.email;
      this.user.profile.push(user.birthday);
      this.user.profile.push(user.jobs);
      this.user.profile.push(user.city);
      this.user.profile.push(user.phone);
      this.user.profile.push(user.address);
      this.user.profile.push(user.description);
    },
    updateProfile() {
      this.updateUserProfile(this.user);
    },
  },
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
  created() {
    !this.$store.state.userProfile
      ? this.fetchUserProfile().then(this.setValue)
      : this.setValue();
  },
  mounted() {
    $('[data-toggle="datepicker"]').datepicker({
      format: "yyyy-mm-dd",
    });
  },
};
</script>