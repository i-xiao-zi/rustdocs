<template>
  <div class="text-18px my-5px">{{title}}</div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { theme } = useData()

const title = ref('title')

for (const sidebarKey in theme.value.sidebar) {
  if (document.location.pathname.indexOf(sidebarKey) > -1) {
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
</script>

<style scoped>

</style>
