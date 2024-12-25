import { createStore } from "vuex";
import login from "./modules/login.module";
import user from "./modules/user.module";
import enterprise from "./modules/enterprise.module";
import interviewBooking from "./modules/interview.module";
import certificateTypes from "./modules/certificateType.module";
import cvLanguages from "./modules/cvLanguage.module";
import candidate from "./modules/candidate.module";
import candidateDetail from "./modules/candidateDetail.module";
import jobs from "./modules/jobs.module";
import jobsDetail from "./modules/jobsDetail.module";
import provinces from "./modules/province.module";



const store = createStore({
  modules: {
    login,
    user,
    enterprise,
    interviewBooking,
    certificateTypes,
    cvLanguages,
    candidate,
    candidateDetail,
    jobs,
    jobsDetail,
    provinces
  },
});
export default store;
