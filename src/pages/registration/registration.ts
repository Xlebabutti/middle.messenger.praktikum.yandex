import { FormRegistration } from '../../shared/ui';
import Block, { Props } from '../../shared/utils/block';

class RegistrationPage extends Block {
    constructor(props: Props) {
        super({
            ...props,
            Form: new FormRegistration({
                formType: 'registration',
                formHeaderTitle: 'Регистрация',
                formFooterLink: 'Войти',
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

export { RegistrationPage };
