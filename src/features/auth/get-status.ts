import Router from '../../shared/utils/router';
import Store from '../../shared/utils/store';
import { APIError } from './type';

export type Responce<T> = {
    status: number;
    data?: T;
    error?: APIError;
};

export function getStatus<T>(response: Responce<T>): Responce<T> {
    if (response.status === 401) {
        Store.set('auth', false);
        Router.go('/');
    }
    if (response.status >= 500) {
        Router.go('/error500');
    }
    return response;
}
