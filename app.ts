import { initStore } from './src/shared/utils/init-store';
import { initRouter } from './src/shared/utils/init-router';

async function app() {
    initStore();
    initRouter();
}

export default app;
