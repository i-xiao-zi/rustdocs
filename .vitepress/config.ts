import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme, UserConfig } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import sidebar from './config.sidebar'
import nav from './config.nav'
import vite from './config.vite'
// import { textAdPlugin } from './textAdMdPlugin'

const head: UserConfig['head'] = [
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
]

const i18n: ThemeConfig['i18n'] = {}
const algolia: ThemeConfig['algolia'] = undefined
// @ts-ignore
const localeLinks: ThemeConfig['localeLinks'] = false
const carbonAds: ThemeConfig['carbonAds'] = undefined
const socialLinks: ThemeConfig['socialLinks'] = []
const editLink: ThemeConfig['editLink'] = undefined
const footer: ThemeConfig['footer'] = {
  license: {
    text: 'MIT License',
    link: 'https://opensource.org/licenses/MIT'
  },
  copyright: `Copyright © 2014-${new Date().getFullYear()} ixiaozi.cn`
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  vite,
  head,
  lang: 'en-US',
  title: 'Rust非官方不完全网站',
  description: 'Rust&Rust扩展 - 非官方不完全中文文档',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  outDir: 'dist',

  themeConfig: {
    nav,
    sidebar,
    i18n,
    localeLinks,
    algolia,
    carbonAds,
    socialLinks,
    editLink,
    footer,
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
