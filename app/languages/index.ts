import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
const LOCALE_PERSISTENCE_KEY = 'language';

const languageDetector: LanguageDetectorAsyncModule = {
    type: 'languageDetector',
    async: true,
    detect: async (language: (key: string) => void) => {
        const persistedLocale: string | null = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
        if (!persistedLocale) {
            // Find best available language from the resource ones

            // Return detected locale or default language
            return language('en');
        }
        language(persistedLocale);
    },
    init: () => {},
    cacheUserLanguage: (locale: string) => {
        AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
    },
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        // lng: "en",
        resources: {
            en: {
                translation: en,
            },
            fr: {
                translation: fr,
            },
        },
    });
export default i18next;
