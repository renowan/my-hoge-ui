<template>
  <div class="flex flex-1 flex-col overflow-auto">
    <ZHeader />
    <div class="flex flex-1 overflow-auto">
      <!-- <ZAside v-if="route.name !== 'index'" /> -->
      <div class="main-content flex flex-1 overflow-auto">
        <slot />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from 'pinia'
import ZHeader from '@/components/global/header/ZHeader.vue'
import { useStore } from '@/store/main'

const route = useRoute()


</script>

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
  /* background-color:  rgb(238, 238, 246); */
  /* apply のbgc */
  /* background-color: #f3f6f9; */
}

#__nuxt {
  flex: 1;
  display: flex;
  overflow: auto;
}

/* .main-content {
  background-image: url(~/assets/img/bg-gradation-2.png);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  background-color:rgba(238,238,246,0.6);
  background-blend-mode:lighten;
} */
</style>
