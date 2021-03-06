import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/penilaian",
    name: "Penilaian",
    component: () => import("../views/Penilaian.vue"),
  },
  {
    path: "/kebijakan",
    name: "Kebijakan",
    component: () => import("../views/Kebijakan.vue"),
  },
  {
    path: "/pencetak-kurikulum-merdeka",
    name: "pencetak-Kurikulum-Merdeka",
    component: () => import("../views/PencetakKurikulumMerdeka.vue"),
  },
  {
    path: "/pencetak-kurikulum-k13",
    name: "pencetak-Kurikulum-k13",
    component: () => import("../views/PencetakKurikulumK13.vue"),
  },
  {
    path: "/pelaku",
    redirect: "/pelaku/pembinaan",
    name: "parent-pelaku",
    component: () => import("../views/Pelaku.vue"),
    children: [
      {
        path: "pembinaan",
        name: "Pembinaan",
        component: () => import("../views/Pembinaan.vue"),
      },
      {
        path: "sertifikasi",
        name: "Sertifikasi",
        component: () => import("../views/Sertifikasi.vue"),
      },
    ],
  },
  {
    path: "/pembinaanDetail",
    name: "PembinaanDetail",
    component: () => import("../views/PembinaanDetail.vue"),
  },
  {
    path: "/ticket/:id",
    name: "Ticket-Detail",
    component: () => import("../views/TicketDetail.vue"),
  },
  {
    path: "/sertifikat/:id",
    name: "Certificate-Detail",
    component: () => import("../views/CertificateDetail.vue"),
  },
  {
    path: "/manfaat",
    name: "Manfaat",
    component: () => import("../views/Manfaat.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },
  {
    path: "/recovery",
    name: "Recovery",
    component: () => import("../views/auth/Recovery.vue"),
  },
  {
    path: "/user",
    component: () => import("../components/DashboardLayout.vue"),
    children: [
      {
        path: "home",
        name: "UserHome",
        component: () => import("../views/dashboard/Home.vue"),
      },
      {
        path: "pembinaan",
        name: "UserPembinaan",
        component: () => import("../views/dashboard/Pembinaan.vue"),
      },
      {
        path: "lapor",
        name: "Lapor",
        component: () => import("../views/dashboard/Lapor.vue"),
      },
      {
        path: "portfolio",
        name: "Portfolio",
        component: () => import("../views/dashboard/Portfolio.vue"),
      },
      {
        path: "portfolio/add",
        name: "Portfolio Add",
        component: () => import("../views/dashboard/PortfolioAdd.vue"),
      },
      {
        path: "portfolio/edit/:id",
        name: "Portfolio-Edit",
        component: () => import("../views/dashboard/PortfolioEdit.vue"),
      },
      {
        path: "profil",
        name: "Profil",
        component: () => import("../views/dashboard/Profil.vue"),
      },
      {
        path: "profil/publisher",
        name: "Profil-Publisher",
        component: () => import("../views/dashboard/ProfilePublisher.vue"),
      },
      {
        path: "/user/penilaian",
        name: "User-Penilaian",
        component: () => import("../views/dashboard/Assesment.vue"),
      },
      {
        path: "/user/izin-cetak",
        name: "Izin-Cetak",
        component: () => import("../views/dashboard/IzinCetak.vue"),
      },
      {
        path: "/user/izin-cetak/k13",
        name: "Izin-Cetak",
        component: () => import("../views/dashboard/IzinCetak13.vue"),
      },
      {
        path: "/user/izin-cetak/merdeka",
        name: "Izin-Cetak",
        component: () => import("../views/dashboard/IzinCetakMerdeka.vue"),
      },
      {
        path: "unduh",
        name: "Unduh",
        component: () => import("../views/dashboard/Unduh.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
