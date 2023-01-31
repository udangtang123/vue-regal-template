import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import CommunityTermsOfUse from "./views/communityTermsOfUse.vue";
import CookiePolicy from "./views/cookiePolicy.vue";
import DigitalAccessibilityStatement from "./views/digitalAccessibilityStatement.vue";
import FeeAgreement from "./views/feeAgreement.vue";
import FixedPriceContractEscrowAgreement from "./views/fixedPriceContractEscrowAgreement.vue";
import NonDiscriminationStatement from "./views/nonDiscriminationStatement.vue";
import OptionalContractTerms from "./views/optionalContractTerms.vue";
import PrivacyCenter from "./views/privacyCenter.vue";
import PrivacyPolicyPDCS from "./views/PrivacyPolicyPDCS.vue";
import TermsofService from "./views/termsofService.vue";
import UserAgreement from "./views/userAgreement.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/termsofService",
    name: "termsofService",
    component: TermsofService,
  },
  {
    path: "/userAgreement",
    name: "userAgreement",
    component: UserAgreement,
  },
  {
    path: "/communityTermsOfUse",
    name: "communityTermsOfUse",
    component: CommunityTermsOfUse,
  },
  {
    path: "/cookiePolicy",
    name: "cookiePolicy",
    component: CookiePolicy,
  },
  {
    path: "/digitalAccessibilityStatement",
    name: "digitalAccessibilityStatement",
    component: DigitalAccessibilityStatement,
  },
  {
    path: "/feeAgreement",
    name: "feeAgreement",
    component: FeeAgreement,
  },
  {
    path: "/fixedPriceContractEscrowAgreement",
    name: "fixedPriceContractEscrowAgreement",
    component: FixedPriceContractEscrowAgreement,
  },
  {
    path: "/nonDiscriminationStatement",
    name: "nonDiscriminationStatement",
    component: NonDiscriminationStatement,
  },
  {
    path: "/optionalContractTerms",
    name: "optionalContractTerms",
    component: OptionalContractTerms,
  },
  {
    path: "/privacyCenter",
    name: "privacyCenter",
    component: PrivacyCenter,
  },
  {
    path: "/privacyPolicyPDCS",
    name: "privacyPolicyPDCS",
    component: PrivacyPolicyPDCS,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
