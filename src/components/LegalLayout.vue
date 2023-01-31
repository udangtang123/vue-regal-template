<template>
  <div class="flex bg-gray-200 font-roboto px-8 sm:px-16 md:px-28 lg:px-32 flex-wrap">
    <Sidebar />

    <div class="flex flex-col my-1 lg:w-3/4 shadow-md	shadow-gray-400">
      <Header />

      <main class="flex-1 overflow-x-hidden bg-gray-100">
        <div class="container mx-auto py-1">
          <slot />
        </div>
      </main>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
