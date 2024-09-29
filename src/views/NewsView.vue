<script setup lang="ts">
import { ref } from 'vue';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  authorImage: string;
  role: string;
}

// Reaktive Variable für Nachrichtenartikel
const newsItems = ref<NewsItem[]>([
  {
    id: 1,
    title: 'Neue Gesetzgebung für Cannabis-Produkte',
    description: 'Die neuesten Änderungen in der Gesetzgebung...',
    imageUrl: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    author: 'Tom Hank',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    role: 'Creative Director',
  },
  {
    id: 2,
    title: 'Innovative Produkte für Cannabis-Liebhaber',
    description: 'Erfahren Sie mehr über unsere neuen Produkte...',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    author: 'Arthur Melo',
    authorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    role: 'Creative Director',
  },
  {
    id: 3,
    title: 'Cannabis und Gesundheit: Was Sie wissen sollten',
    description: 'Informieren Sie sich über die gesundheitlichen Vorteile...',
    imageUrl: 'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    author: 'Amelia Anderson',
    authorImage: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    role: 'Lead Developer',
  },
  {
    id: 4,
    title: 'Neue Gesetzgebung für Cannabis-Produkte',
    description: 'Die neuesten Änderungen in der Gesetzgebung...',
    imageUrl: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    author: 'Tom Hank',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    role: 'Creative Director',
  },
  {
    id: 5,
    title: 'Innovative Produkte für Cannabis-Liebhaber',
    description: 'Erfahren Sie mehr über unsere neuen Produkte...',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    author: 'Arthur Melo',
    authorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    role: 'Creative Director',
  },
  {
    id: 6,
    title: 'Cannabis und Gesundheit: Was Sie wissen sollten',
    description: 'Informieren Sie sich über die gesundheitlichen Vorteile...',
    imageUrl: 'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    author: 'Amelia Anderson',
    authorImage: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    role: 'Lead Developer',
  },
]);
</script>

<template>
  <section class="bg-white dark:bg-gray-900 w-full">
    <div class="container px-6 py-10 mx-auto bg-gray-100 dark:bg-gray-800"> <!-- Hintergrundfarbe hinzugefügt -->
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Aktuelle Nachrichten</h1>

        <p class="max-w-lg mx-auto mt-4 text-gray-500">
          Bleiben Sie über die neuesten Entwicklungen in der Cannabis-Industrie informiert.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="news in newsItems" :key="news.id">
          <div class="relative">
            <img
              class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              :src="news.imageUrl"
              alt=""
            />

            <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
              <img
                class="object-cover object-center w-10 h-10 rounded-full"
                :src="news.authorImage"
                alt=""
              />

              <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">{{ news.author }}</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ news.role }}</p>
              </div>
            </div>
          </div>

          <h1 class="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{{ news.title }}</h1>

          <hr class="w-32 my-6 text-blue-500" />

          <p class="text-sm text-gray-500 dark:text-gray-400">{{ news.description }}</p>

          <RouterLink :to="`/news/${news.id}`" class="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Weiterlesen</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Container auf volle Breite setzen */
.container {
  max-width: none;
  width: 100%;
}
</style>
