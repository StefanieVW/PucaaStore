<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import DesktopNav from '../components/DesktopNav.vue'
import MobileNav from '../components/MobileNav.vue'
import BglVisual from '../components/BglVisual.vue'
import ServiceCard from '../components/ServiceCard.vue'
import HowItWorks from '../components/HowItWorks.vue'
import HeroStats from '../components/HeroStats.vue'
import About from '../components/About.vue'
import { useLanguage } from '../composables/useLanguage'
import Trust from '../components/Trust.vue'
import PaymentMethods from '../components/PaymentMethod.vue'
import ContactSection from '../components/ContactSection.vue'
import WhatsAppChannel from '../components/WhatsappChannel.vue'
import FAQ from '../components/FAQ.vue'
import Footer from '../components/Footer.vue'

gsap.registerPlugin(ScrollTrigger)

const { t } = useLanguage()

let ctx: gsap.Context | null = null

const handleContactClick = () => {
  const contactSection = document.querySelector('.contact-section')

  if (!contactSection) return

  // Smooth scroll ke Contact
  contactSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  // Highlight setelah sampai
  setTimeout(() => {
    gsap.fromTo(
      contactSection,
      {
        scale: 0.985,
        boxShadow: '0 0 0 rgba(23, 108, 255, 0)',
      },
      {
        scale: 1,
        boxShadow: '0 0 45px rgba(23, 108, 255, 0.20)',
        duration: 0.5,
        ease: 'power3.out',
        yoyo: true,
        repeat: 1,
      }
    )
  }, 500)
}

