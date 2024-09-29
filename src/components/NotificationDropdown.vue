<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Notification {
    id: number;
    message: string;
    time: string;
}

defineProps<{
    notifications: Notification[];
}>();

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

const markAllAsRead = () => {
    // Implement your logic to mark all notifications as read
    console.log('Marked all notifications as read');
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
    <div class="relative" ref="dropdownRef">
        <button
            class="relative text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
            aria-label="show notifications" @click="toggleDropdown">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span v-if="notifications.length > 0"
                class="absolute top-0 right-0 p-1 text-xs text-white bg-red-500 rounded-full">
                {{ notifications.length }}
            </span>
        </button>

        <div v-if="isOpen" class="absolute right-0 w-80 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800 z-20"
            @click.stop>
            <div class="py-2">
                <h3 class="px-4 py-2 text-lg font-semibold text-gray-800 dark:text-gray-200">Notifications</h3>
                <div class="divide-y divide-gray-200 dark:divide-gray-700">
                    <div v-for="notification in notifications" :key="notification.id"
                        class="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <p class="text-sm text-gray-700 dark:text-gray-300">{{ notification.message }}</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ notification.time }}</p>
                    </div>
                </div>
                <div v-if="notifications.length === 0" class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    No new notifications
                </div>
                <div class="border-t border-gray-200 dark:border-gray-700"></div>
                <div class="px-4 py-2">
                    <button @click="markAllAsRead"
                        class="w-full px-3 py-2 text-sm text-center text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Mark all as read
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>