---
page: true
title: Rust&Rust扩展 - 非官方不完全中文文档
---

<script setup>
import { ref } from 'vue';
import { NTabs, NTabPane, NButtonGroup, NButton } from 'naive-ui';
const tabs = ref([]);
fetch('/tabs.json').then(res => res.json()).then(data => {
  console.log(data);
  tabs.value = data;
})
</script>

- a
- b
- c
<n-tabs placement="left" type="card" class='container mx-auto'>
  <n-tab-pane
  class='border-1px rounded-r-5px border-l-0 my-1px border-solid  border-1px border-gray-100 !p-3px'
  v-for="(items, keys) in tabs" :key="keys"
  :name="keys"
  :tab="keys">
    <n-button-group v-for="(item, key) in items" :key="key">
      <n-button type="default" round disabled>
        {{ item['title'] }}
      </n-button>
      <n-button type="default">
        {{ item['link'] }}
      </n-button>
      <n-button type="default" round>
        很好
      </n-button>
    </n-button-group>
  </n-tab-pane>
</n-tabs>

- a
- b
- c
- d
