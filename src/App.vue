<script setup lang="ts">
// import ZAlert from './components/Z/ZAlert.vue'
</script>

<template>
  <div class="flex flex-1 flex-col overflow-auto">
    <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">header</header>
    <div class="flex flex-1 overflow-auto">
      <div class="flex-none overflow-y-auto border-r border-slate-200 duration-200 ease-in-out w-48">
        aside
      </div>
      <div class="main-content flex flex-1 overflow-auto">
        <div class="p-6">
          <ZAlert color="primary" class="mb-6">this is alert </ZAlert>
          <ZAlert color="danger" class="mb-6">this is alert danger</ZAlert>
          <div class="test-hoge">hohoho</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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

#app {
  flex: 1;
  display: flex;
  overflow: auto;
}
</style>
