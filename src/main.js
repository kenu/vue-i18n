import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'

import en from './locales/en.json'
import ko from './locales/ko.json'
import zh from './locales/zh.json'

const savedLanguage = localStorage.getItem('language') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages: {
    en,
    ko,
    zh
  }
})

createApp(App).use(i18n).mount('#app')
