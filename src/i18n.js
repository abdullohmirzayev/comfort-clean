import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import languageDetector from 'i18next-browser-languagedetector'

import uzLang from '../public/lang/uz.json'
import ruLang from '../public/lang/ru.json'
import enLang from '../public/lang/en.json'

const lang = localStorage.getItem('i18nextLng') || 'uz'

i18n
	.use(Backend)

	.use(languageDetector)

	.use(initReactI18next)

	.init({
		fallbackLng: 'en',
		lng: lang,
		debug: true,

		resources: {
			uz: { translation: uzLang },
			ru: { translation: ruLang },
			en: { translation: enLang },
		},
	})

export default i18n
