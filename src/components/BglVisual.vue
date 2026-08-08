<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bglImage from '../assets/bgl.png'

gsap.registerPlugin(ScrollTrigger)

const scene = ref<HTMLElement | null>(null)
const scrollWrapper = ref<HTMLElement | null>(null)
const mainFloat = ref<HTMLElement | null>(null)
const float1 = ref<HTMLElement | null>(null)
const float2 = ref<HTMLElement | null>(null)
const float3 = ref<HTMLElement | null>(null)
const glow = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  if (!scene.value) return

  ctx = gsap.context(() => {

    /*
    ==================================================
    IDLE FLOATING
    ==================================================
    */

    if (mainFloat.value) {
      gsap.to(mainFloat.value, {
        y: -18,
        rotation: 3,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }

    if (float1.value) {
      gsap.to(float1.value, {
        x: 18,
        y: -25,
        rotation: -12,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }

    if (float2.value) {
      gsap.to(float2.value, {
        x: -22,
        y: 20,
        rotation: 10,
        duration: 4.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }

    if (float3.value) {
      gsap.to(float3.value, {
        x: 14,
        y: 28,
        rotation: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }


    /*
    ==================================================
    GLOW
    ==================================================
    */

    if (glow.value) {
      gsap.to(glow.value, {
        scale: 1.12,
        opacity: 0.72,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }


    /*
    ==================================================
    RESPONSIVE SCROLL EXPERIENCE
    ==================================================
    */

    const mm = gsap.matchMedia()


    /*
    ==================================================
    DESKTOP
    > 1350px
    ==================================================
    */

    mm.add('(min-width: 1351px)', () => {

      if (!scrollWrapper.value) return

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.4,
        },
      })


    /*
    HERO
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-12vw',
      y:'4vh',
      scale:0.88,
      rotation:-4,
      duration:0.25
    })

    /*
    STATISTICS
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-28vw',
      y:'5vh',
      scale:0.84,
      rotation:-5,
      duration:0.20
    })

    /*
    ABOUT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-52vw',
      y:'6vh',
      scale:0.79,
      rotation:-6,
      duration:0.25
    })

    /*
    SERVICES
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-85vw',
      y:'8vh',
      scale:0.70,
      rotation:-7,
      duration:0.35,
      ease:'power2.inOut'
    })

    /*
    KELUAR DARI WHY CHOOSE
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-145vw',
      y:'11vh',
      scale:0.56,
      rotation:-11,
      opacity:0,
      duration:0.15,
    })

    /*
    PINDAH KE KANAN
    */
    scrollTimeline.set(scrollWrapper.value,{
      x:'115vw',
      y:'21vh',
      scale:0.62,
      rotation:8,
    })

    /*
    HOW IT WORKS
    */
    scrollTimeline.to(scrollWrapper.value,{
      opacity:1,
      x:'40vw',
      y:'22vh',
      scale:0.67,
      rotation:5,
      duration:0.25,
      ease:'power2.out'
    })

    /*
    PAYMENT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'20vw',
      y:'24vh',
      scale:0.69,
      rotation:4,
      duration:0.35,
    })

    /*
    CONTACT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'0vw',
      y:'26vh',
      scale:0.70,
      rotation:2,
      duration:0.35,
    })

    /*
    WHATSAPP
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-18vw',
      y:'28vh',
      scale:0.70,
      rotation:1,
      duration:0.35,
    })

    /*
    FAQ
    (BGL bergerak ke kiri)
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-55vw',
      y:'29vh',
      scale:0.66,
      rotation:-2,
      duration:0.35,
      ease:'power1.inOut',
    })

    /*
    CTA
    (Baru menghilang)
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-80vw',      // opsional, makin ke kiri sedikit
      opacity:0,
      scale:0.58,
      rotation:-4,
      duration:0.18,
      ease:'power1.in',
    })

    /*
    FOOTER
    (Tetap hilang)
    */
    scrollTimeline.to({},{
      duration:0.8,
    })


    /*
    ==================================================
    FLOATING OBJECTS
    ==================================================
    */

    if (float1.value) {
      gsap.to(float1.value, {
        x: '-10vw',
        y: '12vh',
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
      })
    }

    if (float2.value) {
      gsap.to(float2.value, {
        x: '8vw',
        y: '-8vh',
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2.5,
        },
      })
    }

    if (float3.value) {
      gsap.to(float3.value, {
        x: '6vw',
        y: '15vh',
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
        },
      })
    }


    /*
    ==================================================
    GLOW
    ==================================================
    */

    if (glow.value) {
      gsap.to(glow.value, {
        scale: 1.5,
        opacity: 0.25,
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
      })
    }

  })


    /*
    ==================================================
    TABLET
    609px — 1350px
    ==================================================
    */

    mm.add('(min-width: 609px) and (max-width: 1350px)', () => {

      if (!scrollWrapper.value) return

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.4,
        },
      })


    /*
    HERO
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-12vw',
      y:'4vh',
      scale:0.88,
      rotation:-4,
      duration:0.25
    })

    /*
    STATISTICS
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-28vw',
      y:'5vh',
      scale:0.84,
      rotation:-5,
      duration:0.20
    })

    /*
    ABOUT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-52vw',
      y:'6vh',
      scale:0.79,
      rotation:-6,
      duration:0.25
    })

    /*
    SERVICES
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-85vw',
      y:'8vh',
      scale:0.70,
      rotation:-7,
      duration:0.35,
      ease:'power2.inOut'
    })

    /*
    KELUAR DARI WHY CHOOSE
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-145vw',
      y:'11vh',
      scale:0.56,
      rotation:-11,
      opacity:0,
      duration:0.15,
    })

    /*
    PINDAH KE KANAN
    */
    scrollTimeline.set(scrollWrapper.value,{
      x:'115vw',
      y:'21vh',
      scale:0.62,
      rotation:8,
    })

    /*
    HOW IT WORKS
    */
    scrollTimeline.to(scrollWrapper.value,{
      opacity:1,
      x:'40vw',
      y:'22vh',
      scale:0.67,
      rotation:5,
      duration:0.25,
      ease:'power2.out'
    })

    /*
    PAYMENT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'20vw',
      y:'24vh',
      scale:0.69,
      rotation:4,
      duration:0.35,
    })

    /*
    CONTACT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'0vw',
      y:'26vh',
      scale:0.70,
      rotation:2,
      duration:0.35,
    })

    /*
    WHATSAPP
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-18vw',
      y:'28vh',
      scale:0.70,
      rotation:1,
      duration:0.35,
    })

    /*
    FAQ
    (BGL bergerak ke kiri)
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-55vw',
      y:'29vh',
      scale:0.66,
      rotation:-2,
      duration:0.35,
      ease:'power1.inOut',
    })

    /*
    CTA
    (Baru menghilang)
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-80vw',      // opsional, makin ke kiri sedikit
      opacity:0,
      scale:0.58,
      rotation:-4,
      duration:0.18,
      ease:'power1.in',
    })

    /*
    FOOTER
    (Tetap hilang)
    */
    scrollTimeline.to({},{
      duration:0.8,
    })

      /*
      GLOW
      */

      if (glow.value) {
        gsap.to(glow.value, {
          scale: 1.35,
          opacity: 0.25,
          scrollTrigger: {
            trigger: '.experience',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          },
        })
      }

    })


    /*
    ==================================================
    MOBILE
    ≤ 608px
    ==================================================
    */

    mm.add('(max-width: 608px)', () => {

      if (!scrollWrapper.value) return

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.experience',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      })

    /*
    HERO
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-12vw',
      y:'4vh',
      scale:0.88,
      rotation:-4,
      duration:0.25
    })

    /*
    STATISTICS
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-28vw',
      y:'5vh',
      scale:0.84,
      rotation:-5,
      duration:0.20
    })

    /*
    ABOUT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-52vw',
      y:'6vh',
      scale:0.79,
      rotation:-6,
      duration:0.25
    })

    /*
    SERVICES
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-85vw',
      y:'8vh',
      scale:0.70,
      rotation:-7,
      duration:0.35,
      ease:'power2.inOut'
    })

    /*
    KELUAR DARI WHY CHOOSE
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-145vw',
      y:'11vh',
      scale:0.56,
      rotation:-11,
      opacity:0,
      duration:0.15,
    })

    /*
    PINDAH KE KANAN
    */
    scrollTimeline.set(scrollWrapper.value,{
      x:'115vw',
      y:'21vh',
      scale:0.62,
      rotation:8,
    })

    /*
    HOW IT WORKS
    */
    scrollTimeline.to(scrollWrapper.value,{
      opacity:1,
      x:'40vw',
      y:'22vh',
      scale:0.67,
      rotation:5,
      duration:0.25,
      ease:'power2.out'
    })

    /*
    PAYMENT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'20vw',
      y:'24vh',
      scale:0.69,
      rotation:4,
      duration:0.35,
    })

    /*
    CONTACT
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'0vw',
      y:'26vh',
      scale:0.70,
      rotation:2,
      duration:0.35,
    })

    /*
    WHATSAPP
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-18vw',
      y:'28vh',
      scale:0.70,
      rotation:1,
      duration:0.35,
    })

    /*
    FAQ
    (BGL bergerak ke kiri)
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-55vw',
      y:'29vh',
      scale:0.66,
      rotation:-2,
      duration:0.35,
      ease:'power1.inOut',
    })

    /*
    CTA
    (Baru menghilang)
    */
    scrollTimeline.to(scrollWrapper.value,{
      x:'-80vw',      // opsional, makin ke kiri sedikit
      opacity:0,
      scale:0.58,
      rotation:-4,
      duration:0.18,
      ease:'power1.in',
    })

    /*
    FOOTER
    (Tetap hilang)
    */
    scrollTimeline.to({},{
      duration:0.8,
    })
    })

  }, scene.value)
})


onUnmounted(() => {
  ctx?.revert()
})
</script>


<template>

  <div
    ref="scene"
    class="bgl-visual-layer"
  >

    <!-- MAIN GLOW -->

    <div
      ref="glow"
      class="bgl-glow"
    ></div>


    <!-- SCROLL WRAPPER -->

    <div
      ref="scrollWrapper"
      class="bgl-scroll-wrapper"
    >

      <!-- MAIN FLOAT -->

      <div
        ref="mainFloat"
        class="bgl-main-float"
      >

        <img
          :src="bglImage"
          alt="Blue Gem Lock"
          class="bgl-main"
        />

      </div>


      <!-- FLOATING BGL #1 -->

      <div
        ref="float1"
        class="bgl-floating bgl-floating-1"
      >

        <img
          :src="bglImage"
          alt=""
        />

      </div>


      <!-- FLOATING BGL #2 -->

      <div
        ref="float2"
        class="bgl-floating bgl-floating-2"
      >

        <img
          :src="bglImage"
          alt=""
        />

      </div>


      <!-- FLOATING BGL #3 -->

      <div
        ref="float3"
        class="bgl-floating bgl-floating-3"
      >

        <img
          :src="bglImage"
          alt=""
        />

      </div>

    </div>

  </div>

</template>