import * as Pages from './src/pages';

// import { SelectorData } from './src/pages/modules/modules-data';

// import {
//     ProfileModalFileError,
//     ProfileModalFileErrorLoad,
//     ProfileModalFileLoaded,
//     ProfileModalFileToLoad,
//     ProfilePageChangesData,
//     ProfilePageChangesPassword,
//     ProfilePageData,
// } from './src/pages/profile/profile-data';
// import { setupPartials } from './src/shared/ui';
import { navigateOnClient } from './src/shared/utils/navigate-on-client';
import './style.scss';

// setupPartials();

const pages = {
    Login: [Pages.LoginPage],

    Profile: [Pages.ProfilePage],
    // ProfileChangesData: [Pages.Profile, ProfilePageChangesData],
    // ProfileChangesPassword: [Pages.Profile, ProfilePageChangesPassword],
    // ProfileModalFileToLoad: [Pages.ProfileModal, ProfileModalFileToLoad],
    // ProfileModalFileLoaded: [Pages.ProfileModal, ProfileModalFileLoaded],
    // ProfileModalFileErrorLoad: [Pages.ProfileModal, ProfileModalFileErrorLoad],
    // ProfileModalFileError: [Pages.ProfileModal, ProfileModalFileError],

    // Messenger: [Pages.Messenger],
    // MessengerToChoose: [Pages.MessengerToChoose],

    Error404: [Pages.ErrorPage404],
    Error505: [Pages.ErrorPage505],

    Home: [Pages.HomePage],

    // OtherModules: [Pages.Modules, SelectorData],
};

document.addEventListener('DOMContentLoaded', () =>
    navigateOnClient(pages, 'Profile'),
);

document.addEventListener('click', (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const page = event.target.getAttribute('page');
    if (page) {
        navigateOnClient(pages, page);

        event.preventDefault();
        event.stopImmediatePropagation();
    }
});
