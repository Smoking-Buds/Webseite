<script setup lang="ts">
import { ref } from 'vue';

interface Language {
  code: string;
  name: string;
  flag: string;
  jsonFile: string;
}

const isOpen = ref(false);
const languages = ref<Language[]>([
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/us.svg', jsonFile: './assets/en.json' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/de.svg', jsonFile: './assets/de.json' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/fr.svg', jsonFile: './assets/fr.json' },
]);

const currentLanguage = ref(languages.value[0]);
const translations = ref({});

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const loadTranslations = async (lang: Language) => {
    const response = await fetch(lang.jsonFile);
    translations.value = await response.json();
};

const changeLanguage = async (lang: Language) => {
    currentLanguage.value = lang;
    await loadTranslations(lang);
    isOpen.value = false;
};

loadTranslations(currentLanguage.value);
</script>

<template>
    <div class="relative inline-block">
        <button @click="toggleDropdown" class="flex items-center text-gray-600">
            <img :src="currentLanguage.flag" alt="Flag" class="w-6 h-4 mr-2" />
            {{ currentLanguage.name }}
            <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div v-if="isOpen" class="absolute right-0 z-20 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
            <ul>
                <li v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang)"
                    class="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                    <img :src="lang.flag" alt="Flag" class="w-6 h-4 mr-2" />
                    {{ lang.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
