<script setup lang="ts">
import { Send } from 'lucide-vue-next'

import discordIcon from '../assets/icons/discord.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'
import facebookIcon from '../assets/icons/facebook.svg'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const contacts = [
  // WhatsApp
  {
    platform: 'WhatsApp',
    admin: 'Admin 1',
    icon: whatsappIcon,
    url: 'https://wa.me/6281264722301',
  },
  {
    platform: 'WhatsApp',
    admin: 'Admin 2',
    icon: whatsappIcon,
    url: 'https://wa.me/6281944361109',
  },

  // Discord
  {
    platform: 'Discord',
    admin: 'Admin 1',
    icon: discordIcon,
    url: 'https://discord.com/users/545596758693117953',
  },
  {
    platform: 'Discord',
    admin: 'Admin 2',
    icon: discordIcon,
    url: 'https://discord.com/users/399250119024705546',
  },

  // Facebook
  {
    platform: 'Facebook',
    admin: 'Admin 1',
    icon: facebookIcon,
    url: 'https://facebook.com/cindyphannnn',
  },
  {
    platform: 'Facebook',
    admin: 'Admin 2',
    icon: facebookIcon,
    url: 'https://facebook.com/vilenciakurni',
  },
]
</script>

<template>
  <section id="contact" class="contact-section">

    <!-- ================= CONTACT HEADING ================= -->

    <div class="contact-heading reveal">

      <span class="eyebrow">
        {{ t.contact.eyebrow }}
      </span>

      <h2>
        {{ t.contact.title }}
      </h2>

      <p>
        {{ t.contact.description }}
      </p>

    </div>


    <!-- ================= CONTACT GRID ================= -->

    <div class="contact-grid">

      <article
        v-for="(contact, index) in contacts"
        :key="`${contact.platform}-${index}`"
        class="contact-card"
      >

        <!-- CARD TOP -->

        <div class="contact-card-top">

          <div class="contact-icon">

            <img
              :src="contact.icon"
              :alt="`${contact.platform} icon`"
              class="contact-brand-icon"
            />

          </div>

          <span class="contact-platform">
            {{ contact.platform }}
          </span>

        </div>


        <!-- CARD CONTENT -->

        <div class="contact-card-content">

          <span class="contact-label">
            {{ t.contact.adminLabel }}
          </span>

          <h3>
            {{ contact.admin }}
          </h3>

        </div>


        <!-- ACTION -->

        <a
          :href="contact.url"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-action"
        >

          <span>
            {{ t.contact.button }}
          </span>

          <Send :size="15" />

        </a>

      </article>

    </div>

  </section>
</template>