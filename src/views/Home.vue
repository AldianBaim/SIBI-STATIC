<template>
  <div>
    <div class="jumbotron-home d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                </ol>
                <div
                  class="carousel-inner"
                  style="padding-left: 70px; padding-right: 70px"
                >
                  <div class="carousel-item active pb-5">
                    <h2 class="mb-4">Selamat datang, Pelaku Perbukuan</h2>
                    <p>
                      SIBI adalah ekosistem <b>digital</b> untuk mewadahi
                      teman-teman penulis, penelaah, penerbit, dan lainnya.
                    </p>
                    <p>
                      Dengan tujuan menjadi pusat informasi dan komunikasi dua
                      arah terkait kegiatan perbukuan nasional.
                    </p>
                    <div class="mt-4">
                      <a
                        href="#manfaat"
                        class="btn btn-danger rounded-pill py-2 px-4"
                        >Pelajari lebih lanjut &nbsp;&nbsp;<i
                          class="fas fa-chevron-down"
                        ></i
                      ></a>
                    </div>
                  </div>
                  <div class="carousel-item pb-5">
                    <h2 class="mb-4">Ruang Lingkup</h2>
                    <p>
                      Platform ini mewadahi kegiatan perbukuan seperti manajemen
                      pembinaan, pusat data pelaku perbukuan, pengumuman
                      penilaian, penerimaan laporan, serta publikasi berbagai
                      kebijakan terkait perbukuan
                    </p>
                    <p>Pelajari dan dapatkan manfaat lebih lanjut.</p>
                    <a
                      class="btn btn-danger rounded-pill py-2 px-4"
                      href="/register"
                      >Daftar sekarang &nbsp;&nbsp;<i
                        class="fas fa-user-plus"
                      ></i
                    ></a>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    style="color: #444"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    style="color: #444"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="text-right">
              <img
                style="bottom: 0px; width: 100%"
                src="https://api.buku.kemdikbud.go.id/sites/sibi/themes/default/assets/jumbotron.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 d-block d-sm-none" style="background: #ebf7ff">
        <h2 class="mb-4">Selamat datang, Pelaku Perbukuan</h2>
        <p>
          SIBI adalah ekosistem <b>digital</b> untuk mewadahi teman-teman
          penulis, penelaah, penerbit, dan lainnya.
        </p>
        <p>
          Dengan tujuan menjadi pusat informasi dan komunikasi dua arah terkait
          kegiatan perbukuan nasional.
        </p>
        <div class="mt-4">
          <a href="#manfaat" class="btn btn-danger rounded-pill py-2 px-4"
            >Pelajari lebih lanjut &nbsp;&nbsp;<i
              class="fas fa-chevron-down"
            ></i
          ></a>
        </div>
      </div>
    </div>

    <div class="section-benefit p-4">
      <div class="container">
        <div id="manfaat" class="text-center mb-5 mt-5">
          <h3>Manfaat</h3>
          <p>
            Mari berkolaborasi dan dapatkan berbagai peluang dalam ekosistem
            SIBI
          </p>
        </div>

        <div class="row">
          <div class="col-md-3 col-sm-12">
            <div class="box">
              <div class="icon">
                <i class="fas fa-coins" style="color: #0080ca"></i>
              </div>
              <h5>Resmi Terdaftar</h5>
              <p>
                Dengan mendaftar di platform SIBI, teman-teman pelaku perbukuan
                mendapat peluang untuk dikenali dan dikurasi oleh staff
                perbukuan, serta dipublikasi sebagai partner resmi Kemendikbud
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="box">
              <div class="icon">
                <i class="fas fa-file-signature" style="color: #dc3545"></i>
              </div>
              <h5>Hasil Penilaian</h5>
              <p>
                Memantau hasil penilaian buku terbaru dan terkurasi secara
                akurat. Informasi tersebut mendapat dimanfaatkan untuk pengadaan
                buku dalam ruang lingkup dana BOS.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="box">
              <div class="icon">
                <i class="fas fa-globe-asia" style="color: #ffc107"></i>
              </div>
              <h5>Pembinaan / Pelatihan</h5>
              <p>
                Berpeluang mendapatkan informasi pembinaan terbaru serta menjadi
                orang yang terdepan dalam pendaftaran pelatihan. Terus
                tingkatkan <b>skill</b> terkait perbukuan.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="box">
              <div class="icon">
                <i class="fas fa-hammer" style="color: #11e276"></i>
              </div>
              <h5>Informasi Kebijakan</h5>
              <p>
                Mendapatkan informasi kebijakan dan pengumuman terkait kegiatan
                perbukuan.
              </p>
            </div>
          </div>
        </div>

        <p class="text-center mt-5">
          <router-link to="/manfaat">
            <a class="btn btn-warning">Dan masih banyak lagi ...</a>
          </router-link>
        </p>
      </div>
    </div>

    <div class="section-pengumuman py-5">
      <div class="container">
        <h3 class="text-center mb-4">Pengumuman</h3>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div
              id="carouselPengumuman"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/baner pendaftaran pencetakan buku k merdeka.jpg"
                    class="d-block w-100 rounded"
                    alt="Banner penilaian"
                  />
                </div>
                <div class="carousel-item">
                  <router-link
                    :to="{ path: '/pembinaanDetail', query: { id: '3' } }"
                  >
                    <img
                      src="../assets/baner webinar 17 mei 2022.jpg"
                      class="d-block w-100 rounded"
                      alt="Banner penilaian"
                    />
                  </router-link>
                </div>
                <div class="carousel-item">
                  <router-link
                    :to="{ path: '/pembinaanDetail', query: { id: '7' } }"
                  >
                    <img
                      src="../assets/baner workshop 18 mei 2022.jpg"
                      class="d-block w-100 rounded"
                      alt="Banner penilaian"
                    />
                  </router-link>
                </div>
              </div>
              <button
                class="carousel-control-prev border-0 bg-transparent"
                type="button"
                data-target="#carouselPengumuman"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon text-dark"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </button>
              <button
                class="carousel-control-next border-0 bg-transparent"
                type="button"
                data-target="#carouselPengumuman"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon text-dark"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </button>
            </div>
            <!-- <div class="text-center my-3">
              <a
                href="https://drive.google.com/file/d/1z4QNcdA5dbFnL21okAHnvUodKtFP5Xbu/view"
                class="btn btn-sm btn-primary mb-2 mb-md-0"
                target="_blank"
              >
                <span class="h5">Pengumuman HET</span>
              </a>
              <a
                href="http://ringkas.kemdikbud.go.id/daftarisianHET"
                class="btn btn-sm btn-primary mx-2"
                target="_blank"
              >
                <span class="h5">Format HET</span>
              </a>
              <a
                href="http://ringkas.kemdikbud.go.id/formulirlampiranHET"
                class="btn btn-sm btn-primary"
                target="_blank"
              >
                <span class="h5">Formulir HET</span>
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="section-kebijakan">
      <div class="container">
        <div class="text-center mb-5 mt-5">
          <h3>Kebijakan</h3>
          <p>Berbagai informasi kebijakan terkait perbukuan, terbaru.</p>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="media">
              <img
                class="mr-3 d-none d-sm-block"
                width="200"
                src="https://i.ibb.co/b6FkPKN/images-35.webp"
                alt="Kebijakan"
              />
              <div class="media-body">
                <div>
                  Penerimaan Pendaftaran Baru Calon Penilai Buku Teks Pelajaran
                  dan Buku Non Teks Pelajaran Tahun 2021
                </div>
                <p></p>

                <div class="mt-3">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm mr-2 btn-read"
                    data-url="https://static.cdn-cdpl.com/sibi/1097_AccMF_rekrutmen_calonpenilai_2021.pdf"
                    data-type="PDF"
                  >
                    <i class="fa fa-eye"></i> Baca
                  </button>
                  <a
                    type="button"
                    href="https://static.cdn-cdpl.com/sibi/1097_AccMF_rekrutmen_calonpenilai_2021.pdf"
                    target="_blank"
                    class="btn btn-warning btn-sm mr-2 btn-push-statistic"
                    data-id="8"
                    data-activity="download"
                    ><i class="fa fa-download"></i> Unduh</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="media">
              <img
                class="mr-3 d-none d-sm-block"
                width="200"
                src="https://i.ibb.co/b6FkPKN/images-35.webp"
                alt="Kebijakan"
              />
              <div class="media-body">
                <div>
                  Pengumuman Pendaftaran Penilaian Buku Non Teks Pelajaran Tahun
                  2021
                </div>
                <p></p>

                <div class="mt-3">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm mr-2 btn-read"
                    data-url="https://cdn-cdpl.sgp1.digitaloceanspaces.com/sibi/PENGUMUMAN%20PENDAFTARAN%20PENILAIAN%20BUKU%20NONTEKS%20TAHUN%202021.pdf"
                    data-type="PDF"
                  >
                    <i class="fa fa-eye"></i> Baca
                  </button>
                  <a
                    type="button"
                    href="https://cdn-cdpl.sgp1.digitaloceanspaces.com/sibi/PENGUMUMAN%20PENDAFTARAN%20PENILAIAN%20BUKU%20NONTEKS%20TAHUN%202021.pdf"
                    target="_blank"
                    class="btn btn-warning btn-sm mr-2 btn-push-statistic"
                    data-id="8"
                    data-activity="download"
                    ><i class="fa fa-download"></i> Unduh</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="media">
              <img
                class="mr-3 d-none d-sm-block"
                width="200"
                src="https://i.ibb.co/b6FkPKN/images-35.webp"
                alt="Kebijakan"
              />
              <div class="media-body">
                <div>
                  Permendikbud No. 8 Tahun 2016 Tentang Buku Yang Digunakan Oleh
                  Satuan Pendidikan
                </div>
                <p></p>

                <div class="mt-3">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm mr-2 btn-read"
                    data-url="https://static.buku.kemdikbud.go.id/content/undang-undang/Permendikbud%20No.%208%20Tahun%202016%20Tentang%20Buku%20Yang%20Digunakan%20Oleh%20Satuan%20Pendidikan.pdf"
                    data-type="PDF"
                  >
                    <i class="fa fa-eye"></i> Baca
                  </button>
                  <a
                    type="button"
                    href="https://static.buku.kemdikbud.go.id/content/undang-undang/Permendikbud%20No.%208%20Tahun%202016%20Tentang%20Buku%20Yang%20Digunakan%20Oleh%20Satuan%20Pendidikan.pdf"
                    target="_blank"
                    class="btn btn-warning btn-sm mr-2 btn-push-statistic"
                    data-id="8"
                    data-activity="download"
                    ><i class="fa fa-download"></i> Unduh</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="media">
              <img
                class="mr-3 d-none d-sm-block"
                width="200"
                src="https://i.ibb.co/b6FkPKN/images-35.webp"
                alt="Kebijakan"
              />
              <div class="media-body">
                <div>
                  PP Nomor 1 Tahun 1989 tentang penerjemahan dan perbanyakan
                  ciptaan
                </div>
                <p></p>

                <div class="mt-3">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm mr-2 btn-read"
                    data-url="https://static.buku.kemdikbud.go.id/content/undang-undang/PP%20Nomor%201%20Tahun%201989%20tentang%20penerjemahan%20dan%20perbanyakan%20ciptaan.pdf"
                    data-type="PDF"
                  >
                    <i class="fa fa-eye"></i> Baca
                  </button>
                  <a
                    type="button"
                    href="https://static.buku.kemdikbud.go.id/content/undang-undang/PP%20Nomor%201%20Tahun%201989%20tentang%20penerjemahan%20dan%20perbanyakan%20ciptaan.pdf"
                    target="_blank"
                    class="btn btn-warning btn-sm mr-2 btn-push-statistic"
                    data-id="8"
                    data-activity="download"
                    ><i class="fa fa-download"></i> Unduh</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row"></div>

        <p class="text-center mt-5">
          <router-link to="/kebijakan">
            <a class="btn btn-warning">Baca <u>selengkapnya</u> ...</a>
          </router-link>
        </p>
      </div>
    </div>

    <div class="section-faq p-4">
      <div class="container">
        <div class="text-center mb-5 mt-5">
          <h3>Pertanyaan</h3>
          <p>Berbagai pertanyaan yang sering diajukan terkait SIBI.</p>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Cara mendaftar di SIBI?
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Silahkan klik Daftar di bagian pojok kanan atas, lalu isi
                    formulir dengan lengkap menggunakan data sebenarnya. Lalu
                    klik tombol Daftar di bagian bawah. Proses pendaftaran
                    selesai.
                  </div>
                </div>
              </div>
              <div class="card my-2">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Siapakah Pelaku Perbukuan?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Pelaku perbukuan terdiri atas Penulis, Penerjemah, Penyadur,
                    Editor, Desainer, Ilustrator, Pencetak, Pengembang Buku
                    Elektronik, Penerbit, dan Toko Buku
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Mengapa email konfirmasi pendaftaran tidak masuk?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Karena mungkin email kamu tidak aktif, salah memasukan email
                    ketika mendaftar, atau mungkin masuk ke folder promosi atau
                    spam di email kamu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="section-partner">
      <div class="container">
        <div class="row text-center my-5 mb-5 mt-5">
          <div class="col">
            <h3>Laman Terkait</h3>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 col-md-3 col-lg-2 my-2">
            <a href="https://ikapi.org" target="_blank" rel="noreferrer">
              <div class="card">
                <div class="card-body">
                  <img
                    class="img-fluid d-block mx-auto"
                    src="https://buku.kemdikbud.go.id/static/media/ikapi.4a3a47f3.png"
                    alt="IKAPI"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>
          <div class="col-8 col-md-3 col-lg-2 my-2">
            <a
              href="https://belajar.kemdikbud.go.id"
              target="_blank"
              rel="noreferrer"
            >
              <div class="card">
                <div class="card-body">
                  <img
                    class="img-fluid d-block mx-auto"
                    src="https://buku.kemdikbud.go.id/static/media/rumah-belajar.43e30afc.png"
                    alt="Rumah Belajar"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>
          <div class="col-8 col-md-3 col-lg-2 my-2">
            <a
              href="https://balaipustaka.co.id/"
              target="_blank"
              rel="noreferrer"
            >
              <div class="card">
                <div class="card-body">
                  <img
                    class="img-fluid d-block mx-auto"
                    src="https://buku.kemdikbud.go.id/static/media/balaipustaka.70792c5b.png"
                    alt="Perpustakaan Nasional Indonesia"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>
          <div class="col-8 col-md-3 col-lg-2 my-2">
            <a href="https://www.belajar.id/" target="_blank" rel="noreferrer">
              <div class="card">
                <div class="card-body">
                  <img
                    class="img-fluid d-block mx-auto"
                    src="https://buku.kemdikbud.go.id/static/media/belajar-id.c4f671e3.png"
                    alt="Belajar.id"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>
          <div class="col-8 col-md-3 col-lg-2 my-2">
            <a
              href="https://play.google.com/store/apps/details?id=go.id.kemendikbud.bukunesia"
              target="_blank"
              rel="noreferrer"
            >
              <div class="card">
                <div class="card-body">
                  <img
                    class="img-fluid d-block mx-auto"
                    src="https://buku.kemdikbud.go.id/static/media/bukunesia.d17696c6.png"
                    alt="Bukunesia"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-join">
      <div class="container">
        <div class="row text-left text-md-start">
          <div class="col-lg-7">
            <div class="row my-5">
              <div class="col">
                <h2>Mari bergabung!<br />Dapatkan berbagai manfaatnya.</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-3 my-2">
                <h2>
                  <span>{{ $store.state.totalRead }}</span>
                </h2>
                <p><small>Total Baca</small></p>
              </div>
              <div class="col-6 col-md-3 my-2">
                <h2>
                  <span>{{ $store.state.totalCatalogue }}</span>
                </h2>
                <p><small>Katalog Buku</small></p>
              </div>
              <div class="col-6 col-md-3 my-2">
                <h2>
                  <span>{{ $store.state.totalAssesment }}</span>
                </h2>
                <p><small>Buku Lulus Penilaian</small></p>
              </div>
              <div class="col-6 col-md-3 my-2">
                <h2>
                  <span>{{ $store.state.totalDownload }}</span>
                </h2>
                <p><small>Total Download</small></p>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid d-block mx-auto"
              src="https://i.ibb.co/hCJ9H1y/pelaku-perbukuan.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <div class="modal" id="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Kebijakan</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <embed
              id="embed"
              type="application/pdf"
              width="100%"
              height="400px"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchTotalCatalogue"]),
  },
  created() {
    this.fetchTotalCatalogue();
  },
  mounted() {
    $(".btn-read").click(function() {
      let url = $(this).attr("data-url");

      $("#embed").attr("src", url);
      $("#modal").modal("show");
      return false;
    });
  },
};
</script>
