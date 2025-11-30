import DefaultTheme from 'vitepress/theme'
import { createPinia } from 'pinia'
import './style.css'
import './theme-enhanced.css'
import MarkdownEditor from '../components/MarkdownEditor.vue'
import NotFound from '../components/NotFound.vue'

export default {
  extends: DefaultTheme,
  NotFound,
  enhanceApp({ app }) {
    const pinia = createPinia()
    app.use(pinia)
    app.component('MarkdownEditor', MarkdownEditor)
  }
}
