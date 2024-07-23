import Store from './store';

export function initStore() {
    Store.set('user', null);
    Store.set('auth', null);
}
