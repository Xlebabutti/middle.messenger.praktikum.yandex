import {
    Button,
    ModalWindow,
    ProfileAction,
    ProfileImage,
    ProfileInfoItem,
} from '../../shared/ui';
import { FormProfile } from '../../shared/ui/forms/form-profile';
import { Sidebar } from '../../shared/ui/sidebar';
import Block from '../../shared/utils/block';
import { Validator } from '../../shared/utils/validator';

class ProfilePage extends Block {
    init() {
        const onChangeDataBind = this.onChangeData.bind(this);
        const onChangePasswordBind = this.onChangePassword.bind(this);
        const onSaveNewPasswordBind = this.onSaveNewPassword.bind(this);
        const onChangeNewPasswordBind = this.onChangeNewPassword.bind(this);
        const onChangeOldPasswordBind = this.onChangeOldPassword.bind(this);
        const onChangeRepeatPasswordBind =
            this.onChangeRepeatPassword.bind(this);
        const onChangeAvatarBind = this.onChangeAvatar.bind(this);
        const ononFileSelectBind = this.onFileSelect.bind(this);

        const ProfileImg = new ProfileImage({
            profileImgSrc: '/not-avatar.svg',
            profileTitle: 'Иван',
            onClick: onChangeAvatarBind,
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
                class: 'profile__body-info-content',
                type: 'email',
                name: 'email',
                placeholder: 'Почта',
                label: 'Почта',
                value: 'pochta@yandex.ru',
                readonly: 'readonly',
            }),

            InfoLogin: new ProfileInfoItem({
                class: 'profile__body-info-content',
                type: 'email',
                name: 'login',
                label: 'Логин',
                placeholder: 'Логин',
                value: 'ivanivanov',
                readonly: 'readonly',
            }),

            InfoFirstName: new ProfileInfoItem({
                class: 'profile__body-info-content',
                type: 'text',
                name: 'first_name',
                label: 'Имя',
                placeholder: 'Имя',
                value: 'Иван',
                readonly: 'readonly',
            }),

            InfoSecondName: new ProfileInfoItem({
                class: 'profile__body-info-content',
                type: 'text',
                name: 'second_name',
                label: 'Фамилия',
                placeholder: 'Фамилия',
                value: 'Иванов',
                readonly: 'readonly',
            }),

            InfoPhone: new ProfileInfoItem({
                class: 'profile__body-info-content',
                type: 'phone',
                name: 'phone',
                label: 'Телефон',
                placeholder: 'Телефон',
                value: '+7 (909) 967 30 30',
                readonly: 'readonly',
            }),

            OldPassword: new ProfileInfoItem({
                class: 'profile__body-info-content',
                type: 'password',
                name: 'oldPassword',
                label: 'Старый пароль',
                placeholder: 'Старый пароль',
                onBlur: onChangeOldPasswordBind,
            }),

            NewPassword: new ProfileInfoItem({
                class: 'profile__body-info-content',
                type: 'password',
                name: 'newPassword',
                label: 'Новый пароль',
                placeholder: 'Новый пароль',
                onBlur: onChangeNewPasswordBind,
            }),

            RepeatNewPassword: new ProfileInfoItem({
                class: 'profile__body-info-content',
                type: 'password',
                name: 'repeatNewPassword',
                label: 'Повторите новый пароль',
                placeholder: 'Повторите новый пароль',
                onBlur: onChangeRepeatPasswordBind,
            }),

            ButtonChangesPassword: new Button({
                type: 'primary',
                text: 'Сохранить',
                onClick: onSaveNewPasswordBind,
            }),

            changePassword: true,
        });

        const ProfileSidebar = new Sidebar({
            sidebarImg: '/arrow.svg',
        });

        const Modal = new ModalWindow({
            modalTitle: 'Загрузите файл',
            InputLabel: 'Выбрать файл на компьютере',
            type: 'file',
            text: 'Поменять',
            name: 'avatar',
            modalOpen: false,
            onChange: ononFileSelectBind,
        });

        this.children = {
            ...this.children,
            ProfileImg,
            ProfileForm,
            ProfileSidebar,
            Modal,
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

    onChangeNewPassword(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validatePassword(inputValue);

        this.children.ProfileForm.children.NewPassword.setProps({
            errorText: validationResult.errorText,
            name: 'login',
        });

        this.setProps({ newPassword: inputValue });
    }

    onChangeOldPassword(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validatePassword(inputValue);

        this.children.ProfileForm.children.OldPassword.setProps({
            errorText: validationResult.errorText,
            name: 'login',
        });

        this.setProps({ oldPassword: inputValue });
    }

    onChangeRepeatPassword(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const newPassword = this.props.newPassword;

        const validatorResult = Validator.validatePasswordsMatch(
            inputValue,
            newPassword,
        );

        this.children.ProfileForm.children.RepeatNewPassword.setProps({
            errorText: validatorResult.errorText,
            name: 'password',
        });
        this.setProps({ save: validatorResult.save });
    }

    onSaveNewPassword(e: Event) {
        e.preventDefault();
        const save = this.props.save;

        if (save) {
            alert('done save');
            this.children.ProfileForm.setProps({ changePassword: true });
            return;
        }

        alert('error');
    }

    onChangeAvatar() {
        this.children.Modal.setProps({ modalOpen: true });
    }

    onFileSelect(e: Event) {
        const file = e.target.files[0];
        if (file) {
            console.log(file);
            this.children.Modal.setProps({
                chooseFile: true,
                modalFile: file.name,
            });
        }
    }

    render(): string {
        return `
            <div class='profile'>
                {{{ Modal }}}
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
