<script setup lang="ts"></script>

<template>
  <form class="flex gap-2 px-4 py-2" action="/api/login" method="post">
    <input
      type="text"
      value="admin"
      name="username"
      placeholder="username"
      class="border px-1"
    />
    <input
      type="password"
      value="admin123"
      name="password"
      placeholder="password"
      class="border px-1"
    />
    <button class="border px-1">login</button>
  </form>
</template>

<style scoped></style>
