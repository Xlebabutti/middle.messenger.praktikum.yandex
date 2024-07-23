/* eslint-disable @typescript-eslint/no-explicit-any */
import constants from '../../../features/auth/constants';
import { getStatus } from '../../../features/get-status';
import { PasswordDTO, UserDTO } from '../../../features/type';
import UserApi from '../../../features/user';
import Store from '../../../shared/utils/store';

const userApi = new UserApi();

const checkAvatar = (user: UserDTO) => {
    user.avatar = user.avatar ? constants.GET_PHOTO + user.avatar : photoUser;
    return user;
};

export const updateUser = async (data: UserDTO) => {
    try {
        const response = getStatus(await userApi.updateUser(data));
        if (response.data) {
            const user = checkAvatar(response.data);
            Store.set('user', user);
        }
        if (response.error) {
            Store.set(
                'error-update',
                `Не удалось обновить профиль: ${response.error.reason}`,
            );
        }
    } catch (error) {
        Store.set('error-update', 'Не удалось обновить профиль');
    }
};

export const updatePassword = async (data: PasswordDTO) => {
    try {
        const response = getStatus(await userApi.updatePassword(data));
        if (response.error) {
            Store.set(
                'errorUpdateProfile',
                `Не удалось обновить пароль: ${response.error.reason}`,
            );
        }
    } catch (e) {
        Store.set('errorUpdateProfile', 'Не удалось обновить пароль');
    }
};

export const updateAvatar = async (avatar: any) => {
    try {
        const response = getStatus(await userApi.updateAvatar({ avatar }));
        if (response.data) {
            const user = checkAvatar(response.data);
            Store.set('user', user);
        }
        if (response.error) {
            Store.set(
                'errorUpdateProfile',
                `Не удалось обновить фото: ${response.error.reason}`,
            );
        }
    } catch (e) {
        Store.set('errorUpdateProfile', 'Не удалось обновить фото');
    }
};
