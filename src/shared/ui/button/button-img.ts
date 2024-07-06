import Block from '../../utils/block';

export class ButtonImg extends Block {
    constructor(props) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    protected render(): string {
        return `
            <button class="{{class}}" type="{{type}}">
                <img src="{{src}}" alt="{{alt}}" />
            </button>
        `;
    }
}
