import { SidebarConfig, SidebarGroup } from '@vue/theme/src/vitepress/config'

const rust: SidebarGroup[] = [
  {
    text: '开始',
    items: [
      { text: '介绍', link: '/guide/introduction' },
      {
        text: '快速开始',
        link: '/guide/quick-start'
      }
    ]
  }
]
const axum: SidebarGroup[] = [
  {
    text: '介绍',
    items: [
      { text: '简介', link: '/axum/index' }
    ]
  },
  {
    text: '基础',
    items: [
      { text: '快速开始', link: '/axum/basic/quick-start' },
      { text: '路由', link: '/axum/basic/router' },
      { text: '处理器', link: '/axum/basic/handler' },
      { text: '中间件', link: '/axum/basic/middleware' },
      { text: '模板', link: '/axum/basic/template' }
    ]
  }
]
const askama: SidebarGroup[] = [
  {
    text: '介绍',
    items: [
      { text: '简介', link: '/askama/index' }
    ]
  },
  {
    text: '基础',
    items: [
      { text: '快速开始', link: '/askama/quick-start' }
    ]
  }
]
 const sidebar: SidebarConfig = {
  '/rust/': rust,
  '/axum/': axum,
  '/askama/': askama,
}

export default sidebar
