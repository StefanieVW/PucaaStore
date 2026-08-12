import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHomeAnimations() {

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
   HERO STATS COUNTER
================================================== */

const heroStatNumbers =
  gsap.utils.toArray<HTMLElement>('.hero-stat-number')

heroStatNumbers.forEach((element) => {

  const target =
    Number(element.dataset.value) || 0

  const suffix =
    element.dataset.suffix || ''

  const type =
    element.dataset.type || 'normal'

  const counter = {
    value: 0,
  }

  gsap.to(counter, {

    value: target,

    /* SAME DURATION FOR ALL STATS */
    duration: 1.8,

    ease: 'power2.out',

    scrollTrigger: {
      trigger: '.hero-stats-grid',
      start: 'top 85%',
      once: true,
    },

    onUpdate: () => {

      const value =
        Math.round(counter.value)

      /* =========================
         NORMAL
         100K+ / 100%
      ========================= */

      if (type === 'normal') {

        element.textContent =
          `${value}${suffix}`

        return
      }


      /* =========================
         SUPPORT
         0/7 → 24/7
      ========================= */

      if (type === 'support') {

        element.textContent =
          `${value}/7`

        return
      }


      /* =========================
         RESPONSE TIME
      ========================= */

      if (type === 'time') {

        if (value < 60) {

          element.textContent =
            `${value} Sec`

        } else {

          const minutes =
            Math.floor(value / 60)

          const seconds =
            value % 60

          if (seconds === 0) {

            element.textContent =
              `${minutes} Min`

          } else {

            element.textContent =
              `${minutes}m ${seconds}s`

          }

        }

      }

    },

    onComplete: () => {

      if (type === 'normal') {

        element.textContent =
          `${target}${suffix}`

      }

      else if (type === 'support') {

        element.textContent =
          '24/7'

      }

      else if (type === 'time') {

        element.textContent =
          '<3 Min'

      }

    },

  })

})

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
      stagger: 0.1,
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
      stagger: 0.1,
      ease: 'power2.out',

      scrollTrigger: {
        trigger: '.faq-list',
        start: 'top 80%',
        once: true,
      },
    }
  )
}