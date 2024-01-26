import { h, App } from 'vue'
import { VPTheme } from '@vue/theme'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import NavBarTitle from './components/NavBarTitle.vue'
import SponsorsAside from './components/SponsorsAside.vue'
import VueSchoolLink from './components/VueSchoolLink.vue'
import Banner from './components/Banner.vue'
// import TextAd from './components/TextAd.vue'
import 'virtual:windi.css';
import './styles/index.css'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      banner: () => h(Banner),
      'navbar-title': () => h(NavBarTitle),
      'sidebar-top': () => '文档',
      'aside-mid': () => h(SponsorsAside)
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.component('VueSchoolLink', VueSchoolLink)
    // app.component('TextAd', TextAd)
  }
})
