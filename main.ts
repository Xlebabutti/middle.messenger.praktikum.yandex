import * as Pages from './src/pages';
import { navigateOnClient } from './src/shared/utils/navigate-on-client.ts';
import './style.scss';

const pages = {
    Login: [Pages.LoginPage],
    Registration: [Pages.RegistrationPage],
    Profile: [Pages.ProfilePage],
    Messenger: [Pages.Messenger],
    Error404: [Pages.ErrorPage404],
    Error505: [Pages.ErrorPage505],
    Home: [Pages.HomePage],
};

document.addEventListener('DOMContentLoaded', () =>
    navigateOnClient(pages, 'Home'),
);

document.addEventListener('click', (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    const page = event.target.getAttribute('page');
    if (page) {
        navigateOnClient(pages, page);

        event.preventDefault();
        event.stopImmediatePropagation();
    }
});
