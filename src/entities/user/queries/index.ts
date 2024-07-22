import AuthApi from '../../../features/auth';
import { checkError } from '../../../features/auth/check-error';
import { CreateUser, LoginRequestData } from '../../../features/auth/type';

const authApi = new AuthApi();

export const login = async (data: LoginRequestData) => {
    window.store.set({ isLoading: true });
    try {
        const response = await authApi.login(data);
        const errorApi = checkError(response);

        if (errorApi) throw Error(response.reason);

        const me = await authApi.me();

        window.store.set({ user: me });
        window.store.set({ auth: true });
        window.store.set({ loginError: '' });
        window.router.go('/messenger');
    } catch (error) {
        const me = await authApi.me();
        if (!me.reason) {
            window.store.set({ user: me });
            window.router.go('/messenger');
        }
        window.store.set({ loginError: 'some error' });
    } finally {
        window.store.set({ isLoading: false });
    }
};

export const logout = async () => {
    try {
        window.store.set({ user: null });
        window.router.go('/sign-in');
        await authApi.logout();
        console.log('out');
    } catch (error) {
        console.log(error);
    }
};

export const registration = async (data: CreateUser) => {
    try {
        const response = await authApi.create(data);
        const errorApi = checkError(response);

        if (errorApi) throw Error(response.reason);

        window.router.go('/sign-in');
        const user = await authApi.me();
        window.store.set({ user: user });
    } catch (error) {
        console.error(error);
    }
};

export const getUser = async () => {
    const user = await authApi.me();
    if (!user) {
        throw Error('error getUser');
    }

    window.store.set({ user: user });
};
