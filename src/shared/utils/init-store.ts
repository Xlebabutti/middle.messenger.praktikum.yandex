/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AppState } from '../../features/auth/type';

const initAppStore: AppState = {
    isLoading: false,
    loginError: null,
    user: null,
};

export function initStore() {
    //@ts-ignore
    window.store = new Store<AppState>(initAppStore);
}
