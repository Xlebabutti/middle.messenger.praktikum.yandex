import Block from '../../../utils/block';

class ProfileAvatar extends Block {
    constructor(props: unknown) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    render(): string {
        return `
        <div class="{{classDiv}}">
            <img
                class="{{classImg}}"
                src="{{src}}"
                alt="{{alt}}"
            />
            <div
                class="{{classTitle}}"
            >{{title}}</div>
        </div>
           
        `;
    }
}

export { ProfileAvatar };
