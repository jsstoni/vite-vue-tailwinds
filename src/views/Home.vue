<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { computed } from "vue";

const dark = useDark();
const toggleDark = useToggle(dark);

const isDark = computed(() => (dark.value ? "Dark" : "White"));
</script>

<template>
  <button @click="toggleDark()">{{ isDark }}</button>
  <h1
    class="text-3xl font-bold underline bg-white text-black dark:bg-black dark:text-white"
  >
    Hello world!
  </h1>
</template>
