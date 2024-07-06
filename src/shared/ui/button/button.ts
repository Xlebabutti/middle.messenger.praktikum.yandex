/* eslint-disable @typescript-eslint/no-explicit-any */
import Block, { Props } from '../../utils/block';

export class Button extends Block {
    [x: string]: any;
    constructor(props: Props) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    render(): string {
        return `
            <button class="button {{ type }}">{{ text }}</button>
        `;
    }
}
