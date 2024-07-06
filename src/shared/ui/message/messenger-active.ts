/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { Block, Props } from '../../utils/block';
import { Validator } from '../../utils/validator';
import { ButtonImg } from '../button';
import { InputElement } from '../input';

import { ProfileAvatar, ProfileSettings } from '../profile';

class MessageActive extends Block {
    constructor(props: Props) {
        super({
            ...props,
            events: {
                click: props.onClick,
            },
        });
    }

    init(): void {
        const onSettingsBind = this.onSettings.bind(this);
        const onAttachBind = this.onAttach.bind(this);
        const onAvatarBind = this.onAvatar.bind(this);
        const onSendBind = this.onSend.bind(this);
        const onChangeMessageBind = this.onChangeMessage.bind(this);

        const ButtonSendMessage = new ButtonImg({
            class: 'messenger__right-footer-send',
            type: 'submit',
            src: '/arrow-right.svg',
            alt: 'отправить сообщение',
            onClick: onSendBind,
        });

        const ButtonAttach = new ButtonImg({
            class: 'messenger__right-footer-file',
            src: '/paperclip.svg',
            alt: 'добавить файл',
            onClick: onAttachBind,
        });

        const InputMessage = new InputElement({
            class: 'messenger__right-footer-messege',
            type: 'text',
            onBlur: onChangeMessageBind,
        });

        const Avatar = new ProfileAvatar({
            classDiv: 'messenger__right-avatar',
            classImg: 'avatar-img messenger__right-avatar-img',
            classTitle: 'avatar-title messenger__right-avatar-title',
            src: '/not-avatar.svg',
            alt: 'аватар профиля',
            title: 'Иван',
            onClick: onAvatarBind,
        });

        const Settings = new ProfileSettings({
            text: '...',
            onClick: onSettingsBind,
        });

        this.children = {
            ButtonSendMessage,
            ButtonAttach,
            InputMessage,
            Avatar,
            Settings,
        };
    }

    onSettings() {
        console.log('Setting click');
    }

    onSend() {
        const { message } = this.props;
        if (!message) {
            this.children.InputMessage.setProps({
                errorText: 'Не должно быть пустым.',
            });
        }
        console.log({
            message,
        });
    }

    onAttach() {
        console.log('onAttach click');
    }

    onAvatar() {
        console.log('onAvatar click');
    }

    onChangeMessage(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value;
        const validationResult = Validator.validateMessage(inputValue);

        this.children.InputMessage.setProps({
            errorText: validationResult.errorText,
        });

        this.setProps({ message: inputValue });
    }

    render(): string {
        return `
            <div class="messenger__right">
                <div class="messenger__right-header">
                    {{{Avatar}}}
                    {{{ Settings }}}
                </div>
                <div class="messenger__right-body">
                    <div class="messenger__right-body-in">
                        <p>Привет! Смотри, тут всплыл интересный кусок лунной
                            космической истории — НАСА в какой-то момент попросила
                            Хассельблад адаптировать модель SWC для полетов на Луну.
                            Сейчас мы все знаем что астронавты летали с моделью 500 EL —
                            и к слову говоря, все тушки этих камер все еще находятся на
                            поверхности Луны, так как астронавты с собой забрали только
                            кассеты с пленкой. Хассельблад в итоге адаптировал SWC для
                            космоса, но что-то пошло не так и на ракету они так никогда
                            и не попали. Всего их было произведено 25 штук, одну из них
                            недавно продали на аукционе за 45000 евро.</p>
                    </div>
                    <div class="messenger__right-body-out">
                        <p>Привет!</p>
                    </div>
                </div>
                <div class="messenger__right-footer">
                    {{{ ButtonAttach }}}
                    {{{ InputMessage }}}
                    {{{ ButtonSendMessage }}}
                </div>
            </div>
        `;
    }
}

export { MessageActive };
