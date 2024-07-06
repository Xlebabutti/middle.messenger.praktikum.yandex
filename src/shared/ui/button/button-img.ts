import Block, { Props } from '../../utils/block';

export class ButtonImg extends Block {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
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