onMounted(() => {
  ctx = gsap.context(() => {

    /* ==================================================
       GENERAL REVEAL
    ================================================== */

    gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 35,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            once: true,
          },
        }
      )

    })


    /* ==================================================
       HERO STATS
    ================================================== */

    gsap.fromTo(
      '.hero-stat-card',
      {
        opacity: 0,
        y: 35,
        scale: 0.94,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.75,

        stagger: 0.12,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.hero-stats-grid',
          start: 'top 85%',
          once: true,
        },
      }
    )


    /* ==================================================
      ABOUT — PREMIUM REVEAL
    ================================================== */

    /* HEADER */

    gsap.fromTo(
      '.about-heading',
      {
        opacity: 0,
        y: 35,
        filter: 'blur(8px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',

        duration: 0.9,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 82%',
          once: true,
        },
      }
    )


    /* STORY */

    gsap.fromTo(
      '.about-description',
      {
        opacity: 0,
        x: -45,
        filter: 'blur(8px)',
      },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',

        duration: 0.9,

        delay: 0.15,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 78%',
          once: true,
        },
      }
    )


    /* MANAGEMENT CARDS */

    gsap.fromTo(
      '.profile-card',
      {
        opacity: 0,
        x: 45,
        scale: 0.96,
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',

        duration: 0.75,

        stagger: 0.15,

        delay: 0.2,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.about-profiles',
          start: 'top 78%',
          once: true,
        },
      }
    )


    /* SMALL TRUST BADGES */

    gsap.fromTo(
      '.about-badge',
      {
        opacity: 0,
        y: 12,
        scale: 0.94,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.5,

        stagger: 0.10,

        delay: 0.35,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.about-badges',
          start: 'top 84%',
          once: true,
        },
      }
    )


    /* REPUTATION */

    gsap.fromTo(
      '.about-reputation',
      {
        opacity: 0,
        y: 25,
        scale: 0.98,
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',

        duration: 0.8,

        delay: 0.15,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.about-reputation',
          start: 'top 88%',
          once: true,
        },
      }
    )


    /* ==================================================
       SERVICES
    ================================================== */

    gsap.fromTo(
      '.service-card',
      {
        opacity: 0,
        y: 50,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.8,

        stagger: 0.12,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 78%',
          once: true,
        },
      }
    )


    /* ==================================================
      TRUST
    ================================================== */

    gsap.fromTo(
      '.trust-feature',
      {
        opacity: 0,
        y: 30,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.7,

        stagger: 0.12,

        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.trust-panel',
          start: 'top 80%',
          once: true,
        },
      }
    )


    /* ==================================================
       PAYMENT
    ================================================== */

    gsap.fromTo(
      '.payment-section',
      {
        opacity: 0,
        y: 35,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.9,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.payment-section',
          start: 'top 82%',
          once: true,
        },
      }
    )


    /* ==================================================
       CONTACT
    ================================================== */

    gsap.fromTo(
      '.contact-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.7,

        stagger: 0.10,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 80%',
          once: true,
        },
      }
    )


    /* ==================================================
       WHATSAPP CHANNEL
    ================================================== */

    gsap.fromTo(
      '.channel-section',
      {
        opacity: 0,
        y: 40,
        scale: 0.97,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.85,

        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.channel-section',
          start: 'top 82%',
          once: true,
        },
      }
    )


    /* ==================================================
       FAQ
    ================================================== */

    gsap.fromTo(
      '.faq-item',
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,

        duration: 0.6,

        stagger: 0.10,

        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 80%',
          once: true,
        },
      }
    )


  })

  /* ==================================================
    CTA
  ================================================== */

  gsap.fromTo(
    '.cta-content',
    {
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: 'blur(10px)',
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',

      duration: 0.9,

      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.cta',
        start: 'top 80%',
        once: true,
      },
    }
  )


  gsap.fromTo(
    '.cta-content > *',
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,

      duration: 0.65,

      stagger: 0.1,

      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.cta',
        start: 'top 78%',
        once: true,
      },
    }
  )
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div class="site">

    <DesktopNav />
    <MobileNav />

    <!-- ONE MAIN VISUAL -->
    <BglVisual />

    <main class="experience">

      <!-- ================= HERO ================= -->

      <section id="home" class="section hero">

        <div class="hero-content">

          <span class="eyebrow">
            {{ t.hero.eyebrow }}
          </span>

          <h1>
            {{ t.hero.titleBefore }}
            <span>{{ t.hero.titleHighlight }}</span>
            {{ t.hero.titleAfter }}
          </h1>

          <p>
            {{ t.hero.description }}
          </p>

          <div class="hero-actions">

            <a href="#contact" class="btn btn-primary">
              {{ t.hero.contact }}
            </a>

            <a href="#services" class="btn btn-secondary">
              {{ t.hero.explore }}
            </a>

          </div>

        </div>

      </section>

      <!-- ================= STATS ================= -->
      <HeroStats />

      <!-- ================= ABOUT ================= -->
      <About />

      <!-- ================= SERVICES ================= -->

      <section id="services" class="section services">

        <div class="section-heading-services reveal">

          <span class="eyebrow">
            {{ t.services.eyebrow }}
          </span>

          <h2>
            {{ t.services.titleBefore }}
            <span>{{ t.services.titleHighlight }}</span>
          </h2>

          <p>
            {{ t.services.description }}
          </p>

        </div>


        <div class="services-grid">

          <ServiceCard
            number="01"
            icon="buy"
            :title="t.services.buy.title"
            :description="t.services.buy.description"
            :action="t.services.buy.action"
          />

          <ServiceCard
            number="02"
            icon="sell"
            :title="t.services.sell.title"
            :description="t.services.sell.description"
            :action="t.services.sell.action"
          />

          <ServiceCard
            number="03"
            icon="global"
            :title="t.services.global.title"
            :description="t.services.global.description"
            :action="t.services.global.action"
          />

        </div>

      </section>

      <!-- ================= WHY CHOOSE PUCAA ================= -->
      <Trust />

      <!-- ================= HOW IT WORKS ================= -->

      <section id="how-it-works" class="section how-section">

        <div class="section-heading reveal">

          <span class="eyebrow">
            {{ t.howItWorks.eyebrow }}
          </span>

          <h2>
            {{ t.howItWorks.titleBefore }}
            <span>{{ t.howItWorks.titleHighlight }}</span>
          </h2>

        </div>

        <HowItWorks />

      </section>

      <!-- ================= PAYMENT METHODS ================= -->

      <PaymentMethods />

      <!-- ================= CONTACT ================= -->

      <ContactSection />

      <!-- ================= FAQ ================= -->

      <FAQ />

      <!-- ================= CHANNEL ================= -->

      <WhatsAppChannel />

      <!-- ================= CTA ================= -->

      <section id="contactunder" class="section cta">

        <div class="cta-content">

          <span class="eyebrow">
            {{ t.cta.eyebrow }}
          </span>

          <h2>
            {{ t.cta.titleBefore }}
            <span>{{ t.cta.titleHighlight }}</span>
          </h2>

          <p>
            {{ t.cta.description }}
          </p>

          <a
            href="#contact"
            class="btn btn-primary cta-contact-link"
            @click.prevent="handleContactClick"
          >
            {{ t.cta.button }}
          </a>

        </div>

      </section>

    </main>

    <Footer />

  </div>
</template>