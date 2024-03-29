import type { Config as ThemeConfig } from '@vue/theme'

const nav: ThemeConfig['nav'] = [
  {
    text: '文档',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Rust 非官方不完全文档', link: '/rust/introduction' },
      { text: 'Axum 非官方不完全文档', link: '/axum/' },
      { text: 'Askama 非官方不完全文档', link: '/askama/' }
    ]
  },
  {
    text: '参考',
    items: [
      { text: 'Rust官方网站 (rust-lang.org)', link: 'https://www.rust-lang.org/' },
      { text: 'Rust官方文档 (docs.rs)', link: 'https://docs.rs/' },
      { text: 'Rust仓库 (crates.io)', link: 'https://crates.io/' },
      { text: 'Axum官方仓库 (github.com)', link: 'https://github.com/tokio-rs/axum/' },
      { text: 'Askama官方仓库 (github.com)', link: 'https://github.com/djc/askama' },
      { text: 'Askama官方文档 (docs.rs)', link: 'https://docs.rs/askama/' },
      { text: 'Askama官方文档 (english)', link: 'https://djc.github.io/askama/' }
    ]
  },
  {
    text: 'Playground',
    link: 'https://play.vuejs.org'
  },
  {
    text: 'Ecosystem',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: 'Resources',
        items: [
          { text: 'Partners', link: '/partners/' },
          { text: 'Themes', link: '/ecosystem/themes' },
          { text: 'UI Components', link: 'https://ui-libs.vercel.app/' },
          {
            text: 'Certification',
            link: 'https://certification.vuejs.org/?ref=vuejs-nav'
          },
          { text: 'Jobs', link: 'https://vuejobs.com/?ref=vuejs' },
          { text: 'T-Shirt Shop', link: 'https://vue.threadless.com/' }
        ]
      },
      {
        text: 'Official Libraries',
        items: [
          { text: 'Vue Router', link: 'https://router.vuejs.org/' },
          { text: 'Pinia', link: 'https://pinia.vuejs.org/' },
          { text: 'Tooling Guide', link: '/guide/scaling-up/tooling.html' }
        ]
      },
      {
        text: 'Video Courses',
        items: [
          {
            text: 'Vue Mastery',
            link: 'https://www.vuemastery.com/courses/'
          },
          {
            text: 'Vue School',
            link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'
          }
        ]
      },
      {
        text: 'Help',
        items: [
          {
            text: 'Discord Chat',
            link: 'https://discord.com/invite/HBherRA'
          },
          {
            text: 'GitHub Discussions',
            link: 'https://github.com/vuejs/core/discussions'
          },
          { text: 'DEV Community', link: 'https://dev.to/t/vue' }
        ]
      },
      {
        text: 'News',
        items: [
          { text: 'Blog', link: 'https://blog.vuejs.org/' },
          { text: 'Twitter', link: 'https://twitter.com/vuejs' },
          { text: 'Events', link: 'https://events.vuejs.org/' },
          { text: 'Newsletters', link: '/ecosystem/newsletters' }
        ]
      }
    ]
  },
  {
    text: 'About',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: 'Team', link: '/about/team' },
      { text: 'Releases', link: '/about/releases' },
      {
        text: 'Community Guide',
        link: '/about/community-guide'
      },
      { text: 'Code of Conduct', link: '/about/coc' },
      {
        text: 'The Documentary',
        link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
      }
    ]
  },
  {
    text: 'Sponsor',
    link: '/sponsor/'
  },
  {
    text: 'Partners',
    link: '/partners/',
    activeMatch: `^/partners/`
  },
  {
    text: '应用',
    link: '/application/',
  }
]

export default nav
