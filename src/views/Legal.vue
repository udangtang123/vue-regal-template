<template>
  <div>
    <div v-if="tabName == 'CommunityTermsOfUse'">
      <CommunityTermsOfUse />
    </div>
    <div v-if="tabName == 'CookiePolicy'">
      <CookiePolicy />
    </div>
    <div v-if="tabName == 'DigitalAccessibilityStatement'">
      <DigitalAccessibilityStatement />
    </div>
    <div v-if="tabName == 'FeeAgreement'">
      <FeeAgreement />
    </div>
    <div v-if="tabName == 'FixedPriceContractEscrowAgreement'">
      <FixedPriceContractEscrowAgreement />
    </div>
    <div v-if="tabName == 'NonDiscriminationStatement'">
      <NonDiscriminationStatement />
    </div>
    <div v-if="tabName == 'OptionalContractTerms'">
      <OptionalContractTerms />
    </div>
    <div v-if="tabName == 'PrivacyCenter'">
      <PrivacyCenter />
    </div>
    <div v-if="tabName == 'PrivacyPolicyPDCS'">
      <PrivacyPolicyPDCS />
    </div>
    <div v-if="tabName == 'TermsofService'">
      <TermsofService />
    </div>
    <div v-if="tabName == 'UserAgreement'">
      <UserAgreement />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommunityTermsOfUse from "./communityTermsOfUse.vue";
import CookiePolicy from "./cookiePolicy.vue";
import DigitalAccessibilityStatement from "./digitalAccessibilityStatement.vue";
import FeeAgreement from "./feeAgreement.vue";
import FixedPriceContractEscrowAgreement from "./fixedPriceContractEscrowAgreement.vue";
import NonDiscriminationStatement from "./nonDiscriminationStatement.vue";
import OptionalContractTerms from "./optionalContractTerms.vue";
import PrivacyCenter from "./privacyCenter.vue";
import PrivacyPolicyPDCS from "./PrivacyPolicyPDCS.vue";
import TermsofService from "./termsofService.vue";
import UserAgreement from "./userAgreement.vue";

export default defineComponent({
  data() {
    return { 
      tabName: 'CommunityTermsOfUse'
     }
  },
  watch: {
    $route(to, from) {
      this.changeTabName(to.hash.replace('#', ''));
    }
  },
  methods: {
    changeTabName(url: any) {
      this.tabName = url;
    }
  },
  components: {
      CommunityTermsOfUse,
      CookiePolicy,
      DigitalAccessibilityStatement,
      FeeAgreement,
      FixedPriceContractEscrowAgreement,
      NonDiscriminationStatement,
      OptionalContractTerms,
      PrivacyCenter,
      PrivacyPolicyPDCS,
      TermsofService,
      UserAgreement
  }
})
</script>

<style scoped>

</style>