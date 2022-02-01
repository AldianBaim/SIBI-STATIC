import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
const BASE_URL = "https://api.development.buku.kemdikbud.cloudapp.web.id/";
const d = new Date();
const today = d.toString();
const day = today.slice(0, 3);
const date = today.slice(8, 10);
const month = today.slice(4, 7);
const year = today.slice(11, 15);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalCatalogue: null,
    totalAssesment: null,
    totalRead: null,
    totalDownload: null,
    today: `${day}, ${date} ${month} ${year}`,
    books: [],
    portfolios: [],
    portfolio: [],
    bookDownload: [],
    assesments: [],
    trainings: [],
    certifications: [],
    policies: [],
    policy: [],
    resultRender: {},
    perPage: 0,
    totalRows: 0,
    pagination: null,
    loadPage: false,
    loadUploadFile: false,
    messageStatus: false,
    messageStatusReport: false,
    messageStatusPortfolio: false,
    message: "",
    msgcolor: "",

    user: [],
    userProfile: null,
    activeMenu: "",
    token: localStorage.getItem("token") || "",

    image: null,
  },
  mutations: {
    setImage(state, image) {
      state.image = image;
    },
    setDataAssesment(state, payload) {
      state.perPage += payload.results.length;
      payload.results.forEach((el) => {
        state.assesments.push(el);
      });
    },
    setDataCertification(state, payload) {
      state.perPage += payload.results.length;
      payload.results.forEach((el) => {
        state.certifications.push(el);
      });
    },
    setDataUser(state, payload) {
      let user = {
        user_id: payload.user_id,
        fullname: payload.fullname,
        avatar: payload.avatar,
      };
      localStorage.setItem("user", JSON.stringify(user));
    },
    setToken(state, payload) {
      const token = payload;
      localStorage.setItem("token", token);
      state.token = token;
    },
    setUserProfile(state, payload) {
      state.userProfile = payload;
    },
    setDataPortfolio(state, payload) {
      state.portfolios = payload;
    },
    setDetailPortfolio(state, payload) {
      state.portfolio = payload;
    },
    setBookDownload(state, payload) {
      state.bookDownload = payload;
    },
    setStatistic(state, payload) {
      state.totalCatalogue = payload.total_book;
      state.totalAssesment = payload.total_assessment;
      state.totalRead = payload.total_read;
      state.totalDownload = payload.total_download;
    },
  },
  actions: {
    logout({ state }) {
      state.user = [];
      state.token = "";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    login(context, payload) {
      context.state.loadPage = true;
      axios
        .post(BASE_URL + "/api/user/login", payload)
        .then((res) => {
          if (res.data.status == "failed") {
            context.state.messageStatus = true;
            context.state.message = res.data.message;
            context.state.msgColor = "alert alert-danger";
            context.state.loadPage = false;
            router.push("/login");
          } else {
            context.state.loadPage = false;
            context.commit("setDataUser", res.data.result);
            context.commit("setToken", res.data.token);
            router.push("/user/home");
          }
        })
        .catch(() => {
          context.state.loadPage = false;
        });
    },
    register(context, payload) {
      context.state.loadPage = true;
      axios
        .post(BASE_URL + "/api/user/register", payload, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status == "failed") {
            context.state.messageStatus = true;
            context.state.message = res.data.message;
            context.state.msgColor = "alert alert-danger";
            context.state.loadPage = false;
            router.push("/register");
          } else {
            context.state.messageStatus = true;
            context.state.message = `Berhasil mendaftarkan akun, selanjutnya silahkan cek email ${res.data.email} untuk aktivasi. Cek folder spam jika email tidak ada di inbox.`;
            context.state.msgColor = "alert alert-success";
            context.state.loadPage = false;
            router.push("/login");
          }
        });
    },
    fetchAllAssesment(context) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "assessment/json/1")
        .then((res) => {
          this.state.assesments = res.data.results;
          this.state.totalRows = res.data.total_rows;
          this.state.perPage = res.data.per_page;
          this.state.loadPage = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchLoadMoreAssesment(context, amount) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "assessment/json/" + amount)
        .then((res) => {
          context.commit("setDataAssesment", res.data);
          context.state.loadPage = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAllTraining(context) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "api/training")
        .then((res) => {
          context.state.trainings = res.data.results;
          context.state.loadPage = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchDetailTraining(context, id) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "api/training/detail/" + id)
        .then((res) => {
          context.state.policy = res.data;
          context.state.loadPage = false;
        })
        .catch((err) => console.log(err));
    },
    filterSearch(context, payload) {
      context.state.loadPage = true;
      axios
        .get(
          BASE_URL +
            `assessment/json/0?filter[assessment][type]=${payload.type}&filter[assessment][title]=${payload.title}&filter[assessment][author]=${payload.author}&filter[assessment][publisher]=${payload.publisher}&filter[assessment][edu_stage]=${payload.edu_stage}&filter[assessment][no_sk]=${payload.no_sk}`
        )
        .then((res) => {
          context.state.assesments = res.data.results;
          context.state.resultRender = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          context.state.loadPage = false;
        });
    },
    fetchAllCertification(context) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "api/training/training_report/1?name=&role=")
        .then((res) => {
          context.state.certifications = res.data.results;
          context.state.totalRows = res.data.total_rows;
          context.state.perPage = res.data.per_page;
          context.state.pagination = res.data.pagination;
          context.state.loadPage = false;
        })
        .catch((err) => console.log(err));
    },
    filterCertification(context, payload) {
      context.state.loadPage = true;
      axios
        .get(
          BASE_URL +
            `api/training/training_report/0?name=${payload.name}&role=${payload.penelaah}`
        )
        .then((res) => {
          context.state.certifications = res.data.results;
          context.state.loadPage = false;
        })
        .catch((err) => console.log(err));
    },
    fetchLoadMoreCertification(context, amount) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "api/training/training_report/" + amount)
        .then((res) => {
          context.commit("setDataCertification", res.data);
          context.state.loadPage = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAllPolicy(context) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "api/post")
        .then((res) => {
          context.state.policies = res.data.posts;
          context.state.loadPage = false;
        })
        .catch((err) => console.log(err));
    },
    fetchUserProfile(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(BASE_URL + "api/user/getProfile", {
            headers: {
              Authorization: context.state.token,
            },
          })
          .then((res) => {
            context.commit("setUserProfile", res.data.result);
            resolve(res.data.result);
          })
          .catch((err) => reject(err.response));
      });
    },
    updateUserProfile(context, payload) {
      context.state.loadPage = true;
      var body = new FormData();
      body.append("name", payload.name);
      body.append("username", payload.username);
      body.append("email", payload.email);
      body.append("avatar", payload.avatar);
      body.append("password", payload.password);
      body.append("confirm_password", payload.confirm_password);
      body.append("profile", payload.profile);
      axios({
        method: "post",
        url: BASE_URL + "api/user/updateProfilePassword",
        data: body,
        headers: {
          Authorization: context.state.token,
          "Content-type": "multipart/form-data",
        },
      })
        .then(() => {
          context.state.messageStatus = true;
          context.state.loadPage = false;
        })
        .catch((err) => {
          context.state.loadPage = false;
          console.log(err);
        });
    },
    fetchAllBook(context) {
      axios
        .get(BASE_URL + "api/catalogue/getLatest?qty=100")
        .then((res) => {
          context.state.books = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendReportBook(context, payload) {
      context.state.loadPage = true;
      return new Promise((resolve, reject) => {
        axios({
          url: BASE_URL + "api/report/addReport",
          method: "POST",
          data: payload,
          headers: {
            Authorization: context.state.token,
          },
        })
          .then((res) => {
            context.state.loadPage = false;
            context.state.messageStatusReport = true;
            resolve(res);
          })
          .catch((err) => {
            context.state.loadPage = false;
            console.log(err);
            reject(err);
          });
      });
    },
    fetchBookDownload(context) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "/api/catalogue")
        .then((res) => {
          context.state.bookDownload = res.data.results;
          context.state.loadPage = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addNewPortfolio(context, payload) {
      context.state.loadPage = true;
      var body = new FormData();
      body.append("title", payload.title);
      body.append("description", payload.description);
      body.append("attachment", payload.attachment);
      body.append("year", payload.year);

      return new Promise((resolve, reject) => {
        axios({
          url: BASE_URL + "api/portfolio/insert",
          method: "POST",
          data: body,
          headers: {
            Authorization: context.state.token,
            "Content-type": "multipart/form-data",
          },
        })
          .then((res) => {
            context.state.messageStatusPortfolio = true;
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            context.state.loadPage = false;
          });
      });
    },
    fetchAllPortfolio(context) {
      context.state.loadPage = true;
      axios({
        url: BASE_URL + "api/portfolio?page=1",
        method: "GET",
        headers: {
          Authorization: context.state.token,
        },
      })
        .then((res) => {
          context.commit("setDataPortfolio", res.data);
          context.state.loadPage = false;
        })
        .catch((err) => console.log(err));
    },
    deletePortfolioById(context, id) {
      context.state.loadPage = true;
      axios
        .get(BASE_URL + "api/portfolio/delete/" + id, {
          headers: {
            Authorization: context.state.token,
          },
        })
        .then(() => {
          context.dispatch("fetchAllPortfolio");
          setTimeout(() => {
            context.state.loadPage = false;
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchDetailPortfolio(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(BASE_URL + "api/portfolio/detail/" + id, {
            headers: {
              Authorization: context.state.token,
            },
          })
          .then((res) => {
            context.commit("setDetailPortfolio", res.data);
            resolve(res.data.result);
          })
          .catch((err) => reject(err.response));
      });
    },
    updateDetailPortfolio(context, payload) {
      context.state.loadPage = true;
      var body = new FormData();
      body.append("id", payload.id);
      body.append("title", payload.title);
      body.append("description", payload.description);
      body.append("attachment", payload.attachment);
      body.append("year", payload.year);

      return new Promise((resolve, rejected) => {
        axios({
          method: "post",
          url: BASE_URL + "api/portfolio/update",
          data: body,
          headers: {
            Authorization: context.state.token,
            "Content-type": "multipart/form-data",
          },
        })
          .then((res) => {
            resolve(res);
            context.state.messageStatus = true;
          })
          .catch((err) => {
            rejected(err);
          })
          .finally(() => {
            context.state.loadPage = false;
          });
      });
    },
    filterSearchBook(context, payload) {
      context.state.loadPage = true;
      axios({
        url:
          BASE_URL +
          `api/catalogue?filter[catalogue][title]=${payload.title}&filter[catalogue][writer]=${payload.writer}&filter[catalogue][published_year]=${payload.year}&filter[catalogue][isbn]=${payload.isbn}`,
        method: "GET",
      })
        .then((res) => {
          context.state.loadPage = false;
          context.commit("setBookDownload", res.data.results);
        })
        .catch((err) => {
          console.log(err);
          context.state.loadPage = false;
        });
    },
    fetchTotalCatalogue(context) {
      axios
        .get(BASE_URL + "api/statistic/getSummary")
        .then((res) => {
          context.commit("setStatistic", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    uploadImage(context, image) {
      context.state.loadUploadFile = true;
      const formData = new FormData();
      formData.append("image", image);

      return new Promise((resolve, reject) => {
        axios
          .post(
            "https://api.imgbb.com/1/upload?key=0622add0e6f04d563c9eb6ba6c3f40c0",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            resolve(res.data);
            context.commit("setImage", res.data.data.image.url);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            context.state.loadUploadFile = false;
          });
      });
    },
    uploadFilePDF(context, file) {
      context.state.loadUploadFile = true;
      const formData = new FormData();
      formData.append("image", file);

      return new Promise((resolve, reject) => {
        axios
          .post(
            "https://api.imgbb.com/1/upload?key=0622add0e6f04d563c9eb6ba6c3f40c0",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            resolve(res.data.data);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            context.state.loadUploadFile = false;
          });
      });
    },
  },
  modules: {},
});
