import { useState, useEffect } from 'react';

export class Language {
  static #_value =
    typeof window === 'undefined'
      ? ''
      : window.localStorage?.getItem('lang') ?? '';

  static get value() {
    if (this.#_value === '') {
      this.value = 'en';
      return 'en';
    }
    return this.#_value;
  }

  static set value(newValue: string) {
    if (typeof window !== 'undefined')
      window.localStorage.setItem('lang', newValue);
    this.#_value = newValue;
    setTimeout(() => {
      if (typeof window !== 'undefined')
        window.dispatchEvent(new Event('languagechange'));
    }, 100);
  }
}

export const useLanguage = () => {
  const [lang, setLang] = useState(() => Language.value);

  useEffect(() => {
    const languagechangeEventListener = () => {
      setLang(Language.value);
    };

    window.addEventListener('languagechange', languagechangeEventListener);
    return () =>
      window.removeEventListener('languagechange', languagechangeEventListener);
  }, []);

  return lang;
};
