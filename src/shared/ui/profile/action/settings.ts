/* eslint-disable @typescript-eslint/no-explicit-any */
import { Block, Props } from '../../../utils/block';

class ProfileSettings extends Block {
    [x: string]: any;
    constructor(props: Props) {
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
