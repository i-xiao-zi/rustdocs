<template>
  <div class="text-18px my-5px">{{title}}</div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress'
import { ref, onMounted } from 'vue'

const { theme, page } = useData()

const title = ref('title')
onMounted(() => {
  for (const sidebarKey in theme.value.sidebar) {
    if (`/${page.value.relativePath}`.indexOf(sidebarKey) > -1) {
      for (const navValue of theme.value.nav) {
        if (Object.keys(navValue).indexOf('link') > -1) {
          if (navValue.link.indexOf(sidebarKey) > -1) {
            title.value = navValue
          }
        } else if (Object.keys(navValue).indexOf('activeMatch') > -1) {
          for (const item of navValue.items) {
            if (Object.keys(item).indexOf('link') > -1 && item.link.indexOf(sidebarKey) > -1) {
              title.value = item.text
            }
          }
        }
      }
    }
  }
})
</script>

<style scoped>

</style>
