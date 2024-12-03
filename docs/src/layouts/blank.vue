<template>
  <div class="flex flex-1 flex-col overflow-auto">
    <slot class="flex flex-1" />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#__nuxt {
  flex: 1;
  display: flex;
  overflow: auto;
}

</style>
