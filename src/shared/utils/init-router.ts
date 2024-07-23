import * as Pages from '../../pages';
import Router from './router';

Router.use('/', Pages.LoginPage)
    .use('/sign-in', Pages.LoginPage)
    .use('/sign-up', Pages.RegistrationPage)
    .use('/messenger', Pages.Messenger)
    .use('/505', Pages.ErrorPage505)
    .use('/settings', Pages.ProfilePage)
    .use('*', Pages.ErrorPage404);

function initRouter() {
    Router.start();
}

export { initRouter };
