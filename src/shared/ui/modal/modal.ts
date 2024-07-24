/* eslint-disable @typescript-eslint/ban-ts-comment */
import { updateAvatar } from '../../../entities/user/repositories/user';
import { Block, Props } from '../../utils/block';
// import Store from '../../utils/store';
import { Button } from '../button';
import { InputElement } from '../input';

class ModalWindow extends Block {
    constructor(props: Props) {
        super({
            ...props,
            InputModal: new InputElement({
                ...props,
            }),
            ButtonModal: new Button({
                ...props,
                onClick: () => this.sendFileOnServer(),
            }),
        });
    }
    sendFileOnServer() {
        if (this.props.modalFile) {
            updateAvatar(this.props.modalFile);
            console.log();
            this.props.modalOpen = false;
            return;
        }
        console.error('no avatar file');
    }
    render(): string {
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
