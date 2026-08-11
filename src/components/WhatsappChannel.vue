<script setup lang="ts">
import { Send } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section class="channel-section">

    <div class="channel-content">

      <div class="channel-text">

        <span class="channel-eyebrow">
          {{ t.channel.eyebrow }}
        </span>

        <h2>
          {{ t.channel.title }}
        </h2>

        <p>
          {{ t.channel.description }}
        </p>

      </div>


      <div class="channel-actions">

        <a
          href="https://whatsapp.com/channel/0029VbCbd25KmCPGJHe5Sz2W"
          target="_blank"
          rel="noopener noreferrer"
          class="channel-button channel-button-primary"
        >
          <span>Join WhatsApp Channel</span>
          <Send :size="16" />
        </a>

      </div>

    </div>

  </section>
</template>