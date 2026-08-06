<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pucaaLogo from '../assets/pucaa-logo-transparent.png'

gsap.registerPlugin(ScrollTrigger)

const visual = ref<HTMLElement | null>(null)
const glow = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  if (!visual.value) return

  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    // ==========================================
    // DESKTOP
    // ==========================================

    mm.add('(min-width: 769px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      })

      tl.to(visual.value, {
        x: '-12vw',
        y: '8vh',
        scale: 0.82,
        rotation: -6,
        rotationX: 4,
        rotationY: -10,
        duration: 1,
        ease: 'none',
      })

      tl.to(visual.value, {
        x: '-25vw',
        y: '16vh',
        scale: 0.68,
        rotation: 7,
        rotationX: -3,
        rotationY: 12,
        duration: 1,
        ease: 'none',
      })

      tl.to(visual.value, {
        x: '-5vw',
        y: '26vh',
        scale: 0.6,
        rotation: 10,
        rotationX: 2,
        rotationY: -8,
        duration: 1,
        ease: 'none',
      })

      tl.to(visual.value, {
        x: '18vw',
        y: '30vh',
        scale: 0.88,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 1,
        ease: 'none',
      })

      // Subtle glow intensity
      gsap.to(glow.value, {
        opacity: 0.55,
        scale: 1.1,
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      })
    })

    // ==========================================
    // MOBILE
    // ==========================================

    mm.add('(max-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      })

      tl.to(visual.value, {
        x: '-7vw',
        y: '6vh',
        scale: 0.72,
        rotation: -4,
        rotationY: -5,
        duration: 1,
        ease: 'none',
      })

      tl.to(visual.value, {
        x: '-12vw',
        y: '12vh',
        scale: 0.58,
        rotation: 5,
        rotationY: 6,
        duration: 1,
        ease: 'none',
      })

      tl.to(visual.value, {
        x: '5vw',
        y: '20vh',
        scale: 0.68,
        rotation: 0,
        rotationY: 0,
        duration: 1,
        ease: 'none',
      })
    })

    // ==========================================
    // FLOATING IDLE MOVEMENT
    // ==========================================

    gsap.to(visual.value, {
      y: '+=8',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, visual.value)

})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div class="pucaa-visual-layer">
    <div ref="glow" class="pucaa-glow"></div>

    <div
      ref="visual"
      class="pucaa-visual"
    >
      <img
        :src="pucaaLogo"
        alt="PUCAA STORE"
      />
    </div>
  </div>
</template>