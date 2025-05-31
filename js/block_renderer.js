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
        <div><div></div></div>
    `;
}

export function InitProjects() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = `
        <h1 data-translations="projects">${GetTranslationFromKey("projects")}</h1>
        <div>
            <div>
            </div>
        </div>
    `;
}

export function InitGoals() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = `
        <h1 data-translations="goals">${GetTranslationFromKey("goals")}</h1>
        <div>
            <div></div
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