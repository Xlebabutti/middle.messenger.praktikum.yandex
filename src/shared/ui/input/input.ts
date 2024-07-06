import { Block, Props } from '../../utils/block';

class Input extends Block {
    constructor(props: Props) {
        super({ ...props });
    }

    render(): string {
        return `
            <input
                class='{{class}}'
                type="{{type}}"
                name="{{name}}"
                id="{{name}}"
                placeholder="{{placeholder}}"
                value="{{value}}"
                {{#if readonlyStatus}}
                    readonly
                {{/if}}    
            />{{inputText}}
        `;
    }
}

export { Input };
