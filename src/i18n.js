import { createI18n } from 'vue-i18n';
import en from './locales/en';
import fr from './locales/bn';

const i18n = createI18n({
  legacy: false, // Use the Composition API
  locale: 'en', // Set the default locale
  messages: {
    en,
    fr,
  },
});

export default i18n;