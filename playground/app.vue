<template>
  <div class="flex flex-col flex-1 p-60">
    <ZAlert color="danger" class="mb-2">
      <ZIcon name="icon-attention" class="mr-1" />
      some text
    </ZAlert>
    <ZAlert color="primary" class="mb-2">
      <ZIcon name="icon-attention" class="mr-1" />
      some text
    </ZAlert>
    <div class="mb-4">
      <ZFormLabel required>hoho</ZFormLabel>
      <ZLink to="/">link</ZLink>
    </div>
    <div class="mb-4">
      <ZButton class="mr-1" color="white">white</ZButton>
      <ZButton class="mr-1" color="gray">gray</ZButton>
      <ZButton class="mr-1" color="primary">primary</ZButton>
      <ZButton class="mr-1" color="danger">danger</ZButton>
      <ZButton class="mr-1" color="red">red</ZButton>
      <ZButton class="mr-1" color="blue" to="/">blue</ZButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const showModal = ref(false)
const paginationValue = ref(2)
const total = ref(234)
const pageCount = ref(10)

const dummyArray = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
]
const options = [
  {
    label: 'Documentation',
    value: 'DocumentationValue',
  },
  {
    label: 'Status',
    value: 'StatusValue',
  },
  {
    label: 'Hoge',
    value: 'HogeValue',
  },
  {
    label: 'Some',
    value: 'SomeValue',
  },
  {
    label: 'Disabled',
    value: 'DisabledValue',
    disabled: true,
  },
]

const onClick = (value: any) => {
  console.log('onClick', value)
}
</script>

<style>
@import '../src/runtime/static/fontello/css/fontello.css';
@import '../src/runtime/static/css/fontello-over-write.css';
@import '../src/runtime/static/css/z-table.css';

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

.hoge-p {
  background-color: rgb(0 124 114);
}
</style>
