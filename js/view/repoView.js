import { elements } from "./base.js";

export const renderRepositories = (repositories) => {
    let markup = "";

    repositories.forEach(({html_url, name, description}) => {
        markup += `
            <a href="${html_url}" class="repo-url" target="_blank">
                ${name}
            </a>
            <p class="repo-desc"> 
                ${description} 
            </p>
        `;
    });

    elements.repos.innerHTML = markup;
};