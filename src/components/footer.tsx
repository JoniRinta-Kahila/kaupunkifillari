import React from 'react';
import { Link } from 'react-router-dom';
import { Translator, useLocalization } from 'localization-react';
import translationsJson from '../localization/translations.json';
import { ITranslation } from 'localization-react/dist/translator';

const Footer: React.FC = () => {
  const { language } = useLocalization();
  const locales: ITranslation = translationsJson;
  const translator = new Translator(locales, 'footer', language);

  return (
    <p>{translator.getLocaleString('install_to_mobile')} <Link to='/help'>{translator.getLocaleString('guide')}</Link></p>
  )
}

export default Footer;
