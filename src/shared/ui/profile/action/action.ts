import { Block, Props } from '../../../utils/block';

class ProfileAction extends Block {
    constructor(props: Props) {
        super(props);

        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    render(): string {
        return `
            <li class='profile__footer-item'>
                <a
                    class='profile__footer-name'
                >{{profileActionsName}}</a>
            </li>
        `;
    }
}

export { ProfileAction };
