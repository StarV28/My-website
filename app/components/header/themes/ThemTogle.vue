<template>
  <button class="theme-toggle" @click="toggleTheme">
    <span v-if="theme === 'dark'">☀️</span>
    <span v-else>🌙</span>
  </button>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme();
const { t } = useI18n();
</script>

<style scoped lang="scss">
.theme-toggle {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: none;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 300;
  }
}
</style>
