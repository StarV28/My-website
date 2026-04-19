<template>
  <div class="wrapper">
    <header>
      <div class="container">
        <HeaderComp v-if="route.meta.section === 'home'" />
        <HeaderProjectComp v-else-if="route.meta.section === 'projects'" />
      </div>
    </header>
    <main>
      <div class="container">
        <slot></slot>
      </div>
    </main>
    <footer>
      <div class="container">
        <FooterComp />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
//---------------------------------------//
const route = useRoute();
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  flex: 1 0 auto;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--bg-color);
  box-shadow: 5px 5px 15px var(--line-color);
}
main {
  flex: 1;
  margin-top: 130px;
}
h1 {
  color: var(--accent-color);
}
@media (max-width: 768px) {
  main {
    margin-top: 70px;
  }
}
footer {
  border-top: 1px solid var(--line-color);
}
</style>
