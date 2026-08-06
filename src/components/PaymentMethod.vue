<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const paymentMethods = [
  {
    name: 'BCA',
    logo: '/payment/bca.svg',
  },
  {
    name: 'Mandiri',
    logo: '/payment/mandiri.svg',
  },
  {
    name: 'BNI',
    logo: '/payment/bni.svg',
  },
  {
    name: 'BRI',
    logo: '/payment/bri.svg',
  },
  {
    name: 'SeaBank',
    logo: '/payment/seabank.svg',
  },
  {
    name: 'QRIS',
    logo: '/payment/qris.svg',
  },
  {
    name: 'GoPay',
    logo: '/payment/gopay.svg',
  },
  {
    name: 'OVO',
    logo: '/payment/ovo.svg',
  },
  {
    name: 'DANA',
    logo: '/payment/dana.svg',
  },
  {
    name: 'ShopeePay',
    logo: '/payment/shopeepay.svg',
  },
  {
    name: 'Binance',
    logo: '/payment/binance.svg',
  },
  {
    name: 'EUR',
    logo: '/payment/eur.png',
    small: true,
  },
  {
    name: 'MYR',
    logo: '/payment/myr.png',
    small: true,
  },
]

let animation: gsap.core.Tween | null = null

onMounted(() => {
  const track = document.querySelector('.payment-track') as HTMLElement

  if (!track) return

  animation = gsap.to(track, {
    xPercent: -50,
    duration: 35,
    ease: 'none',
    repeat: -1,
  })
})

onUnmounted(() => {
  animation?.kill()
})
</script>

<template>
  <section class="payment-section">

    <div class="payment-heading">

      <span class="eyebrow">
        {{ t.payment.eyebrow }}
      </span>

      <h2>
        {{ t.payment.title }}
      </h2>

      <p>
        {{ t.payment.description }}
      </p>

    </div>


    <div class="payment-marquee">

      <div class="payment-track">

        <!-- FIRST SET -->

        <div
          v-for="method in paymentMethods"
          :key="`first-${method.name}`"
          class="payment-item"
        >
          <img
            :src="method.logo"
            :alt="method.name"
            :class="{ 'payment-icon-small': method.small }"
          />

          <span>
            {{ method.name }}
          </span>
        </div>


        <!-- DUPLICATE FOR INFINITE LOOP -->

        <div
          v-for="method in paymentMethods"
          :key="`second-${method.name}`"
          class="payment-item"
        >
          <img
            :src="method.logo"
            :alt="method.name"
            :class="{ 'payment-icon-small': method.small }"
          />

          <span>
            {{ method.name }}
          </span>
        </div>

      </div>

    </div>

  </section>
</template>