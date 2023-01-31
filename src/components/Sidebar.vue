<template>
  <div class="flex h-fit my-1 w-full flex-initial lg:w-1/4">

    <div class="bg-gray-200 w-full"
    >
      <nav class="my-10">
        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm font-semibold"
          :class="[$route.name === 'termsofService' ? activeClass : inactiveClass]"
          to="/termsofService"
        >
          <span class="mx-1">Terms of Service</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'userAgreement' ? activeClass : inactiveClass]"
          to="/userAgreement"
        >
          <span class="mx-1">User Agreement</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'communityTermsOfUse' ? activeClass : inactiveClass]"
          to="/communityTermsOfUse"
        >
          <span class="mx-1">Term of Use</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'feeAgreement' ? activeClass : inactiveClass]"
          to="/feeAgreement"
        >
          <span class="mx-1">Fee Agreement</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'fixedPriceContractEscrowAgreement' ? activeClass : inactiveClass]"
          to="/fixedPriceContractEscrowAgreement"
        >
          <span class="mx-1">Fixed Price Contract Escrow Agreement</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'optionalContractTerms' ? activeClass : inactiveClass]"
          to="/optionalContractTerms"
        >
          <span class="mx-1">Optional Contract Term</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'privacyCenter' ? activeClass : inactiveClass]"
          to="/privacyCenter"
        >
          <span class="mx-1">Privacy Center</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'privacyPolicyPDCS' ? activeClass : inactiveClass]"
          to="/privacyPolicyPDCS"
        >
          <span class="mx-1">Privacy Policy PDCS</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'cookiePolicy' ? activeClass : inactiveClass]"
          to="/cookiePolicy"
        >
          <span class="mx-1">Cookie Policy</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'digitalAccessibilityStatement' ? activeClass : inactiveClass]"
          to="/digitalAccessibilityStatement"
        >
          <span class="mx-1">Digital Accessibility Statement</span>
        </router-link>

        <router-link
          class="flex items-center px-2 py-2 mt-4 duration-200 border-l-4 text-sm"
          :class="[$route.name === 'nonDiscriminationStatement' ? activeClass : inactiveClass]"
          to="/nonDiscriminationStatement"
        >
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
