import AuthApi from '../../../features/auth';
import { checkError } from '../../../features/auth/check-error';
import { getStatus } from '../../../features/auth/get-status';
import { CreateUser, LoginRequestData } from '../../../features/auth/type';
import Router from '../../../shared/utils/router';
import Store from '../../../shared/utils/store';

const authApi = new AuthApi();

export const login = async (data: LoginRequestData) => {
    Store.set('isLoading', true);
    try {
        const response = await authApi.login(data);
        const errorApi = checkError(response);

        if (errorApi) throw Error(response.reason);

        const me = await authApi.me();

        Store.set('user', me);
        Store.set('auth', true);
        Store.set('loginError', '');
        Router.go('/messenger');
    } catch (error) {
        const me = await authApi.me();
        if (!me.reason) {
            Store.set('user', me);
            Router.go('/messenger');
        }
        Store.set('loginError', 'some error');
        Store.set('user', null);
    } finally {
        Store.set('isLoading', false);
    }
};

export const logout = async () => {
    try {
        const response = getStatus(await authApi.logout());
        if (!response.error) {
            Store.set('auth', false);
            Router.go('/');
        }
    } catch (error) {
        console.log(error);
    }
};

export const registration = async (data: CreateUser) => {
    try {
        const response = await authApi.create(data);
        const errorApi = checkError(response);

        if (errorApi) throw Error(response.reason);

        Router.go('/sign-in');
        const user = await authApi.me();
        Store.set('user', user);
    } catch (error) {
        console.error(error);
    }
};

export const getUser = async () => {
    try {
        const response = getStatus(await authApi.me());
        if (response.data) {
            const user = response.data;
            Store.set('auth', true);
            Store.set('user', user);
        }
        if (response.error) {
            Store.set('auth', false);
            Store.set('user', null);
        }
    } catch (e) {
        Store.set('auth', false);
        Store.set('user', null);
    }
};
