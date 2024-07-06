import Block, { Props } from '../../utils/block';

export class ButtonImg extends Block {
    constructor(props: Props) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    render(): string {
        return `
            <button class="{{class}}" type="{{type}}">
                <img src="{{src}}" alt="{{alt}}" />
            </button>
        `;
    }
}
