import Block from '../../utils/block';
import { Input } from './input';
import { InputProps } from './input-props';

class InputErorr extends Block {
    constructor(props: InputProps) {
        super({
            Input: new Input({
                ...props,
                events: { blur: props.onBlur || (() => {}) },
            }),
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (oldProps === newProps) return false;
        console.log(oldProps, newProps, 'update');
        return true;
    }

    render(): string {
        return `
            <div class="input">
                {{{ Input }}}
            </div>
        `;
    }
}
