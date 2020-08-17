import Jed from 'jed';

const Localizations = new Map();

const jedDefault = new Jed({});
let jed = jedDefault;
let DEBUG = false;

const debugPrint = str => {
  return `✔ ${str} ✔`;
};

const sprintfDebug = (str, rest) => {
  let tstr = str;

  if (rest.length) {
    tstr = jed.sprintf(tstr, rest);
  }

  return DEBUG ? debugPrint(tstr) : tstr;
};

export default function t(str, ...rest) {
  return sprintfDebug(jed.gettext(str), rest);
}

export function tn(str, pluralStr, ...rest) {
  return sprintfDebug(jed.ngettext(str, pluralStr, rest[0] || 0), rest);
}

export function setLocale(localization) {
  // get language string
  let [locale] = (localization || '').split('-');

  if (Localizations.has(localization)) {
    locale = localization;
  }

  const translations = Localizations.get(locale);
  translations.debug = DEBUG;

  jed = new Jed(translations);
}

export function addLocale(json) {
  json.lang.forEach(code => {
    // set in Map
    Localizations.set(code.toLowerCase(), json);
  });
}

export function debug(state) {
  DEBUG = !!state;
}

addLocale(require('./locales/en-EN'));
