<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

const props = defineProps<{
    cartItems: CartItem[];
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLDivElement | null>(null);

const openDropdown = () => {
    isOpen.value = true;
};

const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

const total = computed(() => {
    return props.cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);
});

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
            class="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
            @click.stop="openDropdown">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full">{{ cartItems.length
                }}</span>
        </button>

        <div v-if="isOpen" class="absolute right-0 w-64 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800"
            @click.stop>
            <div class="p-3">
                <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200">Cart</h3>
                <div class="mt-2 space-y-2">
                    <div v-for="item in cartItems" :key="item.id" class="flex justify-between text-sm">
                        <span class="text-gray-600 dark:text-gray-400">{{ item.name }} ({{ item.quantity }})</span>
                        <span class="font-semibold text-gray-700 dark:text-gray-200">${{ (item.price *
                            item.quantity).toFixed(2) }}</span>
                    </div>
                </div>
                <div class="mt-4 border-t pt-2">
                    <div class="flex justify-between font-semibold">
                        <span class="text-gray-700 dark:text-gray-200">Total:</span>
                        <span class="text-gray-700 dark:text-gray-200">${{ total }}</span>
                    </div>
                </div>
                <button
                    class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                    Checkout
                </button>
            </div>
        </div>
    </div>
</template>