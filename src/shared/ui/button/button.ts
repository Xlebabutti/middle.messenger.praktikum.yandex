import Block from '../../utils/block';
import { ButtonProps } from './button.types';

export class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {}),
        };
    }

    protected render(): string {
        const { type, text } = this.props;
        return `
            <button class="button ${{ type }}">${{ text }}</button>
        `;
    }
}
