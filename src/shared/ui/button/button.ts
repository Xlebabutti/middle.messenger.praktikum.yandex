import Block, { Props } from '../../utils/block';

export class Button extends Block {
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
