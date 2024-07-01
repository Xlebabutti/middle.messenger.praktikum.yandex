import Block from '../../../utils/block';
import { Validator } from '../../../utils/validator';
import { Button } from '../../button';
import { InputElement } from '../../input';

class FormProfile extends Block {
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
            <form action='#' class='form__{{formType}}'>
                <ul class='profile__body-info'>
                    
                </ul>

                <ul class='profile__footer-actions'>
                    {{#each profileActions}}
                        <li class='profile__footer-item'>
                            <a
                                class='profile__footer-name'
                                href='#'
                            >{{profileActionsName}}</a>
                        </li>
                    {{/each}}
                </ul>

                <ul class='profile__footer-buttons'>
                    {{#each profileButtons}}
                        {{> Button}}
                    {{/each}}
                </ul>
            </form>
        `;
    }
}

export { FormProfile };
