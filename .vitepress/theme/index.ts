import { h, App } from 'vue'
import { VPTheme } from '@vue/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'
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
import './styles/index.css';
import { install } from 'naive-ui';

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
    install(app)
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    // app.component('VueSchoolLink', VueSchoolLink)
    // app.component('TextAd', TextAd)
    googleAnalytics({
      id: 'G-0Q7HP3Z035', //跟踪ID，在analytics.google.com注册即可
    });
  }
})
