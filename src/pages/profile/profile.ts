import { ProfileAction, ProfileImage, ProfileInfoItem } from '../../shared/ui';
import { FormProfile } from '../../shared/ui/forms/form-profile';
import { Sidebar } from '../../shared/ui/sidebar';
import Block from '../../shared/utils/block';

class ProfilePage extends Block {
    init(): void {
        const onChangeDataBind = this.onChangeData.bind(this);
        const onChangePasswordBind = this.onChangePassword.bind(this);

        const ProfileImg = new ProfileImage({
            profileImgSrc: '/not-avatar.svg',
            profileTitle: 'Иван',
        });

        const ProfileForm = new FormProfile({
            ActionChangeData: new ProfileAction({
                profileActionsName: 'Изменить данные',
                href: '#',
                onClick: onChangeDataBind,
            }),

            ActionChangePassword: new ProfileAction({
                profileActionsName: 'Изменить пароль',
                href: '#',
                onClick: onChangePasswordBind,
            }),

            ActionOut: new ProfileAction({
                profileActionsName: 'Выйти',
                href: '#',
            }),

            InfoEmail: new ProfileInfoItem({
                type: 'email',
                name: 'email',
                placeholder: 'Почта',
                label: 'Почта',
                value: 'pochta@yandex.ru',
                readonly: 'readonly',
            }),

            InfoLogin: new ProfileInfoItem({
                type: 'email',
                name: 'login',
                label: 'Логин',
                placeholder: 'Логин',
                value: 'ivanivanov',
                readonly: 'readonly',
            }),

            InfoFirstName: new ProfileInfoItem({
                type: 'text',
                name: 'first_name',
                label: 'Имя',
                placeholder: 'Имя',
                value: 'Иван',
                readonly: 'readonly',
            }),

            InfoSecondName: new ProfileInfoItem({
                type: 'text',
                name: 'second_name',
                label: 'Фамилия',
                placeholder: 'Фамилия',
                value: 'Иванов',
                readonly: 'readonly',
            }),

            InfoPhone: new ProfileInfoItem({
                type: 'phone',
                name: 'phone',
                label: 'Телефон',
                placeholder: 'Телефон',
                value: '+7 (909) 967 30 30',
                readonly: 'readonly',
            }),
            changePassword: true,
        });

        const ProfileSidebar = new Sidebar({
            sidebarImg: '/arrow.svg',
        });

        this.children = {
            ...this.children,
            ProfileImg,
            ProfileForm,
            ProfileSidebar,
        };
    }

    onChangeData() {
        console.log('asd');
        this.children.ProfileForm.setProps({ changePassword: true });
    }

    onChangePassword() {
        console.log('asd');
        this.children.ProfileForm.setProps({ changePassword: false });
    }

    render(): string {
        return `
            <div class='profile'>
                {{{ ProfileSidebar }}}
                {{{ ProfileImg }}}
                <div class='profile__body'>
                    {{{ ProfileForm }}}
                </div>
            </div>

        `;
    }
}

export { ProfilePage };
