const BASE_PATH = window.location.pathname.includes('/pages/') ? '../' : './'; //Verifies if component is being called from inside the pages directory
const BASE_PATH_CSS = BASE_PATH + 'css/'
const BASE_PATH_JS = BASE_PATH + 'js/'
const BASE_PATH_COMPONENTS = BASE_PATH + 'components/';
const LANGUAGES_FORMATTING = { PORTUGUESE: 'pt', ENGLISH: 'en', JAPANESE: 'jp', SPANISH: 'es'};

let TRANSLATIONS_JSON = {};

window.onload = async function () {
    await HTMLComponentLoading("#header_placement", BASE_PATH_COMPONENTS + 'header.html') ; //Loads header dynamically~

    await new Promise(res => setTimeout(res, 50));
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        await BootUp();
    } else {
        const header = document.querySelector('.header');
        header.classList.remove('boot_hidden');
        setTimeout(() => { header.classList.add('header_fall'); }, 100);
    }

    ChangeLanguage(LANGUAGES_FORMATTING.ENGLISH);};

    async function BootUp()
    {
        const boot = document.querySelector('.boot_screen');
        const main = document.querySelector('.main_content');
        const header = document.querySelector('.header');

        await new Promise(res => setTimeout(res, 2000));
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
    const header = document.querySelector('.header');
    header.classList.remove('header_fall');
    await new Promise(res => setTimeout(res, 250));
    header.classList.add('header_top');
    await new Promise(res => setTimeout(res, 1000));
    window.location.href = `${BASE_PATH}pages/${Name}.html`;
    
}

async function HTMLComponentLoading(component, path) {
    const response = await fetch(path);
    const html = await response.text();
    document.querySelector(component).innerHTML = html;
}

window.OpenHtml = OpenHtml; //Exposes function
window.SwitchLanguage = SwitchLanguage; //Exposes function