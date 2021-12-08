<template>
  <div>
    <section id="top-bar">
      <div class="container">
        <div class="row">
          <div class="col">
            Daftar undang-undang, pemendikbud, dan keputusan menteri terkait
            Perbukuan.
          </div>
          <div class="col">
            <div class="text-right bread">
              <i class="fas fa-home"></i> Beranda > Kebijakan
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="content" class="mt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="sidebar">
              <form class="mb-4" action="http://sibi.local/cari">
                <input
                  type="text"
                  class="form-control"
                  v-model="keyword"
                  placeholder="Cari kata kunci"
                />
              </form>

              <ul>
                <li>
                  <a href="#" @click.prevent="filter = 'semua'">
                    <i class="fas fa-fw fa-globe-asia"></i> &nbsp;Semua
                  </a>
                </li>
                <li>
                  <a href="#" @click="filter = 'undang-undang'"
                    ><i class="fas fa-fw fa-gavel"></i> &nbsp;Undang-undang</a
                  >
                </li>
                <li>
                  <a href="#" @click="filter = 'PP'"
                    ><i class="fas fa-fw fa-mail-bulk"></i> &nbsp;Peraturan
                    Pemerintah</a
                  >
                </li>
                <li>
                  <a href="#" @click.prevent="filter = 'Permen'">
                    <i class="fas fa-fw fa-book-reader"></i> &nbsp;Peraturan
                    Menteri
                  </a>
                </li>
                <li>
                  <a href="#" @click="filter = 'Kepmen'"
                    ><i class="fas fa-fw fa-user-shield"></i> &nbsp;Keputusan
                    Menteri</a
                  >
                </li>
                <li>
                  <a href="#" @click="filter = 'SK'"
                    ><i class="fas fa-fw fa-envelope-open-text"></i> &nbsp;Surat
                    Keputusan</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-fw fa-external-link-square-alt"></i>
                    &nbsp;Lainnya</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-9">
            <div v-if="$store.state.loadPage" class="loading text-center">
              <img src="@/assets/loading-2.gif" alt="" class="img-fluid" />
            </div>
            <template v-else>
              <table
                class="table table-condensed table-stripped table-responsive"
              >
                <template v-if="filteredPolicies != ''">
                  <tr>
                    <th>Judul</th>
                    <th>Deskripsi</th>
                    <th>Kategori</th>
                    <th>Tanggal</th>
                    <th>Opsi</th>
                  </tr>
                  <tr v-for="(policy, index) of filteredPolicies" :key="index">
                    <td>{{ policy.title }}</td>
                    <td>-</td>
                    <td>{{ policy.category.name }}</td>
                    <td>{{ policy.published_at }}</td>
                    <td>
                      <a
                        @click="show(policy.featured_image)"
                        class="mr-2 btn-xs btn-read"
                        data-url="https://static.cdn-cdpl.com/sibi/1097_AccMF_rekrutmen_calonpenilai_2021.pdf"
                        data-type="PDF"
                        ><i class="fa fa-eye"></i
                      ></a>
                      <a
                        type="button"
                        :href="policy.featured_image"
                        target="_blank"
                        class="btn-xs mr-2 btn-push-statistic"
                        data-id="8"
                        data-activity="download"
                        ><i class="fa fa-download"></i
                      ></a>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <div class="text-center mt-5">
                    <img
                      width="150"
                      src="@/assets/book-loading.gif"
                      class="img-fluid"
                      alt=""
                    />
                    <h4 class="text-center">Data not found!</h4>
                  </div>
                </template>
              </table>
            </template>

            <div class="row">
              <div class="col-lg-12">
                <nav class="courses-pagination mt-50">
                  <div class="row my-4 text-right">
                    <div class="col-md-12">
                      <nav id="pagination">
                        <!-- <strong>1</strong
                        ><a
                          href="http://sibi.local/kebijakan/2"
                          data-ci-pagination-page="2"
                          >2</a
                        ><a
                          href="http://sibi.local/kebijakan/2"
                          data-ci-pagination-page="2"
                          rel="next"
                          >&gt;</a
                        > -->
                      </nav>
                      <!-- courses pagination -->
                    </div>
                  </div>
                </nav>
              </div>
            </div>
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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      keyword: "",
      type: {
        undangUndang: "",
        permen: "",
      },
      filter: "semua",
    };
  },
  computed: {
    ...mapState(["policies"]),
    filteredPolicies() {
      let data = this.policies;
      if (this.filter !== "semua") {
        data = this.filteredType;
      }
      return data.filter((policy) => {
        return (
          policy.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
          policy.category.name
            .toLowerCase()
            .includes(this.keyword.toLowerCase())
        );
      });
    },
    filteredType() {
      return this.policies.filter((el) => el.category.name === this.filter);
    },
  },
  methods: {
    ...mapActions(["fetchAllPolicy"]),
    show(data) {
      // let url = $(this).attr("data-url");

      $("#embed").attr("src", data);
      $("#modal").modal("show");

      return false;
    },
  },
  created() {
    this.fetchAllPolicy();
  },
};
</script>

