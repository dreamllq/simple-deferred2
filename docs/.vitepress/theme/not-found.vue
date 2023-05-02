<template>
  <div>
    404
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { withBase, useRouter } from 'vitepress'
const router = useRouter()
onMounted(() => {
  router.go(withBase('/'))
})
</script>

<style scoped>

</style>