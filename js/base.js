const BASE_PATH_DIRECTION = './'
const BASE_PATH_CSS = './css/'
const BASE_PATH_PAGES = './pages/'
const BASE_PATH_JS = './js/'
const LANGUAGES_FORMATTING = { PORTUGUESE: 'pt', ENGLISH: 'en', JAPANESE: 'jp', SPANISH: 'es'};

let TRANSLATIONS_JSON = {};

window.onload = async function () {await BootUp(); ChangeLanguage(LANGUAGES_FORMATTING.ENGLISH);}; // Startup Language

async function BootUp()
{
    const boot = document.querySelector('.boot_screen');
    const main = document.querySelector('.main_content');
    const header = document.querySelector('.header');

    await new Promise(res => setTimeout(res, 2500));
    boot.classList.add('boot_hidden');
    main.classList.remove('boot_hidden');

    await new Promise(res => setTimeout(res, 500));
    header.classList.remove('boot_hidden');
    header.classList.add('header_fall');

    document.querySelectorAll('.tab_selection').forEach((tab, index) => {setTimeout (() => {tab.classList.add('content_arrival'); }, 400 * index); });

}

/* Language Translation Functions */

async function ChangeLanguage(lang)
{
    const translationsrequest = await fetch(BASE_PATH_JS + 'translations.json'); // Fetches the Json by http request, loads the JSON file and stores it as an object with its properties. 
    TRANSLATIONS_JSON = await translationsrequest.json();
    LoadTranslation(lang)
}

function LoadTranslation(lang)
{
    document.title = TRANSLATIONS_JSON[lang].title
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-translations]').forEach(langdata => { // It fetches the key value of every object that has the data-translations and then translates it if the language as a property with the same name
        const selected = langdata.getAttribute('data-translations');
        if (TRANSLATIONS_JSON[lang][selected]) { 
            langdata.textContent = TRANSLATIONS_JSON[lang][selected]; 
        }
    });
}

function SwitchLanguage(lang)
{
    ChangeLanguage(lang)
}

/* Misc */

async function OpenHtml(Name) {
    window.location.href = `${BASE_PATH_PAGES}${Name}.html`;
    
    header.classList.remove('header_fall');
    await new Promise(res => setTimeout(res, 250));
    header.classList.add('header_top');
}