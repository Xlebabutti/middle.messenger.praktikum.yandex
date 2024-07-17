import { Block } from '../../utils/block';

class InputLabel extends Block {
    render(): string {
        return `
            <label for="{{name}}" class="label">{{InputLabel}}</label>
        `;
    }
}

export { InputLabel };
