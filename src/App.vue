<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Home from './views/Home.vue'

const route = useRoute()

const isAdminRoute = computed(() =>
  route.path.startsWith('/admin')
)
</script>

<template>

  <!-- =========================================
       ADMIN AREA
       Tidak menggunakan atmosphere homepage
  ========================================== -->
  <RouterView v-if="isAdminRoute" />


  <!-- =========================================
       PUBLIC WEBSITE
  ========================================== -->
  <div
    v-else
    class="app-shell"
  >

    <!-- =========================================
         GLOBAL WEBSITE ATMOSPHERE
    ========================================== -->
    <div
      class="site-atmosphere"
      aria-hidden="true"
    >

      <!-- GLOWS -->
      <div class="ambient-glow glow-1"></div>
      <div class="ambient-glow glow-2"></div>
      <div class="ambient-glow glow-3"></div>

      <!-- DOT PATTERNS -->
      <div class="ambient-dots dots-1"></div>
      <div class="ambient-dots dots-2"></div>

      <!-- ORBITS -->
      <div class="ambient-orbit orbit-1"></div>
      <div class="ambient-orbit orbit-2"></div>

      <!-- SPARKLES -->
      <span
        class="ambient-sparkle sparkle-1"
      ></span>

      <span
        class="ambient-sparkle sparkle-2"
      ></span>

    </div>


    <!-- =========================================
         ACTUAL WEBSITE
    ========================================== -->
    <div class="site-content">
      <Home />
    </div>

  </div>

</template>