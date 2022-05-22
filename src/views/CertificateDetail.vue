<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div v-if="notFound" class="col-lg-7">
        <h4 class="text-center">Sertifikat tidak ditemukan</h4>
      </div>
      <div v-else-if="notValid" class="col-lg-7">
        <h4 class="text-center">Sertifikat tidak valid</h4>
      </div>
      <vue-html2pdf
        v-else
        :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1200"
        filename="sertifikat"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="1130px"
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <div
            ref="content"
            class="col-lg-11 position-relative cert p-2 mx-auto mt-5"
          >
            <div class="position-relative">
              <img
                src="../assets/certificate-template.jpg"
                class="w-100"
                alt=""
              />
            </div>
            <div class="position-absolute container" style="top: 30%">
              <div class="row justify-content-center">
                <div class="col-lg-9 text-center">
                  <div class="font-cert mt-1 mb-3">
                    Nomor : {{ certificate.certificate_code }}
                  </div>
                  <div class="font-cert">
                    Pusat Perbukuan, Badan Standar, Kurikulum, dan Asesmen
                    Pendidikan, Kementrian Pendidikan, Kebudayaan, Riset, dan
                    Teknologi dengan ini mengucapkan terima kasih kepada:
                  </div>
                  <h3 class="my-3 text-primary">{{ certificate.name }}</h3>
                  <div class="font-cert">
                    Telah berperan serta dalam Kegiatan
                    {{ trainingTitle }} dalam rangka Pembinaan Pelaku Perbukuan
                    Tahun 2022
                    {{
                      trainingStartDate != "18 Mei 2022" ? sessionTraining : ""
                    }}
                    <span v-if="certificate.role != ''">
                      sebagai <strong>{{ certificate.role }}</strong>
                    </span>
                    yang diselenggarakan pada tanggal {{ trainingStartDate }}.
                  </div>
                  <div class="float-right font-cert mt-4">
                    <div>Jakarta, {{ regardDate }}</div>
                    <div class="">Pusat Perbukuan</div>
                    <img
                      src="../assets/TTD.png"
                      width="100"
                      class="my-2"
                      alt="regard"
                    />
                    <div>Supriyatno, S. Pd., M. A.</div>
                    <div>NIP 196804051988121001</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </vue-html2pdf>
      <div v-if="!notValid" class="mt-3 text-center">
        <button @click="generatePDF()" class="btn btn-primary">
          Unduh Sertifikat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueHtml2pdf from "vue-html2pdf";
import { BASE_URL } from "../store";
import moment from "moment";
moment.locale("id");

export default {
  data() {
    return {
      certificate: [],
      notFound: false,
      notValid: false,
    };
  },
  components: {
    VueHtml2pdf,
  },
  methods: {
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  computed: {
    regardDate: function() {
      return moment(this.certificate.training_event?.end).format("LL");
    },
    trainingStartDate: function() {
      return moment(this.certificate.training_event?.start).format("LL");
    },
    sessionTraining: function() {
      let session = "";
      this.certificate.session == "online" && (session = "daring");
      return `secara ${session}`;
    },
    trainingTitle: function() {
      return this.certificate.training_event?.title;
    },
  },
  created() {
    axios
      .post(`${BASE_URL}api/training/ticket/${this.$route.params.id}`)
      .then((res) => {
        // Check if ticket code not valid
        if (res.data.status == "failed") {
          this.notFound = true;
        } else {
          // Get data status ticket
          let statusTicket = res.data.data.status;

          // Check status ticket
          if (statusTicket == "approved" || statusTicket == "attended") {
            this.certificate = res.data.data;
          } else {
            this.notValid = true;
          }
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
/* @media screen and (max-width: 992px) {
  .cert {
    transform: scale(0.9);
  }
} */
.font-cert {
  font-size: 0.9em;
}
</style>
