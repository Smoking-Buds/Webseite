<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isOpen = ref(false);
const dropdownRef = ref<HTMLDivElement | null>(null);

const toggleDropdown = (event: Event) => {
    event.stopPropagation();
    isOpen.value = !isOpen.value;
};

const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

const goToProfile = () => {
    router.push('/profile');
};

const logout = () => {
    // Implement your logout logic here
    console.log('Logout');
    isOpen.value = false;
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});
</script>

<template>
    <div class="relative flex items-center" ref="dropdownRef">
        <button type="button" class="flex items-center focus:outline-none" aria-label="go to profile"
            @click="goToProfile">
            <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    class="object-cover w-full h-full" alt="avatar">
            </div>
            <h3 class="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
        </button>
        <button @click="toggleDropdown" class="ml-2 focus:outline-none" aria-label="toggle profile dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 dark:text-gray-200" viewBox="0 0 20 20"
                fill="currentColor" :class="{ 'transform rotate-180': isOpen }">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </button>

        <div v-if="isOpen"
            class="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800 top-full" @click.stop>
            <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Profile</a>
            <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Settings</a>
            <a href="#" @click="logout"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Logout</a>
        </div>
    </div>
</template>