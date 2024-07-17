import Auth from '../../../features/auth';
import { LoginRequestData } from '../../../features/auth/type';

const authApi = new Auth();

export const login = async (data: LoginRequestData) => {
    window.store.set({ isLoading: true });
    try {
        await authApi.login(data);
        window.router.go('/messenger');
    } catch (error) {
        window.store.set({ loginError: 'some error' });
    } finally {
        window.store.set({ isLoading: false });
    }
};
