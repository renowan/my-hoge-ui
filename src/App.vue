<script setup lang="ts">
import FccButton from './components/FccButton.vue'
import ZAlert from './components/Z/ZAlert.vue'
</script>

<template>
  <FccButton class="mb-4" text="Run the Tests" />
  <ZAlert color="primary" class="mb-12">this is alert </ZAlert>
  <div class="test-hoge">hohoho</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
