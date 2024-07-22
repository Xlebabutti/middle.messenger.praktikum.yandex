import { APIError } from './type';

export type Responce<T> = {
    status: number;
    data?: T;
    error?: APIError;
};

export function getStatus<T>(response: Responce<T>): Responce<T> {
    if (response.status === 401) {
        window.store.set('auth', false);
        window.router.go('/');
    }
    if (response.status >= 500) {
        window.router.go('/error500');
    }
    return response;
}
