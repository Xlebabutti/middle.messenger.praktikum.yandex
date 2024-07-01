import Block from '../../utils/block';

class InputError extends Block {
    render(): string {
        return `
            <span class="error-{{name}}">{{errorText}}</span>
        `;
    }
}

export { InputError };
