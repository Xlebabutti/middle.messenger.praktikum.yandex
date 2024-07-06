/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import Block, { Props } from '../../utils/block';
import { Input } from './input';
import { InputError } from './input-erorr';
import { InputLabel } from './input-lable';
import { InputProps } from './input-props';

class InputElement extends Block {
    constructor(props: InputProps) {
        super({
            ...props,
            Input: new Input({
                ...props,
                events: {
                    blur: props.onBlur || (() => {}),
                    change: props.onChange || (() => {}),
                },
            }),
            InputLabel: new InputLabel({ ...props }),
            InputError: new InputError({
                error: props.errorText,
            }),
        });
    }

    componentDidUpdate(oldProps: Props, newProps: Props): boolean {
        if (oldProps === newProps) return false;
        this.children.InputError.setProps(newProps);
        return true;
    }

    render(): string {
        return `
            <div class='{{ divInputClass }}'>
                {{{ Input }}}
                {{{ InputLabel }}}
                {{{ InputError }}}
            </div>
        `;
    }
}

export { InputElement };
