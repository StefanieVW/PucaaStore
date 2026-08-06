<script setup lang="ts">
import {
  MessageCircle,
  Instagram,
  Facebook,
  Send
} from 'lucide-vue-next'
import pucaaLogo from '../assets/pucaa-logo-transparent.png'

</script>

<template>
  <footer class="site-footer">

    <div class="footer-main">

      <!-- BRAND -->
      <div class="footer-brand">

        <a href="#home" class="footer-logo">
          <img
            :src="pucaaLogo"
            alt="PUCAA Store"
            class="brand-logo"
          />

          <span class="footer-logo-text">
            PUCAA
            <small>STORE</small>
          </span>
        </a>

        <p>
          Marketplace Digital terpercaya
          sejak 2016.
        </p>

      </div>


      <!-- NAVIGATION -->
      <div class="footer-column">

        <span class="footer-label">
          Navigation
        </span>

        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>

      </div>


      <!-- CONTACT -->
      <div class="footer-column">

        <span class="footer-label">
          Connect
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


      <!-- CHANNEL -->
      <div class="footer-column">

        <span class="footer-label">
          Community
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
          Stay connected with PUCAA Store
          for updates and announcements.
        </p>

      </div>

    </div>


    <!-- BOTTOM -->
    <div class="footer-bottom">

      <span>
        © 2016–2026 PUCAA Store.
        All Rights Reserved.
      </span>

      <span>
        Digital Marketplace
      </span>

    </div>

  </footer>
</template>