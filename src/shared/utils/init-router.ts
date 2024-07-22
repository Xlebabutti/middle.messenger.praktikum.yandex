/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as Pages from '../../pages';
import Router from './router';

const rootQuery = '#app';
const router = new Router(rootQuery);

router
    .use('/', Pages.LoginPage)
    .use('/sign-in', Pages.LoginPage)
    .use('/sign-up', Pages.RegistrationPage)
    .use('/messenger', Pages.Messenger)
    .use('/505', Pages.ErrorPage505)
    .use('/settings', Pages.ProfilePage)
    .use('*', Pages.ErrorPage404);

function initRouter() {
    //@ts-ignore
    window.router = router;
    router.start();
}

export { initRouter, router };
