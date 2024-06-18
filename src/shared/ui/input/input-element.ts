import Block from '../../utils/block';
import { Input } from './input';
import { InputProps } from './input-props';
// import { InputProps } from './input-props';

class InputElement extends Block {
    constructor(props: InputProps) {
        super({
            Input: new Input({
                ...props,
                events: { blur: props.onBlur || (() => {}) },
            }),
        });
    }

    // componentDidUpdate(oldProps: any, newProps: any): boolean {
    //     if (oldProps === newProps) return false;
    // }

    render(): string {
        return `
            <div class="input">
                {{{ Input }}}
            </div>
        `;
    }
}

export { InputElement };
