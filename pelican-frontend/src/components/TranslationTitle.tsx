import React from 'react'
import { useTranslation } from 'react-i18next'

// THIS IS A TEST COMPONENT TO TEST HOW TRANSLATION IS WORKING IN THE APPLICATION!
// WILL BE DELETED LATER WHEN TRANSLATIONS ARE FINISHED

const TranslationTitle = () => {

  const {t, i18n} = useTranslation('common');

  return (
    <div>
      <h1>
        {t('welcome.title')}
      </h1>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('no')}>Norsk</button>
    </div>
  )
}

export default TranslationTitle