<template>
  <div>
    <h1>{{ $t('settings.title') }}</h1>
    <div>
      <p>{{ $t('settings.language') }}: </p>
      <LanguageSelector @language-changed="onLanguageChanged" />
    </div>
    <button @click="saveSettings">{{ $t('settings.save') }}</button>
  </div>
</template>

<script>
import LanguageSelector from '../components/LanguageSelector.vue'

export default {
  name: 'SettingsPage',
  components: {
    LanguageSelector
  },
  data() {
    return {
      selectedLanguage: this.$i18n.locale
    }
  },
  methods: {
    onLanguageChanged(lang) {
      this.selectedLanguage = lang;
    },
    saveSettings() {
      localStorage.setItem('language', this.selectedLanguage);
      window.location.reload();
    }
  }
}
</script>
