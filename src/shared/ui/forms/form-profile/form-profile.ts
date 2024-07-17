import { Block, Props } from '../../../utils/block';

class FormProfile extends Block {
    constructor(props: Props) {
        super({
            ...props,
        });
    }

    render(): string {
        return `
            <form action='#' class='form__{{formType}}'>
            {{#if changePassword}}
                    <ul class='profile__body-info'>
                        {{{ InfoEmail }}}
                        {{{ InfoLogin }}}
                        {{{ InfoFirstName }}}
                        {{{ InfoSecondName }}}
                        {{{ InfoPhone }}}
                    </ul>
                    {{#if changeData}}
                        <ul class='profile__footer-buttons'>
                            {{{ ButtonChangeData }}}
                        </ul>
                    {{else}}
                        <ul class='profile__footer-actions'>
                            {{{ ActionChangeData }}}
                            {{{ ActionChangePassword }}}
                            {{{ ActionOut }}}
                        </ul>  
                    {{/if}}
                    
                {{else}}
                    <ul class='profile__body-info'>
                        {{{ OldPassword }}}
                        {{{ NewPassword }}}
                        {{{ RepeatNewPassword }}}
                    </ul>
                    <ul class='profile__footer-buttons'>
                        {{{ ButtonChangesPassword }}}
                    </ul>
                    
               {{/if}}
            </form>
        `;
    }
}

export { FormProfile };
