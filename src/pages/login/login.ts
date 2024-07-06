import { FormLogin } from '../../shared/ui';
import Block, { Props } from '../../shared/utils/block';

class LoginPage extends Block {
    constructor(props: Props) {
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

    render(): string {
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
