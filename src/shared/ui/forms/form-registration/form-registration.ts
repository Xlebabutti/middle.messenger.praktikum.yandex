/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { Block } from '../../../utils/block';
import { Validator } from '../../../utils/validator';
import { Button } from '../../button';
import { InputElement } from '../../input';

class FormRegistration extends Block {
    init(): void {
        const onRegistration = this.onRegistration.bind(this);
        const onChangeEmailBind = this.onChangeEmail.bind(this);
        const onChangeLoginBind = this.onChangeLogin.bind(this);
        const onChangeFirstNameBind = this.onChangeFirstName.bind(this);
        const onChangeSecondNameBind = this.onChangeSecondName.bind(this);
        const onChangePhoneBind = this.onChangePhone.bind(this);
        const onChangePasswordBind = this.onChangePassword.bind(this);
        const onChangeRepeatPasswordBind =
            this.onChangeRepeatPassword.bind(this);

        const InputEmail = new InputElement({
            type: 'email',
            name: 'email',
            label: 'Почта',
            divInputClass: 'input',
            placeholder: 'Почта',
            onBlur: onChangeEmailBind,
        });

        const InputLogin = new InputElement({
            type: 'login',
            name: 'login',
            divInputClass: 'input',
            placeholder: 'login',
            label: 'test login',
            onBlur: onChangeLoginBind,
        });

        const InputFirstName = new InputElement({
            type: 'first_name',
            name: 'first_name',
            label: 'Имя',
            divInputClass: 'input',
            placeholder: 'Имя',
            onBlur: onChangeFirstNameBind,
        });

        const InputSecondName = new InputElement({
            type: 'second_name',
            name: 'second_name',
            label: 'Фамилия',
            divInputClass: 'input',
            placeholder: 'Фамилия',
            onBlur: onChangeSecondNameBind,
        });

        const InputPhone = new InputElement({
            type: 'phone',
            name: 'phone',
            label: 'Телефон',
            divInputClass: 'input',
            placeholder: 'Телефон',
            onBlur: onChangePhoneBind,
        });

        const InputPassword = new InputElement({
            type: 'password',
            name: 'password',
            divInputClass: 'input',
            placeholder: 'password',
            label: 'test password',
            onBlur: onChangePasswordBind,
        });

        const InputRepeatPassword = new InputElement({
            type: 'password',
            name: 'newpassword',
            label: 'Пароль (ещё раз)',
            divInputClass: 'input',
            placeholder: 'Пароль (ещё раз)',
            onBlur: onChangeRepeatPasswordBind,
        });

        const ButtonRegistration = new Button({
            type: 'submit',
            text: 'Зарегистрироваться',
            onClick: onRegistration,
        });

        this.children = {
            ...this.children,
            InputEmail,
            InputLogin,
            InputFirstName,
            InputSecondName,
            InputPhone,
            InputPassword,
            InputRepeatPassword,
            ButtonRegistration,
        };
    }

    onChangeLogin(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validateLogin(inputValue);

        this.children.InputLogin.setProps({
            errorText: validationResult.errorText,
        });

        this.setProps({ login: inputValue });
    }

    onChangePassword(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validatePassword(inputValue);

        this.children.InputPassword.setProps({
            errorText: validationResult.errorText,
        });

        this.setProps({ password: inputValue });
    }

    onChangeEmail(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validateEmail(inputValue);

        this.children.InputEmail.setProps({
            errorText: validationResult.errorText,
        });

        this.setProps({ email: inputValue });
    }

    onChangeFirstName(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validateName(inputValue);

        this.children.InputFirstName.setProps({
            errorText: validationResult.errorText,
        });

        this.setProps({ first_name: inputValue });
    }

    onChangeSecondName(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validateName(inputValue);

        this.children.InputSecondName.setProps({
            errorText: validationResult.errorText,
        });

        this.setProps({ second_name: inputValue });
    }

    onChangePhone(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validatePhone(inputValue);

        this.children.InputPhone.setProps({
            errorText: validationResult.errorText,
        });

        this.setProps({ phone: inputValue });
    }

    onChangeRepeatPassword(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validatePasswordsMatch(
            this.props.password,
            inputValue,
        );

        this.children.InputRepeatPassword.setProps({
            errorText: validationResult.errorText,
        });

        this.setProps({ newpassword: inputValue });
    }

    onRegistration(e: Event) {
        e.preventDefault();
        const { results, errors } = Validator.validateForm(this.props);

        if (errors.length > 0) {
            Object.keys(results).forEach((key) => {
                if (!results[key as keyof typeof results].isValid) {
                    this.children[
                        `Input${key.charAt(0).toUpperCase() + key.slice(1)}`
                    ].setProps({
                        errorText:
                            results[key as keyof typeof results].errorText,
                    });
                }
            });
            return;
        }

        const { email, login, first_name, second_name, phone, password } =
            this.props;

        console.log({
            email,
            login,
            first_name,
            second_name,
            phone,
            password,
        });
    }

    render(): string {
        return `
        <div>
            <form action='#' class='form__{{formType}}'>
                <div class='form__header'>
                    <h1 class='form__header-title'>{{formHeaderTitle}}</h1>
                </div>

                <div class='form__body'>
                    {{{ InputEmail }}}
                    {{{ InputLogin }}}
                    {{{ InputFirstName }}}
                    {{{ InputSecondName }}}
                    {{{ InputPhone }}}
                    {{{ InputPassword }}}
                    {{{ InputRepeatPassword }}}
                    <div class='form__body-buttons'>
                        {{{ ButtonRegistration }}}
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

export { FormRegistration };
