<template>
  <NuxtLink
      v-for="item in data.data"
      :key="item.id"
      :to="`/tag/${item.id}`"
  >{{item.name}}</NuxtLink>
</template>

<script>

</script>

<style scoped>

</style>
