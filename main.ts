/* eslint-disable @typescript-eslint/no-explicit-any */
import app from './app';
import { AppState } from './src/features/auth/type';
import Router from './src/shared/utils/router';
import { Store } from './src/shared/utils/store';
import './style.scss';

app();

declare global {
    interface Window {
        router: Router;
        store: Store<AppState>;
    }
}
