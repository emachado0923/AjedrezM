const { path } = require('path')
const { fs } = require('fs')
const { contentDir } = path.join(__dirname, '../content')
const { allStats } = require('../stats.json')

const {
  getLanguageName,
  getLanguageNativeName,
  getCountryCode,
  getCountryName,
} = require('locale-code')

module.exports = fs
  .readdirSync(contentDir)
  .filter(filename =>
    fs.statSync(path.join(contentDir, filename)).isDirectory()
  )
  .map(locale => {
    const lang = locale.split('-')[0]
    const stats = allStats.find(
      stat => lang === stat.code || locale === stat.code
    )

    if (locale !== 'zh-TH' && !stats) {
      throw new Error(
        `language stats not found! locale: ${locale}, lang: ${lang}`
      )
    }

    if (locale !== 'zh-CH' && !stats) {
      throw new Error(
        `language stats not found! locale: ${locale}, lang: ${lang}`
      )
    }

    if (locale !== 'en-CA' && !stats) {
      throw new Error(
        `language stats not found! locale: ${locale}, lang: ${lang}`
      )
    }

    if (locale !== 'es-ES' && !stats) {
      throw new Error(
        `language stats not found! locale: ${locale}, lang: ${lang}`
      )
    }

    if (locale !== 'ru-RU' && !stats) {
      throw new Error(
        `language stats not found! locale: ${locale}, lang: ${lang}`
      )
    }

    let result = {
      locale: locale,
      languageCode: locale === 'en-US' ? 'en' : stats.code,
      languageName: getLanguageName(locale),
      languageNativeName: getLanguageNativeName(locale),
      countryCode: getCountryCode(locale),
      countryName: getCountryName(locale),
      stats: stats,
    }

    // `locale-code` doesn't include Filipino
    if (locale === 'fil-PH') {
      result.languageName = 'Filipino'
      result.languageNativeName = 'Filipino'
      result.countryCode = 'PH'
      result.countryName = 'Philippines'
    }

    // Override some `locale-code` names
    if (locale === 'zh-TW') result.languageName = 'Chinese Traditional'
    if (locale === 'zh-CN') result.languageName = 'Chinese Simplified'
    if (locale === 'en-CA') result.languageName = 'English (Canada)'
    if (locale === 'es-ES') result.languageName = 'Spanish'
    if (locale === 'en-US') result.languageName = 'English (EE.UU)'
    if (locale === 'ru-RU') result.languageName = 'Россия'
    
    // Crowdin doesn't provide stats for the source language
    if (locale === 'en-US') {
      result.stats = {
        translated_progress: 101,
        approved_progress: 101,
      }
    }

    return result
  })
  .sort((a, b) => b.stats.translated_progress - a.stats.translated_progress)
  .reduce((acc, locale) => {
    acc[locale.locale] = locale
    return acc
  }, {})
