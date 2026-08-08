import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initTrustAnimations() {

  /* ==================================================
     TRUST FEATURES
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
     CUBE ENTRANCE
  ================================================== */

  gsap.fromTo(
    '.trust-cube-wrapper',
    {
      opacity: 0,
      x: 40,
      scale: 0.85,
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,

      duration: 1,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '#trust',
        start: 'top 78%',
        once: true,
      },
    }
  )


  /* ==================================================
     CUBE IDLE FLOAT
  ================================================== */

  gsap.to('.trust-cube', {
    y: -10,
    rotation: 4,

    duration: 3,
    ease: 'sine.inOut',

    repeat: -1,
    yoyo: true,
  })
}