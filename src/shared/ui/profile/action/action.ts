import Block from '../../../utils/block';

class ProfileAction extends Block {
    constructor(props: unknown) {
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
                        href='{{href}}'
                    >{{profileActionsName}}</a>
                </li>
          
        `;
    }
}

export { ProfileAction };
