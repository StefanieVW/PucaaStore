<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  activeIndex.value =
    activeIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="faq-section">

    <div class="faq-heading reveal">

      <span class="eyebrow">
        {{ t.faq.eyebrow }}
      </span>

      <h2>
        {{ t.faq.titleBefore }}
        <span>{{ t.faq.titleHighlight }}</span>
      </h2>

      <p>
        {{ t.faq.description }}
      </p>

    </div>


    <div class="faq-list">

      <article
        v-for="(item, index) in t.faq.items"
        :key="index"
        class="faq-item"
        :class="{ active: activeIndex === index }"
      >

        <button
          class="faq-question"
          :aria-expanded="activeIndex === index"
          @click="toggleFaq(index)"
        >

          <div class="faq-question-left">

            <span class="faq-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="faq-question-text">
              {{ item.question }}
            </span>

          </div>

          <span class="faq-icon">
            <Plus :size="18" />
          </span>

        </button>


        <div
          v-if="activeIndex === index"
          class="faq-answer"
        >
          <p>
            {{ item.answer }}
          </p>
        </div>

      </article>

    </div>

  </section>
</template>