<template>
  <div class="flex h-fit my-1 w-full flex-initial lg:w-1/4">

    <div class="bg-gray-200 w-full">
      <nav class="my-10">
        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm font-semibold"
          :class="[$route.hash.replace('#', '') === 'TermsofService' ? activeClass : inactiveClass]"
          to="/legal#TermsofService">
          <span class="mx-1">Terms of Service</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'UserAgreement' ? activeClass : inactiveClass]"
          to="/legal#UserAgreement">
          <span class="mx-1">User Agreement</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'CommunityTermsOfUse' ? activeClass : inactiveClass]"
          to="/legal#CommunityTermsOfUse">
          <span class="mx-1">Term of Use</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'FeeAgreement' ? activeClass : inactiveClass]"
          to="/legal#FeeAgreement">
          <span class="mx-1">Fee Agreement</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'FixedPriceContractEscrowAgreement' ? activeClass : inactiveClass]"
          to="/legal#FixedPriceContractEscrowAgreement">
          <span class="mx-1">Fixed Price Contract Escrow Agreement</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'OptionalContractTerms' ? activeClass : inactiveClass]"
          to="/legal#OptionalContractTerms">
          <span class="mx-1">Optional Contract Term</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'PrivacyCenter' ? activeClass : inactiveClass]"
          to="/legal#PrivacyCenter">
          <span class="mx-1">Privacy Center</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'PrivacyPolicyPDCS' ? activeClass : inactiveClass]"
          to="/legal#PrivacyPolicyPDCS">
          <span class="mx-1">Privacy Policy PDCS</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'CookiePolicy' ? activeClass : inactiveClass]"
          to="/legal#CookiePolicy">
          <span class="mx-1">Cookie Policy</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'DigitalAccessibilityStatement' ? activeClass : inactiveClass]"
          to="/legal#DigitalAccessibilityStatement">
          <span class="mx-1">Digital Accessibility Statement</span>
        </router-link>

        <router-link class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.hash.replace('#', '') === 'NonDiscriminationStatement' ? activeClass : inactiveClass]"
          to="/legal#NonDiscriminationStatement">
          <span class="mx-1">Nondiscrimination Statement</span>
        </router-link>

      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";

const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-gray-300 font-semibold bg-opacity-25 text-gray-900 border-gray-900"
);
const inactiveClass = ref(
  "border-gray-200 font-semibold text-gray-900 hover:bg-gray-300 hover:bg-opacity-25 hover:text-gray-900"
);
</script>
