import { GetTranslationFromKey } from './language_system.js';

export const AcademicStrings = { logs: [], i: 0 };

export function InitAcademicPath() {
    const container = document.querySelector('.aboutme_content');
    const logs = GetTranslationFromKey("academic_path_logs");

    AcademicStrings.logs = logs;
    AcademicStrings.i = 0;

    container.innerHTML = `
        <h1 data-translations="academic_path_logs">${GetTranslationFromKey("academic_path")}</h1>
        <div class="terminal">
            <div class="terminal_output" id="logoutput"></div>
            <button class="terminal_button" onclick="ContinueLogDisplay()"> >Next</button>
        </div>
    `;

    ContinueLogDisplay();
}

export function InitSkills() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = `
        <h1 data-translations="skills">${GetTranslationFromKey("skills")}</h1>
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
                    <li>#</li>
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
        <h1 data-translations="projects">${GetTranslationFromKey("projects")}</h1>
        <div class="projects_container">
            <div class="game_card">
                <div class="status development"><span>In Development</span></div>
                <img src="../assets/placeholder_banner.png" class="game_image">
                <div class="game_info">
                    <h2 class="game_title"></span>Huddle</h2>
                    <p class="game_genre">Third Person Arcade Horror</p>
                    <p class="game_role">My Roles: 3D Artist and 3D Enviroment Artist</p>
                </div>
            </div>
            <div class="game_card">
                <div class="status preproduction"><span>In Pre-Production</span></div>
                <img src="../assets/placeholder_banner.png" class="game_image">
                <div class="game_info">
                    <h2 class="game_title"></span>Project Blue Glow</h2>
                    <p class="game_genre">First Person Thriller Shooter</p>
                    <p class="game_role">My Roles: Sole Developer </p>
                </div>
            </div>
        </div>
    `;
}

export function InitGoals() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = 
    `
        <h1 data-translations="goals">${GetTranslationFromKey("goals")}</h1>
        <div>
            <h2>Something is being worked on...</h2>
        </div>
    `;
}

export function ContinueLogDisplay() {
    const output = document.getElementById('logoutput');
    const { logs, i } = AcademicStrings;

    if (i < logs.length) {
        const textline = document.createElement('div');
        textline.textContent = logs[i];
        output.appendChild(textline);
        output.scrollTop = output.scrollHeight;
        AcademicStrings.i++;
    }
}

window.ContinueLogDisplay = ContinueLogDisplay;