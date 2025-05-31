export const BASE_PATH = window.location.pathname.includes('/pages/') ? '../' : './'; //Verifies if script is being called from inside the pages directory
export const BASE_PATH_CSS = BASE_PATH + 'css/'
export const BASE_PATH_JS = BASE_PATH + 'js/'
export const BASE_PATH_COMPONENTS = BASE_PATH + 'components/';

export const LANGUAGES_FORMATTING = 
{ PORTUGUESE: 'pt', 
    ENGLISH: 'en', 
    JAPANESE: 'jp', 
    SPANISH: 'es'
};