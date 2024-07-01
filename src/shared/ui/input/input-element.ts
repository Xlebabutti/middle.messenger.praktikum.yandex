import Block from '../../utils/block';
import { Input } from './input';
import { InputError } from './input-erorr';
import { InputProps } from './input-props';

class InputElement extends Block {
    constructor(props: InputProps) {
        super({
            Input: new Input({
                ...props,
                events: { blur: props.onBlur || (() => {}) },
            }),
            InputError: new InputError({
                error: props.errorText,
            }),
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (oldProps === newProps) return false;

        console.log(oldProps, newProps, 'update');

        this.children.InputError.setProps(newProps);
        return true;
    }

    render(): string {
        return `
            <div class="input">
                {{{ Input }}}
                {{{ InputError }}}
            </div>
        `;
    }
}

export { InputElement };
