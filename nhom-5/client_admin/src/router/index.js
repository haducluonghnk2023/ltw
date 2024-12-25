import App from "@/App.vue";
import CertificateView from "@/view/certificateView.vue";
import CvView from "@/view/cvView.vue";
import EnterpriseView from "@/view/enterpriseView.vue";
import Home from "@/view/home.vue";
import InterviewBooking from "@/view/interviewBooking.vue";
import LanguageView from "@/view/languageView.vue";
import Login from "@/view/login.vue";
import UserView from "@/view/userView.vue";


import { createRouter, createWebHistory } from "vue-router";
import JobView from "@/view/jobView.vue";

const routes = [
  {
    path: "/admin",
    component: Home,
    alias: ["/"],
    children: [
      {
        path: "user",
        component: UserView,
      },
      {
        path: "cv",
        component: CvView,
      },
      {
        path: "certificate",
        component: CertificateView,
      },
      {
        path: "enterprise",
        component: EnterpriseView,
      },
      {
        path: "language",
        component: LanguageView,
      },
      {
        path: "job",
        component: JobView,
      },
      {
        path: "interview",
        component: InterviewBooking,
      },
    ],
  },
  {
    path: "/auth",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
