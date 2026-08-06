<script setup lang="ts">
import { ref, watch } from 'vue'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'
import pucaaLogo from '../assets/pucaa-logo-transparent.png'

const open = ref(false)

const { language, t, setLanguage } = useLanguage()

const toggleMenu = () => {
  open.value = !open.value
}

const closeMenu = () => {
  open.value = false
}

watch(open, (isOpen) => {
  if (isOpen) {
    gsap.to('.mobile-drawer', {
      y: 0,
      opacity: 1,
      duration: 0.45,
      ease: 'power3.out',
    })

    gsap.to('.drawer-overlay', {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  } else {
    gsap.to('.mobile-drawer', {
      y: -15,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.inOut',
    })

    gsap.to('.drawer-overlay', {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.inOut',
    })
  }
})
</script>

<template>

  <!-- =========================================
       MOBILE NAVBAR
  ========================================== -->

  <header class="mobile-nav">

    <a href="#home" class="mobile-brand">

      <img
        :src="pucaaLogo"
        alt="PUCAA Store"
        class="brand-logo"
      />

      <span>
        PUCAA
        <small>STORE</small>
      </span>

    </a>


    <div class="mobile-nav-actions">

      <!-- LANGUAGE SWITCHER -->

      <div class="mobile-language">

        <button
          :class="{ active: language === 'id' }"
          @click="setLanguage('id')"
          aria-label="Bahasa Indonesia"
        >
          ID
        </button>

        <span>/</span>

        <button
          :class="{ active: language === 'en' }"
          @click="setLanguage('en')"
          aria-label="English"
        >
          EN
        </button>

      </div>


      <!-- HAMBURGER -->

      <button
        class="hamburger"
        @click="toggleMenu"
        :aria-expanded="open"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

  </header>


  <!-- =========================================
       OVERLAY
  ========================================== -->

  <div
    class="drawer-overlay"
    :class="{ open }"
    @click="closeMenu"
  ></div>


  <!-- =========================================
       FLOATING DRAWER
  ========================================== -->

  <aside
    class="mobile-drawer"
    :class="{ open }"
  >

    <!-- DRAWER HEADER -->

    <div class="drawer-header">

      <span class="drawer-title">
        MENU
      </span>

      <button
        class="drawer-close"
        @click="closeMenu"
        aria-label="Close menu"
      >
        ×
      </button>

    </div>


    <!-- NAVIGATION -->

    <nav class="mobile-menu">

      <a
        href="#about"
        @click="closeMenu"
      >
        {{ t.nav.about }}
      </a>

      <a
        href="#services"
        @click="closeMenu"
      >
        {{ t.nav.services }}
      </a>

      <a
        href="#how-it-works"
        @click="closeMenu"
      >
        {{ t.nav.howItWorks }}
      </a>

      <a
        href="#contact"
        @click="closeMenu"
      >
        {{ t.nav.contact }}
      </a>

    </nav>


    <!-- LANGUAGE -->

    <div class="drawer-footer">

      <span>LANGUAGE</span>

      <div class="drawer-language">

        <button
          :class="{ active: language === 'id' }"
          @click="setLanguage('id')"
        >
          Bahasa Indonesia
        </button>

        <button
          :class="{ active: language === 'en' }"
          @click="setLanguage('en')"
        >
          English
        </button>

      </div>

    </div>

  </aside>

</template>
