/* eslint-disable @typescript-eslint/no-explicit-any */
import { initStore } from './src/shared/utils/init-store';
import { initRouter } from './src/shared/utils/init-router';
// import AuthApi from './src/features/auth';

async function app() {
    initStore();
    initRouter();

    document.addEventListener('DOMContentLoaded', async () => {
        const root = document.querySelector('#app');
        if (root !== null) {
            return 'loading';
        }
    });
}

export default app;
