<template>
  <select v-model="selectedLanguage" @change="changeLanguage">
    <option v-for="locale in $i18n.availableLocales" :key="locale" :value="locale">
      {{ $t(`languages.${locale}`) }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LanguageSelector',
  data() {
    return {
      selectedLanguage: this.$i18n.locale
    }
  },
  methods: {
    changeLanguage(event) {
      this.selectedLanguage = event.target.value;
      this.$i18n.locale = this.selectedLanguage;
      this.$emit('language-changed', this.selectedLanguage);
    }
  }
}
</script>
