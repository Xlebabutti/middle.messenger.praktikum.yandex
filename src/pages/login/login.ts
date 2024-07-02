import { FormLogin } from '../../shared/ui';
import Block from '../../shared/utils/block';

class LoginPage extends Block {
    constructor(props: unknown) {
        super({
            ...props,
            Form: new FormLogin({
                formType: 'login',
                formHeaderTitle: 'Login',
                formFooterTitle: 'Don’t have an account?',
                formFooterLink: 'Register here',
            }),
        });
    }

    protected render(): string {
        return `
            <div class="card">
                <section class="section__login">
                    {{{ Form }}}
                </section>
            </div>
        `;
    }
}

export { LoginPage };
