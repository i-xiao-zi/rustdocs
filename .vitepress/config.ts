import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import sidebar from './config.sidebar'
import nav from './config.nav'
import vite from './config.vite'
// import { textAdPlugin } from './textAdMdPlugin'


// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  vite,
  lang: 'en-US',
  title: 'Rust非官方不完全网站',
  description: 'Rust&Rust扩展 - 非官方不完全中文文档',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  outDir: 'dist',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'keywords', content: 'Rust,Axum,中文文档' }],
    ['meta', { property: 'og:url', content: 'https://vuejs.org/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Vue.js' }],
    ['meta', { property: 'og:description', content: 'Rust&Rust扩展 - 非官方不完全中文文档' }],
    ['meta', { property: 'og:image', content: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg' }],
    ['script', {}, fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    // localeLinks: [
    //   {
    //     link: 'https://cn.vuejs.org',
    //     text: '简体中文',
    //     repo: 'https://github.com/vuejs-translations/docs-zh-cn'
    //   },
    //   {
    //     link: '/translations/',
    //     text: 'Help Us Translate!',
    //     isTranslationsDesc: true
    //   }
    // ],

    // algolia: {
    //   indexName: 'vuejs',
    //   appId: 'ML0LEBN7FQ',
    //   apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
    //   searchParameters: {
    //     facetFilters: ['version:v3']
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    editLink: {
      repo: 'vuejs/docs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} ixiaozi.cn`
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },
})

export {sidebar};
