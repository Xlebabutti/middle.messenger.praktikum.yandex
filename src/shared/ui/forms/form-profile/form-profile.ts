import Block from '../../../utils/block';
import { Button } from '../../button';
import { ProfileAction } from '../../profile';

class FormProfile extends Block {
    init(): void {
        const onLoginBind = this.onLogin.bind(this);

        const ButtonOut = new Button({
            type: 'primary',
            text: 'Авторизоваться',
            onClick: onLoginBind,
        });
        const ActionСhangeData = new ProfileAction({
            profileActionsName: 'Изменить данные',
        });
        const ActionСhangePassword = new ProfileAction({
            profileActionsName: 'Изменить пароль',
        });
        const ActionOut = new ProfileAction({
            profileActionsName: 'Выйти',
        });

        this.children = {
            ...this.children,
            ButtonOut,
            ActionСhangeData,
            ActionСhangePassword,
            ActionOut,
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

    onLogin(e: Event) {
        e.preventDefault();
        const loginValue = this.props.login;
        const passwordValue = this.props.password;

        if (!loginValue || !passwordValue) {
            return;
        }

        console.log({
            loginValue,
            passwordValue,
        });
    }

    protected render(): string {
        return `
            <form action='#' class='form__{{formType}}'>
                <ul class='profile__body-info'>
                    
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
