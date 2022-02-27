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
        <input
          type="hidden"
          class="form-control mb-2"
          placeholder="Preview URL"
          v-model="user.avatar"
        />
        <input
          type="file"
          accept="image/*"
          name="avatar"
          id="avatar"
          class="form-control"
          @change="selectImage"
        />
        <img class="mt-3 img-fluid w-50" :src="previewImage" />
        <div class="my-2">
          <div class="row">
            <div class="col-md-4">
              <button
                v-if="!$store.state.loadUploadFile"
                @click="uploadingImage()"
                type="button"
                class="btn btn-primary btn-block"
              >
                Upload
              </button>
              <button
                type="button"
                v-if="$store.state.loadUploadFile"
                class="btn btn-primary btn-block"
              >
                <span class="spinner-border spinner-border-sm"></span>
                Sedang upload..
              </button>
            </div>
          </div>
        </div>
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
        avatar: "",
      },
      fileImage: null,
    };
  },
  name: "Profil",
  computed: {
    previewImage() {
      if (this.user.avatar != null) {
        return this.user.avatar;
      } else {
        return this.$store.state.image == null
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91pEd4WsCtHODPdl71DvG61_x2zS676NumA&usqp=CAU"
          : this.$store.state.image;
      }
    },
  },
  methods: {
    ...mapActions(["fetchUserProfile", "updateUserProfile", "uploadImage"]),
    selectImage(e) {
      const file = e.target.files[0];
      this.fileImage = file;
    },
    uploadingImage() {
      this.uploadImage(this.fileImage).then((res) => {
        this.user.avatar = res.data.url;
      });
    },
    setValue(user) {
      user = user || this.$store.state.userProfile;
      this.user.name = user.name;
      this.user.username = user.username;
      this.user.email = user.email;
      this.user.avatar = user.avatar;
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
