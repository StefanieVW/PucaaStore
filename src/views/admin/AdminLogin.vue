<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { supabase } from '../../lib/supabase'

import '../../styles/admin-login.css'

const router = useRouter()

const email = ref('')
const password = ref('')

const loading = ref(false)
const errorMessage = ref('')

const showPassword = ref(false)


/* ==================================================
   LOGIN
================================================== */

const login = async () => {
  if (loading.value) return

  errorMessage.value = ''

  const cleanEmail = email.value.trim()

  if (!cleanEmail || !password.value) {
    errorMessage.value =
      'Please enter your email and password.'

    return
  }

  loading.value = true

  try {

    /*
     * Login menggunakan Supabase Auth.
     */
    const {
      data,
      error,
    } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password: password.value,
    })

    if (error) {
      errorMessage.value =
        'Invalid email or password.'

      return
    }

    if (!data.user) {
      errorMessage.value =
        'Unable to sign in.'

      return
    }


    /*
     * Login berhasil, sekarang cek apakah
     * user memang terdaftar sebagai admin.
     */
    const {
      data: admin,
      error: adminError,
    } = await supabase
      .from('admin_users')
      .select('user_id, name')
      .eq('user_id', data.user.id)
      .maybeSingle()


    if (adminError || !admin) {

      /*
       * User valid tetapi bukan admin.
       * Langsung logout lagi.
       */
      await supabase.auth.signOut()

      errorMessage.value =
        'This account does not have admin access.'

      return
    }


    /*
     * Semuanya valid.
     */
    await router.replace({
      name: 'admin-reviews',
    })

  } catch (error) {

    console.error(
      'Admin login error:',
      error
    )

    errorMessage.value =
      'Something went wrong. Please try again.'

  } finally {

    loading.value = false

  }
}


/* ==================================================
   BACK TO WEBSITE
================================================== */

const goHome = () => {
  router.push('/')
}
</script>


<template>

  <main class="admin-login-page">

    <!-- =========================================
         BACKGROUND
    ========================================== -->

    <div
      class="admin-login-background"
      aria-hidden="true"
    >

      <div
        class="admin-login-glow admin-login-glow-1"
      ></div>

      <div
        class="admin-login-glow admin-login-glow-2"
      ></div>

      <div
        class="admin-login-grid"
      ></div>

    </div>


    <!-- =========================================
         LOGIN WRAPPER
    ========================================== -->

    <div class="admin-login-wrapper">


      <!-- BRAND -->

      <div class="admin-login-brand">

        <img
            src="/pucaalogo.png"
            alt="BGL Store Logo"
            class="admin-brand-logo"
        />

        <div class="admin-brand-text">

          <strong>
            BGL STORE
          </strong>

          <span>
            ADMIN PORTAL
          </span>

        </div>

      </div>


      <!-- =========================================
           CARD
      ========================================== -->

      <section class="admin-login-card">

        <div class="admin-login-card-heading">

          <span class="admin-login-eyebrow">
            SECURE ACCESS
          </span>

          <h1>
            Welcome back.
          </h1>

          <p>
            Sign in to manage and moderate
            customer reviews.
          </p>

        </div>


        <!-- =========================================
             FORM
        ========================================== -->

        <form
          class="admin-login-form"
          @submit.prevent="login"
        >


          <!-- EMAIL -->

          <div class="admin-login-field">

            <label for="admin-email">
              Email
            </label>

            <div class="admin-input-wrapper">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16v12H4V6Zm0 1 8 6 8-6"
                />
              </svg>

              <input
                id="admin-email"
                v-model="email"
                type="email"
                autocomplete="email"
                placeholder="admin@bglstore.com"
                :disabled="loading"
              />

            </div>

          </div>


          <!-- PASSWORD -->

          <div class="admin-login-field">

            <label for="admin-password">
              Password
            </label>

            <div class="admin-input-wrapper">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M7 10V8a5 5 0 0 1 10 0v2M5 10h14v10H5V10Z"
                />
              </svg>

              <input
                id="admin-password"
                v-model="password"
                :type="
                  showPassword
                    ? 'text'
                    : 'password'
                "
                autocomplete="current-password"
                placeholder="Enter your password"
                :disabled="loading"
              />


              <!-- SHOW PASSWORD -->

              <button
                class="admin-password-toggle"
                type="button"
                :aria-label="
                  showPassword
                    ? 'Hide password'
                    : 'Show password'
                "
                @click="
                  showPassword =
                    !showPassword
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                  />
                </svg>

              </button>

            </div>

          </div>


          <!-- ERROR -->

          <div
            v-if="errorMessage"
            class="admin-login-error"
          >

            <span>!</span>

            {{ errorMessage }}

          </div>


          <!-- SUBMIT -->

          <button
            class="admin-login-submit"
            type="submit"
            :disabled="loading"
          >

            <span v-if="!loading">
              Sign In
            </span>

            <span
              v-else
              class="admin-login-loading"
            >

              <span
                class="admin-login-spinner"
              ></span>

              Signing in...

            </span>

          </button>

        </form>


        <!-- SECURITY -->

        <div class="admin-login-security">

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 3 5 6v5c0 4.5 2.8 8.3 7 10 4.2-1.7 7-5.5 7-10V6l-7-3Z"
            />

            <path
              d="m9 12 2 2 4-4"
            />
          </svg>

          <span>
            Protected administrator access
          </span>

        </div>

      </section>


      <!-- =========================================
           BACK HOME
      ========================================== -->

      <button
        class="admin-back-home"
        type="button"
        @click="goHome"
      >

        <span>
          ←
        </span>

        Back to Pucaa Store

      </button>

    </div>

  </main>

</template>