/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { Block, Props } from '../../../utils/block';
import { Button } from '../../button';

class ProfileImage extends Block {
    constructor(props: Props) {
        super({ ...props });
        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    init(): void {
        const ButtonChangesAvatar = new Button({
            title: 'Поменять аватар',
        });

        this.children = {
            ...this.children,
            ButtonChangesAvatar,
        };
    }

    render(): string {
        return `
        <div class="profile__header">
            <div class="profile__header-img">
                <img src="https://ya-praktikum.tech/api/v2/resources/{{profileImgSrc}}" alt="аватар профиля" />
                <span class="profile__header-img-overlay">Поменять аватар</span>
            </div>
            <h2 class="profile__header-title">{{profileTitle}}</h2>
        </div>
        `;
    }
}

export { ProfileImage };
