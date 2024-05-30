<script setup lang="ts">
const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="dropdown relative inline-block">
    <button
      class="dropdown-button shadow rounded px-2 py-1"
      @click="toggleDropdown"
    >
      <slot name="button"></slot>
    </button>
    <div
      class="dropdown-content absolute z-10 shadow bg-white min-w-32 -left-6 place-content-center grid gap-2 text-[#6A6A6A] text-xs"
      v-if="isOpen"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style>
.dropdown-content > button {
  padding: 8px;
}
</style>
