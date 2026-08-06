<script setup lang="ts">
import {
  MessageCircle,
  Instagram,
  Facebook,
  Send
} from 'lucide-vue-next'

import { useLanguage } from '../composables/useLanguage'
import pucaaLogo from '../assets/pucaa-logo.png'

const { t } = useLanguage()
</script>

<template>
  <footer class="site-footer">

    <div class="footer-main">

      <!-- BRAND -->
      <div class="footer-brand">

        <a href="#home" class="nav-brand collaboration-brand">

          <div class="collab-logo pucaa-logo-wrap">
            <span class="electric-ring"></span>

            <img
              :src="pucaaLogo"
              alt="PUCAA"
              class="brand-logo pucaa-logo"
            />
          </div>

        </a>

        <p>
          {{ t.footer.description }}
        </p>

      </div>


      <!-- NAVIGATION -->
      <div class="footer-column">

        <span class="footer-label">
          {{ t.footer.navigation }}
        </span>

        <a href="#home">
          {{ t.nav.home }}
        </a>

        <a href="#services">
          {{ t.nav.services }}
        </a>

        <a href="#about">
          {{ t.nav.about }}
        </a>

        <a href="#contact">
          {{ t.nav.contact }}
        </a>

        <a href="#faq">
          FAQ
        </a>

      </div>


      <!-- CONTACT -->
      <div class="footer-column">

        <span class="footer-label">
          {{ t.footer.connect }}
        </span>

        <a
          href="https://discord.com/users/545596758693117953"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle :size="15" />
          Discord
        </a>

        <a
          href="https://wa.me/6281264722301"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle :size="15" />
          WhatsApp
        </a>

        <a
          href="https://facebook.com/vilenciakurni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook :size="15" />
          Facebook
        </a>

        <a
          href="https://www.instagram.com/pucaa_store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram :size="15" />
          Instagram
        </a>

      </div>


      <!-- COMMUNITY -->
      <div class="footer-column">

        <span class="footer-label">
          {{ t.footer.community }}
        </span>

        <a
          href="https://whatsapp.com/channel/0029VbCbd25KmCPGJHe5Sz2W"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send :size="15" />
          WhatsApp Channel
        </a>

        <p class="footer-note">
          {{ t.footer.channelNote }}
        </p>

      </div>

    </div>


    <!-- BOTTOM -->
    <div class="footer-bottom">

      <span>
        © 2016–2026 Us.
        {{ t.footer.copyright }}
      </span>

      <span>
        {{ t.footer.marketplace }}
      </span>

    </div>

  </footer>
</template>