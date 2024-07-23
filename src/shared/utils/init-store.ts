/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { AppState } from '../../features/auth/type';
import Store from './store';

// const initAppStore: AppState = {
//     isLoading: false,
//     loginError: null,
//     user: null,
// };

export function initStore() {
    Store.set('user', null);
}
