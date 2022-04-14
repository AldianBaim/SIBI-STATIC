<template>
  <div id="dashboard-content">
    <div class="text-right mb-4">{{ $store.state.today }}</div>

    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade mb-4"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://i.ibb.co/b6FkPKN/images-35.webp"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <!-- <div class="carousel-item">
          <img
            src="https://i.ibb.co/2706hFB/penilaian.webp"
            class="d-block w-100"
            alt="..."
            style="height: 372px"
          />
        </div> -->
        <!-- <div class="carousel-item">
          <img
            src="https://via.placeholder.com/200x80?text=Slide3"
            class="d-block w-100"
            alt="..."
          />
        </div> -->
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="alert alert-info">
      Info terbaru : Selamat datang di dashboard Pelaku Perbukuan. Untuk panduan
      lengkap silakan unduh materi berikut ini
      <a href="https://bit.ly/ManualBookSibi" target="blank">Buku Panduan</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
};
</script>
