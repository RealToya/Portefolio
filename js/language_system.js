import { BASE_PATH_JS, LANGUAGES_FORMATTING } from './constants.js';
import { InitAcademicPath } from './block_renderer.js';

let TRANSLATIONS_JSON = {};
let ActiveLang = LANGUAGES_FORMATTING.ENGLISH;

export function GetDefinedLang() {
    return ActiveLang;
}

export function GetTranslationFromKey(key) {
    return TRANSLATIONS_JSON[ActiveLang]?.[key]; //if the language exists then you can access the selected key.
}

export async function ChangeLanguage(lang) {
    ActiveLang = lang;
    const res = await fetch(BASE_PATH_JS + 'translations.json');
    TRANSLATIONS_JSON = await res.json();
    LoadTranslation(lang);

    if (document.querySelector('.terminal')) {
        InitAcademicPath();
        const { ContinueLogDisplay } = await import('./block_renderer.js');
        ContinueLogDisplay.logs = 0;
    }
}

function LoadTranslation(lang) {
    document.title = TRANSLATIONS_JSON[lang].title;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-translations]').forEach(el => {
        const key = el.getAttribute('data-translations');
        if (TRANSLATIONS_JSON[lang][key]) {
            el.textContent = TRANSLATIONS_JSON[lang][key];
        }
    });
}

export function SwitchLanguage(lang) {
    ChangeLanguage(lang);
}

window.SwitchLanguage = SwitchLanguage;