<template>
  <NuxtLink
      :to="`/tag/${props.id}`"
  >{{props.name}}</NuxtLink>
</template>

<script setup lang="ts">
interface myProps{
  id:string,
  name:string
}
const props = defineProps<myProps>()
</script>

<style scoped>
a{
  margin-right: 5px;
}
</style>
