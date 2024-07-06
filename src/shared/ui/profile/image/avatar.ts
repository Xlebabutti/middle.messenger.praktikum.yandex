/* eslint-disable @typescript-eslint/no-explicit-any */
import Block, { Props } from '../../../utils/block';

class ProfileAvatar extends Block {
    [x: string]: any;
    constructor(props: Props) {
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
