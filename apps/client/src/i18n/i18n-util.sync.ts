// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import en_US from './en-US'
import pt_BR from './pt-BR'

import en_US_SLASH from './en-US/SLASH'
import pt_BR_SLASH from './pt-BR/SLASH'

const localeTranslations = {
	'en-US': {
		...en_US,
		SLASH: en_US_SLASH
	},
	'pt-BR': {
		...pt_BR,
		SLASH: pt_BR_SLASH
	},
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
