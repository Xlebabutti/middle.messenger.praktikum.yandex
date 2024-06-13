import { Form } from '../../shared/ui/form/form';
import Block from '../../shared/utils/block';

class LoginPage extends Block {
    constructor(props: unknown) {
        super({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            ...props,
            Form: new Form({}),
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
