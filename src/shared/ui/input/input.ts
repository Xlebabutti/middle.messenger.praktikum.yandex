import Block, { Props } from '../../utils/block';

class Input extends Block {
    constructor(props: Props) {
        super(props);
    }

    render(): string {
        return `
        <div>
            <input
                class='{{class}}'
                type="{{type}}"
                name="{{name}}"
                id="{{name}}"
                placeholder="{{placeholder}}"
                value="{{value}}"
                {{readonly}}
            />{{inputText}}
            <label for="{{name}}" class="label">{{Inputlabel}}</label>
            </div>
        `;
    }
}

export { Input };
