import { elements } from "./base.js";

export const renderUser = ({
    avatar,
    html_url,
    public_repos,
    followers,
    following,
}) => {
    const markup = `
        <div class="profile-reader">
            <img src="${avatar}" alt="Avatar">
            <a href="${html_url}" target="_blank>Visitar perfil</a>
        </div>
        <ul class="profile-list">
            <li>Repositórios: ${public_repos}</li>
            <li>Seguidores: ${followers}</li>
            <li>Seguindo: ${following}</li>
        </ul>
    `;

    elements.profile.insertAdjacentHTML("afterbegin", markup);
};