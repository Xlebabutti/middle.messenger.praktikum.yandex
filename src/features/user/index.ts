import { HTTPTransport } from '../../shared/utils/http-transport';
import objectToFormData from '../object-to-form-data';
import { PasswordDTO, UserDTO } from '../type';

export default class UserApi {
    private api = new HTTPTransport('/user');

    async updateUser(data: UserDTO) {
        return this.api.PUT<UserDTO>('/profile', { data: { ...data } });
    }

    async updateAvatar(data: { avatar: File }) {
        return this.api.PUT<UserDTO>('/profile/avatar', {
            data: objectToFormData(data),
        });
    }

    async updatePassword(data: PasswordDTO) {
        return this.api.PUT('/password', { data: { ...data } });
    }

    async searchUser(data: { login: string }) {
        return this.api.POST<Array<UserDTO>>('/search', { data: { ...data } });
    }
}
