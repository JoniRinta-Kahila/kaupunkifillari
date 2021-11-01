import { Translator, useLocalization } from 'localization-react';
import { ITranslation } from 'localization-react/dist/translator';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import translationsJson from '../localization/translations.json';

const CookieAlert: React.FC = () => {
  const { language } = useLocalization();
  const locales: ITranslation = translationsJson;
  const translator = new Translator(locales, 'cookieAlert', language);
  return (
    <CookieConsent
      buttonText={translator.getLocaleString('understand')}
      location='bottom'
      visible="byCookieValue"
    >
      {translator.getLocaleString('cookie_message')}
        <a href={`https://policies.google.com/technologies/cookies?hl=${translator.getLocaleString('cookie_link_locale')}`}>
          {translator.getLocaleString('cookie_message_after_link')}
        </a>
    </CookieConsent>
  )
}

export default CookieAlert;
