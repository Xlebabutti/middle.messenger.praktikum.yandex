/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import Block, { Props } from '../../../utils/block';
import { InputElement } from '../../input';
import { InputError } from '../../input/input-erorr';

class ProfileInfoItem extends Block {
    constructor(props: Props) {
        super({
            ...props,
            Error: new InputError({
                error: props.errorText,
            }),
            Input: new InputElement({
                ...props,
                events: { blur: props.onBlur || (() => {}) },
            }),
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (oldProps === newProps) return false;
        this.children.Error.setProps(newProps);
        return true;
    }

    render(): string {
        return `
            <li class='profile__body-info-list'>
                <span class='profile__body-info-name'>{{label}}</span>
                {{{ Input }}}
                {{{ Error }}}
            </li>          
            
        `;
    }
}

export { ProfileInfoItem };
