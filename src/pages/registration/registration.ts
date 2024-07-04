import { FormRegistration } from '../../shared/ui';
import Block from '../../shared/utils/block';

class RegistrationPage extends Block {
    constructor(props: unknown) {
        super({
            ...props,
            Form: new FormRegistration({
                formType: 'registration',
                formHeaderTitle: 'Регистрация',
                formFooterLink: 'Войти',
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

export { RegistrationPage };
