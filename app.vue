<template>
  <div class="w-full h-full">
    <var-app-bar>
      <template #left>
        <NuxtLink to="/">最佳壁纸 || {{ title }}</NuxtLink>
      </template>
      <template #right>
        <var-button
            round
            text
            color="transparent"
            text-color="#ffffff"
            @click="offsetY = true"
        >
          <var-icon name="menu" :size="24" />
        </var-button>
      </template>
    </var-app-bar>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>
<script setup lang="ts">
const title = computed(()=>{
  return 'bizhi.best'
})
useTagList()
</script>
<style>
#__nuxt,html,body{
  width:100%;
  height:100%;
}
.ssr{
  display:none;
}
</style>
