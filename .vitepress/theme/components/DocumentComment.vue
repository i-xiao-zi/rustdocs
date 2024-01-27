<template>
  <div id="document-comment-container" />
</template>
<script setup>
import { onMounted } from 'vue'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

onMounted(() => {
  if(typeof window !==undefined) {
    new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: 'i-xiao-zi', // GitHub repository 所有者
      repo: 'rustdocs', // GitHub repository
      clientID: '2a6aa400c043ae93e637', // 自己的clientID
      clientSecret: '40d75a0c40034d5b7fe3712d595bdcaf9c005564',// 自己的clientSecret
      admin: ['i-xiao-zi'], // GitHub repository 所有者
      // labels: ['document.comment'], // GitHub issue 的标签
      createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    }).render('document-comment-container')
  }
})
</script>

<style scoped>

</style>
