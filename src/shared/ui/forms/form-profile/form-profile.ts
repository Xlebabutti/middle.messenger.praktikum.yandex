import Block from '../../../utils/block';

class FormProfile extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    protected render(): string {
        return `
            <form action='#' class='form__{{formType}}'>
                <ul class='profile__body-info'>
                    {{{ InfoEmail }}}
                    {{{ InfoLogin }}}
                    {{{ InfoFirstName }}}
                    {{{ InfoSecondName }}}
                    {{{ InfoPhone }}}
                </ul>
                <ul class='profile__footer-actions'>
                    {{{ ActionChangeData }}}
                    {{#if changePassword}}
                        {{{ ActionChangePassword }}}
                    {{/if}}
                    {{{ ActionOut }}}
                </ul>
            </form>
        `;
    }
}

export { FormProfile };
