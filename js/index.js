import { User } from "./model/User.js";
import { Repo } from "./model/Repo.js";

import * as userView from "./view/userView.js"
import * as repoView from "./view/repoView.js"

import {cleatUI, elements} from "./view/base.js"

const state = {};

const controlFavoriteRepositories = async (url) => {
    try {
        state.repositories = new Repo(url);

        await state.repositories.getRepositories();

        repoView.renderRepositories(state.repositories.repos);
    } catch (error) {
        console.log(error);
    }
};

const controlSearch = async (e) => {
    e.preventDefault();

    try {
        
        const searched = elements.input.value;
        
        state.user = new User(searched);

        await state.user.getUser();

        cleatUI();

        userView.renderUser(state.user);

        await controlFavoriteRepositories(state.user.repos_url);

        elements.input.value = "";
    } catch (error) {
        console.log(error);
    }
};

window.addEventListener("submit", controlSearch);
//window.addEventListener("load", controlSearch);