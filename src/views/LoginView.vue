<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form class="w-full max-w-md">
        <div class="flex justify-center mx-auto">
          <img class="w-auto h-7 sm:h-8" src="../assets/logo.png" alt="Logo" />
        </div>

        <div class="flex items-center justify-center mt-6">
          <a @click="toggleAuthMode('signIn')"
            class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300 cursor-pointer"
            :class="{
              'border-b-2 border-blue-500 dark:border-blue-400 dark:text-white':
                authMode === 'signIn',
            }">
            sign in
          </a>
          <a @click="toggleAuthMode('signUp')"
            class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize cursor-pointer" :class="{
              'border-b-2 border-blue-500 dark:border-blue-400 dark:text-white':
                authMode === 'signUp',
            }">
            sign up
          </a>
        </div>

        <!-- Sign In Fields -->
        <div v-if="authMode === 'signIn'">
          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input type="email"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address" required />
          </div>

          <div class="relative flex items-center mt-4">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input type="password"
              class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password" required />
          </div>
        </div>

        <!-- Sign Up Fields -->
        <div v-if="authMode === 'signUp'">
          <div class="relative flex items-center mt-8">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input type="text"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Full Name" required />
          </div>

          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input type="text"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username" required />
          </div>

          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" viewBox="0 0 16 16">
                <path
                  d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                <path
                  d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </span>
            <input type="date"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required />
          </div>


          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input type="email"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address" required />
          </div>

          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input type="confirm_email"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Email address" required />
          </div>

          <div class="relative flex items-center mt-4">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input type="password"
              class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password" required />
          </div>

          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input type="confirm_password"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password" required />
          </div>
        </div>

        <button type="submit"
          class="block w-full px-5 py-3 mt-6 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          {{ authMode === "signIn" ? "Sign In" : "Sign Up" }}
        </button>

        <!-- Social Login -->
        <div class="mt-8">
          <p class="text-center text-gray-500">Or sign in with</p>
          <div class="flex items-center justify-center space-x-4 mt-4">
            <button
              class="flex items-center px-4 py-2 text-sm text-white bg-red-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              @click.prevent="signInWithGoogle">
              <i class="bi bi-google"></i>
              <span class="ml-2">Google</span>
            </button>

            <button
              class="flex items-center px-4 py-2 text-sm text-white bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
              @click.prevent="signInWithGitHub">
              <i class="bi bi-github"></i>
              <span class="ml-2">GitHub</span>
            </button>

            <button
              class="flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
              @click.prevent="signInWithDiscord">
              <i class="bi bi-discord"></i>
              <span class="ml-2">Discord</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Definiere den Authentifizierungsmodus mit 'signIn' als Standardwert
const authMode = ref<"signIn" | "signUp">("signIn");

// Funktion zum Umschalten des Authentifizierungsmodus
const toggleAuthMode = (mode: "signIn" | "signUp") => {
  authMode.value = mode;
};

// Anmeldefunktionen für soziale Netzwerke
const signInWithGoogle = () => {
  // Hier Google-Anmeldelogik hinzufügen
  console.log("Sign in with Google");
};

const signInWithGitHub = () => {
  // Hier GitHub-Anmeldelogik hinzufügen
  console.log("Sign in with GitHub");
};

const signInWithDiscord = () => {
  // Hier Discord-Anmeldelogik hinzufügen
  console.log("Sign in with Discord");
};
</script>

<style scoped>
/* Füge hier nach Bedarf Stil hinzu */
</style>
