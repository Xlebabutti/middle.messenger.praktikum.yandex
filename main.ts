import './style.scss';
import Router from './src/shared/utils/router';
import { Store } from './src/shared/utils/store';
import * as Pages from './src/pages';

const router = new Router('#app');
window.router = router;

window.store = new Store({
    isLoading: false,
    loginError: null,
    user: null,
});

router
    .use('/', Pages.LoginPage)
    .use('/registration', Pages.RegistrationPage)
    .use('/messenger', Pages.Messenger)
    .use('/505', Pages.ErrorPage505)
    .use('settings', Pages.ProfilePage)
    .use('*', Pages.ErrorPage404)
    .start();
