import { h, App } from 'vue'
import { VPTheme } from '@vue/theme'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
// @ts-ignore
import SidebarTop from './components/SidebarTop.vue'
// @ts-ignore
import NavBarTitle from './components/NavBarTitle.vue'
// @ts-ignore
import DocumentComment from './components/DocumentComment.vue'
// @ts-ignore
import SponsorsAside from './components/SponsorsAside.vue'
// @ts-ignore
import VueSchoolLink from './components/VueSchoolLink.vue'
// @ts-ignore
import Banner from './components/Banner.vue'
// import TextAd from './components/TextAd.vue'
import 'virtual:windi.css';
import './styles/index.css'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // banner: () => h(Banner),
      'navbar-title': () => h(NavBarTitle),
      'sidebar-top': () => h(SidebarTop),
      'content-bottom': () => h(DocumentComment),
      'aside-mid': () => h(SponsorsAside)
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    // app.component('VueSchoolLink', VueSchoolLink)
    // app.component('TextAd', TextAd)
  }
})
