<script setup>
// import facebook from '@/assets/facebook.svg?url'
// import github from '@/assets/github.svg?url'
// import linkedin from '@/assets/linkedin.svg?url'
// import instagram from '@/assets/instagram.svg?url'

const socials = [
  {
    name: 'instagram',
    // icon: instagram,
    href: '#'
  },
  {
    name: 'github',
    // icon: github,
    href: '#'
  },
  {
    name: 'linkedin',
    // icon: linkedin,
    href: '#'
  },
  {
    name: 'facebook',
    // icon: facebook,
    href: 'https://www.facebook.com/bytelancers/'
  }
]
</script>
<template>
  <div class="bg-white bottom-0 text-black px-8 sm:px-16 md:px-28 lg:px-32">
    <div
      class="w-full flex flex-row flex-wrap py-8 text-center lg:text-left"
    >
      <div class="w-full py-1 sm:py-2 sm:basis-1/2 lg:basis-1/4">About us</div>
      <div class="w-full py-1 sm:py-2 sm:basis-1/2 lg:basis-1/4">Trust, safety & Security</div>
      <div class="w-full py-1 sm:py-2 sm:basis-1/2 lg:basis-1/4">Terms of Service</div>
      <div class="w-full py-1 sm:py-2 sm:basis-1/2 lg:basis-1/4">Disclaim</div>
      <div class="w-full py-1 sm:py-2 sm:basis-1/2 lg:basis-1/4">Feedback</div>
      <div class="w-full py-1 sm:py-2 sm:basis-1/2 lg:basis-1/4">Help & Support</div>
      <div class="w-full py-1 sm:py-2 sm:basis-1/2 lg:basis-1/4">Privacy Policy</div>
      <div class="w-full py-1 sm:py-2 sm:basis-1/2 lg:basis-1/4">Cookie Policy</div>
    </div>

    <div
      class="py-10 flex flex-wrap justify-between font-light border-t border-secondary-4"
    >
      <p class="text-center md:text-left text-sm text-heading font-medium w-full md:w-2/3">
        &copy; {{ new Date().getFullYear() }} Bytelancers Ltd. All rights
        reserved.
      </p>
      <div class="flex gap-5 w-full py-1 sm:py-2 md:w-1/3">
        <img
          v-for="(social, idx) in socials"
          :key="idx"
          class="h-5 w-5 basis-1/4 text-center"
          alt="Social Media"
        />
      </div>
    </div>
  </div>
</template>

