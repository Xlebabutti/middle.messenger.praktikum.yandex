import { HTTPTransport } from '../../shared/utils/http-transport';
import { CreateUser, LoginRequestData, SignUpResponse, UserDTO } from './type';

export default class AuthApi {
    private authApi = new HTTPTransport('/auth');

    async create(data: CreateUser) {
        return this.authApi.POST<SignUpResponse>('/signup', { data });
    }

    async login(data: LoginRequestData) {
        return this.authApi.POST('/signin', { data });
    }

    async me() {
        return this.authApi.GET<UserDTO>('/user');
    }

    async logout() {
        return this.authApi.POST('/logout');
    }
}
