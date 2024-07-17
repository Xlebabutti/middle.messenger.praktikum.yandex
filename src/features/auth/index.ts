import { HTTPTransport } from '../../shared/utils/http-transport';
import {
    APIError,
    CreateUser,
    LoginRequestData,
    SignUpResponse,
    UserDTO,
} from './type';

const authApi = new HTTPTransport('/auth');

const delay = (showError: boolean) =>
    new Promise<void>((resolve, reject) => {
        if (showError) {
            setTimeout(() => reject(), 2000);
        } else {
            setTimeout(() => resolve(), 3000);
        }
    });

export default class AuthApi {
    async create(data: CreateUser): Promise<SignUpResponse> {
        return authApi.POST<SignUpResponse>('/signup', { data });
    }

    async login(data: LoginRequestData): Promise<void | APIError> {
        return await delay(data.login === 'httperror');
    }

    async me(): Promise<UserDTO | APIError> {
        return authApi.GET('/user');
    }

    async logout(): Promise<void | APIError> {
        return authApi.POST('/logout');
    }
}
