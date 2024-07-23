import { getUser } from '../../entities/user/queries';
import * as Pages from '../../pages';
import Router from './router';
import Store from './store';

Router.middleware.use(async (ctx, next) => {
    const state = Store.getState();
    if (state.auth === null) {
        await getUser();
    }

    if (!state.auth && ctx.pathname !== '/' && ctx.pathname !== '/sign-up') {
        ctx.redirect('/');
        return;
    }

    next();
});

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
