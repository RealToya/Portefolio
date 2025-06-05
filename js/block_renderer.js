import { GetTranslationFromKey } from './language_system.js';

export const AcademicStrings = { logs: [], i: 0 };

export function InitAcademicPath() {
    const container = document.querySelector('.aboutme_content');
    const logs = GetTranslationFromKey("academic_path_logs");

    AcademicStrings.logs = logs;
    AcademicStrings.i = 0;

    container.innerHTML = `
        <h1 data-translations="academic_path">${GetTranslationFromKey("academic_path")}</h1>
        <div class="timeline_container">
            <div class="timeline" id="output"></div>
        </div>
    `;

    const content = document.getElementById('output')
    logs.forEach((log, i) => {
        const each = document.createElement('div');
        each.classList.add('timeline_enter');

        const logcontainer = document.createElement('div');
        logcontainer.classList.add('log_text');
        logcontainer.classList.add('typestyle');
        /* logcontainer.setAttribute('data-translations', 'academic_path_logs'); */
        each.innerHTML = `<div class="dot"></div>`;
        each.appendChild(logcontainer);

        content.appendChild(each);

        setTimeout(() => {each.classList.add('visible'); typeindividualstrings(logcontainer, log);}, i * 800);
    });

}

function typeindividualstrings(element, text, speed = 50) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) { element.textContent += text.charAt(i); i++; } else { clearInterval(interval); } 
    }, speed);  /* Get every char of a element and displays it one by one */
}

export function InitSkills() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = `
        <h1 data-translations="skills">${GetTranslationFromKey('skills')}</h1>
    <div>
        <div class="skill_container">
            <div class="skill_category">
            <h2>Programming Related</h2>
            <ul>
                <li> C# / C++  / Java</li>
                <li>Unity, Unreal</li>
            </ul>
            </div>
            <div class="skill_category">
                    <h2>Art Related</h2>
                <ul>
                    <li>3D Artist</li>
                    <li>Blender</li>
                </ul>
            </div>
            <div class="skill_category">
                    <h2>Design Related</h2>
                <ul>
                    <li>#</li>
                    <li>#</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

export function InitProjects() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = 
    `
        <h1 data-translations="projects">${GetTranslationFromKey('projects')}</h1>
        <div class="projects_container">
            <div class="game_card">
                <div class="status development"><span>In Development</span></div>
                <img src="../assets/placeholder_banner.png" class="game_image">
                <div class="game_info">
                    <h2 class="game_title"></span>Huddle</h2>
                    <p class="game_genre">Third Person Arcade Horror</p>
                    <p class="game_role">My Roles: 3D Artist and 3D Enviroment Artist</p>
                </div>
                <div class="progress_section">
                    <div class="progress_bar" data-progress="#">
                        <div class="progress_fill"></div>
                    </div>
                </div>
            </div>
            <div class="game_card">
                <div class="status preproduction"><span>In Pre-Production</span></div>
                <img src="../assets/placeholder_banner.png" class="game_image">
                <div class="game_info">
                    <h2 class="game_title"></span>"Project Blue Glow"</h2>
                    <p class="game_genre">First Person Thriller Shooter</p>
                    <p class="game_role">My Roles: Sole Developer </p>
                </div>
                <div class="progress_section">
                    <div class="progress_bar" data-progress="#">
                        <div class="progress_fill"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function InitGoals() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = 
    `
        <h1 data-translations="goals">${GetTranslationFromKey('goals')}</h1>
        <div>
            <h2>Something is being worked on...</h2>
        </div>
    `;
}