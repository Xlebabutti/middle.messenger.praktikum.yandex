/* eslint-disable @typescript-eslint/no-explicit-any */
import { initStore } from './src/shared/utils/init-store';
import { initRouter } from './src/shared/utils/init-router';
import AuthApi from './src/features/auth';

async function app() {
    initStore();
    initRouter();

    document.addEventListener('DOMContentLoaded', () => {
        const root = document.querySelector('#app');
        if (root !== null) {
            return '';
        }
    });

    const authAPI = new AuthApi();

    try {
        const me = (await authAPI.me()) as any;
        if (window.location.pathname === '/sign-up') {
            router.go('/sign-up');
            return;
        }
        if (me.reason) {
            router.go('/');
        }
        window.store.set({ user: me });
    } catch (error) {
        router.go('/');
    }
}

export default app;
