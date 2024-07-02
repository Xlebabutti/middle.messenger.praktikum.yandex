import Block from '../../utils/block';
import { Button } from '../button';
import { InputElement } from '../input';

class ModalWindow extends Block {
    constructor(props) {
        super({
            ...props,
            InputModal: new InputElement({
                ...props,
            }),
            ButtonModal: new Button({
                ...props,
            }),
        });
    }

    protected render(): string {
        return `
        <div>
            {{#if modalOpen}}
                <div class='modal' id='modal'>
                    <div class='modal-content {{errorTitle}}'>
                        <h3>{{modalTitle}}</h3>
                        {{#if chooseFile}}
                            <p class='modal-file'>{{ modalFile }}</p>
                        {{/if}}
                        {{{ InputModal }}}
                        {{{ ButtonModal }}}
                        <div class="error">{{errorModalName}}</div>
                    </div>
                </div>
            {{/if}}
        </div>
        `;
    }
}

export { ModalWindow };
