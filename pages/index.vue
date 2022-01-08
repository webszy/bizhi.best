<template>
  <ClientOnly>
    <var-skeleton fullscreen :loading="loading" />

  </ClientOnly>
  <div class="ssr"></div>
</template>

<script setup lang="ts">

const getRandom: (number) => number = (len:number) => Math.round(Math.random() * (len-1))
const res = await useLazyAsyncData('allTag',()=>$fetch('/api/tags'))
const allTags:ResponseListType = Object.values(res?.data.value?.data || {})
let id =ref('')
if(allTags?.length){
    const num:number= getRandom(allTags.length)
    id.value = allTags[num].id
}

</script>

<style scoped>

</style>
