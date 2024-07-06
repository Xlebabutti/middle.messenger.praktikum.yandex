import Block from '../../../utils/block';

class ProfileSettings extends Block {
    constructor(props: unknown) {
        super(props);

        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    render(): string {
        return `
            <div class="{{messenger__right-settings}}">{{text}}</div> 
        `;
    }
}

export { ProfileSettings };
