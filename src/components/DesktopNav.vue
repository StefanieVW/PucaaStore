<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import pucaaLogo from '../assets/pucaa-logo.png'
import cipanLogo from '../assets/cipan-logo.png'

const { language, t, setLanguage } = useLanguage()

const activeSection = ref('home')

const sections = [
  'home',
  'about',
  'services',
  'how-it-works',
  'contact',
]

let observer: IntersectionObserver | null = null

onMounted(() => {
  const elements = sections
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[]

  observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            b.intersectionRatio - a.intersectionRatio
        )

      if (visibleSections.length > 0) {
        activeSection.value = visibleSections[0].target.id
      }
    },
    {
      threshold: [0, 0.15, 0.3, 0.5],
      rootMargin: '-10% 0px -45% 0px',
    }
  )

  elements.forEach((element) => {
    observer?.observe(element)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>

  <header class="desktop-nav">

    <!-- BRAND -->
    <a href="#home" class="nav-brand collaboration-brand">

      <div class="collab-logo pucaa-logo-wrap">
        <span class="electric-ring"></span>

        <img
          :src="pucaaLogo"
          alt="PUCAA"
          class="brand-logo pucaa-logo"
        />
      </div>

      <!-- X -->
      <span class="collab-x">×</span>

      <!-- CIPAN -->
      <div class="collab-logo cipan-logo-wrap">
        <span class="purple-aura"></span>

        <img
          :src="cipanLogo"
          alt="CIPAN"
          class="brand-logo cipan-logo"
        />
      </div>
    </a>


    <!-- NAVIGATION -->

    <nav class="desktop-nav-links">

      <a
        href="#about"
        :class="{ active: activeSection === 'about' }"
      >
        {{ t.nav.about }}
      </a>

      <a
        href="#services"
        :class="{ active: activeSection === 'services' }"
      >
        {{ t.nav.services }}
      </a>

      <a
        href="#how-it-works"
        :class="{ active: activeSection === 'how-it-works' }"
      >
        {{ t.nav.howItWorks }}
      </a>

      <a
        href="#contact"
        :class="{ active: activeSection === 'contact' }"
      >
        {{ t.nav.contact }}
      </a>

    </nav>


    <!-- LANGUAGE -->

    <div class="language-switcher">

      <button
        :class="{ active: language === 'id' }"
        @click="setLanguage('id')"
      >
        ID
      </button>

      <span></span>

      <button
        :class="{ active: language === 'en' }"
        @click="setLanguage('en')"
      >
        EN
      </button>

    </div>

  </header>

</template>