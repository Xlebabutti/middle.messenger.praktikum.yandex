import { AppState } from './src/features/auth/type';
import * as Pages from './src/pages';
import Router from './src/shared/utils/router';
import { Store } from './src/shared/utils/store';
import './style.scss';

const router = new Router('#app');

declare global {
    interface Window {
        store: Store<AppState>;
    }

    type Nullable<T> = T | null;
}

window.router = router;

const inintStore = new Store({
    isLoading: false,
    loginError: null,
    user: null,
});

window.store = inintStore;

router
    .use('/', Pages.LoginPage)
    .use('/sign-up', Pages.RegistrationPage)
    .use('/messenger', Pages.Messenger)
    .use('/505', Pages.ErrorPage505)
    .use('settings', Pages.ProfilePage)
    .use('*', Pages.ErrorPage404)
    .start();
