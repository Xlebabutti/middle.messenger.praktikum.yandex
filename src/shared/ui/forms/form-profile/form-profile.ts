import Block from '../../../utils/block';
import { ProfileAction, ProfileInfoItem } from '../../profile';

class FormProfile extends Block {
    init(): void {
        // const onLoginBind = this.onLogin.bind(this);
        const ActionСhangeData = new ProfileAction({
            profileActionsName: 'Изменить данные',
        });
        const ActionСhangePassword = new ProfileAction({
            profileActionsName: 'Изменить пароль',
        });
        const ActionOut = new ProfileAction({
            profileActionsName: 'Выйти',
        });

        const InfoEmail = new ProfileInfoItem({
            type: 'email',
            name: 'email',
            placeholder: 'Почта',
            label: 'Почта',
            value: 'pochta@yandex.ru',
            readonly: 'readonly',
        });

        const InfoLogin = new ProfileInfoItem({
            type: 'email',
            name: 'login',
            label: 'Логин',
            placeholder: 'Логин',
            value: 'ivanivanov',
            readonly: 'readonly',
        });

        const InfoFirstName = new ProfileInfoItem({
            type: 'text',
            name: 'first_name',
            label: 'Имя',
            placeholder: 'Имя',
            value: 'Иван',
            readonly: 'readonly',
        });

        const InfoSecondName = new ProfileInfoItem({
            type: 'text',
            name: 'second_name',
            label: 'Фамилия',
            placeholder: 'Фамилия',
            value: 'Иванов',
            readonly: 'readonly',
        });

        const InfoPhone = new ProfileInfoItem({
            type: 'phone',
            name: 'phone',
            label: 'Телефон',
            placeholder: 'Телефон',
            value: '+7 (909) 967 30 30',
            readonly: 'readonly',
        });

        this.children = {
            ...this.children,
            ActionСhangeData,
            ActionСhangePassword,
            ActionOut,
            InfoEmail,
            InfoLogin,
            InfoFirstName,
            InfoSecondName,
            InfoPhone,
        };
    }

    // onChangeLogin(e: Event) {
    //     const inputValue = (e.target as HTMLInputElement).value;
    //     const validationResult = Validator.validateLogin(inputValue);

    //     this.children.InputLogin.setProps({
    //         errorText: validationResult.errorText,
    //         name: 'login',
    //     });

    //     this.setProps({ login: inputValue });
    // }

    // onChangePassword(e: Event) {
    //     const inputValue = (e.target as HTMLInputElement).value;
    //     const validationResult = Validator.validatePassword(inputValue);

    //     this.children.InputPassword.setProps({
    //         errorText: validationResult.errorText,
    //         name: 'password',
    //     });

    //     this.setProps({ password: inputValue });
    // }

    // onLogin(e: Event) {
    //     e.preventDefault();
    //     const loginValue = this.props.login;
    //     const passwordValue = this.props.password;

    //     if (!loginValue || !passwordValue) {
    //         return;
    //     }

    //     console.log({
    //         loginValue,
    //         passwordValue,
    //     });
    // }

    protected render(): string {
        return `
            <form action='#' class='form__{{formType}}'>
                <ul class='profile__body-info'>
                    {{{ InfoEmail }}}
                    {{{ InfoLogin }}}
                    {{{ InfoFirstName }}}
                    {{{ InfoSecondName }}}
                    {{{ InfoPhone }}}
                </ul>
                <ul class='profile__footer-actions'>
                    {{{ ActionСhangeData }}}
                    {{{ ActionСhangePassword }}}
                    {{{ ActionOut }}}
                </ul>
            </form>
        `;
    }
}

export { FormProfile };
