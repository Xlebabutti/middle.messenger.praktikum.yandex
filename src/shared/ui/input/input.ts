import Block, { Props } from '../../utils/block';
// import { InputProps } from './input-props';

class Input extends Block {
    constructor(props: Props) {
        super(props);
    }

    render(): string {
        return `
            <input
                type="{{props.type}}"
                name="{{name}}"
                id="{{name}}"
                placeholder="{{placeholder}}"
                value="{{value}}"
            />{{inputText}}
            <label for="{{name}}" class="label">{{label}}</label>
            
        `;
    }
}

export { Input };
