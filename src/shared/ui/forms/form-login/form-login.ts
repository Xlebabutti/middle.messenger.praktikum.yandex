import Block from '../../../utils/block';
import { Validator } from '../../../utils/validator';
import { Button } from '../../button';
import { InputElement } from '../../input';

class FormLogin extends Block {
    init(): void {
        const onLoginBind = this.onLogin.bind(this);
        const onChangeLoginBind = this.onChangeLogin.bind(this);
        const onChangePasswordBind = this.onChangePassword.bind(this);

        const InputLogin = new InputElement({
            type: 'login',
            name: 'login',
            placeholder: 'login',
            label: 'test login',
            onBlur: onChangeLoginBind,
        });
        const InputPassword = new InputElement({
            type: 'password',
            name: 'password',
            placeholder: 'password',
            label: 'test password',
            onBlur: onChangePasswordBind,
        });
        const ButtonLogin = new Button({
            type: 'primary',
            text: 'Авторизоваться',
            onClick: onLoginBind,
        });

        this.children = {
            ...this.children,
            InputLogin,
            InputPassword,
            ButtonLogin,
        };
    }

    onChangeLogin(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validateLogin(inputValue);

        this.children.InputLogin.setProps({
            errorText: validationResult.errorText,
            name: 'login',
        });

        this.setProps({ login: inputValue });
    }

    onChangePassword(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validatePassword(inputValue);

        this.children.InputPassword.setProps({
            errorText: validationResult.errorText,
            name: 'password',
        });

        this.setProps({ password: inputValue });
    }

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
        <div>
            <form action='#' class='form__{{formType}}'>
                <div class='form__header'>
                    <h1 class='form__header-title'>{{formHeaderTitle}}</h1>
                </div>

                <div class='form__body'>
                    {{{ InputLogin }}}
                    {{{ InputPassword }}}
                    <div class='form__body-buttons'>
                        {{{ ButtonLogin }}}
                    </div>
                </div>

                <div class='form__footer'>
                    <span class='form__footer-title'>{{formFooterTitle}}</span><a
                        href=''
                        class='form__footer-link'
                    >{{formFooterLink}}</a>
                </div>
            </form>
            </div>
        `;
    }
}

export { FormLogin };
