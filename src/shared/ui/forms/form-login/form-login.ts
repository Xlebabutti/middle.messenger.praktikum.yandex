import Block from '../../../utils/block';
import { Button } from '../../button';
import { InputElement } from '../../input';

class FormLogin extends Block {
    constructor(props: unknown) {
        super({
            ...props,
            InputLogin: new InputElement({
                type: 'login',
                name: 'login',
                placeholder: 'login',
                label: 'test login',
                onBlur: (e) => {
                    if (e.target.value === 'erorr') {
                        console.log('error');
                    }
                },
            }),
            InputPassword: new InputElement({
                type: 'password',
                name: 'password',
                placeholder: 'password',
                label: 'test password',
            }),
            ButtonLogin: new Button({
                type: 'primary',
                text: 'Авторизоваться',
            }),
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
