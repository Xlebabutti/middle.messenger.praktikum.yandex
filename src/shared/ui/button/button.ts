import Block from '../../utils/block';
import { ButtonProps } from './button-props';

export class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    protected render(): string {
        return `
            <button class="button {{ type }}">{{ text }}</button>
        `;
    }
}
