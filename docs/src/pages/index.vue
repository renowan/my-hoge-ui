<template>
  <div class="p-6 flex flex-1 flex-col main-img--">
    <div class="h-52 flex flex-col justify-center items-center">
      <h1
        class="text-4xl font-extrabold tracking-tight font-display sm:text-5xl md:text-6xl xl:text-7xl mb-2"
      >
        <span class="block text-primary-600 xl:inline mb-2"
          >ZeroBoard WebApp</span
        >
        <span cl class="block text-gray-600">UIデザインベース案</span>
      </h1>
      <div class="text-gray-600">

      </div>
    </div>
    <div class="flex justify-center items-center">
      <img src="~/assets/img/undraw_experience_design_re_dmqq.svg" alt="" width="500" class="ml-20">
    </div>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">

    <ZAlert>hogehoge\\\\</ZAlert>
    <ZButton color="primary" variant="solid">hho</ZButton>
    <ZButton color="primary" variant="solid">hihihi</ZButton>

    <!-- <CategoryCard to="/foundations" title="基本" discription="ゼロボードデザインガイドラインを目指すこと、構成するベース、各種トークンなど。" />
    <CategoryCard to="/components" title="コンポーネント" discription="再利用前提のコンポーネントコレクション。ページ、UIを構築する場合はこれらを最優先を使うこと。" />
    <CategoryCard to="/layouts" title="レイアウトパターン" discription="よく利用されるページレイアウトパターン。" />
    <CategoryCard to="/other" title="その他" discription="コーディング用サンプル、ページサンプルなど。" /> -->

  </div>
</div>
  </div>
</template>

<script setup lang="ts">
import ZAlert from '../../src/components/Z/ZAlert.vue'
import ZButton from '../../src/components/Z/ZButton.vue'
import CategoryCard from '~/components/top/CategoryCard.vue'

</script>

<style>
.main-img {
  background-image: url('~/assets/img/undraw_experience_design_re_dmqq.svg');
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: 53% 360px;
}
</style>
