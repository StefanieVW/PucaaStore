<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import pucaaLogo from '../assets/pucaa-logo-transparent.png'

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
        activeSection.value =
          visibleSections[0].target.id
      }
    },
    {
      threshold: [0.2, 0.4, 0.6],
      rootMargin: '-15% 0px -55% 0px',
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

    <a href="#home" class="nav-brand">
      <img
        :src="pucaaLogo"
        alt="PUCAA Store"
        class="brand-logo"
      />

      <span class="brand-name">
        PUCAA
        <small>STORE</small>
      </span>
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