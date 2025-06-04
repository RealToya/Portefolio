import { BASE_PATH_COMPONENTS, LANGUAGES_FORMATTING, BASE_PATH } from './constants.js';
import { ChangeLanguage } from './language_system.js';
import { InitAcademicPath, InitSkills, InitProjects, InitGoals } from './block_renderer.js';

window.onload = async function () {
    const buttonpaths = 
    {
        "academic_path": InitAcademicPath,
        "skills": InitSkills,
        "projects": InitProjects,
        "goals": InitGoals
    };

    for (const [k, i] of Object.entries(buttonpaths)) {
        const element = document.querySelector(`[data-translations="${k}"]`);
        if (element) {
            element.addEventListener("click", i);
        }
    }

    await HTMLComponentLoading("#header_placement", BASE_PATH_COMPONENTS + 'header.html') ; //Loads header dynamically

    await new Promise(res => setTimeout(res, 50));
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        await BootUp();
    } else {
        const header = document.querySelector('.header');
        header.classList.remove('boot_hidden');
        setTimeout(() => { header.classList.add('header_fall'); }, 100);
    }

    await ChangeLanguage(LANGUAGES_FORMATTING.ENGLISH);};
    Filter3DModelOptions()

/* Misc */
async function BootUp()
{
    const boot = document.querySelector('.boot_screen');
    const main = document.querySelector('.main_content_boot');
    const header = document.querySelector('.header');

    await new Promise(res => setTimeout(res, 2000));
    boot.classList.add('boot_hidden');
    main.classList.remove('boot_hidden');

    await new Promise(res => setTimeout(res, 500));
    header.classList.remove('boot_hidden');
    header.classList.add('header_fall');

    document.querySelectorAll('.tab_selection').forEach((tab) => { setTimeout(() => { tab.classList.add('content_arrival'); }, 200);
});

}
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

function Filter3DModelOptions() {
    const buttons = document.querySelectorAll('.filter_button');
    const cards = document.querySelectorAll('.work_card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            buttons.forEach(obutton => obutton.classList.remove('actived'));
            button.classList.add('actived');

            const filter = button.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-model-category').toLowerCase();
                const isinthecorrectfilter = filter === 'all' || category.includes(filter);
                card.classList.toggle('non_interactable', !isinthecorrectfilter);
            });
        });
    });
}

window.OpenHtml = OpenHtml; //Exposes function