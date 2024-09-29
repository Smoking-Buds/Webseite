<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import ProfileDropdown from './components/ProfileDropdown.vue';
import CartDropdown from './components/CartDropdown.vue';
import LanguageDropdown from './components/LanguageDropdown.vue';
import NotificationDropdown from './components/NotificationDropdown.vue';

const isOpen = ref(false);
const isLoggedIn = ref(false); // State für den Login-Status
const cartItems = ref([
  { id: 1, name: 'Product 1', quantity: 2, price: 19.99 },
  { id: 2, name: 'Product 2', quantity: 1, price: 29.99 },
]);

const notifications = ref([
  { id: 1, message: 'New message from John', time: '5 minutes ago' },
  { id: 2, message: 'Your order has been shipped', time: '1 hour ago' },
  { id: 3, message: 'New product available', time: '2 hours ago' },
  { id: 4, message: 'Your account has been updated', time: '3 hours ago' },
  { id: 5, message: 'Your account has been locked due to inactivity', time: '4 hours ago' },
]);

const isCookieAccepted = ref(false);

const checkCookie = () => {
  const cookieName = 'cookieConsent';
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    if (cookie.startsWith(cookieName)) {
      return true;
    }
  }
  return false;
};

const acceptCookies = () => {
  const cookieName = 'cookieConsent';
  const expires = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toUTCString(); //14 days
  document.cookie = `${cookieName}=accepted; expires=${expires}; path=/`;
  isCookieAccepted.value = true;
};

onMounted(() => {
  isCookieAccepted.value = checkCookie();
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header>
    <nav class="relative bg-white shadow dark:bg-gray-800">
      <div class="container px-6 py-4 mx-auto">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex items-center justify-between">
            <a href="/">
              <img class="w-auto h-6 sm:h-7" src="./assets/logo.png" alt="Smoking Bud's Logo">
            </a>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
              <button @click="toggleMenu" type="button"
                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                </svg>

                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
            class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <div class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <a href="/"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Home</a>
              <a href="/news"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">News</a>
              <a href="/shop"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Shop</a>
              <a href="/about"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
              <a href="/contact"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
              <RouterLink v-if="!isLoggedIn" to="/login"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                Login</RouterLink>
            </div>

            <div class="flex items-center mt-4 lg:mt-0">
              <LanguageDropdown class="pr-2 mr-2" />
              <CartDropdown v-if="isLoggedIn" :cart-items="cartItems" />
              <NotificationDropdown v-if="isLoggedIn" :notifications="notifications" class="mx-4" />
              <ProfileDropdown v-if="isLoggedIn" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <section id="cookie-banner" class="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-800" v-if="!isCookieAccepted">
    <div class="container px-4 py-8 mx-auto lg:flex lg:items-center lg:gap-x-16">
      <p class="text-gray-600 dark:text-gray-300">
        By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation,
        analyze site usage, and assist in our marketing efforts.
      </p>

      <div class="flex items-center mt-6 gap-x-4 lg:gap-x-8 shrink-0 lg:mt-0">
        <button
          class="w-1/2 text-sm text-gray-800 underline transition-colors duration-300 md:w-auto dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
          Cookie Setting
        </button>

        <button @click="acceptCookies"
          class="text-sm w-1/2 md:w-auto font-medium bg-gray-900 rounded-lg hover:bg-gray-900/80 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
          Accept All Cookies
        </button>
      </div>
    </div>
  </section>

  <footer class="relative bg-white shadow dark:bg-gray-900">
    <div class="container p-6 mx-auto">
      <div class="lg:flex">
        <div class="w-full -mx-6 lg:w-2/5">
          <div class="px-6">
            <a href="/">
              <img class="w-auto h-10" src="./assets/logo.png" alt="Smoking Buds" />
            </a>

            <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
              Join our community of cannabis enthusiasts for the latest tips, strains, and
              smoking culture.
            </p>

            <div class="flex mt-6 -mx-2">
              <a href="https://www.instagram.com"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>

              <a href="https://www.facebook.com"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                aria-label="Facebook">
                <i class="bi bi-facebook"></i>
              </a>

              <a href="https://www.twitter.com"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                aria-label="Twitter">
                <i class="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 lg:mt-0 lg:w-3/5">
          <div class="flex flex-wrap justify-between px-6">
            <div>
              <h3 class="font-medium text-gray-700 dark:text-gray-200">Products</h3>

              <ul class="mt-2">
                <li class="my-1">
                  <RouterLink to="/shop/category=pre-rolls" class="text-gray-500 dark:text-gray-400 hover:underline">Pre-Rolls
                  </RouterLink>
                </li>

                <li class="my-1">
                  <RouterLink to="/shop/category=bongs" class="text-gray-500 dark:text-gray-400 hover:underline">Bongs
                  </RouterLink>
                </li>

                <li class="my-1">
                  <RouterLink to="/shop/category=grinder" class="text-gray-500 dark:text-gray-400 hover:underline">Grinder
                  </RouterLink>
                </li>

                <li class="my-1">
                  <RouterLink to="/shop/category=longpapes" class="text-gray-500 dark:text-gray-400 hover:underline">Longpapes
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-medium text-gray-700 dark:text-gray-200">Legal</h3>

              <ul class="mt-2">
                <li class="my-1">
                  <RouterLink to="/imprint" class="text-gray-500 dark:text-gray-400 hover:underline">Imprint
                  </RouterLink>
                </li>

                <li class="my-1">
                  <RouterLink to="/terms" class="text-gray-500 dark:text-gray-400 hover:underline">Terms of Service
                  </RouterLink>
                </li>

                <li class="my-1">
                  <RouterLink to="/privacy" class="text-gray-500 dark:text-gray-400 hover:underline">Privacy Policy
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-medium text-gray-700 dark:text-gray-200">Follow Us</h3>

              <ul class="mt-2">
                <li class="my-1">
                  <a href="#" class="text-gray-500 dark:text-gray-400 hover:underline">Instagram</a>
                </li>

                <li class="my-1">
                  <a href="#" class="text-gray-500 dark:text-gray-400 hover:underline">Facebook</a>
                </li>

                <li class="my-1">
                  <a href="#" class="text-gray-500 dark:text-gray-400 hover:underline">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700">

      <div>
        <p class="text-center text-gray-500 dark:text-gray-400">© Smoking Bud's 2024 - All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>